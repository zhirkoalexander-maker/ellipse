import { Body, type Vec3 } from '../physics/Body';
import { rk4Step } from '../physics/Integrator';
import { G } from '../config/constants';

export interface CoastResult { position: Vec3; velocity: Vec3; impacted: boolean }

/** Central-body coast in a translating relative frame. Work is bounded at 512 RK4 steps.
 * At extreme warp the larger steps trade close-encounter precision for responsiveness.
 * The caller handles atmosphere, thrust, changing sphere of influence and moving terrain.
 */
export function propagateCoast(position: Vec3, velocity: Vec3, centralMass: number, dt: number, surfaceRadius: number): CoastResult {
  const clean = (v: Vec3): Vec3 => v.map(n => Number.isFinite(n) ? n : 0) as Vec3;
  const body = new Body('coast', 1, clean(position), clean(velocity));
  const radius = Number.isFinite(surfaceRadius) ? Math.max(0, surfaceRadius) : 0;
  const result = (impacted: boolean): CoastResult => ({ position: body.position, velocity: body.velocity, impacted });
  if (Math.hypot(...body.position) <= radius) return result(true);
  if (!Number.isFinite(dt) || dt <= 0) return result(false);
  const mu = Number.isFinite(centralMass) ? G * Math.max(0, centralMass) : 0;
  const distance = Math.hypot(...body.position);
  // Resolve at least 256 samples per initial orbit, up to the per-call work budget.
  const orbitStep = mu > 0 ? 2 * Math.PI * Math.sqrt(distance ** 3 / mu) / 256 : dt;
  const count = Math.min(512, Math.max(1, Math.ceil(dt / Math.max(0.01, orbitStep))));
  const step = dt / count;
  for (let i = 0; i < count; i++) {
    const before = [...body.position] as Vec3;
    const beforeVelocity = [...body.velocity] as Vec3;
    rk4Step(body, b => {
      const r = Math.max(Math.hypot(...b.position), radius * 0.01, 1e-6);
      const factor = -mu / r / r / r;
      return b.position.map(n => n * factor) as Vec3;
    }, step);
    if (![...body.position, ...body.velocity].every(Number.isFinite)) {
      body.position = before;
      body.velocity = beforeVelocity;
      return result(false);
    }
    // Closest point on the swept chord: detects tunneling even if both ends
    // are outside, and clips the final position to first surface contact.
    const delta = body.position.map((n, axis) => n - before[axis]!) as Vec3;
    const length = Math.hypot(...delta);
    if (length > 0) {
      const direction = delta.map(n => n / length) as Vec3;
      const along = before.reduce((sum, n, axis) => sum + n * direction[axis]!, 0);
      const closest = Math.max(0, Math.min(length, -along));
      const closestPoint = before.map((n, axis) => n + direction[axis]! * closest) as Vec3;
      const closestRadius = Math.hypot(...closestPoint);
      if (closestRadius <= radius) {
        const perpendicular = Math.hypot(...before.map((n, axis) => n - direction[axis]! * along));
        const contactDistance = Math.max(0, -along - Math.sqrt(Math.max(0, radius * radius - perpendicular * perpendicular)));
        const fraction = contactDistance / length;
        body.position = before.map((n, axis) => n + direction[axis]! * contactDistance) as Vec3;
        body.velocity = beforeVelocity.map((n, axis) => n + (body.velocity[axis]! - n) * fraction) as Vec3;
        return result(true);
      }
    }
  }
  return result(false);
}
