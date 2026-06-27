import * as THREE from 'three';

export class Renderer {
  readonly domElement: HTMLCanvasElement;
  readonly three: THREE.WebGLRenderer;

  constructor() {
    this.three = new THREE.WebGLRenderer({ antialias: true });
    this.domElement = this.three.domElement;
    this.three.setPixelRatio(window.devicePixelRatio);
    this.three.setClearColor(0x0A0E1A, 1);
  }

  setSize(width: number, height: number): void {
    this.three.setSize(width, height);
  }

  dispose(): void {
    this.three.dispose();
  }
}
