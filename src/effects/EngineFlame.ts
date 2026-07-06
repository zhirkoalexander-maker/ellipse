import * as THREE from 'three';
import { PART_SCALE } from '../config/constants';

function createSpriteTexture(): THREE.Texture {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('no 2d context');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,200,0.9)');
    gradient.addColorStop(0.7, 'rgba(255,200,100,0.5)');
    gradient.addColorStop(1, 'rgba(255,150,50,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  } catch {
    return new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, THREE.RGBAFormat);
  }
}

const FLAME_SCALE = PART_SCALE / 0.36;
const PARTICLE_COUNT = 200;

export class EngineFlame {
  private particles: THREE.Points;
  private positions: Float32Array;
  private velocities: Float32Array;
  private lifetimes: Float32Array;
  private ages: Float32Array;
  private colors: Float32Array;
  private active: boolean;
  private nextIndex: number;
  private spriteTex: THREE.Texture;

  constructor() {
    this.active = false;
    this.nextIndex = 0;

    this.positions = new Float32Array(PARTICLE_COUNT * 3);
    this.velocities = new Float32Array(PARTICLE_COUNT * 3);
    this.lifetimes = new Float32Array(PARTICLE_COUNT);
    this.ages = new Float32Array(PARTICLE_COUNT);
    this.colors = new Float32Array(PARTICLE_COUNT * 3);

    this.ages.fill(Infinity);

    this.spriteTex = createSpriteTexture();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    const material = new THREE.PointsMaterial({
      size: FLAME_SCALE * 0.3,
      map: this.spriteTex,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.8,
    });

    this.particles = new THREE.Points(geometry, material);
  }

  start(): void {
    this.active = true;
  }

  stop(): void {
    this.active = false;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.ages[i] = this.lifetimes[i]!;
      this.positions[i * 3] = 0;
      this.positions[i * 3 + 1] = 0;
      this.positions[i * 3 + 2] = 0;
    }
    this.particles.geometry.attributes.position!.needsUpdate = true;
    this.particles.geometry.attributes.color!.needsUpdate = true;
  }

  update(dt: number): void {
    if (this.active) {
      const spawnCount = 4 + Math.floor(Math.random() * 2);
      for (let i = 0; i < spawnCount; i++) {
        const idx = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % PARTICLE_COUNT;

        const spread = 0.05 + Math.random() * 0.1;
        this.positions[idx * 3] = (Math.random() - 0.5) * spread * FLAME_SCALE;
        this.positions[idx * 3 + 1] = -(Math.random() * 0.02) * FLAME_SCALE;
        this.positions[idx * 3 + 2] = (Math.random() - 0.5) * spread * FLAME_SCALE;

        const speed = 2 + Math.random() * 3;
        this.velocities[idx * 3] = (Math.random() - 0.5) * 0.3 * FLAME_SCALE;
        this.velocities[idx * 3 + 1] = -(speed * FLAME_SCALE);
        this.velocities[idx * 3 + 2] = (Math.random() - 0.5) * 0.3 * FLAME_SCALE;

        this.lifetimes[idx] = 0.2 + Math.random() * 0.3;
        this.ages[idx] = 0;
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const age_i = this.ages[i]!;
      const lifetime_i = this.lifetimes[i]!;
      if (age_i >= lifetime_i) continue;

      const age = age_i + dt;
      this.ages[i] = age;

      if (age >= lifetime_i) continue;

      const t = age / lifetime_i;
      const i3 = i * 3;

      this.positions[i3] = (this.positions[i3] ?? 0) + (this.velocities[i3] ?? 0) * dt;
      this.positions[i3 + 1] = (this.positions[i3 + 1] ?? 0) + (this.velocities[i3 + 1] ?? 0) * dt;
      this.positions[i3 + 2] = (this.positions[i3 + 2] ?? 0) + (this.velocities[i3 + 2] ?? 0) * dt;

      const damp = Math.exp(-1.5 * dt);
      this.velocities[i3] = (this.velocities[i3] ?? 0) * damp;
      this.velocities[i3 + 2] = (this.velocities[i3 + 2] ?? 0) * damp;

      let r: number, g: number, b: number;
      if (t < 0.2) {
        r = 1; g = 1; b = 1;
      } else if (t < 0.5) {
        const t2 = (t - 0.2) / 0.3;
        r = 1;
        g = 1 - t2 * 0.6;
        b = 1 - t2 * 0.9;
      } else {
        const t2 = (t - 0.5) / 0.5;
        r = 1 - t2 * 0.5;
        g = 0.4 - t2 * 0.4;
        b = 0.1 - t2 * 0.1;
      }

      this.colors[i3] = r;
      this.colors[i3 + 1] = g;
      this.colors[i3 + 2] = b;
    }

    this.particles.geometry.attributes.position!.needsUpdate = true;
    this.particles.geometry.attributes.color!.needsUpdate = true;
  }

  getMesh(): THREE.Points {
    return this.particles;
  }

  dispose(): void {
    this.particles.geometry.dispose();
    (this.particles.material as THREE.PointsMaterial).dispose();
    this.spriteTex.dispose();
  }
}
