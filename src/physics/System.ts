import { Body, type Vec3 } from './Body';
import { totalGravityOn } from './Gravity';

export class System {
  bodies: Body[] = [];

  add(b: Body): void {
    this.bodies.push(b);
  }

  bodyByName(name: string): Body | undefined {
    return this.bodies.find((b) => b.name === name);
  }

  /** Advance all simulated time with a bounded amount of work per frame.
   * Velocity Verlet is symplectic; high warp uses larger planetary substeps.
   */
  propagate(totalWallDt: number, dt: number): void {
    if (!Number.isFinite(totalWallDt) || totalWallDt <= 0) return;
    if (!Number.isFinite(dt) || dt <= 0) return;
    const count = Math.min(256, Math.max(1, Math.ceil(totalWallDt / dt)));
    const step = totalWallDt / count;
    for (let i = 0; i < count; i++) this.step(step);
  }

  private step(dt: number): void {
    const acceleration = (): Vec3[] => this.bodies.map(body => {
      if (body.mass <= 0) return [0, 0, 0];
      return totalGravityOn(body, this.bodies).map(f => f / body.mass) as Vec3;
    });
    const before = acceleration();
    // Snapshot forces first, then advance every body before recomputing forces.
    this.bodies.forEach((body, i) => {
      if (body.mass <= 0) return;
      for (const axis of [0, 1, 2] as const) {
        body.position[axis] += body.velocity[axis] * dt + before[i]![axis] * dt * dt / 2;
      }
    });
    const after = acceleration();
    this.bodies.forEach((body, i) => {
      if (body.mass <= 0) return;
      for (const axis of [0, 1, 2] as const) {
        body.velocity[axis] += (before[i]![axis] + after[i]![axis]) * dt / 2;
      }
    });
  }
}
