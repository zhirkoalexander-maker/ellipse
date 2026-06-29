import * as THREE from 'three';
import type { Part } from './Part';
import { PART_SCALE } from '../config/constants';

const SIZE_DIMS = {
  S: { radius: 0.5 * PART_SCALE, height: 0.7 * PART_SCALE },
  M: { radius: 0.7 * PART_SCALE, height: 1.1 * PART_SCALE },
  L: { radius: 1.0 * PART_SCALE, height: 1.6 * PART_SCALE },
  XL: { radius: 1.4 * PART_SCALE, height: 2.2 * PART_SCALE }
};

const PI = Math.PI;
const SEG = 32;

const CL_BODY = 0xE8E8E8;
const CL_BODY_DARK = 0xC0C4C8;
const CL_TANK = 0xD0D4D8;
const CL_ENGINE = 0x334455;
const CL_ENGINE_DARK = 0x1A222A;
const CL_GOLD = 0xF2D496;
const CL_BLUE = 0x0077D1;
const CL_RED = 0xDD4444;
const CL_WINDOW = 0x1A5988;
const CL_GLOW = 0x3399FF;

function mat(color: number, roughness = 0.5, metalness = 0.3, side?: THREE.Side): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, ...(side ? { side } : {}) });
}

export function buildPartMesh(part: Part): THREE.Group {
  const g = new THREE.Group();
  g.name = part.id;
  const d = SIZE_DIMS[part.size];
  switch (part.kind) {
    case 'capsule': buildCapsule(g, d, part.id); break;
    case 'tank': buildTank(g, d); break;
    case 'engine': buildEngine(g, d); break;
    case 'parachute': buildParachute(g, d); break;
    case 'legs': buildLegs(g, d); break;
    case 'decoupler': buildDecoupler(g, d); break;
  }
  return g;
}

function buildCapsule(group: THREE.Group, d: { radius: number; height: number }, id: string) {
  const r = d.radius, h = d.height;
  const isMk1 = id.includes('mk1');
  const stripeColor = isMk1 ? CL_RED : CL_BLUE;

  const bodyMat = mat(CL_BODY, 0.4, 0.3);
  const goldMat = mat(CL_GOLD, 0.3, 0.6);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h * 0.6, SEG), bodyMat);
  body.position.y = h * 0.05;
  group.add(body);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(r, SEG, SEG, 0, PI * 2, 0, PI / 2), bodyMat);
  nose.position.y = h * 0.35;
  group.add(nose);

  const tip = new THREE.Mesh(new THREE.SphereGeometry(r * 0.08, 12, 8), goldMat);
  tip.position.y = h * 0.35 + r * 0.5;
  group.add(tip);

  const stripeMat = mat(stripeColor, 0.4, 0.3);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.04, r * 1.04, h * 0.05, SEG), stripeMat);
  band.position.y = h * 0.05;
  group.add(band);

  const band2 = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.04, r * 1.04, h * 0.03, SEG), stripeMat);
  band2.position.y = -h * 0.15;
  group.add(band2);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.3, r * 0.95, h * 0.15, SEG), goldMat);
  base.position.y = -h * 0.3 - h * 0.075;
  group.add(base);

  const winMat = mat(CL_WINDOW, 0.15, 0.6);
  const win = new THREE.Mesh(new THREE.CircleGeometry(r * 0.2, 16), winMat);
  win.position.set(r + 0.001, h * 0.18, 0);
  win.rotation.y = -PI / 2;
  group.add(win);

  const glowM = new THREE.MeshBasicMaterial({ color: CL_GLOW, transparent: true, opacity: 0.6 });
  const glowRing = new THREE.Mesh(new THREE.RingGeometry(r * 0.2, r * 0.24, 16), glowM);
  glowRing.position.set(r + 0.001, h * 0.18, 0);
  glowRing.rotation.y = -PI / 2;
  group.add(glowRing);
}

function buildTank(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const bodyMat = mat(CL_TANK, 0.5, 0.2);
  const goldMat = mat(CL_GOLD, 0.3, 0.6);
  const ringMat = mat(CL_BODY_DARK, 0.6, 0.3);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, SEG), bodyMat);
  group.add(body);

  const bh = h * 0.03;
  const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.03, r * 1.03, bh, SEG), goldMat);
  band.position.y = h / 2 - bh / 2;
  group.add(band);

  const bandB = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.03, r * 1.03, bh, SEG), goldMat);
  bandB.position.y = -h / 2 + bh / 2;
  group.add(bandB);

  for (let i = 0; i < 3; i++) {
    const ridge = new THREE.Mesh(new THREE.TorusGeometry(r * 1.01, bh * 1.5, 6, SEG), ringMat);
    ridge.position.y = -h / 2 + h * 0.2 * (i + 1);
    ridge.rotation.x = PI / 2;
    group.add(ridge);
  }

  const ring = new THREE.Mesh(new THREE.TorusGeometry(r * 1.02, bh * 1.2, 6, SEG), ringMat);
  ring.position.y = 0;
  ring.rotation.x = PI / 2;
  group.add(ring);
}

function buildEngine(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const bodyMat = mat(CL_ENGINE, 0.3, 0.7);
  const goldMat = mat(CL_GOLD, 0.3, 0.6);
  const darkMat = mat(CL_ENGINE_DARK, 0.5, 0.4);
  const rimMat = mat(CL_BLUE, 0.15, 0.8);

  const upper = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.4, r * 0.6, h * 0.25, SEG), bodyMat);
  upper.position.y = h * 0.35;
  group.add(upper);

  const ring = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.6, r * 0.5, h * 0.06, SEG), goldMat);
  ring.position.y = h * 0.12;
  group.add(ring);

  const bellOuter = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.85, h * 0.4, SEG), bodyMat);
  bellOuter.position.y = -h * 0.12;
  group.add(bellOuter);

  const bellInner = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.35, r * 0.7, h * 0.38, SEG), darkMat);
  bellInner.position.y = -h * 0.12;
  group.add(bellInner);

  const rim = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.88, r * 0.88, h * 0.03, SEG), rimMat);
  rim.position.y = -h * 0.12 - h * 0.2 - h * 0.015;
  group.add(rim);

  const glowM = new THREE.MeshBasicMaterial({ color: CL_GLOW, transparent: true, opacity: 0.4 });
  const inner = new THREE.Mesh(new THREE.RingGeometry(0, r * 0.3, SEG), glowM);
  inner.position.y = -h * 0.12 - h * 0.2 - h * 0.02;
  inner.rotation.x = -PI / 2;
  group.add(inner);
}

function buildParachute(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const packMat = mat(0x8899AA, 0.5, 0.2);
  const goldMat = mat(CL_GOLD, 0.3, 0.6);

  const pack = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.35, r * 0.35, h * 0.18, 12), packMat);
  pack.position.y = h * 0.55;
  group.add(pack);

  const lidMat = mat(0x6A7A8A, 0.4, 0.3);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.37, r * 0.37, h * 0.03, 12), lidMat);
  lid.position.y = h * 0.55 + h * 0.09;
  group.add(lid);

  const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.37, r * 0.37, h * 0.02, 12), goldMat);
  band.position.y = h * 0.55 - h * 0.09;
  group.add(band);
}

export function buildDeployedParachute(d: { radius: number; height: number }): THREE.Group {
  const g = new THREE.Group();
  const r = d.radius, h = d.height;
  const SEG_P = 24;

  const canopyMat = mat(0x8899AA, 0.7, 0.05, THREE.DoubleSide);
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(r * 1.8, SEG_P, SEG_P, 0, PI * 2, 0, PI * 0.5), canopyMat);
  canopy.position.y = h * 0.3;
  canopy.rotation.x = PI;
  g.add(canopy);

  const stripeMat = mat(CL_RED, 0.7, 0.05, THREE.DoubleSide);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * PI * 2;
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(r * 0.03, h * 0.7, r * 0.015), stripeMat);
    stripe.position.set(Math.cos(a) * r * 0.9, h * 0.4, Math.sin(a) * r * 0.9);
    stripe.rotation.x = PI;
    stripe.lookAt(0, h * 0.8, 0);
    g.add(stripe);
  }

  const strutMat = mat(0x6A7A8A, 0.5, 0.4);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;
    for (let j = 0; j < 3; j++) {
      const strut = new THREE.Mesh(
        new THREE.CylinderGeometry(0.006, 0.006, h * 0.15, 4),
        strutMat
      );
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
  const legMat = mat(0x445566, 0.4, 0.5);
  const footMat = mat(0x667788, 0.6, 0.3);

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;

    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.007, h * 0.35, 6),
      legMat
    );
    const legX = Math.cos(a) * r * 0.65;
    const legZ = Math.sin(a) * r * 0.65;
    leg.position.set(legX, -h / 2 - h * 0.175, legZ);
    leg.rotation.z = Math.cos(a) * 0.3;
    leg.rotation.x = Math.sin(a) * 0.3;
    group.add(leg);

    const foot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.025, 0.008, 6),
      footMat
    );
    foot.position.set(Math.cos(a) * r * 0.95, -h / 2 - h * 0.35, Math.sin(a) * r * 0.95);
    group.add(foot);
  }
}

function buildDecoupler(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const bodyMat = mat(0x6A7A8A, 0.3, 0.5);
  const goldMat = mat(CL_GOLD, 0.3, 0.6);

  const ring = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.05, r * 0.92, h * 0.12, SEG), bodyMat);
  group.add(ring);

  const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.08, r * 1.08, h * 0.04, SEG), goldMat);
  band.position.y = h * 0.06;
  group.add(band);

  const bottom = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.92, h * 0.04, SEG), bodyMat);
  bottom.position.y = -h * 0.06;
  group.add(bottom);
}
