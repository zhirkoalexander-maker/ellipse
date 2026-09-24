import { Vector3 } from 'three';
import { Body, type Vec3 } from '../physics/Body';
import { System } from '../physics/System';
import { getReferenceBody } from '../physics/SoiResolver';
import { G } from '../config/constants';
import type { FlightSave } from './SaveLoad';

/** Repair the old radial lunar orbit before restoring a flight. Version 3 is exact.
 * Inputs remain untouched; lunar craft keep their local position and velocity.
 */
export function migrateLegacyLunarOrbit(save: FlightSave, system: System): FlightSave {
  if (save.version === 3) return save;
  const earth = save.bodies.find(b => b.name === 'earth');
  const moon = save.bodies.find(b => b.name === 'moon');
  const earthModel = system.bodyByName('earth') as (Body & { radius?: number }) | undefined;
  const moonModel = system.bodyByName('moon') as (Body & { radius?: number }) | undefined;
  if (!earth || !moon || !earthModel || !moonModel) return save;
  // Resolve the original reference frame using the saved epoch, not fresh positions.
  const original = new System();
  for (const model of system.bodies) {
    const state = save.bodies.find(b => b.name === model.name);
    original.add(new Body(model.name, model.mass, state?.position ?? model.position, state?.velocity ?? model.velocity));
  }
  const followsMoon = !!original.bodyByName('sun') && getReferenceBody(save.position, original).name === 'moon';
  const radial = new Vector3(...moon.position).sub(new Vector3(...earth.position));
  let separation = radial.length();
  if (separation < 1e-6) radial.set(0, 0, 1); else radial.divideScalar(separation);
  if (separation <= (earthModel.radius ?? 0) + (moonModel.radius ?? 0)) separation = 60e6;
  const position = new Vector3(...earth.position).addScaledVector(radial, separation).toArray() as Vec3;
  const tangent = new Vector3(0, 1, 0).cross(radial);
  if (tangent.lengthSq() < 1e-12) tangent.set(1, 0, 0).cross(radial);
  tangent.normalize();
  const velocity = new Vector3(...earth.velocity).addScaledVector(tangent, Math.sqrt(G * (earthModel.mass + moonModel.mass) / separation)).toArray() as Vec3;
  return {
    ...save,
    bodies: save.bodies.map(b => b === moon ? { ...b, position, velocity } : b),
    position: followsMoon ? save.position.map((x, i) => x + position[i]! - moon.position[i]!) as Vec3 : save.position,
    // Grounded saves deliberately store zero velocity; liftoff supplies the body's velocity.
    velocity: followsMoon && !save.grounded ? save.velocity.map((v, i) => v + velocity[i]! - moon.velocity[i]!) as Vec3 : save.velocity,
  };
}
