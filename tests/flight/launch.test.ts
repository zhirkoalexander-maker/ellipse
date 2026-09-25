import { describe, it, expect } from 'vitest';
import { applyThrust, findFirstEngine } from '../../src/flight/Thrust';
import { FlightState } from '../../src/flight/FlightState';
import { System } from '../../src/physics/System';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';
import { G0, G, EARTH_MASS, EARTH_RADIUS, FUEL_FLOW_MULT } from '../../src/config/constants';

describe('TWR and launch', () => {
  it('default rocket has TWR above 1.0 at full throttle', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.045, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);

    const engine = findFirstEngine(r.assembly.roots);
    expect(engine).not.toBeNull();
    const mass = r.totalMass();
    const grav = G * EARTH_MASS / EARTH_RADIUS ** 2;
    const twr = (engine!.thrust * 1000) / (mass * grav);

    expect(twr).toBeGreaterThanOrEqual(1.0);
    expect(twr).toBeGreaterThan(4.3);
    expect(twr).toBeLessThan(4.7);
  });

  it('default rocket at 1% throttle has TWR < 1.0', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.045, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);

    const engine = findFirstEngine(r.assembly.roots);
    const mass = r.totalMass();
    const grav = G * EARTH_MASS / EARTH_RADIUS ** 2;
    const twr = (engine!.thrust * 1000 * 0.01) / (mass * grav);
    expect(twr).toBeLessThan(1.0);
  });

  it('consumes fuel according to thrust, Isp and the configured burn multiplier', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 1, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const fs = new FlightState(r, new System(), [0, 0, 0], [0, 0, 0]);
    fs.throttle = 0.5;
    const fuelBefore = r.totalFuelMass();
    const engine = findFirstEngine(a.roots)!;
    applyThrust(fs, 2);
    expect(fuelBefore - r.totalFuelMass()).toBeCloseTo(engine.thrust * 1000 * 0.5 / (engine.isp * G0) * FUEL_FLOW_MULT * 2, 8);
  });

  it('multi-engine sums all thrust', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.1, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const sys = new System();
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 1;
    const massBefore = r.totalMass();
    applyThrust(fs, 1);
    expect(fs.velocity[1]).toBeCloseTo(2 * findPart('engine_ant')!.thrust! * 1000 / massBefore, 8);
  });

  it('NO fuel — NO thrust (engines cut off when tanks are dry)', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const sys = new System();
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 1;
    applyThrust(fs, 1);
    expect(fs.velocity[1]).toBe(0);
  });
});
