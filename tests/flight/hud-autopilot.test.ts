import { afterEach, expect, it, vi } from 'vitest';
import { HUD } from '../../src/flight/HUD';
let hud: HUD | undefined;
afterEach(() => { hud?.unmount(); hud=undefined; });
const button=(action:string)=>document.querySelector<HTMLButtonElement>(`[data-action="${action}"]`)!;
it('offers landable destinations and submits the chosen target and time-warp preference once',()=>{
 hud=new HUD();hud.mount();const action=vi.fn();hud.onAction=action;
 button('autopilotOpen').click();
 const picker=document.querySelector<HTMLElement>('.autopilot-picker')!;
 expect(picker.hidden).toBe(false);
 const select=picker.querySelector('select')!;
 expect(Array.from(select.options).map(o=>o.value)).toEqual(['moon','mercury','venus','earth','mars','pluto']);
 expect(select.value).toBe('moon');expect(hud.autopilotAutoWarp).toBe(true);
 select.value='mars';picker.querySelector<HTMLInputElement>('input')!.checked=false;
 button('autopilotStart').click();
 expect(action.mock.calls).toEqual([['autopilot:mars']]);expect(hud.autopilotAutoWarp).toBe(false);
 expect(picker.hidden).toBe(true);
});
it('updates mission progress, exposes cancellation and removes its controls and listeners on exit',()=>{
 hud=new HUD();hud.mount();const action=vi.fn();hud.onAction=action;
 hud.setAutopilotStatus('Cruising','moon','Arrival in 2 minutes');
 const card=document.querySelector<HTMLElement>('.autopilot-mission')!;
 expect(card.hidden).toBe(false);expect(card.textContent).toContain('MOON');expect(card.textContent).toContain('Arrival in 2 minutes');
 const cancel=card.querySelector<HTMLButtonElement>('button')!;cancel.click();
 expect(action).toHaveBeenCalledWith('autopilotCancel');
 hud.setAutopilotStatus(null,'','');expect(card.hidden).toBe(true);
 hud.unmount();action.mockClear();cancel.click();
 expect(action).not.toHaveBeenCalled();expect(document.querySelector('.autopilot-picker')).toBeNull();
});
it('does not start a mission while paused and contains keyboard controls inside the picker',()=>{
 hud=new HUD();hud.mount();const action=vi.fn();hud.onAction=action;
 button('autopilotOpen').click();
 const picker=document.querySelector<HTMLElement>('.autopilot-picker')!;
 const globalKey=vi.fn();document.addEventListener('keydown',globalKey);
 try {
   picker.querySelector('select')!.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowUp',bubbles:true}));
   expect(globalKey).not.toHaveBeenCalled();
   hud.setPaused(true);expect(picker.hidden).toBe(true);
   button('autopilotStart').click();button('autopilotOpen').click();
   expect(picker.hidden).toBe(true);expect(action).not.toHaveBeenCalled();
 } finally { document.removeEventListener('keydown',globalKey); }
});
it('dispatches exactly one action per warp click and per pause button click',()=>{
 hud=new HUD();hud.mount();const action=vi.fn();hud.onAction=action;
 for(const control of ['warpUp','warpDown','warp100']) {
   action.mockClear();button(control).click();expect(action.mock.calls).toEqual([[control]]);
 }
 hud.setPaused(true);
 for(const control of ['resume','menu','restart']) {
   action.mockClear();const icon=document.createElement('span');icon.textContent='icon';button(control).append(icon);icon.click();expect(action.mock.calls).toEqual([[control]]);
 }
});
it('Escape closes the picker without reaching window flight shortcuts',()=>{
 hud=new HUD();hud.mount();button('autopilotOpen').click();
 const listener=vi.fn();window.addEventListener('keydown',listener);
 try {
   const picker=document.querySelector<HTMLElement>('.autopilot-picker')!;
   picker.querySelector('select')!.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));
   expect(picker.hidden).toBe(true);expect(listener).not.toHaveBeenCalled();
   expect(document.activeElement).toBe(button('autopilotOpen'));
 } finally { window.removeEventListener('keydown',listener); }
});
