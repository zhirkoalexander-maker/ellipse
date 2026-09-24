import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { gasTexture, ringTexture, ringGeometry } from './GasAppearance';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Saturn extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super("saturn", 5.683e26, position, velocity, 5.8232e7 * 1.25);

    const visualR = this.visualRadius;

    const tex = gasTexture('saturn');

    const geom = new THREE.SphereGeometry(visualR, 128, 64);
    // Gas cloud layers are smooth; bands belong in the texture, not terrain.

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
    this.mesh.rotation.z = 26.7 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xf4e4a1, 0.1);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Improved rings with texture
    const ringTex = ringTexture();
    const ringGeom = ringGeometry(visualR);
    const ringMat = new THREE.MeshStandardMaterial({
      map: ringTex,
      roughness: 1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
    const rings = new THREE.Mesh(ringGeom, ringMat);
    rings.rotation.x = -Math.PI / 2;
    rings.name = 'rings';
    this.mesh.add(rings);

  }
}
