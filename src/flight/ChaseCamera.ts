import * as THREE from 'three';
import type { FlightState } from './FlightState';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

const MIN_DIST = 0.5;
const MAX_DIST = 500;
const LERP_SPEED = 4;
const ORBIT_SPEED = 3;
const ZOOM_SPEED = 2;

const DEFAULT_DIST = 5;
const DEFAULT_AZIMUTH = 0;
const DEFAULT_POLAR = Math.PI / 2;

export class ChaseCamera {
  camera: THREE.PerspectiveCamera;
  private dist = DEFAULT_DIST;
  private targetDist = DEFAULT_DIST;
  private azimuth = DEFAULT_AZIMUTH;
  private targetAzimuth = DEFAULT_AZIMUTH;
  private polar = DEFAULT_POLAR;
  private targetPolar = DEFAULT_POLAR;
  isDragging = false;
  private prevMouse = { x: 0, y: 0 };
  private canvas: HTMLElement | null = null;
  private smoothPos = new THREE.Vector3();
  private initialized = false;
  private orbitKeys = { left: false, right: false, up: false, down: false };
  private zoomKeys = { in: false, out: false };
  private inertiaAzimuth = 0;
  private inertiaPolar = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.setupKeyboard();
  }

  private setupKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      if (e.shiftKey) {
        switch (e.key) {
          case 'ArrowLeft': this.orbitKeys.left = true; e.preventDefault(); break;
          case 'ArrowRight': this.orbitKeys.right = true; e.preventDefault(); break;
          case 'ArrowUp': this.orbitKeys.up = true; e.preventDefault(); break;
          case 'ArrowDown': this.orbitKeys.down = true; e.preventDefault(); break;
        }
      }
      // Z/X zoom
      if (e.key === 'z' || e.key === 'Z') this.zoomKeys.in = true;
      if (e.key === 'x' || e.key === 'X') this.zoomKeys.out = true;
    });
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowLeft': this.orbitKeys.left = false; break;
        case 'ArrowRight': this.orbitKeys.right = false; break;
        case 'ArrowUp': this.orbitKeys.up = false; break;
        case 'ArrowDown': this.orbitKeys.down = false; break;
        case 'z': case 'Z': this.zoomKeys.in = false; break;
        case 'x': case 'X': this.zoomKeys.out = false; break;
      }
    });
  }

  initialiseAt(state: FlightState, _quat: THREE.Quaternion, upDir?: THREE.Vector3, lookOffset?: { x: number; y: number; z: number }): void {
    const vx = state.position[0] * VISUAL_SCALE + (lookOffset?.x ?? 0);
    const vy = state.position[1] * VISUAL_SCALE + (lookOffset?.y ?? 0);
    const vz = state.position[2] * VISUAL_SCALE + (lookOffset?.z ?? 0);
    const look = new THREE.Vector3(vx, vy, vz);
    const ox = this.targetDist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.targetDist * Math.cos(this.polar);
    const oz = this.targetDist * Math.sin(this.polar) * Math.sin(this.azimuth);

    this.camera.position.set(vx + ox, vy + oy, vz + oz);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(look);
  }

  setAzimuth(az: number): void {
    this.azimuth = az;
    this.targetAzimuth = az;
  }

  setPolar(p: number): void {
    this.polar = p;
    this.targetPolar = p;
  }

  zoom(delta: number): void {
    this.targetDist *= delta;
    this.targetDist = Math.max(MIN_DIST, Math.min(MAX_DIST, this.targetDist));
  }

  enableOrbit(el: HTMLElement): void {
    this.canvas = el;

    el.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      this.isDragging = true;
      this.prevMouse = { x: e.clientX, y: e.clientY };
      this.inertiaAzimuth = 0;
      this.inertiaPolar = 0;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.inertiaAzimuth = -dx * 0.005;
      this.inertiaPolar = dy * 0.005;
      this.targetAzimuth += this.inertiaAzimuth;
      this.targetPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.targetPolar + this.inertiaPolar));
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { this.isDragging = false; });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetDist *= e.deltaY > 0 ? 1.1 : 0.9;
      this.targetDist = Math.max(MIN_DIST, Math.min(MAX_DIST, this.targetDist));
    }, { passive: false });
  }

  follow(state: FlightState, dt: number, _upDir?: THREE.Vector3, snap = false, lookOffset?: { x: number; y: number; z: number }): void {
    const vx = state.position[0] * VISUAL_SCALE + (lookOffset?.x ?? 0);
    const vy = state.position[1] * VISUAL_SCALE + (lookOffset?.y ?? 0);
    const vz = state.position[2] * VISUAL_SCALE + (lookOffset?.z ?? 0);
    const targetLook = new THREE.Vector3(vx, vy, vz);

    // Handle keyboard orbit
    if (this.orbitKeys.left) this.targetAzimuth += dt * ORBIT_SPEED;
    if (this.orbitKeys.right) this.targetAzimuth -= dt * ORBIT_SPEED;
    if (this.orbitKeys.up) this.targetPolar = Math.max(0.05, this.targetPolar - dt * ORBIT_SPEED * 0.5);
    if (this.orbitKeys.down) this.targetPolar = Math.min(Math.PI - 0.05, this.targetPolar + dt * ORBIT_SPEED * 0.5);
    if (this.zoomKeys.in) this.targetDist = Math.max(MIN_DIST, this.targetDist * (1 - dt * ZOOM_SPEED));
    if (this.zoomKeys.out) this.targetDist = Math.min(MAX_DIST, this.targetDist * (1 + dt * ZOOM_SPEED));

    // Apply inertia when not dragging
    if (!this.isDragging) {
      this.targetAzimuth += this.inertiaAzimuth * dt * 2;
      this.targetPolar += this.inertiaPolar * dt * 2;
      this.inertiaAzimuth *= Math.exp(-3 * dt);
      this.inertiaPolar *= Math.exp(-3 * dt);
    }

    // Smooth interpolation
    this.dist += (this.targetDist - this.dist) * Math.min(1, LERP_SPEED * dt);
    this.azimuth += (this.targetAzimuth - this.azimuth) * Math.min(1, LERP_SPEED * dt * 0.5);
    this.polar += (this.targetPolar - this.polar) * Math.min(1, LERP_SPEED * dt * 0.5);

    const ox = this.dist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.dist * Math.cos(this.polar);
    const oz = this.dist * Math.sin(this.polar) * Math.sin(this.azimuth);
    const targetPos = new THREE.Vector3(vx + ox, vy + oy, vz + oz);
    const targetUp = new THREE.Vector3(0, 1, 0);

    if (!this.initialized) {
      this.smoothPos.copy(targetPos);
      this.initialized = true;
    }

    if (snap) {
      this.smoothPos.copy(targetPos);
    } else {
      const t = Math.min(1, LERP_SPEED * dt);
      this.smoothPos.lerp(targetPos, t);
    }

    this.camera.position.copy(this.smoothPos);
    // Dynamic up-vector to prevent gimbal lock at poles
    const upVec = Math.abs(this.polar) < 0.1 ? new THREE.Vector3(0, 0, 1) :
                  Math.abs(this.polar - Math.PI) < 0.1 ? new THREE.Vector3(0, 0, -1) :
                  targetUp;
    this.camera.up.copy(upVec);
    this.camera.lookAt(targetLook);
  }

  reset(): void {
    this.targetDist = DEFAULT_DIST;
    this.dist = DEFAULT_DIST;
    this.targetAzimuth = DEFAULT_AZIMUTH;
    this.azimuth = DEFAULT_AZIMUTH;
    this.targetPolar = DEFAULT_POLAR;
    this.polar = DEFAULT_POLAR;
  }
}
