import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Body } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

const vertexShader = `
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec2 vUv;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColorCore;
uniform vec3 uColorFlare;
uniform float uIntensity;

varying vec3 vNormal;
varying vec3 vWorldPos;
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
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  float fresnel = pow(1.0 - abs(dot(vNormal, normalize(cameraPosition - vWorldPos))), 2.5);

  vec2 uv = vUv * 10.0;
  float storms = fbm(uv + uTime * 0.05) * 0.5;
  float flares = pow(fbm(uv * 2.0 - uTime * 0.03), 3.0) * 0.3;

  vec3 color = mix(uColorCore, uColorFlare, storms + flares);
  float alpha = (fresnel * 0.4 + storms * 0.3 + flares * 0.5) * uIntensity;

  gl_FragColor = vec4(color, alpha);
}
`;

export class Sun extends Body {
  light: THREE.DirectionalLight;
  visualRadius: number;
  mesh: THREE.Mesh;

  constructor(position: Vec3, velocity: Vec3, mass = 2e26) {
    super('sun', mass, position, velocity);

    this.visualRadius = 696340000 * ORBIT_SCALE * VISUAL_PLANET_MULT;

    const geom = new THREE.SphereGeometry(this.visualRadius, 96, 48);

    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColorCore: { value: new THREE.Color(0xffcc00) },
        uColorFlare: { value: new THREE.Color(0xff4400) },
        uIntensity: { value: 1.0 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    this.light = new THREE.DirectionalLight(0xffeedd, 1.5);
    this.light.position.set(
      this.mesh.position.x + 100,
      this.mesh.position.y + 50,
      this.mesh.position.z
    );

    const coronaGeom = new THREE.SphereGeometry(this.visualRadius * 1.8, 64, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffaa22,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
      side: THREE.BackSide,
    });
    const corona = new THREE.Mesh(coronaGeom, coronaMat);
    this.mesh.add(corona);

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