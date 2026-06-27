import { describe, it, expect } from 'vitest';
import { buildPartMesh } from '../../src/parts/PartBuilder';
import { findPart } from '../../src/parts/PartCatalog';

describe('PartBuilder', () => {
  it('returns a Group for each part kind', () => {
    const ids = ['capsule_mk1', 'tank_m_lfo', 'engine_ant', 'parachute_mk16', 'legs_landini'];
    for (const id of ids) {
      const p = findPart(id);
      expect(p).toBeDefined();
      const g = buildPartMesh(p!);
      expect(g.type).toBe('Group');
    }
  });

  it('capsule group has at least 1 mesh (the body)', () => {
    const p = findPart('capsule_mk1')!;
    const g = buildPartMesh(p);
    let meshCount = 0;
    g.traverse((o) => { if (o.type === 'Mesh') meshCount++; });
    expect(meshCount).toBeGreaterThan(0);
  });
});
