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

  // k1
  const a1 = scale3(forceFn(body), 1 / m);
  const k1v = v0;
  const k1p = a1;

  // k2 — body at p0 + 0.5*dt*k1p with velocity v0 + 0.5*dt*k1v
  const body2 = tempBody(body, add3(p0, scale3(k1p, 0.5 * dt)), add3(v0, scale3(k1v, 0.5 * dt)));
  const a2 = scale3(forceFn(body2), 1 / m);
  const k2v = add3(v0, scale3(a1, 0.5 * dt));
  const k2p = a2;

  // k3
  const body3 = tempBody(body, add3(p0, scale3(k2p, 0.5 * dt)), add3(v0, scale3(k2v, 0.5 * dt)));
  const a3 = scale3(forceFn(body3), 1 / m);
  const k3v = add3(v0, scale3(a2, 0.5 * dt));
  const k3p = a3;

  // k4
  const body4 = tempBody(body, add3(p0, scale3(k3p, dt)), add3(v0, scale3(k3v, dt)));
  const a4 = scale3(forceFn(body4), 1 / m);
  const k4v = add3(v0, scale3(a3, dt));
  const k4p = a4;

  // v_new = v0 + (dt/6)(a1 + 2a2 + 2a3 + a4)
  const dv = scale3(add3(add3(a1, scale3(a2, 2)), add3(scale3(a3, 2), a4)), dt / 6);
  // p_new = p0 + (dt/6)(k1v + 2k2v + 2k3v + k4v)  -- k*v hold velocities (position derivatives)
  const dp = scale3(add3(add3(k1v, scale3(k2v, 2)), add3(scale3(k3v, 2), k4v)), dt / 6);

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
