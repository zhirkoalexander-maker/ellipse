import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Stars } from '../../src/effects/Stars';

describe('Stars', () => {
  it('creates a Group with sky dome', () => {
    const stars = new Stars();
    const group = stars.getMesh();
    expect(group.type).toBe('Group');
    expect(group.children.length).toBe(1);
    const sky = group.children[0] as THREE.Mesh;
    expect(sky.type).toBe('Mesh');
    expect((sky.material as THREE.ShaderMaterial).type).toBe('ShaderMaterial');
  });
});
