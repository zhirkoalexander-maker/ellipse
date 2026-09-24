import type { Vec3 } from '../physics/Body';
import { G } from '../config/constants';

export interface NavigationBody { name: string; mass: number; position: Vec3; velocity: Vec3; radius: number; getSurfaceRadiusAt?(position: Vec3): number }
export interface MissionInput { position: Vec3; velocity: Vec3; reference: NavigationBody; mass: number; maxAcceleration: number; dt: number; grounded: boolean; fuel: number }
export interface MissionCommand { direction: Vec3; throttle: number; phase: 'ascent'|'departure'|'cruise'|'arrival'|'landing'|'blocked'; status: string; readyToLand: boolean; targetSpeed: number }
const add = (a:Vec3,b:Vec3):Vec3 => [a[0]+b[0],a[1]+b[1],a[2]+b[2]];
const sub = (a:Vec3,b:Vec3):Vec3 => [a[0]-b[0],a[1]-b[1],a[2]-b[2]];
const mul = (a:Vec3,n:number):Vec3 => [a[0]*n,a[1]*n,a[2]*n];
const dot = (a:Vec3,b:Vec3):number => a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
const norm = (a:Vec3):number => Math.hypot(...a);
const unit = (a:Vec3):Vec3 => norm(a)>1e-9 ? mul(a,1/norm(a)) : [1,0,0];

/** Closed-loop powered navigation. Commands never alter position, velocity or fuel.
 * Inputs are inertial states; bodies must remain live as the solar system advances.
 */
export class MissionGuidance {
  private departed = false;
  constructor(readonly departure: NavigationBody, readonly target: NavigationBody) {
    this.departed = departure.name === target.name;
  }

  update(s: MissionInput): MissionCommand {
    const blocked = (status:string):MissionCommand => ({direction:[0,1,0],throttle:0,phase:'blocked',status,readyToLand:false,targetSpeed:0});
    if (['jupiter','saturn','uranus','neptune','sun'].includes(this.target.name)) return blocked('Destination has no solid landing surface');
    if (![...s.position,...s.velocity,s.maxAcceleration,s.mass,s.dt,s.fuel].every(Number.isFinite)) return blocked('Navigation state unavailable');
    if(s.fuel<=0 || s.maxAcceleration<=0 || s.mass<=0) return blocked('Mission requires fuel and an active engine');
    const relative = sub(s.position,this.departure.position), radius=norm(relative), up=unit(relative);
    const toTarget=sub(this.target.position,s.position), distance=norm(toTarget);
    const targetRadius=this.target.getSurfaceRadiusAt?.(s.position) ?? this.target.radius;
    const altitude=distance-targetRadius;
    const relativeTargetVelocity=sub(s.velocity,this.target.velocity);
    if(altitude<15000 && norm(relativeTargetVelocity)<60 && !s.grounded) {
      return {direction:unit(sub(s.position,this.target.position)),throttle:0,phase:'landing',status:'Arrival complete — controlled descent',readyToLand:true,targetSpeed:0};
    }
    const clearance=Math.max(100000,this.departure.radius*0.15);
    const shell=this.departure.radius+clearance;
    // A direct route is safe only if its complete segment clears the launch planet.
    const lineLength=norm(toTarget), line=unit(toTarget);
    const closest=add(relative,mul(line,Math.max(0,Math.min(lineLength,-dot(relative,line)))));
    const lineClear=norm(closest)>this.departure.radius*1.025;
    if(radius>shell*0.98 && lineClear) this.departed=true;
    let desired:Vec3, phase:MissionCommand['phase'], targetSpeed:number;
    const accel=Math.max(0.1,s.maxAcceleration);
    if(!this.departed) {
      const altitudeError=shell-radius;
      const radialSpeed=Math.sign(altitudeError)*Math.min(2500,Math.sqrt(2*accel*0.3*Math.abs(altitudeError)));
      let tangent=sub(line,mul(up,dot(line,up)));
      if(norm(tangent)<1e-5) tangent=Math.abs(up[1])<0.9 ? [-up[2],0,up[0]] : [0,-up[2],up[1]];
      const lateralSpeed=radius<shell*0.97 ? 0 : Math.min(3500,Math.sqrt(accel*0.2*shell));
      desired=add(this.departure.velocity,add(mul(up,radialSpeed),mul(unit(tangent),lateralSpeed)));
      phase=lateralSpeed>0?'departure':'ascent';targetSpeed=norm(sub(desired,this.departure.velocity));
    } else {
      const remaining=Math.max(0,altitude-10000);
      targetSpeed=Math.min(10000,Math.sqrt(2*accel*0.2*remaining),remaining*0.1);
      desired=add(this.target.velocity,mul(line,targetSpeed));
      phase=remaining<Math.max(500000,norm(relativeTargetVelocity)**2/(accel*0.4))?'arrival':'cruise';
    }
    // Cancel reference-body gravity, then track the safe closing-speed envelope.
    const refRelative=sub(s.position,s.reference.position), refRadius=Math.max(1,norm(refRelative));
    const gravityCompensation=mul(unit(refRelative),G*s.reference.mass/(refRadius*refRadius));
    const velocity=s.grounded ? this.departure.velocity : s.velocity;
    const demand=add(mul(sub(desired,velocity),1/Math.max(2,Math.min(10,s.dt*2))),gravityCompensation);
    const magnitude=norm(demand);
    return {direction:unit(demand),throttle:Math.min(1,magnitude/accel),phase,status:phase==='ascent'?'Climbing to departure altitude':phase==='departure'?'Clearing departure planet':phase==='arrival'?'Braking for destination':'Powered transfer to '+this.target.name.toUpperCase(),readyToLand:false,targetSpeed};
  }
}
