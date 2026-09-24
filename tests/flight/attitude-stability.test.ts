import { it, expect } from 'vitest';
import { Quaternion, Vector3 } from 'three';
import { aimAttitude } from '../../src/flight/Attitude';
it('does not roll when guidance crosses the local vertical', () => {
 const q=new Quaternion(), up=new Vector3(0,1,0);
 for(let i=0;i<100;i++) aimAttitude(q,new Vector3(i%2 ? .0001 : -.0001,1,0),2,1.4,up);
 expect(q.angleTo(new Quaternion())).toBeLessThan(.001);
});
it('can align the nose with an exactly vertical landing direction', () => {
 const q=new Quaternion().setFromAxisAngle(new Vector3(1,0,0),.4);
 aimAttitude(q,new Vector3(0,1,0),1,1.4,new Vector3(0,1,0));
 expect(new Vector3(0,1,0).applyQuaternion(q).angleTo(new Vector3(0,1,0))).toBeLessThan(.001);
});
