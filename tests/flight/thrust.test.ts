import { describe, it, expect } from 'vitest';
import { applyThrust } from '../../src/flight/Thrust';
import { FlightState } from '../../src/flight/FlightState';
import { System } from '../../src/physics/System';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';

describe('applyThrust', () => {
  it('with throttle 1, accelerates rocket along +Y', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    r.fuelMass = 200;
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 1;
    const before = [...fs.velocity] as [number, number, number];
    applyThrust(fs, 1);
    // Should accelerate in +Y
    expect(fs.velocity[1]).toBeGreaterThan(before[1]);
  });

  it('consumes fuel proportional to throttle', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    r.fuelMass = 200;
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 0.5;
    applyThrust(fs, 1);
    expect(r.fuelMass).toBeLessThan(200);
  });

  it('with throttle 0, no thrust', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    r.fuelMass = 100;
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 0;
    const before = [...fs.velocity] as [number, number, number];
    applyThrust(fs, 1);
    expect(fs.velocity[1]).toBe(before[1]);
    expect(r.fuelMass).toBe(100);
  });
});
