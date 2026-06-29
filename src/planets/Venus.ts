import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;
const loader = new THREE.TextureLoader();

export class Venus extends Planet {
  constructor(position: Vec3, velocity: Vec3) {
    super('venus', 4.867e24, position, velocity, 6.052e6);
    const geom = new THREE.SphereGeometry(this.visualRadius, 48, 24);
    const mat = new THREE.MeshStandardMaterial({
      map: loader.load('/textures/venus.jpg'),
      roughness: 0.9,
      metalness: 0.0,
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VISUAL_SCALE, position[1] * VISUAL_SCALE, position[2] * VISUAL_SCALE);
  }
}