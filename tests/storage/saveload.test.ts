import { describe, it, expect, beforeEach, vi } from 'vitest';
import { saveAssembly, loadAssembly, listAssemblies, clearFlightSave } from '../../src/storage/SaveLoad';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';

describe('SaveLoad', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saveAssembly persists, loadAssembly retrieves', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0, 0], rotation: 0, children: [] });
    saveAssembly('myRocket', a);
    const loaded = loadAssembly('myRocket');
    expect(loaded).not.toBeNull();
    expect(loaded!.totalMass()).toBe(a.totalMass());
  });

  it('listAssemblies returns all saved names', () => {
    saveAssembly('r1', new Assembly());
    saveAssembly('r2', new Assembly());
    const names = listAssemblies();
    expect(names).toContain('r1');
    expect(names).toContain('r2');
  });

  it('loadAssembly returns null for unknown name', () => {
    expect(loadAssembly('nonexistent')).toBeNull();
  });
});

it('handles full storage and a damaged assembly index without throwing',()=>{
 localStorage.setItem('ellipse_assemblies','{}');expect(listAssemblies()).toEqual([]);
 const a=new Assembly();a.addRoot({part:findPart('capsule_mk1')!,position:[0,0,0],rotation:0,children:[]});
 vi.stubGlobal('localStorage',{getItem:localStorage.getItem.bind(localStorage),setItem:()=>{throw new Error('quota');}});
 try{expect(saveAssembly('test',a)).toBe(false);}finally{vi.unstubAllGlobals();}
});

it('can clear a flight when browser storage is blocked', () => {
  vi.stubGlobal('localStorage', {
    removeItem: () => { throw new DOMException('Storage blocked', 'SecurityError'); },
  });
  try { expect(() => clearFlightSave()).not.toThrow(); }
  finally { vi.unstubAllGlobals(); }
});
