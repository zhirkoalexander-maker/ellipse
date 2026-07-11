import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, EARTH_MASS } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Earth extends Planet {
  atmosphereGlow: AtmosphereGlow;

  constructor(position: Vec3, velocity: Vec3) {
    super('earth', EARTH_MASS, position, velocity, 6.371e6);

    const visualR = this.visualRadius;

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
      metalness: 0.0,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4488ff, 0.7);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Generate procedural terrain (synchronous)
    this.generateTerrain(visualR);

    // Load texture (async — color map only)
    this.loadTexture();
  }

  /** Procedural terrain height in VISUAL units at a given unit direction from center. */
  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const elev = (Math.sin(nx * 4.5) * 0.5 + Math.cos(ny * 3.2) * 0.3 + Math.sin(nz * 2.1 + nx * 1.5) * 0.2
      + Math.sin(nx * 8.1 + ny * 3.7) * 0.15) * 0.4 + 0.5;
    const maxDisp = this.visualRadius * 0.015;
    const oceanDepth = this.visualRadius * 0.005;
    if (elev > 0.4) {
      return ((elev - 0.4) / 0.6) ** 2 * maxDisp;
    }
    return -(0.4 - elev) / 0.4 * oceanDepth;
  }

  private generateTerrain(visualR: number): void {
    const g = this.mesh.geometry as THREE.SphereGeometry;
    const posAttr = g.attributes.position!;
    const vert = new THREE.Vector3();

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;
      const disp = this.getTerrainHeightVisual(nx, ny, nz);
      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    g.computeVertexNormals();
  }

  private async loadTexture() {
    const loader = new THREE.TextureLoader();
    const [dayTex] = await Promise.all([
      loader.loadAsync('/textures/earth_daymap.jpg'),
    ]);

    dayTex.colorSpace = THREE.SRGBColorSpace;
    dayTex.anisotropy = 8;

    const mat = this.mesh.material as THREE.MeshStandardMaterial;
    mat.map = dayTex;
    mat.needsUpdate = true;

    // Subtle ocean tint
    const waterGeom = new THREE.SphereGeometry(this.visualRadius * 0.998, 48, 24);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0a2848,
      transparent: true,
      opacity: 0.06,
      roughness: 0.1,
      metalness: 0.0,
    });
    this.mesh.add(new THREE.Mesh(waterGeom, waterMat));

    this.addClouds(this.visualRadius);
  }

  private addClouds(visualR: number): void {
    const cloudGeom = new THREE.SphereGeometry(visualR * 1.008, 48, 24);
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
      roughness: 0.9,
      metalness: 0.0,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeom, cloudMat);
    const cPos = cloudGeom.attributes.position!;
    for (let i = 0; i < cPos.count; i++) {
      const x = cPos.getX(i), y = cPos.getY(i), z = cPos.getZ(i);
      const n = Math.sin(x * 3.7 + y * 2.1) * 0.3 + Math.cos(y * 4.3 + z * 1.8) * 0.3
        + Math.sin(z * 5.1 + x * 2.9) * 0.2 + Math.sin(x * 8.3 + y * 6.7 + z * 4.1) * 0.15;
      const disp = (n * 0.5 + 0.5) * visualR * 0.006;
      const len = Math.sqrt(x*x + y*y + z*z);
      cPos.setXYZ(i, x / len * (visualR * 1.008 + disp), y / len * (visualR * 1.008 + disp), z / len * (visualR * 1.008 + disp));
    }
    cPos.needsUpdate = true;
    cloudGeom.computeVertexNormals();
    this.mesh.add(cloudMesh);
  }
}
