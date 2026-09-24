import { it, expect } from 'vitest';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';
import { buildDefaultRocket, buildSystem } from './fixtures';
import { Vector3 } from 'three';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, ROCKET_VISUAL_SCALE } from '../../src/config/constants';
it('keeps the displayed rocket attached to its physical position even during launch effects', () => {
 const f:any=new FlightScene(new Renderer(),new SceneManager(),buildSystem(),buildDefaultRocket(),new Achievements(),new Missions());
 try {
  f.screenShake=1; f.update(1/60);
  const ref=f.system.bodyByName('earth');
  const up=new Vector3(...f.state.position).sub(new Vector3(...ref.position)).normalize();
  const expected=new Vector3(...f.state.position).multiplyScalar(ORBIT_SCALE*VISUAL_PLANET_MULT).addScaledVector(up,-f.rocketBottomY*ROCKET_VISUAL_SCALE);
  expect(f.rocketGroup.position.distanceTo(expected)).toBeLessThan(1e-9);
 } finally {f.dispose();}
});
