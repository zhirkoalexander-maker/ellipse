import { expect, it } from 'vitest';
import { MissionGuidance, type NavigationBody } from '../../src/flight/MissionGuidance';
import type { Vec3 } from '../../src/physics/Body';
const body = (name: string, position: Vec3, radius: number): NavigationBody => ({ name, position, radius, mass: 0, velocity: [0,0,0] });
const input = (position: Vec3, velocity: Vec3, reference: NavigationBody) => ({position,velocity,reference,mass:10000,maxAcceleration:50,dt:0.1,grounded:false,fuel:1000});
it('climbs away from a departure planet when the destination lies behind it', () => {
 const earth=body('earth',[0,0,0],1e6), moon=body('moon',[-1e8,0,0],1e5);
 const cmd=new MissionGuidance(earth,moon).update({...input([1e6,0,0],[0,0,0],earth),grounded:true});
 expect(cmd.direction[0]).toBeGreaterThan(0.9); expect(cmd.throttle).toBeGreaterThan(0);
 expect(cmd.readyToLand).toBe(false);
});
it('brakes toward a moving target before handing off a safe descent', () => {
 const earth=body('earth',[-1e8,0,0],1e6), moon=body('moon',[0,0,0],1e5); moon.velocity=[0,50,0];
 const guide=new MissionGuidance(earth,moon);
 const braking=guide.update(input([112000,0,0],[-800,50,0],moon));
 expect(braking.direction[0]).toBeGreaterThan(0); expect(braking.readyToLand).toBe(false);
 const arrived=guide.update(input([110000,0,0],[-10,50,0],moon));
 expect(arrived.readyToLand).toBe(true);
});
it('uses only bounded force commands, and blocks fuel exhaustion and gas giant landing', () => {
 const earth=body('earth',[0,0,0],1e6), target=body('jupiter',[1e8,0,0],1e6);
 expect(new MissionGuidance(earth,target).update(input([2e6,0,0],[0,0,0],earth)).phase).toBe('blocked');
 target.name='moon';
 expect(new MissionGuidance(earth,target).update({...input([2e6,0,0],[0,0,0],earth),fuel:0}).throttle).toBe(0);
});
it('flies around the departure body and rendezvous with a moving target using acceleration only', () => {
 const earth=body('earth',[0,0,0],1e6), moon=body('moon',[-5e6,0,0],1e5); moon.velocity=[0,30,0];
 const guide=new MissionGuidance(earth,moon); let p:Vec3=[1000001,0,0], v:Vec3=[0,0,0], arrived=false;
 for(let i=0;i<160000;i++) {
  const command=guide.update(input(p,v,earth));
  expect(command.throttle).toBeGreaterThanOrEqual(0); expect(command.throttle).toBeLessThanOrEqual(1);
  if(command.readyToLand){arrived=true;break;}
  for(const axis of [0,1,2] as const){v[axis]+=command.direction[axis]*command.throttle*50*0.1;p[axis]+=v[axis]*0.1;moon.position[axis]+=moon.velocity[axis]*0.1;}
  if(Math.hypot(...p)<1e6) throw new Error('Flight crossed departure surface');
 }
 expect(arrived).toBe(true);
});
it('intercepts an orbiting Moon under actual gravity without crossing Earth', () => {
 const G=6.6743e-11, R=6.371e6*2.5;
 const earth=body('earth',[0,0,0],R);earth.mass=14*R*R/G;
 const moon=body('moon',[0,0,-60e6],1.737e6*1.25);moon.mass=2.2e23;
 const omega=Math.sqrt(G*(earth.mass+moon.mass)/(60e6)**3);
 const guide=new MissionGuidance(earth,moon);
 const pad=[0.144379,0.477159,-0.866989];const n=Math.hypot(...pad);
 let p=pad.map(x=>x/n*(R+10)) as Vec3,v:Vec3=[0,0,0],arrived=false,minAlt=Infinity, spentDeltaV=0;
 for(let i=0;i<100000;i++) {
  const t=i*0.5;moon.position=[60e6*Math.sin(omega*t),0,-60e6*Math.cos(omega*t)];moon.velocity=[60e6*omega*Math.cos(omega*t),0,60e6*omega*Math.sin(omega*t)];
  const moonDistance=Math.hypot(...p.map((x,a)=>x-moon.position[a]!));
  const ref=moonDistance<8e6?moon:earth;
  const command=guide.update({...input(p,v,ref),dt:0.5,maxAcceleration:65});
  if(command.readyToLand){arrived=true;break;}
  spentDeltaV += command.throttle * 65 * 0.5;
  const gravity:Vec3=[0,0,0];
  for(const source of [earth,moon]) {const delta=p.map((x,a)=>source.position[a]!-x) as Vec3;const r=Math.hypot(...delta);for(const a of [0,1,2] as const)gravity[a]+=G*source.mass*delta[a]/r**3;}
  for(const a of [0,1,2] as const){v[a]+=(command.direction[a]*command.throttle*65+gravity[a])*0.5;p[a]+=v[a]*0.5;}
  minAlt=Math.min(minAlt,Math.hypot(...p)-R);
  if(minAlt<0)break;
 }
 expect(minAlt).toBeGreaterThan(0);expect(arrived).toBe(true);
 expect(spentDeltaV).toBeLessThan(100000);
});
it('returns to the current planet without demanding a new departure', () => {
 const earth=body('earth',[0,0,0],1e6), guide=new MissionGuidance(earth,earth);
 expect(guide.update(input([1020000,0,0],[-500,0,0],earth)).phase).toBe('arrival');
 expect(guide.update(input([1010000,0,0],[-10,0,0],earth)).readyToLand).toBe(true);
});
