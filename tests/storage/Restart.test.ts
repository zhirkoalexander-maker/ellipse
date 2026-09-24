import { afterAll, describe, expect, it, vi } from 'vitest';
import { Assembly } from '../../src/rocket/Assembly';
import { Rocket } from '../../src/rocket/Rocket';
import { findPart } from '../../src/parts/PartCatalog';
const flights = vi.hoisted(() => [] as any[]);
vi.mock('../../src/scenes/FlightScene', () => ({ FlightScene: class {
  onCrashAction?: (action: string) => void;
  constructor(_r: any, _s: any, _sys: any, public rocket: any) { flights.push(this); }
} }));
import { Game } from '../../src/core/Game';
describe('restart', () => {
  it('restarts a staged vehicle from its original build', async () => {
    const game = Object.create(Game.prototype) as any;
    game.transitionTo = (swap: () => void) => swap();
    game.unmountCurrent = () => {};
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0,0,0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0,3,0], rotation: 0, children: [] });
    await game.showFlight(new Rocket(a));
    flights[0].rocket.assembly.roots.shift();
    flights[0].onCrashAction('restart');
    expect(flights[1].rocket.assembly.roots).toHaveLength(2);
    expect(a.roots).toHaveLength(2);
  });
});

afterAll(() => { vi.doUnmock('../../src/scenes/FlightScene'); vi.resetModules(); });
