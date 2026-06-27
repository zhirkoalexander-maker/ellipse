import { describe, it, expect, beforeEach } from 'vitest';
import { saveAssembly, loadAssembly, listAssemblies } from '../../src/storage/SaveLoad';
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
