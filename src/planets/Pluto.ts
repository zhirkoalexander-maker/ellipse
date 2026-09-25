import { configureSurfaceMaterial } from './SurfaceMaterial';
import { rockyTerrain, paintTerrain } from './Terrain';
import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Planet } from './Planet';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Pluto extends Planet {
  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    return this.visualRadius * rockyTerrain('pluto', nx, ny, nz);
  }
  constructor(position: Vec3, velocity: Vec3) {
    super("pluto", 4.4e21, position, velocity, 1.188e6 * 1.25);
    const geom = new THREE.SphereGeometry(this.visualRadius, 192, 192);
    const positions = geom.attributes.position!;
    const direction = new THREE.Vector3();
    for (let i = 0; i < positions.count; i++) {
      direction.fromBufferAttribute(positions, i).normalize();
      const radius = this.visualRadius + this.getTerrainHeightVisual(direction.x, direction.y, direction.z);
      positions.setXYZ(i, direction.x * radius, direction.y * radius, direction.z * radius);
    }
    geom.computeVertexNormals();
    paintTerrain(geom, 'pluto', this.visualRadius);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, color: 0xffffff, roughness: 0.9, metalness: 0.0 });
    configureSurfaceMaterial(mat, 'pluto', this.visualRadius);
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
  }
}
