import { Body, type Vec3 } from './Body';

type ForceFn = (b: Body) => Vec3;

/**
 * Advance body by dt using RK4 integration.
 * Treats position/velocity as a coupled ODE: d/dt [p, v] = [v, F(p)/m].
 */
export function rk4Step(body: Body, forceFn: ForceFn, dt: number): void {
  const m = body.mass;
  const p0 = [...body.position] as Vec3;
  const v0 = [...body.velocity] as Vec3;

  // Each stage advances position with velocity, and velocity with acceleration.
  const k1p = v0;
  const k1v = scale3(forceFn(body), 1 / m);
  const body2 = tempBody(body, add3(p0, scale3(k1p, dt / 2)), add3(v0, scale3(k1v, dt / 2)));
  const k2p = body2.velocity;
  const k2v = scale3(forceFn(body2), 1 / m);
  const body3 = tempBody(body, add3(p0, scale3(k2p, dt / 2)), add3(v0, scale3(k2v, dt / 2)));
  const k3p = body3.velocity;
  const k3v = scale3(forceFn(body3), 1 / m);
  const body4 = tempBody(body, add3(p0, scale3(k3p, dt)), add3(v0, scale3(k3v, dt)));
  const k4p = body4.velocity;
  const k4v = scale3(forceFn(body4), 1 / m);
  const dv = scale3(add3(add3(k1v, scale3(k2v, 2)), add3(scale3(k3v, 2), k4v)), dt / 6);
  const dp = scale3(add3(add3(k1p, scale3(k2p, 2)), add3(scale3(k3p, 2), k4p)), dt / 6);

  body.position = add3(p0, dp);
  body.velocity = add3(v0, dv);
}

function tempBody(parent: Body, position: Vec3, velocity: Vec3): Body {
  return { ...parent, position, velocity } as Body;
}

function add3(a: Vec3, b: Vec3): Vec3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function scale3(a: Vec3, s: number): Vec3 {
  return [a[0] * s, a[1] * s, a[2] * s];
}
