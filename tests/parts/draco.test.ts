import { expect, it } from 'vitest';
import { assetUrl } from '../../src/config/constants';
import { gltfLoader } from '../../src/parts/PartBuilder';
it('supports preserved Draco-compressed GLB models with a local decoder', () => {
  expect(gltfLoader.dracoLoader).toBeTruthy();
  expect((gltfLoader.dracoLoader as unknown as { decoderPath: string }).decoderPath).toBe(assetUrl('/draco/'));
});
