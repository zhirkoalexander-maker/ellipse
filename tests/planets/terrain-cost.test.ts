import { expect, it, vi } from 'vitest';
import { rockyTerrain } from '../../src/planets/Terrain';
import { earthLaunchFrame } from '../../src/planets/EarthGeography';
// Fixed directions and heights captured from 2.5.22 before changing the evaluator.
import samples from './earth-heights.json';

it('preserves terrain heights at the pad, shore, peaks, transition and around the globe', () => {
  for (const [x, y, z, height] of samples) {
    expect(rockyTerrain('earth', x!, y!, z!)).toBeCloseTo(height!, 15);
  }
});

it('does not evaluate procedural noise on the flat launch pad', () => {
  const sine = vi.spyOn(Math, 'sin');
  try {
    const [x, y, z] = earthLaunchFrame.up;
    expect(rockyTerrain('earth', x!, y!, z!)).toBe(12 / (6.371e6 * 2.5));
    expect(sine).not.toHaveBeenCalled();
  } finally { sine.mockRestore(); }
});

it('stops after locating open water instead of calculating underwater hills', () => {
  const p = earthLaunchFrame.up.map((v, i) => v + earthLaunchFrame.east[i]! * .00065);
  const length = Math.hypot(...p);
  const sine = vi.spyOn(Math, 'sin');
  try {
    expect(rockyTerrain('earth', p[0]! / length, p[1]! / length, p[2]! / length)).toBe(0);
    expect(sine.mock.calls.length).toBeLessThanOrEqual(2);
  } finally { sine.mockRestore(); }
});
