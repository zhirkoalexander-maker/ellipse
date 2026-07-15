import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateJupiterTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Jupiter extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super('jupiter', 1.9e28, position, velocity, 6.9911e7);

    const visualR = this.visualRadius;

    const tex = generateJupiterTexture();

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.02;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const bands = fbm3D(nx * 8 + 10, ny * 8 + 20, nz * 8 + 30, 4);
      const micro = fbm3D(nx * 30 + 100, ny * 30 + 200, nz * 30 + 300, 3);
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
    this.mesh.rotation.z = 3.1 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xd4a574, 0.15);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}