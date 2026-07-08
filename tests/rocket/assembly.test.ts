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
    // capsule 1200 + tank 600 = 1800
    expect(a.totalMass()).toBe(1800);
  });

  it('totalMassWithFuel adds tank fuel', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    // tank 600 + 45000 fuel = 45600
    expect(a.totalMassWithFuel()).toBe(45600);
  });

  it('centerOfMass is mass-weighted average position', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0, 0], rotation: 0, children: [] });   // 1200
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, -2, 0], rotation: 0, children: [] });    // 600
    const com = a.centerOfMass();
    // CoM = (1200*[0,0,0] + 600*[0,-2,0]) / 1800 = [0, -0.666..., 0]
    expect(com[0]).toBeCloseTo(0);
    expect(com[1]).toBeCloseTo(-0.666);
  });
});
