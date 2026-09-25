import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { gasTexture } from './GasAppearance';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Uranus extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super("uranus", 8.681e25, position, velocity, 2.5362e7 * 1.25);

    const visualR = this.visualRadius;

    const tex = gasTexture('uranus');

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

    // Narrow, dark ring bands in the tilted equatorial plane.
    for (const [inner,outer] of [[1.62,1.625],[1.73,1.737],[1.87,1.879],[2.0,2.014]]) {
      const ringGeom=new THREE.RingGeometry(visualR*inner!,visualR*outer!,192);
      const ringMat=new THREE.MeshStandardMaterial({color:0x676761,roughness:1,side:THREE.DoubleSide,transparent:true,opacity:.65,depthWrite:false});
      const rings=new THREE.Mesh(ringGeom,ringMat);rings.rotation.x=-Math.PI/2;
      this.mesh.add(rings);
    }
  }
}
