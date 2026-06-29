import { describe, it, expect } from 'vitest';
import { EngineFlame } from '../../src/effects/EngineFlame';

describe('EngineFlame', () => {
  it('creates a Points object', () => {
    const flame = new EngineFlame();
    expect(flame.getMesh().type).toBe('Points');
  });

  it('updates particle positions over time', () => {
    const flame = new EngineFlame();
    flame.start();
    const posBefore = new Float32Array(flame.getMesh().geometry.attributes.position!.array);
    flame.update(0.1);
    const posAfter = new Float32Array(flame.getMesh().geometry.attributes.position!.array);
    expect(posBefore).not.toEqual(posAfter);
  });
});
