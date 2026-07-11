import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, EARTH_MASS } from '../config/constants';
import { generateEarthBumpMap } from '../effects/ProceduralTextures';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

/** Generate a higher-res procedural Earth texture as a synchronous fallback. */
function generateEarthTextureFallback(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Deep ocean
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#2a4a7a');
  grad.addColorStop(0.5, '#2a5d8b');
  grad.addColorStop(1, '#1f4878');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Continent shapes (lat,lon in radians, then radii, then colour)
  const continents: { lat: number; lon: number; rx: number; ry: number; color: string }[] = [
    { lat: 0.7, lon: -2.0, rx: 0.55, ry: 0.5, color: '#5a8c3f' },
    { lat: 0.65, lon: -1.6, rx: 0.35, ry: 0.35, color: '#6a9c4f' },
    { lat: -0.35, lon: -1.4, rx: 0.4, ry: 0.6, color: '#6a9c4f' },
    { lat: 0.85, lon: 0.4, rx: 0.2, ry: 0.22, color: '#7aac5a' },
    { lat: 0.1, lon: 0.6, rx: 0.45, ry: 0.5, color: '#8a9c4f' },
    { lat: 0.5, lon: 1.5, rx: 0.6, ry: 0.4, color: '#7a9c4a' },
    { lat: 0.3, lon: 1.1, rx: 0.25, ry: 0.15, color: '#8aac5a' },
    { lat: -0.4, lon: 1.7, rx: 0.15, ry: 0.35, color: '#7a9c4f' },
    { lat: 1.0, lon: -2.5, rx: 0.08, ry: 0.1, color: '#6a9c4f' },
    { lat: -0.7, lon: -1.1, rx: 0.08, ry: 0.08, color: '#7aac5a' },
  ];

  for (const c of continents) {
    ctx.fillStyle = c.color;
    ctx.beginPath();
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.rx / (2 * Math.PI) * W;
    const ry = c.ry / Math.PI * H;
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();

    // Add detailed dots for texture
    const seed = c.lat * 1000 + c.lon * 100;
    const rng = (() => {
      let s = seed | 0;
      return () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    })();
    for (let i = 0; i < 80; i++) {
      const dx = (rng() - 0.5) * rx * 1.8;
      const dy = (rng() - 0.5) * ry * 1.8;
      const d2 = (dx / rx) ** 2 + (dy / ry) ** 2;
      if (d2 < 1) {
        ctx.fillStyle = rng() > 0.5 ? '#2a5c1f' : '#6a9c4a';
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, 1 + rng() * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Polar caps
  ctx.fillStyle = '#c0d8e8';
  ctx.fillRect(0, 0, W, H * 0.05);
  ctx.fillRect(0, H * 0.95, W, H * 0.05);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Earth extends Planet {
  constructor(position: Vec3, velocity: Vec3) {
    super('earth', EARTH_MASS, position, velocity, 6.371e6);

    const visualR = this.visualRadius;
    const SEG = 200;

    const geom = new THREE.SphereGeometry(visualR, SEG, SEG);
    const mat = new THREE.MeshStandardMaterial({
      roughness: 0.9,
      metalness: 0.0,
      bumpMap: generateEarthBumpMap(),
      bumpScale: 0.5,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    // Terrain displacement (synchronous, before texture)
    this.generateTerrain(visualR);

    const fallbackTex = generateEarthTextureFallback();
    mat.map = fallbackTex;
    mat.needsUpdate = true;
  }

  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const n1 = Math.sin(nx * 3.0 + ny * 1.8) * 0.5 + Math.cos(ny * 2.5 - nz * 1.3) * 0.3;
    const n2 = Math.sin(nz * 1.8 + nx * 1.2 + ny * 0.6) * 0.2 + Math.sin(nx * 6.0 + ny * 3.0 + nz * 4.0) * 0.15;
    const n3 = Math.sin(nx * 12.0 + nz * 8.0) * 0.1 + Math.cos(ny * 10.0 + nx * 5.0) * 0.08;
    const n4 = Math.sin(nx * 25.0 + ny * 20.0 + nz * 30.0) * 0.05;
    const elev = ((n1 + n2 + n3 + n4) * 0.3 + 0.5) * 1.2;
    const maxDisp = this.visualRadius * 0.025;
    const oceanDepth = this.visualRadius * 0.005;
    if (elev > 0.4) {
      const h = (elev - 0.4) / 0.6;
      return h * h * maxDisp;
    }
    return -(0.4 - elev) / 0.4 * oceanDepth;
  }

  private generateTerrain(visualR: number): void {
    const g = this.mesh.geometry as THREE.SphereGeometry;
    const posAttr = g.attributes.position!;
    const vert = new THREE.Vector3();
    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;
      const disp = this.getTerrainHeightVisual(nx, ny, nz);
      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    g.computeVertexNormals();
  }
}
