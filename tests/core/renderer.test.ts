import { describe, it, expect } from 'vitest';
import { Renderer } from '../../src/core/Renderer';

describe('Renderer', () => {
  it('creates a WebGL canvas', () => {
    const r = new Renderer();
    expect(r.domElement.tagName).toBe('CANVAS');
    r.dispose();
  });
});
