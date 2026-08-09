import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { Part } from './Part';
import { PART_SCALE, assetUrl } from '../config/constants';
import { toast } from '../ui/Toast';
import {
  generateTankTexture,
  generateCapsuleTexture,
  generateEngineTexture,
  generateLegsTexture,
  generateDecouplerTexture,
  generateHeatshieldTexture,
  generateGoldTexture,
  generateFabricTexture,
  type TextureSet,
} from '../effects/ProceduralTextures';

const SIZE_DIMS = {
  S: { radius: 0.5 * PART_SCALE, height: 0.7 * PART_SCALE },
  M: { radius: 0.7 * PART_SCALE, height: 1.1 * PART_SCALE },
  L: { radius: 1.0 * PART_SCALE, height: 1.6 * PART_SCALE },
  XL: { radius: 1.4 * PART_SCALE, height: 2.2 * PART_SCALE }
};

const PI = Math.PI;
const SEG = 128;

// Seeded random for vertex noise
let _vnoiseSeed = 0;
function vnoise(): number {
  _vnoiseSeed = (_vnoiseSeed * 1664525 + 1013904223) >>> 0;
  return (_vnoiseSeed >>> 0) / 0xffffffff;
}

function perturbVertices(geom: THREE.BufferGeometry, strength: number): void {
  const pos = geom.attributes.position;
  if (!pos) return;
  const arr = pos.array as Float32Array;
  for (let i = 0; i < arr.length; i += 3) {
    const dx = (vnoise() - 0.5) * 2;
    const dy = (vnoise() - 0.5) * 2;
    const dz = (vnoise() - 0.5) * 2;
    arr[i] = arr[i]! + dx * strength;
    arr[i + 1] = arr[i + 1]! + dy * strength;
    arr[i + 2] = arr[i + 2]! + dz * strength;
  }
  pos.needsUpdate = true;
  geom.computeVertexNormals();
}

// GLTF loader
export const gltfLoader = new GLTFLoader();
export const gltfCache = new Map<string, THREE.Group>();

export async function loadGLTF(url: string, scale = 1): Promise<THREE.Group | null> {
  const resolvedUrl = assetUrl(url);
  if (gltfCache.has(url)) {
    return gltfCache.get(url)!.clone();
  }
  // Try multiple URL variants in case the first one fails
  const urlsToTry = [resolvedUrl];
  if (resolvedUrl !== url) urlsToTry.push(url);
  if (url.startsWith('/')) urlsToTry.push(url.slice(1));

  let lastErr: any;
  for (const tryUrl of urlsToTry) {
    try {
      const gltf = await gltfLoader.loadAsync(tryUrl);
      const group = gltf.scene;
      if (!group) continue;

      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.material) {
            const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
            for (const mat of mats) {
              if (mat instanceof THREE.MeshStandardMaterial) {
                mat.roughness = Math.max(0.1, mat.roughness ?? 0.5);
                mat.metalness = Math.max(0, mat.metalness ?? 0);
                if (mat.color) {
                  const hsl = { h: 0, s: 0, l: 0 };
                  mat.color.getHSL(hsl);
                  if (hsl.s < 0.3) {
                    hsl.s = Math.min(1, hsl.s * 1.5 + 0.05);
                    hsl.l = Math.min(1, Math.max(0.1, hsl.l * 1.1));
                    mat.color.setHSL(hsl.h, hsl.s, hsl.l);
                  }
                }
                const name = obj.name.toLowerCase();
                const isEngine = name.includes('engine') || name.includes('nozzle') || name.includes('thruster') || name.includes('motor') || name.includes('bell');
                const isMetallic = name.includes('metal') || name.includes('hull') || name.includes('body') || name.includes('frame') || name.includes('strut');
                const isGlass = name.includes('glass') || name.includes('window') || name.includes('canopy') || name.includes('cockpit');
                const isHeatshield = name.includes('heat') || name.includes('shield') || name.includes('tile');
                const isSolarPanel = name.includes('solar') || name.includes('panel') || name.includes('array');

                if (isEngine) {
                  mat.roughness = Math.max(0.05, mat.roughness);
                  mat.metalness = Math.min(1, mat.metalness + 0.3);
                  mat.emissive = new THREE.Color(0x884422);
                  mat.emissiveIntensity = 0.15;
                } else if (isMetallic) {
                  mat.roughness = Math.max(0.1, mat.roughness * 0.7);
                  mat.metalness = Math.min(1, mat.metalness + 0.4);
                } else if (isGlass) {
                  mat.roughness = 0;
                  mat.metalness = 0;
                  mat.transparent = true;
                  mat.opacity = 0.6;
                  mat.emissive = new THREE.Color(0x4488ff);
                  mat.emissiveIntensity = 0.08;
                } else if (isHeatshield) {
                  mat.roughness = Math.min(1, mat.roughness + 0.2);
                  mat.metalness = 0;
                } else if (isSolarPanel) {
                  mat.roughness = 0.8;
                  mat.metalness = 0;
                  mat.emissive = new THREE.Color(0x4488ff);
                  mat.emissiveIntensity = 0.03;
                }

                if (!isEngine && !isGlass && !isSolarPanel) {
                  if (name.includes('engine') || name.includes('nozzle') || name.includes('thruster') || name.includes('motor')) {
                    mat.emissive = new THREE.Color(0x442200);
                    mat.emissiveIntensity = 0.05;
                  }
                }
                mat.needsUpdate = true;
              } else if (mat instanceof THREE.MeshBasicMaterial || mat instanceof THREE.MeshPhongMaterial) {
                const newMat = new THREE.MeshStandardMaterial({
                  color: (mat as THREE.MeshBasicMaterial).color ?? 0xffffff,
                  map: (mat as THREE.MeshBasicMaterial).map,
                  normalMap: (mat as any).normalMap,
                  roughnessMap: (mat as any).roughnessMap,
                  metalnessMap: (mat as any).metalnessMap,
                  aoMap: (mat as any).aoMap,
                  roughness: 0.5,
                  metalness: 0.1,
                });
                obj.material = newMat;
              }
            }
          } else {
            obj.material = new THREE.MeshStandardMaterial({
              color: 0xcccccc,
              roughness: 0.5,
              metalness: 0.1,
            });
          }
        }
      });

      group.scale.setScalar(scale);
      gltfCache.set(url, group);
      return group.clone();
    } catch (err) {
      lastErr = err;
    }
  }

  console.error('Failed to load GLTF after all attempts:', url, lastErr);
  toast.show(`Failed to load model: ${url.split('/').pop()}`, 3000);
  return null;
}

// Cache for generated texture sets
const textureCache = new Map<string, TextureSet>();

function getTextureSet(key: string, generator: () => TextureSet): TextureSet {
  if (!textureCache.has(key)) {
    try {
      const set = generator();
      const textures = [set.color, set.normal, set.roughness, set.metalness, set.ao, set.emissive].filter(Boolean) as THREE.Texture[];
      for (const tex of textures) {
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        tex.needsUpdate = true;
      }
      textureCache.set(key, set);
    } catch {
      console.warn('Texture generation failed for:', key, 'using solid fallback');
      const fallback = { color: createSolidTexture(0x808080), normal: undefined, roughness: undefined, metalness: undefined, ao: undefined, emissive: undefined } as TextureSet;
      textureCache.set(key, fallback);
    }
  }
  return textureCache.get(key)!;
}

function createSolidTexture(hex: number): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#' + hex.toString(16).padStart(6, '0');
  ctx.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function createMaterialFromTextureSet(
  texSet: TextureSet,
  overrides: Partial<THREE.MeshStandardMaterialParameters> = {}
): THREE.MeshStandardMaterial {
  const params: THREE.MeshStandardMaterialParameters = {
    map: texSet.color,
    normalMap: texSet.normal,
    roughnessMap: texSet.roughness,
    metalnessMap: texSet.metalness,
    roughness: 0.5,
    metalness: 0.1,
    color: 0xccddee,
    ...overrides,
  };
  if (texSet.ao) {
    params.aoMap = texSet.ao;
    params.aoMapIntensity = 1.0;
  }
  if (texSet.emissive) {
    params.emissiveMap = texSet.emissive;
  }
  const mat = new THREE.MeshStandardMaterial(params);
  return mat;
}

function applyCylindricalUV(geometry: THREE.BufferGeometry, heightScale = 1.0): void {
  const pos = geometry.attributes.position;
  if (!pos) return;
  let uv = geometry.attributes.uv;
  if (!uv) {
    uv = new THREE.BufferAttribute(new Float32Array(pos.count * 2), 2);
  }

  // Compute Y range from actual geometry
  let minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const yRange = maxY - minY || 1;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);

    // Cylindrical projection: U = angle around Y, V = height
    const angle = Math.atan2(x, z);
    const u = (angle + Math.PI) / (2 * Math.PI);
    const v = ((y - minY) / yRange) * heightScale;

    uv.setXY(i, u, v);
  }

  geometry.setAttribute('uv', uv);
  uv.needsUpdate = true;

  // Add UV2 for AO map support
  if (!geometry.attributes.uv2) {
    geometry.setAttribute('uv2', uv.clone());
  }
}

export async function buildPartMeshAsync(part: Part): Promise<THREE.Group> {
  const g = new THREE.Group();
  g.name = part.id;
  
  // Handle GLTF models
  if (part.gltfUrl) {
    const scale = part.gltfScale ?? 1;
    const gltfGroup = await loadGLTF(part.gltfUrl, scale);
    if (gltfGroup) g.add(gltfGroup);
    return g;
  }

  const d = SIZE_DIMS[part.size];
  switch (part.kind) {
    case 'capsule': buildCapsule(g, d, part.id); break;
    case 'tank': buildTank(g, d, part.size); break;
    case 'engine': buildEngine(g, d, part.size); break;
    case 'parachute': buildParachute(g, d); break;
    case 'legs': buildLegs(g, d); break;
    case 'decoupler': buildDecoupler(g, d); break;
    case 'heatshield': buildHeatshield(g, d); break;
  }
  return g;
}

export function buildPartMesh(part: Part): THREE.Group {
  const g = new THREE.Group();
  g.name = part.id;
  const d = SIZE_DIMS[part.size];
  switch (part.kind) {
    case 'capsule': buildCapsule(g, d, part.id); break;
    case 'tank': buildTank(g, d, part.size); break;
    case 'engine': buildEngine(g, d, part.size); break;
    case 'parachute': buildParachute(g, d); break;
    case 'legs': buildLegs(g, d); break;
    case 'decoupler': buildDecoupler(g, d); break;
    case 'heatshield': buildHeatshield(g, d); break;
case 'gltf': {
      // Use cached GLTF model if available, otherwise placeholder
      if (part.gltfUrl && gltfCache.has(part.gltfUrl)) {
        const scale = part.gltfScale ?? 1;
        const gltfGroup = gltfCache.get(part.gltfUrl)!.clone();
        gltfGroup.scale.setScalar(scale);
        
        // Center the model
        const box = new THREE.Box3().setFromObject(gltfGroup);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltfGroup.position.sub(center);
        
        // Find nozzle/engine attachment points without overwriting materials
        const nozzlePoints: THREE.Vector3[] = [];
        const engineMeshes: THREE.Mesh[] = [];
        
        gltfGroup.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            const name = obj.name.toLowerCase();
            const isEngine = name.includes('engine') || name.includes('nozzle') || name.includes('thruster') || 
                             name.includes('motor') || name.includes('combustion');
            
            const isEnginePart = isEngine || obj.position.y < -0.1;
            
            // Collect engine/nozzle positions for flame attachment (preserve original materials)
            if (isEnginePart) {
              const box = new THREE.Box3().setFromObject(obj);
              const center = new THREE.Vector3();
              box.getCenter(center);
              const localPos = center.clone().sub(gltfGroup.position);
              nozzlePoints.push(localPos);
              engineMeshes.push(obj);
            }
            
            obj.castShadow = true;
            obj.receiveShadow = true;
          }
        });
        
        // Store nozzle attachment points on the group for later use
        (gltfGroup as any).userData.nozzlePoints = nozzlePoints;
        (gltfGroup as any).userData.engineMeshes = engineMeshes;
        
        g.add(gltfGroup);
      } else {
        // Generate procedural fallback (colored cylinder with fins)
        const d = SIZE_DIMS[part.size];
        const fallbackMat = new THREE.MeshStandardMaterial({
          color: 0x88aacc,
          roughness: 0.4,
          metalness: 0.3,
        });
        const bodyGeom = new THREE.CylinderGeometry(d.radius, d.radius * 0.8, d.height * 0.8, 16);
        applyCylindricalUV(bodyGeom);
        const body = new THREE.Mesh(bodyGeom, fallbackMat);
        body.position.y = -d.height * 0.1;
        g.add(body);

        // Nose cone
        const noseGeom = new THREE.ConeGeometry(d.radius * 0.6, d.height * 0.2, 16);
        const noseMat = new THREE.MeshStandardMaterial({ color: 0xcc4444, roughness: 0.6, metalness: 0.1 });
        const nose = new THREE.Mesh(noseGeom, noseMat);
        nose.position.y = d.height * 0.4;
        g.add(nose);

        // Fins
        const finMat = new THREE.MeshStandardMaterial({ color: 0x666688, roughness: 0.8, metalness: 0.0 });
        for (let fi = 0; fi < 4; fi++) {
          const angle = (fi / 4) * Math.PI * 2;
          const finGeom = new THREE.BoxGeometry(d.radius * 0.02, d.height * 0.15, d.radius * 0.3);
          const fin = new THREE.Mesh(finGeom, finMat);
          fin.position.set(
            Math.sin(angle) * d.radius * 1.05,
            -d.height * 0.35,
            Math.cos(angle) * d.radius * 1.05
          );
          fin.rotation.y = -angle;
          g.add(fin);
        }
      }
      break;
    }
  }
  return g;
}

function buildCapsule(group: THREE.Group, d: { radius: number; height: number }, _id: string) {
  const r = d.radius, h = d.height, Q = 64;

  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f0, roughness: 0.4, metalness: 0.15 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a22, roughness: 0.55, metalness: 0.45 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc89838, roughness: 0.3, metalness: 0.7 });
  const winMat = new THREE.MeshStandardMaterial({ color: 0x6699cc, roughness: 0.15, metalness: 0.4, emissive: 0x112233, emissiveIntensity: 0.3 });

  // Rounded top cone
  const top = new THREE.Mesh(new THREE.SphereGeometry(r*0.88, Q, 32, 0, Math.PI*2, 0, Math.PI*0.48), whiteMat);
  top.position.y = h * 0.23; group.add(top);

  // Main body — slightly tapered
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r*0.88, r*0.97, h*0.45, Q), whiteMat);
  body.position.y = -h * 0.01; group.add(body);

  // Heat shield
  const hs = new THREE.Mesh(new THREE.CylinderGeometry(r*0.97, r*0.82, h*0.13, Q), darkMat);
  hs.position.y = -h * 0.26; group.add(hs);

  // Docking port on top
  const dock = new THREE.Mesh(new THREE.CylinderGeometry(r*0.22, r*0.22, h*0.06, 16), darkMat);
  dock.position.y = h * 0.45; group.add(dock);

  // Gold band between body and shield
  const band = new THREE.Mesh(new THREE.TorusGeometry(r*0.93, r*0.03, 8, Q), goldMat);
  band.position.y = -h * 0.19; band.rotation.x = Math.PI/2; group.add(band);

  // Two small round windows
  for (const [x, y] of [[0, h*0.1] as [number, number], [0, -h*0.08] as [number, number]]) {
    const w = new THREE.Mesh(new THREE.SphereGeometry(r*0.12, 16, 8), winMat);
    w.position.set(x, y, r*0.66); group.add(w);
  }
}

function buildTank(group: THREE.Group, d: { radius: number; height: number }, size: 'S' | 'M' | 'L' | 'XL') {
  const r = d.radius, h = d.height, Q = 64;

  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf0f0ec, roughness: 0.45, metalness: 0.1 });
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xcc6622, roughness: 0.5, metalness: 0.05 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.5, metalness: 0.35 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc89838, roughness: 0.3, metalness: 0.7 });

  // Main white cylinder
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r*0.97, r*1.01, h, Q), whiteMat);
  group.add(body);

  // Orange foam band (middle)
  const orange = new THREE.Mesh(new THREE.CylinderGeometry(r*1.02, r*1.02, h*0.28, Q), orangeMat);
  orange.position.y = -h*0.02; group.add(orange);

  // Structural rings (dark) — evenly spaced
  for (const y of [h*0.44, h*0.2, -h*0.24, -h*0.44]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r*1.03, r*0.025, 8, Q), darkMat);
    ring.position.y = y; ring.rotation.x = Math.PI/2; group.add(ring);
  }

  // Thin gold accent rings
  for (const y of [h*0.32, -h*0.35]) {
    const gr = new THREE.Mesh(new THREE.TorusGeometry(r*1.01, r*0.012, 6, Q), goldMat);
    gr.position.y = y; gr.rotation.x = Math.PI/2; group.add(gr);
  }
}

function buildEngine(group: THREE.Group, d: { radius: number; height: number }, _size: 'S' | 'M' | 'L' | 'XL') {
  const r = d.radius, h = d.height, Q = 48;

  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a24, roughness: 0.5, metalness: 0.55 });
  const bellMat = new THREE.MeshStandardMaterial({ color: 0x282838, roughness: 0.25, metalness: 0.75 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc89838, roughness: 0.3, metalness: 0.7 });
  const hotMat = new THREE.MeshBasicMaterial({ color: 0xff5500, transparent: true, opacity: 0.5, depthWrite: false });

  // Turbopump housing (upper body)
  const upper = new THREE.Mesh(new THREE.CylinderGeometry(r*0.88, r*0.72, h*0.22, Q), darkMat);
  upper.position.y = h * 0.24; group.add(upper);

  // Turbopump exhaust pipe (small cylinder on side)
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(r*0.06, r*0.06, h*0.12, 8), goldMat);
  pipe.position.set(r*0.75, h*0.24, 0); pipe.rotation.z = Math.PI/2; group.add(pipe);

  // Flange ring
  const flange = new THREE.Mesh(new THREE.TorusGeometry(r*0.7, r*0.04, 8, Q), goldMat);
  flange.position.y = h*0.13; flange.rotation.x = Math.PI/2; group.add(flange);

  // Nozzle bell
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(r*0.5, r*0.84, h*0.38, Q), bellMat);
  bell.position.y = -h*0.07; group.add(bell);

  // Inner dark cavity
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(r*0.30, r*0.55, h*0.30, Q), darkMat);
  inner.position.y = -h*0.05; group.add(inner);

  // Exit rim
  const rim = new THREE.Mesh(new THREE.TorusGeometry(r*0.78, r*0.035, 6, Q), goldMat);
  rim.position.y = -h*0.07 - h*0.19; rim.rotation.x = Math.PI/2; group.add(rim);

  // Glow
  const glow = new THREE.Mesh(new THREE.RingGeometry(r*0.28, r*0.48, Q), hotMat);
  glow.position.y = -h*0.07 - h*0.15; glow.rotation.x = -Math.PI/2; group.add(glow);
}

function buildParachute(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const fabricTex = getTextureSet('fabric', generateFabricTexture);
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  const packMat = createMaterialFromTextureSet(fabricTex, {
    color: 0x8899AA,
    roughness: 0.5,
    metalness: 0.1,
  });

  const packGeom = new THREE.CylinderGeometry(r * 0.35, r * 0.35, h * 0.18, 12);
  applyCylindricalUV(packGeom);
  const pack = new THREE.Mesh(packGeom, packMat);
  pack.position.y = h * 0.55;
  group.add(pack);

  const lidMat = createMaterialFromTextureSet(fabricTex, {
    color: 0x6A7A8A,
    roughness: 0.4,
    metalness: 0.2,
  });
  const lidGeom = new THREE.CylinderGeometry(r * 0.37, r * 0.37, h * 0.03, 12);
  applyCylindricalUV(lidGeom);
  const lid = new THREE.Mesh(lidGeom, lidMat);
  lid.position.y = h * 0.55 + h * 0.09;
  group.add(lid);

  const bandGeom = new THREE.CylinderGeometry(r * 0.37, r * 0.37, h * 0.02, 12);
  applyCylindricalUV(bandGeom);
  const band = new THREE.Mesh(bandGeom, goldMat);
  band.position.y = h * 0.55 - h * 0.09;
  group.add(band);
}

export function buildDeployedParachute(d: { radius: number; height: number }): THREE.Group {
  const g = new THREE.Group();
  const r = d.radius, h = d.height;
  const SEG_P = 24;

  const fabricTex = getTextureSet('fabric', generateFabricTexture);
  const canopyMat = createMaterialFromTextureSet(fabricTex, {
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
  });
  const canopyGeom = new THREE.SphereGeometry(r * 1.8, SEG_P, SEG_P, 0, PI * 2, 0, PI * 0.5);
  applyCylindricalUV(canopyGeom, 0.5);
  const canopy = new THREE.Mesh(canopyGeom, canopyMat);
  canopy.position.y = h * 0.3;
  canopy.rotation.x = PI;
  g.add(canopy);

  // Gore stripes
  const stripeMat = createMaterialFromTextureSet(fabricTex, {
    color: 0xDD4444,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * PI * 2;
    const stripeGeom = new THREE.BoxGeometry(r * 0.03, h * 0.7, r * 0.015);
    const stripe = new THREE.Mesh(stripeGeom, stripeMat);
    stripe.position.set(Math.cos(a) * r * 0.9, h * 0.4, Math.sin(a) * r * 0.9);
    stripe.rotation.x = PI;
    stripe.lookAt(0, h * 0.8, 0);
    g.add(stripe);
  }

  const strutMat = createMaterialFromTextureSet(fabricTex, {
    color: 0x6A7A8A,
    roughness: 0.5,
    metalness: 0.4,
  });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;
    for (let j = 0; j < 3; j++) {
      const strutGeom = new THREE.CylinderGeometry(0.006, 0.006, h * 0.15, 4);
      applyCylindricalUV(strutGeom);
      const strut = new THREE.Mesh(strutGeom, strutMat);
      const angle = a + (j - 1) * 0.3;
      strut.position.set(
        Math.cos(angle) * r * 1.5,
        h * 0.15 - h * 0.06 * j,
        Math.sin(angle) * r * 1.5
      );
      g.add(strut);
    }
  }
  return g;
}

function buildLegs(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const tex = getTextureSet('legs', generateLegsTexture);
  const legMat = createMaterialFromTextureSet(tex);
  const footMat = createMaterialFromTextureSet(tex, {
    color: 0x2a2d22,
    roughness: 0.8,
    metalness: 0.2,
  });

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;

    const legGeom = new THREE.CylinderGeometry(0.01, 0.007, h * 0.35, 6);
    applyCylindricalUV(legGeom);
    const leg = new THREE.Mesh(legGeom, legMat);
    const legX = Math.cos(a) * r * 0.65;
    const legZ = Math.sin(a) * r * 0.65;
    leg.position.set(legX, -h / 2 - h * 0.175, legZ);
    leg.rotation.z = Math.cos(a) * 0.3;
    leg.rotation.x = Math.sin(a) * 0.3;
    group.add(leg);

    const footGeom = new THREE.CylinderGeometry(0.02, 0.025, 0.008, 6);
    applyCylindricalUV(footGeom);
    const foot = new THREE.Mesh(footGeom, footMat);
    foot.position.set(Math.cos(a) * r * 0.95, -h / 2 - h * 0.35, Math.sin(a) * r * 0.95);
    group.add(foot);
  }
}

function buildDecoupler(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const tex = getTextureSet('decoupler', generateDecouplerTexture);
  const bodyMat = createMaterialFromTextureSet(tex);

  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  const ringGeom = new THREE.CylinderGeometry(r * 1.05, r * 0.92, h * 0.12, SEG);
  applyCylindricalUV(ringGeom);
  perturbVertices(ringGeom, PART_SCALE * 0.008);
  const ring = new THREE.Mesh(ringGeom, bodyMat);
  group.add(ring);

  const bandGeom = new THREE.CylinderGeometry(r * 1.08, r * 1.08, h * 0.04, SEG);
  applyCylindricalUV(bandGeom);
  perturbVertices(bandGeom, PART_SCALE * 0.005);
  const band = new THREE.Mesh(bandGeom, goldMat);
  band.position.y = h * 0.06;
  group.add(band);

  const bottomGeom = new THREE.CylinderGeometry(r * 0.92, r * 0.92, h * 0.04, SEG);
  applyCylindricalUV(bottomGeom);
  perturbVertices(bottomGeom, PART_SCALE * 0.008);
  const bottom = new THREE.Mesh(bottomGeom, bodyMat);
  bottom.position.y = -h * 0.06;
  group.add(bottom);
}

function buildHeatshield(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const tex = getTextureSet('heatshield', generateHeatshieldTexture);
  const mat = createMaterialFromTextureSet(tex);

  // Ablative heatshield - convex dish shape
  const shieldGeom = new THREE.CylinderGeometry(r * 1.2, r * 0.8, h * 0.2, SEG, 1, true);
  applyCylindricalUV(shieldGeom, 0.5);
  perturbVertices(shieldGeom, PART_SCALE * 0.012);
  const shield = new THREE.Mesh(shieldGeom, mat);
  shield.position.y = -h * 0.1;
  group.add(shield);

  // Backing structure
  const backGeom = new THREE.CylinderGeometry(r * 0.8, r * 0.8, h * 0.08, SEG);
  applyCylindricalUV(backGeom);
  perturbVertices(backGeom, PART_SCALE * 0.01);
  const backing = new THREE.Mesh(backGeom, mat);
  backing.position.y = -h * 0.2;
  group.add(backing);
}
