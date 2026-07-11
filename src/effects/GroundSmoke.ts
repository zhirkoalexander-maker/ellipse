import * as THREE from 'three';
import { PART_SCALE, ROCKET_VISUAL_SCALE } from '../config/constants';

const SMOKE_COUNT = 100;
const SMOKE_SCALE = PART_SCALE * ROCKET_VISUAL_SCALE;

export class GroundSmoke {
  private particles: THREE.Points;
  private positions: Float32Array;
  private velocities: Float32Array;
  private lifetimes: Float32Array;
  private ages: Float32Array;
  private active = false;

  constructor() {
    this.positions = new Float32Array(SMOKE_COUNT * 3);
    this.velocities = new Float32Array(SMOKE_COUNT * 3);
    this.lifetimes = new Float32Array(SMOKE_COUNT);
    this.ages = new Float32Array(SMOKE_COUNT);
    this.ages.fill(Infinity);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.3 * SMOKE_SCALE,
      color: 0xcccccc,
      transparent: true,
      opacity: 0.5,
      blending: THREE.NormalBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
  }

  start(): void { this.active = true; }
  stop(): void { this.active = false; }

  update(dt: number): void {
    if (this.active) {
      for (let i = 0; i < 3; i++) {
        let idx = -1;
        let oldestAge = -1;
        for (let j = 0; j < SMOKE_COUNT; j++) {
          if (this.ages[j]! >= this.lifetimes[j]!) {
            if (this.ages[j]! > oldestAge) { oldestAge = this.ages[j]!; idx = j; }
          }
        }
        if (idx < 0) {
          for (let j = 0; j < SMOKE_COUNT; j++) {
            if (this.ages[j]! > oldestAge) { oldestAge = this.ages[j]!; idx = j; }
          }
        }
        if (idx >= 0) {
          this.positions[idx * 3] = (Math.random() - 0.5) * 0.1 * SMOKE_SCALE;
          this.positions[idx * 3 + 1] = 0;
          this.positions[idx * 3 + 2] = (Math.random() - 0.5) * 0.1 * SMOKE_SCALE;
          this.velocities[idx * 3] = (Math.random() - 0.5) * 0.5 * SMOKE_SCALE;
          this.velocities[idx * 3 + 1] = (0.5 + Math.random() * 1.0) * SMOKE_SCALE;
          this.velocities[idx * 3 + 2] = (Math.random() - 0.5) * 0.5 * SMOKE_SCALE;
          this.lifetimes[idx] = 1.0 + Math.random() * 1.5;
          this.ages[idx] = 0;
        }
      }
    }

    const mat = this.particles.material as THREE.PointsMaterial;
    let anyAlive = false;
    const vel = this.velocities;
    const pos = this.positions;
    for (let i = 0; i < SMOKE_COUNT; i++) {
      if (this.ages[i]! >= this.lifetimes[i]!) continue;
      anyAlive = true;
      const age = this.ages[i]! + dt;
      this.ages[i] = age;
      if (age >= this.lifetimes[i]!) continue;
      const i3 = i * 3;
      const vx = vel[i3] ?? 0;
      const vy = vel[i3 + 1] ?? 0;
      const vz = vel[i3 + 2] ?? 0;
      pos[i3] = (pos[i3] ?? 0) + vx * dt;
      pos[i3 + 1] = (pos[i3 + 1] ?? 0) + vy * dt;
      pos[i3 + 2] = (pos[i3 + 2] ?? 0) + vz * dt;
      vel[i3] = vx * 0.98;
      vel[i3 + 2] = vz * 0.98;
    }
    mat.opacity = this.active ? 0.5 : Math.max(0, mat.opacity - dt * 2);
    this.particles.geometry.attributes.position!.needsUpdate = true;
    this.particles.visible = anyAlive || this.active;
  }

  getMesh(): THREE.Points { return this.particles; }
  dispose(): void { this.particles.geometry.dispose(); (this.particles.material as THREE.PointsMaterial).dispose(); }
}
