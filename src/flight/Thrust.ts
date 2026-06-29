import type { FlightState } from './FlightState';
import { G0 } from '../config/constants';

/**
 * Apply thrust to a flight state for the given dt.
 * Finds active engine in rocket assembly, applies force along +Y in local frame.
 * Consumes fuel at mass_flow = thrust / (Isp * g0) * throttle.
 */
export function applyThrust(state: FlightState, dt: number, direction?: [number, number, number]): void {
  if (state.throttle <= 0) return;

  // Find first engine in assembly
  const engine = findFirstEngine(state.rocket.assembly.roots);
  if (!engine || !engine.thrust || !engine.isp) return;

  // Thrust force in Newtons (engine.thrust is in kN)
  const forceN = engine.thrust * 1000 * state.throttle;
  // Mass flow in kg/s
  const massFlow = forceN / (engine.isp * G0);

  // Apply force in direction (default +Y = up)
  const dir = direction ?? [0, 1, 0];
  const ax = forceN * dir[0] / state.rocket.totalMass();
  const ay = forceN * dir[1] / state.rocket.totalMass();
  const az = forceN * dir[2] / state.rocket.totalMass();
  state.velocity[0] += ax * dt;
  state.velocity[1] += ay * dt;
  state.velocity[2] += az * dt;

  // Consume fuel
  state.consumeFuel(massFlow, dt);
}

function findFirstEngine(nodes: any[]): { thrust: number; isp: number } | null {
  for (const n of nodes) {
    if (n.part.kind === 'engine' && n.part.thrust && n.part.isp) {
      return { thrust: n.part.thrust, isp: n.part.isp };
    }
    if (n.children?.length) {
      const found = findFirstEngine(n.children);
      if (found) return found;
    }
  }
  return null;
}
