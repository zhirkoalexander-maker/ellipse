import { Body, type Vec3 } from './Body';
import { G } from '../config/constants';

/** Gravitational force on target by source (Newton's law). */
export function gravitationalForce(source: Body, target: Body): Vec3 {
  const dx = source.position[0] - target.position[0];
  const dy = source.position[1] - target.position[1];
  const dz = source.position[2] - target.position[2];
  const r2 = dx * dx + dy * dy + dz * dz;
  const r = Math.sqrt(r2);
  if (r === 0) return [0, 0, 0]; // avoid singularity (same position)
  const fmag = (G * source.mass * target.mass) / r2;
  return [(fmag * dx) / r, (fmag * dy) / r, (fmag * dz) / r];
}

/** Sum gravitational force on target from all sources (skips massless). */
export function totalGravityOn(target: Body, sources: Body[]): Vec3 {
  let fx = 0, fy = 0, fz = 0;
  for (const s of sources) {
    if (s === target) continue;
    if (s.mass <= 0) continue;
    const f = gravitationalForce(s, target);
    fx += f[0]; fy += f[1]; fz += f[2];
  }
  return [fx, fy, fz];
}
