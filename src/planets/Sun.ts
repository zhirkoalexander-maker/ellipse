import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Body } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Sun extends Body {
  light: THREE.DirectionalLight;
  visualRadius: number;
  mesh: THREE.Mesh;
  glowMesh: THREE.Mesh;

  constructor(position: Vec3, velocity: Vec3, mass = 2e26) {
    super('sun', mass, position, velocity);

    this.visualRadius = 5;
    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(this.visualRadius, 24, 12),
      new THREE.MeshBasicMaterial({ color: 0xffdd44 })
    );
    this.mesh.position.set(position[0] * VISUAL_SCALE, position[1] * VISUAL_SCALE, position[2] * VISUAL_SCALE);

    this.light = new THREE.DirectionalLight(0xffeedd, 1.5);
    this.light.position.set(
      this.mesh.position.x + 100,
      this.mesh.position.y + 50,
      this.mesh.position.z
    );

    const glowGeom = new THREE.SphereGeometry(this.visualRadius * 3, 24, 12);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffaa33,
      transparent: true,
      opacity: 0.15,
    });
    this.glowMesh = new THREE.Mesh(glowGeom, glowMat);
    this.mesh.add(this.glowMesh);
  }

  syncMesh(): void {
    this.mesh.position.set(
      this.position[0] * VISUAL_SCALE,
      this.position[1] * VISUAL_SCALE,
      this.position[2] * VISUAL_SCALE
    );
    this.light.position.set(
      this.mesh.position.x + 100,
      this.mesh.position.y + 50,
      this.mesh.position.z
    );
  }
}
