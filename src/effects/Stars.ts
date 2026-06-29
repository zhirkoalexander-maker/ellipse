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

void main() {
  vec3 dir = normalize(vPos);
  float height = dir.y * 0.5 + 0.5;

  vec3 top = vec3(0.02, 0.03, 0.08);
  vec3 bottom = vec3(0.0, 0.0, 0.02);
  vec3 bg = mix(bottom, top, smoothstep(0.0, 1.0, height));

  float res = 80.0;
  vec2 grid = floor(vUv * res);
  vec2 offset = fract(vUv * res);
  float seed = hash(grid);
  vec2 starPos = vec2(
    hash(grid + 0.1),
    hash(grid + 0.3)
  );
  float brightness = hash(grid + 5.7);
  float size = 0.02 + brightness * 0.04;
  float twinkle = 0.8 + 0.2 * sin(uTime * (1.5 + seed * 3.0) + seed * 6.28);
  vec2 d = offset - starPos;
  float dist = length(d);
  float star = 1.0 - smoothstep(0.0, size, dist);
  float starOut = star * brightness * twinkle;

  vec3 starColor = vec3(1.0);
  if (hash(grid * 1.3) > 0.88) starColor = vec3(0.85, 0.9, 1.0);
  if (hash(grid * 2.7) > 0.95) starColor = vec3(1.0, 0.95, 0.7);

  vec3 finalColor = bg + starColor * starOut * 2.5;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export class Stars {
  private mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.SphereGeometry(1000, 48, 32);
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
