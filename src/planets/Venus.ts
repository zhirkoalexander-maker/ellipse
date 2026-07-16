import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, assetUrl } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

const hash = (x: number, y: number, z: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.9) * 43758.5453;
  return n - Math.floor(n);
};

const noise3D = (x: number, y: number, z: number) => {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const sz = fz * fz * (3 - 2 * fz);
  const v000 = hash(ix, iy, iz);
  const v100 = hash(ix + 1, iy, iz);
  const v010 = hash(ix, iy + 1, iz);
  const v110 = hash(ix + 1, iy + 1, iz);
  const v001 = hash(ix, iy, iz + 1);
  const v101 = hash(ix + 1, iy, iz + 1);
  const v011 = hash(ix, iy + 1, iz + 1);
  const v111 = hash(ix + 1, iy + 1, iz + 1);
  return lerp(lerp(lerp(v000, v100, sx), lerp(v010, v110, sx), sy),
              lerp(lerp(v001, v101, sx), lerp(v011, v111, sx), sy), sz);
};

const fbm3D = (x: number, y: number, z: number, octaves: number) => {
  let v = 0, a = 1, t = 0;
  for (let i = 0; i < octaves; i++) {
    const f = 1 << i;
    v += a * noise3D(x * f, y * f, z * f);
    t += a;
    a *= 0.5;
  }
  return v / t;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export class Venus extends Planet {
  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const volcanoes = fbm3D(nx * 6 + 50, ny * 6 + 100, nz * 6 + 150, 4);
    const plains = fbm3D(nx * 15 + 200, ny * 15 + 300, nz * 15 + 400, 3);
    const elev = volcanoes * 0.6 + plains * 0.4;
    const maxDisp = this.visualRadius * 0.015;
    if (elev > 0.35) return ((elev - 0.35) / 0.65) ** 2 * maxDisp;
    return -(0.35 - elev) / 0.35 * maxDisp * 0.05;
  }

  atmosphereGlow: AtmosphereGlow;

  constructor(position: Vec3, velocity: Vec3) {
    super('venus', 1.46e26 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2, position, velocity, 6.052e6);

    const visualR = this.visualRadius;

    const loader = new THREE.TextureLoader();
    const tex = loader.load(assetUrl('/textures/venus.jpg'), (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 4;
    });

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.015;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const volcanoes = fbm3D(nx * 6 + 50, ny * 6 + 100, nz * 6 + 150, 4);
      const plains = fbm3D(nx * 15 + 200, ny * 15 + 300, nz * 15 + 400, 3);
      const elev = volcanoes * 0.6 + plains * 0.4;

      let disp = 0;
      if (elev > 0.35) disp = ((elev - 0.35) / 0.65) ** 2 * maxDisp;
      else disp = -(0.35 - elev) / 0.35 * maxDisp * 0.05;

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

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xe8a84c, 0.4);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}