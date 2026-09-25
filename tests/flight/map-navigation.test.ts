import { it,expect } from 'vitest';
import { Vector3 } from 'three';
import { maneuverVector, mapBasis, projectMap, mapTrajectory } from '../../src/flight/MapNavigation';
it('uses one physical frame for bodies, craft and hit testing',()=>{
 const basis=mapBasis([1,0,0],[0,1,0],'xy');
 expect(projectMap([1e11+1000,2e11,0],[1e11,2e11,0],basis,10,[400,300])).toEqual([500,300]);
});
it('points prograde along velocity including radial ascent',()=>{
 for(const velocity of [[0,100,0],[100,0,0]] as [number,number,number][]) {
  const a=new Vector3(...maneuverVector([100,0,0],velocity,[1,0,0]));
  const b=new Vector3(...maneuverVector([100,0,0],velocity,[0,0,1]));
  expect(a.angleTo(new Vector3(...velocity))).toBeCloseTo(0);expect(a.dot(b)).toBeCloseTo(0);expect(a.length()).toBeCloseTo(1);
 }
});
it('draws a finite radial trajectory beginning at the craft',()=>{
 const points=mapTrajectory([7e6,0,0],[100,0,0],5.97e24,6.4e6);
 expect(points[0]).toEqual([7e6,0,0]);expect(points.length).toBeGreaterThan(2);
 expect(points.every(p=>p.every(Number.isFinite))).toBe(true);
});
it('starts an inclined descent at the craft and ends at impact instead of drawing through the planet',()=>{
 const position:[number,number,number]=[7e6,0,0];
 const points=mapTrajectory(position,[-1200,1800,700],5.97e24,6.4e6);
 expect(points[0]).toEqual(position);
 expect(points.length).toBeGreaterThan(2);
 expect(Math.hypot(...points.at(-1)!)).toBeCloseTo(6.4e6,3);
 expect(points.every(p=>Math.hypot(...p)>=6.4e6-.001)).toBe(true);
 expect(points[1]![0]).toBeLessThan(position[0]);
});

import { simpleCorrection, destinationBasis } from '../../src/flight/MapNavigation';
it('provides predictable plain-language course corrections',()=>{
 expect(simpleCorrection([0,0,0],[30,0,0],[0,100,0],'toward',10)).toEqual([0,10,0]);
 expect(new Vector3(...simpleCorrection([0,0,0],[30,0,0],[0,100,0],'slower',10)).distanceTo(new Vector3(-10,0,0))).toBeCloseTo(0);
 expect(Math.hypot(...simpleCorrection([0,0,0],[30,0,0],[0,100,0],'slower',100))).toBeCloseTo(30);
 expect(simpleCorrection([0,0,0],[0,0,0],[0,100,0],'faster',10)).toEqual([0,0,0]);
});
it('keeps an inclined destination visible beside the craft',()=>{
 const basis=destinationBasis([0,0,0],[0,1000,0]);
 expect(projectMap([0,1000,0],[0,0,0],basis,10,[0,0])[0]).toBeCloseTo(100);
 expect(basis[0].dot(basis[1])).toBeCloseTo(0);
});
