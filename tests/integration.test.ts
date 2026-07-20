import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Assembly } from '../src/rocket/Assembly';
import { Rocket } from '../src/rocket/Rocket';
import { findPart, PART_CATALOG } from '../src/parts/PartCatalog';
import { G, EARTH_MASS, PART_SCALE, ROCKET_VISUAL_SCALE, VISUAL_PLANET_MULT, ORBIT_SCALE, FIXED_DT, G0 } from '../src/config/constants';
import { gravitationalForce } from '../src/physics/Gravity';
import { Body } from '../src/physics/Body';
import { getReferenceBody } from '../src/physics/SoiResolver';
import { System } from '../src/physics/System';

describe('Comprehensive Integration Tests', () => {
  // ── Constants ──
  it('all constants are valid', () => {
    expect(G).toBeCloseTo(6.67430e-11);
    expect(PART_SCALE).toBeGreaterThan(0);
    expect(ROCKET_VISUAL_SCALE).toBeGreaterThan(0);
    expect(VISUAL_PLANET_MULT).toBeGreaterThan(0);
    expect(ORBIT_SCALE).toBeGreaterThan(0);
    expect(FIXED_DT).toBeGreaterThan(0);
    expect(G0).toBeCloseTo(9.80665);
    expect(EARTH_MASS).toBeGreaterThan(1e20);
  });

  // ── Part Catalog ──
  it('all parts have required fields', () => {
    for (const p of PART_CATALOG) {
      expect(p.id).toBeTruthy();
      expect(p.kind).toBeTruthy();
      expect(p.mass).toBeGreaterThan(0);
      expect(p.size).toBeTruthy();
      if (p.kind === 'engine') {
        expect(p.thrust).toBeGreaterThan(0);
        expect(p.isp).toBeGreaterThan(0);
      }
      if (p.kind === 'tank') {
        expect(p.fuelCapacity).toBeGreaterThan(0);
      }
    }
  });

  // ── Assembly ──
  it('assembly totalMass includes fuel', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    expect(a.totalMassWithFuel()).toBeGreaterThan(a.totalMass());
  });

  it('adapter count matches diff-sized parts', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const mesh = a.toMesh();
    const adapters = mesh.children.filter(c => {
      const m = c as THREE.Mesh;
      return m.isMesh && m.geometry.type === 'CylinderGeometry' && 
             (m.material as THREE.MeshStandardMaterial).color.getHex() === 0xdd9944;
    });
    expect(adapters.length).toBeGreaterThanOrEqual(1);
  });

  // ── Physics ──
  it('gravity between Earth and rocket', () => {
    const earth = new Body('earth', EARTH_MASS, [0, 0, 0], [0, 0, 0]);
    const rocket = new Body('rocket', 6000, [6.371e6 + 100, 0, 0], [0, 0, 0]);
    const force = gravitationalForce(earth, rocket);
    expect(force[0]).toBeLessThan(0); // pulls toward Earth center
    expect(Math.abs(force[0])).toBeGreaterThan(10000);
  });

  // ── Rocket mesh ──
  it('default rocket mesh has children', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const mesh = r.assembly.toMesh();
    expect(mesh.children.length).toBeGreaterThan(3); // 3 parts + adapters
    expect(mesh instanceof THREE.Group).toBe(true);
  });
});
