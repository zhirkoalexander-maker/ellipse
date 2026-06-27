import * as THREE from 'three';

export class SceneManager {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();
  private frames = 0;
  private lastFpsUpdate = 0;
  private fps = 0;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0A0E1A);

    // Ambient + Directional (sun) light
    this.scene.add(new THREE.AmbientLight(0x404050, 0.4));
    const sun = new THREE.DirectionalLight(0xFFF5E0, 1.2);
    sun.position.set(5, 3, 5);
    this.scene.add(sun);

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(0, 0, 0);
  }

  update(): void {
    const t = this.clock.getElapsedTime();
    this.frames++;
    if (t - this.lastFpsUpdate >= 1) {
      this.fps = this.frames / (t - this.lastFpsUpdate);
      this.frames = 0;
      this.lastFpsUpdate = t;
    }
  }

  getFps(): number { return this.fps; }
}
