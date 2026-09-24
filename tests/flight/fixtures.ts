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
import { PART_SCALE, ORBIT_SCALE, VISUAL_PLANET_MULT, ROCKET_VISUAL_SCALE } from '../../src/config/constants';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

export function buildDefaultRocket(): Rocket {
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

export function buildSystem(): System {
  const system = new System();
  system.add(new Sun([0, 0, 0], [0, 0, 0], 2e26));
  system.add(new Earth([1e9, 0, 0], [0, 0, 17000]));
  system.add(new Moon([1e9, 0, 6e7], [0, 0, 17900]));
  return system;
}

