import { it, expect } from 'vitest';
import { OrbitMap } from '../../src/ui/OrbitMap';
import { Body } from '../../src/physics/Body';
it('keeps map form keys away from flight controls and allows Tab navigation',()=>{
 const earth=new Body('earth',5e24,[0,0,0],[0,0,0]);
 const map=new OrbitMap(()=>({position:[1e7,0,0],velocity:[0,100,0],reference:earth,bodies:[earth],grounded:false,paused:false,fuel:100,remainingBurn:0}),()=>'',()=>{},()=>false);
 let leaked=0;const listener=()=>leaked++;window.addEventListener('keydown',listener);
 try {
  map.toggle();expect((map as any).mode).toBe('target');const input=map.root.querySelector('input')!;
  for(const key of ['ArrowUp',' ','w','Tab']){
   const event=new KeyboardEvent('keydown',{key,bubbles:true,cancelable:true});input.dispatchEvent(event);
   expect(event.defaultPrevented).toBe(false);expect(map.active).toBe(true);
  }
  expect(leaked).toBe(0);
 } finally {window.removeEventListener('keydown',listener);map.dispose();}
});
it('keeps map orientation, scale and the departure planet when the reference body changes',()=>{
 const earth=Object.assign(new Body('earth',5e24,[0,0,0],[0,0,0]),{radius:6e6});
 const moon=Object.assign(new Body('moon',7e22,[6e7,0,0],[0,100,0]),{radius:2e6});
 const snapshot={position:[1e7,0,0] as [number,number,number],velocity:[0,100,0] as [number,number,number],reference:earth,bodies:[earth,moon],grounded:false,paused:false,fuel:100,remainingBurn:0};
 const map=new OrbitMap(()=>snapshot,()=>'',()=>{},()=>false);
 try{
  map.toggle();(map as any).draw(100);
  const frame=(map as any).viewFrame;
  const earthHit={...(map as any).hits.find((h:any)=>h.name==='earth')};
  snapshot.position=[5.7e7,1e6,0];snapshot.velocity=[-100,0,100];snapshot.reference=moon;
  (map as any).draw(200);
  expect((map as any).viewFrame).toBe(frame);
  expect((map as any).hits.find((h:any)=>h.name==='earth')).toEqual(earthHit);
  expect((map as any).hits.some((h:any)=>h.name==='moon')).toBe(true);
 }finally{map.dispose();}
});
