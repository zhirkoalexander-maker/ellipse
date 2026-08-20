import { G } from '../config/constants';
import type { System } from './System';
import type { Body } from './Body';

export interface TransferPlan {
  targetName: string;
  /** delta-V for departure burn (m/s) */
  deltaV: number;
  /** direction: 'prograde' | 'retrograde' */
  direction: 'prograde' | 'retrograde';
  /** transfer time one-way (s) */
  transferTime: number;
  /** description for UI */
  summary: string;
}

/**
 * Compute a Hohmann transfer from the rocket's current solar orbit to a target planet.
 * Uses the Sun's mu and circular-orbit approximation for both origin and target.
 */
export function planTransfer(
  rocketPos: [number, number, number],
  rocketVel: [number, number, number],
  system: System,
  targetName: string,
): TransferPlan | null {
  const sun = system.bodyByName('sun');
  const target = system.bodyByName(targetName);
  if (!sun || !target) return null;

  const mu = G * sun.mass;
  // Rocket heliocentric state
  const rx = rocketPos[0] - sun.position[0];
  const ry = rocketPos[1] - sun.position[1];
  const rz = rocketPos[2] - sun.position[2];
  const r1 = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1;
  const v = Math.sqrt(rocketVel[0] ** 2 + rocketVel[1] ** 2 + rocketVel[2] ** 2);
  // Approximate current orbit as circular at r1
  const v1 = Math.sqrt(mu / r1);

  // Target orbital radius (heliocentric)
  const tx = target.position[0] - sun.position[0];
  const ty = target.position[1] - sun.position[1];
  const tz = target.position[2] - sun.position[2];
  const r2 = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;

  // Hohmann transfer delta-V at departure (perihelion burn for outward, aphelion for inward)
  const outward = r2 > r1;
  const rInner = Math.min(r1, r2);
  const rOuter = Math.max(r1, r2);
  // Semi-major axis of transfer ellipse
  const aT = (rInner + rOuter) / 2;
  // Velocity at perihelion of transfer orbit
  const vPeri = Math.sqrt(mu * (2 / rInner - 1 / aT));
  // Velocity at aphelion of transfer orbit
  const vApo = Math.sqrt(mu * (2 / rOuter - 1 / aT));
  // Circular velocities
  const vCircInner = Math.sqrt(mu / rInner);
  const vCircOuter = Math.sqrt(mu / rOuter);

  let deltaV: number;
  let direction: 'prograde' | 'retrograde';
  if (outward) {
    // Burn at r1 (inner) from circular to transfer perihelion
    deltaV = vPeri - vCircInner;
    direction = 'prograde';
  } else {
    // Burn at r1 (outer) from circular to transfer aphelion
    deltaV = vCircInner - vApo; // retrograde magnitude
    direction = 'retrograde';
  }
  deltaV = Math.abs(deltaV);

  // Transfer time = half period of transfer ellipse
  const transferTime = Math.PI * Math.sqrt((aT ** 3) / mu);

  // Compare to current velocity to gauge accuracy
  const dvFraction = v > 0 ? deltaV / v : 1;

  const summary = `${direction === 'prograde' ? 'Prograde' : 'Retrograde'} burn of ${deltaV.toFixed(0)} m/s to reach ${targetName.toUpperCase()}. Travel time: ${(transferTime / 86400).toFixed(0)} days.`;

  return { targetName, deltaV, direction, transferTime, summary };
}
