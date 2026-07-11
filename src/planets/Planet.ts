import * as THREE from 'three';
import { Body, type Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Planet extends Body {
  radius: number;
  visualRadius: number;
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

  /** Override in subclasses to add terrain displacement. Returns height in VISUAL units. */
  protected getTerrainHeightVisual(_nx: number, _ny: number, _nz: number): number {
    return 0;
  }

  syncMesh(): void {
    this.mesh.position.set(
      this.position[0] * VISUAL_SCALE,
      this.position[1] * VISUAL_SCALE,
      this.position[2] * VISUAL_SCALE
    );
  }

  /** Get surface radius at world position (physics space), accounting for terrain displacement. */
  getSurfaceRadiusAt(worldPos: Vec3): number {
    const localX = worldPos[0] - this.position[0];
    const localY = worldPos[1] - this.position[1];
    const localZ = worldPos[2] - this.position[2];
    const len = Math.sqrt(localX * localX + localY * localY + localZ * localZ);
    if (len === 0) return this.radius;

    const nx = localX / len;
    const ny = localY / len;
    const nz = localZ / len;

    const dispVisual = this.getTerrainHeightVisual(nx, ny, nz);
    const dispPhysics = dispVisual / VISUAL_SCALE;
    return this.radius + dispPhysics;
  }
}
