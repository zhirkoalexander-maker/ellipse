import { expect, it } from 'vitest';
import * as THREE from 'three';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';
import { SIZE_DIMS } from '../../src/parts/PartBuilder';
import { VABScene } from '../../src/scenes/VABScene';

it('includes parent positions and rotation in the centre of mass', () => {
 const a=new Assembly();const part=findPart('tank_s_lfo')!;
 a.addRoot({part,position:[0,2,0],rotation:Math.PI/2,children:[{part,position:[2,0,0],rotation:0,children:[]}]});
 expect(a.centerOfMass()[1]).toBeCloseTo(2);expect(a.centerOfMass()[2]).toBeCloseTo(-1);
});

it('fits adapters to the actual top and bottom radii', () => {
 const a=new Assembly(),top=findPart('tank_s_lfo')!,bot=findPart('tank_m_lfo')!;
 a.addRoot({part:bot,position:[0,0,0],rotation:0,children:[]});
 a.addRoot({part:top,position:[0,(SIZE_DIMS.S.height+SIZE_DIMS.M.height)/2+.03,0],rotation:0,children:[]});
 const mesh=a.toMesh();const adapter=mesh.children.find(o=>o.userData.joint) as THREE.Mesh;
 expect(adapter).toBeDefined();const g=adapter.geometry as THREE.CylinderGeometry;
 expect(g.parameters.radiusTop).toBeCloseTo(SIZE_DIMS.S.radius);
 expect(g.parameters.radiusBottom).toBeCloseTo(SIZE_DIMS.M.radius);
 expect(g.parameters.height).toBeCloseTo(.03);
});

it('adds a symmetric engine pair to a selected tank and keeps it attached when reordered', () => {
 const v:any=new VABScene(()=>{},()=>{});v.mount();
 try {
 v.add(findPart('tank_m_lfo')!);
 const mode=document.querySelector<HTMLSelectElement>('#vp-placement');expect(mode).not.toBeNull();
 mode!.value='side';v.add(findPart('engine_ant')!);
 const tank=v.assembly.roots[0];expect(tank.children).toHaveLength(2);
 expect(tank.children[0].position[0]).toBe(-tank.children[1].position[0]);
 expect(tank.children[0].uid).not.toBe(tank.children[1].uid);
 expect(v.assembly.roots).toHaveLength(1);
 mode!.value='stack';v.add(findPart('capsule_mk1')!);
 document.querySelector<HTMLButtonElement>('[data-move-up="0"]')!.click();
 expect(v.assembly.roots[1]).toBe(tank);expect(tank.children).toHaveLength(2);
 }finally{v.unmount();}
});

it('does not flare out the joint between an S tank and the Mk1 capsule', () => {
 const a=new Assembly();for(const id of ['tank_s_lfo','capsule_mk1'])a.addRoot({part:findPart(id)!,position:[0,0,0],rotation:0,children:[]});
 a.restack();expect(a.toMesh().children.filter(o=>o.userData.joint)).toHaveLength(0);
});
it('Undo removes the newly added side pair and preserves the tank', () => {
 const v:any=new VABScene(()=>{},()=>{});v.mount();try{
 v.add(findPart('tank_m_lfo')!);document.querySelector<HTMLSelectElement>('#vp-placement')!.value='side';v.add(findPart('engine_ant')!);v.undo();
 expect(v.assembly.roots).toHaveLength(1);expect(v.assembly.roots[0].children).toHaveLength(0);
 }finally{v.unmount();}
});

it('adds side decouplers to an existing engine pair and preserves them in saves', async () => {
 const {serializeAssembly,deserializeAssembly}=await import('../../src/storage/SaveLoad');
 const {Rocket}=await import('../../src/rocket/Rocket');
 const v:any=new VABScene(()=>{},()=>{});v.mount();try{
 v.add(findPart('tank_m_lfo')!);document.querySelector<HTMLSelectElement>('#vp-placement')!.value='side';
 v.add(findPart('engine_ant')!);v.add(findPart('decoupler_s')!);
 const saved=deserializeAssembly(serializeAssembly(v.assembly))!;const host=saved.roots[0]!;
 expect(host.children).toHaveLength(2);expect(host.children.every(n=>n.part.kind==='decoupler' && n.radial)).toBe(true);
 expect(host.children.every(n=>n.children[0]?.part.kind==='engine')).toBe(true);
 const rocket=new Rocket(saved);rocket.removeStage(host.children[0]!);
 expect(saved.roots).toHaveLength(1);expect(host.children).toHaveLength(0);expect(rocket.totalFuelMass()).toBe(50000);
 }finally{v.unmount();}
});
