import { expect, it } from 'vitest';
import * as THREE from 'three';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';
import { Assembly } from '../../src/rocket/Assembly';
import { addSidePair } from '../../src/rocket/SideAttachments';
import { Rocket } from '../../src/rocket/Rocket';
import { findPart } from '../../src/parts/PartCatalog';
import { buildSystem } from './fixtures';

function create(radialTank = -1) {
 const a=new Assembly();
 for(const id of ['engine_ant','tank_s_lfo','decoupler_s','tank_s_lfo','capsule_mk1'])a.addRoot({part:findPart(id)!,position:[0,0,0],rotation:0,children:[]});
 a.restack();
 if (radialTank >= 0) {
   const host = a.roots.filter(n => n.part.kind === 'tank')[radialTank]!;
   addSidePair(a,host,findPart('decoupler_s')!);addSidePair(a,host,findPart('engine_ant')!);
 }
 const f:any=new FlightScene(new Renderer(),new SceneManager(),buildSystem(),new Rocket(a),new Achievements(),new Missions());
 const earth=f.system.bodyByName('earth');f.state.position=[earth.position[0],earth.position[1]+earth.radius+100000,earth.position[2]];
 f.state.velocity=[...earth.velocity];f.grounded=false;f.groundedDir=null;f._spawnProtectionTimer=0;f.state.throttle=0;
 f.rocketQuat.setFromAxisAngle(new THREE.Vector3(0,0,1),.2);f.syncVisualTransform();
 return f;
}
it('separates one intact stage without rotating or teleporting either half',()=>{
 const f=create();try{
 const nodes=[...f.rocket.assembly.roots];const poses=nodes.map((n:any)=>{const m=f.rocketGroup.getObjectByName(n.uid);return {m,p:m.getWorldPosition(new THREE.Vector3()),q:m.getWorldQuaternion(new THREE.Quaternion())};});
 f.performStage();expect(f.debris).toHaveLength(1);
 for(const pose of poses){expect(pose.m.getWorldPosition(new THREE.Vector3()).distanceTo(pose.p)).toBeLessThan(.00001);expect(pose.m.getWorldQuaternion(new THREE.Quaternion()).angleTo(pose.q)).toBeLessThan(.00001);}
 expect(f.rocket.assembly.roots).toHaveLength(2);
 }finally{f.dispose();}
});
it('advances dropped stages with simulation time even on unrendered guidance steps',()=>{
 const f=create();try{
 f.performStage();const d=f.debris[0],earth=f.system.bodyByName('earth');
 const initial=d.body.position[1]-earth.position[1];const q=d.mesh.quaternion.clone();
 f.updateInner(1,false,1/40,1/40);
 expect(d.body.position[1]-earth.position[1]).toBeLessThan(initial-5);
 expect(d.mesh.quaternion.angleTo(q)).toBeLessThan(.00001);
 expect(d.body.position[2]-earth.position[2]).toBeCloseTo(0,0);
 }finally{f.dispose();}
});
it('uses current physics position when staging between rendered frames',()=>{
 const positions=[];
 for(const refresh of [true,false]){
 const f=create();try{f.state.position[1]+=10000;if(refresh)f.syncVisualTransform();f.performStage();positions.push(new THREE.Vector3(...f.state.position));}finally{f.dispose();}
 }
 expect(positions[0]!.distanceTo(positions[1]!)).toBeLessThan(.01);
});
it('counts side engines and their mass in the stage display',()=>{
 const f=create();try{
 const a=f.rocket.assembly;const tank=a.roots.find((n:any)=>n.part.kind==='tank');
 for(const x of [-.08,.08])a.addChild(tank,{part:findPart('engine_ant')!,position:[x,0,0],rotation:0,children:[]});
 const stage=f.computeStageData().find((s:any)=>s.label.includes('3E'));
 expect(stage).toBeDefined();expect(stage.dryMass).toBe(findPart('tank_s_lfo')!.mass+3*findPart('engine_ant')!.mass);
 }finally{f.dispose();}
});
it('drops a radial pair as two independent bodies while keeping the central stack',async()=>{
 const {addSidePair}=await import('../../src/rocket/SideAttachments');
 const f=create();try{
 const a=f.rocket.assembly,host=a.roots.find((n:any)=>n.part.kind==='tank');
 addSidePair(a,host,findPart('decoupler_s')!);addSidePair(a,host,findPart('engine_ant')!);
 // Build the same assembly into a fresh flight so the side meshes exist.
 f.dispose();
 const g:any=new FlightScene(new Renderer(),new SceneManager(),buildSystem(),new Rocket(a),new Achievements(),new Missions());
 try{
 const count=a.roots.length;g.performStage();expect(g.debris).toHaveLength(2);expect(a.roots).toHaveLength(count);expect(host.children).toHaveLength(0);
 const diff=new THREE.Vector3(...g.debris[1].body.velocity).sub(new THREE.Vector3(...g.debris[0].body.velocity));expect(diff.length()).toBeGreaterThan(10);
 expect(g.engineFlame.nozzles).toHaveLength(1);
 }finally{g.dispose();}
 }finally{f.dispose();}
});

it('automatic staging drops the empty core stage without dropping upper side engines',()=>{
 const f=create(1);try{
 const roots=[...f.rocket.assembly.roots],upper=roots[3];
 f.rocket.fuelTanks.find((t:any)=>t.node===roots[1]).remaining=0;
 f.state.throttle=1;f.updateInner(.01,false);
 expect(f.rocket.assembly.roots).toHaveLength(2);expect(upper.children).toHaveLength(2);
 expect(f.debris).toHaveLength(1);
 }finally{f.dispose();}
});
