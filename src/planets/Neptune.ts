import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateNeptuneTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Neptune extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super('neptune', 1.024e27 * 5 * 4 * 1.5 * 6 * 2 * 2 * 40, position, velocity, 2.4622e7);

    const visualR = this.visualRadius;

    const tex = generateNeptuneTexture();

    const geom = new THREE.SphereGeometry(visualR, 64, 32);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.015;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const bands = fbm3D(nx * 6 + 10, ny * 6 + 20, nz * 6 + 30, 4);
      const micro = fbm3D(nx * 25 + 100, ny * 25 + 200, nz * 25 + 300, 3);
      const elev = bands * 0.7 + micro * 0.3;

      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.1;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
    this.mesh.rotation.z = 28.3 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4b70dd, 0.15);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}