import { describe, it, expect } from 'vitest';
import { PART_CATALOG, findPart } from '../../src/parts/PartCatalog';

describe('PartCatalog', () => {
  it('has at least 7 parts (MVP subset)', () => {
    expect(PART_CATALOG.length).toBeGreaterThanOrEqual(7);
  });

  it('every part has id, name, kind, size, mass', () => {
    for (const p of PART_CATALOG) {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.kind).toBeTruthy();
      expect(p.size).toBeTruthy();
      expect(p.mass).toBeGreaterThan(0);
    }
  });

  it('capsule has crew capacity, no fuel', () => {
    const c = PART_CATALOG.find((p) => p.kind === 'capsule')!;
    expect(c.crewCapacity).toBeGreaterThan(0);
    expect(c.fuelCapacity).toBeUndefined();
  });

  it('tank has fuel capacity and type', () => {
    const t = PART_CATALOG.find((p) => p.kind === 'tank')!;
    expect(t.fuelCapacity).toBeGreaterThan(0);
    expect(t.fuelType).toBeTruthy();
  });

  it('engine has thrust and isp', () => {
    const e = PART_CATALOG.find((p) => p.kind === 'engine')!;
    expect(e.thrust).toBeGreaterThan(0);
    expect(e.isp).toBeGreaterThan(0);
  });

  it('findPart returns by id', () => {
    const p = findPart('tank_m_lfo');
    expect(p).toBeDefined();
    expect(p?.id).toBe('tank_m_lfo');
  });
});
