import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateUranusTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Uranus extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super("uranus", 8.681e25, position, velocity, 2.5362e7);

    const visualR = this.visualRadius;

    const tex = generateUranusTexture();

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
      const micro = fbm3D(nx * 25 + 400, ny * 25 + 500, nz * 25 + 600, 3);
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
    this.mesh.rotation.z = -97.8 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4fd0e8, 0.1);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Add rings
    const ringGeom = new THREE.RingGeometry(visualR * 1.2, visualR * 2.1, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xaaaacc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const rings = new THREE.Mesh(ringGeom, ringMat);
    rings.rotation.x = -Math.PI / 2;
    rings.rotation.z = 97.8 * Math.PI / 180;
    this.mesh.add(rings);
  }
}