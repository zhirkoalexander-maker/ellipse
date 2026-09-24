import { describe, expect, it } from 'vitest';
import { predictOrbit } from '../../src/physics/OrbitPredictor';
import { G } from '../../src/config/constants';

describe('three dimensional orbit prediction', () => {
  it('preserves the radius and inclined plane of a circular orbit', () => {
    const radius = 10;
    const speed = Math.sqrt(1 / radius);
    const orbit = predictOrbit([radius, 0, 0], [0, speed / Math.sqrt(2), speed / Math.sqrt(2)], 1 / G, 100, 128);
    expect(orbit).toHaveProperty('points3d');
    expect(orbit.points3d).toHaveLength(129);
    orbit.points3d.forEach(([x, y, z], index) => {
      expect(Math.hypot(x, y, z)).toBeCloseTo(radius, 10);
      expect(y - z).toBeCloseTo(0, 10);
      expect(orbit.points[index]).toEqual([x, z]);
    });
    expect(Math.max(...orbit.points3d.map(point => Math.abs(point[1])))).toBeGreaterThan(7);
  });
  it('clips by true spatial distance rather than the map projection', () => {
    // This orbit is largely above the map plane but wholly outside the display limit.
    const orbit = predictOrbit([0, 10, 0], [Math.sqrt(0.1), 0, 0], 1 / G, 5, 128);
    expect(orbit.points).toHaveLength(0);
    expect(orbit.points3d).toEqual([]);
  });
});
