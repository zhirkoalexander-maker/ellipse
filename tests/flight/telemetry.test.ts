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
it('uses the same reduced distance scale for speed, altitude and delta-v',async()=>{
 const {gameMetres,simulationMetres}=await import('../../src/flight/GameUnits');
 expect(gameMetres(400)).toBe(100);expect(simulationMetres(90)).toBe(360);
 const hud=new HUD();hud.mount();hud.setDeltaV(40000);
 expect((hud as any).dvVal.textContent).toBe('10.0 km/s');
 const {buildDefaultRocket,buildSystem}=await import('./fixtures');
 const {FlightState}=await import('../../src/flight/FlightState');
 const state=new FlightState(buildDefaultRocket(),buildSystem(),[0,0,0],[0,0,0]);
 hud.update(state,buildSystem(),0,0,{speed:400,verticalSpeed:200,altitude:800});
 expect((hud as any).speedVal.textContent).toBe('100.0');
 expect((hud as any).vsVal.textContent).toBe('+50');
 expect((hud as any).altVal.textContent).toBe('200');hud.unmount();
});
