import * as THREE from 'three';
import { Body, type Vec3 } from '../physics/Body';
import { VISUAL_PLANET_MULT } from '../config/constants';

export class Planet extends Body {
  /** Real radius (m) */
  radius: number;
  /** Visual radius for rendering (m) — exaggerated ×1000 by default */
  visualRadius: number;
  /** Three.js mesh */
  mesh: THREE.Mesh;

  constructor(name: string, mass: number, position: Vec3, velocity: Vec3, radius: number) {
    super(name, mass, position, velocity);
    this.radius = radius;
    this.visualRadius = radius * VISUAL_PLANET_MULT;
    const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
    const mat = new THREE.MeshStandardMaterial({ color: 0x808080 });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0], position[1], position[2]);
  }

  /** Update mesh position from physics. Call each frame. */
  syncMesh(): void {
    this.mesh.position.set(this.position[0], this.position[1], this.position[2]);
  }
}
