import { describe, expect, it, vi } from 'vitest';
import { MainMenuScene } from '../../src/scenes/MainMenuScene';

describe('main menu continuation', () => {
  it('keeps Continue visible but disabled when no saved flight exists', () => {
    const play = vi.fn();
    const menu = new MainMenuScene(play, vi.fn(), vi.fn()); menu.mount();
    const button = [...document.querySelectorAll('button')].find(b => b.textContent === 'Continue');
    expect(button).toBeDefined();
    expect(button!.disabled).toBe(true);
    button!.click();
    expect(play).not.toHaveBeenCalled();
    menu.unmount();
  });

  it('Continue resumes the saved flight instead of starting a new one', () => {
    const play = vi.fn(), resume = vi.fn();
    const menu = new MainMenuScene(play, vi.fn(), vi.fn(), resume); menu.mount();
    const button = [...document.querySelectorAll('button')].find(b => b.textContent === 'Continue')!;
    expect(button.disabled).toBe(false);
    button.click();
    expect(resume).toHaveBeenCalledOnce();
    expect(play).not.toHaveBeenCalled();
    menu.unmount();
  });
});

it('removes mission overlays and score subscriptions when leaving the menu',async()=>{
 const {Missions}=await import('../../src/core/Missions');const missions=new Missions();
 const menu=new MainMenuScene(vi.fn(),vi.fn(),vi.fn(),undefined,missions);menu.mount();
 [...document.querySelectorAll('button')].find(b=>b.textContent==='Missions')!.click();
 expect(document.querySelector('.guide-overlay')).not.toBeNull();
 menu.unmount();expect(document.querySelector('.guide-overlay')).toBeNull();
 expect((missions as any).onScoreChange).toHaveLength(0);
});
