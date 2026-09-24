import * as THREE from 'three';

/** Periodic cloud flow; the longitude seam and both poles meet exactly. */
export function gasColor(kind: 'jupiter' | 'saturn', u: number, v: number): number[] {
  const lon = u * Math.PI * 2, fade = Math.sin(v * Math.PI);
  const flow = fade * (Math.sin(lon * 7 + v * 25) * 0.004 + Math.sin(lon * 19 - v * 61) * 0.002);
  const latitude = v + flow;
  const bands = Math.sin(latitude * Math.PI * 18) * 0.55 + Math.sin(latitude * Math.PI * 38 + 0.7) * 0.25;
  const wisps = Math.sin(latitude * 610 + Math.sin(lon * 11 + v * 80) * fade * 3) * 0.045;
  const t = THREE.MathUtils.clamp(0.5 + bands * 0.48 + wisps, 0, 1);
  const light = kind === 'jupiter' ? [232, 218, 190] : [226, 210, 167];
  const dark = kind === 'jupiter' ? [139, 87, 57] : [171, 146, 105];
  const rgb = light.map((c, i) => c + (dark[i]! - c) * t);
  if (kind === 'jupiter') {
    const dx = ((u - 0.33 + 1.5) % 1 - 0.5) / 0.053, dy = (v - 0.39) / 0.029;
    const d = Math.hypot(dx, dy), angle = Math.atan2(dy, dx);
    const mask = 1 - THREE.MathUtils.smoothstep(d, 0.82, 1.18);
    const swirl = Math.sin(d * 22 + angle * 2) * 9;
    const storm = [182 + swirl, 93 + swirl, 60 + swirl];
    for (let i = 0; i < 3; i++) rgb[i] = rgb[i]! + (storm[i]! - rgb[i]!) * mask;
  }
  const polarShade = 1 - Math.pow(Math.abs(v - 0.5) * 2, 6) * 0.23;
  return rgb.map(c => Math.round(c * polarShade));
}

export function gasTexture(kind: 'jupiter' | 'saturn'): THREE.DataTexture {
  const width = 1024, height = 512, data = new Uint8Array(width * height * 4);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4, rgb = gasColor(kind, x / (width - 1), y / (height - 1));
    data.set([...rgb, 255], i);
  }
  const texture = new THREE.DataTexture(data, width, height);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

export function ringTexture(): THREE.DataTexture {
  const width = 1024, data = new Uint8Array(width * 4);
  for (let x = 0; x < width; x++) {
    const t = x / (width - 1);
    const ringlets = Math.sin(t * 730) * 0.07 + Math.sin(t * 211) * 0.045;
    const brightness = (t < 0.28 ? 0.66 : t < 0.68 ? 0.95 : 0.8) + ringlets;
    const gap = (t > 0.68 && t < 0.72) || (t > 0.93 && t < 0.938);
    data.set([218 * brightness, 204 * brightness, 177 * brightness, gap ? 0 : t < 0.28 ? 95 : 235], x * 4);
  }
  const tex = new THREE.DataTexture(data, width, 1);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

export function ringGeometry(radius: number): THREE.RingGeometry {
  const inner = radius * 1.23, outer = radius * 2.32;
  const geometry = new THREE.RingGeometry(inner, outer, 256);
  const positions = geometry.attributes.position!, uv = geometry.attributes.uv!;
  for (let i = 0; i < positions.count; i++) {
    const r = Math.hypot(positions.getX(i), positions.getY(i));
    uv.setXY(i, (r - inner) / (outer - inner), 0.5);
  }
  return geometry;
}
