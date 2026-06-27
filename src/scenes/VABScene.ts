import * as THREE from 'three';
import { PART_CATALOG, findPart } from '../parts/PartCatalog';
import { Assembly } from '../rocket/Assembly';
import type { Part } from '../parts/Part';

export class VABScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  assembly: Assembly;
  private rocketGroup: THREE.Group;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1A1F2E);
    this.scene.add(new THREE.AmbientLight(0x606080, 0.6));
    const dir = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    dir.position.set(3, 5, 4);
    this.scene.add(dir);

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 2, 6);
    this.camera.lookAt(0, 0, 0);

    // Launch pad
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(4, 0.1, 4),
      new THREE.MeshStandardMaterial({ color: 0x666670, roughness: 0.9 })
    );
    pad.position.y = -2;
    this.scene.add(pad);

    this.assembly = new Assembly();
    this.rocketGroup = new THREE.Group();
    this.scene.add(this.rocketGroup);
  }

  addPart(part: Part, position: [number, number, number] = [0, 0, 0]): void {
    this.assembly.addRoot({ part, position, rotation: 0, children: [] });
    this.refreshMesh();
  }

  private refreshMesh(): void {
    while (this.rocketGroup.children.length > 0) {
      const child = this.rocketGroup.children[0];
      if (child) this.rocketGroup.remove(child);
    }
    const mesh = this.assembly.toMesh();
    this.rocketGroup.add(mesh);
  }

  listParts() { return PART_CATALOG; }
  pickPart(id: string): Part | undefined { return findPart(id); }
}
