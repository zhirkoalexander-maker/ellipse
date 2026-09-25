import * as THREE from 'three';

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
    const continent = terrainNoise(x * 3 + 11, y * 3 + 23, z * 3 + 45);
    const land = THREE.MathUtils.smoothstep(continent, 0.48, 0.64);
    const mountainRegion = THREE.MathUtils.smoothstep(terrainNoise(x * 7 + 41, y * 7 + 9, z * 7 + 62), 0.58, 0.78);
    // Broad lowlands, folded ranges and smaller foothills; avoid isolated giant spikes.
    const fold=terrainNoise(x*18+detail*1.5+71,y*18+13,z*18+29);
    const ridgeDetail=1-Math.abs(terrainNoise(x*130+fold*2,y*130+31,z*130+11)*2-1);
    const ranges=mountainRegion*Math.pow(ridges,3)*(.0005+ridgeDetail*.00025);
    const foothills=(detail-.5)*.000045*(.25+mountainRegion);
    height = (continent - 0.56) * 0.0013 + land * (ranges + foothills);
    const lat = 28.5 * Math.PI / 180, lon = -80.5 * Math.PI / 180;
    const dot = x * Math.cos(lat) * Math.cos(lon) + y * Math.sin(lat) + z * Math.cos(lat) * Math.sin(lon);
    const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
    const blend = Math.max(0, Math.min(1, (angle - 0.0007) / 0.004));
    // The water surface is also the collision surface. Keep the launch plateau dry.
    const coastalHills = 0.00035 * Math.exp(-((angle / 0.025) ** 2));
    return Math.max(-0.00015, (height + coastalHills) * blend * blend * (3 - 2 * blend));
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
    if (height < -0.000145) {
      const depth = terrainNoise(direction.x * 3 + 11, direction.y * 3 + 23, direction.z * 3 + 45);
      return new THREE.Color(0x064477).lerp(new THREE.Color(0x168eaa), THREE.MathUtils.smoothstep(depth, 0.48, 0.55));
    }
    const moisture=terrainNoise(direction.x*24+51,direction.y*24+8,direction.z*24+16);
    color.lerp(new THREE.Color(0x75834b),THREE.MathUtils.smoothstep(moisture,.35,.8)*.6);
    color.lerp(new THREE.Color(0xb9ad7c), 1 - THREE.MathUtils.smoothstep(height, -0.00014, -0.00009));
    color.lerp(new THREE.Color(0x80766a), THREE.MathUtils.smoothstep(height, 0.0004, 0.00085));
    const snowLine=.0009-Math.abs(direction.y)*.0005;
    color.lerp(new THREE.Color(0xe3e9ec), THREE.MathUtils.smoothstep(height, snowLine, snowLine+.00035));
  }
  return color.multiplyScalar(0.82 + grain * 0.32);
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

/** Match water shading in the distant globe and the detailed surface mesh. */
export function configureEarthMaterial(material: THREE.MeshStandardMaterial): void {
  material.onBeforeCompile = shader => {
    shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
      varying vec3 terrainDirection;
    `).replace('#include <begin_vertex>',`#include <begin_vertex>
      terrainDirection=normalize(position);
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying vec3 terrainDirection;
      float groundHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
      float groundNoise(vec3 p){
        vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
        return mix(mix(mix(groundHash(i),groundHash(i+vec3(1,0,0)),f.x),
          mix(groundHash(i+vec3(0,1,0)),groundHash(i+vec3(1,1,0)),f.x),f.y),
          mix(mix(groundHash(i+vec3(0,0,1)),groundHash(i+vec3(1,0,1)),f.x),
          mix(groundHash(i+vec3(0,1,1)),groundHash(i+vec3(1,1,1)),f.x),f.y),f.z);
      }
    `).replace('#include <color_fragment>',`#include <color_fragment>
      vec3 groundPoint=normalize(terrainDirection);
      float landMask=1.0-step(vColor.r*2.0,vColor.b)*step(vColor.g*1.1,vColor.b);
      float footprint=length(fwidth(groundPoint));
      float grain=(groundNoise(groundPoint*1800.0)-.5)*.55*(1.0-smoothstep(.2,.7,footprint*1800.0));
      grain+=(groundNoise(groundPoint*6000.0)-.5)*.3*(1.0-smoothstep(.2,.7,footprint*6000.0));
      grain+=(groundNoise(groundPoint*18000.0)-.5)*.15*(1.0-smoothstep(.2,.7,footprint*18000.0));
      diffuseColor.rgb*=1.0+landMask*grain*.5;
    `).replace('#include <roughnessmap_fragment>', `
      #include <roughnessmap_fragment>
      float ocean = step(vColor.r * 2.0, vColor.b) * step(vColor.g * 1.1, vColor.b);
      roughnessFactor = mix(roughnessFactor, 0.24, ocean);
    `).replace('#include <emissivemap_fragment>', `
      #include <emissivemap_fragment>
      totalEmissiveRadiance *= 1.0 - ocean;
    `);
  };
  material.customProgramCacheKey = () => 'earth-ground-v2';
}
