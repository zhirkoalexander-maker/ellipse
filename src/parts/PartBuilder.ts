import { buildDesignedPart } from './DesignedParts';
import * as THREE from 'three';
import type { Part } from './Part';
import { PART_SCALE } from '../config/constants';
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

export const SIZE_DIMS = {
  // Chunky rocket proportions (h/r ≈ 2.4). History: h/r 1.6 = fat barrels,
  // h/r 3.6 = thin sticks ("parts too small"), h/r 2.9 = "still too small"
  // — user wants BIG parts, these are the fattest that still look like a rocket.
  S: { radius: 0.60 * PART_SCALE, height: 1.4 * PART_SCALE },
  M: { radius: 0.85 * PART_SCALE, height: 2.0 * PART_SCALE },
  L: { radius: 1.15 * PART_SCALE, height: 2.8 * PART_SCALE },
  XL: { radius: 1.50 * PART_SCALE, height: 3.6 * PART_SCALE }
} as const;

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

export function buildPartMesh(part: Part): THREE.Group {
  return buildDesignedPart(part, SIZE_DIMS[part.size]);
}

/** Original procedural models retained for comparison and compatibility. */
export function buildLegacyPartMesh(part: Part): THREE.Group {
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
    case 'fairing': buildFairing(g, d); break;
    case 'rcs': buildRcs(g, d); break;
    case 'solar': buildSolar(g, d); break;

  }
  return g;
}

function buildCapsule(group: THREE.Group, d: { radius: number; height: number }, _id: string) {
  const r = d.radius, h = d.height, Q = 64;

  const tex = getTextureSet('capsule_mk1', generateCapsuleTexture);
  const bodyMat = createMaterialFromTextureSet(tex);
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a22, roughness: 0.55, metalness: 0.45 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc89838, roughness: 0.3, metalness: 0.7 });
  const winMat = new THREE.MeshStandardMaterial({ color: 0x6699cc, roughness: 0.15, metalness: 0.4, emissive: 0x112233, emissiveIntensity: 0.3 });

  // Rounded top cone
  const top = new THREE.Mesh(new THREE.SphereGeometry(r*0.88, Q, 32, 0, Math.PI*2, 0, Math.PI*0.48), bodyMat);
  top.position.y = h * 0.23; group.add(top);

  // Main body — slightly tapered
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r*0.88, r*0.97, h*0.45, Q), bodyMat);
  body.position.y = -h * 0.01; group.add(body);

  // Heat shield — short lip (was a 0.37h black bucket — ugly)
  const hs = new THREE.Mesh(new THREE.CylinderGeometry(r*0.97, r*0.90, h*0.10, Q), darkMat);
  hs.position.y = -h * 0.30; group.add(hs);

  // Aero taper skirt — flows smoothly down to near the S-tank radius, so the
  // capsule connects to whatever is below without a hard step
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(r*0.90, r*0.68, h*0.15, Q), bodyMat);
  skirt.position.y = -h * 0.425; group.add(skirt);

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

  const tex = getTextureSet(`tank_${size}`, () => generateTankTexture(size));
  const bodyMat = createMaterialFromTextureSet(tex);
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xcc6622, roughness: 0.5, metalness: 0.05 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.5, metalness: 0.35 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc89838, roughness: 0.3, metalness: 0.7 });

  // Main white cylinder
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r*0.97, r*1.01, h, Q), bodyMat);
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

  const tex = getTextureSet('engine_ant', generateEngineTexture);
  const engineMat = createMaterialFromTextureSet(tex);
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x0a0a14, roughness: 0.9, metalness: 0.1 });
  const bellMat = new THREE.MeshStandardMaterial({ color: 0x282838, roughness: 0.25, metalness: 0.75 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc89838, roughness: 0.3, metalness: 0.7 });
  const hotMat = new THREE.MeshBasicMaterial({ color: 0xff5500, transparent: true, opacity: 0.5, depthWrite: false });

  // Boat-tail mount — top edge is TANK-WIDE (0.97r, matches the tank bottom
  // above) tapering smoothly down to the pump. This is how real rockets join
  // a tank to an engine: no step, no gap — the tank flows into the tail cone.
  const mount = new THREE.Mesh(new THREE.CylinderGeometry(r*0.97, r*0.50, h*0.30, Q), engineMat);
  mount.position.y = h * 0.35; group.add(mount);

  // Turbopump housing — short block below the boat-tail
  const pump = new THREE.Mesh(new THREE.CylinderGeometry(r*0.50, r*0.58, h*0.12, Q), engineMat);
  pump.position.y = h * 0.15; group.add(pump);

  // Turbopump exhaust pipes (both sides)
  for (const s of [-1, 1]) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(r*0.06, r*0.06, h*0.1, 8), goldMat);
    pipe.position.set(s * r * 0.5, h * 0.13, 0); pipe.rotation.z = Math.PI / 2; group.add(pipe);
  }

  // Flange ring where the bell meets the pump
  const flange = new THREE.Mesh(new THREE.TorusGeometry(r*0.52, r*0.045, 8, Q), goldMat);
  flange.position.y = h*0.09; flange.rotation.x = Math.PI/2; group.add(flange);

  // Nozzle bell — the DOMINANT feature: wide flare nearly tank-width,
  // over half the slot height. This is what makes it look like an engine.
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(r*0.30, r*0.88, h*0.52, Q), bellMat);
  bell.position.y = -h*0.12; group.add(bell);

  // Inner dark cavity
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(r*0.18, r*0.66, h*0.44, Q), darkMat);
  inner.position.y = -h*0.1; group.add(inner);

  // Wide exit rim
  const rim = new THREE.Mesh(new THREE.TorusGeometry(r*0.86, r*0.035, 6, Q), goldMat);
  rim.position.y = -h*0.12 - h*0.26; rim.rotation.x = Math.PI/2; group.add(rim);

  // Throat glow
  const glow = new THREE.Mesh(new THREE.RingGeometry(r*0.12, r*0.28, Q), hotMat);
  glow.position.y = -h*0.12 - h*0.18; glow.rotation.x = -Math.PI/2; group.add(glow);
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
  // Dark interstage — must contrast with the white tanks, otherwise the
  // full-height decoupler is invisible between them ("where are my decouplers?")
  const bodyMat = createMaterialFromTextureSet(tex, {
    color: 0x23252e, roughness: 0.6, metalness: 0.55,
  });

  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xd8d8d2, roughness: 0.5, metalness: 0.15 });

  // Full-height interstage truss (fills the slot — no gaps to neighbours)
  const ringGeom = new THREE.CylinderGeometry(r * 1.03, r * 0.95, h * 0.96, SEG);
  applyCylindricalUV(ringGeom);
  perturbVertices(ringGeom, PART_SCALE * 0.008);
  const ring = new THREE.Mesh(ringGeom, bodyMat);
  group.add(ring);

  // Bold gold separation band at the top edge
  const bandGeom = new THREE.CylinderGeometry(r * 1.09, r * 1.09, h * 0.09, SEG);
  applyCylindricalUV(bandGeom);
  perturbVertices(bandGeom, PART_SCALE * 0.005);
  const band = new THREE.Mesh(bandGeom, goldMat);
  band.position.y = h * 0.42;
  group.add(band);

  // White roll-pattern stripe near the bottom (Saturn-style interstage marking)
  const stripeGeom = new THREE.CylinderGeometry(r * 1.07, r * 1.07, h * 0.1, SEG);
  applyCylindricalUV(stripeGeom);
  const stripe = new THREE.Mesh(stripeGeom, whiteMat);
  stripe.position.y = -h * 0.38;
  group.add(stripe);

  const bottomGeom = new THREE.CylinderGeometry(r * 0.95, r * 0.95, h * 0.05, SEG);
  applyCylindricalUV(bottomGeom);
  perturbVertices(bottomGeom, PART_SCALE * 0.008);
  const bottom = new THREE.Mesh(bottomGeom, bodyMat);
  bottom.position.y = -h * 0.455;
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

function buildFairing(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = getTextureSet('tank', generateTankTexture);
  const mat = createMaterialFromTextureSet(tex);
  // Aerodynamic nose cone — smooth pointed cap
  const coneGeom = new THREE.ConeGeometry(r, h * 0.9, SEG);
  applyCylindricalUV(coneGeom);
  const cone = new THREE.Mesh(coneGeom, mat);
  cone.position.y = h * 0.45;
  group.add(cone);
  // Base ring
  const ringGeom = new THREE.CylinderGeometry(r, r, h * 0.08, SEG);
  applyCylindricalUV(ringGeom);
  const ring = new THREE.Mesh(ringGeom, mat);
  ring.position.y = -h * 0.04;
  group.add(ring);
}

function buildRcs(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius * 0.35, h = d.height * 0.25;
  const mat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.5, metalness: 0.4, emissive: 0x000000, emissiveIntensity: 0 });
  // Central block
  const blockGeom = new THREE.BoxGeometry(r * 2, h, r * 2);
  const block = new THREE.Mesh(blockGeom, mat);
  group.add(block);
  // Four small nozzles
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const nozzleGeom = new THREE.CylinderGeometry(r * 0.2, r * 0.3, h * 0.8, 12);
    const nozzle = new THREE.Mesh(nozzleGeom, mat);
    nozzle.position.set(Math.cos(angle) * r, 0, Math.sin(angle) * r);
    nozzle.rotation.z = Math.PI / 2;
    nozzle.rotation.y = -angle;
    group.add(nozzle);
  }
}

function buildSolar(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x1133aa, roughness: 0.3, metalness: 0.6, emissive: 0x001133, emissiveIntensity: 0.2 });
  const armMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.5, metalness: 0.5, emissive: 0x000000, emissiveIntensity: 0 });
  // Central mount
  const mountGeom = new THREE.CylinderGeometry(r * 0.15, r * 0.15, h * 0.15, 16);
  const mount = new THREE.Mesh(mountGeom, armMat);
  group.add(mount);
  // Two panels
  for (const sign of [-1, 1]) {
    const panelGeom = new THREE.BoxGeometry(r * 1.2, h * 0.04, r * 0.6);
    const panel = new THREE.Mesh(panelGeom, panelMat);
    panel.position.set(sign * r * 0.7, 0, 0);
    group.add(panel);
    // Arm connecting to mount
    const armGeom = new THREE.BoxGeometry(r * 0.4, h * 0.04, h * 0.06);
    const arm = new THREE.Mesh(armGeom, armMat);
    arm.position.set(sign * r * 0.3, 0, 0);
    group.add(arm);
  }
}
