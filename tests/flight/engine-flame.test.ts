import { describe, expect, it, vi } from 'vitest';
import { EngineFlame } from '../../src/effects/EngineFlame';
import { PART_SCALE } from '../../src/config/constants';
import * as THREE from 'three';

describe('engine exhaust at rocket scale', () => {
  it('keeps newly emitted exhaust close to the nozzle at common frame rates', () => {
    const random = vi.spyOn(Math, 'random').mockReturnValue(0.5);
    for (const dt of [1 / 30, 1 / 60, 1 / 120]) {
      const flame = new EngineFlame(); flame.start(); flame.update(dt);
      const points = flame.getMesh().children[0] as THREE.Points;
      const position = points.geometry.attributes.position!;
      const color = points.geometry.attributes.color!;
      const live: number[] = [];
      for (let i = 0; i < position.count; i++) if (color.getX(i) > 0) live.push(position.getY(i));
      expect(live.length).toBeGreaterThan(0);
      expect(Math.max(...live)).toBeGreaterThan(-PART_SCALE);
      expect(Math.max(...live)).toBeLessThanOrEqual(0);
      flame.dispose();
    }
    random.mockRestore();
  });

  it('hides all exhaust when the engine stops and shows it again on ignition', () => {
    const flame = new EngineFlame();
    expect(flame.getMesh().visible).toBe(false);
    flame.start(); flame.update(1 / 60);
    expect(flame.getMesh().visible).toBe(true);
    flame.stop();
    expect(flame.getMesh().visible).toBe(false);
    flame.start(); flame.update(1 / 60);
    expect(flame.getMesh().visible).toBe(true);
    flame.dispose();
  });
});

it('emits from both side nozzles without allocating another particle system', () => {
 vi.spyOn(Math, 'random').mockReturnValue(.5);
 const f:any=new EngineFlame();
 try {
 f.setNozzles([new THREE.Vector3(-.1,0,0),new THREE.Vector3(.1,0,0)]);f.start();f.update(1/60);
 const mesh=f.getMesh().children[0] as THREE.Points;
 const pos=mesh.geometry.attributes.position!, color=mesh.geometry.attributes.color!;
 const x=[];for(let i=0;i<pos.count;i++)if(color.getX(i)>0)x.push(pos.getX(i));
 expect(Math.min(...x)).toBeCloseTo(-.1);expect(Math.max(...x)).toBeCloseTo(.1);
 expect(pos.count).toBe(900);
 }finally{f.dispose();}
});
