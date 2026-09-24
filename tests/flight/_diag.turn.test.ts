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
import { findPart } from '../../src/parts/PartCatalog';
import { PART_SCALE } from '../../src/config/constants';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';

function buildDefaultRocket(): Rocket {
  const a = new Assembly();
  const p = PART_SCALE;
  const H = { S: 1.4 * p, M: 2.0 * p, L: 2.8 * p, XL: 3.6 * p };
  let y = -H.S / 2;
  const stack = (h: number) => { const c = y + h / 2; y += h; return c; };
  a.addRoot({ part: findPart('engine_ant')!, position: [0, stack(H.S), 0], rotation: 0, children: [] });
  a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, stack(H.S), 0], rotation: 0, children: [] });
  a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, stack(H.S), 0], rotation: 0, children: [] });
  a.addRoot({ part: findPart('capsule_mk1')!, position: [0, stack(H.M), 0], rotation: 0, children: [] });
  return new Rocket(a);
}

function buildSystem(): System {
  const system = new System();
  system.add(new Sun([0, 0, 0], [0, 0, 0], 2e26));
  system.add(new Earth([1e9, 0, 0], [0, 0, 17000]));
  system.add(new Moon([1e9, 0, 6e7], [0, 0, 17900]));
  return system;
}

describe('diag turn', () => {
  it('prints the rocket state right up to and past the crash', () => {
    const renderer = new Renderer();
    const sceneMgr = new SceneManager();
    const system = buildSystem();
    const flight = new FlightScene(renderer, sceneMgr, system, buildDefaultRocket(), new Achievements(), new Missions());
    const f = flight as any;
    f.state.throttle = 1;
    const earth = system.bodies.find((b) => (b as any).name === 'earth') as any;

    for (let i = 0; i < 2000; i++) {
      flight.update(1 / 60);
      if (i % 60 === 0 || i < 10 || f.crashed) {
        const [px, py, pz] = f.state.position;
        const dx = px - earth.position[0], dy = py - earth.position[1], dz = pz - earth.position[2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const sr = earth.getSurfaceRadiusAt([px, py, pz]) ?? earth.radius;
        const alt = d - sr;
        const sx = dx / d, sy = dy / d, sz = dz / d;
        const fwd = new THREE.Vector3(0, 1, 0).applyQuaternion(f.rocketGroup.quaternion).normalize();
        const tilt = Math.acos(Math.min(1, Math.max(-1, fwd.x * sx + fwd.y * sy + fwd.z * sz))) * 180 / Math.PI;
        const rv = f.relVelocity();
        const vrel = Math.sqrt(rv[0] ** 2 + rv[1] ** 2 + rv[2] ** 2);
        console.log(`t=${(i / 60).toFixed(1)}s alt=${Math.round(alt)} bias=${f._gravityTurnBias.toFixed(3)} tilt=${tilt.toFixed(1)}deg vrel=${vrel.toFixed(0)} crashed=${f.crashed}${f.crashed ? ` REASON=${(f as any)._crashReason ?? '(none)'}` : ''}`);
        if (f.crashed) break;
      }
    }
    expect(true).toBe(true);
  });
});