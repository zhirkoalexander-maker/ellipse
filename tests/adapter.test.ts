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
        // Joint collars are light-gray 0xd8d8d2 cylinders
        const collars = m.children.filter(c => {
          const mesh = c as THREE.Mesh;
          return mesh.isMesh && mesh.geometry.type === 'CylinderGeometry' && getAdapterColor(mesh) === 0xd8d8d2;
        });
        // S tank size differs from capsule — collar should exist
        if (tank.size !== cap.size) {
          expect(collars.length).toBeGreaterThanOrEqual(1);
        }
      }
    }
  });

  it('same-size parts produce no adapter', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const m = a.toMesh();
    const collars = m.children.filter(c => {
      const mesh = c as THREE.Mesh;
      return mesh.isMesh && mesh.geometry.type === 'CylinderGeometry' && getAdapterColor(mesh) === 0xd8d8d2;
    });
    // Both S size — no collar needed
    expect(collars.length).toBe(0);
  });
});
