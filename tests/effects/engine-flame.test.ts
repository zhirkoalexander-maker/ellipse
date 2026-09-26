import { describe, it, expect } from 'vitest';
import { EngineFlame } from '../../src/effects/EngineFlame';
import * as THREE from 'three';

describe('EngineFlame', () => {
  function getCorePoints(flame: EngineFlame): THREE.Points {
    const g = flame.getMesh();
    return g.children.find(c => c.type === 'Points') as THREE.Points;
  }

  it('creates a Group with Points children', () => {
    const flame = new EngineFlame();
    expect(flame.getMesh().type).toBe('Group');
    expect(getCorePoints(flame)).toBeDefined();
  });

  it('updates particle positions over time', () => {
    const flame = new EngineFlame();
    flame.start();
    const pts = getCorePoints(flame);
    const buf = pts.geometry.attributes.position!.array as Float32Array;
    const posBefore = new Float32Array(buf);
    flame.update(0.1);
    const posAfter = new Float32Array(buf);
    expect(posBefore).not.toEqual(posAfter);
  });
});

it('draws only live particles while keeping their order and shared plume data',()=>{
 const flame=new EngineFlame();flame.start();
 for(let i=0;i<30;i++)flame.update(1/60);
 const state=flame as any;
 const expected=Array.from(state.ages as Float32Array).flatMap((age,i)=>age<state.lifetimes[i]?[i]:[]);
 const [core,outer]=flame.getMesh().children as THREE.Points[];
 expect(core!.geometry.drawRange.count).toBe(expected.length);
 expect(Array.from(core!.geometry.index!.array).slice(0,expected.length)).toEqual(expected);
 expect(outer!.geometry.attributes.position===core!.geometry.attributes.position).toBe(true);
 expect(outer!.geometry.drawRange.count).toBe(expected.length);
 flame.stop();expect(core!.geometry.drawRange.count).toBe(0);expect(outer!.geometry.drawRange.count).toBe(0);
 flame.start();flame.update(1/60);expect(core!.geometry.drawRange.count).toBeGreaterThan(0);
 flame.dispose();
});
