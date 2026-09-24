import { expect, it, vi } from 'vitest';
import { Body } from '../../src/physics/Body';
import { rk4Step } from '../../src/physics/Integrator';
import { System } from '../../src/physics/System';
import { planTransfer } from '../../src/physics/ManeuverPlanner';
import { predictOrbit } from '../../src/physics/OrbitPredictor';
import { G } from '../../src/config/constants';

it('integrates coupled oscillator position and velocity with fourth order accuracy', () => {
  const body = new Body('oscillator', 1, [1, 0, 0], [0, 0, 0]);
  for (let i = 0; i < 10; i++) rk4Step(body, b => [-b.position[0], 0, 0], 0.1);
  expect(body.position[0]).toBeCloseTo(Math.cos(1), 5);
  expect(body.velocity[0]).toBeCloseTo(-Math.sin(1), 5);
});

it('bounds work at maximum warp while propagating all elapsed time', () => {
  const system = new System();
  const body = new Body('drift', 1, [0, 0, 0], [3, 0, 0]);
  system.add(body);
  const step = vi.spyOn(system as unknown as { step(dt: number): void }, 'step');
  system.propagate(1e6 / 60, 1 / 60);
  expect(step.mock.calls.length).toBeLessThanOrEqual(256);
  expect(body.position[0]).toBeCloseTo(50000, 6);
});

it('updates gravitational bodies together, conserving total momentum', () => {
  const system = new System();
  system.add(new Body('a', 1 / G, [-1, 0, 0], [0, -0.5, 0]));
  system.add(new Body('b', 1 / G, [1, 0, 0], [0, 0.5, 0]));
  system.propagate(1, 0.1);
  for (const axis of [0, 1, 2] as const) {
    expect(system.bodies[0]!.velocity[axis] + system.bodies[1]!.velocity[axis]).toBeCloseTo(0, 12);
  }
});

it('computes inward Hohmann departure from the outer circular velocity', () => {
  const system = new System();
  system.add(new Body('sun', 1 / G, [0, 0, 0], [0, 0, 0]));
  system.add(new Body('inner', 1, [1, 0, 0], [0, 0, 1]));
  const plan = planTransfer([2, 0, 0], [0, 0, Math.sqrt(0.5)], system, 'inner')!;
  expect(plan.direction).toBe('retrograde');
  expect(plan.deltaV).toBeCloseTo(Math.sqrt(0.5) - Math.sqrt(1 / 3), 12);
});

it('gives finite circular orbit timings and respects the orbital plane', () => {
  const orbit = predictOrbit([0, 2, 0], [0, 0, Math.sqrt(0.5)], 1 / G, 100, 64);
  expect(Number.isFinite(orbit.timeToAp)).toBe(true);
  expect(Number.isFinite(orbit.timeToPe)).toBe(true);
  expect(orbit.points.every(([x]) => Math.abs(x) < 1e-10)).toBe(true);
});

it('retains the visible central part of an escaping trajectory', () => {
  const orbit = predictOrbit([1, 0, 0], [0, 0, 2], 1 / G, 3, 100);
  expect(orbit.bound).toBe(false);
  expect(orbit.points.length).toBeGreaterThan(10);
});

it('keeps a binary circular orbit bounded across many periods', () => {
  const system = new System();
  system.add(new Body('a', 1 / G, [-1, 0, 0], [0, -0.5, 0]));
  system.add(new Body('b', 1 / G, [1, 0, 0], [0, 0.5, 0]));
  for (let i = 0; i < 100; i++) system.propagate(1, 0.02);
  const radius = Math.hypot(...system.bodies[0]!.position);
  expect(radius).toBeCloseTo(1, 3);
});

it('ignores invalid propagation requests without corrupting state', () => {
  const system = new System();
  const body = new Body('drift', 1, [0, 0, 0], [3, 0, 0]);
  system.add(body);
  system.propagate(Infinity, 0.01);
  system.propagate(1, 0);
  system.propagate(-1, 0.01);
  expect(body.position).toEqual([0, 0, 0]);
});
