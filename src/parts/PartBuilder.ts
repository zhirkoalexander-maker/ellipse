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
const SEG = 64;

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
  try {
    const gltf = await gltfLoader.loadAsync(resolvedUrl);
    const group = gltf.scene;
  
  // Ensure materials are PBR-ready and boost colors
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
            // Boost color saturation for NASA models
            if (mat.color) {
              const hsl = { h: 0, s: 0, l: 0 };
              mat.color.getHSL(hsl);
              if (hsl.s < 0.3) {
                hsl.s = Math.min(1, hsl.s * 1.5 + 0.05);
                hsl.l = Math.min(1, Math.max(0.1, hsl.l * 1.1));
                mat.color.setHSL(hsl.h, hsl.s, hsl.l);
              }
            }
            // Detect material type by roughness and color
            const name = obj.name.toLowerCase();
            const isEngine = name.includes('engine') || name.includes('nozzle') || name.includes('thruster') || name.includes('motor') || name.includes('bell');
            const isMetallic = name.includes('metal') || name.includes('hull') || name.includes('body') || name.includes('frame') || name.includes('strut');
            const isGlass = name.includes('glass') || name.includes('window') || name.includes('window') || name.includes('canopy') || name.includes('cockpit');
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
            
            // Add subtle emissive to engine parts (backward compat)
            if (!isEngine && !isGlass && !isSolarPanel) {
              const oldName = obj.name.toLowerCase();
              if (oldName.includes('engine') || oldName.includes('nozzle') || oldName.includes('thruster') || oldName.includes('motor')) {
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
  
  // Apply scale to the loaded model
  group.scale.setScalar(scale);
  
  gltfCache.set(url, group);
  return group.clone();
  } catch (err) {
    console.error('Failed to load GLTF:', url, err);
    toast.show(`Failed to load model: ${url.split('/').pop()}`, 3000);
    return null;
  }
}

// Cache for generated texture sets
const textureCache = new Map<string, TextureSet>();

function getTextureSet(key: string, generator: () => TextureSet): TextureSet {
  if (!textureCache.has(key)) {
    textureCache.set(key, generator());
  }
  return textureCache.get(key)!;
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
    roughness: 1.0,
    metalness: 1.0,
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
  
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    
    // Cylindrical projection: U = angle around Y, V = height
    const angle = Math.atan2(x, z);
    const u = (angle + Math.PI) / (2 * Math.PI);
    const v = (y + 1) * 0.5 * heightScale; // Normalize to 0-1 range approximately
    
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
        // Placeholder box while GLTF loads
        const d = SIZE_DIMS[part.size];
        const placeholderGeom = new THREE.BoxGeometry(d.radius * 2, d.height * 0.5, d.radius * 2);
        const placeholderMat = new THREE.MeshStandardMaterial({
          color: 0x8888aa,
          roughness: 0.6,
          metalness: 0.2,
          transparent: true,
          opacity: 0.5,
        });
        const placeholder = new THREE.Mesh(placeholderGeom, placeholderMat);
        placeholder.position.y = -d.height * 0.25;
        g.add(placeholder);
      }
      break;
    }
  }
  return g;
}

function buildCapsule(group: THREE.Group, d: { radius: number; height: number }, id: string) {
  const r = d.radius, h = d.height;
  const isMk1 = id.includes('mk1');

  const tex = getTextureSet(`capsule_${isMk1 ? 'mk1' : 'mk2'}`, generateCapsuleTexture);
  const bodyMat = createMaterialFromTextureSet(tex);

  // Gold accents for stripes and base
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  // Main body cylinder
  const bodyGeom = new THREE.CylinderGeometry(r, r, h * 0.6, SEG);
  applyCylindricalUV(bodyGeom);
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  body.position.y = h * 0.05;
  group.add(body);

  // Nose cone (hemisphere)
  const noseGeom = new THREE.SphereGeometry(r, SEG, SEG, 0, PI * 2, 0, PI / 2);
  applyCylindricalUV(noseGeom, 0.5);
  const nose = new THREE.Mesh(noseGeom, bodyMat);
  nose.position.y = h * 0.35;
  group.add(nose);

  // Tip
  const tip = new THREE.Mesh(new THREE.SphereGeometry(r * 0.08, 12, 8), goldMat);
  tip.position.y = h * 0.35 + r * 0.5;
  group.add(tip);

  // Stripe bands (painted stripes on capsule body)
  const stripeColor = isMk1 ? 0xDD4444 : 0x0077D1;
  const stripeMat = new THREE.MeshStandardMaterial({
    color: stripeColor,
    roughness: 0.6,
    metalness: 0.1,
  });
  const bandGeom = new THREE.CylinderGeometry(r * 1.04, r * 1.04, h * 0.05, SEG);
  applyCylindricalUV(bandGeom);
  perturbVertices(bandGeom, PART_SCALE * 0.008);
  const band = new THREE.Mesh(bandGeom, stripeMat);
  band.position.y = h * 0.05;
  group.add(band);

  const band2Geom = new THREE.CylinderGeometry(r * 1.04, r * 1.04, h * 0.03, SEG);
  applyCylindricalUV(band2Geom);
  perturbVertices(band2Geom, PART_SCALE * 0.008);
  const band2 = new THREE.Mesh(band2Geom, stripeMat);
  band2.position.y = -h * 0.15;
  group.add(band2);

  // Base ring
  const baseGeom = new THREE.CylinderGeometry(r * 1.3, r * 0.95, h * 0.15, SEG);
  applyCylindricalUV(baseGeom);
  perturbVertices(baseGeom, PART_SCALE * 0.01);
  const base = new THREE.Mesh(baseGeom, goldMat);
  base.position.y = -h * 0.3 - h * 0.075;
  group.add(base);

  // Window
  const winMat = createMaterialFromTextureSet(tex, {
    color: 0x1A5988,
    roughness: 0.1,
    metalness: 0.8,
    transparent: true,
    opacity: 0.3,
  });
  const win = new THREE.Mesh(new THREE.CircleGeometry(r * 0.2, 16), winMat);
  win.position.set(r + 0.001, h * 0.18, 0);
  win.rotation.y = -PI / 2;
  group.add(win);

  // Window glow ring
  const glowM = new THREE.MeshBasicMaterial({ color: 0x3399FF, transparent: true, opacity: 0.6 });
  const glowRing = new THREE.Mesh(new THREE.RingGeometry(r * 0.2, r * 0.24, 16), glowM);
  glowRing.position.set(r + 0.001, h * 0.18, 0);
  glowRing.rotation.y = -PI / 2;
  group.add(glowRing);
}

function buildTank(group: THREE.Group, d: { radius: number; height: number }, size: 'S' | 'M' | 'L' | 'XL') {
  const r = d.radius, h = d.height;

  const tex = getTextureSet(`tank_${size}`, () => generateTankTexture(size));
  const bodyMat = createMaterialFromTextureSet(tex);

  // Gold bands
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  const bodyGeom = new THREE.CylinderGeometry(r, r, h, SEG);
  applyCylindricalUV(bodyGeom);
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  group.add(body);

  const bh = h * 0.03;
  const bandGeom = new THREE.CylinderGeometry(r * 1.03, r * 1.03, bh, SEG);
  applyCylindricalUV(bandGeom);
  perturbVertices(bandGeom, PART_SCALE * 0.006);
  const band = new THREE.Mesh(bandGeom, goldMat);
  band.position.y = h / 2 - bh / 2;
  group.add(band);

  const bandBGeom = new THREE.CylinderGeometry(r * 1.03, r * 1.03, bh, SEG);
  applyCylindricalUV(bandBGeom);
  perturbVertices(bandBGeom, PART_SCALE * 0.006);
  const bandB = new THREE.Mesh(bandBGeom, goldMat);
  bandB.position.y = -h / 2 + bh / 2;
  group.add(bandB);

  for (let i = 0; i < 3; i++) {
    const ridgeGeom = new THREE.TorusGeometry(r * 1.01, bh * 1.5, 6, SEG);
    applyCylindricalUV(ridgeGeom);
    perturbVertices(ridgeGeom, PART_SCALE * 0.005);
    const ridge = new THREE.Mesh(ridgeGeom, goldMat);
    ridge.position.y = -h / 2 + h * 0.2 * (i + 1);
    ridge.rotation.x = PI / 2;
    group.add(ridge);
  }

  const ringGeom = new THREE.TorusGeometry(r * 1.02, bh * 1.2, 6, SEG);
  applyCylindricalUV(ringGeom);
  perturbVertices(ringGeom, PART_SCALE * 0.005);
  const ring = new THREE.Mesh(ringGeom, goldMat);
  ring.position.y = 0;
  ring.rotation.x = PI / 2;
  group.add(ring);
}

function buildEngine(group: THREE.Group, d: { radius: number; height: number }, size: 'S' | 'M' | 'L' | 'XL') {
  const r = d.radius, h = d.height;

  const tex = getTextureSet(`engine_${size}`, generateEngineTexture);
  const engineMat = createMaterialFromTextureSet(tex);

  // Gold for flange
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  // Engine upper body
  const upperGeom = new THREE.CylinderGeometry(r * 1.4, r * 0.6, h * 0.25, SEG);
  applyCylindricalUV(upperGeom);
  const upper = new THREE.Mesh(upperGeom, engineMat);
  upper.position.y = h * 0.35;
  group.add(upper);

  // Mid flange ring
  const ringGeom = new THREE.CylinderGeometry(r * 0.6, r * 0.5, h * 0.06, SEG);
  applyCylindricalUV(ringGeom);
  perturbVertices(ringGeom, PART_SCALE * 0.015);
  const ring = new THREE.Mesh(ringGeom, goldMat);
  ring.position.y = h * 0.12;
  group.add(ring)

  // Nozzle outer
  const bellOuterGeom = new THREE.CylinderGeometry(r * 0.5, r * 0.85, h * 0.4, SEG);
  applyCylindricalUV(bellOuterGeom, 1.5);
  perturbVertices(bellOuterGeom, PART_SCALE * 0.01);
  const bellOuter = new THREE.Mesh(bellOuterGeom, engineMat);
  bellOuter.position.y = -h * 0.12;
  group.add(bellOuter);

  // Nozzle inner (throat)
  const darkMat = createMaterialFromTextureSet(tex, {
    color: 0x1A222A,
    roughness: 0.7,
    metalness: 0.5,
  });
  const bellInnerGeom = new THREE.CylinderGeometry(r * 0.35, r * 0.7, h * 0.38, SEG);
  applyCylindricalUV(bellInnerGeom, 1.5);
  perturbVertices(bellInnerGeom, PART_SCALE * 0.012);
  const bellInner = new THREE.Mesh(bellInnerGeom, darkMat);
  bellInner.position.y = -h * 0.12;
  group.add(bellInner);

  // Nozzle exit rim
  const rimGeom = new THREE.CylinderGeometry(r * 0.88, r * 0.88, h * 0.03, SEG);
  applyCylindricalUV(rimGeom);
  perturbVertices(rimGeom, PART_SCALE * 0.008);
  const rim = new THREE.Mesh(rimGeom, goldMat);
  rim.position.y = -h * 0.12 - h * 0.2 - h * 0.015;
  group.add(rim);

  // Engine glow
  const glowM = new THREE.MeshBasicMaterial({ color: 0xFF8800, transparent: true, opacity: 0.4 });
  const inner = new THREE.Mesh(new THREE.RingGeometry(0, r * 0.3, SEG), glowM);
  inner.position.y = -h * 0.12 - h * 0.2 - h * 0.02;
  inner.rotation.x = -PI / 2;
  group.add(inner);
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
