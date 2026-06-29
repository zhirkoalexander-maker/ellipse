import * as THREE from 'three';
import type { FlightState } from './FlightState';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

const CAM_DIST = 0.05;
const CAM_HEIGHT = 0.02;

export class ChaseCamera {
  camera: THREE.PerspectiveCamera;
  offset = new THREE.Vector3(0, CAM_HEIGHT, CAM_DIST);
  smoothing = 60;
  private azimuth = 0;
  private polar = 0;
  isDragging = false;
  private prevMouse = { x: 0, y: 0 };

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.azimuth = Math.atan2(this.offset.z, this.offset.x);
    this.polar = Math.acos(this.offset.y / this.offset.length());
  }

  enableOrbit(_el: HTMLElement): void {
    window.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.isDragging = true;
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.azimuth -= dx * 0.005;
      this.polar = Math.max(0.1, Math.min(Math.PI - 0.1, this.polar + dy * 0.005));
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { this.isDragging = false; });
  }

  follow(state: FlightState, _dt: number, _rotation?: { x: number; y: number; z: number }): void {
    const dist = this.offset.length();
    const ox = dist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = dist * Math.cos(this.polar);
    const oz = dist * Math.sin(this.polar) * Math.sin(this.azimuth);
    const vx = state.position[0] * VISUAL_SCALE;
    const vy = state.position[1] * VISUAL_SCALE;
    const vz = state.position[2] * VISUAL_SCALE;
    this.camera.position.set(vx + ox, vy + oy, vz + oz);
    this.camera.lookAt(vx, vy, vz);
  }
}
