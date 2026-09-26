const KEY = 'ellipse_player_counted_v1';
const BASE = 'https://abacus.jasoncameron.dev';
const COUNTER = 'zhirkoalexander-maker.github.io/ellipse-players';

/** Progress stays local. The service receives only the public counter path. */
export async function readPlayerCount(fetcher: typeof fetch = fetch): Promise<number|null> {
  const read = async (): Promise<number|null> => {
    let counted = true;
    try {
      const marker = localStorage.getItem(KEY);
      counted = marker === '1' || marker === 'pending';
      // Without persistent storage we cannot distinguish a return visit.
      // Reserve before the non-idempotent hit: a lost response must not count twice.
      if (!counted) { localStorage.setItem(KEY, 'pending'); }
    } catch { counted = true; }
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), 8000);
    try {
      const response = await fetcher(`${BASE}/${counted ? 'get' : 'hit'}/${COUNTER}`, {
        signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store',
      });
      if (!response.ok) return null;
      const data = await response.json();
      if (!Number.isSafeInteger(data.value) || data.value < 0) return null;
      if (!counted) try { localStorage.setItem(KEY, '1'); } catch {}
      return data.value;
    } catch { return null; }
    finally { clearTimeout(timeout); }
  };
  // Simultaneous first visits in two tabs should register only once.
  if (navigator.locks?.request) return navigator.locks.request(KEY, read);
  return read();
}
