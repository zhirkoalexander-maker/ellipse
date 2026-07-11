import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Stars } from '../../src/effects/Stars';

describe('Stars', () => {
  it('creates a Group with sky dome and star points', () => {
    const stars = new Stars();
    const group = stars.getMesh();
    expect(group.type).toBe('Group');
    expect(group.children.length).toBe(2);
    const sky = group.children[0] as THREE.Mesh;
    expect(sky.type).toBe('Mesh');
    expect((sky.material as THREE.ShaderMaterial).type).toBe('ShaderMaterial');
    const points = group.children[1] as THREE.Points;
    expect(points.type).toBe('Points');
  });
});
