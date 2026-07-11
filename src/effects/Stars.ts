import * as THREE from 'three';

/**
 * Two-layer starfield:
 * 1. Procedural shader sky dome (nebula + tiny stars)
 * 2. THREE.Points with bright stars (reliable rendering)
 */
export class Stars {
  private group: THREE.Group;

  constructor() {
    this.group = new THREE.Group();

    // ── Sky dome (nebula + dim star background) ──
    const skyGeom = new THREE.SphereGeometry(50000, 64, 48);
    skyGeom.scale(-1, 1, 1);
    const skyMat = new THREE.ShaderMaterial({
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
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPos;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        void main() {
          vec3 dir = normalize(vPos);
          float height = dir.y * 0.5 + 0.5;

          // Nebula background
          vec3 top = vec3(0.015, 0.025, 0.06);
          vec3 bottom = vec3(0.002, 0.002, 0.025);
          vec3 col = mix(bottom, top, smoothstep(0.0, 1.0, height));

          float neb1 = sin(dir.y * 12.0 + dir.x * 8.0 + uTime * 0.005) * 0.5 + 0.5;
          float neb2 = sin(dir.z * 10.0 - dir.x * 6.0 + uTime * 0.003) * 0.5 + 0.5;
          col += vec3(0.12, 0.01, 0.06) * neb1 * 0.12;
          col += vec3(0.01, 0.03, 0.10) * neb2 * 0.08;

          // Tiny procedural stars (dense, dim)
          vec2 grid = floor(vUv * 120.0);
          float seed = hash(grid);
          float b = hash(grid + 5.7);
          float twinkle = 0.7 + 0.3 * sin(uTime * (1.5 + seed * 4.0));
          vec2 off = fract(vUv * 120.0) - vec2(hash(grid + 0.1), hash(grid + 0.3));
          float d = length(off);
          float star = smoothstep(0.015, 0.0, d) * b * twinkle * 0.5;
          col += vec3(star);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      uniforms: { uTime: { value: 0 } },
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.group.add(new THREE.Mesh(skyGeom, skyMat));

    // ── Bright star points (guaranteed visible, THREE.Points) ──
    const starCount = 800;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      // Uniform random direction on sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 48000 + Math.random() * 2000;
      positions[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      positions[i * 3 + 1] = Math.cos(phi) * r;
      positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;

      // Star color
      const colorRoll = Math.random();
      if (colorRoll > 0.97) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.85; colors[i * 3 + 2] = 0.5;  // warm
      } else if (colorRoll > 0.92) {
        colors[i * 3] = 0.6; colors[i * 3 + 1] = 0.75; colors[i * 3 + 2] = 1.0;   // blue
      } else if (colorRoll > 0.99) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.5; colors[i * 3 + 2] = 0.3;    // red
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 1.0; colors[i * 3 + 2] = 1.0;    // white
      }

      sizes[i] = 0.5 + Math.random() * 1.5;
    }

    const ptGeom = new THREE.BufferGeometry();
    ptGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    ptGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    ptGeom.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const ptMat = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      transparent: false,
      opacity: 1,
      depthTest: false,
      sizeAttenuation: false,
    });
    const points = new THREE.Points(ptGeom, ptMat);
    this.group.add(points);
  }

  update(dt: number): void {
    const sky = this.group.children[0] as THREE.Mesh;
    const mat = sky.material as THREE.ShaderMaterial;
    if (mat.uniforms?.uTime) mat.uniforms.uTime.value += dt;
  }

  getMesh(): THREE.Group {
    return this.group;
  }
}
