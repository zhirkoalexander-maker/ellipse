import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateNeptuneTexture } from '../effects/ProceduralTextures';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Neptune extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super("neptune", 1.024e26, position, velocity, 2.4622e7 * 1.25);

    const visualR = this.visualRadius;

    const tex = generateNeptuneTexture();

    const geom = new THREE.SphereGeometry(visualR, 64, 32);
    // Gas cloud layers are smooth; bands belong in the texture, not terrain.

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