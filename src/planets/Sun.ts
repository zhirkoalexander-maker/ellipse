import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Body } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor;
uniform float uIntensity;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = vUv * 6.0;
  float n = fbm(uv + uTime * 0.05);
  float bright = 0.6 + n * 0.4;
  vec3 col = uColor * bright;
  float alpha = (0.8 + n * 0.2) * uIntensity;
  gl_FragColor = vec4(col, alpha);
}
`;

export class Sun extends Body {
  light: THREE.DirectionalLight;
  visualRadius: number;
  mesh: THREE.Mesh;

  constructor(position: Vec3, velocity: Vec3, mass = 2e26) {
    super('sun', mass, position, velocity);

    // Small visible sphere — not engulfing the solar system
    this.visualRadius = 15;

    const geom = new THREE.SphereGeometry(this.visualRadius, 32, 16);
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0xffcc00) },
        uIntensity: { value: 1.5 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    this.light = new THREE.DirectionalLight(0xffeedd, 2.5);
    this.light.position.set(
      this.mesh.position.x + 100,
      this.mesh.position.y + 50,
      this.mesh.position.z
    );

    // Outer glow sprite (bright star-like)
    const spriteMap = createSunGlowTexture();
    const spriteMat = new THREE.SpriteMaterial({
      map: spriteMap,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 1,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(200, 200, 1);
    this.mesh.add(sprite);

    this.sunMaterial = mat;
  }

  private sunMaterial: THREE.ShaderMaterial;

  update(dt: number): void {
    (this.sunMaterial.uniforms.uTime as { value: number }).value += dt;
  }

  syncMesh(): void {
    this.mesh.position.set(
      this.position[0] * VS,
      this.position[1] * VS,
      this.position[2] * VS
    );
    this.light.position.set(
      this.mesh.position.x + 100,
      this.mesh.position.y + 50,
      this.mesh.position.z
    );
  }
}

function createSunGlowTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255, 220, 100, 1)');
  g.addColorStop(0.1, 'rgba(255, 200, 80, 0.8)');
  g.addColorStop(0.3, 'rgba(255, 160, 40, 0.4)');
  g.addColorStop(0.5, 'rgba(255, 100, 20, 0.15)');
  g.addColorStop(0.7, 'rgba(255, 60, 10, 0.05)');
  g.addColorStop(1, 'rgba(255, 0, 0, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}
