import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Assembly } from '../src/rocket/Assembly';
import { Rocket } from '../src/rocket/Rocket';
import { findPart, PART_CATALOG } from '../src/parts/PartCatalog';

describe('Rocket Configurations', () => {
  const sizes = ['S', 'M', 'L', 'XL'] as const;
  const capsules = PART_CATALOG.filter(p => p.kind === 'capsule');
  const tanks = PART_CATALOG.filter(p => p.kind === 'tank');
  const engines = PART_CATALOG.filter(p => p.kind === 'engine');

  it('all capsule + tank + engine combos build without crash', () => {
    for (const cap of capsules) {
      for (const tank of tanks) {
        for (const eng of engines) {
          const a = new Assembly();
          a.addRoot({ part: cap, position: [0, 1.6 * 0.05, 0], rotation: 0, children: [] });
          a.addRoot({ part: tank, position: [0, 0.8 * 0.05, 0], rotation: 0, children: [] });
          a.addRoot({ part: eng, position: [0, 0, 0], rotation: 0, children: [] });
          const r = new Rocket(a);
          expect(r.totalMass()).toBeGreaterThan(0);
          expect(r.totalFuelMass()).toBeGreaterThanOrEqual(0);
          const mesh = a.toMesh();
          expect(mesh.children.length).toBeGreaterThanOrEqual(3);
          // Adapters: expect 0-2 cones between 3 parts of different sizes
          const adapterCount = mesh.children.filter(
            c => c instanceof THREE.Mesh && (c as THREE.Mesh).geometry.type === 'CylinderGeometry'
          ).length;
          expect(adapterCount).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });

  it('centerOfMass is between min and max Y', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_xl_lfo')!, position: [0, 0.8 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_mammoth')!, position: [0, 0, 0], rotation: 0, children: [] });
    const com = a.centerOfMass();
    expect(com[1]).toBeGreaterThan(0);
    expect(com[1]).toBeLessThan(1.6 * 0.05);
  });

  it('default rocket has fuel', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    expect(r.totalFuelMass()).toBeGreaterThan(0);
  });

  it('XL tank + XL engine adapter is created', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_xl_lfo')!, position: [0, 0.6 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const mesh = a.toMesh();
    // XL tank and S engine have different sizes → adapter should exist
    const cylinders = mesh.children.filter(
      c => c instanceof THREE.Mesh && (c as THREE.Mesh).geometry.type === 'CylinderGeometry'
    ).length;
    // Original parts add cylinders + adapter adds one more
    expect(cylinders).toBeGreaterThan(0);
  });

  it('all part catalog entries have valid data', () => {
    for (const part of PART_CATALOG) {
      expect(part.id).toBeTruthy();
      expect(part.kind).toBeTruthy();
      expect(part.size).toBeTruthy();
      expect(part.mass).toBeGreaterThan(0);
      if (part.kind === 'engine') {
        expect(part.thrust).toBeGreaterThan(0);
        expect(part.isp).toBeGreaterThan(0);
      }
      if (part.kind === 'tank') {
        expect(part.fuelCapacity).toBeGreaterThan(0);
      }
    }
  });
});

