import { describe, it, expect, beforeEach } from 'vitest';
import { Achievements } from '../../src/core/Achievements';

describe('Achievements', () => {
  beforeEach(() => { localStorage.clear(); });

  it('unlock persists to localStorage', () => {
    const a = new Achievements();
    a.unlock('first_launch');
    expect(a.isUnlocked('first_launch')).toBe(true);
  });

  it('isUnlocked returns false for unknown', () => {
    const a = new Achievements();
    expect(a.isUnlocked('foo')).toBe(false);
  });

  it('list returns unlocked ids', () => {
    const a = new Achievements();
    a.unlock('first_launch');
    a.unlock('reach_space');
    expect(a.list().sort()).toEqual(['first_launch', 'reach_space']);
  });

  it('onUnlock callback fires once', () => {
    const a = new Achievements();
    let count = 0;
    a.onUnlock(() => count++);
    a.unlock('first_launch');
    a.unlock('first_launch');
    expect(count).toBe(1);
  });
});
