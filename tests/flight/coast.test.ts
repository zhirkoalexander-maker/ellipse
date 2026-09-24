import { expect, it } from 'vitest';
import { propagateCoast } from '../../src/flight/Coast';
import { G } from '../../src/config/constants';
it('preserves a circular orbit through a large simulated interval', () => {
 const mass = 5.97e24, radius = 7e6, dt = 10000;
 const speed = Math.sqrt(G * mass / radius), angle = speed * dt / radius;
 const result = propagateCoast([radius, 0, 0], [0, 0, speed], mass, dt, 6.37e6);
 expect(result.impacted).toBe(false);
 expect(Math.hypot(result.position[0] - radius * Math.cos(angle), result.position[2] - radius * Math.sin(angle))).toBeLessThan(100);
 expect(Math.hypot(...result.position)).toBeCloseTo(radius, -1);
});
it('detects a fast crossing even when both segment endpoints are outside', () => {
 const result = propagateCoast([100, 0, 0], [-1e6, 0, 0], 0, 1, 10);
 expect(result.impacted).toBe(true);
 expect(result.position[0]).toBeCloseTo(10);
});
it('finishes extreme time warp with finite state', () => {
 const result = propagateCoast([1e12, 0, 0], [0, 0, 1000], 1e24, 1e6, 1e6);
 expect([...result.position, ...result.velocity].every(Number.isFinite)).toBe(true);
 expect(result.position[2]).toBeGreaterThan(9e8);
});
it('guards invalid time and initial state and reports existing surface contact', () => {
 expect(propagateCoast([20, 0, 0], [1, 0, 0], 0, Infinity, 10).position).toEqual([20, 0, 0]);
 expect(propagateCoast([NaN, 0, 0], [Infinity, 0, 0], 0, 1, 10).position.every(Number.isFinite)).toBe(true);
 expect(propagateCoast([9, 0, 0], [0, 0, 0], 0, 1, 10).impacted).toBe(true);
});
it('clips an endpoint inside the surface to the exact first contact', () => {
 const result = propagateCoast([20, 0, 0], [-15, 0, 0], 0, 1, 10);
 expect(result.impacted).toBe(true);
 expect(result.position[0]).toBeCloseTo(10, 8);
});
