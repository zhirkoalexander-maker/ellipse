import { expect, it } from 'vitest';
import * as THREE from 'three';
import { batchStaticMeshes } from '../../src/parts/StaticMeshes';
it('reduces draw calls while preserving transformed geometry and named meshes',()=>{
 const root=new THREE.Group(),material=new THREE.MeshStandardMaterial();
 for(let i=0;i<3;i++){
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(1,2,3),material);mesh.position.set(i*3,i,0);mesh.rotation.z=i*.3;root.add(mesh);
 }
 const named=new THREE.Mesh(new THREE.BoxGeometry(),material);named.name='landing-foot';root.add(named);
 const bounds=new THREE.Box3().setFromObject(root);
 const expected: number[][]=[];
 for(const child of root.children.slice(0,3)){
  const mesh=child as THREE.Mesh;mesh.updateMatrix();const p=mesh.geometry.attributes.position!;
  for(let i=0;i<p.count;i++)expected.push(new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(mesh.matrix).toArray());
 }
 batchStaticMeshes(root);
 expect(root.children.length).toBe(2);expect(root.getObjectByName('landing-foot')).toBe(named);
 const merged=root.children.find(o=>o!==named) as THREE.Mesh;
 expect(merged.material).toBe(material);expect(merged.geometry.index!.count).toBe(108);
 const positions=merged.geometry.attributes.position!;expect(positions.count).toBe(expected.length);
 expected.forEach((p,i)=>{const actual=new THREE.Vector3().fromBufferAttribute(positions,i);expect(actual.distanceTo(new THREE.Vector3(...p))).toBeLessThan(1e-6);});
 expect(new THREE.Box3().setFromObject(root).min.distanceTo(bounds.min)).toBeLessThan(1e-6);
 expect(new THREE.Box3().setFromObject(root).max.distanceTo(bounds.max)).toBeLessThan(1e-6);
});
