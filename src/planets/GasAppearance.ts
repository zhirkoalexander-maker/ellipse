import * as THREE from 'three';
import { terrainNoise } from './Terrain';

type CloudPlanet='jupiter'|'saturn'|'uranus'|'neptune'|'venus';
const palettes:Record<CloudPlanet,[number[],number[]]>={
  jupiter:[[239,227,204],[121,70,43]],saturn:[[238,222,179],[160,130,89]],
  uranus:[[180,218,218],[98,170,181]],neptune:[[121,179,206],[40,94,142]],
  venus:[[237,218,165],[164,135,86]],
};

/** Periodic cloud flow; the longitude seam and both poles meet exactly. */
export function gasColor(kind: CloudPlanet, u: number, v: number): number[] {
  const lon = u * Math.PI * 2, fade = Math.sin(v * Math.PI);
  const x=Math.cos(lon)*fade,y=Math.cos(v*Math.PI),z=Math.sin(lon)*fade;
  const eddies=terrainNoise(x*24+17,y*42+7,z*24+31);
  const fine=terrainNoise(x*85+8,y*110,z*85+12);
  const flow = fade * (Math.sin(lon * 7 + v * 25) * 0.004 + Math.sin(lon * 19 - v * 61) * 0.002+(eddies-.5)*.025);
  const latitude = v + flow;
  const bands = Math.sin(latitude * Math.PI * 18) * 0.55 + Math.sin(latitude * Math.PI * 38 + 0.7) * 0.25;
  const wisps = Math.sin(latitude * 610 + Math.sin(lon * 11 + v * 80) * fade * 3) * 0.045;
  let t = THREE.MathUtils.clamp(0.5 + bands * 0.62 + wisps+(fine-.5)*.23, 0, 1);
  if(kind==='venus')t=.25+eddies*.5+fine*.15+Math.sin(lon*3+v*11)*fade*.1;
  if(kind==='uranus'||kind==='neptune')t=.5+bands*.18+(eddies-.5)*.08;
  const [light,dark]=palettes[kind];
  const rgb = light.map((c, i) => c + (dark[i]! - c) * t);
  if (kind === 'jupiter') {
    const dx = ((u - 0.33 + 1.5) % 1 - 0.5) / 0.053, dy = (v - 0.39) / 0.029;
    const d = Math.hypot(dx, dy), angle = Math.atan2(dy, dx);
    const mask = 1 - THREE.MathUtils.smoothstep(d, 0.82, 1.18);
    const swirl = Math.sin(d * 22 + angle * 2) * 9;
    const storm = [182 + swirl, 93 + swirl, 60 + swirl];
    for (let i = 0; i < 3; i++) rgb[i] = rgb[i]! + (storm[i]! - rgb[i]!) * mask;
  }
  if(kind==='neptune'){
    const dx=((u-.63+1.5)%1-.5)/.06,dy=(v-.42)/.023;
    const storm=1-THREE.MathUtils.smoothstep(Math.hypot(dx,dy),.75,1.05);
    for(let i=0;i<3;i++)rgb[i]=rgb[i]!*(1-storm*.48);
    const cloud=Math.exp(-(((dy-1.8)/.3)**2+((dx+.4)/1.5)**2));
    for(let i=0;i<3;i++)rgb[i]=rgb[i]!+(230-rgb[i]!)*cloud*.8;
  }
  if(kind==='uranus'){
    const cap=THREE.MathUtils.smoothstep(Math.abs(y),.68,.82);
    for(let i=0;i<3;i++)rgb[i]=rgb[i]!+([199,224,220][i]!-rgb[i]!)*cap*.7;
  }
  const polarShade = 1 - Math.pow(Math.abs(v - 0.5) * 2, 6) * 0.23;
  return rgb.map(c => Math.round(c * polarShade));
}

export function gasTexture(kind: CloudPlanet): THREE.DataTexture {
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
