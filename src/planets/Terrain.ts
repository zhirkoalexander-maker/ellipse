import * as THREE from 'three';
import { earthLandFraction, earthLaunchFrame } from './EarthGeography';

/** Continuous 3D value noise: no longitude seam or pole singularity. */
export function terrainNoise(x: number, y: number, z: number): number {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const smooth = (v: number) => v * v * (3 - 2 * v);
  const fx = smooth(x - ix), fy = smooth(y - iy), fz = smooth(z - iz);
  const hash = (a: number, b: number, c: number) => {
    const v = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453;
    return v - Math.floor(v);
  };
  let value = 0;
  for (let a = 0; a <= 1; a++) for (let b = 0; b <= 1; b++) for (let c = 0; c <= 1; c++) {
    value += hash(ix + a, iy + b, iz + c) * (a ? fx : 1 - fx) * (b ? fy : 1 - fy) * (c ? fz : 1 - fz);
  }
  return value;
}

const craters = Array.from({ length: 80 }, (_, i) => {
  const y = 1 - (i + 0.5) * 2 / 80, angle = i * 2.399963;
  const r = Math.sqrt(1 - y * y);
  return { x: Math.cos(angle) * r, y, z: Math.sin(angle) * r, size: 0.065 + (i % 7) * 0.017 };
});

// Broad mountain belts; finer ridges remain continuous procedural terrain.
const earthRanges=[
  [45,-112,19,7],[-20,-70,30,4],[30,85,5,24],[46,10,3,10],
  [42,44,3,10],[9,39,12,5],[-5,138,4,13],[-43,171,6,3],
];
function earthMountainMask(x:number,y:number,z:number):number {
 const lat=Math.asin(Math.max(-1,Math.min(1,y)))*180/Math.PI,lon=Math.atan2(z,x)*180/Math.PI;
 let mask=0;
 for(const [a,b,latWidth,lonWidth] of earthRanges){
  const dy=(lat-a!)/latWidth!,dx=(((lon-b!+540)%360)-180)/lonWidth!;
  mask=Math.max(mask,Math.exp(-(dx*dx+dy*dy)*2));
 }
 return mask;
}

function smallCraters(x: number, y: number, z: number): number {
  x *= 65; y *= 65; z *= 65;
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  let nearest = Infinity;
  const jitter = (a: number, b: number, c: number) => {
    const n = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453;
    return n - Math.floor(n);
  };
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) {
    const cx = ix + a, cy = iy + b, cz = iz + c;
    const dx = x - cx - jitter(cx, cy, cz);
    const dy = y - cy - jitter(cx + 71, cy, cz);
    const dz = z - cz - jitter(cx, cy + 37, cz);
    nearest = Math.min(nearest, dx * dx + dy * dy + dz * dz);
  }
  const d = Math.sqrt(nearest);
  const bowl = d < 0.55 ? -0.0015 * (1 - (d / 0.55) ** 2) ** 2 : 0;
  return bowl + 0.0012 * Math.exp(-(((d - 0.62) / 0.12) ** 2));
}

/** Height as a fraction of planetary radius; shared by meshes and collisions. */
export function rockyTerrain(name: string, x: number, y: number, z: number): number {
  const seed = name === 'earth' ? 11 : name === 'mars' ? 31 : name === 'venus' ? 57 : 83;
  const broad = terrainNoise(x * 9 + seed, y * 9 + 23, z * 9 + 45);
  const ridges = 1 - Math.abs(terrainNoise(x * 45 + seed, y * 45, z * 45) * 2 - 1);
  const detail = terrainNoise(x * 240 + seed, y * 240 + 17, z * 240 + 91);
  let height = (broad - 0.35) * 0.004 + Math.pow(ridges, 5) * 0.003 + (detail - 0.5) * 0.0007;
  if (name === 'earth') {
    let land = earthLandFraction(x,y,z);
    const mountainRegion = earthMountainMask(x,y,z);
    // Broad lowlands, folded ranges and smaller foothills; avoid isolated giant spikes.
    const fold=terrainNoise(x*18+detail*1.5+71,y*18+13,z*18+29);
    const ridgeDetail=1-Math.abs(terrainNoise(x*130+fold*2,y*130+31,z*130+11)*2-1);
    const ranges=mountainRegion*Math.pow(ridges,2.5)*(.0012+ridgeDetail*.0006);
    const foothills=(detail-.5)*.000045*(.25+mountainRegion);
    const dotFrame=(v:number[])=>x*v[0]!+y*v[1]!+z*v[2]!;
    const dot = dotFrame(earthLaunchFrame.up);
    const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
    const east=dotFrame(earthLaunchFrame.east);
    const north=dotFrame(earthLaunchFrame.north);
    const local=1-THREE.MathUtils.smoothstep(angle,.008,.012);
    // A continuous coastal plain: launch site inland, open sea to the east.
    const coast=.0004-east+.00009*Math.sin(north*6000)+.00003*Math.sin(north*13000);
    const localLand=THREE.MathUtils.smoothstep(coast,-.000018,.000018);
    land=THREE.MathUtils.lerp(land,localLand,local);
    const inland=Math.exp(-(((east+.0012)/.00065)**2)-((north-.0004)/.0015)**2);
    const folds=1-Math.abs(terrainNoise(x*1800+41,y*1800+19,z*1800)*2-1);
    const rolling=terrainNoise(x*9000+17,y*9000+3,z*9000+61);
    // Three separated peaks inland; their footprints end before the launch plain.
    let peaks=0;
    for(const [e,n,h] of [[-.003,.001,.00018],[-.0017,.0021,.00014],[-.0018,-.002,.00016]]){
      const slope=Math.max(0,1-((east-e!)/.00065)**2-((north-n!)/.0008)**2);
      peaks+=h!*slope*slope;
    }
    const coastalHeight=.0000018+rolling*.000004+inland*(.000015+Math.pow(folds,2)*.00004)+peaks;
    const continentalHeight=.00004+broad*.00006+ranges+foothills;
    height=THREE.MathUtils.smoothstep(land,.02,.85)*THREE.MathUtils.lerp(continentalHeight,coastalHeight,local);
    const pad=1-THREE.MathUtils.smoothstep(angle,.00006,.00014);
    return THREE.MathUtils.lerp(Math.max(0,height),12/(6.371e6*2.5),pad);

  }
  if (name === 'moon' || name === 'mercury') {
    height = (broad - 0.5) * 0.002 + (detail - 0.5) * 0.001 + smallCraters(x, y, z);
    for (const crater of craters) {
      const dot = x * crater.x + y * crater.y + z * crater.z;
      if (dot < Math.cos(crater.size * 1.35)) continue;
      const d = Math.acos(Math.min(1, dot)) / crater.size;
      const bowl = d < 1 ? -0.0025 * (1 - d * d) ** 2 : 0;
      const rim = 0.0018 * Math.exp(-(((d - 1) / 0.15) ** 2));
      height += bowl + rim;
    }
  }
  return height;
}

export function terrainColor(name: string, height: number, direction: THREE.Vector3): THREE.Color {
  const grain = terrainNoise(direction.x * 320 + 8, direction.y * 320 + 19, direction.z * 320 + 51);
  const color = new THREE.Color(name === 'earth' ? 0x456b43 : name === 'mars' ? 0xa16648 : name === 'venus' ? 0x978567 : name === 'pluto' ? 0xb4b3a8 : 0x8e9193);
  if (name === 'earth') {
    if (height < 0.0000001) {
      const depth = terrainNoise(direction.x * 3 + 11, direction.y * 3 + 23, direction.z * 3 + 45);
      return new THREE.Color(0x064477).lerp(new THREE.Color(0x168eaa), THREE.MathUtils.smoothstep(depth, 0.48, 0.55));
    }
    const moisture=terrainNoise(direction.x*24+51,direction.y*24+8,direction.z*24+16);
    color.lerp(new THREE.Color(0x9b9857),THREE.MathUtils.smoothstep(moisture,.48,.52)*.8);
    color.lerp(new THREE.Color(0xb9ad7c), 1 - THREE.MathUtils.smoothstep(height, 0.00000025, 0.00000075));
    color.lerp(new THREE.Color(0x80766a), THREE.MathUtils.smoothstep(height, 0.00044, 0.00049));
    const snowLine=.0009-Math.abs(direction.y)*.0005;
    color.lerp(new THREE.Color(0xe3e9ec), THREE.MathUtils.smoothstep(height, snowLine, snowLine+.000035));
  }
  if(name!=='earth') {
    const region=terrainNoise(direction.x*9+3,direction.y*9+8,direction.z*9+21);
    const mask=THREE.MathUtils.smoothstep(region,.46,.5);
    const palettes:Record<string,[number,number]>={moon:[0x41454b,0xb7b4aa],mercury:[0x575047,0xb9ae97],mars:[0x493d36,0xc87543],venus:[0x615143,0xd0a15f],pluto:[0x714e3e,0xe1d9c9]};
    const palette=palettes[name]||palettes.moon!;
    color.setHex(palette[0]).lerp(new THREE.Color(palette[1]),mask);
    if(name==='mars')color.lerp(new THREE.Color(0xe8e5d9),THREE.MathUtils.smoothstep(Math.abs(direction.y),.93,.945));
  }
  return color.multiplyScalar(0.76 + grain * 0.42);
}

export function paintTerrain(geometry: THREE.BufferGeometry, name: string, radius: number): void {
  const vertices = geometry.attributes.position!, colors: number[] = [], direction = new THREE.Vector3();
  for (let i = 0; i < vertices.count; i++) {
    direction.fromBufferAttribute(vertices, i);
    const height = direction.length() / radius - 1;
    const color = terrainColor(name, height, direction.normalize());
    colors.push(color.r, color.g, color.b);
  }
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
}
