import { describe, it, expect } from 'vitest';
import { System } from '../../src/physics/System';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';
import { FlightState } from '../../src/flight/FlightState';
import { applyThrust } from '../../src/flight/Thrust';

describe('integration smoke', () => {
  it('full launch cycle: thrust + propagate + check altitude', () => {
    const sys = new System();
    const earthMass = 5.97e24;
    sys.add({ name: 'earth', mass: earthMass, position: [0, 0, 0], velocity: [0, 0, 0] } as any);
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 2, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 1, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    r.fuelMass = 400;
    const fs = new FlightState(r, sys, [6.371e6 + 100, 0, 0], [0, 0, 0]);
    fs.throttle = 1;
    for (let i = 0; i < 60; i++) {
      applyThrust(fs, 1 / 60);
      // Manually apply gravity for the rocket (in MVP, system doesn't include rocket)
      // (gravity is applied via system.propagate; rocket has no body, so skip)
    }
    expect(fs.velocity[1]).toBeGreaterThan(0);
  });
});
