import { describe, it, expect } from 'vitest';
import { FlightState } from '../../src/flight/FlightState';
import { System } from '../../src/physics/System';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';

describe('FlightState', () => {
  it('initializes with rocket, system, throttle 0', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const fs = new FlightState(r, sys, [6.371e6, 0, 0], [0, 0, 0]);
    expect(fs.throttle).toBe(0);
  });

  it('consumeFuel reduces fuelMass', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const before = r.totalFuelMass();
    const fs = new FlightState(r, sys, [6.371e6, 0, 0], [0, 0, 0]);
    fs.consumeFuel(10, 1);
    expect(r.totalFuelMass()).toBeLessThan(before);
  });
});
