import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, EARTH_MASS, assetUrl } from '../config/constants';
import { generateEarthBumpMap } from '../effects/ProceduralTextures';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

/**
 * Seeded random (mulberry32)
 */
function srand(seed: number): () => number {
  let s = seed | 0;
  return () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/** Generate a procedural cloud texture (grayscale, white = cloudy) */
function generateCloudTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const rng = srand(999);
  const imgData = ctx.createImageData(W, H);

  // Simple value noise approach
  const freq = 3;
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const u = px / W, v = py / H;
      const lat = (v - 0.5) * Math.PI;
      const lon = u * Math.PI * 2;
      const nx = Math.cos(lat) * Math.cos(lon);
      const ny = Math.cos(lat) * Math.sin(lon);
      const nz = Math.sin(lat);

      // Layered noise on sphere
      const n1 = Math.sin(nx * freq + ny * 1.3 + nz * 0.7) * 0.5 + 0.5;
      const n2 = Math.sin((nx + 1.7) * freq * 2 + nz * 1.1) * 0.5 + 0.5;
      const n3 = Math.cos((ny + 0.5) * freq * 4 - nx * 2.3) * 0.5 + 0.5;
      const n4 = Math.sin(nx * freq * 8 + ny * 6 + nz * 7) * 0.5 + 0.5;

      let cloud = (n1 * 0.4 + n2 * 0.3 + n3 * 0.2 + n4 * 0.1);
      // Reduce clouds over poles
      const polarFade = 1 - Math.abs(v - 0.5) * 1.2;
      cloud *= Math.max(0, polarFade);
      // Threshold for distinct clouds
      cloud = Math.max(0, (cloud - 0.4) * 2.5);

      const val = Math.min(255, Math.max(0, Math.round(cloud * 255)));
      const idx = (py * W + px) * 4;
      imgData.data[idx] = val;
      imgData.data[idx + 1] = val;
      imgData.data[idx + 2] = val;
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/** Generate a procedural city lights texture for the night side */
function generateNightLightsTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Black background (no lights)
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, W, H);

  // Continents mask (same as bump map but simplified)
  const continents: { lat: number; lon: number; rx: number; ry: number }[] = [
    { lat: 0.7, lon: -1.8, rx: 0.5, ry: 0.8 },
    { lat: -0.4, lon: -1.3, rx: 0.6, ry: 0.35 },
    { lat: 0.85, lon: 0.4, rx: 0.25, ry: 0.3 },
    { lat: 0.1, lon: 0.6, rx: 0.55, ry: 0.4 },
    { lat: 0.7, lon: 1.6, rx: 0.55, ry: 1.0 },
    { lat: -0.6, lon: 2.4, rx: 0.25, ry: 0.3 },
    { lat: 1.1, lon: -0.9, rx: 0.2, ry: 0.2 },
  ];

  const rng = srand(42);

  for (const c of continents) {
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.rx / (2 * Math.PI) * W;
    const ry = c.ry / Math.PI * H;

    // City clusters
    const numCities = 20 + Math.floor(rng() * 40);
    for (let i = 0; i < numCities; i++) {
      const dx = (rng() - 0.5) * rx * 2;
      const dy = (rng() - 0.5) * ry * 2;
      const d2 = (dx / rx) ** 2 + (dy / ry) ** 2;
      if (d2 > 1) continue;

      const px = cx + dx;
      const py = cy + dy;
      const size = 1 + rng() * 4;
      const bright = 100 + Math.floor(rng() * 155);

      // Warm yellow-white lights
      ctx.fillStyle = `rgb(${bright}, ${Math.floor(bright * 0.85)}, ${Math.floor(bright * 0.5)})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();

      // Light glow spread
      ctx.fillStyle = `rgba(255, 220, 100, ${0.05 + rng() * 0.1})`;
      ctx.beginPath();
      ctx.arc(px, py, size * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Major city hotspots (bigger, brighter)
    for (let i = 0; i < 3; i++) {
      const dx = (rng() - 0.5) * rx * 1.5;
      const dy = (rng() - 0.5) * ry * 1.5;
      const d2 = (dx / rx) ** 2 + (dy / ry) ** 2;
      if (d2 > 1) continue;

      const px = cx + dx;
      const py = cy + dy;
      ctx.fillStyle = '#ffdd66';
      ctx.beginPath();
      ctx.arc(px, py, 3 + rng() * 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 200, 80, 0.2)';
      ctx.beginPath();
      ctx.arc(px, py, 8 + rng() * 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Coastline glow (dimmer)
  for (const c of continents) {
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.rx / (2 * Math.PI) * W;
    const ry = c.ry / Math.PI * H;

    for (let i = 0; i < 30; i++) {
      const angle = rng() * Math.PI * 2;
      const dist = 0.85 + rng() * 0.2;
      const px = cx + Math.cos(angle) * rx * dist;
      const py = cy + Math.sin(angle) * ry * dist;
      const size = 1 + rng() * 2;
      ctx.fillStyle = `rgba(200, 180, 100, ${0.1 + rng() * 0.15})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function generateRoughnessMap(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const imageData = ctx.createImageData(W, H);
  const data = imageData.data;

  const continents: { lat: number; lon: number; rx: number; ry: number }[] = [
    { lat: 0.7, lon: -1.8, rx: 0.5, ry: 0.8 },
    { lat: -0.4, lon: -1.3, rx: 0.6, ry: 0.35 },
    { lat: 0.85, lon: 0.4, rx: 0.25, ry: 0.3 },
    { lat: 0.1, lon: 0.6, rx: 0.55, ry: 0.4 },
    { lat: 0.7, lon: 1.6, rx: 0.55, ry: 1.0 },
    { lat: -0.6, lon: 2.4, rx: 0.25, ry: 0.3 },
    { lat: 1.1, lon: -0.9, rx: 0.2, ry: 0.2 },
  ];

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const u = px / W, v = py / H;
      const lat = (v - 0.5) * Math.PI;
      const lon = u * Math.PI * 2 - Math.PI;

      let isLand = false;
      for (const c of continents) {
        const dlat = (lat - c.lat) / c.rx;
        const dlon = (lon - c.lon) / c.ry;
        if (dlat * dlat + dlon * dlon < 1) { isLand = true; break; }
      }

      // Oceans: smooth (low roughness), Land: rough (high roughness)
      const v2 = isLand ? 180 : 40;
      const idx = (py * W + px) * 4;
      data[idx] = data[idx + 1] = data[idx + 2] = v2;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/** Generate a procedural Earth texture as a synchronous fallback. */
function generateEarthTextureFallback(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Ocean (deeper blue, more vibrant)
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#1a3a8c');
  grad.addColorStop(0.5, '#2266cc');
  grad.addColorStop(1, '#1a4a9a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

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

    const seed = c.lat * 1000 + c.lon * 100;
    const rng = srand(seed);
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
  atmosphereGlow: AtmosphereGlow;
  private cloudMesh: THREE.Mesh;
  private cloudTex: THREE.CanvasTexture;

  constructor(position: Vec3, velocity: Vec3) {
    super('earth', EARTH_MASS, position, velocity, 6.371e6);

    const visualR = this.visualRadius;
    const SEG = 200;

    const geom = new THREE.SphereGeometry(visualR, SEG, SEG);
    const roughnessMap = generateRoughnessMap();
    const mat = new THREE.MeshStandardMaterial({
      roughness: 0.9,
      roughnessMap,
      metalness: 0.0,
      bumpMap: generateEarthBumpMap(),
      bumpScale: 0.5,
      emissiveMap: generateNightLightsTexture(),
      emissive: new THREE.Color(0xffdd66),
      emissiveIntensity: 0.15,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    // Terrain displacement (synchronous, before texture)
    this.generateTerrain(visualR);

    const fallbackTex = generateEarthTextureFallback();
    mat.map = fallbackTex;
    mat.needsUpdate = true;

    this.loadHighResTexture().catch(() => {});

    // Atmosphere glow
    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4488ff, 0.6);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Cloud layer
    this.cloudTex = generateCloudTexture();
    const cloudMat = new THREE.MeshStandardMaterial({
      map: this.cloudTex,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      side: THREE.DoubleSide,
      roughness: 1,
      metalness: 0,
    });
    const cloudGeom = new THREE.SphereGeometry(visualR * 1.008, SEG, SEG);
    this.cloudMesh = new THREE.Mesh(cloudGeom, cloudMat);
    this.cloudMesh.position.copy(this.mesh.position);
    this.mesh.add(this.cloudMesh);
  }

  private async loadHighResTexture(): Promise<void> {
    const loader = new THREE.TextureLoader();
    const tex = await loader.loadAsync(assetUrl('/textures/earth_daymap.jpg'));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const mat = this.mesh.material as THREE.MeshStandardMaterial;
    mat.map = tex;
    mat.needsUpdate = true;
  }

  /** Update cloud rotation + day/night cycle driven by sun direction */
  updateClouds(dt: number, sunPosWC?: [number, number, number]): void {
    this.cloudMesh.rotation.y += dt * 0.008;
    if (!sunPosWC) return;

    const mat = this.mesh.material as THREE.MeshStandardMaterial;
    const sl = Math.sqrt(sunPosWC[0]*sunPosWC[0] + sunPosWC[1]*sunPosWC[1] + sunPosWC[2]*sunPosWC[2]) || 1;
    const sx = sunPosWC[0] / sl, sy = sunPosWC[1] / sl, sz = sunPosWC[2] / sl;

    // Turn Earth day side towards sun
    this.mesh.lookAt(
      this.mesh.position.x + sx * 100,
      this.mesh.position.y + sy * 100,
      this.mesh.position.z + sz * 100
    );

    // Compute camera position relative to Earth center
    const ex = this.mesh.position.x, ey = this.mesh.position.y, ez = this.mesh.position.z;
    // Get global sun light direction in world space
    // Night side = dot(camera→earthCenter, sun→earthCenter) < 0 means camera is on night side
    // emissive = city lights visible at night
    // Simple: emissiveIntensity = city lights intensity modulated by day/night
    mat.emissiveIntensity = 0.08; // Always faint city lights
  }

  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const n1 = Math.sin(nx * 3.0 + ny * 1.8) * 0.5 + Math.cos(ny * 2.5 - nz * 1.3) * 0.3;
    const n2 = Math.sin(nz * 1.8 + nx * 1.2 + ny * 0.6) * 0.2 + Math.sin(nx * 6.0 + ny * 3.0 + nz * 4.0) * 0.15;
    const n3 = Math.sin(nx * 12.0 + nz * 8.0) * 0.1 + Math.cos(ny * 10.0 + nx * 5.0) * 0.08;
    const n4 = Math.sin(nx * 25.0 + ny * 20.0 + nz * 30.0) * 0.05;
    const elev = ((n1 + n2 + n3 + n4) * 0.3 + 0.5) * 1.2;
    const maxDisp = this.visualRadius * 0.08;
    const oceanDepth = this.visualRadius * 0.012;
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
