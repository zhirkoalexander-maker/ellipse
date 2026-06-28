import * as THREE from 'three';
import type { Part } from './Part';
import { PART_SCALE } from '../config/constants';
import { generateTankTexture, generateCapsuleTexture, generateEngineTexture, generateParachuteTexture } from '../effects/ProceduralTextures';
import type { TextureSet } from '../effects/ProceduralTextures';

const SIZE_DIMS = {
  S: { radius: 0.4 * PART_SCALE, height: 0.6 * PART_SCALE },
  M: { radius: 0.6 * PART_SCALE, height: 1.0 * PART_SCALE },
  L: { radius: 0.9 * PART_SCALE, height: 1.4 * PART_SCALE },
  XL: { radius: 1.3 * PART_SCALE, height: 2.0 * PART_SCALE }
};

export function buildPartMesh(part: Part): THREE.Group {
  const group = new THREE.Group();
  group.name = part.id;
  const d = SIZE_DIMS[part.size];

  switch (part.kind) {
    case 'capsule': buildCapsule(group, d); break;
    case 'tank': buildTank(group, d); break;
    case 'engine': buildEngine(group, d); break;
    case 'parachute': buildParachute(group, d); break;
    case 'legs': buildLegs(group, d); break;
  }
  return group;
}

function buildCapsule(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateCapsuleTexture();
  const bodyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.0,
    normalScale: new THREE.Vector2(1.2, 1.2),
  });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 24), bodyMat);
  group.add(body);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), bodyMat);
  dome.position.y = h / 2;
  group.add(dome);
  const baseMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.0,
    normalScale: new THREE.Vector2(1.2, 1.2),
  });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.5, r, h * 0.2, 24), baseMat);
  base.position.y = -h / 2 - h * 0.1;
  group.add(base);
  const winMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.3, metalness: 0.5 });
  const win = new THREE.Mesh(new THREE.CircleGeometry(r * 0.18, 16), winMat);
  win.position.set(r + 0.001, h * 0.05, 0);
  win.rotation.y = -Math.PI / 2;
  group.add(win);
}

function buildTank(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateTankTexture('M');
  const bodyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.85,
    normalScale: new THREE.Vector2(1.5, 1.5),
  });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 24), bodyMat);
  group.add(body);
  const bandMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.85,
    normalScale: new THREE.Vector2(1.5, 1.5),
  });
  const bh = h * 0.06, br = r * 1.03;
  const topBand = new THREE.Mesh(new THREE.CylinderGeometry(br, br, bh, 24), bandMat);
  topBand.position.y = h / 2 - bh / 2;
  group.add(topBand);
  const botBand = new THREE.Mesh(new THREE.CylinderGeometry(br, br, bh, 24), bandMat);
  botBand.position.y = -h / 2 + bh / 2;
  group.add(botBand);
}

function buildEngine(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateEngineTexture();
  const bodyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.9,
    normalScale: new THREE.Vector2(2.0, 2.0),
  });
  const bellMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.9,
    normalScale: new THREE.Vector2(2.0, 2.0),
  });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.5, r * 0.5, h * 0.35, 24), bodyMat);
  body.position.y = h * 0.325;
  group.add(body);
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.35, h * 0.1, 24), bodyMat);
  ring.position.y = h * 0.1;
  group.add(ring);
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.35, r * 0.85, h * 0.45, 24), bellMat);
  bell.position.y = -h * 0.15;
  group.add(bell);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.15, metalness: 0.85 });
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.88, r * 0.88, h * 0.04, 24), rimMat);
  rim.position.y = -h * 0.15 - h * 0.225 - h * 0.02;
  group.add(rim);
}

function buildParachute(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateParachuteTexture();
  const canopyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.0,
    normalScale: new THREE.Vector2(0.5, 0.5),
    side: THREE.DoubleSide,
  });
  const canopy = new THREE.Mesh(new THREE.ConeGeometry(r * 1.6, h * 0.8, 24), canopyMat);
  canopy.position.y = h * 0.6;
  canopy.rotation.x = Math.PI;
  group.add(canopy);
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xCC3344, roughness: 0.8, side: THREE.DoubleSide });
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const s = new THREE.Mesh(new THREE.ConeGeometry(r * 0.06, h * 0.8, 4), stripeMat);
    s.position.set(Math.cos(a) * r * 0.85, h * 0.6, Math.sin(a) * r * 0.85);
    s.rotation.x = Math.PI;
    group.add(s);
  }
  const strutMat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.6, metalness: 0.3 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const sl = h * 0.18;
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, sl, 4), strutMat);
    const rimY = h * 0.6 + h * 0.4;
    s.position.set(Math.cos(a) * r * 1.5, rimY - sl / 2, Math.sin(a) * r * 1.5);
    group.add(s);
  }
}

function buildLegs(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const legMat = new THREE.MeshStandardMaterial({ color: 0x404045, roughness: 0.4, metalness: 0.55 });
  const footMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.7, metalness: 0.3 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const tilt = 0.35;
    const lg = new THREE.Group();
    const off = r * 0.7;
    lg.position.set(Math.cos(a) * off, -h * 0.3, Math.sin(a) * off);
    lg.rotation.z = Math.cos(a) * tilt;
    lg.rotation.x = Math.sin(a) * tilt;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, h * 0.75, 6), legMat);
    lg.add(leg);
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.085, 0.025, 6), footMat);
    foot.position.y = -h * 0.375;
    lg.add(foot);
    group.add(lg);
  }
}
