import * as THREE from 'three';
import { PART_CATALOG, findPart } from '../parts/PartCatalog';
import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { PART_SCALE } from '../config/constants';
import { buildRocketFromDescription } from '../parts/RocketBuilder';
import { gltfCache, loadGLTF } from '../parts/PartBuilder';

const PART_HEIGHT: Record<string, number> = {
  S: 0.6 * PART_SCALE,
  M: 1.0 * PART_SCALE,
  L: 1.4 * PART_SCALE,
  XL: 2.0 * PART_SCALE,
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
  private stackHeight = 0;
  private addedPartNames: string[] = [];

  constructor(onLaunch: (assembly: Assembly) => void) {
    this.onLaunch = onLaunch;

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

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.0001, 10);
    const camDist = PART_SCALE * 2;
    this.camera.position.set(0, camDist * 0.3, camDist);
    this.camera.lookAt(0, 0, 0);

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

    // UI
    this.rootEl = document.createElement('div');
    this.rootEl.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.rootEl.innerHTML = `
      <div style="width:280px;background:rgba(10,12,24,0.95);border-right:1px solid rgba(234,205,158,0.2);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:16px;border-bottom:1px solid rgba(234,205,158,0.15);">
          <div style="color:#EACD9E;font-size:18px;letter-spacing:0.08em;">VAB</div>
          <div style="color:#F4F5F2;font-size:11px;opacity:0.5;margin-top:4px;">Build your rocket</div>
        </div>
        <div style="padding:8px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div style="font-size:9px;color:var(--accent-blue-bright);letter-spacing:0.05em;margin-bottom:6px;">QUICK BUILD — pick a mission</div>
          <div id="vab-presets" style="display:flex;flex-wrap:wrap;gap:4px;"></div>
        </div>
        <div style="padding:8px 8px 4px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div id="vab-current" style="min-height:40px;padding:6px;background:rgba(244,245,242,0.05);border-radius:3px;"></div>
        </div>
        <div id="vab-parts" style="flex:1;overflow-y:auto;padding:8px;"></div>
        <div style="padding:12px;border-top:1px solid rgba(234,205,158,0.15);">
          <button id="vab-launch" style="width:100%;padding:10px;background:#EACD9E;color:#0A0C18;border:none;border-radius:4px;font-size:13px;cursor:pointer;letter-spacing:0.06em;">LAUNCH</button>
          <button id="vab-remove" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:6px;letter-spacing:0.06em;">REMOVE LAST</button>
          <button id="vab-clear" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:4px;letter-spacing:0.06em;">CLEAR ALL</button>
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
    this.rootEl.querySelector('#vab-remove')!.addEventListener('click', () => this.removeLast());
    this.rootEl.querySelector('#vab-clear')!.addEventListener('click', () => this.clearAll());
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
      });
      el.appendChild(btn);
    }
  }

  private buildPartList(): void {
    for (const p of PART_CATALOG) {
      const btn = document.createElement('button');
      const sizeLabel = p.size ? ` [${p.size}]` : '';
      let info = '';
      if (p.kind === 'tank' && p.fuelCapacity) info = ` — ${(p.fuelCapacity / 1000).toFixed(0)}t`;
      if (p.kind === 'engine' && p.thrust) info = ` — ${p.thrust}kN`;
      btn.textContent = p.name + sizeLabel + info;
      btn.title = `${p.kind} — mass: ${p.mass}kg${p.fuelCapacity ? ', fuel: ' + p.fuelCapacity + 'kg' : ''}${p.thrust ? ', thrust: ' + p.thrust + 'kN' : ''}`;
      btn.style.cssText = 'display:block;width:100%;padding:6px 8px;background:transparent;color:#F4F5F2;border:none;border-radius:3px;font-size:11px;text-align:left;cursor:pointer;margin-bottom:2px;';
      btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(234,205,158,0.1)'; });
      btn.addEventListener('mouseleave', () => { btn.style.background = 'transparent'; });
      btn.addEventListener('click', () => this.addPart(p));
      this.partListEl.appendChild(btn);
    }
  }

  private addPart(p: Part): void {
    const h = PART_HEIGHT[p.size] || 0.6 * PART_SCALE;
    const yPos = this.stackHeight + h / 2;
    this.assembly.addRoot({ part: p, position: [0, yPos, 0], rotation: 0, children: [] });
    this.stackHeight += h;
    this.addedPartNames.push(p.name);
    this.refreshMesh();
    this.updateCurrentList();
  }

  private removeLast(): void {
    if (this.assembly.roots.length === 0) return;
    const removed = this.assembly.roots.pop()!;
    const h = PART_HEIGHT[removed.part.size] || 0.6 * PART_SCALE;
    this.stackHeight -= h;
    this.addedPartNames.pop();
    this.refreshMesh();
    this.updateCurrentList();
  }

  private clearAll(): void {
    this.assembly = new Assembly();
    this.stackHeight = 0;
    this.addedPartNames = [];
    this.refreshMesh();
    this.updateCurrentList();
  }

  private updateCurrentList(): void {
    if (this.addedPartNames.length === 0) {
      this.currentRocketEl.innerHTML = '<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;">No parts — click from list below</div>';
      return;
    }
    this.currentRocketEl.innerHTML = '<div style="color:rgba(244,245,242,0.4);font-size:9px;letter-spacing:0.05em;margin-bottom:4px;">CURRENT ROCKET (top to bottom):</div>' +
      [...this.addedPartNames].reverse().map((name, i) =>
        `<div style="color:#F4F5F2;font-size:10px;padding:1px 0;${i === 0 ? 'color:#EACD9E;' : ''}">${i === 0 ? '▲ ' : ''}${name}</div>`
      ).join('');
  }

  private async refreshMesh(): Promise<void> {
    while (this.rocketGroup.children.length > 0) {
      const child = this.rocketGroup.children[0];
      if (child) this.rocketGroup.remove(child);
    }
    if (this.assembly.roots.length > 0) {
      // Check if any part needs GLTF loading
      const needsGLTF = this.assembly.roots.some(n => 
        n.part.kind === 'gltf' && n.part.gltfUrl && !gltfCache.has(n.part.gltfUrl)
      );
      
      if (needsGLTF) {
        // Load missing GLTF models
        const { loadGLTF } = await import('../parts/PartBuilder');
        for (const root of this.assembly.roots) {
          if (root.part.kind === 'gltf' && root.part.gltfUrl && !gltfCache.has(root.part.gltfUrl)) {
            await loadGLTF(root.part.gltfUrl, root.part.gltfScale ?? 1);
          }
        }
      }
      
      const mesh = this.assembly.toMesh();
      // Ensure GLTF models are visible
      mesh.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.visible = true;
          obj.material.transparent = false;
          obj.material.opacity = 1;
          obj.material.depthWrite = true;
          obj.material.depthTest = true;
        }
      });
      this.rocketGroup.add(mesh);
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
