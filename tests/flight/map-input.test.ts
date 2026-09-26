import { it, expect, vi } from 'vitest';
import { OrbitMap } from '../../src/ui/OrbitMap';
import { Body } from '../../src/physics/Body';
it('keeps map form keys away from flight controls and allows Tab navigation',()=>{
 const earth=new Body('earth',5e24,[0,0,0],[0,0,0]);
 const map=new OrbitMap(()=>({position:[1e7,0,0],velocity:[0,100,0],reference:earth,bodies:[earth],grounded:false,paused:false,fuel:100,remainingBurn:0}),()=>'',()=>{},()=>false);
 let leaked=0;const listener=()=>leaked++;window.addEventListener('keydown',listener);
 try {
  map.toggle();expect(map.root.dataset.view).toBe('system');const input=map.root.querySelector('input')!;
  for(const key of ['ArrowUp',' ','w','Tab']){
   const event=new KeyboardEvent('keydown',{key,bubbles:true,cancelable:true});input.dispatchEvent(event);
   expect(event.defaultPrevented).toBe(false);expect(map.active).toBe(true);
  }
  expect(leaked).toBe(0);
 } finally {window.removeEventListener('keydown',listener);map.dispose();}
});
it('has only the Planets tab and keeps course corrections in that view',()=>{
 const earth=Object.assign(new Body('earth',5e24,[0,0,0],[0,0,0]),{radius:6e6});
 const moon=Object.assign(new Body('moon',7e22,[6e7,0,0],[0,0,2400]),{radius:2e6});
 const burn=vi.fn((_dv: [number,number,number])=> 'Burn started');
 const map=new OrbitMap(()=>({position:[7e6,0,0],velocity:[0,9000,0],reference:earth,bodies:[earth,moon],grounded:false,paused:false,fuel:100,remainingBurn:0}),burn,()=>{},()=>false);
 try {
  map.toggle();
  expect(map.root.querySelector('[data-map=orbit]')).toBeNull();
  expect(map.root.querySelector('[data-map=target]')).toBeNull();
  expect(map.root.querySelector('[data-map=system]')?.textContent).toBe('Planets');
  const course=map.root.querySelector<HTMLDetailsElement>('.map-course')!;
  course.open=true;course.dispatchEvent(new Event('toggle'));
  map.root.querySelector<HTMLButtonElement>('[data-correction=toward]')!.click();
  map.root.querySelector<HTMLButtonElement>('[data-map=burn]')!.click();
  expect(burn).toHaveBeenCalledOnce();expect(burn.mock.calls[0]?.[0]).toEqual([400,0,0]);
  expect(map.root.dataset.view).toBe('system');expect(course.open).toBe(true);
 }finally{map.dispose();}
});
it('keeps the planet overview steady when the reference body changes',()=>{
 const earth=Object.assign(new Body('earth',5e24,[0,0,0],[0,0,0]),{radius:6e6});
 const moon=Object.assign(new Body('moon',7e22,[6e7,0,0],[0,100,0]),{radius:2e6});
 const snapshot={position:[1e7,0,0] as [number,number,number],velocity:[0,100,0] as [number,number,number],reference:earth,bodies:[earth,moon],grounded:false,paused:false,fuel:100,remainingBurn:0};
 const map=new OrbitMap(()=>snapshot,()=>'',()=>{},()=>false);
 try{
  map.toggle();map.root.querySelector<HTMLButtonElement>('[data-destination=moon]')!.click();(map as any).draw(100);
  const earthHit={...(map as any).hits.find((h:any)=>h.name==='earth')};
  snapshot.position=[5.7e7,1e6,0];snapshot.velocity=[-100,0,100];snapshot.reference=moon;
  (map as any).draw(200);
  expect((map as any).hits.find((h:any)=>h.name==='earth')).toEqual(earthHit);
  expect((map as any).hits.some((h:any)=>h.name==='moon')).toBe(true);
 }finally{map.dispose();}
});

it('opens with every destination visible and selects a route from the planet list',()=>{
 const names=['sun','mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune','pluto'];
 const bodies=names.map((name,i)=>Object.assign(new Body(name,1e24,[i*i*1e9,0,0],[0,0,100]),{radius:1e6}));
 const map=new OrbitMap(()=>({position:[9e9,1e6,0],velocity:[0,0,100],reference:bodies[3]!,bodies,grounded:true,paused:false,fuel:100,remainingBurn:0}),()=>'',()=>{},()=>false);
 try{
  map.toggle();map.root.querySelector<HTMLButtonElement>('[data-map=system]')!.click();(map as any).draw(100);
  expect((map as any).hits.map((h:any)=>h.name).sort()).toEqual([...names].sort());
  map.root.querySelector<HTMLButtonElement>('[data-destination=mars]')!.click();
  expect(map.target).toBe('mars');expect(map.root.dataset.view).toBe('system');
  expect(map.root.querySelector<HTMLDetailsElement>('.map-course')!.open).toBe(false);
 }finally{map.dispose();}
});

it('keeps the planet overview when course controls open',()=>{
 const earth=Object.assign(new Body('earth',5e24,[0,0,0],[0,0,0]),{radius:6e6});
 const map=new OrbitMap(()=>({position:[7e6,0,0],velocity:[0,9000,0],reference:earth,bodies:[earth],grounded:false,paused:false,fuel:100,remainingBurn:0}),()=>'',()=>{},()=>false);
 try{
  map.toggle();const course=map.root.querySelector<HTMLDetailsElement>('.map-course')!;
  course.open=true;course.dispatchEvent(new Event('toggle'));
  expect(map.root.dataset.view).toBe('system');
 }finally{map.dispose();}
});

it('animates zoom on consecutive display frames without moving its cursor anchor',()=>{
 const earth=Object.assign(new Body('earth',5e24,[0,0,0],[0,0,0]),{radius:6e6});
 const moon=Object.assign(new Body('moon',7e22,[6e7,0,0],[0,0,2400]),{radius:2e6});
 const map=new OrbitMap(()=>({position:[-6e6,0,0],velocity:[0,0,0],reference:earth,bodies:[earth,moon],grounded:true,paused:false,fuel:100,remainingBurn:0}),()=>'',()=>{},()=>false);
 const view=map as any;
 try {
  map.toggle();map.root.querySelector<HTMLButtonElement>('[data-map=system]')!.click();view.draw(100);
  const before={...view.hits.find((h:any)=>h.name==='earth')};
  view.zoomAt(200,300,2);
  view.draw(116);
  const first={...view.hits.find((h:any)=>h.name==='earth')};
  const endX=200+(before.x-200)*2;
  expect(Math.abs(first.x-before.x)).toBeGreaterThan(0);
  expect(Math.abs(first.x-before.x)).toBeLessThan(Math.abs(endX-before.x));
  view.draw(132);
  expect(view.hits.find((h:any)=>h.name==='earth').x).not.toBe(first.x);
  for(let t=148;t<1200;t+=16)view.draw(t);
  expect(view.hits.find((h:any)=>h.name==='earth').x).toBeCloseTo(endX,1);
 } finally {map.dispose();}
});

it('keeps both Earth and Moon selectable in the planet overview',()=>{
 const earth=Object.assign(new Body('earth',5e24,[0,0,0],[0,0,0]),{radius:6e6});
 const moon=Object.assign(new Body('moon',7e22,[0,0,6e7],[0,100,0]),{radius:2e6});
 const map=new OrbitMap(()=>({position:[7e6,0,0],velocity:[0,7000,0],reference:earth,bodies:[earth,moon],grounded:false,paused:false,fuel:100,remainingBurn:0}),()=>'',()=>{},()=>false);
 try {
  map.toggle();(map as any).draw(100);
  expect((map as any).hits.some((h:any)=>h.name==='earth')).toBe(true);
  expect((map as any).hits.some((h:any)=>h.name==='moon')).toBe(true);
  map.root.querySelector<HTMLButtonElement>('[data-destination=moon]')!.click();(map as any).draw(200);
  expect((map as any).hits.some((h:any)=>h.name==='moon')).toBe(true);
 } finally {map.dispose();}
});
