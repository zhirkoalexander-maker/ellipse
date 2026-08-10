import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, EARTH_MASS, assetUrl } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

function srand(seed: number): () => number {
  let s = seed | 0;
  return () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

function makeCloudTexture(): THREE.CanvasTexture {
  const W = 2048, H = 1024;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d')!;
  const img = ctx.createImageData(W, H);
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const v = py / H, u = px / W;
      const lat = (v - 0.5) * Math.PI, lon = u * Math.PI * 2;
      const nx = Math.cos(lat) * Math.cos(lon);
      const ny = Math.cos(lat) * Math.sin(lon);
      const nz = Math.sin(lat);
      let cl = (Math.sin(nx * 3 + ny * 1.3 + nz * 0.7) * 0.5 + 0.5) * 0.4
        + (Math.sin((nx + 1.7) * 6 + nz * 1.1) * 0.5 + 0.5) * 0.3;
      cl *= Math.max(0, 1 - Math.abs(v - 0.5) * 1.2);
      cl = Math.max(0, Math.min(255, (cl - 0.4) * 2.5 * 255));
      const idx = (py * W + px) * 4;
      img.data[idx] = img.data[idx + 1] = img.data[idx + 2] = cl;
      img.data[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

function makeNightTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#000000'; ctx.fillRect(0, 0, W, H);
  const rng = srand(42);
  const cons = [
    { lat: 0.7, lon: -1.8, rx: 0.5, ry: 0.8 },
    { lat: -0.4, lon: -1.3, rx: 0.6, ry: 0.35 },
    { lat: 0.1, lon: 0.6, rx: 0.55, ry: 0.4 },
    { lat: 0.5, lon: 1.5, rx: 0.6, ry: 0.4 },
    { lat: 0.85, lon: 0.4, rx: 0.25, ry: 0.3 },
  ];
  for (const cn of cons) {
    const cx = (cn.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - cn.lat) / Math.PI * H;
    const rx = cn.rx / (2 * Math.PI) * W;
    const ry = cn.ry / Math.PI * H;
    for (let i = 0; i < 30; i++) {
      const dx = (rng() - 0.5) * rx * 2;
      const dy = (rng() - 0.5) * ry * 2;
      if ((dx / rx) ** 2 + (dy / ry) ** 2 > 1) continue;
      const b = 120 + Math.floor(rng() * 135);
      ctx.fillStyle = `rgb(${b},${Math.floor(b * 0.85)},${Math.floor(b * 0.5)})`;
      ctx.beginPath();
      ctx.arc(cx + dx, cy + dy, 1 + rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Earth extends Planet {
  atmosphereGlow: AtmosphereGlow;
  private cloudMesh: THREE.Mesh;

  constructor(position: Vec3, velocity: Vec3) {
    super('earth', EARTH_MASS, position, velocity, 6.371e6 * 2);

    const visualR = this.visualRadius;
    const SEG = 320;

    const geom = new THREE.SphereGeometry(visualR, SEG, SEG);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const colors: number[] = [];
    const maxDisp = visualR * 0.035;
    const oceanD = visualR * 0.007;

    // Single pass: compute height → displace → color
    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR, ny = vert.y / visualR, nz = vert.z / visualR;
      const h = this.terrainAt(nx, ny, nz, maxDisp, oceanD);
      vert.setLength(visualR + h);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);

      const t = Math.max(-1, Math.min(1, h / maxDisp));
      let cr: number, cg: number, cb: number;
      if (t < -0.6) { cr = 0.005; cg = 0.04; cb = 0.22; }
      else if (t < -0.15) { cr = 0.02; cg = 0.10; cb = 0.38; }
      else if (t < 0.02) { cr = 0.50; cg = 0.46; cb = 0.28; }
      else if (t < 0.22) { cr = 0.12; cg = 0.35; cb = 0.08; }
      else if (t < 0.50) { cr = 0.18; cg = 0.25; cb = 0.08; }
      else if (t < 0.78) { cr = 0.35; cg = 0.30; cb = 0.20; }
      else { cr = 0.92; cg = 0.88; cb = 0.85; }
      colors.push(cr, cg, cb);
    }
    posAttr.needsUpdate = true;
    geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      roughness: 0.85,
      metalness: 0.05,
      vertexColors: true,
      emissiveMap: makeNightTexture(),
      emissive: new THREE.Color(0xffdd66),
      emissiveIntensity: 0.3,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    this.loadTexture().catch(() => {});

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4488ff, 2.5, visualR * 0.10);
    this.mesh.add(this.atmosphereGlow.getMesh());

    const cloudTex = makeCloudTexture();
    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTex, transparent: true, opacity: 0.3,
      depthWrite: false, side: THREE.DoubleSide, roughness: 1, metalness: 0,
    });
    const cloudGeom = new THREE.SphereGeometry(visualR * 1.008, 64, 32);
    this.cloudMesh = new THREE.Mesh(cloudGeom, cloudMat);
    this.cloudMesh.position.copy(this.mesh.position);
    this.mesh.add(this.cloudMesh);
  }

  private terrainAt(nx: number, ny: number, nz: number, maxDisp: number, oceanD: number): number {
    const f1 = Math.sin(nx * 5 + ny * 3.5) * 0.5 + Math.cos(ny * 4.5 - nz * 3) * 0.3;
    const f2 = Math.sin(nz * 7 + nx * 3 + ny * 5) * 0.2 + Math.sin(nx * 13 + ny * 9 + nz * 11) * 0.12;
    const f3 = Math.sin(nx * 20 + nz * 16) * 0.06 + Math.cos(ny * 18 + nx * 13) * 0.04;
    const f4 = Math.sin(nx * 38 + ny * 33 + nz * 42) * 0.02;
    const elev = ((f1 + f2 + f3 + f4) * 0.35 + 0.5) * 1.05;

    if (elev > 0.48) { const h = (elev - 0.48) / 0.52; return h * h * maxDisp; }
    if (elev > 0.38) { return (elev - 0.38) / 0.1 * maxDisp * 0.2; }
    return -(0.38 - elev) / 0.38 * oceanD;
  }

  private async loadTexture(): Promise<void> {
    try {
      const tex = await new THREE.TextureLoader().loadAsync(assetUrl('/textures/earth_daymap.jpg'));
      tex.colorSpace = THREE.SRGBColorSpace;
      (this.mesh.material as THREE.MeshStandardMaterial).map = tex;
      (this.mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
    } catch {}
  }

  updateClouds(dt: number, sunPosWC?: [number, number, number]): void {
    this.cloudMesh.rotation.y += dt * 0.01;
    if (sunPosWC) {
      const mat = this.mesh.material as THREE.MeshStandardMaterial;
      const sl = Math.sqrt(sunPosWC[0] ** 2 + sunPosWC[1] ** 2 + sunPosWC[2] ** 2) || 1;
      this.mesh.lookAt(
        this.mesh.position.x + sunPosWC[0] / sl * 100,
        this.mesh.position.y + sunPosWC[1] / sl * 100,
        this.mesh.position.z + sunPosWC[2] / sl * 100
      );
      mat.emissiveIntensity = 0.15;
    }
  }
}
