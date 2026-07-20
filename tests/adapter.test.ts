import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Assembly } from '../src/rocket/Assembly';
import { findPart, PART_CATALOG } from '../src/parts/PartCatalog';
import { PART_SCALE } from '../src/config/constants';

describe('Adapter Tests', () => {
  const sizes = ['S', 'M', 'L', 'XL'] as const;
  const getAdapterColor = (mesh: THREE.Mesh) => 
    (mesh.material as THREE.MeshStandardMaterial).color.getHex();

  it('every S-size tank to every capsule creates adapter', () => {
    const caps = PART_CATALOG.filter(p => p.kind === 'capsule');
    const tanks = PART_CATALOG.filter(p => p.kind === 'tank' && p.size === 'S');
    for (const cap of caps) {
      for (const tank of tanks) {
        const a = new Assembly();
        a.addRoot({ part: cap, position: [0, 1.2*PART_SCALE, 0], rotation: 0, children: [] });
        a.addRoot({ part: tank, position: [0, 0.6*PART_SCALE, 0], rotation: 0, children: [] });
        const m = a.toMesh();
        const goldCones = m.children.filter(c => {
          const mesh = c as THREE.Mesh;
          return mesh.isMesh && mesh.geometry.type === 'CylinderGeometry' && getAdapterColor(mesh) === 0xdd9944;
        });
        // S tank size differs from capsule — adapter should exist
        if (tank.size !== cap.size) {
          expect(goldCones.length).toBeGreaterThanOrEqual(1);
        }
      }
    }
  });

  it('same-size parts produce no adapter', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const m = a.toMesh();
    const goldCones = m.children.filter(c => {
      const mesh = c as THREE.Mesh;
      return mesh.isMesh && mesh.geometry.type === 'CylinderGeometry' && getAdapterColor(mesh) === 0xdd9944;
    });
    // Both S size — no adapter needed
    expect(goldCones.length).toBe(0);
  });
});
