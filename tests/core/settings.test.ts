import {it,expect,vi} from 'vitest';
import {loadSettings} from '../../src/ui/Settings';
it('ignores invalid settings and survives blocked storage',()=>{
 localStorage.setItem('ellipse_settings',JSON.stringify({autoSave:'false',sfxVolume:8}));expect(loadSettings().autoSave).toBe(true);expect(loadSettings().sfxVolume).toBeLessThanOrEqual(1);
 vi.stubGlobal('localStorage',{getItem:()=>{throw new Error('blocked');}});
 try{expect(loadSettings().autoSave).toBe(true);}finally{vi.unstubAllGlobals();localStorage.removeItem('ellipse_settings');}
});
