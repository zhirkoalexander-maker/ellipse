import { Vector3 } from 'three';
import type { Vec3 } from '../physics/Body';
import { predictOrbit } from '../physics/OrbitPredictor';
import { G } from '../config/constants';

export function maneuverVector(position: Vec3, velocity: Vec3, dv: Vec3): Vec3 {
  const radial = new Vector3(...position).normalize();
  const normal = new Vector3().crossVectors(radial, new Vector3(...velocity));
  if (normal.lengthSq() < 1e-10) normal.crossVectors(radial, Math.abs(radial.y) < .9 ? new Vector3(0,1,0) : new Vector3(1,0,0));
  normal.normalize();
  const prograde = new Vector3(...velocity);
  if (prograde.lengthSq() < 1e-10) prograde.crossVectors(normal, radial);
  prograde.normalize();
  return prograde.multiplyScalar(dv[0]).addScaledVector(radial, dv[1]).addScaledVector(normal, dv[2]).toArray();
}

export function mapBasis(position: Vec3, velocity: Vec3, plane: 'orbit' | 'xz' | 'xy'): [Vector3, Vector3] {
  if (plane === 'xz') return [new Vector3(1,0,0), new Vector3(0,0,1)];
  if (plane === 'xy') return [new Vector3(1,0,0), new Vector3(0,1,0)];
  const x = new Vector3(...position).normalize();
  const normal = new Vector3(...maneuverVector(position,velocity,[0,0,1]));
  const y = new Vector3().crossVectors(normal,x).normalize();
  return [x,y];
}

/** All inputs and outputs remain in physical metres, independent of flight rendering. */
export function projectMap(point: Vec3, origin: Vec3, basis: [Vector3,Vector3], metresPerPixel: number, center: [number,number]): [number,number] {
  const v=new Vector3(...point).sub(new Vector3(...origin));
  return [center[0]+v.dot(basis[0])/metresPerPixel, center[1]-v.dot(basis[1])/metresPerPixel];
}

export function mapTrajectory(position: Vec3, velocity: Vec3, mass: number, radius: number): Vec3[] {
  const r = new Vector3(...position), v = new Vector3(...velocity);
  if (new Vector3().crossVectors(r,v).lengthSq() > 1e-4) {
    const points=predictOrbit(position,velocity,mass,Math.max(r.length()*100, radius*100),360).points3d;
    if(points.length>2)return points;
  }
  // Radial ascent/descent has no orbital plane or valid conic sampling.
  const points:Vec3[]=[r.toArray()];
  const step=Math.min(30,Math.max(.2,Math.sqrt(r.length()**3/(G*mass))/100));
  for(let i=0;i<240;i++) {
    const a=r.clone().multiplyScalar(-G*mass/Math.max(1,r.length())**3);
    r.addScaledVector(v,step).addScaledVector(a,step*step*.5);
    v.addScaledVector(a,step);
    points.push(r.toArray());
    if(r.length()<=radius)break;
  }
  return points;
}

export function simpleCorrection(position: Vec3, velocity: Vec3, destination: Vec3, kind: 'toward' | 'faster' | 'slower', strength: number): Vec3 {
 const direction=kind==='toward'?new Vector3(...destination).sub(new Vector3(...position)):new Vector3(...velocity);
 if(kind==='slower'){strength=Math.min(strength,direction.length());direction.negate();}
 return direction.lengthSq()>1e-12?direction.normalize().multiplyScalar(Math.max(0,strength)).toArray():[0,0,0];
}

/** Face the destination in the map plane, even when the transfer is inclined. */
export function destinationBasis(position: Vec3, destination: Vec3): [Vector3,Vector3] {
 const x=new Vector3(...destination).sub(new Vector3(...position));
 if(x.lengthSq()<1)x.set(1,0,0);x.normalize();
 const y=Math.abs(x.y)<.9?new Vector3(0,1,0):new Vector3(0,0,1);
 y.addScaledVector(x,-y.dot(x)).normalize();
 return [x,y];
}
