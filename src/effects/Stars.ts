import * as THREE from 'three';

export class Stars {
  private group: THREE.Group;
  private skyMat: THREE.ShaderMaterial;
  private time = 0;

  constructor() {
    this.group = new THREE.Group();

    const skyGeom = new THREE.SphereGeometry(50000, 64, 48);
    skyGeom.scale(-1, 1, 1);
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        varying vec3 vPos;
        uniform float uTime;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float hash1(float n) { return fract(sin(n) * 43758.5453); }

        float star(vec2 uv, float density) {
          vec2 g = floor(uv * density);
          vec2 f = fract(uv * density) - 0.5;
          float h = hash(g);
          float dist = length(f - vec2(hash(g + 1.7), hash(g + 3.1)) * 0.8 + 0.1);
          float bright = h;
          float size = 0.05 + 0.08 * h;
          return smoothstep(size, 0.0, dist) * bright;
        }

        // Twinkle: per-star phase + slow brightness modulation
        float twinklingStar(vec2 uv, float density, float amp) {
          vec2 g = floor(uv * density);
          float h = hash(g);
          // Phase unique per star; slow 0.5–2 Hz twinkle
          float phase = h * 6.2832;
          float tw = 0.5 + 0.5 * sin(uTime * (0.6 + h * 1.4) + phase);
          return star(uv, density) * (1.0 + (tw - 0.5) * amp);
        }

        void main() {
          vec3 dir = normalize(vPos);
          float height = dir.y * 0.5 + 0.5;

          vec3 top = vec3(0.02, 0.03, 0.08);
          vec3 bottom = vec3(0.001, 0.001, 0.03);
          vec3 col = mix(bottom, top, smoothstep(0.0, 1.0, height));

          // Slow drifting nebula bands
          float neb1 = sin(dir.y * 12.0 + dir.x * 8.0 + uTime * 0.02) * 0.5 + 0.5;
          float neb2 = sin(dir.z * 10.0 - dir.x * 6.0 - uTime * 0.015) * 0.5 + 0.5;
          col += vec3(0.15, 0.02, 0.08) * neb1 * 0.12;
          col += vec3(0.01, 0.04, 0.12) * neb2 * 0.08;

          // Dense dim stars (background) — gentle twinkle
          float s1 = twinklingStar(vUv, 200.0, 0.25) * 0.6;
          col += vec3(s1);

          // Bright foreground stars — stronger twinkle
          float s2 = twinklingStar(vUv, 60.0, 0.6) * 1.5;
          float s3 = twinklingStar(vUv + vec2(13.7, 7.3), 40.0, 0.7) * 2.0;
          col += vec3(s2 + s3);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.group.add(new THREE.Mesh(skyGeom, this.skyMat));
  }

  update(dt: number): void {
    this.time += dt;
    this.skyMat.uniforms.uTime!.value = this.time;
  }

  getMesh(): THREE.Group {
    return this.group;
  }
}
