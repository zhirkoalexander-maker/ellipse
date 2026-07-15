import * as THREE from 'three';

export class Renderer {
  readonly domElement: HTMLCanvasElement;
  readonly three: THREE.WebGLRenderer;

  constructor() {
    this.three = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.domElement = this.three.domElement;
    this.three.setPixelRatio(1);
    this.three.setClearColor(0x000010, 1);
    this.three.toneMapping = THREE.LinearToneMapping;
    this.three.toneMappingExposure = 1.2;
    this.three.outputColorSpace = THREE.SRGBColorSpace;
  }

  setSize(width: number, height: number): void {
    this.three.setSize(width, height);
    this.domElement.style.width = width + 'px';
    this.domElement.style.height = height + 'px';
  }

  dispose(): void {
    this.three.dispose();
  }
}
