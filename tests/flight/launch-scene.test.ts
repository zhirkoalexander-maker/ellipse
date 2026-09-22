import { describe, it, expect } from 'vitest';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { System } from '../../src/physics/System';
import { Sun } from '../../src/planets/Sun';
import { Earth } from '../../src/planets/Earth';
import { Moon } from '../../src/planets/Moon';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart, PART_CATALOG } from '../../src/parts/PartCatalog';
import { PART_SCALE } from '../../src/config/constants';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';

function buildDefaultRocket(): Rocket {
  const a = new Assembly();
  const p = PART_SCALE;
  const H = { S: 1.4 * p, M: 2.0 * p, L: 2.8 * p, XL: 3.6 * p };
  const gap = 0;
  let y = -H.S / 2;
  const stack = (h: number) => { const c = y + h / 2; y += h + gap; return c; };

  const engY = stack(H.S);
  const tank1Y = stack(H.S);
  const tank2Y = stack(H.S);
  const capY = stack(H.M);

  a.addRoot({ part: findPart('engine_ant')!, position: [0, engY, 0], rotation: 0, children: [] });
  a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tank1Y, 0], rotation: 0, children: [] });
  a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tank2Y, 0], rotation: 0, children: [] });
  a.addRoot({ part: findPart('capsule_mk1')!, position: [0, capY, 0], rotation: 0, children: [] });
  return new Rocket(a);
}

function buildSystem(): System {
  const system = new System();
  system.add(new Sun([0, 0, 0], [0, 0, 0], 2e26));
  system.add(new Earth([1e9, 0, 0], [0, 0, 17000]));
  system.add(new Moon([1e9, 0, 6e7], [0, 0, 17900]));
  return system;
}

describe('FlightScene launch from KSC pad', () => {
  it('does not crash right after the 3-2-1 countdown', () => {
    const renderer = new Renderer();
    const sceneMgr = new SceneManager();
    const system = buildSystem();
    const flight = new FlightScene(renderer, sceneMgr, system, buildDefaultRocket(), new Achievements(), new Missions());
    const anyFlight = flight as any;

    // Full throttle so the countdown starts immediately.
    anyFlight.state.throttle = 1;

    // 3s countdown + ~4.5s of climbing = 7.5s (450 frames @60fps).
    for (let i = 0; i < 450; i++) {
      flight.update(1 / 60);
    }

    // Regression guards for the "crash right after 3-2-1" bug:
    //  1. Ballistic position integration must run AFTER system.propagate and the
    //     collision check — integrating the absolute velocity (which on liftoff
    //     includes Earth's 17 km/s orbital motion) first would dip the rocket
    //     ~250 m inside the planet before the reference body moves. Now it must
    //     climb normally.
    //  2. Vertical speed for the surface band uses the body-RELATIVE velocity.
    expect(anyFlight.crashed).toBe(false);
    expect(anyFlight.launched).toBe(true);
    expect(anyFlight.grounded).toBe(false);

    // Rocket must have climbed above its spawn altitude on the pad.
    const earth = system.bodies.find((b) => (b as any).name === 'earth') as any;
    const [px, py, pz] = anyFlight.state.position as [number, number, number];
    const fdx = px - earth.position[0];
    const fdy = py - earth.position[1];
    const fdz = pz - earth.position[2];
    const fd = Math.sqrt(fdx * fdx + fdy * fdy + fdz * fdz);
    const fsurfaceR = earth.getSurfaceRadiusAt([px, py, pz]) ?? earth.radius;
    expect(fd - fsurfaceR).toBeGreaterThan(150);
  });

  it('engine_ant TWR uses default thrust that clears the 1.0 gate (regression guard)', () => {
    const engine = PART_CATALOG.find((p) => p.id === 'engine_ant')!;
    expect(engine.thrust).toBeGreaterThanOrEqual(2400);
  });
});