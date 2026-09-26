import { expect, it } from 'vitest';
import { PART_CATALOG, findPart } from '../../src/parts/PartCatalog';
it('offers only the game-designed parts without imported vehicles',()=>{
 expect(PART_CATALOG.some(p=>String(p.kind)==='gltf')).toBe(false);
 for(const id of ['saturn_v','atlas_6','atlas_9','crawler','agena_target','apollo_soyuz','ares_1','apollo_lunar_module'])expect(findPart(id)).toBeUndefined();
});
