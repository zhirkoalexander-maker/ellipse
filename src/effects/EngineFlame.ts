import * as THREE from 'three';
import { PART_SCALE } from '../config/constants';

const FLAME_SCALE = PART_SCALE / 0.08;
const PARTICLE_COUNT = 600;

function createCoreTexture(): THREE.Texture {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const g = canvas.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.15, 'rgba(255,255,240,0.95)');
    grad.addColorStop(0.35, 'rgba(255,230,180,0.7)');
    grad.addColorStop(0.55, 'rgba(255,180,100,0.35)');
    grad.addColorStop(0.75, 'rgba(255,120,50,0.15)');
    grad.addColorStop(1, 'rgba(255,80,20,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  } catch {
    return new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, THREE.RGBAFormat);
  }
}

function createOuterTexture(): THREE.Texture {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const g = canvas.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,200,100,0.6)');
    grad.addColorStop(0.3, 'rgba(255,150,60,0.3)');
    grad.addColorStop(0.6, 'rgba(200,80,30,0.1)');
    grad.addColorStop(1, 'rgba(100,30,10,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  } catch {
    return new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, THREE.RGBAFormat);
  }
}

export class EngineFlame {
  private particles: THREE.Points;
  private outerParticles: THREE.Points;
  private positions: Float32Array;
  private velocities: Float32Array;
  private lifetimes: Float32Array;
  private ages: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private active: boolean;
  private nextIndex: number;
  private coreTex: THREE.Texture;
  private outerTex: THREE.Texture;
  private throttleLevel: number = 1;
  private inVacuum: boolean = false;
  private group: THREE.Group;

  constructor() {
    this.active = false;
    this.nextIndex = 0;

    this.positions = new Float32Array(PARTICLE_COUNT * 3);
    this.velocities = new Float32Array(PARTICLE_COUNT * 3);
    this.lifetimes = new Float32Array(PARTICLE_COUNT);
    this.ages = new Float32Array(PARTICLE_COUNT);
    this.colors = new Float32Array(PARTICLE_COUNT * 3);
    this.sizes = new Float32Array(PARTICLE_COUNT);

    this.ages.fill(Infinity);

    this.coreTex = createCoreTexture();
    this.outerTex = createOuterTexture();

    this.group = new THREE.Group();

    // Core particles
    const coreGeom = new THREE.BufferGeometry();
    coreGeom.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    coreGeom.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    coreGeom.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    const coreMat = new THREE.PointsMaterial({
      size: FLAME_SCALE * 0.6,
      map: this.coreTex,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 1.0,
    });

    this.particles = new THREE.Points(coreGeom, coreMat);
    this.group.add(this.particles);

    // Outer glow particles (slightly larger, softer)
    const outerGeom = new THREE.BufferGeometry();
    outerGeom.setAttribute('position', new THREE.BufferAttribute(this.positions.slice(), 3));
    const outerMat = new THREE.PointsMaterial({
      size: FLAME_SCALE * 1.2,
      map: this.outerTex,
      color: 0xff8844,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.5,
    });

    this.outerParticles = new THREE.Points(outerGeom, outerMat);
    this.group.add(this.outerParticles);
  }

  setThrottle(t: number): void {
    this.throttleLevel = Math.max(0.01, t);
  }

  setVacuum(v: boolean): void {
    this.inVacuum = v;
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
    this.outerParticles.geometry.attributes.position!.needsUpdate = true;
  }

  update(dt: number): void {
    const vacMult = this.inVacuum ? 3.5 : 1;

    if (this.active) {
      const spawnCount = Math.ceil((3 + Math.random() * 3) * this.throttleLevel);

      for (let i = 0; i < spawnCount; i++) {
        const idx = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % PARTICLE_COUNT;

        // Wider spread at lower pressure (vacuum expansion)
        const spread = (0.08 + Math.random() * 0.15) * (this.inVacuum ? 3 : 1) / Math.max(0.3, this.throttleLevel);

        this.positions[idx * 3]     = (Math.random() - 0.5) * spread * FLAME_SCALE;
        this.positions[idx * 3 + 1] = -(Math.random() * 0.04) * FLAME_SCALE;
        this.positions[idx * 3 + 2] = (Math.random() - 0.5) * spread * FLAME_SCALE;

        // Speed depends on throttle and atmosphere
        const speed = (6 + Math.random() * 10) * this.throttleLevel * vacMult;
        this.velocities[idx * 3]     = (Math.random() - 0.5) * 0.3 * FLAME_SCALE;
        this.velocities[idx * 3 + 1] = -(speed * FLAME_SCALE);
        this.velocities[idx * 3 + 2] = (Math.random() - 0.5) * 0.3 * FLAME_SCALE;

        // Lifetime longer in vacuum (plume expands more)
        this.lifetimes[idx] = (0.25 + Math.random() * 0.35) * vacMult;
        this.ages[idx] = 0;

        // Size variation
        this.sizes[idx] = 0.5 + Math.random() * 0.5;
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

      // Update position
      this.positions[i3]     = (this.positions[i3] ?? 0) + (this.velocities[i3] ?? 0) * dt;
      this.positions[i3 + 1] = (this.positions[i3 + 1] ?? 0) + (this.velocities[i3 + 1] ?? 0) * dt;
      this.positions[i3 + 2] = (this.positions[i3 + 2] ?? 0) + (this.velocities[i3 + 2] ?? 0) * dt;

      // Damping
      const damp = Math.exp(-2.0 * dt);
      this.velocities[i3]     = (this.velocities[i3] ?? 0) * damp;
      this.velocities[i3 + 2] = (this.velocities[i3 + 2] ?? 0) * damp;

      // Turbulence: random sideways wobble
      if (Math.random() < 0.05) {
        this.velocities[i3]     = (this.velocities[i3] ?? 0) + (Math.random() - 0.5) * 0.2 * FLAME_SCALE;
        this.velocities[i3 + 2] = (this.velocities[i3 + 2] ?? 0) + (Math.random() - 0.5) * 0.2 * FLAME_SCALE;
      }

      // Color: white core → yellow → orange → faint red
      let r: number, g: number, b: number;
      if (t < 0.15) {
        r = 1; g = 1; b = 1;
      } else if (t < 0.35) {
        const t2 = (t - 0.15) / 0.2;
        r = 1;
        g = 1 - t2 * 0.3;
        b = 1 - t2 * 0.8;
      } else if (t < 0.6) {
        const t2 = (t - 0.35) / 0.25;
        r = 1;
        g = 0.7 - t2 * 0.3;
        b = 0.2 - t2 * 0.15;
      } else {
        const t2 = (t - 0.6) / 0.4;
        r = 1 - t2 * 0.7;
        g = 0.4 - t2 * 0.35;
        b = 0.05 - t2 * 0.04;
      }

      // Vacuum: slightly more blue-shifted
      if (this.inVacuum) {
        g *= 0.85;
        b *= 0.5;
      }

      this.colors[i3]     = Math.max(0, r);
      this.colors[i3 + 1] = Math.max(0, g);
      this.colors[i3 + 2] = Math.max(0, b);

      // Size grows slightly then shrinks
      const sizeCurve = t < 0.3 ? 0.6 + t / 0.3 * 0.4 : 1.0 - (t - 0.3) / 0.7 * 0.8;
      this.sizes[i] = sizeCurve * (0.5 + (this.sizes[i] ?? 0.5) * 0.5);
    }

    this.particles.geometry.attributes.position!.needsUpdate = true;
    this.particles.geometry.attributes.color!.needsUpdate = true;
    (this.particles.geometry.attributes as any).size.needsUpdate = true;

    // Sync outer particle positions (shared, simpler)
    const outerPos = this.outerParticles.geometry.attributes.position!;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      outerPos.array[i3]     = this.positions[i3] ?? 0;
      outerPos.array[i3 + 1] = this.positions[i3 + 1] ?? 0;
      outerPos.array[i3 + 2] = this.positions[i3 + 2] ?? 0;
    }
    outerPos.needsUpdate = true;
  }

  getMesh(): THREE.Group {
    return this.group;
  }

  dispose(): void {
    this.particles.geometry.dispose();
    (this.particles.material as THREE.PointsMaterial).dispose();
    this.outerParticles.geometry.dispose();
    (this.outerParticles.material as THREE.PointsMaterial).dispose();
    this.coreTex.dispose();
    this.outerTex.dispose();
  }
}
