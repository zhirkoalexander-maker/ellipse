import type { FlightState } from './FlightState';
import { G0 } from '../config/constants';

export function applyThrust(state: FlightState, dt: number, direction?: [number, number, number]): void {
  if (state.throttle <= 0) return;
  const engines = findAllEngines(state.rocket.assembly.roots);
  if (engines.length === 0) return;
  let totalForceN = 0;
  let totalMassFlow = 0;
  for (const eng of engines) {
    const forceN = eng.thrust * 1000 * state.throttle;
    totalForceN += forceN;
    totalMassFlow += forceN / (eng.isp * G0);
  }
  const dir = direction ?? [0, 1, 0];
  const mass = state.rocket.totalMass();
  const ax = totalForceN * dir[0] / mass;
  const ay = totalForceN * dir[1] / mass;
  const az = totalForceN * dir[2] / mass;
  state.velocity[0] += ax * dt;
  state.velocity[1] += ay * dt;
  state.velocity[2] += az * dt;
  state.consumeFuel(totalMassFlow, dt);
}

export function findFirstEngine(nodes: any[]): { thrust: number; isp: number } | null {
  for (const n of nodes) {
    if (n.part.thrust && n.part.isp) {
      return { thrust: n.part.thrust, isp: n.part.isp };
    }
    if (n.children?.length) {
      const found = findFirstEngine(n.children);
      if (found) return found;
    }
  }
  return null;
}

/** Sum of all engine thrusts (kN) — used for TWR calculation. */
export function totalThrust(nodes: any[]): number {
  let total = 0;
  const walk = (ns: any[]) => {
    for (const n of ns) {
      if (n.part.thrust && n.part.isp) total += n.part.thrust;
      if (n.children?.length) walk(n.children);
    }
  };
  walk(nodes);
  return total;
}

/** Average Isp weighted by thrust — for delta-V calculations with mixed engines. */
export function weightedIsp(nodes: any[]): number {
  let totalThrustVal = 0;
  let weighted = 0;
  const walk = (ns: any[]) => {
    for (const n of ns) {
      if (n.part.thrust && n.part.isp) {
        totalThrustVal += n.part.thrust;
        weighted += n.part.isp * n.part.thrust;
      }
      if (n.children?.length) walk(n.children);
    }
  };
  walk(nodes);
  return totalThrustVal > 0 ? weighted / totalThrustVal : 0;
}

function findAllEngines(nodes: any[]): { thrust: number; isp: number }[] {
  const result: { thrust: number; isp: number }[] = [];
  const walk = (ns: any[]) => {
    for (const n of ns) {
      if (n.part.thrust && n.part.isp) {
        result.push({ thrust: n.part.thrust, isp: n.part.isp });
      }
      if (n.children?.length) walk(n.children);
    }
  };
  walk(nodes);
  return result;
}
