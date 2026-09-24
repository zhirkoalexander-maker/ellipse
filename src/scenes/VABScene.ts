import { PartThumbnails } from '../parts/PartThumbnails';
import * as THREE from 'three';
import { PART_CATALOG } from '../parts/PartCatalog';
import { Assembly } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { PART_SCALE } from '../config/constants';
import { gltfCache } from '../parts/PartBuilder';
import { saveAssembly, loadAssembly, listAssemblies, deleteAssembly, saveLastAssembly } from '../storage/SaveLoad';
import { toast } from '../ui/Toast';

// Part stacking heights — MUST match PartBuilder SIZE_DIMS heights (×PART_SCALE)
const PH: Record<string,number> = { S:1.4, M:2.0, L:2.8, XL:3.6 };

export class VABScene {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 0.01, 1000);
  assembly = new Assembly();
  private rg = new THREE.Group();
  private root!: HTMLDivElement;
  private info!: HTMLElement;
  private st = 0;
  private nm: string[] = [];
  private az = 0; private po = Math.PI/2; private dt = 1.5;
  private dr = false; private pr = { x:0, y:0 };
  private tg = new THREE.Vector3(0, PART_SCALE, 0);
  private _onDown!: (e: MouseEvent) => void;
  private _onMove!: (e: MouseEvent) => void;
  private _onUp!: (e: MouseEvent) => void;
  private _onWheel!: (e: WheelEvent) => void;
  private _onDbl!: (e: MouseEvent) => void;
  private _onTStart!: (e: TouchEvent) => void;
  private _onTMove!: (e: TouchEvent) => void;
  private _onTEnd!: (e: TouchEvent) => void;
  private _onResize!: () => void;
  private _pinchDist = 0;

  constructor(private ol: (a:Assembly)=>void, private ob: ()=>void) {
    this.scene.background = new THREE.Color(0x080c16);
    this.scene.add(new THREE.AmbientLight(0x445566, 0.5));
    const d = new THREE.DirectionalLight(0xffffff, 2.5); d.position.set(2,5,4); this.scene.add(d);
    this.scene.add(new THREE.HemisphereLight(0x8899bb, 0x334455, 0.5));
    this.scene.add(this.rg); this.cam();

    this._onDown = (e:MouseEvent) => {
      // Don't start orbit-drag from UI element presses (zoom buttons, sidebar)
      const t = e.target as Element | null;
      if (t && t.closest && t.closest('button, input, select, #vl, #vi')) return;
      if(e.button===0){this.dr=true;this.pr={x:e.clientX,y:e.clientY};}
    };
    this._onMove = (e:MouseEvent) => { if(!this.dr)return; this.az-=(e.clientX-this.pr.x)*0.005; this.po=Math.max(0.05,Math.min(Math.PI-0.05,this.po+(e.clientY-this.pr.y)*0.005)); this.pr={x:e.clientX,y:e.clientY}; this.cam(); };
    this._onUp = () => this.dr=false;
    // Wheel zoom — v3.9 accidentally froze the camera at a fixed distance
    // while rockets kept getting taller, making everything tiny on screen.
    this._onWheel = (e:WheelEvent) => {
      if (this.root && !this.root.isConnected) return;
      // Only zoom when the wheel is over the 3D view — scrolling the PARTS
      // LIST must not silently zoom the camera out (that kept making the
      // rocket look tiny for no visible reason).
      const t = e.target as Element | null;
      if (t && t.closest && t.closest('#vl, #vi, button, input, select, .guide-overlay')) return;
      this.dt = Math.max(0.12, Math.min(40, this.dt * (e.deltaY > 0 ? 1.15 : 0.87)));
      this.cam();
    };
    // Double-click on empty canvas → re-frame the rocket
    this._onDbl = (e:MouseEvent) => { if (e.target === document.body) this.frame(); };
    // Pinch zoom for touch devices (no wheel there)
    const tDist = (e:TouchEvent) => Math.hypot(
      e.touches[0]!.clientX - e.touches[1]!.clientX,
      e.touches[0]!.clientY - e.touches[1]!.clientY
    );
    this._onTStart = (e:TouchEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest && t.closest('#vl, #vi, button, input, select, .guide-overlay')) return;
      if (e.touches.length === 2) this._pinchDist = tDist(e);
    };
    this._onTMove = (e:TouchEvent) => {
      if (e.touches.length === 2 && this._pinchDist > 0) {
        const d = tDist(e);
        if (d > 0) {
          this.dt = Math.max(0.12, Math.min(40, this.dt * (this._pinchDist / d)));
          this._pinchDist = d;
          this.cam();
        }
      }
    };
    this._onTEnd = () => { this._pinchDist = 0; };
    // Keep aspect correct on window resize
    this._onResize = () => {
      this.camera.aspect = innerWidth / innerHeight;
      this.frame();
    };
    document.addEventListener('mousedown', this._onDown);
    document.addEventListener('mousemove', this._onMove);
    document.addEventListener('mouseup', this._onUp);
    document.addEventListener('wheel', this._onWheel, { passive: true });
    document.addEventListener('dblclick', this._onDbl);
    document.addEventListener('touchstart', this._onTStart, { passive: true });
    document.addEventListener('touchmove', this._onTMove, { passive: true });
    document.addEventListener('touchend', this._onTEnd, { passive: true });
    window.addEventListener('resize', this._onResize);

    this.root = document.createElement('div');
    this.root.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.root.innerHTML = `
      <div style="width:clamp(148px,40vw,260px);flex-shrink:0;background:rgba(8,12,22,0.98);border-right:1px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:18px 16px;border-bottom:1px solid rgba(255,255,255,0.15);">
          <div style="font:200 15px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.1em;">Assembly</div>
          <div id="vi" style="margin-top:10px;font:400 9px/1.5 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.7);min-height:32px;">select parts</div>
        </div>
        <div id="vl" style="flex:1;overflow-y:auto;padding:8px 0;"></div>
        <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;gap:6px;">
          <button id="vg" style="width:100%;padding:12px;background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 12px system-ui;letter-spacing:0.08em;cursor:pointer;transition:all 0.2s;">Launch</button>
          <div style="display:flex;gap:4px;">
            <button id="vu" style="flex:1;padding:8px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.15);font:400 10px system-ui;cursor:pointer;">Undo</button>
            <button id="vc" style="flex:1;padding:8px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.15);font:400 10px system-ui;cursor:pointer;">Clear</button>
          </div>
          <div style="display:flex;gap:4px;">
            <button id="vs" style="flex:1;padding:8px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 10px system-ui;cursor:pointer;">Save</button>
            <button id="vlb" style="flex:1;padding:8px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 10px system-ui;cursor:pointer;">Load</button>
          </div>
          <button id="vb" style="width:100%;padding:8px;background:transparent;color:#fff;border:none;font:400 10px system-ui;cursor:pointer;">Back</button>
        </div>
      </div>
      <div style="flex:1;"></div>
      <div style="position:absolute;right:18px;bottom:18px;display:flex;flex-direction:column;gap:6px;pointer-events:auto;">
        <button id="vz-in" title="Zoom in" style="width:40px;height:40px;border-radius:8px;background:rgba(8,12,22,0.85);color:#fff;border:1px solid rgba(255,255,255,0.25);font:400 18px system-ui;cursor:pointer;">＋</button>
        <button id="vz-out" title="Zoom out" style="width:40px;height:40px;border-radius:8px;background:rgba(8,12,22,0.85);color:#fff;border:1px solid rgba(255,255,255,0.25);font:400 18px system-ui;cursor:pointer;">－</button>
      <button id="vz-fit" title="Fit whole rocket" style="width:40px;height:40px;border-radius:8px;background:rgba(200,152,56,0.25);color:#EACD9E;border:1px solid rgba(200,152,56,0.45);font:600 10px system-ui;cursor:pointer;">Fit</button>
      </div>`;
    this.info = this.root.querySelector('#vi')!;
    this.build();
    this.root.querySelector('#vg')!.addEventListener('click', () => {
      if(this.assembly.roots.length) {
        saveLastAssembly(this.assembly);
        this.ol(this.assembly);
      } else {
        toast.show('Add parts first!');
      }
    });
    this.root.querySelector('#vu')!.addEventListener('click', () => this.undo());
    this.root.querySelector('#vc')!.addEventListener('click', () => { this.assembly=new Assembly(); this.st=0; this.nm=[]; this.rf(); this.up(); });
    this.root.querySelector('#vs')!.addEventListener('click', () => this.showSaveDialog());
    this.root.querySelector('#vlb')!.addEventListener('click', () => this.showLoadDialog());
    this.root.querySelector('#vb')!.addEventListener('click', () => this.ob());
    // On-screen zoom controls — bulletproof against wheel/touch/event-target quirks
    this.root.querySelector('#vz-in')!.addEventListener('click', () => {
      this.dt = Math.max(0.12, this.dt * 0.8); this.cam();
    });
    this.root.querySelector('#vz-out')!.addEventListener('click', () => {
      this.dt = Math.min(40, this.dt * 1.25); this.cam();
    });
    this.root.querySelector('#vz-fit')!.addEventListener('click', () => this.frame());
  }

  private build() {
    const el = this.root.querySelector('#vl')!;
    const thumbnails = new PartThumbnails();

    // ─── PRESETS ───
    const presetHeader = document.createElement('div');
    presetHeader.textContent = 'PRESETS';
    presetHeader.style.cssText = 'font:400 8px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.15em;padding:10px 16px 4px;opacity:0.7;';
    el.appendChild(presetHeader);
    const presetBtn = document.createElement('button');
    presetBtn.innerHTML = `<span style="width:2px;height:12px;background:#EACD9E;border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.8;"></span><span style="vertical-align:middle;color:#fff;">Saturn V (2-stage)</span><span style="float:right;color:rgba(255,255,255,0.6);font-size:9px;margin-top:1px;">165000kN</span>`;
    presetBtn.style.cssText = 'display:block;width:100%;padding:7px 16px;background:transparent;color:#fff;border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;';
    presetBtn.addEventListener('mouseenter', () => { presetBtn.style.background='rgba(255,255,255,0.05)'; });
    presetBtn.addEventListener('mouseleave', () => { presetBtn.style.background='transparent'; });
    presetBtn.addEventListener('click', () => this.buildSaturnVPreset());
    el.appendChild(presetBtn);

    const groups = new Map<string,{parts:Part[],color:string}>();
    const cmap: Record<string,string> = { capsule:'#a0b0c0', tank:'#6090c0', engine:'#c08060', decoupler:'#c06070', parachute:'#60a070', legs:'#8090a0', heatshield:'#b08060', gltf:'#b080a0', fairing:'#a0c0e0', rcs:'#c0a0d0', solar:'#4080d0' };
    for (const p of PART_CATALOG) {
      if (!groups.has(p.kind)) groups.set(p.kind, {parts:[],color:cmap[p.kind]||'#888'});
      groups.get(p.kind)!.parts.push(p);
    }
    for (const [kind, g] of groups) {
      const h = document.createElement('div');
      h.textContent = kind.toUpperCase();
      h.style.cssText = 'font:400 8px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.15em;padding:10px 16px 4px;opacity:0.7;';
      el.appendChild(h);
      for (const p of g.parts) {
        const b = document.createElement('button');
        const has = p.kind==='engine'?`${Number(p.thrust!.toFixed(1))} kN · Isp ${p.isp}`:p.kind==='tank'?`${(p.fuelCapacity!/1000).toFixed(0)}t`:p.kind==='capsule'?`${(p.mass/1000).toFixed(1)}t`:p.kind==='rcs'?`${p.thrust}kN`:p.kind==='fairing'?'aero':'';
        const thumbnail = thumbnails.get(p);
        b.innerHTML = `${thumbnail ? `<img src="${thumbnail}" alt="" width="44" height="44" style="width:44px;height:44px;flex:none;object-fit:contain;background:rgba(255,255,255,0.025);border-radius:5px;">` : `<span style="width:3px;height:28px;flex:none;background:${g.color};border-radius:2px;"></span>`}<span style="min-width:0;flex:1;"><span style="display:block;color:#fff;line-height:1.3;">${p.name}</span><span style="display:block;color:rgba(255,255,255,0.6);font-size:9px;margin-top:4px;">${p.size}${has ? ' · '+has : ''}</span></span>`;
        b.title = `Add ${p.name}`;
        b.style.cssText = 'display:flex;align-items:center;gap:9px;width:100%;padding:5px 12px;background:transparent;color:#fff;border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;';
        b.addEventListener('mouseenter', () => { b.style.background='rgba(255,255,255,0.05)'; b.style.color='#fff'; });
        b.addEventListener('mouseleave', () => { b.style.background='transparent'; b.style.color='#fff'; });
        b.addEventListener('click', () => this.add(p));
        el.appendChild(b);
      }
    }
    thumbnails.dispose();
  }

  private add(p: Part) {
    const h = PH[p.size]||0.6; const y = this.st+h/2;
    this.assembly.addRoot({part:p,position:[0,y*PART_SCALE,0],rotation:0,children:[]});
    this.st+=h; this.nm.push(p.name); this.rf(); this.up();
  }

  /** One-click Saturn V: slim L-profile booster (TwinBoar + 2 L tanks) + decoupler + Saturn V upper stage. */
  private buildSaturnVPreset(): void {
    this.assembly = new Assembly(); this.st = 0; this.nm = [];
    const twinBoar = PART_CATALOG.find(p => p.id === 'engine_twinboar')!;
    const tankL = PART_CATALOG.find(p => p.id === 'tank_l_lfo')!;
    const decouplerL = PART_CATALOG.find(p => p.id === 'decoupler_l')!;
    const saturn = PART_CATALOG.find(p => p.id === 'saturn_v')!;
    // Stack bottom→top (same order as clicking parts manually)
    this.add(twinBoar);
    this.add(tankL);
    this.add(tankL);
    this.add(decouplerL);
    this.add(saturn);
    toast.show('Saturn V preset: 2-stage, press SPACE in flight to separate booster', 4000);
  }
  private undo() {
    if(!this.assembly.roots.length) return;
    const r = this.assembly.roots.pop()!; this.st-=PH[r.part.size]||0.6; this.nm.pop();
    this.rf(); this.up();
  }

  /** Auto-frame the camera on the ACTUAL rendered mesh. Assembly.toMesh()
   *  re-centres parts around the centre of mass, so the visual rocket is NOT
   *  at the raw stack coordinates — framing by stack height pointed the
   *  camera at empty space while the rocket sat tiny off-centre. */
  private frame(): void {
    const box = new THREE.Box3().setFromObject(this.rg);
    if (box.isEmpty()) { this.tg.set(0, PART_SCALE, 0); this.dt = 1.5; this.cam(); return; }
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const sidebar = Math.max(148, Math.min(260, innerWidth * 0.4));
    const usableAspect = Math.max(80, innerWidth - sidebar - 24) / innerHeight;
    const halfFov = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const verticalDistance = size.y / (2 * halfFov);
    const horizontalDistance = Math.max(size.x, size.z) / (2 * halfFov * usableAspect);
    this.tg.copy(center);
    this.dt = Math.max(0.16, Math.min(40, Math.max(verticalDistance, horizontalDistance) * 1.16 + Math.max(size.x,size.z) / 2));
    this.cam();
  }
  private up() {
    if(!this.nm.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.5);">select parts</span>';return;}
    const dm=this.assembly.roots.reduce((s,n)=>s+n.part.mass,0), fl=this.assembly.roots.reduce((s,n)=>s+(n.part.fuelCapacity||0),0);
    this.info.innerHTML=this.nm.map((n,i)=>`<span style="color:#fff;">${n}</span>`).join(' <span style="color:rgba(255,255,255,0.4);">&rarr;</span> ')+`<div style="margin-top:6px;font:400 8px system-ui;color:rgba(255,255,255,0.6);">${this.nm.length}p &middot; ${(dm/1000).toFixed(1)}t${fl?' &middot; '+(fl/1000).toFixed(0)+'t fuel':''}</div>`;
  }
  private async rf() {
    while(this.rg.children.length) this.rg.remove(this.rg.children[0]!);
    if (this.assembly.roots.length) {
      const ng=this.assembly.roots.some(n=>n.part.kind==='gltf'&&n.part.gltfUrl&&!gltfCache.has(n.part.gltfUrl));
      if(ng){const{loadGLTF}=await import('../parts/PartBuilder');for(const r of this.assembly.roots)if(r.part.kind==='gltf'&&r.part.gltfUrl&&!gltfCache.has(r.part.gltfUrl))await loadGLTF(r.part.gltfUrl,r.part.gltfScale??1);}
      this.rg.add(this.assembly.toMesh());
    }
    // Re-frame after every rebuild — covers add/undo/clear/load and the
    // async GLTF path (mesh lands only after await).
    this.frame();
  }
  private cam(){
    const sidebar = Math.max(148, Math.min(260, innerWidth * 0.4));
    this.camera.aspect = innerWidth / innerHeight;
    // Shift projection into the open area; keep orbit target at the rocket itself.
    this.camera.setViewOffset(innerWidth,innerHeight,-sidebar/2,0,innerWidth,innerHeight);
    const ox=this.dt*Math.sin(this.po)*Math.cos(this.az),oy=this.dt*Math.cos(this.po),oz=this.dt*Math.sin(this.po)*Math.sin(this.az);this.camera.position.set(this.tg.x+ox,this.tg.y+oy,this.tg.z+oz);this.camera.lookAt(this.tg);}
  mount(){document.body.appendChild(this.root);}
  unmount(){
    this.root.remove();
    document.removeEventListener('mousedown', this._onDown);
    document.removeEventListener('mousemove', this._onMove);
    document.removeEventListener('mouseup', this._onUp);
    document.removeEventListener('wheel', this._onWheel);
    document.removeEventListener('dblclick', this._onDbl);
    document.removeEventListener('touchstart', this._onTStart);
    document.removeEventListener('touchmove', this._onTMove);
    document.removeEventListener('touchend', this._onTEnd);
    window.removeEventListener('resize', this._onResize);
  }

  private showSaveDialog(): void {
    if (!this.assembly.roots.length) { toast.show('Nothing to save — build first!'); return; }
    const overlay = this.makeOverlay();
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.style.cssText = 'max-width:380px;padding:24px;font-family:system-ui,sans-serif;color:#fff;background:#0c1020;border:1px solid rgba(255,255,255,0.2);border-radius:8px;';
    card.innerHTML = `
      <div style="color:#fff;font-size:14px;letter-spacing:0.1em;margin-bottom:12px;">SAVE ASSEMBLY</div>
      <input id="save-name" placeholder="rocket name" style="width:100%;padding:10px;background:#06080f;border:1px solid rgba(255,255,255,0.08);border-radius:4px;color:#fff;font:400 13px monospace;box-sizing:border-box;margin-bottom:12px;" />
      <div style="display:flex;gap:8px;">
        <button id="save-ok" class="btn btn--primary" style="flex:1;padding:10px;font-size:12px;">SAVE</button>
        <button id="save-cancel" class="btn btn--ghost" style="flex:1;padding:10px;font-size:12px;">CANCEL</button>
      </div>`;
    overlay.appendChild(card);
    const input = card.querySelector('#save-name') as HTMLInputElement;
    input.focus();
    const close = () => overlay.remove();
    card.querySelector('#save-cancel')!.addEventListener('click', close);
    const doSave = () => {
      const name = input.value.trim() || `Rocket ${new Date().toLocaleDateString()}`;
      saveAssembly(name, this.assembly);
      toast.show(`Saved: "${name}"`);
      close();
    };
    card.querySelector('#save-ok')!.addEventListener('click', doSave);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSave(); if (e.key === 'Escape') close(); });
  }

  private showLoadDialog(): void {
    const names = listAssemblies().filter(n => n !== 'ellipse_assembly_last');
    const overlay = this.makeOverlay();
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.style.cssText = 'max-width:380px;max-height:60vh;padding:24px;font-family:system-ui,sans-serif;color:#fff;background:#0c1020;border:1px solid rgba(255,255,255,0.2);border-radius:8px;display:flex;flex-direction:column;';
    card.innerHTML = `
      <div style="color:#fff;font-size:14px;letter-spacing:0.1em;margin-bottom:12px;">LOAD ASSEMBLY</div>
      <div id="load-list" style="flex:1;overflow-y:auto;margin-bottom:12px;"></div>
      <button id="load-cancel" class="btn btn--ghost" style="padding:10px;font-size:12px;color:#fff;">CANCEL</button>`;
    overlay.appendChild(card);
    const list = card.querySelector('#load-list') as HTMLDivElement;
    if (names.length === 0) {
      list.innerHTML = '<div style="color:rgba(255,255,255,0.6);font-size:12px;text-align:center;padding:20px;">No saved rockets yet</div>';
    } else {
      for (const name of names) {
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:4px;margin-bottom:4px;';
        row.innerHTML = `<span style="font-size:12px;color:#fff;">${name}</span>`;
        const btns = document.createElement('div');
        btns.style.cssText = 'display:flex;gap:4px;';
        const loadBtn = document.createElement('button');
        loadBtn.textContent = 'LOAD';
        loadBtn.style.cssText = 'padding:4px 10px;background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.2);border-radius:3px;font:600 10px system-ui;cursor:pointer;';
        loadBtn.addEventListener('click', () => {
          const a = loadAssembly(name);
          if (a) {
            this.assembly = a;
            // Restore stack height so further adds/undo stack correctly on top
            this.st = a.roots.reduce((s, r) => s + (PH[r.part.size] || 0.6), 0);
            this.nm = a.roots.map(r => r.part.name);
            this.rf(); this.up();
            toast.show(`Loaded: "${name}"`);
            overlay.remove();
          } else {
            toast.show('Failed to load');
          }
        });
        const delBtn = document.createElement('button');
        delBtn.textContent = '✕';
        delBtn.style.cssText = 'padding:4px 8px;background:rgba(255,68,68,0.1);color:#ff6666;border:1px solid rgba(255,68,68,0.2);border-radius:3px;font:600 10px system-ui;cursor:pointer;';
        delBtn.addEventListener('click', () => {
          deleteAssembly(name);
          row.remove();
          toast.show(`Deleted: "${name}"`);
        });
        btns.appendChild(loadBtn);
        btns.appendChild(delBtn);
        row.appendChild(btns);
        list.appendChild(row);
      }
    }
    card.querySelector('#load-cancel')!.addEventListener('click', () => overlay.remove());
  }

  private makeOverlay(): HTMLDivElement {
    const overlay = document.createElement('div');
    overlay.className = 'guide-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.8);';
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
    return overlay;
  }
}
