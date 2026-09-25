import {it,expect} from 'vitest';
import {earthLandFraction} from '../../src/planets/EarthGeography';
import {rockyTerrain} from '../../src/planets/Terrain';
const direction=(lat:number,lon:number):[number,number,number]=>{
 const a=lat*Math.PI/180,b=lon*Math.PI/180;
 return [Math.cos(a)*Math.cos(b),Math.sin(a),Math.cos(a)*Math.sin(b)];
};
it('matches major land and ocean regions of the bundled Earth map',()=>{
 for(const [lat,lon] of [[46,10],[30,85],[0,25],[-25,135]])expect(earthLandFraction(...direction(lat!,lon!))).toBe(1);
 for(const [lat,lon] of [[0,-140],[0,-30],[-35,80]]){
  const p=direction(lat!,lon!);expect(earthLandFraction(...p)).toBe(0);
  expect(rockyTerrain('earth',...p)).toBeCloseTo(0,10);
 }
});
it('keeps the dateline continuous and both poles finite',()=>{
 expect(earthLandFraction(...direction(0,180))).toBeCloseTo(earthLandFraction(...direction(0,-180)),8);
 for(const lat of [-90,90])expect(Number.isFinite(earthLandFraction(...direction(lat,0)))).toBe(true);
});
