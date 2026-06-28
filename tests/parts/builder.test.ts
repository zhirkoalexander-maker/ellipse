import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { buildPartMesh } from '../../src/parts/PartBuilder';
import { findPart } from '../../src/parts/PartCatalog';

function countMeshes(g: THREE.Group): number {
  let n = 0;
  g.traverse((o) => { if (o.type === 'Mesh') n++; });
  return n;
}

function countMeshesWithMap(g: THREE.Group): number {
  let n = 0;
  g.traverse((o) => {
    if (o instanceof THREE.Mesh && o.material instanceof THREE.MeshStandardMaterial) {
      if (o.material.map) n++;
    }
  });
  return n;
}

function countMeshesWithColor(g: THREE.Group, hex: number): number {
  let n = 0;
  g.traverse((o) => {
    if (o instanceof THREE.Mesh && o.material instanceof THREE.MeshStandardMaterial) {
      if (o.material.color.getHex() === hex) n++;
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

function countMeshesWithNormalMap(g: THREE.Group): number {
  let n = 0;
  g.traverse((o) => {
    if (o instanceof THREE.Mesh && o.material instanceof THREE.MeshStandardMaterial) {
      if (o.material.normalMap) n++;
    }
  });
  return n;
}

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

  it('capsule has body cylinder, dome, adapter base, and window', () => {
    const p = findPart('capsule_mk1')!;
    const g = buildPartMesh(p);
    expect(countMeshes(g)).toBe(4);
    // body + dome + adapter base have texture map
    expect(countMeshesWithMap(g)).toBe(3);
    expect(countMeshesWithNormalMap(g)).toBe(3);
    // window = dark
    expect(countMeshesWithColor(g, 0x1a1a2e)).toBe(1);
    // window is a CircleGeometry
    expect(hasGeometryType(g, 'CircleGeometry')).toBe(true);
  });

  it('tank has body and orange trim bands', () => {
    const p = findPart('tank_m_lfo')!;
    const g = buildPartMesh(p);
    expect(countMeshes(g)).toBe(3);       // body + top band + bottom band
    expect(countMeshesWithMap(g)).toBe(3); // all have tex maps
    expect(countMeshesWithNormalMap(g)).toBe(3);
  });

  it('engine has upper body, transition ring, bell, and nozzle rim', () => {
    const p = findPart('engine_vector')!;
    const g = buildPartMesh(p);
    expect(countMeshes(g)).toBe(4);
    // body + ring + bell have textures
    expect(countMeshesWithMap(g)).toBe(3);
    expect(countMeshesWithNormalMap(g)).toBe(3);
    // silver rim (no texture, flat color)
    expect(countMeshesWithColor(g, 0x808080)).toBe(1);
  });

  it('parachute has canopy, stripes, and strut lines', () => {
    const p = findPart('parachute_mk16')!;
    const g = buildPartMesh(p);
    // 1 canopy + 3 stripes + 4 struts = 8 meshes
    expect(countMeshes(g)).toBe(8);
    // canopy has texture + normal
    expect(countMeshesWithMap(g)).toBe(1);
    expect(countMeshesWithNormalMap(g)).toBe(1);
    expect(countMeshesWithColor(g, 0xCC3344)).toBe(3); // red stripes
    expect(countMeshesWithColor(g, 0x808080)).toBe(4); // gray struts
  });

  it('legs have 4 leg cylinders and 4 foot pads', () => {
    const p = findPart('legs_landini')!;
    const g = buildPartMesh(p);
    // 4 legs (dark) + 4 foot pads (darker) = 8 meshes
    expect(countMeshes(g)).toBe(8);
    expect(countMeshesWithColor(g, 0x404045)).toBe(4); // legs
    expect(countMeshesWithColor(g, 0x2a2a2e)).toBe(4); // foot pads
  });

  it('all materials use MeshStandardMaterial', () => {
    const ids = ['capsule_mk1', 'tank_m_lfo', 'engine_ant', 'parachute_mk16', 'legs_landini'];
    for (const id of ids) {
      const g = buildPartMesh(findPart(id)!);
      g.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          expect(o.material).toBeInstanceOf(THREE.MeshStandardMaterial);
        }
      });
    }
  });
});
