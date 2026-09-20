import { describe, it, expect, afterEach } from 'vitest';
import * as THREE from 'three';
import { VABScene } from '../src/scenes/VABScene';
import { findPart } from '../src/parts/PartCatalog';
import { PART_SCALE } from '../src/config/constants';

describe('VAB camera framing', () => {
  let vab: VABScene | null = null;

  afterEach(() => {
    vab?.unmount();
    vab = null;
  });

  function addParts(ids: string[]): void {
    const scene = vab as any;
    for (const id of ids) scene.add(findPart(id)!);
  }

  function bboxSize(): THREE.Vector3 {
    const scene = vab as any;
    const box = new THREE.Box3().setFromObject(scene.rg);
    return box.getSize(new THREE.Vector3());
  }

  function cameraDistance(): number {
    const scene = vab as any;
    return scene.camera.position.distanceTo(scene.tg);
  }

  it('single part fills a large share of the view', () => {
    vab = new VABScene(() => {}, () => {});
    vab.mount();
    addParts(['capsule_mk1']);
    const size = bboxSize();
    // Camera must be close: roughly 1.2x the part span, not units away
    expect(cameraDistance()).toBeLessThan(size.y * 3 + 0.2);
    expect(cameraDistance()).toBeLessThan(0.6);
    // Target must be INSIDE the rendered mesh bounds (com-shifted!)
    const scene = vab as any;
    const box = new THREE.Box3().setFromObject(scene.rg);
    expect(scene.tg.y).toBeGreaterThan(box.min.y - 0.01);
    expect(scene.tg.y).toBeLessThan(box.max.y + 0.01);
  });

  it('multi-part stack: camera scales with the actual mesh, not raw stack coords', () => {
    vab = new VABScene(() => {}, () => {});
    vab.mount();
    addParts(['engine_mammoth', 'tank_xl_lfo', 'decoupler_l', 'tank_l_lfo']);
    const size = bboxSize();
    const d = cameraDistance();
    // toMesh() com-centres the stack, so the mesh is NOT at raw stack Y —
    // framing must follow the real bbox. Distance ~ 1.25x span.
    expect(d).toBeGreaterThan(size.y * 0.5);
    expect(d).toBeLessThan(size.y * 2.5);
    // A 4-part XL/L stack is ~0.5+ world units tall — camera must be closer
    // than the old frozen distance of 5 by an order of magnitude.
    expect(d).toBeLessThan(1.5);
    expect(size.y).toBeGreaterThan(0.3);
  });

  it('wheel zoom changes distance', () => {
    vab = new VABScene(() => {}, () => {});
    vab.mount();
    addParts(['capsule_mk1']);
    const before = cameraDistance();
    const scene = vab as any;
    scene._onWheel({ deltaY: -100, target: document.body } as unknown as WheelEvent);
    expect(cameraDistance()).toBeLessThan(before);
  });

  it('scrolling the parts LIST must NOT zoom the camera out', () => {
    vab = new VABScene(() => {}, () => {});
    vab.mount();
    addParts(['capsule_mk1', 'tank_s_lfo']);
    const before = cameraDistance();
    const scene = vab as any;
    // Wheel event targeting an element inside the sidebar list (#vl)
    const listEl = document.querySelector('#vl') as Element;
    expect(listEl).not.toBeNull();
    for (let i = 0; i < 10; i++) {
      scene._onWheel({ deltaY: 120, target: listEl } as unknown as WheelEvent);
    }
    expect(cameraDistance()).toBe(before); // unchanged — list scroll ≠ zoom
  });
});
