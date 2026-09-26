import { afterEach, expect, it, vi } from 'vitest';
import { flightTelemetry } from '../../src/flight/Telemetry';
import { HUD } from '../../src/flight/HUD';
const body = { position: [100, 20, 0] as [number, number, number], velocity: [0, 0, 17000] as [number, number, number], radius: 10, getSurfaceRadiusAt: () => 12 };
afterEach(() => { vi.useRealTimers(); });
it('reports surface-relative radial descent and tangential motion', () => {
 const t = flightTelemetry([120, 20, 0], [-3, 4, 17000], body, false);
 expect(t.altitude).toBe(8); expect(t.speed).toBe(5); expect(t.verticalSpeed).toBe(-3); expect(t.lateralSpeed).toBe(4);
});
it('reports zero pad speed even with the grounded velocity sentinel', () => {
 const t = flightTelemetry([112, 20, 0], [0, 0, 0], body, true);
 expect(t.speed).toBe(0); expect(t.verticalSpeed).toBe(0); expect(t.altitude).toBe(0);
});
it('keeps degenerate and missing-body telemetry finite', () => {
 expect(Object.values(flightTelemetry([0, 0, 0], [0, 0, 0], undefined, false)).every(Number.isFinite)).toBe(true);
 expect(Object.values(flightTelemetry([NaN, 0, 0], [Infinity, 0, 0], body, false)).every(Number.isFinite)).toBe(true);
});
it('keeps a quickly reopened pause overlay visible and cancels work on unmount', () => {
 vi.useFakeTimers(); const hud = new HUD();
 hud.setPaused(true); hud.setPaused(false); hud.setPaused(true);
 vi.advanceTimersByTime(300);
 const overlay = (hud as unknown as {pauseOverlay: HTMLDivElement}).pauseOverlay;
 expect(overlay.style.display).toBe('flex');
 hud.setPaused(false); hud.unmount();
 expect(vi.getTimerCount()).toBe(0);
});
it('uses the same reduced distance scale for speed and altitude',async()=>{
 const {gameMetres,simulationMetres}=await import('../../src/flight/GameUnits');
 expect(gameMetres(400)).toBe(100);expect(simulationMetres(90)).toBe(360);
 const hud=new HUD();hud.mount();
 const {buildDefaultRocket,buildSystem}=await import('./fixtures');
 const {FlightState}=await import('../../src/flight/FlightState');
 const state=new FlightState(buildDefaultRocket(),buildSystem(),[0,0,0],[0,0,0]);
 hud.update(state,buildSystem(),0,0,{speed:400,verticalSpeed:200,altitude:800});
 expect((hud as any).speedVal.textContent).toBe('100.0');
 expect((hud as any).vsVal.textContent).toBe('+50');
 expect((hud as any).altVal.textContent).toBe('200');hud.unmount();
});

it('shows flight readings without delta-v and keeps time warp controls working',()=>{
 const hud=new HUD();hud.mount();const action=vi.fn();hud.onAction=action;
 const panel=document.querySelector('.flight-readouts')!;
 expect(panel.textContent).not.toContain('Δv');
 expect(panel.querySelector('.dv-val')).toBeNull();
 for(const name of ['warpDown','warpUp','warp100']){
  panel.querySelector<HTMLButtonElement>(`[data-action="${name}"]`)!.click();
  expect(action).toHaveBeenLastCalledWith(name);
 }
 hud.unmount();
});

it('does not replace unchanged telemetry text nodes and still updates changing values',async()=>{
 const {buildDefaultRocket,buildSystem}=await import('./fixtures');
 const {FlightState}=await import('../../src/flight/FlightState');
 const system=buildSystem(),state=new FlightState(buildDefaultRocket(),system,[0,0,0],[0,0,0]);
 const hud=new HUD();hud.mount();
 const draw=()=>{hud.update(state,system,0,0,{speed:400,verticalSpeed:200,altitude:800});hud.setTwr(2);hud.setGrounded(true);};
 draw();const speed=(hud as any).speedVal as HTMLElement,twr=(hud as any).twrVal as HTMLElement;
 const speedText=speed.firstChild,twrText=twr.firstChild;
 draw();expect(speed.firstChild).toBe(speedText);expect(twr.firstChild).toBe(twrText);
 hud.update(state,system,0,0,{speed:800,verticalSpeed:200,altitude:800});expect(speed.textContent).toBe('200.0');
 hud.unmount();
});
