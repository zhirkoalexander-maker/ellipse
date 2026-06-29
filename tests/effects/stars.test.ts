import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Stars } from '../../src/effects/Stars';

describe('Stars', () => {
  it('creates a Mesh with ShaderMaterial', () => {
    const stars = new Stars();
    const mesh = stars.getMesh();
    expect(mesh.type).toBe('Mesh');
    expect((mesh.material as THREE.ShaderMaterial).type).toBe('ShaderMaterial');
    expect(mesh.geometry.attributes.position!.count).toBeGreaterThan(0);
  });
});
