import type { FlightState } from './FlightState';
import { G0 } from '../config/constants';

/**
 * Apply thrust to a flight state for the given dt.
 * Finds active engine in rocket assembly, applies force along +Y in local frame.
 * Consumes fuel at mass_flow = thrust / (Isp * g0) * throttle.
 */
export function applyThrust(state: FlightState, dt: number): void {
  if (state.throttle <= 0) return;

  // Find first engine in assembly
  const engine = findFirstEngine(state.rocket.assembly.roots);
  if (!engine || !engine.thrust || !engine.isp) return;

  // Thrust force in Newtons (engine.thrust is in kN)
  const forceN = engine.thrust * 1000 * state.throttle;
  // Mass flow in kg/s
  const massFlow = forceN / (engine.isp * G0);

  // Acceleration (F = m*a)
  const a = forceN / state.rocket.totalMass();
  // Apply in +Y world frame (simplified — no rotation in MVP)
  state.velocity[1] += a * dt;

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
