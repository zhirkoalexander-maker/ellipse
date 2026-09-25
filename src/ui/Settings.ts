import type { Settings } from '../config/settings';
import { DEFAULT_SETTINGS } from '../config/settings';
import { Lifetime } from '../core/Lifetime';
import { toast } from './Toast';
const KEY = 'ellipse_settings';

export function loadSettings(): Settings {
  try {
    const value=JSON.parse(localStorage.getItem(KEY) ?? '{}');
    return {...DEFAULT_SETTINGS,
      autoSave:typeof value?.autoSave==='boolean'?value.autoSave:DEFAULT_SETTINGS.autoSave,
      sfxVolume:typeof value?.sfxVolume==='number'&&Number.isFinite(value.sfxVolume)?Math.max(0,Math.min(1,value.sfxVolume)):DEFAULT_SETTINGS.sfxVolume};
  } catch { return {...DEFAULT_SETTINGS}; }
}
export function saveSettings(settings: Settings): boolean {
  try { localStorage.setItem(KEY,JSON.stringify(settings));return true; } catch { return false; }
}

export class SettingsPanel {
  private root=document.createElement('div');
  private life=new Lifetime();
  constructor(current: Settings, onClose:()=>void) {
    this.root.className='settings-overlay';
    this.root.style.cssText='position:fixed;inset:0;z-index:9999;background:#060814e0;display:grid;place-items:center';
    const card=document.createElement('div');card.className='panel panel--elevated';
    card.style.cssText='width:min(360px,calc(100vw - 24px));box-sizing:border-box;padding:24px;max-height:90dvh;overflow:auto';
    card.innerHTML='<h2>Settings</h2><label style="display:flex;justify-content:space-between;gap:16px;margin:20px 0">Save flights automatically<input type="checkbox" id="settings-autosave"></label><label style="display:flex;justify-content:space-between;gap:16px;margin:20px 0">Sound effects<input type="checkbox" id="settings-sound"></label><p style="font-size:13px;color:#aab5c2">Flight saves stay in this browser. Turning this off keeps existing saves. Named rocket designs are saved separately.</p><button class="btn btn--primary" style="width:100%;padding:12px">Done</button>';
    const auto=card.querySelector<HTMLInputElement>('#settings-autosave')!,sound=card.querySelector<HTMLInputElement>('#settings-sound')!;
    auto.checked=current.autoSave;sound.checked=current.sfxVolume>0;
    const close=()=>{if(!saveSettings({...current,autoSave:auto.checked,sfxVolume:sound.checked ? .8 : 0}))toast.show('Could not save settings. Browser storage is unavailable.');onClose();};
    card.querySelector('button')!.addEventListener('click',close);
    this.life.listen(window,'keydown',e=>{if(e.key==='Escape'){e.stopImmediatePropagation();close();}},{capture:true});
    this.root.append(card);
  }
  mount(parent:HTMLElement=document.body):void {parent.append(this.root);}
  unmount():void {this.root.remove();this.life.dispose();}
}
