import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateUranusTexture } from '../effects/ProceduralTextures';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Uranus extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super("uranus", 8.681e25, position, velocity, 2.5362e7 * 1.25);

    const visualR = this.visualRadius;

    const tex = generateUranusTexture();

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