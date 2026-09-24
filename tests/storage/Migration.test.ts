import { describe, expect, it } from 'vitest';
import { migrateLegacyLunarOrbit } from '../../src/storage/Migration';
import { System } from '../../src/physics/System';
import { Body } from '../../src/physics/Body';
import { G } from '../../src/config/constants';
import type { FlightSave } from '../../src/storage/SaveLoad';
function setup(distance=60e6) {
  const system = new System();
  system.add(new Body('sun', 2e26, [0,0,0], [0,0,0]));
  system.add(Object.assign(new Body('earth', 5e25, [1e9,0,0], [0,0,17000]), { radius: 16e6 }));
  system.add(Object.assign(new Body('moon', 2.2e23, [1e9,0,distance], [0,0,17900]), { radius: 2e6 }));
  const save = { version: 2, position: [1e9 + 10, 0, distance], velocity: [5,0,17900], grounded: false, bodies: system.bodies.map(b => ({name:b.name,position:[...b.position],velocity:[...b.velocity]})) } as FlightSave;
  return {system,save};
}
describe('legacy lunar orbit migration', () => {
  it('circularizes old radial Moon velocity and preserves rocket relative velocity without mutating the original', () => {
    const {system,save} = setup(); const before=JSON.stringify(save);
    const updated=migrateLegacyLunarOrbit(save,system), moon=updated.bodies.find(b=>b.name==='moon')!;
    expect(moon.velocity[2]).toBe(17000);
    expect(moon.velocity[0]).toBeCloseTo(Math.sqrt(G*(5e25+2.2e23)/60e6));
    expect(updated.velocity[0]-moon.velocity[0]).toBeCloseTo(5);
    expect(updated.position).toEqual(save.position);
    expect(JSON.stringify(save)).toBe(before);
  });
  it('moves an overlapping moon out while carrying its rocket offset along', () => {
    const {system,save}=setup(10e6);
    const updated=migrateLegacyLunarOrbit(save,system), moon=updated.bodies.find(b=>b.name==='moon')!;
    expect(moon.position).toEqual([1e9,0,60e6]);
    expect(updated.position).toEqual([1e9+10,0,60e6]);
  });
  it('does not move an Earth-relative rocket when repairing an overlapping Moon', () => {
    const {system,save}=setup(10e6); save.position=[1e9+16e6,0,0];
    const updated=migrateLegacyLunarOrbit(save,system);
    expect(updated.position).toEqual(save.position); expect(updated.velocity).toEqual(save.velocity);
  });
  it('leaves version 3 planetary and rocket state exactly unchanged', () => {
    const {system,save}=setup(10e6); save.version=3;
    expect(migrateLegacyLunarOrbit(save,system)).toBe(save);
  });
});
