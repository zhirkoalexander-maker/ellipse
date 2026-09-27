import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Stars } from '../../src/effects/Stars';
import { SceneManager } from '../../src/core/SceneManager';

describe('Stars', () => {
  it('keeps the sky between camera clipping planes at distant zoom', () => {
    const manager = new SceneManager();
    manager.camera.near = 1e6; manager.camera.far = 4e9;
    manager.update(1 / 60);
    const sky = manager.scene.children.find(o => o.type === 'Group')!;
    const radius = 50000 * sky.scale.x;
    expect(radius).toBeGreaterThan(manager.camera.near * 2);
    expect(radius).toBeLessThan(manager.camera.far);
  });
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
