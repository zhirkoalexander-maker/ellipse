import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Planet } from './Planet';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Pluto extends Planet {
  constructor(position: Vec3, velocity: Vec3) {
    super('pluto', 4.4e21 * 5 * 4 * 1.5 * 6 * 2 * 2, position, velocity, 1.188e6);
    const geom = new THREE.SphereGeometry(this.visualRadius, 32, 16);
    const mat = new THREE.MeshStandardMaterial({ color: 0xddccbb, roughness: 0.9, metalness: 0.0 });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
  }
}
