import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { gasTexture } from './GasAppearance';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 128;

export class Jupiter extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super("jupiter", 1.9e27, position, velocity, 6.9911e7 * 1.25);

    const visualR = this.visualRadius;

    const tex = gasTexture('jupiter');

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    // Gas cloud layers are smooth; bands belong in the texture, not terrain.

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