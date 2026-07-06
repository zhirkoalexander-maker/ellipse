import * as THREE from 'three';
import { Body, type Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Planet extends Body {
  radius: number;
  visualRadius: number;
  mesh: THREE.Mesh;
  private heightData?: { pixels: Uint8ClampedArray; width: number; height: number };

  constructor(name: string, mass: number, position: Vec3, velocity: Vec3, radius: number) {
    super(name, mass, position, velocity);
    this.radius = radius;
    this.visualRadius = radius * VISUAL_SCALE;
    const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
    const mat = new THREE.MeshStandardMaterial({ color: 0x808080 });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VISUAL_SCALE, position[1] * VISUAL_SCALE, position[2] * VISUAL_SCALE);
  }

  syncMesh(): void {
    this.mesh.position.set(
      this.position[0] * VISUAL_SCALE,
      this.position[1] * VISUAL_SCALE,
      this.position[2] * VISUAL_SCALE
    );
  }

  /** Store heightmap data for terrain collision sampling */
  setHeightData(pixels: Uint8ClampedArray, width: number, height: number): void {
    this.heightData = { pixels, width, height };
  }

  /** Get surface radius at world position (including displacement). Returns visual radius + displacement. */
  getSurfaceRadiusAt(worldPos: Vec3): number {
    if (!this.heightData) return this.visualRadius;

    // Convert world pos to local sphere coordinates
    const localX = worldPos[0] - this.position[0] * VISUAL_SCALE;
    const localY = worldPos[1] - this.position[1] * VISUAL_SCALE;
    const localZ = worldPos[2] - this.position[2] * VISUAL_SCALE;
    const len = Math.sqrt(localX * localX + localY * localY + localZ * localZ);
    if (len === 0) return this.visualRadius;

    // Spherical coordinates
    const nx = localX / len;
    const ny = localY / len;
    const nz = localZ / len;

    // UV from normal (same as displacement code)
    const u = 0.5 + Math.atan2(nz, nx) / (2 * Math.PI);
    const v = 0.5 - Math.asin(Math.max(-1, Math.min(1, ny))) / Math.PI;

    const { pixels, width, height } = this.heightData;
    const px = Math.floor(u * (width - 1));
    const py = Math.floor(v * (height - 1));
    const idx = (py * width + px) * 4;

    // Use R channel as height (0-1)
    const h = pixels[idx]! / 255;

    // Same displacement formula as in planet constructors
    const seaLevel = 0.35;
    const maxDisp = this.visualRadius * 0.025;
    const oceanDepth = this.visualRadius * 0.004;

    let disp = 0;
    if (h < seaLevel) {
      disp = -(seaLevel - h) / seaLevel * oceanDepth;
    } else {
      disp = (h - seaLevel) / (1 - seaLevel) * maxDisp;
    }

    return this.visualRadius + disp;
  }
}
