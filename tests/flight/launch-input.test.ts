import { afterEach, describe, expect, it, vi } from 'vitest';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';
import { buildDefaultRocket, buildSystem } from './fixtures';

let flight: FlightScene | undefined;
function create() {
  flight = new FlightScene(new Renderer(), new SceneManager(), buildSystem(), buildDefaultRocket(), new Achievements(), new Missions());
  return flight as any;
}
function step(f: any, seconds: number) {
  for (let i = 0; i < seconds * 60; i++) f.updateInner(1 / 60);
}
afterEach(() => { flight?.dispose(); flight = undefined; vi.restoreAllMocks(); });

describe('launch through player input', () => {
  it('launches from a single visible button click without pre-setting throttle', () => {
    const f = create();
    const button = document.querySelector<HTMLButtonElement>('[data-action="stage"]');
    expect(button?.textContent).toContain('Launch');
    const stages = vi.spyOn(f, 'performStage');
    const fuel = f.rocket.totalFuelMass();
    button!.click();
    step(f, 10);
    expect(f.crashed).toBe(false);
    expect(f.grounded).toBe(false);
    expect(f.relSpeed()).toBeGreaterThan(20);
    expect(f.rocket.totalFuelMass()).toBeLessThan(fuel);
    expect(stages).not.toHaveBeenCalled();
    expect(button!.textContent).toContain('Stage');
  });

  it('Space ignites on the pad and stages only after liftoff', () => {
    const f = create(); const stages = vi.spyOn(f, 'performStage');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    step(f, 10);
    window.dispatchEvent(new KeyboardEvent('keyup', { key: ' ' }));
    expect(f.grounded).toBe(false);
    expect(stages).not.toHaveBeenCalled();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    step(f, 1 / 60);
    window.dispatchEvent(new KeyboardEvent('keyup', { key: ' ' }));
    expect(stages).toHaveBeenCalledOnce();
  });

  it('a paused launch click cannot ignite the engine', () => {
    const f = create(); f.paused = true;
    document.querySelector<HTMLButtonElement>('[data-action="stage"]')?.click();
    step(f, 5);
    expect(f.state.throttle).toBe(0);
    expect(f.grounded).toBe(true);
  });

  it.each(['button', 'Space'])('an explicit %s launch completes a partial-throttle countdown at full power', input => {
    const f = create();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    step(f, 0.2);
    window.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowUp' }));
    expect(f.countdownActive).toBe(true);
    f.timeWarp = 5; f.warpIndex = 2;
    const timer = f.countdownTimer;
    if (input === 'button') document.querySelector<HTMLButtonElement>('[data-action="stage"]')!.click();
    else window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    step(f, 1 / 60);
    window.dispatchEvent(new KeyboardEvent('keyup', { key: ' ' }));
    expect(f.state.throttle).toBe(1);
    expect(f.timeWarp).toBe(1);
    expect(f.countdownTimer).toBeGreaterThan(timer);
    step(f, 6);
    expect(f.grounded).toBe(false);
    expect(f.crashed).toBe(false);
  });

  it('explains insufficient thrust immediately without a repeating countdown', () => {
    const f = create();
    vi.spyOn(f.rocket, 'totalMass').mockReturnValue(1e8);
    f.hud.onAction('stage');
    expect(f.state.throttle).toBe(0);
    expect(document.querySelector('.flight-landing-status')?.textContent).toContain('thrust');
    step(f, 8);
    expect(f.countdownActive).toBe(false);
    expect(f.grounded).toBe(true);
  });

  it.each(['off', 'burn', 'coast'])('lets a player select 100x coast with autopilot %s and advances the clock at 100x', phase => {
    const f = create();
    const earth = f.system.bodyByName('earth');
    const up = [...f.groundedDir];
    const r = earth.getSurfaceRadiusAt(f.state.position);
    f.state.position = earth.position.map((v: number, i: number) => v + up[i] * (r + 200000));
    f.state.velocity = earth.velocity.map((v: number, i: number) => v + up[i] * 100);
    f.grounded = false; f.groundedDir = null; f.launched = true; f._spawnProtectionTimer = 0;
    f.state.throttle = 1;
    f.autopilotActive = phase !== 'off'; f.autopilotPhase = phase;
    const button = document.querySelector<HTMLButtonElement>('[data-action="warp100"]');
    expect(button).not.toBeNull();
    button!.click();
    expect(f.timeWarp).toBe(100);
    expect(f.state.throttle).toBe(0);
    expect(f.autopilotActive).toBe(false);
    const t = f.missionTime;
    step(f, 1 / 60);
    expect(f.missionTime - t).toBeCloseTo(100 / 60);
    expect(f.crashed).toBe(false);
    expect(document.querySelector('.warp-val')?.textContent).toContain('100');
  });

  it('explains the 100x altitude requirement and ignores warp controls during pause', () => {
    const f = create();
    const button = document.querySelector<HTMLButtonElement>('[data-action="warp100"]');
    expect(button).not.toBeNull();
    button!.click();
    expect(f.timeWarp).toBe(1);
    expect(document.querySelector('.flight-landing-status')?.textContent).toContain('70 km');
    f.paused = true;
    document.querySelector<HTMLButtonElement>('[data-action="warpUp"]')!.click();
    expect(f.timeWarp).toBe(1);
  });
});
