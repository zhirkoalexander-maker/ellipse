import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Earth extends Planet {
  atmosphereGlow: AtmosphereGlow;

  constructor(position: Vec3, velocity: Vec3) {
    super('earth', 2e25, position, velocity, 6.371e6);

    const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
    const mat = new THREE.MeshStandardMaterial({
      roughness: 0.8,
      metalness: 0.0,
      color: 0x4a7db4,
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VISUAL_SCALE, position[1] * VISUAL_SCALE, position[2] * VISUAL_SCALE);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    for (let x = 0; x < 512; x++) {
      for (let y = 0; y < 256; y++) {
        const n = Math.sin(x * 0.05) * Math.cos(y * 0.08) +
                 Math.sin(x * 0.12 + y * 0.07) * 0.5 +
                 Math.cos(x * 0.03 - y * 0.09) * 0.3;
        const v = Math.floor((n * 0.5 + 0.5) * 255);
        const isLand = v > 140;
        const r = isLand ? 70 + v * 0.1 : 30 + v * 0.15;
        const g = isLand ? 90 + v * 0.08 : 60 + v * 0.12;
        const b = isLand ? 40 + v * 0.05 : 100 + v * 0.1;
        ctx.fillStyle = `rgb(${r|0},${g|0},${b|0})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    (this.mesh.material as THREE.MeshStandardMaterial).map = tex;
    (this.mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;

    this.mesh.rotation.z = 23.5 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(this.visualRadius);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}
