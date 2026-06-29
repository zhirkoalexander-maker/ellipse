import type { Body } from './Body';
import type { System } from './System';
import { G } from '../config/constants';

export function getReferenceBody(
  position: [number, number, number],
  system: System
): Body {
  const sun = system.bodyByName('sun')!;
  let bestBody: Body = sun;
  let bestGrav = 0;

  for (const body of system.bodies) {
    if (body.name === 'sun') continue;
    const dx = body.position[0] - position[0];
    const dy = body.position[1] - position[1];
    const dz = body.position[2] - position[2];
    const r2 = dx * dx + dy * dy + dz * dz;
    const r = Math.sqrt(r2);

    const dxS = body.position[0] - sun.position[0];
    const dyS = body.position[1] - sun.position[1];
    const dzS = body.position[2] - sun.position[2];
    const distToSun = Math.sqrt(dxS * dxS + dyS * dyS + dzS * dzS);
    const soi = distToSun * Math.pow(body.mass / sun.mass, 0.4);

    if (r < soi) {
      const grav = (G * body.mass) / r2;
      if (grav > bestGrav) {
        bestGrav = grav;
        bestBody = body;
      }
    }
  }

  return bestBody;
}
