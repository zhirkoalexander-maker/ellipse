import { Vector3 } from 'three';
type Vec = [number, number, number];
/** Screen axes come from the vehicle attitude, including roll. */
export function navballFrame(forward: Vec, screenUp: Vec) {
  const f = new Vector3(...forward).normalize();
  const u = new Vector3(...screenUp).addScaledVector(f,-new Vector3(...screenUp).dot(f));
  if (u.lengthSq() < 1e-10) u.set(Math.abs(f.y)<.9?0:1,Math.abs(f.y)<.9?1:0,0).addScaledVector(f,-(Math.abs(f.y)<.9?f.y:f.x));
  u.normalize();
  const r = f.clone().cross(u).normalize();
  return { project(dir: Vec) { const d = new Vector3(...dir).normalize(); return {x:d.dot(r),y:d.dot(u),z:d.dot(f)}; } };
}
export function pitchDirection(up: Vec, heading: Vec, degrees: number): Vec {
  const u = new Vector3(...up).normalize();
  const h = new Vector3(...heading).addScaledVector(u,-new Vector3(...heading).dot(u));
  if(h.lengthSq()<1e-10) h.set(Math.abs(u.x)<.9?1:0,Math.abs(u.x)<.9?0:1,0).addScaledVector(u,-(Math.abs(u.x)<.9?u.x:u.y));
  return h.normalize().multiplyScalar(Math.cos(degrees*Math.PI/180)).addScaledVector(u,Math.sin(degrees*Math.PI/180)).toArray() as Vec;
}
