import { gameMetres, simulationMetres } from '../flight/GameUnits';
import { Vector3 } from 'three';
import { G } from '../config/constants';
import { Lifetime } from '../core/Lifetime';
import type { Body, Vec3 } from '../physics/Body';
import { mapBasis, mapTrajectory, maneuverVector, projectMap, simpleCorrection, destinationBasis } from '../flight/MapNavigation';
import './OrbitMap.css';

type MapBody = Body & { radius?: number };
export interface MapSnapshot {
 position: Vec3; velocity: Vec3; bodies: Body[]; reference: MapBody;
 grounded: boolean; paused: boolean; fuel: number; remainingBurn: number;
}
const colors:Record<string,string>={sun:'#ffe4a0',earth:'#439edf',moon:'#c8ccd3',mars:'#cf7955',venus:'#d6b87e',mercury:'#9ea2aa',jupiter:'#caa581',saturn:'#d5c59a',uranus:'#8ccbd7',neptune:'#557dc1',pluto:'#b7b0a6'};
const landingTargets=new Set(['earth','moon','mars','venus','mercury','pluto']);
const distanceText=(physical:number)=>{const m=gameMetres(physical);return m>=1e9?`${(m/1e9).toFixed(2)} M km`:`${(m/1000).toLocaleString('en',{maximumFractionDigits:0})} km`;};
export class OrbitMap {
 private life=new Lifetime();
 readonly root=document.createElement('div');
 readonly canvas=document.createElement('canvas');
 active=false;
 target='moon';
 private mode:'orbit'|'target'|'system'='orbit';
 private plane:'orbit'|'xz'|'xy'|'destination'='destination';
 private correction:'toward'|'faster'|'slower'|'advanced'='toward';
 private strength=100;
 private zoom=1;
 private pan:[number,number]=[0,0];
 private displayZoom=1;
 private displayPan:[number,number]=[0,0];
 private viewAnimation:Animation|undefined;
 private dv:Vec3=[0,0,0];
 private hits:{name:string;x:number;y:number}[]=[];
 private pointers=new Map<number,[number,number]>();
 private moved=false;
 private previousTime=0;
 private drawing=false;
 private messageUntil=0;
 private viewFrame:{basis:[Vector3,Vector3];anchor:string;offset:Vec3;span:number}|null=null;
 constructor(private snapshot:()=>MapSnapshot, private burn:(dv:Vec3)=>string, private cancel:()=>void, private fly:(target:string)=>boolean, private opened:()=>void = ()=>{}) {
  this.root.className='orbit-map';this.root.hidden=true;this.canvas.className='orbit-map-canvas';
  this.root.append(this.canvas);
  const ui=document.createElement('div');ui.className='orbit-map-ui';
  ui.innerHTML=`<header><button data-map="close" aria-label="Close map">‹ Flight</button><strong>Map</strong><span id="map-reference"></span></header>
  <nav><button data-map="system">Solar system</button><button data-map="target">Route</button><button data-map="orbit">Near rocket</button><button data-map="reset" title="Centre view">⌖</button></nav>
  <div class="map-destinations" aria-label="Choose destination"></div>
  <aside><label>Destination<select id="transfer-target"></select></label><div id="map-distance"></div>
  <button id="transfer-go">Autopilot to destination</button>
  <details class="map-course"><summary>Adjust course</summary><small>Yellow shows the predicted path after the burn.</small>
  <div class="map-simple-actions"><button data-correction="toward" class="selected">Toward destination</button><button data-correction="faster">Speed up</button><button data-correction="slower">Slow down</button></div>
  <label>Adjustment<select id="map-strength"><option value="10">Gentle</option><option value="100" selected>Medium</option><option value="1000">Strong</option></select></label>
  <details class="map-advanced"><summary>Fine tuning</summary>
  <label>Prograde <span>m/s</span><input id="map-prograde" type="number" value="0" step="10" min="-50000" max="50000"></label>
  <label>Radial out <span>m/s</span><input id="map-radial" type="number" value="0" step="10" min="-50000" max="50000"></label>
  <label>Normal <span>m/s</span><input id="map-normal" type="number" value="0" step="10" min="-50000" max="50000"></label>
  </details><div class="map-burn-actions"><button data-map="clear">Clear</button><button data-map="burn">Apply correction</button><button data-map="stop">Stop</button></div></details>
  <output id="map-status" aria-live="polite">Launch to adjust your orbit.</output></aside>
  <footer><span><i class="map-current"></i>Current orbit <i class="map-preview"></i>After burn</span><label>View <select id="map-plane"><option value="destination">Destination</option><option value="orbit">Orbital plane</option><option value="xz">Top</option><option value="xy">Side</option></select></label><button data-map="minus" aria-label="Zoom out">−</button><button data-map="plus" aria-label="Zoom in">+</button></footer>`;
  this.root.append(ui);this.life.append(this.root);
  const select=this.root.querySelector<HTMLSelectElement>('#transfer-target')!;
  for(const b of snapshot().bodies.filter(b=>b.name!=='sun')) {const o=document.createElement('option');o.value=b.name;o.textContent=b.name[0]!.toUpperCase()+b.name.slice(1);select.add(o);const button=document.createElement('button');button.dataset.destination=b.name;button.textContent=o.textContent;button.style.setProperty('--planet-color',colors[b.name]||'#aaa');this.root.querySelector('.map-destinations')!.append(button);}
  select.value=this.target;
  const course=this.root.querySelector<HTMLDetailsElement>('.map-course')!;
  this.life.listen(course,'toggle',()=>{if(course.open)this.fit('orbit');});
  this.life.listen(select,'change',()=>{this.target=select.value;this.fit('target');});
  this.life.listen(this.root.querySelector('#map-plane') as HTMLSelectElement,'change',e=>{this.plane=(e.target as HTMLSelectElement).value as typeof this.plane;this.pan=[0,0];this.displayPan=[0,0];this.viewFrame=null;this.fadeView();});
  ['prograde','radial','normal'].forEach((name,i)=>this.life.listen(this.root.querySelector('#map-'+name) as HTMLInputElement,'input',e=>{
   if(this.mode==='system')this.fit('orbit');
   this.correction='advanced';
   const input=e.target as HTMLInputElement;this.dv[i]=Math.max(-50000,Math.min(50000,Number(input.value)||0));
  }));
  this.life.listen(this.root.querySelector('#map-strength') as HTMLSelectElement,'change',e=>{if(this.mode==='system')this.fit('orbit');this.strength=Number((e.target as HTMLSelectElement).value);});
  this.life.listen(ui,'click',e=>{
   const button=(e.target as HTMLElement).closest<HTMLButtonElement>('button');if(!button)return;
   if(button.dataset.destination){this.target=button.dataset.destination;select.value=this.target;this.fit('target');return;}
   if(button.dataset.correction){if(this.mode==='system')this.fit('target');this.correction=button.dataset.correction as 'toward'|'faster'|'slower';if(this.strength===0)this.strength=Number((this.root.querySelector('#map-strength') as HTMLSelectElement).value);return;}
   const a=button.dataset.map;
   if(a==='close')this.close();
   else if(a==='orbit'||a==='target'||a==='system')this.fit(a);
   else if(a==='reset')this.fit(this.mode);
   else if(a==='plus'||a==='minus')this.zoomAt(undefined,undefined,a==='plus'?1.5:1/1.5);
   else if(a==='clear'){this.strength=0;this.dv=[0,0,0];this.root.querySelectorAll<HTMLInputElement>('input').forEach(i=>i.value='0');}
   else if(a==='stop'){this.cancel();this.status('Burn stopped.',true);}
   else if(a==='burn'){
    const s=this.snapshot(),r=s.position.map((v,i)=>v-s.reference.position[i]!) as Vec3,v=s.velocity.map((v,i)=>v-s.reference.velocity[i]!) as Vec3;
    this.status(this.burn(this.plannedDelta(s)),true);
   } else if(button.id==='transfer-go'&&this.fly(this.target))this.close();
  });
  this.life.listen(this.canvas,'wheel',e=>{e.preventDefault();this.zoomAt(e.clientX,e.clientY,Math.exp(-e.deltaY*.0015));},{passive:false});
  this.life.listen(this.canvas,'pointerdown',e=>{this.zoom=this.displayZoom;this.pan=[...this.displayPan];this.canvas.setPointerCapture(e.pointerId);this.pointers.set(e.pointerId,[e.clientX,e.clientY]);this.moved=false;});
  this.life.listen(this.canvas,'pointermove',e=>{
   const old=this.pointers.get(e.pointerId);if(!old)return;
   if(this.pointers.size===2){const other=[...this.pointers.entries()].find(([id])=>id!==e.pointerId)![1];const before=Math.hypot(old[0]-other[0],old[1]-other[1]);const after=Math.hypot(e.clientX-other[0],e.clientY-other[1]);if(before>1)this.zoomAt((e.clientX+other[0])/2,(e.clientY+other[1])/2,after/before);}
   else {this.pan[0]+=e.clientX-old[0];this.pan[1]+=e.clientY-old[1];}
   this.displayZoom=this.zoom;this.displayPan=[...this.pan];
   if(Math.hypot(e.clientX-old[0],e.clientY-old[1])>1)this.moved=true;
   this.pointers.set(e.pointerId,[e.clientX,e.clientY]);
  });
  const release=(e:PointerEvent)=>{if(!this.moved&&this.pointers.size===1){const hit=[...this.hits].sort((a,b)=>Math.hypot(a.x-e.clientX,a.y-e.clientY)-Math.hypot(b.x-e.clientX,b.y-e.clientY)).find(h=>Math.hypot(h.x-e.clientX,h.y-e.clientY)<22);if(hit&&hit.name!=='sun'){this.target=hit.name;select.value=this.target;this.fit('target');}}this.pointers.delete(e.pointerId);};
  this.life.listen(this.canvas,'pointerup',release);this.life.listen(this.canvas,'pointercancel',e=>this.pointers.delete(e.pointerId));
  this.life.listen(window,'keydown',e=>{
   if(!this.active)return;
   e.stopImmediatePropagation();
   if(e.key==='Escape'||(e.key.toLowerCase()==='m'&&!(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement))){e.preventDefault();this.close();}
  },{capture:true});
 }
 private plannedDelta(s:MapSnapshot):Vec3 {
  const r=s.position.map((v,i)=>v-s.reference.position[i]!) as Vec3;
  const v=s.velocity.map((v,i)=>v-s.reference.velocity[i]!) as Vec3;
  if(this.correction==='advanced')return maneuverVector(r,v,this.dv.map(simulationMetres) as Vec3);
  const destination=s.bodies.find(b=>b.name===this.target)?.position||s.position;
  return simpleCorrection(s.position,v,destination,this.correction,simulationMetres(this.strength));
 }
 private status(text:string,hold=false){if(hold)this.messageUntil=Date.now()+4000;if(hold||Date.now()>=this.messageUntil)this.root.querySelector('#map-status')!.textContent=text;}
 private fit(mode:typeof this.mode){this.mode=mode;this.root.dataset.view=mode;if(mode==='system')(this.root.querySelector('.map-course') as HTMLDetailsElement).open=false;this.viewFrame=null;this.plane=mode==='orbit'?'orbit':mode==='target'?'destination':'xz';(this.root.querySelector('#map-plane') as HTMLSelectElement).value=this.plane;this.pan=[0,0];this.zoom=1;this.displayPan=[0,0];this.displayZoom=1;this.fadeView();}
 toggle(){if(this.active)this.close();else{this.active=true;this.opened();this.root.hidden=false;this.fit('system');this.previousTime=0;if(!this.drawing){this.drawing=true;this.life.frame(this.draw);}}}
 close(){this.viewAnimation?.cancel();this.active=false;this.root.hidden=true;this.pointers.clear();}
 dispose(){this.close();this.life.dispose();}
 private fadeView():void {
  this.viewAnimation?.cancel();
  if(!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
   this.viewAnimation=this.canvas.animate?.([{opacity:.35},{opacity:1}],{duration:180,easing:'ease-out'});
 }
 private viewport(w:number,h:number):[number,number] {
  const top=this.root.querySelector('aside')!.getBoundingClientRect().top;
  return [w>700?w-310:w,Math.max(100,(w>700?h-70:top>160?top-12:h-270)-160)];
 }
 private zoomAt(x:number|undefined,y:number|undefined,factor:number):void {
  const [w,h]=this.viewport(window.innerWidth,window.innerHeight);
  const cx=w/2,cy=160+h/2;
  x??=cx;y??=cy;
  const next=Math.max(.02,Math.min(1e6,this.zoom*factor)),ratio=next/this.zoom;
  this.pan=[x-cx-(x-cx-this.pan[0])*ratio,y-cy-(y-cy-this.pan[1])*ratio];this.zoom=next;
 }
 private drawOverview(ctx:CanvasRenderingContext2D,s:MapSnapshot,w:number,h:number):void {
  const [vw,vh]=this.viewport(w,h),cx=vw/2+this.displayPan[0],cy=160+vh/2+this.displayPan[1];
  const bodies=s.bodies.filter(b=>b.name!=='moon'&&b.name!=='sun');
  const size=Math.max(60,Math.min(vw/2-65,vh/2-35))*this.displayZoom;
  this.hits=[];ctx.font='12px system-ui';
  const labels:{name:string;x:number;y:number;radius:number}[]=[];
  const point=(name:string,x:number,y:number,radius:number)=>{
   ctx.fillStyle=colors[name]||'#aaa';ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();
   if(name===this.target){ctx.strokeStyle='#78c8ef';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,radius+5,0,Math.PI*2);ctx.stroke();}
   labels.push({name,x,y,radius});this.hits.push({name,x,y});
  };
  if(s.bodies.some(b=>b.name==='sun'))point('sun',cx,cy,10);
  bodies.forEach((b,i)=>{
   const radius=size*(i+1)/Math.max(1,bodies.length),angle=-2.3+i*.62;
   ctx.strokeStyle='#293644';ctx.lineWidth=1;ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.stroke();
   const x=cx+Math.cos(angle)*radius,y=cy+Math.sin(angle)*radius;
   point(b.name,x,y,b.name==='jupiter'||b.name==='saturn'?7:5);
   if(b.name==='earth'&&s.bodies.some(b=>b.name==='moon'))point('moon',x+30,y-24,3);
  });
  const occupied=this.hits.map(p=>({x:p.x-10,y:p.y-10,w:20,h:20}));
  for(const p of labels.sort((a,b)=>Number(b.name===s.reference.name)-Number(a.name===s.reference.name))){
   const text=p.name[0]!.toUpperCase()+p.name.slice(1)+(p.name===s.reference.name?' · You':'');
   const tw=ctx.measureText(text).width;
   const offsets=[[p.radius+9,-6],[-tw-p.radius-9,-6],[-tw/2,-27],[-tw/2,14],[p.radius+12,-25],[-tw-p.radius-12,14]];
   const options=offsets.map(([dx,dy])=>({x:p.x+dx!,y:p.y+dy!,w:tw,h:14}));
   const rect=options.find(a=>a.x>=8&&a.x+a.w<vw-8&&occupied.every(b=>a.x+a.w+3<b.x||a.x>b.x+b.w+3||a.y+a.h+2<b.y||a.y>b.y+b.h+2))||options[0]!;
   ctx.fillStyle=p.name===s.reference.name?'#80d5fd':'#d9e1e7';ctx.fillText(text,rect.x,rect.y+11);occupied.push(rect);
  }
  ctx.fillStyle='#8498a8';ctx.fillText('Choose a planet to view your route',20,160+vh-22);
  ctx.fillText('Overview · positions simplified',20,160+vh-5);
 }
 private draw=(time:number)=>{
  if(!this.active){this.drawing=false;return;}this.life.frame(this.draw);
  const dt=this.previousTime ? Math.max(0,Math.min(.05,(time-this.previousTime)/1000)) : 1/60;
  this.previousTime=time;
  const blend=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 1 : 1-Math.exp(-dt*18);
  this.displayZoom+=(this.zoom-this.displayZoom)*blend;
  for(let i=0;i<2;i++)this.displayPan[i]!+=(this.pan[i]!-this.displayPan[i]!)*blend;
  const s=this.snapshot(),ref=s.reference,target=s.bodies.find(b=>b.name===this.target) as MapBody|undefined;
  const w=window.innerWidth,h=window.innerHeight,dpr=Math.min(2,window.devicePixelRatio||1);
  if(this.canvas.width!==w*dpr||this.canvas.height!==h*dpr){this.canvas.width=w*dpr;this.canvas.height=h*dpr;}
  const ctx=this.canvas.getContext('2d')!;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#020305';ctx.fillRect(0,0,w,h);
  const delta=this.plannedDelta(s);
  this.root.querySelector('#map-reference')!.textContent=ref.name[0]!.toUpperCase()+ref.name.slice(1);
  this.root.querySelector('#map-distance')!.textContent=target?`${distanceText(new Vector3(...s.position).distanceTo(new Vector3(...target.position)))} to ${target.name}`:'';
  (this.root.querySelector('#transfer-go') as HTMLButtonElement).disabled=!landingTargets.has(this.target)||this.target===ref.name&&s.grounded;
  (this.root.querySelector('[data-map="burn"]') as HTMLButtonElement).disabled=s.grounded||s.paused||s.fuel<=0||new Vector3(...delta).length()<.01||s.remainingBurn>0;
  if(s.remainingBurn>0)this.status(`Burning · ${gameMetres(s.remainingBurn).toFixed(1)} m/s remaining`);
  else if(s.grounded)this.status('Launch to adjust your orbit.');
  else if(s.paused)this.status('Resume flight to execute a burn.');
  else this.status(`Δv ${gameMetres(new Vector3(...delta).length()).toFixed(0)} m/s · ${(s.fuel/1000).toFixed(1)} t fuel`);
  this.root.querySelectorAll<HTMLButtonElement>('[data-correction]').forEach(b=>b.classList.toggle('selected',b.dataset.correction===this.correction));
  this.root.querySelectorAll<HTMLButtonElement>('nav button[data-map]').forEach(b=>b.classList.toggle('selected',b.dataset.map===this.mode));
  this.root.querySelectorAll<HTMLButtonElement>('[data-destination]').forEach(b=>b.classList.toggle('selected',b.dataset.destination===this.target));
  if(this.mode==='system'){this.drawOverview(ctx,s,w,h);return;}
  const r=s.position.map((v,i)=>v-ref.position[i]!) as Vec3, v=s.velocity.map((v,i)=>v-ref.velocity[i]!) as Vec3;
  const targetParent=s.bodies.find(b=>b.name===(target?.name==='moon'?'earth':'sun'));
  const transverse=target?.velocity.map((x,i)=>x-(targetParent?.velocity[i]||0)) as Vec3|undefined;
  let basis=this.plane==='destination'&&target?destinationBasis(s.position,target.position,transverse):mapBasis(r,v,this.plane==='destination'?'xz':this.plane);
  const origin:Vec3=[...ref.position];
  let span=Math.max((ref.radius||1)*2.8,new Vector3(...r).length()*2.5);
  if(this.mode==='target'&&target){for(let i=0;i<3;i++)origin[i]=(s.position[i]!+target.position[i]!)/2;span=Math.max(new Vector3(...s.position).distanceTo(new Vector3(...target.position))*1.5,(target.radius||1)*4);}
  if(this.mode==='target'&&target?.name==='moon'&&ref.name==='earth'){
   origin.splice(0,3,...ref.position);
   span=2.4*Math.max(new Vector3(...target.position).distanceTo(new Vector3(...ref.position)),new Vector3(...r).length());
  }
  // Fit once. Follow the anchor's translation, never the craft's changing heading or SOI.
  if(!this.viewFrame){
   const anchor=ref;
   this.viewFrame={basis,anchor:anchor.name,offset:origin.map((x,i)=>x-anchor.position[i]!) as Vec3,span};
  }
  const frame=this.viewFrame,anchor=s.bodies.find(b=>b.name===frame.anchor)||ref;
  basis=frame.basis;span=frame.span;
  for(let i=0;i<3;i++)origin[i]=anchor.position[i]!+frame.offset[i]!;
  const [availableW,availableH]=this.viewport(w,h);
  const scale=span/Math.max(100,Math.min(availableW,availableH))/this.displayZoom;
  const center:[number,number]=[availableW/2+this.displayPan[0],160+Math.max(100,availableH)/2+this.displayPan[1]];
  const project=(p:Vec3)=>projectMap(p,origin,basis,scale,center);
  const path=(points:Vec3[],base:Vec3,color:string,dashed=false)=>{
   ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=dashed?1.5:1.3;ctx.setLineDash(dashed?[6,5]:[]);
   let started=false;
   for(const p of points){const [x,y]=project(p.map((v,i)=>v+base[i]!) as Vec3);if(!Number.isFinite(x+y)||Math.abs(x)+Math.abs(y)>1e8){started=false;continue;}if(!started){ctx.moveTo(x,y);started=true;}else ctx.lineTo(x,y);}
   ctx.stroke();ctx.setLineDash([]);
  };
  const sun=s.bodies.find(b=>b.name==='sun');
  for(const b of s.bodies){if(b===sun||!sun)continue;const parent=b.name==='moon'?s.bodies.find(b=>b.name==='earth')!:sun;if(!parent)continue;
   if(this.mode==='orbit'||this.mode==='target'&&!(b===target&&parent===ref))continue;
   const br=b.position.map((v,i)=>v-parent.position[i]!) as Vec3,bv=b.velocity.map((v,i)=>v-parent.velocity[i]!) as Vec3;
   path(mapTrajectory(br,bv,parent.mass,(parent as MapBody).radius||1),parent.position,'#3e4854');
  }
  const current=s.grounded?[]:mapTrajectory(r,v,ref.mass,ref.radius||1);path(current,ref.position,'#e9edf1');
  if(!s.grounded&&new Vector3(...delta).length()>.01)path(mapTrajectory(r,v.map((x,i)=>x+delta[i]!) as Vec3,ref.mass,ref.radius||1),ref.position,'#f4bb55',true);
  this.hits=[];
  for(const b of s.bodies as MapBody[]){if(this.mode==='orbit'&&b!==ref&&b!==anchor||this.mode==='target'&&b!==ref&&b!==target&&b!==anchor)continue;const [x,y]=project(b.position);if(x<-80||y<-80||x>w+80||y>h+80)continue;const radius=Math.max(b===target?8:b===ref?6:3,Math.min(2000,(b.radius||1)/scale));
   const col=colors[b.name]||'#b9c1cb';const gradient=ctx.createRadialGradient(x-radius*.3,y-radius*.3,0,x,y,radius);gradient.addColorStop(0,col);gradient.addColorStop(1,'#14202d');
   ctx.fillStyle=gradient;ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();
   if(b.name===this.target){ctx.strokeStyle='#58baff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,radius+6,0,Math.PI*2);ctx.stroke();}
   ctx.font='12px system-ui';ctx.fillStyle=col;ctx.fillText(b.name[0]!.toUpperCase()+b.name.slice(1),x+Math.min(radius,80)+9,y-9);this.hits.push({name:b.name,x,y});
  }
  const [rx,ry]=project(s.position);ctx.fillStyle='#65c8ff';ctx.beginPath();ctx.moveTo(rx,ry-8);ctx.lineTo(rx-5,ry+5);ctx.lineTo(rx+5,ry+5);ctx.closePath();ctx.fill();ctx.fillText('You',rx+10,ry+4);
  if(this.mode==='orbit'&&!s.grounded&&current.length>2){const ordered=current.map(p=>({p,r:Math.hypot(...p)})).sort((a,b)=>a.r-b.r);for(const [point,label] of [[ordered[0],'Pe'],[ordered.at(-1),'Ap']] as const){if(!point || label==='Ap' && new Vector3(...v).lengthSq()/2-G*ref.mass/Math.hypot(...r)>=0)continue;const [x,y]=project(point.p.map((v,i)=>v+ref.position[i]!) as Vec3);if(x<0||y<0||x>w||y>h)continue;ctx.fillStyle='#aab5c2';ctx.fillText(`${label} ${distanceText(point.r-(ref.radius||0))}`,x+6,y+14);}}
  const bar=10**Math.floor(Math.log10(scale*90));ctx.fillStyle='#9da7b4';ctx.fillRect(20,h-70,bar/scale,2);ctx.fillText(distanceText(bar),20,h-78);

 };
}
