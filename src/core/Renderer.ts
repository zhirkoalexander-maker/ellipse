import * as THREE from 'three';

export class Renderer {
  readonly domElement: HTMLCanvasElement;
  readonly three: THREE.WebGLRenderer;

  constructor() {
    this.three = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', logarithmicDepthBuffer: true });
    this.domElement = this.three.domElement;
    this.three.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.three.setClearColor(0x000010, 1);
    this.three.toneMapping = THREE.LinearToneMapping;
    this.three.toneMappingExposure = 1.2;
  }

  setSize(width: number, height: number): void {
    this.three.setSize(width, height);
  }

  dispose(): void {
    this.three.dispose();
  }
}
