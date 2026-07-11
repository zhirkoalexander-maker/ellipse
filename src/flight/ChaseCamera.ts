import * as THREE from 'three';
import type { FlightState } from './FlightState';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

const MIN_DIST = 1;
const MAX_DIST = 100;
const LERP_SPEED = 4;

export class ChaseCamera {
  camera: THREE.PerspectiveCamera;
  private dist = 2.5;
  private targetDist = 2.5;
  private azimuth = 0;
  private polar = Math.PI / 2;
  isDragging = false;
  private prevMouse = { x: 0, y: 0 };
  private canvas: HTMLElement | null = null;
  private smoothPos = new THREE.Vector3();
  private smoothUp = new THREE.Vector3(0, 1, 0);
  private initialized = false;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  initialiseAt(state: FlightState, _quat: THREE.Quaternion, upDir?: THREE.Vector3): void {
    const vx = state.position[0] * VISUAL_SCALE;
    const vy = state.position[1] * VISUAL_SCALE;
    const vz = state.position[2] * VISUAL_SCALE;
    const look = new THREE.Vector3(vx, vy, vz);
    const ox = this.targetDist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.targetDist * Math.cos(this.polar);
    const oz = this.targetDist * Math.sin(this.polar) * Math.sin(this.azimuth);
    const pos = new THREE.Vector3(vx + ox, vy + oy, vz + oz);

    this.camera.position.copy(pos);
    this.camera.up.copy(upDir ? upDir : new THREE.Vector3(0, 1, 0));
    this.camera.lookAt(look);
  }

  setAzimuth(az: number): void {
    this.azimuth = az;
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
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.azimuth -= dx * 0.005;
      this.polar = Math.max(0.05, Math.min(Math.PI - 0.05, this.polar + dy * 0.005));
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { this.isDragging = false; });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetDist *= e.deltaY > 0 ? 1.1 : 0.9;
      this.targetDist = Math.max(MIN_DIST, Math.min(MAX_DIST, this.targetDist));
    }, { passive: false });
  }

  follow(state: FlightState, dt: number, upDir?: THREE.Vector3, snap = false): void {
    const vx = state.position[0] * VISUAL_SCALE;
    const vy = state.position[1] * VISUAL_SCALE;
    const vz = state.position[2] * VISUAL_SCALE;
    const targetLook = new THREE.Vector3(vx, vy, vz);

    this.dist += (this.targetDist - this.dist) * Math.min(1, LERP_SPEED * dt);

    const ox = this.dist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.dist * Math.cos(this.polar);
    const oz = this.dist * Math.sin(this.polar) * Math.sin(this.azimuth);
    const targetPos = new THREE.Vector3(vx + ox, vy + oy, vz + oz);
    const targetUp = upDir ? upDir.clone() : new THREE.Vector3(0, 1, 0);

    if (!this.initialized) {
      this.smoothPos.copy(targetPos);
      this.smoothUp.copy(targetUp);
      this.initialized = true;
    }

    if (snap) {
      this.smoothPos.copy(targetPos);
      this.smoothUp.copy(targetUp);
    } else {
      const t = Math.min(1, LERP_SPEED * dt);
      this.smoothPos.lerp(targetPos, t);
      this.smoothUp.lerp(targetUp, t).normalize();
    }

    this.camera.position.copy(this.smoothPos);
    this.camera.up.copy(this.smoothUp);
    this.camera.lookAt(targetLook);
  }
}
