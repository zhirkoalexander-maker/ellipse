import * as THREE from 'three';
import { PART_CATALOG } from '../parts/PartCatalog';
import { Assembly } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { PART_SCALE } from '../config/constants';
import { gltfCache } from '../parts/PartBuilder';

const PH: Record<string,number> = { S:0.7, M:1.1, L:1.6, XL:2.2 };

export class VABScene {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 0.01, 1000);
  assembly = new Assembly();
  private rg = new THREE.Group();
  private root!: HTMLDivElement;
  private info!: HTMLElement;
  private stack = 0;
  private names: string[] = [];
  private az = 0; private pol = Math.PI/2; private dist = 5;
  private d = false; private p = { x:0, y:0 };
  private t = new THREE.Vector3(0, PART_SCALE, 0);

  constructor(private onL: (a:Assembly)=>void, private onB: ()=>void) {
    this.scene.background = new THREE.Color(0x080c16);
    this.scene.add(new THREE.AmbientLight(0x334466, 0.6));
    const dl = new THREE.DirectionalLight(0xffffff, 3); dl.position.set(2,5,4); this.scene.add(dl);
    const fl = new THREE.DirectionalLight(0x6688aa, 1); fl.position.set(-2,0,-1); this.scene.add(fl);
    this.scene.add(new THREE.HemisphereLight(0x8899bb, 0x334455, 0.6));
    const g = new THREE.GridHelper(10,20,0x223344,0x1a2233); g.position.y = -0.3; this.scene.add(g);
    const pad = new THREE.Mesh(new THREE.BoxGeometry(PART_SCALE*4,0.001,PART_SCALE*4), new THREE.MeshStandardMaterial({color:0x141828,roughness:0.9}));
    pad.position.y = -PART_SCALE*0.3; this.scene.add(pad);
    this.scene.add(this.rg);
    this.cam();

    const m = (e:MouseEvent) => { if(e.button===0){this.d=true;this.p={x:e.clientX,y:e.clientY};} };
    const mv = (e:MouseEvent) => { if(!this.d)return; this.az-=(e.clientX-this.p.x)*0.005; this.pol=Math.max(0.05,Math.min(Math.PI-0.05,this.pol+(e.clientY-this.p.y)*0.005)); this.p={x:e.clientX,y:e.clientY}; this.cam(); };
    document.addEventListener('mousedown', m);
    document.addEventListener('mousemove', mv);
    document.addEventListener('mouseup', () => this.d = false);
    document.addEventListener('wheel', e => { this.dist *= e.deltaY>0?1.1:0.9; this.dist=Math.max(0.5,Math.min(50,this.dist)); this.cam(); }, {passive:true});

    this.root = document.createElement('div');
    this.root.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.root.innerHTML = `
      <div style="width:260px;background:rgba(8,12,22,0.98);border-right:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:16px;border-bottom:1px solid rgba(255,255,255,0.05);">
          <div style="font-size:16px;font-weight:300;color:#a0a8c0;letter-spacing:0.1em;">VEHICLE ASSEMBLY</div>
          <div id="va-info" style="margin-top:10px;font-size:10px;color:rgba(255,255,255,0.2);min-height:36px;line-height:1.6;">select parts to build</div>
        </div>
        <div id="va-list" style="flex:1;overflow-y:auto;padding:8px 12px;"></div>
        <div style="padding:12px;border-top:1px solid rgba(255,255,255,0.05);display:flex;gap:6px;flex-direction:column;">
          <button id="va-go" style="width:100%;padding:12px;background:rgba(200,176,128,0.15);color:#c8b080;border:1px solid rgba(200,176,128,0.25);font-size:12px;letter-spacing:0.08em;cursor:pointer;">LAUNCH</button>
          <div style="display:flex;gap:6px;">
            <button id="va-undo" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.3);border:1px solid rgba(255,255,255,0.08);font-size:10px;cursor:pointer;">UNDO</button>
            <button id="va-clear" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.05);font-size:10px;cursor:pointer;">CLEAR</button>
          </div>
          <button id="va-back" style="width:100%;padding:8px;background:transparent;color:rgba(255,255,255,0.15);border:none;font-size:10px;cursor:pointer;">← BACK</button>
        </div>
      </div>
      <div style="flex:1;"></div>`;
    this.info = this.root.querySelector('#va-info')!;
    this.build();

    this.root.querySelector('#va-go')!.addEventListener('click', () => { if(this.assembly.roots.length) this.onL(this.assembly); });
    this.root.querySelector('#va-undo')!.addEventListener('click', () => this.undo());
    this.root.querySelector('#va-clear')!.addEventListener('click', () => { this.assembly=new Assembly(); this.stack=0; this.names=[]; this.rf(); this.up(); });
    this.root.querySelector('#va-back')!.addEventListener('click', () => this.onB());
  }

  private build() {
    const el = this.root.querySelector('#va-list')!;
    const groups = new Map<string, Part[]>();
    for (const p of PART_CATALOG) {
      if (!groups.has(p.kind)) groups.set(p.kind, []);
      groups.get(p.kind)!.push(p);
    }
    for (const [kind, parts] of groups) {
      const hdr = document.createElement('div');
      hdr.textContent = kind.toUpperCase();
      hdr.style.cssText = 'font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:0.12em;padding:10px 0 4px 2px;';
      el.appendChild(hdr);
      for (const p of parts) {
        const b = document.createElement('button');
        let s = '';
        if (p.kind==='engine') s = `${(p.thrust!/1000).toFixed(0)}kN`;
        else if (p.kind==='tank') s = `${(p.fuelCapacity!/1000).toFixed(0)}t`;
        else if (p.kind==='capsule') s = `${(p.mass/1000).toFixed(1)}t`;
        b.innerHTML = `<span style="flex:1;text-align:left;">${p.name}</span><span style="color:rgba(255,255,255,0.2);font-size:9px;">${s}</span>`;
        b.style.cssText = 'display:flex;width:100%;padding:7px 8px;background:transparent;color:rgba(255,255,255,0.5);border:none;font-size:11px;cursor:pointer;text-align:left;';
        b.addEventListener('mouseenter', () => { b.style.background='rgba(255,255,255,0.04)'; b.style.color='#fff'; });
        b.addEventListener('mouseleave', () => { b.style.background='transparent'; b.style.color='rgba(255,255,255,0.5)'; });
        b.addEventListener('click', () => this.add(p));
        el.appendChild(b);
      }
    }
  }

  private add(p: Part) {
    const h = PH[p.size]||0.6;
    const y = this.stack+h/2;
    this.assembly.addRoot({part:p,position:[0,y*PART_SCALE,0],rotation:0,children:[]});
    this.stack+=h; this.names.push(p.name); this.rf(); this.up();
  }

  private undo() {
    if (!this.assembly.roots.length) return;
    const r = this.assembly.roots.pop()!;
    this.stack -= PH[r.part.size]||0.6; this.names.pop();
    this.rf(); this.up();
  }

  private up() {
    if (!this.names.length) { this.info.innerHTML = '<span style="color:rgba(255,255,255,0.15);">select parts to build</span>'; return; }
    const m = this.assembly.roots.reduce((s,n)=>s+n.part.mass,0);
    const f = this.assembly.roots.reduce((s,n)=>s+(n.part.fuelCapacity||0),0);
    this.info.innerHTML = this.names.map(n=>`<span style="color:rgba(255,255,255,0.3);">${n}</span>`).join(' &rarr; ') +
      `<div style="margin-top:4px;font-size:9px;color:rgba(255,255,255,0.12);">${this.names.length}p &middot; ${(m/1000).toFixed(1)}t dry${f>0?' &middot; '+(f/1000).toFixed(0)+'t fuel':''}</div>`;
  }

  private async rf() {
    while (this.rg.children.length) this.rg.remove(this.rg.children[0]!);
    if (!this.assembly.roots.length) return;
    const ng = this.assembly.roots.some(n => n.part.kind==='gltf' && n.part.gltfUrl && !gltfCache.has(n.part.gltfUrl));
    if (ng) {
      const { loadGLTF } = await import('../parts/PartBuilder');
      for (const r of this.assembly.roots) {
        if (r.part.kind==='gltf' && r.part.gltfUrl && !gltfCache.has(r.part.gltfUrl)) await loadGLTF(r.part.gltfUrl, r.part.gltfScale??1);
      }
    }
    this.rg.add(this.assembly.toMesh());
  }

  private cam() {
    const ox=this.dist*Math.sin(this.pol)*Math.cos(this.az);
    const oy=this.dist*Math.cos(this.pol);
    const oz=this.dist*Math.sin(this.pol)*Math.sin(this.az);
    this.camera.position.set(this.t.x+ox, this.t.y+oy, this.t.z+oz);
    this.camera.lookAt(this.t);
  }

  mount() { document.body.appendChild(this.root); }
  unmount() { this.root.remove(); }
}
