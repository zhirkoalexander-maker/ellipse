import { expect, it, vi } from 'vitest';
import * as THREE from 'three';
import { PartThumbnails } from '../../src/parts/PartThumbnails';
import type { Part } from '../../src/parts/Part';

it('renders the current designs with one context, reuses encoded images and frees GPU resources', () => {
  const released: ReturnType<typeof vi.spyOn>[] = [];
  const canvas = document.createElement('canvas');
  vi.spyOn(canvas, 'toDataURL').mockReturnValue('data:image/png;base64,thumbnail');
  const renderer = {
    domElement: canvas, setSize: vi.fn(), setPixelRatio: vi.fn(), dispose: vi.fn(), forceContextLoss: vi.fn(),
    render: vi.fn((scene: THREE.Scene) => {
      expect(scene.children.some(o => o.userData.design === 'ceramic-flight')).toBe(true);
      scene.traverse(o => {
        if (o instanceof THREE.Mesh) released.push(vi.spyOn(o.geometry, 'dispose'));
      });
    }),
  };
  const create = vi.fn(() => renderer as unknown as THREE.WebGLRenderer);
  const parts: Part[] = [{ id: 'thumbnail-test-tank', name: 'Tank', kind: 'tank', size: 'S', mass: 1 }, { id: 'thumbnail-test-engine', name: 'Engine', kind: 'engine', size: 'S', mass: 1 }];
  const batch = new PartThumbnails(create);
  for (const part of parts) expect(batch.get(part)).toContain('data:image/png');
  expect(batch.get(parts[0]!)).toContain('data:image/png');
  expect(create).toHaveBeenCalledTimes(1);
  expect(renderer.render).toHaveBeenCalledTimes(2);
  expect(released.every(spy => spy.mock.calls.length === 1)).toBe(true);
  batch.dispose(); batch.dispose();
  expect(renderer.dispose).toHaveBeenCalledTimes(1);
  expect(renderer.forceContextLoss).toHaveBeenCalledTimes(1);
  const nextBatch = new PartThumbnails(create);
  expect(nextBatch.get(parts[0]!)).toContain('data:image/png');
  expect(create).toHaveBeenCalledTimes(1);
  nextBatch.dispose();
});

it('keeps the catalog usable when a graphics context cannot be allocated', () => {
  const create = vi.fn(() => { throw new Error('WebGL unavailable'); });
  const batch = new PartThumbnails(create);
  const part: Part = { id: 'no-webgl-preview', name: 'Tank', kind: 'tank', size: 'S', mass: 1 };
  expect(batch.get(part)).toBeUndefined();
  expect(batch.get(part)).toBeUndefined();
  expect(create).toHaveBeenCalledTimes(1);
  batch.dispose();
});
