import { Body, type Vec3 } from './Body';
import { rk4Step } from './Integrator';
import { totalGravityOn } from './Gravity';

export class System {
  bodies: Body[] = [];

  add(b: Body): void {
    this.bodies.push(b);
  }

  bodyByName(name: string): Body | undefined {
    return this.bodies.find((b) => b.name === name);
  }

  /**
   * Propagate the system by totalWallDt (seconds), broken into
   * fixed physics sub-steps of FIXED_DT.
   */
  propagate(totalWallDt: number, dt: number): void {
    let remaining = totalWallDt;
    while (remaining > 0) {
      const step = Math.min(dt, remaining);
      this.step(step);
      remaining -= step;
    }
  }

  private step(dt: number): void {
    for (const body of this.bodies) {
      if (body.mass <= 0) continue; // skip massless (Sun)
      const force: Vec3 = totalGravityOn(body, this.bodies);
      rk4Step(body, () => force, dt);
    }
  }
}
