import type { Body } from './Body';
import type { System } from './System';
import { G } from '../config/constants';

interface BodyWithParent extends Body {
  parentBody?: Body;
}

export function getReferenceBody(
  position: [number, number, number],
  system: System
): Body {
  const sun = system.bodyByName('sun')!;
  let bestBody: Body = sun;
  let bestGrav = 0;

  for (const body of system.bodies) {
    if (body.name === 'sun') continue;

    const bwp = body as BodyWithParent;
    let primary: Body = sun;
    let primaryPos: [number, number, number] = sun.position;

    if (bwp.parentBody) {
      primary = bwp.parentBody;
      primaryPos = primary.position;
    } else if (body.name === 'moon') {
      const earth = system.bodyByName('earth');
      if (earth) {
        primary = earth;
        primaryPos = earth.position;
      }
    }

    const dx = body.position[0] - position[0];
    const dy = body.position[1] - position[1];
    const dz = body.position[2] - position[2];
    const r2 = dx * dx + dy * dy + dz * dz;
    const r = Math.sqrt(r2);

    const dxP = body.position[0] - primaryPos[0];
    const dyP = body.position[1] - primaryPos[1];
    const dzP = body.position[2] - primaryPos[2];
    const distToPrimary = Math.sqrt(dxP * dxP + dyP * dyP + dzP * dzP);
    const soi = distToPrimary * Math.pow(body.mass / primary.mass, 0.4);

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