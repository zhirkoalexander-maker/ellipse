import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { migrateLegacySaves, storageKey } from '../../src/storage/MigrateLegacySaves';

beforeEach(() => localStorage.clear());
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); localStorage.clear(); migrateLegacySaves(); });

it('keeps existing progress, designs and the last build through the rename', () => {
  const entries = {
    ellipse_flight_save: '{"flight":1}', ellipse_settings: '{"autoSave":false}',
    ellipse_achievements: '["launch"]', ellipse_missions_completed: '["land_moon"]',
    ellipse_player_counted_v1: 'pending', ellipse_tutorial_seen: '1',
    ellipse_assemblies: '["My rocket","ellipse_assembly_last"]',
    'ellipse_assembly_My rocket': '[1]', ellipse_assembly_ellipse_assembly_last: '[2]',
  };
  for (const [key, value] of Object.entries(entries)) localStorage.setItem(key, value);
  migrateLegacySaves();
  for (const suffix of ['flight_save','settings','achievements','missions_completed','player_counted_v1','tutorial_seen']) {
    expect(localStorage.getItem('challenger_' + suffix)).toBe(localStorage.getItem('ellipse_' + suffix));
  }
  expect(localStorage.getItem('challenger_assemblies')).toBe('["My rocket","challenger_assembly_last"]');
  expect(localStorage.getItem('challenger_assembly_My rocket')).toBe('[1]');
  expect(localStorage.getItem('challenger_assembly_challenger_assembly_last')).toBe('[2]');
  expect(localStorage.getItem('ellipse_flight_save')).toBe(entries.ellipse_flight_save);
});

it('never overwrites new progress or resurrects deleted saves', () => {
  localStorage.setItem('ellipse_flight_save', 'old');
  localStorage.setItem('challenger_flight_save', 'new');
  migrateLegacySaves();
  expect(localStorage.getItem('challenger_flight_save')).toBe('new');
  localStorage.removeItem('challenger_flight_save');
  migrateLegacySaves();
  expect(localStorage.getItem('challenger_flight_save')).toBeNull();
});

it('does not block startup if storage is unavailable', () => {
  vi.stubGlobal('localStorage', { getItem: () => { throw new Error('blocked'); } });
  expect(() => migrateLegacySaves()).not.toThrow();
});

it('uses old saves if storage is full and retries without stale partial copies', () => {
  localStorage.setItem('ellipse_settings', '{"autoSave":false}');
  localStorage.setItem('ellipse_flight_save', 'old flight');
  const real = localStorage;
  vi.stubGlobal('localStorage', {
    get length() { return real.length; },
    key: (i: number) => real.key(i),
    getItem: (key: string) => real.getItem(key),
    removeItem: (key: string) => real.removeItem(key),
    setItem: (key: string, value: string) => {
      if (key === 'challenger_flight_save') throw new Error('quota');
      real.setItem(key, value);
    },
  });
  migrateLegacySaves();
  expect(localStorage.getItem(storageKey('flight_save'))).toBe('old flight');
  expect(localStorage.getItem('challenger_settings')).toBeNull();
  localStorage.setItem(storageKey('settings'), '{"autoSave":true}');
  vi.unstubAllGlobals();
  migrateLegacySaves();
  expect(storageKey('flight_save')).toBe('challenger_flight_save');
  expect(localStorage.getItem(storageKey('settings'))).toBe('{"autoSave":true}');
});
