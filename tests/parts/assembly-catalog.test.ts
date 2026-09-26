import { expect, it } from 'vitest';
import { Box3, Vector3, Mesh } from 'three';
import { ASSEMBLY_PARTS, findPart } from '../../src/parts/PartCatalog';
import { buildPartMesh } from '../../src/parts/PartBuilder';
import { deserializeAssembly, serializeAssembly } from '../../src/storage/SaveLoad';
import { Assembly } from '../../src/rocket/Assembly';
it('offers only small and extra-large parts with two tank capacities per size',()=>{
 expect(ASSEMBLY_PARTS.length).toBeLessThanOrEqual(18);
 expect(new Set(ASSEMBLY_PARTS.map(p=>p.size))).toEqual(new Set(['S','XL']));
 for(const size of ['S','XL']){
  const tanks=ASSEMBLY_PARTS.filter(p=>p.kind==='tank'&&p.size===size);
  expect(tanks).toHaveLength(2);
  expect(tanks[0]!.fuelCapacity).not.toBe(tanks[1]!.fuelCapacity);
  expect(tanks[0]!.mass).toBe(tanks[1]!.mass);
  const models=tanks.map(buildPartMesh);
  const bounds=models.map(m=>new Box3().setFromObject(m).getSize(new Vector3()));
  expect(bounds[0]!.distanceTo(bounds[1]!)).toBeLessThan(1e-6);
  const vertexCounts=models.map(model=>{let count=0;model.traverse(o=>{if(o instanceof Mesh)count+=o.geometry.getAttribute('position').count;});return count;});
  expect(vertexCounts[0]).not.toBe(vertexCounts[1]);
 }
});
it('still loads retired medium and large parts in saved rockets',()=>{
 const a=new Assembly();
 for(const id of ['engine_vector','tank_m_lfo','decoupler_l','capsule_mk1'])a.addRoot({part:findPart(id)!,position:[0,0,0],rotation:0,children:[]});
 const loaded=deserializeAssembly(serializeAssembly(a))!;
 expect(loaded.roots.map(n=>n.part.id)).toEqual(a.roots.map(n=>n.part.id));
 expect(loaded.totalMass()).toBe(a.totalMass());
});
