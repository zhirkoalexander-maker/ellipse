import { it,expect } from 'vitest';
import { automaticWarp } from '../../src/flight/AutomaticWarp';
it('keeps launch and landing at real time and never jumps to 1000x on a lunar flight',()=>{
 expect(automaticWarp(100,6e7,100,6e7)).toBe(1);
 expect(automaticWarp(1000,1000,30,6e7)).toBe(1);
 expect(automaticWarp(1e7,3e7,6000,6e7)).toBe(100);
 expect(automaticWarp(69999,6e7,1000,6e7)).toBeCloseTo(automaticWarp(70001,6e7,1000,6e7),3);
 expect(automaticWarp(1e9,1e6,10000,1e9)).toBeLessThanOrEqual(1e6/10000/30);
});
