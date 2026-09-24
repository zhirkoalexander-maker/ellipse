import { beforeEach, describe, expect, it } from 'vitest';
import * as saves from '../../src/storage/SaveLoad';
import { Assembly } from '../../src/rocket/Assembly';
import { Rocket } from '../../src/rocket/Rocket';
import { findPart } from '../../src/parts/PartCatalog';

function assembly() {
  const a = new Assembly();
  a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0, 0], rotation: 0, children: [
    { part: findPart('tank_s_lfo')!, position: [0, 2, 0], rotation: 0, children: [] },
  ] });
  return a;
}
function valid(): saves.FlightSave {
  return { assembly: saves.serializeAssembly(assembly()), fuel: [10], position: [1,2,3], velocity: [0,0,0], quat: [0,0,0,1], throttle: 0, missionTime: 4, launched: true, grounded: false, groundedDir: null, bodies: [{ name: 'Earth', position: [0,0,0], velocity: [0,0,1] }] };
}
describe('flight persistence', () => {
  beforeEach(() => localStorage.clear());
  it('round trips fuel in nested tanks independently of tank sorting', () => {
    expect(saves).toHaveProperty('captureFuel');
    const r = new Rocket(assembly());
    r.fuelTanks.forEach(t => t.remaining = t.node === r.assembly.roots[0] ? 13 : 7);
    const fuelByPath = saves.captureFuel(r);
    const resumed = new Rocket(saves.deserializeAssembly(saves.serializeAssembly(r.assembly))!);
    saves.restoreFuel(resumed, { fuel: [], fuelByPath });
    expect(saves.captureFuel(resumed)).toEqual({ '0': 13, '0.0': 7 });
  });
  it('supports old root fuel arrays and clamps quantities', () => {
    expect(saves).toHaveProperty('restoreFuel');
    const r = new Rocket(assembly());
    saves.restoreFuel(r, { fuel: [-5] });
    expect(r.fuelTanks.find(t => t.node === r.assembly.roots[0])!.remaining).toBe(0);
  });
  it('accepts zero radii for point masses such as the sun', () => {
    saves.saveFlightState({ ...valid(), bodyRadii: { sun: 0, earth: 6371000 } });
    expect(saves.loadFlightState()?.bodyRadii?.sun).toBe(0);
  });
  it('accepts legacy complete flight saves', () => {
    saves.saveFlightState(valid());
    expect(saves.loadFlightState()).toEqual(valid());
  });
  it.each([
    { quat: [0, 0, 0, 0] }, { velocity: [0, null, 0] }, { position: [0, 1] },
    { throttle: 2 }, { missionTime: -1 }, { bodies: null }, { grounded: 'yes' },
    { stageSeparations: 1e100 }, { stageSeparations: 1.5 },
    { assembly: [null] }, { fuelByPath: { '0': 'bad' } }, { bodyRadii: { Earth: -1 } },
  ])('rejects corrupt state %j', patch => {
    localStorage.setItem('ellipse_flight_save', JSON.stringify({ ...valid(), ...patch }));
    expect(saves.loadFlightState()).toBeNull();
  });
  it('does not throw on malformed saved assemblies', () => {
    localStorage.setItem('ellipse_assembly_bad', '{');
    expect(() => saves.loadAssembly('bad')).not.toThrow();
    expect(saves.loadAssembly('bad')).toBeNull();
  });
  it('serialization snapshots positions before a launch mutates the assembly', () => {
    const a = assembly();
    const snapshot = saves.serializeAssembly(a);
    a.roots[0]!.position[1] = 99;
    a.roots = [];
    expect(saves.deserializeAssembly(snapshot)!.roots[0]!.position[1]).toBe(0);
  });
});
