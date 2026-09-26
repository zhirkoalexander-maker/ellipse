import { afterEach, expect, it, vi } from 'vitest';
afterEach(()=>{vi.useRealTimers();});
it('plays through the lesson, pauses, and remembers dismissal',async()=>{
 vi.resetModules();
 const { Tutorial, shouldShowTutorial } = await import('../../src/ui/Tutorial');
 vi.useFakeTimers();localStorage.removeItem('ellipse_tutorial_seen');
 expect(shouldShowTutorial()).toBe(true);
 const closed=vi.fn(),tutorial=new Tutorial(closed);
 expect(document.querySelector('.tutorial h2')!.textContent).toBe('Start here');
 vi.advanceTimersByTime(9000);
 expect(document.querySelector('.tutorial h2')!.textContent).toBe('Build a rocket');
 document.querySelector<HTMLButtonElement>('[data-tutorial=pause]')!.click();
 vi.advanceTimersByTime(18000);
 expect(document.querySelector('.tutorial h2')!.textContent).toBe('Build a rocket');
 document.querySelector<HTMLButtonElement>('[data-tutorial=next]')!.click();
 expect(document.querySelector('.tutorial h2')!.textContent).toBe('Lift off');
 document.querySelector<HTMLButtonElement>('[data-tutorial=skip]')!.click();
 expect(closed).toHaveBeenCalledOnce();expect(shouldShowTutorial()).toBe(false);
 expect(document.querySelector('.tutorial')).toBeNull();expect(vi.getTimerCount()).toBe(0);
 tutorial.dispose();
});
it('cleans up playback when its menu is removed',async()=>{
 const { Tutorial } = await import('../../src/ui/Tutorial');
 vi.useFakeTimers();const tutorial=new Tutorial(()=>{});tutorial.dispose();
 expect(vi.getTimerCount()).toBe(0);expect(document.querySelector('.tutorial')).toBeNull();
});
