import { activeStageNodes } from '../rocket/Stages';
import type { FlightState } from './FlightState';
import { G0, FUEL_FLOW_MULT } from '../config/constants';

export function applyThrust(state: FlightState, dt: number, direction?: [number, number, number]): void {
  if (state.throttle <= 0) return;
  const engines = findAllEngines(state.rocket.assembly.roots);
  if (engines.length === 0) return;
  const available = state.rocket.activeFuelMass();
  if (available <= 0) return; // tanks dry — NO thrust
  let totalForceN = 0;
  let totalMassFlow = 0;
  for (const eng of engines) {
    const forceN = eng.thrust * 1000 * state.throttle;
    totalForceN += forceN;
    totalMassFlow += forceN / (eng.isp * G0);
  }
  // Game-balance burn rate (see FUEL_FLOW_MULT)
  totalMassFlow *= FUEL_FLOW_MULT;
  // Thrust proportional to fuel actually burnable this frame — engines cut off
  // exactly when tanks run dry instead of accelerating forever on fumes.
  const requested = totalMassFlow * dt;
  const actualBurn = Math.min(requested, available);
  const burnFrac = requested > 0 ? actualBurn / requested : 1;
  const dir = direction ?? [0, 1, 0];
  const mass = state.rocket.totalMass();
  const ax = totalForceN * dir[0] / mass * burnFrac;
  const ay = totalForceN * dir[1] / mass * burnFrac;
  const az = totalForceN * dir[2] / mass * burnFrac;
  state.velocity[0] += ax * dt;
  state.velocity[1] += ay * dt;
  state.velocity[2] += az * dt;
  state.consumeFuel(totalMassFlow, dt);
}

export function findFirstEngine(nodes: any[]): { thrust: number; isp: number } | null {
  return findAllEngines(nodes)[0] ?? null;
}

/** Available thrust from the current stage, including its side engines. */
export function totalThrust(nodes: any[]): number {
  return findAllEngines(nodes).reduce((sum, part) => sum + part.thrust, 0);
}

export function weightedIsp(nodes: any[]): number {
  const engines = findAllEngines(nodes);
  const thrust = engines.reduce((sum, part) => sum + part.thrust, 0);
  return thrust > 0 ? engines.reduce((sum, part) => sum + part.thrust * part.isp, 0) / thrust : 0;
}

function findAllEngines(nodes: any[]): { thrust: number; isp: number }[] {
  return activeStageNodes(nodes).filter(n => n.part.kind === 'engine' && n.part.thrust && n.part.isp)
    .map(n => ({thrust: n.part.thrust!, isp: n.part.isp!}));
}
