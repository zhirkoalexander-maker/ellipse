import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { buildLegacyPartMesh, buildPartMesh, SIZE_DIMS } from './PartBuilder';
import { PART_CATALOG } from './PartCatalog';

const kinds = ['starter','capsule','tank','engine','decoupler','legs','fairing','heatshield','parachute','rcs','solar'];
const labels: Record<string,string> = {starter:'Starter rocket',capsule:'Command capsule',tank:'Fuel tank',engine:'Liquid-fuel engine',decoupler:'Stage decoupler',legs:'Landing gear',fairing:'Payload fairing',heatshield:'Heat shield',parachute:'Parachute pack',rcs:'RCS thrusters',solar:'Solar panels'};
const container = document.querySelector<HTMLElement>('#gallery')!;
let legacy = false;
const cards = kinds.map(kind => {
  const part = PART_CATALOG.find(p => p.kind === (kind === 'starter' ? 'capsule' : kind))!;
  const card = document.createElement('section'); card.className='part';
  const viewport = document.createElement('div'); viewport.className='view';
  const label = document.createElement('div'); label.className='label';
  const name = document.createElement('strong'); name.textContent=labels[kind]!;
  const detail = document.createElement('span'); detail.textContent=kind === 'starter' ? 'CAPSULE + 2 TANKS + ENGINE' : `${part.size} / ${part.id}`;
  label.append(name,detail);card.append(viewport,label);container.append(card);
  const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.35;
  viewport.append(renderer.domElement);
  const scene=new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xeaf4ff,0x3f3630,2));
  for(const [color,intensity,x,y,z] of [[0xfff3df,4,3,4,4],[0x86b9e5,3,-3,1,-3],[0xffffff,2,0,4,-2]]) {
    const light=new THREE.DirectionalLight(color,intensity);light.position.set(x!,y!,z!);scene.add(light);
  }
  const camera=new THREE.PerspectiveCamera(32,1,0.001,100);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=false;controls.enableZoom=false;
  let model:THREE.Group;
  const rebuild=()=>{
    if(model){scene.remove(model);model.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();const mats=Array.isArray(o.material)?o.material:[o.material];for(const mat of mats)mat.dispose();}});}
    if(kind==='starter') {
      model=new THREE.Group();let y=0;
      for(const id of ['engine_ant','tank_s_lfo','tank_s_lfo','capsule_mk1']) {
        const module=PART_CATALOG.find(p=>p.id===id)!;
        const height=SIZE_DIMS[module.size].height;
        const mesh=legacy?buildLegacyPartMesh(module):buildPartMesh(module);
        mesh.position.y=y+height/2;model.add(mesh);y+=height;
      }
    } else model=legacy?buildLegacyPartMesh(part):buildPartMesh(part);
    const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
    model.position.sub(center);scene.add(model);
    const radius=Math.max(size.x,size.y,size.z)*0.58;
    camera.position.set(radius*2.4,radius*1.5,radius*3.8);controls.target.set(0,0,0);controls.update();
  };
  rebuild();
  const resize=()=>{const w=viewport.clientWidth,h=viewport.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};
  new ResizeObserver(resize).observe(viewport);resize();
  return {renderer,scene,camera,controls,rebuild};
});
document.querySelector<HTMLButtonElement>('#legacy')!.addEventListener('click',event=>{
  legacy=!legacy;
  const button=event.currentTarget as HTMLButtonElement;button.textContent=legacy?'Show current design':'Show original models';button.setAttribute('aria-pressed',String(legacy));
  document.querySelector('#edition')!.textContent=legacy?'Original models · Preserved for comparison':'Current design · Original 3D parts · Previous models preserved';
  cards.forEach(card=>card.rebuild());
});
function render(){requestAnimationFrame(render);for(const card of cards){card.controls.update();card.renderer.render(card.scene,card.camera);}}
render();
