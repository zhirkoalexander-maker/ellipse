import * as THREE from 'three';
import { PART_CATALOG } from '../parts/PartCatalog';
import { Assembly } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { PART_SCALE } from '../config/constants';
import { gltfCache } from '../parts/PartBuilder';
import { saveAssembly, loadAssembly, listAssemblies, deleteAssembly, saveLastAssembly } from '../storage/SaveLoad';
import { toast } from '../ui/Toast';

const PH: Record<string,number> = { S:0.7, M:1.1, L:1.6, XL:2.2 };

export class VABScene {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 0.01, 1000);
  assembly = new Assembly();
  private rg = new THREE.Group();
  private root!: HTMLDivElement;
  private info!: HTMLElement;
  private st = 0;
  private nm: string[] = [];
  private az = 0; private po = Math.PI/2; private readonly dt = 5;
  private dr = false; private pr = { x:0, y:0 };
  private tg = new THREE.Vector3(0, PART_SCALE, 0);

  constructor(private ol: (a:Assembly)=>void, private ob: ()=>void) {
    this.scene.background = new THREE.Color(0x080c16);
    this.scene.add(new THREE.AmbientLight(0x445566, 0.5));
    const d = new THREE.DirectionalLight(0xffffff, 2.5); d.position.set(2,5,4); this.scene.add(d);
    this.scene.add(new THREE.HemisphereLight(0x8899bb, 0x334455, 0.5));
    this.scene.add(this.rg); this.cam();

    const m = (e:MouseEvent) => { if(e.button===0){this.dr=true;this.pr={x:e.clientX,y:e.clientY};} };
    document.addEventListener('mousedown', m);
    document.addEventListener('mousemove', e => { if(!this.dr)return; this.az-=(e.clientX-this.pr.x)*0.005; this.po=Math.max(0.05,Math.min(Math.PI-0.05,this.po+(e.clientY-this.pr.y)*0.005)); this.pr={x:e.clientX,y:e.clientY}; this.cam(); });
    document.addEventListener('mouseup', () => this.dr=false);

    this.root = document.createElement('div');
    this.root.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.root.innerHTML = `
      <div style="width:260px;background:rgba(8,12,22,0.98);border-right:1px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:18px 16px;border-bottom:1px solid rgba(255,255,255,0.15);">
          <div style="font:200 15px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.1em;">ASSEMBLY</div>
          <div id="vi" style="margin-top:10px;font:400 9px/1.5 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.7);min-height:32px;">select parts</div>
        </div>
        <div id="vl" style="flex:1;overflow-y:auto;padding:8px 0;"></div>
        <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;gap:6px;">
          <button id="vg" style="width:100%;padding:12px;background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 12px system-ui;letter-spacing:0.08em;cursor:pointer;transition:all 0.2s;">LAUNCH</button>
          <div style="display:flex;gap:4px;">
            <button id="vu" style="flex:1;padding:8px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.15);font:400 10px system-ui;cursor:pointer;">UNDO</button>
            <button id="vc" style="flex:1;padding:8px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.15);font:400 10px system-ui;cursor:pointer;">CLEAR</button>
          </div>
          <div style="display:flex;gap:4px;">
            <button id="vs" style="flex:1;padding:8px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 10px system-ui;cursor:pointer;">SAVE</button>
            <button id="vlb" style="flex:1;padding:8px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 10px system-ui;cursor:pointer;">LOAD</button>
          </div>
          <button id="vb" style="width:100%;padding:8px;background:transparent;color:#fff;border:none;font:400 10px system-ui;cursor:pointer;">BACK</button>
        </div>
      </div>
      <div style="flex:1;"></div>`;
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
  }

  private build() {
    const el = this.root.querySelector('#vl')!;

    // ─── PRESETS ───
    const presetHeader = document.createElement('div');
    presetHeader.textContent = 'PRESETS';
    presetHeader.style.cssText = 'font:400 8px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.15em;padding:10px 16px 4px;opacity:0.7;';
    el.appendChild(presetHeader);
    const presetBtn = document.createElement('button');
    presetBtn.innerHTML = `<span style="width:2px;height:12px;background:#EACD9E;border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.8;"></span><span style="vertical-align:middle;color:#fff;">Saturn V (2-stage)</span><span style="float:right;color:rgba(255,255,255,0.6);font-size:9px;margin-top:1px;">175000kN</span>`;
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
        const has = p.kind==='engine'?`${(p.thrust!/1000).toFixed(0)}kN · Isp ${p.isp}`:p.kind==='tank'?`${(p.fuelCapacity!/1000).toFixed(0)}t`:p.kind==='capsule'?`${(p.mass/1000).toFixed(1)}t`:p.kind==='rcs'?`${p.thrust}kN`:p.kind==='fairing'?'aero':'';
        b.innerHTML = `<span style="width:2px;height:12px;background:${g.color};border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.8;"></span><span style="vertical-align:middle;color:#fff;">${p.name}</span><span style="float:right;color:rgba(255,255,255,0.6);font-size:9px;margin-top:1px;">${has}</span>`;
        b.style.cssText = 'display:block;width:100%;padding:7px 16px;background:transparent;color:#fff;border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;';
        b.addEventListener('mouseenter', () => { b.style.background='rgba(255,255,255,0.05)'; b.style.color='#fff'; });
        b.addEventListener('mouseleave', () => { b.style.background='transparent'; b.style.color='#fff'; });
        b.addEventListener('click', () => this.add(p));
        el.appendChild(b);
      }
    }
  }

  private add(p: Part) {
    const h = PH[p.size]||0.6; const y = this.st+h/2;
    this.assembly.addRoot({part:p,position:[0,y*PART_SCALE,0],rotation:0,children:[]});
    this.st+=h; this.nm.push(p.name); this.rf(); this.up();
  }

  /** One-click Saturn V: booster stage (Mammoth + XL tank) + decoupler + Saturn V upper stage. */
  private buildSaturnVPreset(): void {
    this.assembly = new Assembly(); this.st = 0; this.nm = [];
    const mammoth = PART_CATALOG.find(p => p.id === 'engine_mammoth')!;
    const tankXl = PART_CATALOG.find(p => p.id === 'tank_xl_lfo')!;
    const decouplerL = PART_CATALOG.find(p => p.id === 'decoupler_l')!;
    const saturn = PART_CATALOG.find(p => p.id === 'saturn_v')!;
    // Stack bottom→top (same order as clicking parts manually)
    this.add(mammoth);
    this.add(tankXl);
    this.add(decouplerL);
    this.add(saturn);
    toast.show('Saturn V preset: 2-stage, press SPACE in flight to separate booster', 4000);
  }
  private undo() {
    if(!this.assembly.roots.length) return;
    const r = this.assembly.roots.pop()!; this.st-=PH[r.part.size]||0.6; this.nm.pop();
    this.rf(); this.up();
  }
  private up() {
    if(!this.nm.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.5);">select parts</span>';return;}
    const dm=this.assembly.roots.reduce((s,n)=>s+n.part.mass,0), fl=this.assembly.roots.reduce((s,n)=>s+(n.part.fuelCapacity||0),0);
    this.info.innerHTML=this.nm.map((n,i)=>`<span style="color:#fff;">${n}</span>`).join(' <span style="color:rgba(255,255,255,0.4);">&rarr;</span> ')+`<div style="margin-top:6px;font:400 8px system-ui;color:rgba(255,255,255,0.6);">${this.nm.length}p &middot; ${(dm/1000).toFixed(1)}t${fl?' &middot; '+(fl/1000).toFixed(0)+'t fuel':''}</div>`;
  }
  private async rf() {
    while(this.rg.children.length) this.rg.remove(this.rg.children[0]!);
    if(!this.assembly.roots.length) return;
    const ng=this.assembly.roots.some(n=>n.part.kind==='gltf'&&n.part.gltfUrl&&!gltfCache.has(n.part.gltfUrl));
    if(ng){const{loadGLTF}=await import('../parts/PartBuilder');for(const r of this.assembly.roots)if(r.part.kind==='gltf'&&r.part.gltfUrl&&!gltfCache.has(r.part.gltfUrl))await loadGLTF(r.part.gltfUrl,r.part.gltfScale??1);}
    this.rg.add(this.assembly.toMesh());
  }
  private cam(){const ox=this.dt*Math.sin(this.po)*Math.cos(this.az),oy=this.dt*Math.cos(this.po),oz=this.dt*Math.sin(this.po)*Math.sin(this.az);this.camera.position.set(this.tg.x+ox,this.tg.y+oy,this.tg.z+oz);this.camera.lookAt(this.tg);}
  mount(){document.body.appendChild(this.root);}
  unmount(){this.root.remove();}

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
            this.st = 0; this.nm = a.roots.map(r => r.part.name);
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
