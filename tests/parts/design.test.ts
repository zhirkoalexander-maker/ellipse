import { expect, it } from 'vitest';
import { Box3, Vector3 } from 'three';
import { buildPartMesh, SIZE_DIMS } from '../../src/parts/PartBuilder';
import { PART_CATALOG } from '../../src/parts/PartCatalog';
it('keeps designed stack parts within their attachment slot', () => {
  for (const part of PART_CATALOG.filter(p => ['tank', 'engine', 'capsule', 'decoupler'].includes(p.kind))) {
    const mesh = buildPartMesh(part);
    expect(mesh.userData.design).toBe('ceramic-flight');
    const bounds = new Box3().setFromObject(mesh);
    const size = bounds.getSize(new Vector3());
    expect(size.y).toBeLessThanOrEqual(SIZE_DIMS[part.size].height * 1.01);
    expect(size.y).toBeGreaterThan(SIZE_DIMS[part.size].height * 0.9);
  }
});
it('gives the starter capsule a smooth transition into its small tanks', () => {
  const capsule = buildPartMesh(PART_CATALOG.find(p => p.id === 'capsule_mk1')!);
  const tank = buildPartMesh(PART_CATALOG.find(p => p.id === 'tank_s_lfo')!);
  const capsuleWidth = new Box3().setFromObject(capsule).getSize(new Vector3()).x;
  const tankWidth = new Box3().setFromObject(tank).getSize(new Vector3()).x;
  expect(capsuleWidth / tankWidth).toBeLessThan(1.2);
});
