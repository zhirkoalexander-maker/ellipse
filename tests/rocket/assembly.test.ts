import { describe, it, expect } from 'vitest';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';

describe('Assembly', () => {
  it('addRoot adds a node', () => {
    const a = new Assembly();
    const cap = findPart('capsule_mk1')!;
    a.addRoot({ part: cap, position: [0, 0, 0], rotation: 0, children: [] });
    expect(a.roots.length).toBe(1);
  });

  it('totalMass sums all part masses', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, -1, 0], rotation: 0, children: [] });
    // capsule 1200 + tank 400 = 1600
    expect(a.totalMass()).toBe(1600);
  });

  it('totalMassWithFuel adds tank fuel', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    // tank 400 + 400 fuel = 800
    expect(a.totalMassWithFuel()).toBe(800);
  });

  it('centerOfMass is mass-weighted average position', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0, 0], rotation: 0, children: [] });   // 1200
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, -2, 0], rotation: 0, children: [] });    // 400
    const com = a.centerOfMass();
    // CoM = (1200*[0,0,0] + 400*[0,-2,0]) / 1600 = [0, -0.5, 0]
    expect(com[0]).toBeCloseTo(0);
    expect(com[1]).toBeCloseTo(-0.5);
  });
});
