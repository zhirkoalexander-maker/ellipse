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

  it('reorders and removes individual parts without leaving gaps', () => {
    vab = new VABScene(() => {}, () => {}); vab.mount();
    addParts(['engine_ant', 'tank_s_lfo', 'capsule_mk1']);
    document.querySelector<HTMLButtonElement>('[data-move-up="1"]')!.click();
    expect(vab.assembly.roots.map(n => n.part.id)).toEqual(['engine_ant', 'capsule_mk1', 'tank_s_lfo']);
    document.querySelector<HTMLButtonElement>('[data-remove="1"]')!.click();
    expect(vab.assembly.roots.map(n => n.part.id)).toEqual(['engine_ant', 'tank_s_lfo']);
    expect(vab.assembly.roots[1]!.position[1] - vab.assembly.roots[0]!.position[1]).toBeCloseTo(1.4 * PART_SCALE);
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

it('shows engine thrust in the catalog kN units without dividing by 1000', () => {
  const vab = new VABScene(() => {}, () => {}); vab.mount();
  try {
    const engine = findPart('engine_ant')!;
    const button = Array.from(document.querySelectorAll('button')).find(b => b.title === `Add ${engine.name}`)!;
    expect(button.textContent).toContain(`${engine.thrust} kN`);
  } finally { vab.unmount(); }
});

it('frames the whole starter rocket inside the free viewport on a portrait phone', () => {
  const oldWidth=innerWidth,oldHeight=innerHeight;
  Object.defineProperty(window,'innerWidth',{value:390,configurable:true});
  Object.defineProperty(window,'innerHeight',{value:844,configurable:true});
  const vab = new VABScene(() => {}, () => {}); vab.mount();
  try {
    const scene=vab as any;
    for (const id of ['engine_ant','tank_s_lfo','tank_s_lfo','capsule_mk1']) scene.add(findPart(id)!);
    vab.camera.updateMatrixWorld();
    const box=new THREE.Box3().setFromObject(scene.rg);
    for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){
      const p=new THREE.Vector3(x,y,z).project(vab.camera);
      const screenX=(p.x+1)*390/2;
      expect(screenX).toBeGreaterThan(156);
      expect(screenX).toBeLessThan(390);
      expect(Math.abs(p.y)).toBeLessThan(1);
    }
  } finally {
    vab.unmount();
    Object.defineProperty(window,'innerWidth',{value:oldWidth,configurable:true});
    Object.defineProperty(window,'innerHeight',{value:oldHeight,configurable:true});
  }
});
it('treats saved rocket names as text and fits when the canvas is double-clicked',async()=>{
 const {saveAssembly}=await import('../src/storage/SaveLoad');const v=new VABScene(()=>{},()=>{});v.mount();
 try{
  (v as any).add(findPart('capsule_mk1')!);saveAssembly('<b>Explorer</b>',v.assembly);(v as any).showLoadDialog();
  expect(document.querySelector('#load-list b')).toBeNull();expect(document.querySelector('#load-list')!.textContent).toContain('<b>Explorer</b>');
  document.querySelector('.guide-overlay')?.remove();const c=document.createElement('canvas');document.body.append(c);
  (v as any).dt=20;(v as any).cam();c.dispatchEvent(new MouseEvent('dblclick',{bubbles:true}));
  expect((v as any).dt).toBeLessThan(2);c.remove();
 }finally{v.unmount();document.querySelectorAll('.guide-overlay').forEach(e=>e.remove());}
});

it('quick start builds only game parts and releases the old preview on rebuild and exit',()=>{
 const vab=new VABScene(()=>{},()=>{});vab.mount();
 try{
  const preset=[...document.querySelectorAll('button')].find(b=>b.textContent?.includes('Build a rocket'));
  expect(preset).toBeDefined();preset!.click();
  expect(vab.assembly.roots.map(n=>n.part.id)).toEqual(['engine_ant','tank_s_lfo','tank_s_lfo','capsule_mk1']);
  const group=(vab as any).rg as THREE.Group;
  let disposed=0;group.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.addEventListener('dispose',()=>disposed++);});
  preset!.click();expect(disposed).toBeGreaterThan(0);
  let finalDisposed=0;group.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.addEventListener('dispose',()=>finalDisposed++);});
  vab.unmount();expect(finalDisposed).toBeGreaterThan(0);
 }finally{vab.unmount();}
});

it('disposes preview geometries when adding another part',()=>{
 const vab=new VABScene(()=>{},()=>{});vab.mount();
 try{
  (vab as any).add(findPart('engine_ant')!);
  let disposed=0;((vab as any).rg as THREE.Group).traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.addEventListener('dispose',()=>disposed++);});
  (vab as any).add(findPart('tank_s_lfo')!);
  expect(disposed).toBeGreaterThan(0);
 }finally{vab.unmount();}
});
