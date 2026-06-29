import { describe, it, expect } from 'vitest';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';

describe('Rocket fuel', () => {
  it('tracks fuel per tank', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.01, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    expect(r.totalFuelMass()).toBe(60000);
    expect(r.fuelTanks.length).toBe(2);
  });

  it('drains from lowest tank first', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.02, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.01, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const consumed = r.consumeFuel(100, 10);
    expect(consumed).toBe(1000);
    expect(r.fuelTanks[1]!.remaining).toBe(29000);
    expect(r.fuelTanks[0]!.remaining).toBe(30000);
  });

  it('totalMass includes remaining fuel', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const initial = r.totalMass();
    r.consumeFuel(100, 10);
    expect(r.totalMass()).toBeLessThan(initial);
  });
});
