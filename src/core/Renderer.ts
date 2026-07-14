import * as THREE from 'three';

export class Renderer {
  readonly domElement: HTMLCanvasElement;
  readonly three: THREE.WebGLRenderer;

  constructor() {
    this.three = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.domElement = this.three.domElement;
    this.three.setPixelRatio(window.devicePixelRatio);
    this.three.setClearColor(0x000010, 1);
    this.three.toneMapping = THREE.NoToneMapping;
  }

  setSize(width: number, height: number): void {
    this.three.setSize(width, height);
  }

  dispose(): void {
    this.three.dispose();
  }
}
