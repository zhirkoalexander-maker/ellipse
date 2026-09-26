const MIGRATED = 'challenger_storage_migrated_v1';
const LEGACY_PREFIX = 'ellipse_';
const PREFIX = 'challenger_';
const LEGACY_LAST = 'ellipse_assembly_last';
const LAST = 'challenger_assembly_last';

let activePrefix = PREFIX;
export function storageKey(suffix: string): string { return activePrefix + suffix; }

/** Copy old browser data once; keep the originals in case a transfer is interrupted. */
export function migrateLegacySaves(): void {
  activePrefix = PREFIX;
  const copied: string[] = [];
  try {
    if (localStorage.getItem(MIGRATED) === '1') return;
    const keys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i));
    for (const key of keys) {
      if (!key?.startsWith(LEGACY_PREFIX)) continue;
      let target = PREFIX + key.slice(LEGACY_PREFIX.length);
      if (key === LEGACY_PREFIX + 'assembly_' + LEGACY_LAST) target = PREFIX + 'assembly_' + LAST;
      if (localStorage.getItem(target) !== null) continue;
      let value = localStorage.getItem(key);
      if (value === null) continue;
      if (key === LEGACY_PREFIX + 'assemblies') {
        try {
          const names: unknown = JSON.parse(value);
          if (Array.isArray(names)) value = JSON.stringify(names.map(name => name === LEGACY_LAST ? LAST : name));
        } catch { /* The save loader already handles malformed data. */ }
      }
      localStorage.setItem(target, value);
      copied.push(target);
    }
    localStorage.setItem(MIGRATED, '1');
  } catch {
    // Keep playing from the old data when copying would exceed the browser quota.
    // Roll back partial copies so the next attempt reads the latest old-format saves.
    for (const key of copied) { try { localStorage.removeItem(key); } catch {} }
    activePrefix = LEGACY_PREFIX;
  }
}
