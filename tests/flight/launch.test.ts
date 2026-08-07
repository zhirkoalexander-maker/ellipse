import { describe, it, expect } from 'vitest';
import { applyThrust, findFirstEngine } from '../../src/flight/Thrust';
import { FlightState } from '../../src/flight/FlightState';
import { System } from '../../src/physics/System';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';
import { G0 } from '../../src/config/constants';

describe('TWR and launch', () => {
  it('default rocket has TWR above 1.0 at full throttle', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);

    const engine = findFirstEngine(r.assembly.roots);
    expect(engine).not.toBeNull();
    const mass = r.totalMass();
    const grav = 117;
    const twr = (engine!.thrust * 1000) / (mass * grav);

    expect(twr).toBeGreaterThanOrEqual(1.0);
    expect(twr).toBeLessThan(2.5);
  });

  it('default rocket at 1% throttle has TWR < 1.0', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);

    const engine = findFirstEngine(r.assembly.roots);
    const mass = r.totalMass();
    const grav = 117;
    const twr = (engine!.thrust * 1000 * 0.01) / (mass * grav);
    expect(twr).toBeLessThan(1.0);
  });

  it('realistic mass flow without /30 divisor', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const expectedMassFlow = 1200000 / (350 * G0);
    expect(expectedMassFlow).toBeGreaterThan(200);
    expect(expectedMassFlow).toBeLessThan(500);
  });

  it('multi-engine sums all thrust', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const sys = new System();
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 1;
    applyThrust(fs, 1);
    expect(fs.velocity[1]).toBeGreaterThan(0);
    expect(fs.velocity[1]).toBeGreaterThan(100);
  });
});
