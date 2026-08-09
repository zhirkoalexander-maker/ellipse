import * as THREE from 'three';
import { PART_CATALOG } from '../parts/PartCatalog';
import { Assembly } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { PART_SCALE } from '../config/constants';
import { gltfCache } from '../parts/PartBuilder';
import { buildRocketFromDescription } from '../parts/RocketBuilder';

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
  private az = 0; private po = Math.PI/2; private dt = 5;
  private dr = false; private pr = { x:0, y:0 };
  private tg = new THREE.Vector3(0, PART_SCALE, 0);

  constructor(private ol: (a:Assembly)=>void, private ob: ()=>void) {
    this.scene.background = new THREE.Color(0x080c16);
    this.scene.add(new THREE.AmbientLight(0x445566, 0.5));
    const d = new THREE.DirectionalLight(0xffffff, 2.5); d.position.set(2,5,4); this.scene.add(d);
    this.scene.add(new THREE.HemisphereLight(0x8899bb, 0x334455, 0.5));
    const g = new THREE.GridHelper(10,20,0x1a2a3a,0x0d1520); g.position.y=-0.3; this.scene.add(g);
    const pad = new THREE.Mesh(new THREE.BoxGeometry(PART_SCALE*4,0.001,PART_SCALE*4), new THREE.MeshStandardMaterial({color:0x101828,roughness:0.9}));
    pad.position.y=-PART_SCALE*0.3; this.scene.add(pad);
    this.scene.add(this.rg); this.cam();

    const m = (e:MouseEvent) => { if(e.button===0){this.dr=true;this.pr={x:e.clientX,y:e.clientY};} };
    document.addEventListener('mousedown', m);
    document.addEventListener('mousemove', e => { if(!this.dr)return; this.az-=(e.clientX-this.pr.x)*0.005; this.po=Math.max(0.05,Math.min(Math.PI-0.05,this.po+(e.clientY-this.pr.y)*0.005)); this.pr={x:e.clientX,y:e.clientY}; this.cam(); });
    document.addEventListener('mouseup', () => this.dr=false);
    document.addEventListener('wheel', e => { this.dt*=e.deltaY>0?1.1:0.9; this.dt=Math.max(0.5,Math.min(50,this.dt)); this.cam(); }, {passive:true});

    this.root = document.createElement('div');
    this.root.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.root.innerHTML = `
      <div style="width:260px;background:rgba(8,12,22,0.98);border-right:1px solid rgba(255,255,255,0.04);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:18px 16px;border-bottom:1px solid rgba(255,255,255,0.04);">
          <div style="font:200 15px/1 system-ui,-apple-system,sans-serif;color:#8090a8;letter-spacing:0.1em;">ASSEMBLY</div>
          <div id="vi" style="margin-top:10px;font:400 9px/1.5 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.12);min-height:32px;">select parts</div>
        </div>
        <div style="padding:8px 16px;border-bottom:1px solid rgba(255,255,255,0.04);">
          <div style="font:400 7px/1 system-ui;color:rgba(255,255,255,0.1);letter-spacing:0.1em;margin-bottom:6px;">AI DESIGNS</div>
          <div id="va-presets" style="display:flex;flex-wrap:wrap;gap:3px;"></div>
        </div>
        <div id="vl" style="flex:1;overflow-y:auto;padding:8px 0;"></div>
        <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.04);display:flex;flex-direction:column;gap:6px;">
          <button id="vg" style="width:100%;padding:12px;background:rgba(160,176,200,0.08);color:#a0b0c8;border:1px solid rgba(160,176,200,0.12);font:400 12px system-ui;letter-spacing:0.08em;cursor:pointer;transition:all 0.2s;">LAUNCH</button>
          <div style="display:flex;gap:4px;">
            <button id="vu" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.05);font:400 10px system-ui;cursor:pointer;">UNDO</button>
            <button id="vc" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.03);font:400 10px system-ui;cursor:pointer;">CLEAR</button>
          </div>
          <button id="vb" style="width:100%;padding:8px;background:transparent;color:rgba(255,255,255,0.1);border:none;font:400 10px system-ui;cursor:pointer;">BACK</button>
        </div>
      </div>
      <div style="flex:1;"></div>`;
    this.info = this.root.querySelector('#vi')!;
    this.build();
    this.buildPresets();
    this.root.querySelector('#vg')!.addEventListener('click', () => { if(this.assembly.roots.length) this.ol(this.assembly); });
    this.root.querySelector('#vu')!.addEventListener('click', () => this.undo());
    this.root.querySelector('#vc')!.addEventListener('click', () => { this.assembly=new Assembly(); this.st=0; this.nm=[]; this.rf(); this.up(); });
    this.root.querySelector('#vb')!.addEventListener('click', () => this.ob());
  }

  private build() {
    const el = this.root.querySelector('#vl')!;
    const groups = new Map<string,{parts:Part[],color:string}>();
    const cmap: Record<string,string> = { capsule:'#a0b0c0', tank:'#6090c0', engine:'#c08060', decoupler:'#c06070', parachute:'#60a070', legs:'#8090a0', heatshield:'#b08060', gltf:'#b080a0' };
    for (const p of PART_CATALOG) {
      if (!groups.has(p.kind)) groups.set(p.kind, {parts:[],color:cmap[p.kind]||'#888'});
      groups.get(p.kind)!.parts.push(p);
    }
    for (const [kind, g] of groups) {
      const h = document.createElement('div');
      h.textContent = kind.toUpperCase();
      h.style.cssText = 'font:400 7px/1 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.12);letter-spacing:0.15em;padding:10px 16px 4px;';
      el.appendChild(h);
      for (const p of g.parts) {
        const b = document.createElement('button');
        const has = p.kind==='engine'?`${(p.thrust!/1000).toFixed(0)}kN`:p.kind==='tank'?`${(p.fuelCapacity!/1000).toFixed(0)}t`:p.kind==='capsule'?`${(p.mass/1000).toFixed(1)}t`:'';
        b.innerHTML = `<span style="width:2px;height:12px;background:${g.color};border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.6;"></span><span style="vertical-align:middle;">${p.name}</span><span style="float:right;color:rgba(255,255,255,0.12);font-size:9px;margin-top:1px;">${has}</span>`;
        b.style.cssText = 'display:block;width:100%;padding:7px 16px;background:transparent;color:rgba(255,255,255,0.35);border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;';
        b.addEventListener('mouseenter', () => { b.style.background='rgba(255,255,255,0.02)'; b.style.color='rgba(255,255,255,0.7)'; });
        b.addEventListener('mouseleave', () => { b.style.background='transparent'; b.style.color='rgba(255,255,255,0.35)'; });
        b.addEventListener('click', () => this.add(p));
        el.appendChild(b);
      }
    }
  }

  private buildPresets() {
    const el = this.root.querySelector('#va-presets')!;
    const presets = [
      { name:'GPT-4 Heavy', desc:'capsule, tank L, decoupler, tank XL, mammoth', color:'#44cc88' },
      { name:'Claude 3 Lift', desc:'capsule, tank M, vector', color:'#cc8844' },
      { name:'Gemini Ultra', desc:'capsule, tank M, decoupler, tank XL, mastodon', color:'#4488ff' },
      { name:'Llama 3 Deep', desc:'capsule, tank S, decoupler, tank L, mastodon', color:'#ff6644' },
      { name:'Mixtral 8x', desc:'capsule, tank S, ant', color:'#8888cc' },
      { name:'Qwen 2 Max', desc:'capsule, tank XL, mammoth', color:'#cc44cc' },
      { name:'DeepSeek V3', desc:'capsule, tank L, decoupler, tank XL, decoupler, tank XL, mammoth', color:'#44cccc' },
      { name:'Falcon 180B', desc:'capsule, tank M, decoupler, tank L, mastodon', color:'#cc8844' },
      { name:'Command R+', desc:'capsule, tank S, decoupler, tank M, vector', color:'#88cc44' },
      { name:'Phi-4 Vision', desc:'capsule, tank S, ant', color:'#cccc44' },
    ];
    for (const p of presets) {
      const btn = document.createElement('button');
      btn.textContent = p.name;
      btn.style.cssText = `padding:3px 8px;background:rgba(255,255,255,0.03);color:${p.color};border:1px solid rgba(255,255,255,0.06);border-radius:3px;font:400 8px system-ui;cursor:pointer;`;
      btn.addEventListener('click', () => {
        this.assembly = buildRocketFromDescription(p.desc);
        this.st = 0; this.nm = [];
        for (const r of this.assembly.roots) { this.st += PH[r.part.size]||0.6; this.nm.push(r.part.name); }
        this.rf(); this.up();
      });
      el.appendChild(btn);
    }
  }

  private add(p: Part) {
    const h = PH[p.size]||0.6; const y = this.st+h/2;
    this.assembly.addRoot({part:p,position:[0,y*PART_SCALE,0],rotation:0,children:[]});
    this.st+=h; this.nm.push(p.name); this.rf(); this.up();
  }
  private undo() {
    if(!this.assembly.roots.length) return;
    const r = this.assembly.roots.pop()!; this.st-=PH[r.part.size]||0.6; this.nm.pop();
    this.rf(); this.up();
  }
  private up() {
    if(!this.nm.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.08);">select parts</span>';return;}
    const dm=this.assembly.roots.reduce((s,n)=>s+n.part.mass,0), fl=this.assembly.roots.reduce((s,n)=>s+(n.part.fuelCapacity||0),0);
    this.info.innerHTML=this.nm.map((n,i)=>`<span style="color:rgba(255,255,255,0.2);">${n}</span>`).join(' <span style="color:rgba(255,255,255,0.05);">&rarr;</span> ')+`<div style="margin-top:6px;font:400 8px system-ui;color:rgba(255,255,255,0.08);">${this.nm.length}p &middot; ${(dm/1000).toFixed(1)}t${fl?' &middot; '+(fl/1000).toFixed(0)+'t fuel':''}</div>`;
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
}
