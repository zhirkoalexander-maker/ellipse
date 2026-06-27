import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { VISUAL_PLANET_MULT } from '../config/constants';

export class Earth extends Planet {
  constructor(position: Vec3, velocity: Vec3) {
    super('earth', 5.972e24, position, velocity, 6.371e6);

    // Re-create mesh with earth-like material
    // (No external texture in MVP — procedural color for now)
    const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x2a6db5,
      roughness: 0.7,
      metalness: 0.0
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0], position[1], position[2]);

    // Tilt axis 23.5° (Earth's axial tilt)
    this.mesh.rotation.z = 23.5 * Math.PI / 180;
  }
}
