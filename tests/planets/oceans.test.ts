import { it, expect } from 'vitest';
import { rockyTerrain, terrainColor } from '../../src/planets/Terrain';
import * as THREE from 'three';
it('has extensive level oceans and green foothills', () => {
 let sea = 0;
 for (let i=0;i<1000;i++) {
  const y=1-2*(i+.5)/1000, a=i*2.399963, r=Math.sqrt(1-y*y);
  const h=rockyTerrain('earth',r*Math.cos(a),y,r*Math.sin(a));
  if (Math.abs(h + .00015)<1e-10) sea++;
 }
 expect(sea).toBeGreaterThan(300);
 expect(sea).toBeLessThan(850);
 const lowlands=Array.from({length:100},(_,i)=>terrainColor('earth',.0002,new THREE.Vector3(Math.cos(i),.2,Math.sin(i)).normalize()));
 expect(lowlands.filter(c=>c.g>c.r*1.3).length).toBeGreaterThan(20);
 expect(lowlands.filter(c=>c.r>c.g*.9).length).toBeGreaterThan(20);
 const water=terrainColor('earth',-.00015,new THREE.Vector3(1,0,0));
 expect(water.b).toBeGreaterThan(water.r*3);
});
it('separates rock, snow and shore colors instead of blending broad elevation gradients',()=>{
 const p=new THREE.Vector3(1,0,0);
 const shore=terrainColor('earth',-.00014,p),land=terrainColor('earth',-.00011,p);
 expect(Math.abs(shore.r-land.r)+Math.abs(shore.g-land.g)).toBeGreaterThan(.1);
 const rock=terrainColor('earth',.0006,p),snow=terrainColor('earth',.001,p);
 expect(snow.r-rock.r).toBeGreaterThan(.2);
});
it('gives rocky planets visible geological regions',()=>{
 for(const name of ['moon','mercury','mars','venus','pluto']){
  const values=[];
  for(let i=0;i<80;i++){
   const p=new THREE.Vector3(Math.cos(i*2.4),1-2*i/80,Math.sin(i*2.4)).normalize();
   const c=terrainColor(name,rockyTerrain(name,p.x,p.y,p.z),p);
   values.push(c.r+c.g+c.b);
  }
  expect(Math.max(...values)-Math.min(...values),name).toBeGreaterThan(.35);
 }
});
