import * as THREE from 'three';
import type { FlightState } from './FlightState';

export class ChaseCamera {
  camera: THREE.PerspectiveCamera;
  offset = new THREE.Vector3(0, 2, 8);
  smoothing = 5;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  follow(state: FlightState, dt: number): void {
    const target = new THREE.Vector3(
      state.position[0] + this.offset.x,
      state.position[1] + this.offset.y,
      state.position[2] + this.offset.z
    );
    this.camera.position.lerp(target, Math.min(1, dt * this.smoothing));
    this.camera.lookAt(state.position[0], state.position[1], state.position[2]);
  }
}
