import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;

varying vec2 vUv;
varying vec3 vPos;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float starShape(vec2 uv, float size) {
  float d = length(uv);
  float core = 1.0 - smoothstep(0.0, size * 0.3, d);
  float glow = 1.0 - smoothstep(0.0, size, d);
  return max(core, glow * 0.4);
}

void main() {
  vec3 dir = normalize(vPos);
  float height = dir.y * 0.5 + 0.5;

  // Deep space background with subtle nebula colors
  vec3 top = vec3(0.005, 0.01, 0.03);
  vec3 bottom = vec3(0.0, 0.0, 0.01);
  vec3 bg = mix(bottom, top, smoothstep(0.0, 1.0, height));

  // Nebula bands
  float nebula1 = sin(dir.y * 12.0 + dir.x * 8.0 + uTime * 0.005) * 0.5 + 0.5;
  float nebula2 = sin(dir.z * 10.0 - dir.x * 6.0 + uTime * 0.003) * 0.5 + 0.5;
  vec3 nebulaColor = vec3(0.15, 0.02, 0.08) * nebula1 * 0.15 +
                     vec3(0.02, 0.05, 0.12) * nebula2 * 0.1;
  bg += nebulaColor;

  // Stars — two layers for dense + bright
  vec3 starColor = vec3(0.0);
  for (int layer = 0; layer < 2; layer++) {
    float res = layer == 0 ? 120.0 : 40.0;
    vec2 grid = floor(vUv * res);
    vec2 offset = fract(vUv * res);
    float seed = hash(grid + float(layer) * 31.7);

    vec2 starPos = vec2(
      hash(grid + 0.1 + float(layer) * 13.3),
      hash(grid + 0.3 + float(layer) * 7.7)
    );

    float brightness = hash(grid + 5.7 + float(layer) * 3.1);
    float size = layer == 0
      ? 0.008 + brightness * 0.015
      : 0.02 + brightness * 0.06;

    float twinkle = 0.7 + 0.3 * sin(uTime * (1.5 + seed * 4.0) + seed * 6.28);
    vec2 d = offset - starPos;
    float starVal = starShape(d, size);
    float starOut = starVal * brightness * twinkle;

    if (layer == 0) starOut *= 1.5;

    // Star colors
    vec3 col = vec3(1.0);
    float colorRoll = hash(grid * 1.3 + float(layer) * 17.1);
    if (colorRoll > 0.92) col = vec3(0.6, 0.75, 1.0);  // blue
    if (colorRoll > 0.97) col = vec3(1.0, 0.85, 0.5);  // warm
    if (colorRoll > 0.99) col = vec3(1.0, 0.5, 0.3);   // red giant

    // Bright stars get a cross flare
    float flare = 0.0;
    if (brightness > 0.85 && layer == 1) {
      vec2 a = abs(d);
      float cross = exp(-a.x * 40.0) + exp(-a.y * 40.0);
      flare = cross * 0.3 * brightness * twinkle;
    }

    starColor += col * (starOut * 3.0 + flare);
  }

  vec3 finalColor = bg + starColor;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export class Stars {
  private mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.SphereGeometry(1000, 64, 48);
    geometry.scale(-1, 1, 1);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      side: THREE.BackSide,
      depthWrite: false,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }

  update(dt: number): void {
    const mat = this.mesh.material as THREE.ShaderMaterial;
    if (mat.uniforms?.uTime) mat.uniforms.uTime.value += dt;
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }
}
