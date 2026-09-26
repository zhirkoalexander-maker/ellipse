import { it,expect } from 'vitest';
import { automaticWarp } from '../../src/flight/AutomaticWarp';
it('keeps launch and landing at real time and caps every cruise at 40x',()=>{
 expect(automaticWarp(100,6e7,100,6e7)).toBe(1);
 expect(automaticWarp(1000,1000,30,6e7)).toBe(1);
 expect(automaticWarp(1e7,3e7,6000,6e7)).toBe(40);
 expect(automaticWarp(69999,6e7,1000,6e7)).toBeCloseTo(automaticWarp(70001,6e7,1000,6e7),3);
 expect(automaticWarp(1e9,1e6,10000,1e9)).toBeLessThanOrEqual(1e6/10000/30);
});

it('uses 40x for interplanetary cruise too',()=>{expect(automaticWarp(1e9,1e9,5000,1e12)).toBe(40);});
