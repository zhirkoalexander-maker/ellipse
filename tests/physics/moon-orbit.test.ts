import { expect, it } from 'vitest';
import { buildSystem } from '../flight/fixtures';
it('keeps the Moon in a stable Earth-relative orbit during a mission', () => {
  const system = buildSystem();
  const earth = system.bodyByName('earth')!, moon = system.bodyByName('moon')!;
  const distance = () => Math.hypot(...moon.position.map((x, i) => x - earth.position[i]!));
  const initial = distance();
  // A radial 900 m/s legacy velocity can look plausible for the first
  // 20 minutes. Check a meaningful fraction of the ~14-hour lunar period.
  system.propagate(12000, 1);
  expect(distance()).toBeGreaterThan(initial * 0.85);
  expect(distance()).toBeLessThan(initial * 1.15);
});
