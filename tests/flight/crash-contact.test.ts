import { afterEach, describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';
import { buildDefaultRocket, buildSystem } from './fixtures';
let flight: FlightScene | undefined;
afterEach(() => { flight?.dispose(); flight = undefined; vi.restoreAllMocks(); });
function create() {
  const scene = new SceneManager();
  const system = buildSystem();
  flight = new FlightScene(new Renderer(), scene, system, buildDefaultRocket(), new Achievements(), new Missions());
  const f = flight as any;
  f._spawnProtectionTimer = 0;
  return { f, scene, body: system.bodyByName('earth')! as any };
}
describe('terminal crash contact', () => {
  it('settles an upright 90 m/s contact without bouncing or breaking the rocket',()=>{
    const {f,body}=create();
    const up=new THREE.Vector3(...f.groundedDir),surface=body.getSurfaceRadiusAt(f.state.position);
    f.grounded=false;f.groundedDir=null;f.launched=true;
    f.state.velocity=new THREE.Vector3(...body.velocity).addScaledVector(up,-90).toArray();
    f.resolveSurfaceContact(body,up.clone().multiplyScalar(surface+4).toArray(),up.clone().multiplyScalar(surface).toArray(),false);
    expect(f.crashed).toBe(false);expect(f.grounded).toBe(true);
    expect(f.state.velocity).toEqual([0,0,0]);expect(f.state.throttle).toBe(0);
    for(let i=0;i<60;i++)f.update(1/60);
    expect(f.crashed).toBe(false);expect(f.grounded).toBe(true);
    expect(Math.hypot(...f.state.position.map((x:number,i:number)=>x-body.position[i]))-body.getSurfaceRadiusAt(f.state.position)).toBeCloseTo(FlightScene.SPAWN_OFFSET_M,4);
  });
  it('keeps a high-speed inclined impact fixed relative to the moving planet for subsequent frames', () => {
    const { f, body, scene } = create();
    const up = new THREE.Vector3(...f.groundedDir);
    const tangent = new THREE.Vector3().crossVectors(up, new THREE.Vector3(0, 1, 0)).normalize();
    const radius = body.getSurfaceRadiusAt(f.state.position);
    f.state.position = new THREE.Vector3(...body.position).addScaledVector(up, radius + FlightScene.SPAWN_OFFSET_M + 1).toArray();
    f.state.velocity = new THREE.Vector3(...body.velocity).addScaledVector(up, -5705).addScaledVector(tangent, 4241).toArray();
    f.rocketQuat.setFromUnitVectors(new THREE.Vector3(0,1,0), up.clone().multiplyScalar(Math.cos(88 * Math.PI / 180)).addScaledVector(tangent, Math.sin(88 * Math.PI / 180)));
    f.grounded = false; f.groundedDir = null; f.launched = true;
    f.updateInner(1 / 60);
    expect(f.crashed).toBe(true);
    const contact = new THREE.Vector3(...f.state.position).sub(new THREE.Vector3(...body.position));
    const overlay = f.crashOverlay;
    const camera = scene.camera.position.clone();
    for (let i = 0; i < 100; i++) f.updateInner(1 / 60);
    expect(new THREE.Vector3(...f.state.position).sub(new THREE.Vector3(...body.position)).distanceTo(contact)).toBeLessThan(1e-6);
    expect(scene.camera.position.equals(camera)).toBe(true);
    expect(f.rocketGroup.visible).toBe(false);
    expect(f.crashOverlay).toBe(overlay);
    expect(f.state.velocity).toEqual([0,0,0]); expect(f.state.throttle).toBe(0);
  });
  it('does not advance physics after overheating ends flight in the middle of a frame', () => {
    const { f, body } = create();
    f.grounded = false; f.heatEnergy = f.MAX_HEAT * 2;
    const propagate = vi.spyOn(f.system, 'propagate');
    f.updateInner(1 / 60);
    expect(f.crashed).toBe(true);
    expect(propagate).not.toHaveBeenCalled();
    expect(Math.hypot(...f.state.position.map((x: number, i: number) => x - body.position[i]))).toBeCloseTo(body.getSurfaceRadiusAt(f.state.position) + FlightScene.SPAWN_OFFSET_M, 5);
  });
});
