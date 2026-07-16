import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateSaturnTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

function createRingTexture(): THREE.CanvasTexture {
  const W = 1024, H = 64;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Gradient from inner to outer
  const grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0, '#8a7a5a');
  grad.addColorStop(0.05, '#b8a888');
  grad.addColorStop(0.12, '#d4c8a8');
  grad.addColorStop(0.2, '#c0b898');
  grad.addColorStop(0.35, '#e8ddd0');
  grad.addColorStop(0.5, '#c0b090');
  grad.addColorStop(0.65, '#d8ccb0');
  grad.addColorStop(0.8, '#a89878');
  grad.addColorStop(0.9, '#786858');
  grad.addColorStop(1, '#584838');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Noise for texture
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = 1 + Math.random() * 4;
    const b = 120 + Math.random() * 80;
    ctx.fillStyle = `rgba(${b},${b-20},${b-40},${0.2 + Math.random() * 0.4})`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }

  // Cassini Division (main gap)
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(W * 0.43, 0, W * 0.04, H);

  // Encke Gap
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(W * 0.72, 0, W * 0.015, H);

  // Inner gaps
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.fillRect(W * 0.1, 0, W * 0.02, H);
  ctx.fillRect(W * 0.17, 0, W * 0.01, H);
  ctx.fillRect(W * 0.55, 0, W * 0.02, H);

  // Subtle ringlets
  ctx.fillStyle = 'rgba(200,190,170,0.15)';
  for (let x = 0; x < W; x += 8) {
    ctx.fillRect(x, 0, 2, H);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 4;
  return tex;
}

export class Saturn extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super('saturn', 5.683e27 * 5 * 4 * 1.5, position, velocity, 5.8232e7);

    const visualR = this.visualRadius;

    const tex = generateSaturnTexture();

    const geom = new THREE.SphereGeometry(visualR, 64, 32);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.015;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;
      const bands = fbm3D(nx * 8 + 10, ny * 8 + 20, nz * 8 + 30, 4);
      const micro = fbm3D(nx * 30 + 100, ny * 30 + 200, nz * 30 + 300, 3);
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
    this.mesh.rotation.z = 26.7 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xf4e4a1, 0.1);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Improved rings with texture
    const ringTex = createRingTexture();
    const ringGeom = new THREE.RingGeometry(visualR * 1.15, visualR * 2.4, 256);
    const ringMat = new THREE.MeshBasicMaterial({
      map: ringTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });
    const rings = new THREE.Mesh(ringGeom, ringMat);
    rings.rotation.x = -Math.PI / 2;
    rings.rotation.z = 26.7 * Math.PI / 180;
    this.mesh.add(rings);

    // Outer faint ring
    const outerGeom = new THREE.RingGeometry(visualR * 2.4, visualR * 2.8, 128);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x887868,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
      depthWrite: false,
    });
    const outerRing = new THREE.Mesh(outerGeom, outerMat);
    outerRing.rotation.x = -Math.PI / 2;
    outerRing.rotation.z = 26.7 * Math.PI / 180;
    this.mesh.add(outerRing);
  }
}
