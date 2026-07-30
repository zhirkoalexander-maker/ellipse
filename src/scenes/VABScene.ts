import * as THREE from 'three';
import { PART_CATALOG } from '../parts/PartCatalog';
import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Part, PartKind } from '../parts/Part';
import { PART_SCALE } from '../config/constants';
import { gltfCache } from '../parts/PartBuilder';

const PART_H: Record<string, number> = { S: 0.7, M: 1.1, L: 1.6, XL: 2.2 };

const ICON: Record<string, string> = {
  capsule:'🔺', tank:'🛢️', engine:'🔥', decoupler:'✂️', parachute:'☂️', legs:'🦿', heatshield:'🛡️', gltf:'🚀',
};
const CLR: Record<string, string> = {
  capsule:'#EACD9E', tank:'#4488FF', engine:'#FF6633', decoupler:'#FF5577', parachute:'#44CC77', legs:'#8899AA', heatshield:'#CC8855', gltf:'#CC88BB',
};

export class VABScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  assembly: Assembly;
  private rocketGroup: THREE.Group;
  private rootEl: HTMLDivElement;
  private rocketInfoEl: HTMLElement;
  private stackH = 0;
  private names: string[] = [];
  private onLaunch: (a: Assembly) => void;
  private onBack: () => void;
  private vabAzi = 0;
  private vabPol = Math.PI / 2;
  private vabDist = 3;
  private dragging = false;
  private prev = { x: 0, y: 0 };
  private target = new THREE.Vector3(0, PART_SCALE, 0);

  constructor(onLaunch: (a: Assembly) => void, onBack: () => void) {
    this.onLaunch = onLaunch;
    this.onBack = onBack;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0d1a);
    this.scene.add(new THREE.AmbientLight(0x444466, 0.5));
    const d = new THREE.DirectionalLight(0xFFFFFF, 3);
    d.position.set(2, 4, 3); this.scene.add(d);
    this.scene.add(new THREE.HemisphereLight(0x8888cc, 0x444466, 0.8));
    const g = new THREE.GridHelper(10, 20, 0x334466, 0x223355);
    g.position.y = -0.3; this.scene.add(g);
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(PART_SCALE * 4, 0.001, PART_SCALE * 4),
      new THREE.MeshStandardMaterial({ color: 0x1c2040, roughness: 0.9 })
    );
    pad.position.y = -PART_SCALE * 0.3; this.scene.add(pad);

    this.camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.01, 1000);
    this.cam();

    this.assembly = new Assembly();
    this.rocketGroup = new THREE.Group();
    this.scene.add(this.rocketGroup);
    this.orbit();

    this.rootEl = document.createElement('div');
    this.rootEl.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.rootEl.innerHTML = `<div style="width:260px;background:rgba(10,12,24,0.97);border-right:1px solid rgba(234,205,158,0.15);display:flex;flex-direction:column;pointer-events:auto;">
      <div style="padding:16px;border-bottom:1px solid rgba(234,205,158,0.15);">
        <div style="font-size:20px;color:#EACD9E;font-weight:700;">BUILD</div>
        <div id="vab-info" style="margin-top:8px;font-size:11px;color:rgba(255,255,255,0.3);min-height:32px;">Pick parts below</div>
      </div>
      <div id="vab-list" style="flex:1;overflow-y:auto;padding:8px;"></div>
      <div style="padding:12px;border-top:1px solid rgba(234,205,158,0.15);display:flex;flex-direction:column;gap:8px;">
        <button id="vab-go" style="width:100%;padding:14px;background:#EACD9E;color:#0a0c18;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;">🚀 LAUNCH</button>
        <button id="vab-back" style="width:100%;padding:10px;background:transparent;color:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.1);border-radius:8px;font-size:12px;cursor:pointer;">← BACK</button>
      </div>
    </div><div style="flex:1;pointer-events:none;"></div>`;
    this.rocketInfoEl = this.rootEl.querySelector('#vab-info')!;
    this.buildList();
    this.rootEl.querySelector('#vab-go')!.addEventListener('click', () => { if (this.assembly.roots.length) this.onLaunch(this.assembly); });
    this.rootEl.querySelector('#vab-back')!.addEventListener('click', () => this.onBack());
  }

  private buildList() {
    const el = this.rootEl.querySelector('#vab-list')!;
    const cats: { k: PartKind; parts: Part[] }[] = [];
    for (const p of PART_CATALOG) {
      let c = cats.find(x => x.k === p.kind);
      if (!c) { c = { k: p.kind, parts: [] }; cats.push(c); }
      c.parts.push(p);
    }
    for (const c of cats) {
      const hdr = document.createElement('div');
      hdr.style.cssText = `font-size:8px;color:${CLR[c.k]};letter-spacing:0.1em;opacity:0.6;padding:6px 0 2px;`;
      hdr.textContent = c.k.toUpperCase();
      el.appendChild(hdr);
      for (const p of c.parts) {
        const b = document.createElement('button');
        const icon = ICON[p.kind] || '⬡';
        let stat = '';
        if (p.kind === 'engine') stat = `<b>${(p.thrust!/1000).toFixed(0)}k</b>`;
        else if (p.kind === 'tank') stat = `<b>${(p.fuelCapacity!/1000).toFixed(0)}t</b>`;
        b.innerHTML = `${icon} ${p.name} <span style="color:#999;font-size:10px;">${stat}</span>`;
        b.style.cssText = `display:block;width:100%;padding:8px;background:transparent;color:#ccc;border:none;border-radius:4px;font-size:12px;text-align:left;cursor:pointer;margin-bottom:1px;`;
        b.addEventListener('mouseenter', () => b.style.background = 'rgba(255,255,255,0.06)');
        b.addEventListener('mouseleave', () => b.style.background = 'transparent');
        b.addEventListener('click', () => this.add(p));
        el.appendChild(b);
      }
    }
  }

  private add(p: Part) {
    const h = PART_H[p.size] || 0.6;
    const y = this.stackH + h / 2;
    this.assembly.addRoot({ part: p, position: [0, y * PART_SCALE, 0], rotation: 0, children: [] });
    this.stackH += h;
    this.names.push(p.name);
    this.refresh();
    this.info();
  }

  private info() {
    if (!this.names.length) { this.rocketInfoEl.textContent = 'Pick parts below'; return; }
    this.rocketInfoEl.innerHTML = this.names.map(n => `▸ ${n}`).join('<br>');
  }

  private async refresh() {
    while (this.rocketGroup.children.length) this.rocketGroup.remove(this.rocketGroup.children[0]!);
    if (!this.assembly.roots.length) return;
    const needsG = this.assembly.roots.some(n => n.part.kind === 'gltf' && n.part.gltfUrl && !gltfCache.has(n.part.gltfUrl));
    if (needsG) {
      const { loadGLTF } = await import('../parts/PartBuilder');
      for (const r of this.assembly.roots) {
        if (r.part.kind === 'gltf' && r.part.gltfUrl && !gltfCache.has(r.part.gltfUrl)) {
          await loadGLTF(r.part.gltfUrl, r.part.gltfScale ?? 1);
        }
      }
    }
    this.rocketGroup.add(this.assembly.toMesh());
  }

  private cam() {
    const ox = this.vabDist * Math.sin(this.vabPol) * Math.cos(this.vabAzi);
    const oy = this.vabDist * Math.cos(this.vabPol);
    const oz = this.vabDist * Math.sin(this.vabPol) * Math.sin(this.vabAzi);
    this.camera.position.set(this.target.x + ox, this.target.y + oy, this.target.z + oz);
    this.camera.lookAt(this.target);
  }

  private orbit() {
    document.addEventListener('mousedown', e => { if (e.button === 0) { this.dragging = true; this.prev = { x: e.clientX, y: e.clientY }; } });
    document.addEventListener('mousemove', e => {
      if (!this.dragging) return;
      this.vabAzi -= (e.clientX - this.prev.x) * 0.005;
      this.vabPol = Math.max(0.05, Math.min(Math.PI - 0.05, this.vabPol + (e.clientY - this.prev.y) * 0.005));
      this.prev = { x: e.clientX, y: e.clientY };
      this.cam();
    });
    document.addEventListener('mouseup', () => this.dragging = false);
    document.addEventListener('wheel', e => { this.vabDist *= e.deltaY > 0 ? 1.1 : 0.9; this.vabDist = Math.max(0.5, Math.min(50, this.vabDist)); this.cam(); }, { passive: true });
  }

  mount() { document.body.appendChild(this.rootEl); }
  unmount() { this.rootEl.remove(); }
}
