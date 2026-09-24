import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { System } from '../../src/physics/System';
import { Sun } from '../../src/planets/Sun';
import { Earth } from '../../src/planets/Earth';
import { Moon } from '../../src/planets/Moon';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart, PART_CATALOG } from '../../src/parts/PartCatalog';
import { PART_SCALE, ORBIT_SCALE, VISUAL_PLANET_MULT, ROCKET_VISUAL_SCALE, G, EARTH_MASS, EARTH_RADIUS } from '../../src/config/constants';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

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

    // 3s countdown + 7s of climbing with the new controllable thrust balance.
    for (let i = 0; i < 600; i++) {
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

    // Visual regression: the rocket must NOT be buried in the ground. Its group
    // is placed at state.position*VISUAL_SCALE + upDir*visualOffset, and the
    // model hangs up to rocketBottomY*ROCKET_VISUAL_SCALE below the origin.
    // The earth MESH sphere has radius = earth.visualRadius (the doubled radius).
    const group = (anyFlight.rocketGroup as { position: { x: number; y: number; z: number } }).position;
    const ecdx = group.x - earth.position[0] * VISUAL_SCALE;
    const ecdy = group.y - earth.position[1] * VISUAL_SCALE;
    const ecdz = group.z - earth.position[2] * VISUAL_SCALE;
    const groupDist = Math.sqrt(ecdx * ecdx + ecdy * ecdy + ecdz * ecdz);
    const bottomY = groupDist + (anyFlight.rocketBottomY as number) * ROCKET_VISUAL_SCALE;
    expect(bottomY).toBeGreaterThanOrEqual(earth.visualRadius - 0.1);
    expect(anyFlight.rocketBottomY).toBeLessThan(0);
  });

  it('engine_ant TWR uses default thrust that clears the 1.0 gate (regression guard)', () => {
    const engine = PART_CATALOG.find((p) => p.id === 'engine_ant')!;
    const rocket = buildDefaultRocket();
    const twr = engine.thrust! * 1000 / (rocket.totalMass() * G * EARTH_MASS / EARTH_RADIUS ** 2);
    // The faster-launch tune deliberately targets about 2.78 at full fuel.
    expect(twr).toBeGreaterThan(2.5);
    expect(twr).toBeLessThan(3);
  });

  it('gravity-turn autopilot pitches the rocket over after clearing the pad', () => {
    const renderer = new Renderer();
    const sceneMgr = new SceneManager();
    const system = buildSystem();
    const flight = new FlightScene(renderer, sceneMgr, system, buildDefaultRocket(), new Achievements(), new Missions());
    const anyFlight = flight as any;
    anyFlight.state.throttle = 1;

    // ~30s of flight: past the 800 m turn-start altitude and ~15s into the turn.
    const frames = 1800;
    for (let i = 0; i < frames; i++) {
      flight.update(1 / 60);
    }

    expect(anyFlight.crashed).toBe(false);
    expect(anyFlight.grounded).toBe(false);

    const earth = system.bodies.find((b) => (b as any).name === 'earth') as any;
    const [px, py, pz] = anyFlight.state.position as [number, number, number];
    const fdx = px - earth.position[0];
    const fdy = py - earth.position[1];
    const fdz = pz - earth.position[2];
    const fd = Math.sqrt(fdx * fdx + fdy * fdy + fdz * fdz);
    const surfX = fdx / fd, surfY = fdy / fd, surfZ = fdz / fd;

    // The nose must have tilted away from straight-up (surface normal).
    const fwd = new THREE.Vector3(0, 1, 0).applyQuaternion(anyFlight.rocketGroup.quaternion).normalize();
    const dot = fwd.x * surfX + fwd.y * surfY + fwd.z * surfZ;
    const tiltDeg = Math.acos(Math.min(1, Math.max(-1, dot))) * 180 / Math.PI;
    expect(tiltDeg).toBeGreaterThan(6);
  });
});
