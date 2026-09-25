import { it,expect } from 'vitest';
import { surfaceReadout } from '../../src/flight/SurfaceReadout';
it('shows readable surface clearance while descending and hides on the pad',()=>{
 expect(surfaceReadout(168,-12,false)).toMatchObject({visible:true,height:'42 m',descent:'↓ 3.0 m/s',near:true});
 expect(surfaceReadout(4800,-200,false).height).toBe('1.2 km');
 expect(surfaceReadout(42,3,false).visible).toBe(false);
 expect(surfaceReadout(0,0,true).visible).toBe(false);
 expect(surfaceReadout(20,-3,false).progress).toBeGreaterThan(surfaceReadout(2000,-3,false).progress);
});
