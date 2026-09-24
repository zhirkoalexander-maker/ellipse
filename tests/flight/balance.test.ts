import { expect, it } from 'vitest';
import { Assembly } from '../../src/rocket/Assembly';
import { Rocket } from '../../src/rocket/Rocket';
import { findPart } from '../../src/parts/PartCatalog';
import { G, EARTH_MASS, EARTH_RADIUS } from '../../src/config/constants';
const g = G * EARTH_MASS / EARTH_RADIUS ** 2;
it.each([
 ['engine_ant', 'tank_s_lfo', 2],
 ['engine_vector', 'tank_m_lfo', 1],
 ['engine_reliant', 'tank_m_lfo', 1],
 ['engine_mastodon', 'tank_l_lfo', 1],
 ['engine_twinboar', 'tank_l_lfo', 2],
 ['engine_mammoth', 'tank_xl_lfo', 1],
 ['engine_kickback', 'tank_xl_lfo', 1],
] as const)('%s launches a matching fueled stack with controllable TWR', (engine, tank, count) => {
 const assembly = new Assembly();
 for (const id of ['capsule_mk1', engine, ...Array<string>(count).fill(tank)]) {
  assembly.addRoot({ part: findPart(id)!, position: [0, 0, 0], rotation: 0, children: [] });
 }
 const twr = findPart(engine)!.thrust! * 1000 / (new Rocket(assembly).totalMass() * g);
 expect(twr).toBeGreaterThan(3);
 expect(twr).toBeLessThan(5.9);
});
it.each([['engine_sparkler', 'tank_s_lfo'], ['engine_poodle', 'tank_l_lfo']])('%s has controllable thrust for orbital landing', (engine, tank) => {
 const e = findPart(engine!)!, t = findPart(tank!)!;
 const twr = e.thrust! * 1000 / ((1200 + e.mass + t.mass + t.fuelCapacity!) * g);
 expect(twr).toBeGreaterThan(1.1);
 expect(twr).toBeLessThan(2);
});
it('gives the two-tank starter a substantially quicker liftoff without changing its mass', () => {
 const engine = findPart('engine_ant')!, tank = findPart('tank_s_lfo')!;
 const mass = findPart('capsule_mk1')!.mass + engine.mass + 2 * (tank.mass + tank.fuelCapacity!);
 expect(mass).toBe(11650);
 const twr = engine.thrust! * 1000 / (mass * g);
 expect(twr).toBeGreaterThan(5.5);
 expect(twr).toBeLessThan(5.9);
 // Net acceleration is substantially higher than the previous ascent setting.
 const previousAcceleration = 453600 / mass - g;
 const acceleration = engine.thrust! * 1000 / mass - g;
 expect(acceleration / previousAcceleration).toBeGreaterThan(2.5);
 expect(acceleration / previousAcceleration).toBeLessThan(2.8);
});
