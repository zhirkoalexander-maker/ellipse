import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;
const loader = new THREE.TextureLoader();

export class Earth extends Planet {
  atmosphereGlow: AtmosphereGlow;

  constructor(position: Vec3, velocity: Vec3) {
    super('earth', 7e24, position, velocity, 6.371e6);

    const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
    const mat = new THREE.MeshStandardMaterial({
      map: loader.load('/textures/earth_daymap.jpg'),
      roughness: 0.8,
      metalness: 0.0,
      color: 0x6688aa,
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VISUAL_SCALE, position[1] * VISUAL_SCALE, position[2] * VISUAL_SCALE);

    // Tilt axis 23.5° (Earth's axial tilt)
    this.mesh.rotation.z = 23.5 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(this.visualRadius);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}
