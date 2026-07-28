import * as THREE from 'three';
import { PART_CATALOG, findPart } from '../parts/PartCatalog';
import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Part, PartKind } from '../parts/Part';
import { PART_SCALE, ROCKET_VISUAL_SCALE, G0 } from '../config/constants';
import { buildRocketFromDescription } from '../parts/RocketBuilder';
import { gltfCache, loadGLTF } from '../parts/PartBuilder';

const PART_HEIGHT: Record<string, number> = {
  S: 0.7 * PART_SCALE,
  M: 1.1 * PART_SCALE,
  L: 1.6 * PART_SCALE,
  XL: 2.2 * PART_SCALE,
};

export class VABScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  assembly: Assembly;
  private rocketGroup: THREE.Group;
  private rootEl: HTMLDivElement;
  private partListEl: HTMLDivElement;
  private currentRocketEl: HTMLDivElement;
  private onLaunch: (assembly: Assembly) => void;
  private onBack!: () => void;
  private stackHeight = 0;
  private addedPartNames: string[] = [];
  private history: AssemblyNode[][] = [];
  private framed = false;

  private vabAzimuth = 0;
  private vabPolar = Math.PI / 2;
  private vabDist = 3;
  private vabIsDragging = false;
  private vabPrevMouse = { x: 0, y: 0 };
  private vabTarget = new THREE.Vector3(0, PART_SCALE, 0);

  constructor(onLaunch: (assembly: Assembly) => void, onBack: () => void) {
    this.onLaunch = onLaunch;
    this.onBack = onBack;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0d1a);
    this.scene.add(new THREE.AmbientLight(0x444466, 0.5));
    const dir = new THREE.DirectionalLight(0xFFFFFF, 3.0);
    dir.position.set(2, 4, 3);
    this.scene.add(dir);
    const fill = new THREE.DirectionalLight(0x8888cc, 1.0);
    fill.position.set(-2, 1, -1);
    this.scene.add(fill);
    const hemi = new THREE.HemisphereLight(0x8888cc, 0x444466, 0.8);
    this.scene.add(hemi);

    // VAB grid floor
    const gridSize = 10;
    const gridDivs = 20;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivs, 0x334466, 0x223355);
    gridHelper.position.y = -0.3;
    this.scene.add(gridHelper);

    // Subtle platform ring
    const ringGeom = new THREE.RingGeometry(0.5, 0.8, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x223355, metalness: 0.6, roughness: 0.4, side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.28;
    this.scene.add(ring);

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.updateVabCamera();

    const padSize = PART_SCALE * 4;
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(padSize, 0.02 * PART_SCALE, padSize),
      new THREE.MeshStandardMaterial({ color: 0x1c2040, roughness: 0.9 })
    );
    pad.position.y = -PART_SCALE * 0.3;
    this.scene.add(pad);

    this.assembly = new Assembly();
    this.rocketGroup = new THREE.Group();
    this.scene.add(this.rocketGroup);

    // VAB orbit controls
    this.setupVabOrbit();

    // UI
    this.rootEl = document.createElement('div');
    this.rootEl.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.rootEl.innerHTML = `
      <div style="width:300px;background:rgba(10,12,24,0.97);border-right:1px solid rgba(234,205,158,0.2);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:14px 16px;border-bottom:1px solid rgba(234,205,158,0.15);display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="color:#EACD9E;font-size:18px;letter-spacing:0.08em;">VAB</div>
            <div style="color:#F4F5F2;font-size:10px;opacity:0.5;margin-top:2px;">Build your rocket</div>
          </div>
          <div id="vab-delta-v" style="text-align:right;">
            <div id="vab-dv-value" style="font-size:22px;font-weight:700;color:#66DD88;letter-spacing:0.03em;">—</div>
            <div id="vab-dv-label" style="font-size:9px;color:rgba(244,245,242,0.5);">Δv m/s</div>
          </div>
        </div>
        <div style="padding:6px 8px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div style="font-size:8px;color:rgba(244,245,242,0.4);letter-spacing:0.05em;margin-bottom:4px;">QUICK BUILD</div>
          <div id="vab-presets" style="display:flex;flex-wrap:wrap;gap:3px;"></div>
        </div>
        <div style="padding:6px 8px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div style="font-size:8px;color:rgba(244,245,242,0.4);letter-spacing:0.05em;margin-bottom:4px;">YOUR ROCKET</div>
          <div id="vab-current" style="min-height:36px;padding:5px 6px;background:rgba(244,245,242,0.04);border-radius:3px;"></div>
        </div>
        <div id="vab-parts" style="flex:1;overflow-y:auto;padding:6px 8px;"></div>
        <div id="vab-status" style="padding:0 12px;font-size:9px;color:rgba(244,245,242,0.4);text-align:center;min-height:16px;line-height:16px;"></div>
        <div style="padding:10px 12px;border-top:1px solid rgba(234,205,158,0.15);display:flex;gap:6px;flex-wrap:wrap;">
          <button id="vab-launch" style="flex:2;min-width:100px;padding:10px;background:#EACD9E;color:#0A0C18;border:none;border-radius:4px;font-size:12px;font-weight:600;cursor:pointer;letter-spacing:0.06em;">LAUNCH</button>
          <button id="vab-remove" style="flex:1;min-width:70px;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:10px;cursor:pointer;">UNDO</button>
          <button id="vab-flip" style="flex:1;min-width:50px;padding:8px;background:transparent;color:rgba(244,245,242,0.5);border:1px solid rgba(244,245,242,0.1);border-radius:4px;font-size:10px;cursor:pointer;">🔄 FLIP</button>
          <button id="vab-clear" style="flex:1;min-width:50px;padding:8px;background:transparent;color:rgba(244,245,242,0.3);border:1px solid rgba(244,245,242,0.08);border-radius:4px;font-size:10px;cursor:pointer;">CLEAR</button>
          <button id="vab-back" style="width:100%;padding:7px;background:transparent;color:rgba(244,245,242,0.4);border:1px solid rgba(244,245,242,0.08);border-radius:4px;font-size:10px;cursor:pointer;margin-top:2px;">← BACK TO MENU</button>
        </div>
      </div>
      <div style="flex:1;pointer-events:none;"></div>
    `;
    this.partListEl = this.rootEl.querySelector('#vab-parts')!;
    this.currentRocketEl = this.rootEl.querySelector('#vab-current')!;
    this.buildPartList();
    this.buildPresets();
    this.updateCurrentList();

    this.rootEl.querySelector('#vab-launch')!.addEventListener('click', () => {
      if (this.assembly.roots.length > 0) this.onLaunch(this.assembly);
    });
    this.rootEl.querySelector('#vab-remove')!.addEventListener('click', () => this.undoLast());
    this.rootEl.querySelector('#vab-flip')!.addEventListener('click', () => this.flipLast());
    this.rootEl.querySelector('#vab-clear')!.addEventListener('click', () => { this.history.push(this.assembly.roots.map(r => ({...r, children:[...r.children]}))); this.clearAll(); });
    this.rootEl.querySelector('#vab-back')!.addEventListener('click', () => this.onBack());

    this.addSaveLoadButtons();
  }

  private addSaveLoadButtons(): void {
    const presetsEl = this.rootEl.querySelector('#vab-presets')!.parentElement!;
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:3px;margin-top:4px;';
    const saveBtn = document.createElement('button');
    saveBtn.textContent = '💾 SAVE';
    saveBtn.style.cssText = 'flex:1;padding:3px 6px;background:rgba(68,238,102,0.1);color:#44EE66;border:1px solid rgba(68,238,102,0.2);border-radius:3px;font-size:8px;cursor:pointer;';
    saveBtn.addEventListener('click', () => this.saveRocket());
    const loadBtn = document.createElement('button');
    loadBtn.textContent = '📂 LOAD';
    loadBtn.style.cssText = 'flex:1;padding:3px 6px;background:rgba(68,136,255,0.1);color:#4488FF;border:1px solid rgba(68,136,255,0.2);border-radius:3px;font-size:8px;cursor:pointer;';
    loadBtn.addEventListener('click', () => this.loadRocketDialog());
    row.appendChild(saveBtn);
    row.appendChild(loadBtn);
    presetsEl.appendChild(row);
  }

  private saveRocket(): void {
    if (this.assembly.roots.length === 0) return;
    const name = prompt('Rocket name:') || 'Unnamed';
    const data = this.assembly.roots.map(n => ({
      id: n.part.id,
      y: n.position[1],
    }));
    const designs = JSON.parse(localStorage.getItem('vab_rockets') || '{}');
    designs[name] = data;
    localStorage.setItem('vab_rockets', JSON.stringify(designs));
    const statusEl = document.getElementById('vab-status');
    if (statusEl) { statusEl.textContent = `✓ Saved "${name}"`; setTimeout(() => { statusEl.textContent = ''; }, 2000); }
  }

  private loadRocketDialog(): void {
    const designs = JSON.parse(localStorage.getItem('vab_rockets') || '{}');
    const names = Object.keys(designs);
    if (names.length === 0) {
      const statusEl = document.getElementById('vab-status');
      if (statusEl) { statusEl.textContent = 'No saved rockets'; setTimeout(() => { statusEl.textContent = ''; }, 2000); }
      return;
    }
    const name = prompt(`Load rocket:\n${names.map((n,i) => `${i+1}. ${n}`).join('\n')}\n\nType name:`);
    if (!name || !designs[name]) return;
    this.loadRocket(designs[name]);
    const statusEl = document.getElementById('vab-status');
    if (statusEl) { statusEl.textContent = `✓ Loaded "${name}"`; setTimeout(() => { statusEl.textContent = ''; }, 2000); }
  }

  private loadRocket(data: { id: string; y: number }[]): void {
    this.clearAll();
    for (const d of data) {
      const part = findPart(d.id);
      if (!part) continue;
      this.assembly.addRoot({ part, position: [0, d.y, 0], rotation: 0, children: [] });
    }
    this.syncPartsFromAssembly();
    this.refreshMesh();
    this.updateDeltaV();
  }

  private buildPresets(): void {
    const presets = [
      { label: '🚀 Suborbital', desc: 'suborbital test', color: '#6688aa' },
      { label: '🛸 Earth Orbit', desc: 'earth orbit', color: '#4488FF' },
      { label: '🌙 Moon Landing', desc: 'land on moon', color: '#88AACC' },
      { label: '🌙 Moon Return', desc: 'land on moon and return', color: '#EACD9E' },
      { label: '🌙+🛡️ Moon Safe', desc: 'safe moon landing and return with 50% fuel', color: '#66DD88' },
      { label: '🔴 Mars', desc: 'mars mission', color: '#d4733a' },
      { label: '☀️ Solar Orbit', desc: 'orbit around the sun', color: '#ffdd44' },
      { label: '🪐 Heavy Lifter', desc: 'heavy interplanetary', color: '#CC88AA' },
    ];
    const el = this.rootEl.querySelector('#vab-presets')!;
    for (const p of presets) {
      const btn = document.createElement('button');
      btn.textContent = p.label;
      btn.title = p.desc;
      btn.style.cssText = `flex:1;min-width:80px;padding:5px 6px;background:rgba(244,245,242,0.06);color:${p.color};border:1px solid rgba(244,245,242,0.1);border-radius:3px;font-size:9px;cursor:pointer;pointer-events:auto;text-align:center;white-space:nowrap;`;
      btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(244,245,242,0.12)'; });
      btn.addEventListener('mouseleave', () => { btn.style.background = 'rgba(244,245,242,0.06)'; });
      btn.addEventListener('click', () => {
        this.clearAll();
        this.assembly = buildRocketFromDescription(p.desc);
        this.refreshMesh();
        this.syncPartsFromAssembly();
        this.updateDeltaV();
      });
      el.appendChild(btn);
    }
  }

  private buildPartList(): void {
    const CATEGORY: Record<PartKind, { icon: string; color: string; bg: string; label: string }> = {
      capsule:    { icon: '🔺', color: '#EACD9E', bg: '234,205,158', label: 'CAPSULES' },
      tank:       { icon: '🛢️', color: '#4488FF', bg: '68,136,255', label: 'FUEL TANKS' },
      engine:     { icon: '🔥', color: '#FF6633', bg: '255,102,51', label: 'ENGINES' },
      decoupler:  { icon: '✂️', color: '#FF5577', bg: '255,85,119', label: 'DECOUPLERS' },
      parachute:  { icon: '☂️', color: '#44CC77', bg: '68,204,119', label: 'PARACHUTES' },
      legs:       { icon: '🦿', color: '#8899AA', bg: '136,153,170', label: 'LANDING GEAR' },
      heatshield: { icon: '🛡️', color: '#CC8855', bg: '204,136,85', label: 'HEAT SHIELDS' },
      gltf:       { icon: '🚀', color: '#CC88BB', bg: '204,136,187', label: '3D MODELS' },
    };

    const groups: { cat: typeof CATEGORY[PartKind]; parts: Part[] }[] = [];
    for (const p of PART_CATALOG) {
      let group = groups.find(g => g.parts[0]?.kind === p.kind);
      if (!group) { group = { cat: CATEGORY[p.kind], parts: [] }; groups.push(group); }
      group.parts.push(p);
    }

    for (const grp of groups) {
      const hdr = document.createElement('div');
      hdr.style.cssText = `font-size:8px;color:${grp.cat.color};letter-spacing:0.1em;margin:8px 0 3px;opacity:0.7;padding-left:2px;`;
      hdr.textContent = grp.cat.label;
      this.partListEl.appendChild(hdr);

      for (const p of grp.parts) {
        const card = document.createElement('button');
        let stat = '';
        if (p.kind === 'engine' && p.thrust) stat = `<b style="color:${grp.cat.color}">${p.thrust}kN</b>`;
        else if (p.kind === 'tank' && p.fuelCapacity) stat = `<b style="color:${grp.cat.color}">${(p.fuelCapacity/1000).toFixed(1)}t</b>`;
        else if (p.kind === 'capsule') stat = `<span style="color:#999">${(p.mass/1000).toFixed(1)}t</span>`;
        else stat = `<span style="color:#666;font-size:9px;">[${p.size}]</span>`;

        card.innerHTML = `<span style="font-size:13px;">${grp.cat.icon}</span><span style="flex:1;text-align:left;padding-left:4px;">${p.name}</span>${stat}`;
        card.style.cssText = `display:flex;align-items:center;gap:4px;width:100%;padding:5px 6px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.06);border-radius:3px;font-size:10px;text-align:left;cursor:pointer;margin-bottom:2px;transition:all 0.12s;`;

        let tip = `${p.kind} [${p.size}] — ${p.mass}kg`;
        if (p.fuelCapacity) tip += ` | fuel ${p.fuelCapacity}kg`;
        if (p.thrust) tip += ` | ${p.thrust}kN`;
        if (p.isp) tip += ` | Isp ${p.isp}s`;
        card.title = tip;

        card.addEventListener('mouseenter', () => { card.style.background = `rgba(${grp.cat.bg},0.12)`; card.style.borderColor = grp.cat.color; });
        card.addEventListener('mouseleave', () => { card.style.background = 'transparent'; card.style.borderColor = 'rgba(244,245,242,0.06)'; });
        card.addEventListener('click', () => this.addPart(p));
        this.partListEl.appendChild(card);
      }
    }
  }

  private addPart(p: Part): void {
    this.history.push(this.assembly.roots.map(r => ({ ...r, children: [...r.children] })));
    const h = PART_HEIGHT[p.size] || 0.6 * PART_SCALE;
    const yPos = this.stackHeight + h / 2;
    this.assembly.addRoot({ part: p, position: [0, yPos, 0], rotation: 0, children: [] });
    this.stackHeight += h;
    this.addedPartNames.push(p.name);
    this.refreshMesh();
    this.updateCurrentList();
    this.updateDeltaV();
  }

  private removeLast(): void {
    if (this.assembly.roots.length === 0) return;
    this.history.push(this.assembly.roots.map(r => ({ ...r, children: [...r.children] })));
    const removed = this.assembly.roots.pop()!;
    const h = PART_HEIGHT[removed.part.size] || 0.6 * PART_SCALE;
    this.stackHeight -= h;
    this.addedPartNames.pop();
    this.refreshMesh();
    this.updateCurrentList();
    this.updateDeltaV();
  }

  private undoLast(): void {
    if (this.history.length === 0) return;
    const prev = this.history.pop()!;
    this.assembly.roots = prev;
    this.syncPartsFromAssembly();
    this.refreshMesh();
    this.updateDeltaV();
  }

  private flipLast(): void {
    if (this.assembly.roots.length === 0) return;
    this.history.push(this.assembly.roots.map(r => ({ ...r, children: [...r.children] })));
    const last = this.assembly.roots[this.assembly.roots.length - 1]!;
    last.rotation = last.rotation === 0 ? Math.PI : 0;
    this.refreshMesh();
  }

  private clearAll(): void {
    this.assembly = new Assembly();
    this.stackHeight = 0;
    this.addedPartNames = [];
    this.refreshMesh();
    this.updateCurrentList();
    this.updateDeltaV();
  }

  private updateCurrentList(): void {
    const roots = this.assembly.roots;
    if (roots.length === 0) {
      this.currentRocketEl.innerHTML = '<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;text-align:center;padding:8px;">Click parts below to build</div>';
      return;
    }

    const typeIcon: Record<string, string> = {
      capsule:'🔺', tank:'🛢️', engine:'🔥', decoupler:'✂️', parachute:'☂️', legs:'🦿', heatshield:'🛡️', gltf:'🚀'
    };
    const typeColor: Record<string, string> = {
      capsule:'#EACD9E', tank:'#4488FF', engine:'#FF6633', decoupler:'#FF5577', parachute:'#44CC77', legs:'#8899AA', heatshield:'#CC8855', gltf:'#CC88BB'
    };

    const decIdx: number[] = [];
    for (let i = 0; i < roots.length; i++) {
      if (roots[i]!.part.kind === 'decoupler') decIdx.push(i);
    }

    let html = '';
    let stageNum = decIdx.length + 1;
    let start = 0;

    const targets = [...decIdx, roots.length];
    for (let si = 0; si < targets.length; si++) {
      const end = targets[si]!;
      const chunk = roots.slice(start, end);
      if (chunk.length === 0) { start = end + 1; continue; }

      let dm = 0, fuel = 0, eng = 0;
      for (const n of chunk) {
        dm += n.part.mass;
        if (n.part.fuelCapacity) fuel += n.part.fuelCapacity;
        if (n.part.kind === 'engine') eng++;
      }

      html += `<div style="margin-bottom:6px;border:1px solid rgba(244,245,242,0.08);border-radius:4px;overflow:hidden;">`;
      html += `<div style="padding:3px 6px;background:rgba(244,245,242,0.06);display:flex;justify-content:space-between;align-items:center;">`;
      html += `<span style="font-size:9px;color:#EACD9E;font-weight:600;">S${stageNum}</span>`;
      html += `<span style="font-size:8px;color:rgba(244,245,242,0.4);">${eng>0?eng+'E ':''}${(dm/1000).toFixed(1)}t${fuel>0?' +'+((fuel)/1000).toFixed(1)+'t fuel':''}</span>`;
      html += `</div>`;

      for (const n of chunk) {
        const icon = typeIcon[n.part.kind] || '⬡';
        const col = typeColor[n.part.kind] || '#888';
        let detail = `${n.part.mass}kg`;
        if (n.part.kind === 'engine' && n.part.thrust) detail = `${n.part.thrust}kN`;
        if (n.part.kind === 'tank' && n.part.fuelCapacity) detail = `${(n.part.fuelCapacity/1000).toFixed(1)}t`;

        html += `<div style="padding:2px 6px;font-size:9px;color:#ccc;display:flex;align-items:center;gap:4px;${n.part.kind==='decoupler'?'background:rgba(255,85,119,0.08);':''}">`;
        html += `<span style="color:${col};font-size:10px;">${icon}</span>`;
        html += `<span style="flex:1;">${n.part.name.replace(/"/g,'')}</span>`;
        html += `<span style="color:${col};font-size:8px;">${detail}</span>`;
        html += `</div>`;
      }
      html += `</div>`;

      stageNum--;
      start = end + 1;
    }

    this.currentRocketEl.innerHTML = html;

    const totalMass = roots.reduce((s, n) => s + n.part.mass + this.childMass(n), 0);
    const totalFuel = roots.reduce((s, n) => s + (n.part.fuelCapacity ?? 0) + this.childFuel(n), 0);
    const { total } = this.calculateDeltaV();
    const dvColor = total >= 8000 ? '#44EE66' : total >= 3000 ? '#FFCC44' : '#FF5544';
    const dvStr = total > 0 ? `<span style="color:${dvColor};font-weight:600;">${total.toFixed(0)}</span>` : '—';
    const footer = document.createElement('div');
    footer.style.cssText = 'font-size:8px;color:rgba(244,245,242,0.35);margin-top:6px;padding-top:4px;border-top:1px solid rgba(244,245,242,0.08);display:flex;justify-content:space-between;';
    footer.innerHTML = `<span>${roots.length}p | ${(totalMass/1000).toFixed(1)}t</span><span>Δv ${dvStr} m/s</span>`;
    this.currentRocketEl.appendChild(footer);
  }

  private childMass(n: AssemblyNode): number {
    return n.children.reduce((s, c) => s + c.part.mass + this.childMass(c), 0);
  }

  private childFuel(n: AssemblyNode): number {
    return n.children.reduce((s, c) => s + (c.part.fuelCapacity ?? 0) + this.childFuel(c), 0);
  }

  private calculateDeltaV(): { total: number; stages: { label: string; dv: number; wet: number; dry: number }[] } {
    const roots = this.assembly.roots;
    if (roots.length === 0) return { total: 0, stages: [] };

    const decIdx: number[] = [];
    for (let i = 0; i < roots.length; i++) {
      if (roots[i]!.part.kind === 'decoupler') decIdx.push(i);
    }

    const stageChunks: AssemblyNode[][] = [];
    let start = 0;
    for (const di of [...decIdx, roots.length]) {
      const chunk = roots.slice(start, di);
      if (chunk.length > 0) stageChunks.push(chunk);
      start = di + 1;
    }

    const stages: { label: string; dv: number; wet: number; dry: number }[] = [];
    let aboveDry = 0;
    let aboveFuel = 0;

    for (let si = stageChunks.length - 1; si >= 0; si--) {
      const chunk = stageChunks[si]!;
      let dry = 0;
      let fuel = 0;
      let isp = 0;
      let engCount = 0;

      for (const node of chunk) {
        dry += node.part.mass;
        if (node.part.fuelCapacity) fuel += node.part.fuelCapacity;
        if (node.part.thrust && node.part.isp) {
          isp += node.part.isp;
          engCount++;
        }
        const walkChildren = (n: AssemblyNode) => {
          for (const c of n.children) {
            dry += c.part.mass;
            if (c.part.fuelCapacity) fuel += c.part.fuelCapacity;
            if (c.part.thrust && c.part.isp) { isp += c.part.isp; engCount++; }
            walkChildren(c);
          }
        };
        walkChildren(node);
      }

      const avgIsp = engCount > 0 ? isp / engCount : 0;
      const wet = dry + fuel + aboveDry + aboveFuel;
      const dryTotal = dry + aboveDry + aboveFuel;

      let dv = 0;
      if (avgIsp > 0 && wet > 0 && dryTotal > 0 && wet > dryTotal) {
        dv = avgIsp * G0 * Math.log(wet / dryTotal);
      }

      const hasEngine = chunk.some(n => n.part.kind === 'engine');
      const label = hasEngine
        ? `Stage ${si + 1} (${engCount}E)`
        : `Stage ${si + 1}`;

      stages.unshift({ label, dv, wet, dry: dryTotal });
      aboveDry += dry;
      aboveFuel += fuel;
    }

    const total = stages.reduce((s, st) => s + st.dv, 0);
    return { total, stages };
  }

  private updateDeltaV(): void {
    const { total } = this.calculateDeltaV();
    const dvEl = this.rootEl.querySelector('#vab-dv-value') as HTMLElement;
    const labelEl = this.rootEl.querySelector('#vab-dv-label') as HTMLElement;
    if (!dvEl || !labelEl) return;

    if (total <= 0) {
      dvEl.textContent = '—';
      dvEl.style.color = 'rgba(244,245,242,0.3)';
      labelEl.textContent = 'Δv m/s';
      labelEl.title = 'Add engines and fuel tanks to see Δv';
      return;
    }

    dvEl.textContent = total.toFixed(0);

    let color = '#FF5544';
    let verdict = 'Not enough';
    if (total >= 8000) { color = '#44EE66'; verdict = 'Orbit capable'; }
    else if (total >= 3000) { color = '#FFCC44'; verdict = 'Suborbital'; }

    dvEl.style.color = color;
    labelEl.textContent = `Δv m/s — ${verdict}`;
    labelEl.title = `Orbit needs ~8000 m/s\nMoon needs ~12000 m/s\nMars needs ~15000 m/s`;
  }

  private updateVabCamera(): void {
    const ox = this.vabDist * Math.sin(this.vabPolar) * Math.cos(this.vabAzimuth);
    const oy = this.vabDist * Math.cos(this.vabPolar);
    const oz = this.vabDist * Math.sin(this.vabPolar) * Math.sin(this.vabAzimuth);
    this.camera.position.set(
      this.vabTarget.x + ox,
      this.vabTarget.y + oy,
      this.vabTarget.z + oz,
    );
    this.camera.lookAt(this.vabTarget);
  }

  private setupVabOrbit(): void {
    const handler = (e: MouseEvent) => {
      if (e.button !== 0) return;
      this.vabIsDragging = true;
      this.vabPrevMouse = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('mousemove', (e) => {
      if (!this.vabIsDragging) return;
      const dx = e.clientX - this.vabPrevMouse.x;
      const dy = e.clientY - this.vabPrevMouse.y;
      this.vabAzimuth -= dx * 0.005;
      this.vabPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.vabPolar + dy * 0.005));
      this.vabPrevMouse = { x: e.clientX, y: e.clientY };
      this.updateVabCamera();
    });
    document.addEventListener('mouseup', () => { this.vabIsDragging = false; });
    document.addEventListener('wheel', (e: WheelEvent) => {
      if ((e.target as HTMLElement)?.closest('.vab-parts')) return;
      this.vabDist *= e.deltaY > 0 ? 1.1 : 0.9;
      this.vabDist = Math.max(0.5, Math.min(50, this.vabDist));
      this.updateVabCamera();
    }, { passive: true });
  }

  private async refreshMesh(): Promise<void> {
    while (this.rocketGroup.children.length > 0) {
      const child = this.rocketGroup.children[0];
      if (child) this.rocketGroup.remove(child);
    }
    if (this.assembly.roots.length > 0) {
      // Show vehicle name input if this is a new rocket
      if (!this.rootEl.querySelector('.vab-name-input')) {
        const nameRow = document.createElement('div');
        nameRow.className = 'vab-name-row';
        nameRow.style.cssText = 'padding:4px 0;margin-bottom:6px;';
        nameRow.innerHTML = `
          <input type="text" class="vab-name-input" placeholder="Name your rocket..."
            style="width:100%;background:rgba(244,245,242,0.08);border:1px solid rgba(244,245,242,0.15);
            border-radius:4px;padding:6px 8px;color:#F4F5F2;font-size:11px;font-family:system-ui,sans-serif;
            outline:none;box-sizing:border-box;" maxlength="30"
          />
        `;
        this.currentRocketEl.parentElement?.insertBefore(nameRow, this.currentRocketEl);
      }
      // Check if any part needs GLTF loading
      const needsGLTF = this.assembly.roots.some(n => 
        n.part.kind === 'gltf' && n.part.gltfUrl && !gltfCache.has(n.part.gltfUrl)
      );
      
      if (needsGLTF) {
        const statusEl = document.getElementById('vab-status');
        if (statusEl) statusEl.textContent = '⏳ Loading 3D models...';
        const { loadGLTF } = await import('../parts/PartBuilder');
        let loadedCount = 0;
        let failCount = 0;
        for (const root of this.assembly.roots) {
          if (root.part.kind === 'gltf' && root.part.gltfUrl && !gltfCache.has(root.part.gltfUrl)) {
            const result = await loadGLTF(root.part.gltfUrl, root.part.gltfScale ?? 1);
            if (result) loadedCount++; else failCount++;
          }
        }
        if (statusEl) {
          if (failCount > 0) {
            statusEl.textContent = `⚠️ ${loadedCount} loaded, ${failCount} failed`;
            setTimeout(() => { if (statusEl) statusEl.innerHTML = '&nbsp;'; }, 3000);
          } else {
            statusEl.textContent = '✓ Models loaded';
            setTimeout(() => { if (statusEl) statusEl.innerHTML = '&nbsp;'; }, 1500);
          }
        }
      }
      
      const mesh = this.assembly.toMesh();
      // Ensure all meshes are visible
      mesh.traverse((obj) => {
        if (obj instanceof THREE.Mesh && obj.material) {
          obj.visible = true;
          const mat = obj.material;
          if (!Array.isArray(mat)) {
            mat.transparent = false;
            mat.opacity = 1;
            mat.depthWrite = true;
            mat.depthTest = true;
          }
        }
      });
      this.rocketGroup.add(mesh);

      // Draw stage separator discs at decoupler positions
      let sepY = 0;
      for (const root of this.assembly.roots) {
        const walkNodes = (node: AssemblyNode, y: number) => {
          if (node.part.kind === 'decoupler') {
            const sepGeom = new THREE.RingGeometry(0.15, 0.25, 16);
            const sepMat = new THREE.MeshBasicMaterial({
              color: 0xFF6644, side: THREE.DoubleSide, transparent: true, opacity: 0.5
            });
            const sep = new THREE.Mesh(sepGeom, sepMat);
            sep.position.set(0, y, 0);
            sep.rotation.x = -Math.PI / 2;
            this.rocketGroup.add(sep);
          }
          const h = PART_HEIGHT[node.part.size] || 0.6 * PART_SCALE;
          for (const child of node.children) walkNodes(child, y - h);
        };
        const h0 = PART_HEIGHT[root.part.size] || 0.6 * PART_SCALE;
        walkNodes(root, sepY + h0 / 2);
        sepY += h0;
      }

      // Auto-frame camera to fit the assembled rocket (only first time)
      if (!this.framed) {
        this.framed = true;
        const box = new THREE.Box3().setFromObject(this.rocketGroup);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z, 0.1);
        const camDist = maxDim * 3.5;
        this.camera.position.set(center.x, center.y + maxDim * 0.5, center.z + camDist);
        this.camera.lookAt(center.x, center.y, center.z);
        this.camera.updateProjectionMatrix();
      }
    }
  }

  private syncPartsFromAssembly(): void {
    this.addedPartNames = [];
    this.stackHeight = 0;
    const walk = (nodes: AssemblyNode[], depth: number) => {
      for (const n of nodes) {
        this.addedPartNames.push(n.part.name);
        const h = PART_HEIGHT[n.part.size] || 0.6 * PART_SCALE;
        this.stackHeight += h;
        walk(n.children, depth + 1);
      }
    };
    walk(this.assembly.roots, 0);
    this.updateCurrentList();
  }

  mount(): void {
    document.body.appendChild(this.rootEl);
  }

  unmount(): void {
    this.rootEl.remove();
  }
}
