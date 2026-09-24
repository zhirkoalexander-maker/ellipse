import * as THREE from 'three';
import type { Part } from './Part';
import { buildPartMesh, gltfCache } from './PartBuilder';
import { releaseSceneObjects } from '../core/disposeObject';

// Only encoded images survive the batch: no mesh or GPU context is cached.
const images = new Map<string, string>();

/** One offscreen renderer for an entire catalog, released after the image batch. */
export class PartThumbnails {
  private renderer?: THREE.WebGLRenderer;
  private unavailable = false;
  constructor(private createRenderer = () => new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })) {}

  get(part: Part): string | undefined {
    const key = `${part.kind}:${part.id}:${part.size}`;
    if (images.has(key)) return images.get(key);
    if (this.unavailable || (part.gltfUrl && !gltfCache.has(part.gltfUrl))) return undefined;
    try {
      if (!this.renderer) {
        this.renderer = this.createRenderer();
        this.renderer.setSize(112, 112, false);
        this.renderer.setPixelRatio(1);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.3;
      }
      const model = buildPartMesh(part);
      try {
        const scene = new THREE.Scene();
        scene.add(new THREE.HemisphereLight(0xf0f6ff, 0x3b3730, 2));
        const keyLight = new THREE.DirectionalLight(0xfff6e5, 3.5);
        keyLight.position.set(3, 4, 5); scene.add(keyLight);
        const rim = new THREE.DirectionalLight(0x9fcfff, 2);
        rim.position.set(-3, 2, -3); scene.add(rim);
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        model.position.sub(box.getCenter(new THREE.Vector3())); scene.add(model);
        const radius = Math.max(size.x, size.y, size.z, 0.001) * 0.58;
        const camera = new THREE.PerspectiveCamera(32, 1, radius / 100, radius * 100);
        camera.position.set(radius * 2.4, radius * 1.5, radius * 3.8); camera.lookAt(0, 0, 0);
        this.renderer.render(scene, camera);
        const image = this.renderer.domElement.toDataURL('image/png');
        images.set(key, image);
        return image;
      } finally {
        // Imported clones share resources with the model cache; keep those alive.
        releaseSceneObjects([model], [...gltfCache.values()]);
      }
    } catch {
      // The part names/buttons remain usable if WebGL is unavailable.
      this.unavailable = true;
      return undefined;
    }
  }

  dispose(): void {
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = undefined;
    this.unavailable = true;
  }
}
