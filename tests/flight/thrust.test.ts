import { describe, it, expect } from 'vitest';
import { applyThrust } from '../../src/flight/Thrust';
import { FlightState } from '../../src/flight/FlightState';
import { System } from '../../src/physics/System';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';
import { G0, FUEL_FLOW_MULT } from '../../src/config/constants';

function heavyState(tanks: number, engine = 'engine_mammoth') {
  const a = new Assembly();
  for (const id of [engine, ...Array<string>(tanks).fill('tank_xl_lfo')]) {
    a.addRoot({ part: findPart(id)!, position: [0, 0, 0], rotation: 0, children: [] });
  }
  const state = new FlightState(new Rocket(a), new System(), [0, 0, 0], [0, 0, 0]);
  state.throttle = 1;
  return state;
}

it('gives heavy stacks enough real acceleration to lift, with less acceleration for more mass', () => {
  const medium = heavyState(5), heavy = heavyState(20);
  for (const state of [medium, heavy]) applyThrust(state, 1);
  expect(heavy.velocity[1]).toBeGreaterThan(18 * 1.1);
  expect(heavy.velocity[1]).toBeLessThan(medium.velocity[1]);
});

it('scales fuel flow with delivered thrust and still respects throttle and empty tanks', () => {
  const full = heavyState(10, 'engine_ant'), half = heavyState(10, 'engine_ant');
  const fuel = full.rocket.totalFuelMass(), mass = full.rocket.totalMass();
  half.throttle = .5;
  applyThrust(full, 1); applyThrust(half, 1);
  expect(full.velocity[1]).toBeGreaterThan(18);
  expect(half.velocity[1]).toBeCloseTo(full.velocity[1] / 2);
  expect(fuel - full.rocket.totalFuelMass()).toBeCloseTo(full.velocity[1] * mass / (findPart('engine_ant')!.isp! * G0) * FUEL_FLOW_MULT);
  full.rocket.fuelTanks.forEach(t => t.remaining = 0);
  const before = [...full.velocity]; applyThrust(full, 1);
  expect(full.velocity).toEqual(before);
});

describe('applyThrust', () => {
  it('with throttle 1, accelerates rocket along +Y', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 1;
    const before = [...fs.velocity] as [number, number, number];
    applyThrust(fs, 1);
    expect(fs.velocity[1]).toBeGreaterThan(before[1]);
  });

  it('consumes fuel proportional to throttle', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const before = r.totalFuelMass();
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 0.5;
    applyThrust(fs, 1);
    expect(r.totalFuelMass()).toBeLessThan(before);
  });

  it('with throttle 0, no thrust', () => {
    const sys = new System();
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const before = r.totalFuelMass();
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 0;
    const beforeVel = [...fs.velocity] as [number, number, number];
    applyThrust(fs, 1);
    expect(fs.velocity[1]).toBe(beforeVel[1]);
    expect(r.totalFuelMass()).toBe(before);
  });
});
