import * as THREE from 'three';

export class Renderer {
  readonly domElement: HTMLCanvasElement;
  readonly three: THREE.WebGLRenderer;

  constructor() {
    this.three = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.domElement = this.three.domElement;
    this.three.setPixelRatio(window.devicePixelRatio);
    this.three.setClearColor(0x000000, 1);
    this.three.toneMapping = THREE.NoToneMapping;
    this.three.outputColorSpace = THREE.SRGBColorSpace;
  }

  setSize(width: number, height: number): void {
    this.three.setSize(width, height, false);
    this.domElement.style.width = '100vw';
    this.domElement.style.height = '100vh';
    this.domElement.style.position = 'fixed';
    this.domElement.style.top = '0';
    this.domElement.style.left = '0';
  }

  dispose(): void {
    this.three.dispose();
  }
}
