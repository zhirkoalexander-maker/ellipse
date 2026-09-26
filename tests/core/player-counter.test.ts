import { beforeEach, expect, it, vi } from 'vitest';
import { readPlayerCount } from '../../src/core/PlayerCount';
beforeEach(()=>localStorage.clear());
it('registers a browser once and reads the shared count on return without touching saves',async()=>{
 localStorage.setItem('challenger_flight_save','my flight');localStorage.setItem('challenger_missions_completed','["land_moon"]');
 const fetcher=vi.fn().mockResolvedValue({ok:true,json:async()=>({value:17})});
 expect(await readPlayerCount(fetcher)).toBe(17);
 expect(fetcher.mock.calls[0]![0]).toContain('/hit/');
 expect(await readPlayerCount(fetcher)).toBe(17);
 expect(fetcher.mock.calls[1]![0]).toContain('/get/');
 expect(localStorage.getItem('challenger_flight_save')).toBe('my flight');
 expect(localStorage.getItem('challenger_missions_completed')).toBe('["land_moon"]');
});
it('does not register twice after a lost response or invent a total',async()=>{
 const fetcher=vi.fn().mockResolvedValueOnce({ok:false}).mockResolvedValueOnce({ok:true,json:async()=>({value:8})});
 expect(await readPlayerCount(fetcher)).toBeNull();
 expect(await readPlayerCount(fetcher)).toBe(8);
 expect(fetcher.mock.calls[0]![0]).toContain('/hit/');
 expect(fetcher.mock.calls[1]![0]).toContain('/get/');
});
