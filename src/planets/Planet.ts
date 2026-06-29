import * as THREE from 'three';
import { Body, type Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

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
    this.visualRadius = radius * VISUAL_SCALE;
    const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
    const mat = new THREE.MeshStandardMaterial({ color: 0x808080 });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VISUAL_SCALE, position[1] * VISUAL_SCALE, position[2] * VISUAL_SCALE);
  }

  /** Update mesh position from physics. Call each frame. */
  syncMesh(): void {
    this.mesh.position.set(
      this.position[0] * VISUAL_SCALE,
      this.position[1] * VISUAL_SCALE,
      this.position[2] * VISUAL_SCALE
    );
  }
}
