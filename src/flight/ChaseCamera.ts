import * as THREE from 'three';
import type { FlightState } from './FlightState';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

const MIN_DIST = 0.01;
const MAX_DIST = 0.5;

export class ChaseCamera {
  camera: THREE.PerspectiveCamera;
  private dist = 0.05;
  private azimuth = 0;
  private polar = Math.PI / 4;
  isDragging = false;
  private prevMouse = { x: 0, y: 0 };
  private canvas: HTMLElement | null = null;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
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
      this.dist *= e.deltaY > 0 ? 1.1 : 0.9;
      this.dist = Math.max(MIN_DIST, Math.min(MAX_DIST, this.dist));
    }, { passive: false });
  }

  follow(state: FlightState, _dt: number, _rotation?: { x: number; y: number; z: number }): void {
    const ox = this.dist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.dist * Math.cos(this.polar);
    const oz = this.dist * Math.sin(this.polar) * Math.sin(this.azimuth);
    const vx = state.position[0] * VISUAL_SCALE;
    const vy = state.position[1] * VISUAL_SCALE;
    const vz = state.position[2] * VISUAL_SCALE;
    this.camera.position.set(vx + ox, vy + oy, vz + oz);
    this.camera.lookAt(vx, vy, vz);
  }
}
