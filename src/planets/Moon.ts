import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';

export class Moon extends Planet {
  constructor(position: Vec3, velocity: Vec3) {
    super('moon', 7.342e22, position, velocity, 1.737e6);
    const geom = new THREE.SphereGeometry(this.visualRadius, 48, 24);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x9a9a9a,
      roughness: 0.95
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0], position[1], position[2]);
  }
}
