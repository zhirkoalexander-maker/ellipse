import * as THREE from 'three';
import { Stars } from '../effects/Stars';

export class SceneManager {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();
  private frames = 0;
  private lastFpsUpdate = 0;
  private fps = 0;
  private stars: Stars;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.stars = new Stars();
    this.scene.add(this.stars.getMesh());

    this.scene.add(new THREE.AmbientLight(0x334466, 0.15));
    this.scene.add(new THREE.HemisphereLight(0x446688, 0x112233, 0.2));

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1.0, 5e7);
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(0, 0, 0);
  }

  update(dt: number): void {
    const t = this.clock.getElapsedTime();
    this.frames++;
    if (t - this.lastFpsUpdate >= 1) {
      this.fps = this.frames / (t - this.lastFpsUpdate);
      this.frames = 0;
      this.lastFpsUpdate = t;
    }
    this.stars.getMesh().position.copy(this.camera.position);
    this.stars.update(dt);
  }

  getFps(): number { return this.fps; }
}
