import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { buildPartMesh } from '../../src/parts/PartBuilder';
import { findPart } from '../../src/parts/PartCatalog';

function countMeshes(g: THREE.Group): number {
  let n = 0;
  g.traverse((o) => { if (o.type === 'Mesh') n++; });
  return n;
}

function countMeshesWithColor(g: THREE.Group, hex: number): number {
  let n = 0;
  g.traverse((o) => {
    if (o instanceof THREE.Mesh) {
      const mat = o.material;
      const c = ('color' in mat) ? (mat as any).color : null;
      if (c && c.getHex() === hex) n++;
    }
  });
  return n;
}

function hasGeometryType(g: THREE.Group, type: string): boolean {
  let found = false;
  g.traverse((o) => {
    if (o instanceof THREE.Mesh && o.geometry.type === type) found = true;
  });
  return found;
}

const CL_GOLD = 0xF2D496;

describe('PartBuilder', () => {
  it('returns a Group for each part kind', () => {
    const ids = ['capsule_mk1', 'tank_m_lfo', 'engine_ant', 'parachute_mk16', 'legs_landini'];
    for (const id of ids) {
      const p = findPart(id);
      expect(p).toBeDefined();
      const g = buildPartMesh(p!);
      expect(g.type).toBe('Group');
    }
  });

  it('capsule has body, nose cone, stripes, gold base, window + glow', () => {
    const p = findPart('capsule_mk1')!;
    const g = buildPartMesh(p);
    expect(hasGeometryType(g, 'CircleGeometry')).toBe(true);
    expect(hasGeometryType(g, 'RingGeometry')).toBe(true);
    expect(countMeshesWithColor(g, CL_GOLD)).toBe(2);
  });

  it('tank has body and gold bands + structural ring', () => {
    const p = findPart('tank_m_lfo')!;
    const g = buildPartMesh(p);
    expect(countMeshes(g)).toBeGreaterThanOrEqual(4);
  });

  it('engine has upper body, ring, bell, rim, and inner glow', () => {
    const p = findPart('engine_vector')!;
    const g = buildPartMesh(p);
    expect(countMeshes(g)).toBeGreaterThanOrEqual(5);
    expect(hasGeometryType(g, 'RingGeometry')).toBe(true);
  });

  it('parachute is packed container (3 meshes) until deployed in flight', () => {
    const p = findPart('parachute_mk16')!;
    const g = buildPartMesh(p);
    expect(countMeshes(g)).toBe(3);
  });

  it('legs have 4 leg cylinders and 4 foot pads', () => {
    const p = findPart('legs_landini')!;
    const g = buildPartMesh(p);
    expect(countMeshes(g)).toBe(8);
  });

  it('all materials use MeshStandardMaterial or BasicMaterial', () => {
    const ids = ['capsule_mk1', 'tank_m_lfo', 'engine_ant', 'parachute_mk16', 'legs_landini'];
    for (const id of ids) {
      const g = buildPartMesh(findPart(id)!);
      g.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          const isStd = o.material instanceof THREE.MeshStandardMaterial;
          const isBasic = o.material instanceof THREE.MeshBasicMaterial;
          expect(isStd || isBasic).toBe(true);
        }
      });
    }
  });
});
