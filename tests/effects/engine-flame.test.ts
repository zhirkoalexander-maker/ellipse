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
