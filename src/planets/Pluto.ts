import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Planet } from './Planet';

export class Pluto extends Planet {
  constructor(position: Vec3, velocity: Vec3) {
    super('pluto', 4.4e21 * 5 * 4, position, velocity, 1.188e6);
    const geom = new THREE.SphereGeometry(this.visualRadius, 32, 16);
    const mat = new THREE.MeshStandardMaterial({ color: 0xddccbb, roughness: 0.9, metalness: 0.0 });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * this.visualRadius / 1.188e6, position[1] * this.visualRadius / 1.188e6, position[2] * this.visualRadius / 1.188e6);
  }
}
