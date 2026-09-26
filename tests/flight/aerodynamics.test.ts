import { it, expect } from 'vitest';
import { dragArea, dragRetention } from '../../src/flight/Aerodynamics';
import { buildDefaultRocket } from './fixtures';
it('keeps momentum on fast atmospheric entry while a parachute still brakes',()=>{
 const rocket=buildDefaultRocket();
 const hull=dragArea(rocket.assembly.roots,1,false,false);
 const chute=dragArea(rocket.assembly.roots,1,false,true);
 const rho=1.225*Math.exp(-20000/8500);
 expect(dragRetention(12000,rho,hull,1700,1)).toBeGreaterThan(.96);
 expect(dragRetention(12000,rho,chute,1700,1)).toBeLessThan(.1);
});
