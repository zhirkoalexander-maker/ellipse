import { G } from '../config/constants';

export interface OrbitPrediction {
  points: [number, number][];
  eccentricity: number;
  apoapsis: number;
  periapsis: number;
  bound: boolean;
}

export function predictOrbit(
  pos: [number, number, number],
  vel: [number, number, number],
  bodyMass: number,
  soiRadius: number,
  steps: number
): OrbitPrediction {
  const mu = G * bodyMass;
  const r = Math.sqrt(pos[0] * pos[0] + pos[1] * pos[1] + pos[2] * pos[2]);
  const v2 = vel[0] * vel[0] + vel[1] * vel[1] + vel[2] * vel[2];

  const specificEnergy = v2 / 2 - mu / r;
  const a = -mu / (2 * specificEnergy);

  const hx = pos[1] * vel[2] - pos[2] * vel[1];
  const hy = pos[2] * vel[0] - pos[0] * vel[2];
  const hz = pos[0] * vel[1] - pos[1] * vel[0];
  const h = Math.sqrt(hx * hx + hy * hy + hz * hz);

  const evx = (vel[1] * hz - vel[2] * hy) / mu - pos[0] / r;
  const evy = (vel[2] * hx - vel[0] * hz) / mu - pos[1] / r;
  const evz = (vel[0] * hy - vel[1] * hx) / mu - pos[2] / r;
  const e = Math.sqrt(evx * evx + evy * evy + evz * evz);

  const bound = e < 1 && a > 0;
  const apoapsis = bound ? a * (1 + e) : Infinity;
  const periapsis = bound ? a * (1 - e) : r;

  const ex = e > 1e-8 ? evx / e : 1;
  const ey = e > 1e-8 ? evy / e : 0;
  const ez = e > 1e-8 ? evz / e : 0;

  const p: [number, number, number] = [ex, ey, ez];
  const q: [number, number, number] = [
    (hy * ez - hz * ey) / (h || 1),
    (hz * ex - hx * ez) / (h || 1),
    (hx * ey - hy * ex) / (h || 1),
  ];

  const pts: [number, number][] = [];
  const thetaMax = bound ? Math.PI : Math.acos(-1 / Math.max(e, 1.001)) * 0.98;

  for (let i = 0; i <= steps; i++) {
    const theta = -thetaMax + (2 * thetaMax * i) / steps;
    const denom = 1 + e * Math.cos(theta);
    if (Math.abs(denom) < 1e-10) continue;
    const rr = (a * (1 - e * e)) / denom;
    if (isNaN(rr) || !isFinite(rr) || rr < 0) continue;
    const x = rr * (Math.cos(theta) * p[0] + Math.sin(theta) * q[0]);
    const z = rr * (Math.cos(theta) * p[2] + Math.sin(theta) * q[2]);
    const dist = Math.sqrt(x * x + z * z);
    if (dist > soiRadius * 1.5) break;
    pts.push([x, z]);
  }

  return { points: pts, eccentricity: e, apoapsis, periapsis, bound };
}
