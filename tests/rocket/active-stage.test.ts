import { expect,it } from 'vitest';
import { Assembly } from '../../src/rocket/Assembly';
import { Rocket } from '../../src/rocket/Rocket';
import { findPart } from '../../src/parts/PartCatalog';
import { totalThrust, applyThrust } from '../../src/flight/Thrust';
import { FlightState } from '../../src/flight/FlightState';
import { System } from '../../src/physics/System';
it('only burns engines and fuel below the lowest axial separator',()=>{
 const a=new Assembly();for(const id of ['engine_ant','tank_s_lfo','decoupler_s','engine_sparkler','tank_s_lfo'])a.addRoot({part:findPart(id)!,position:[0,0,0],rotation:0,children:[]});a.restack();
 const r=new Rocket(a),s=new FlightState(r,new System(),[0,0,0],[0,0,0]);s.throttle=1;
 expect(totalThrust(a.roots)).toBe(findPart('engine_ant')!.thrust);
 const lower=r.fuelTanks.find(t=>t.node===a.roots[1])!,upper=r.fuelTanks.find(t=>t.node===a.roots[4])!;
 lower.remaining=0;applyThrust(s,1);expect(s.velocity).toEqual([0,0,0]);expect(upper.remaining).toBe(upper.capacity);
 r.removeStage(a.roots[2]!);expect(totalThrust(a.roots)).toBe(findPart('engine_sparkler')!.thrust);applyThrust(s,1);expect(s.velocity[1]).toBeGreaterThan(0);
});
