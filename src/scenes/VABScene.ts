import * as THREE from 'three';
import { PART_CATALOG } from '../parts/PartCatalog';
import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Part, PartKind } from '../parts/Part';
import { PART_SCALE } from '../config/constants';
import { gltfCache } from '../parts/PartBuilder';

const PH: Record<string, number> = { S:0.7, M:1.1, L:1.6, XL:2.2 };

const ICON: Record<string,string> = { capsule:'🔺', tank:'🛢️', engine:'🔥', decoupler:'✂️', parachute:'☂️', legs:'🦿', heatshield:'🛡️', gltf:'🚀' };
const CLR: Record<string,string> = { capsule:'#EACD9E', tank:'#4488FF', engine:'#FF6633', decoupler:'#FF5577', parachute:'#44CC77', legs:'#8899AA', heatshield:'#CC8855', gltf:'#CC88BB' };
const BGR: Record<string,string> = { capsule:'234,205,158', tank:'68,136,255', engine:'255,102,51', decoupler:'255,85,119', parachute:'68,204,119', legs:'136,153,170', heatshield:'204,136,85', gltf:'204,136,187' };

export class VABScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  assembly: Assembly;
  private rg: THREE.Group;
  private root: HTMLDivElement;
  private info: HTMLElement;
  private h = 0;
  private names: string[] = [];
  private onLaunch: (a:Assembly)=>void;
  private onBack: ()=>void;
  private az=0; private pol=Math.PI/2; private dist=5;
  private d=false; private p={x:0,y:0};
  private tgt=new THREE.Vector3(0,PART_SCALE,0);

  constructor(onLaunch:(a:Assembly)=>void, onBack:()=>void) {
    this.onLaunch=onLaunch; this.onBack=onBack;
    this.scene=new THREE.Scene();
    this.scene.background=new THREE.Color(0x0a0d1a);
    this.scene.add(new THREE.AmbientLight(0x444466,0.5));
    const d=new THREE.DirectionalLight(0xFFFFFF,3); d.position.set(2,4,3); this.scene.add(d);
    this.scene.add(new THREE.HemisphereLight(0x8888cc,0x444466,0.8));
    const g=new THREE.GridHelper(10,20,0x334466,0x223355); g.position.y=-0.3; this.scene.add(g);
    const pad=new THREE.Mesh(new THREE.BoxGeometry(PART_SCALE*4,0.001,PART_SCALE*4),new THREE.MeshStandardMaterial({color:0x1c2040,roughness:0.9}));
    pad.position.y=-PART_SCALE*0.3; this.scene.add(pad);
    this.camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,0.01,1000); this.cam();
    this.assembly=new Assembly();
    this.rg=new THREE.Group(); this.scene.add(this.rg);
    this.orbit();

    this.root=document.createElement('div');
    this.root.style.cssText='position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.root.innerHTML=`<div style="width:280px;background:rgba(10,12,24,0.97);border-right:1px solid rgba(234,205,158,0.15);display:flex;flex-direction:column;pointer-events:auto;">
      <div style="padding:14px 16px;border-bottom:1px solid rgba(234,205,158,0.12);">
        <div style="font-size:18px;color:#EACD9E;font-weight:700;letter-spacing:0.04em;">BUILD ROCKET</div>
        <div id="vab-info" style="margin-top:6px;font-size:10px;color:rgba(255,255,255,0.3);min-height:28px;line-height:1.5;">Click parts to add them</div>
        <div style="margin-top:8px;display:flex;gap:6px;">
          <button id="vab-undo" style="flex:1;padding:6px;background:rgba(255,85,85,0.15);color:#ff5555;border:1px solid rgba(255,85,85,0.2);border-radius:5px;font-size:10px;cursor:pointer;">↩ UNDO</button>
          <button id="vab-clear" style="flex:1;padding:6px;background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.1);border-radius:5px;font-size:10px;cursor:pointer;">✕ CLEAR</button>
        </div>
      </div>
      <div id="vab-list" style="flex:1;overflow-y:auto;padding:6px 8px;display:flex;flex-wrap:wrap;gap:4px;align-content:flex-start;"></div>
      <div style="padding:12px;border-top:1px solid rgba(234,205,158,0.15);display:flex;flex-direction:column;gap:6px;">
        <button id="vab-go" style="width:100%;padding:14px;background:#EACD9E;color:#0a0c18;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;">🚀 LAUNCH</button>
        <button id="vab-back" style="width:100%;padding:10px;background:transparent;color:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.1);border-radius:8px;font-size:12px;cursor:pointer;">← BACK</button>
      </div>
    </div><div style="flex:1;pointer-events:none;"></div>`;
    this.info=this.root.querySelector('#vab-info')!;
    this.build();
    this.root.querySelector('#vab-go')!.addEventListener('click',()=>{if(this.assembly.roots.length)this.onLaunch(this.assembly);});
    this.root.querySelector('#vab-undo')!.addEventListener('click',()=>this.undo());
    this.root.querySelector('#vab-clear')!.addEventListener('click',()=>{this.assembly=new Assembly();this.h=0;this.names=[];this.refresh();this.infoUpdate();});
    this.root.querySelector('#vab-back')!.addEventListener('click',()=>this.onBack());
  }

  private build() {
    const el=this.root.querySelector('#vab-list')!;
    for(const p of PART_CATALOG) {
      const card=document.createElement('button');
      const icon=ICON[p.kind]||'⬡';
      const clr=CLR[p.kind]||'#888';
      const bg=BGR[p.kind]||'136,136,136';
      let stat='';
      if(p.kind==='engine') stat=`<div style="font-size:13px;font-weight:700;color:${clr};">${((p.thrust||0)/1000).toFixed(0)}k</div>`;
      else if(p.kind==='tank') stat=`<div style="font-size:13px;font-weight:700;color:${clr};">${((p.fuelCapacity||0)/1000).toFixed(0)}t</div>`;
      else if(p.kind==='capsule') stat=`<div style="font-size:10px;color:#999;">${((p.mass||0)/1000).toFixed(1)}t</div>`;
      else stat=`<div style="font-size:9px;color:#666;">${p.size}</div>`;
      card.innerHTML=`<div style="font-size:24px;">${icon}</div><div style="font-size:9px;color:#ccc;margin-top:2px;text-align:center;line-height:1.2;">${p.name.replace(/"/g,'')}</div>${stat}`;
      card.style.cssText=`width:80px;height:90px;padding:6px 4px;background:rgba(${bg},0.08);color:#ccc;border:1px solid rgba(${bg},0.15);border-radius:6px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;transition:all 0.12s;`;
      card.addEventListener('mouseenter',()=>{card.style.background=`rgba(${bg},0.18)`;card.style.borderColor=clr;card.style.transform='scale(1.05)';});
      card.addEventListener('mouseleave',()=>{card.style.background=`rgba(${bg},0.08)`;card.style.borderColor=`rgba(${bg},0.15)`;card.style.transform='';});
      card.addEventListener('click',()=>this.add(p));
      el.appendChild(card);
    }
  }

  private add(p:Part) {
    const hh=PH[p.size]||0.6;
    const y=this.h+hh/2;
    this.assembly.addRoot({part:p,position:[0,y*PART_SCALE,0],rotation:0,children:[]});
    this.h+=hh; this.names.push(p.name); this.refresh(); this.infoUpdate();
  }

  private undo() {
    if(!this.assembly.roots.length)return;
    const r=this.assembly.roots.pop()!;
    this.h-=PH[r.part.size]||0.6; this.names.pop();
    this.refresh(); this.infoUpdate();
  }

  private infoUpdate() {
    if(!this.names.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.25);">Click parts to add them</span>';return;}
    this.info.innerHTML=this.names.map(n=>`<span style="color:#ccc;">▸ ${n}</span>`).join('<br>');
  }

  private async refresh() {
    while(this.rg.children.length)this.rg.remove(this.rg.children[0]!);
    if(!this.assembly.roots.length)return;
    const ng=this.assembly.roots.some(n=>n.part.kind==='gltf'&&n.part.gltfUrl&&!gltfCache.has(n.part.gltfUrl));
    if(ng){const{loadGLTF}=await import('../parts/PartBuilder');for(const r of this.assembly.roots){if(r.part.kind==='gltf'&&r.part.gltfUrl&&!gltfCache.has(r.part.gltfUrl))await loadGLTF(r.part.gltfUrl,r.part.gltfScale??1);}}
    this.rg.add(this.assembly.toMesh());
  }

  private cam(){const ox=this.dist*Math.sin(this.pol)*Math.cos(this.az);const oy=this.dist*Math.cos(this.pol);const oz=this.dist*Math.sin(this.pol)*Math.sin(this.az);this.camera.position.set(this.tgt.x+ox,this.tgt.y+oy,this.tgt.z+oz);this.camera.lookAt(this.tgt);}
  private orbit(){document.addEventListener('mousedown',e=>{if(e.button===0){this.d=true;this.p={x:e.clientX,y:e.clientY};}});document.addEventListener('mousemove',e=>{if(!this.d)return;this.az-=(e.clientX-this.p.x)*0.005;this.pol=Math.max(0.05,Math.min(Math.PI-0.05,this.pol+(e.clientY-this.p.y)*0.005));this.p={x:e.clientX,y:e.clientY};this.cam();});document.addEventListener('mouseup',()=>this.d=false);document.addEventListener('wheel',e=>{this.dist*=e.deltaY>0?1.1:0.9;this.dist=Math.max(0.5,Math.min(50,this.dist));this.cam();},{passive:true});}
  mount(){document.body.appendChild(this.root);}
  unmount(){this.root.remove();}
}
