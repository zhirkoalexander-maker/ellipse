import { it, expect } from 'vitest';
import { OrbitMap } from '../../src/ui/OrbitMap';
import { Body } from '../../src/physics/Body';
it('keeps map form keys away from flight controls and allows Tab navigation',()=>{
 const earth=new Body('earth',5e24,[0,0,0],[0,0,0]);
 const map=new OrbitMap(()=>({position:[1e7,0,0],velocity:[0,100,0],reference:earth,bodies:[earth],grounded:false,paused:false,fuel:100,remainingBurn:0}),()=>'',()=>{},()=>false);
 let leaked=0;const listener=()=>leaked++;window.addEventListener('keydown',listener);
 try {
  map.toggle();const input=map.root.querySelector('input')!;
  for(const key of ['ArrowUp',' ','w','Tab']){
   const event=new KeyboardEvent('keydown',{key,bubbles:true,cancelable:true});input.dispatchEvent(event);
   expect(event.defaultPrevented).toBe(false);expect(map.active).toBe(true);
  }
  expect(leaked).toBe(0);
 } finally {window.removeEventListener('keydown',listener);map.dispose();}
});
