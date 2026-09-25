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
 const green=terrainColor('earth',.0002,new THREE.Vector3(1,0,0));
 expect(green.g).toBeGreaterThan(green.r*1.3);
 const water=terrainColor('earth',-.00015,new THREE.Vector3(1,0,0));
 expect(water.b).toBeGreaterThan(water.r*3);
});
