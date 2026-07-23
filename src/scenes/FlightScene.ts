import * as THREE from 'three';
import type { Renderer } from '../core/Renderer';
import type { SceneManager } from '../core/SceneManager';
import type { System } from '../physics/System';
import type { Vec3 } from '../physics/Body';
import { Body } from '../physics/Body';
import type { Rocket } from '../rocket/Rocket';
import type { AssemblyNode } from '../rocket/Assembly';
import type { Achievements } from '../core/Achievements';
import { FlightState } from '../flight/FlightState';
import { ChaseCamera } from '../flight/ChaseCamera';
import { Controls } from '../flight/Controls';
import { HUD } from '../flight/HUD';
import { applyThrust, findFirstEngine } from '../flight/Thrust';
import { SoundManager } from '../flight/SoundManager';
import { toast } from '../ui/Toast';
import { FIXED_DT, G, ORBIT_SCALE, VISUAL_PLANET_MULT, PART_SCALE, EARTH_MASS, ROCKET_VISUAL_SCALE } from '../config/constants';
import { getReferenceBody } from '../physics/SoiResolver';
import { predictOrbit } from '../physics/OrbitPredictor';
import { buildDeployedParachute } from '../parts/PartBuilder';
import { totalGravityOn } from '../physics/Gravity';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;
import { EngineFlame } from '../effects/EngineFlame';
import { GroundSmoke } from '../effects/GroundSmoke';

interface Debris {
  mesh: THREE.Group;
  body: Body;
  life: number;
}

export class FlightScene {
  private renderer: Renderer;
  private sceneMgr: SceneManager;
  private system: System;
  private achievements: Achievements;
  private state: FlightState;
  private rocket: Rocket;
  private rocketGroup: THREE.Group;
  private chase: ChaseCamera;
  private controls: Controls;
  private hud: HUD;
  private sound: SoundManager;
  private launched = false;
  private grounded = true;
  private groundedDir: [number, number, number] | null = null;
  private liftoffFrames = 0;
  private engineFlame: EngineFlame;
  private groundSmoke: GroundSmoke;
  private rocketShadow: THREE.Mesh | null = null;
  private reentryGlow: THREE.Mesh | null = null;
  private rocketQuat = new THREE.Quaternion();
  private angularVel = new THREE.Vector3();
  private readonly ANGULAR_ACCEL = 10;
  private readonly ANGULAR_DAMPING = 8;
  private timeWarp = 1;
  private parachuteDeployed = false;
  private deployedChuteMesh: THREE.Group | null = null;
  private crashed = false;
  private paused = false;
  private debris: Debris[] = [];
  private warpLevels = [1, 3, 5, 10, 100, 1000, 100000, 1000000];
  private warpIndex = 0;
  private crashOverlay: HTMLDivElement | null = null;
  private prevVel: [number, number, number] = [0, 0, 0];
  private gearDeployed = false;
  private gearMeshes: THREE.Mesh[] = [];
  private missionTime = 0;
  private sasMode: 'off' | 'hold' | 'prograde' | 'retrograde' = 'off';
  private sasTargetQuat = new THREE.Quaternion();
  private screenShake = 0;
  private heatEnergy = 0;
  private readonly MAX_HEAT = 9999999999; // effectively disabled
  private readonly HEAT_RADIATION_RATE = 0.999;
  private stageInfo: Array<{ label: string; fuelMass: number; dryMass: number; active: boolean; spent: boolean }> = [];
  private lastReentryIntensity = 0;
  private prevMach = 0;
  private sonicBoomTriggered = false;
  private sonicBoomTimer = 0;
  private countdownTimer = 0;
  private countdownActive = false;
  private countdownEl: HTMLElement | null = null;
  private lastRefBody: string | null = null;
  private impactMarker: THREE.Mesh | null = null;
  private maxAlt = 0;
  private maxSpeed = 0;
  private orbitLine: THREE.Line | null = null;
  private exhaustLight: THREE.PointLight | null = null;
  private followLight: THREE.PointLight | null = null;
  private cameraMode: 'chase' | 'free' = 'chase';
  private freeCamAzimuth = 0;
  private freeCamPolar = Math.PI / 2;
  private freeCamDist = 4;
  private freeCamKeys = { left: false, right: false, up: false, down: false };
  private freeCamDragging = false;
  private freeCamPrevMouse = { x: 0, y: 0 };
  private hudVisible = true;
  private lastAltMilestone = 0;
  private sonicBoomRing: THREE.Mesh | null = null;
  private sonicBoomLife = 0;
  private reentryGlowMesh: THREE.Mesh | null = null;
  private rocketBottomY = 0; // lowest point of rocket mesh in local space
  private _debugShown = false;
  private _debugMarker: THREE.Mesh | null = null;
  private _spawnProtectionTimer = 0;
  private _camSnapped = false;

  private showCountdown(text: string): void {
    if (!this.countdownEl) {
      this.countdownEl = document.createElement('div');
      this.countdownEl.style.cssText = `
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:72px;font-weight:bold;color:#fff;z-index:500;
        text-shadow:0 0 30px rgba(68,136,255,0.6);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `;
      document.body.appendChild(this.countdownEl);
    }
    this.countdownEl.textContent = text;
    this.countdownEl.style.opacity = '1';
    if (text === 'LIFTOFF!') {
      this.countdownEl.style.color = '#FF8844';
      this.countdownEl.style.fontSize = '48px';
    } else {
      this.countdownEl.style.color = '#FFFFFF';
      this.countdownEl.style.fontSize = '72px';
    }
  }

  private hideCountdown(): void {
    if (this.countdownEl) {
      this.countdownEl.style.opacity = '0';
    }
  }

  private get dragMultiplier(): number {
    return this.gearDeployed ? 2.5 : 1;
  }

  onCrashAction: ((action: 'menu' | 'restart') => void) | null = null;


  constructor(renderer: Renderer, sceneMgr: SceneManager, system: System, rocket: Rocket, achievements: Achievements) {
    this.renderer = renderer;
    this.sceneMgr = sceneMgr;
    this.system = system;
    this.achievements = achievements;
    this.rocket = rocket;

    const earth = system.bodyByName('earth')!;
    const earthR = (earth as any).radius ?? 6.371e6;
    // Kennedy Space Center: 28.5°N, 80.5°W
    const lat = 28.5 * Math.PI / 180;
    const lon = -80.5 * Math.PI / 180;
    const dir: [number, number, number] = [
      Math.cos(lat) * Math.cos(lon),
      Math.sin(lat),
      Math.cos(lat) * Math.sin(lon),
    ];
    const dirMag = Math.sqrt(dir[0]*dir[0] + dir[1]*dir[1] + dir[2]*dir[2]);
    const dirNorm: [number, number, number] = [dir[0] / dirMag, dir[1] / dirMag, dir[2] / dirMag];

    const SPAWN_OFFSET_M = 60;
    // Compute nominal surface position (for terrain lookup)
    const nominalSurface: [number, number, number] = [
      earth.position[0] + dirNorm[0] * earthR,
      earth.position[1] + dirNorm[1] * earthR,
      earth.position[2] + dirNorm[2] * earthR,
    ];
    // Get actual surface radius including terrain displacement
    const surfaceR = (earth as any).getSurfaceRadiusAt?.(nominalSurface) ?? earthR;
    const spawnPos: [number, number, number] = [
      earth.position[0] + dirNorm[0] * (surfaceR + SPAWN_OFFSET_M),
      earth.position[1] + dirNorm[1] * (surfaceR + SPAWN_OFFSET_M),
      earth.position[2] + dirNorm[2] * (surfaceR + SPAWN_OFFSET_M),
    ];
    this.state = new FlightState(rocket, system, spawnPos, [0, 0, 0]);
    this.groundedDir = dirNorm;

    // Align rocket with surface normal (90° to ground, pointing away from Earth center)
    const upDir = new THREE.Vector3(
      spawnPos[0] - earth.position[0],
      spawnPos[1] - earth.position[1],
      spawnPos[2] - earth.position[2]
    ).normalize();
    this.rocketQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), upDir);

    this.rocketGroup = rocket.assembly.toMesh();
    this.rocketGroup.scale.setScalar(ROCKET_VISUAL_SCALE);
    this.rocketGroup.position.set(
      this.state.position[0] * VISUAL_SCALE,
      this.state.position[1] * VISUAL_SCALE,
      this.state.position[2] * VISUAL_SCALE
    );
    sceneMgr.scene.add(this.rocketGroup);

    // DEBUG: hidden by default — green marker for position verification
    const dbgMarkerGeom = new THREE.SphereGeometry(1, 8, 6);
    const dbgMarkerMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.3, depthTest: false, depthWrite: false, visible: false });
    this._debugMarker = new THREE.Mesh(dbgMarkerGeom, dbgMarkerMat);
    this._debugMarker.visible = false;
    this._debugMarker.position.copy(this.rocketGroup.position);
    sceneMgr.scene.add(this._debugMarker);

    // Clean simple rocket materials
    this.rocketGroup.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const mat of mats) {
          mat.polygonOffset = true;
          mat.polygonOffsetFactor = -1;
          mat.polygonOffsetUnits = -1;
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.roughness = 0.4;
            mat.metalness = 0.1;
            mat.emissive = new THREE.Color(0x000000);
            mat.emissiveIntensity = 0;
            mat.needsUpdate = true;
          }
        }
      }
    });

    // Landing gear — completely disabled (user doesn't want hexagons)
    // for (let i = 0; i < 3; i++) { ... }
    // gear meshes are never added to rocketGroup

    // Impact prediction marker (red ring on surface)
    const markerGeom = new THREE.RingGeometry(0.05, 0.15, 16);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0xff3333, side: THREE.DoubleSide, transparent: true, opacity: 0.6, depthWrite: false
    });
    this.impactMarker = new THREE.Mesh(markerGeom, markerMat);
    this.impactMarker.rotation.x = -Math.PI / 2;
    this.impactMarker.visible = false;
    this.sceneMgr.scene.add(this.impactMarker);

    for (const body of system.bodies) {
      const pbody = body as any;
      if (pbody.mesh) sceneMgr.scene.add(pbody.mesh);
      if (pbody.light) sceneMgr.scene.add(pbody.light);
    }
    const fillLight = new THREE.DirectionalLight(0x8899cc, 1.5);
    fillLight.position.set(-50, 20, -30);
    sceneMgr.scene.add(fillLight);

    // Follow light — small point light on rocket so it's always visible
    this.followLight = new THREE.PointLight(0xffddcc, 3, 15);
    this.followLight.position.set(0, 2, 0);
    this.rocketGroup.add(this.followLight);

    this.engineFlame = new EngineFlame();
    this.positionFlameAtNozzle();
    this.rocketGroup.add(this.engineFlame.getMesh());

    // Engine exhaust light
    this.exhaustLight = new THREE.PointLight(0xff8844, 0, 20);
    this.exhaustLight.position.set(0, -1, 0);
    this.rocketGroup.add(this.exhaustLight);

    // Reentry glow mesh (white-hot spherical halo)
    const reentryGeom = new THREE.SphereGeometry(2, 16, 16);
    const reentryMat = new THREE.MeshBasicMaterial({
      color: 0xff8844, transparent: true, opacity: 0, depthWrite: false
    });
    this.reentryGlowMesh = new THREE.Mesh(reentryGeom, reentryMat);
    this.reentryGlowMesh.position.set(0, 0.5, 0);
    this.reentryGlowMesh.visible = false;
    this.rocketGroup.add(this.reentryGlowMesh);

    this.groundSmoke = new GroundSmoke();
    this.rocketGroup.add(this.groundSmoke.getMesh());

    // Rocket shadow (dark circle on ground)
    const shadowGeom = new THREE.CircleGeometry(0.3 * ROCKET_VISUAL_SCALE, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    });
    this.rocketShadow = new THREE.Mesh(shadowGeom, shadowMat);
    this.rocketShadow.rotation.x = -Math.PI / 2;
    this.rocketShadow.position.y = -2;
    this.rocketGroup.add(this.rocketShadow);

    // Reentry glow (orange sphere around rocket)
    const glowGeom = new THREE.SphereGeometry(0.3, 16, 12);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.reentryGlow = new THREE.Mesh(glowGeom, glowMat);
    this.rocketGroup.add(this.reentryGlow);
    // Outer glow
    const outerGlowGeom = new THREE.SphereGeometry(0.5, 16, 12);
    const outerGlowMat = new THREE.MeshBasicMaterial({
      color: 0xff4400,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const outerGlow = new THREE.Mesh(outerGlowGeom, outerGlowMat);
    outerGlow.name = 'reentry-outer';
    this.rocketGroup.add(outerGlow);

    const tangent = new THREE.Vector3().crossVectors(upDir, new THREE.Vector3(0, 1, 0)).normalize();
    const azimuth = Math.atan2(tangent.z, tangent.x);

    this.chase = new ChaseCamera(sceneMgr.camera);
    this.chase.setAzimuth(azimuth);
    this.chase.enableOrbit(this.renderer.domElement);
    // Compute visual offset for initial camera placement (rocketBottomY already scaled)
    const initVisualOff = -this.rocketBottomY - 50 * VISUAL_SCALE + 2;
    const initOffX = upDir.x * initVisualOff;
    const initOffY = upDir.y * initVisualOff;
    const initOffZ = upDir.z * initVisualOff;
    this.chase.initialiseAt(this.state, this.rocketQuat, upDir, { x: initOffX, y: initOffY, z: initOffZ });
    this._spawnProtectionTimer = 1200; // 10 seconds no-crash grace period
    // OVERRIDE: force camera to guaranteed visible position
    const rocketVisX = this.state.position[0] * VISUAL_SCALE + upDir.x * initVisualOff;
    const rocketVisY = this.state.position[1] * VISUAL_SCALE + upDir.y * initVisualOff;
    const rocketVisZ = this.state.position[2] * VISUAL_SCALE + upDir.z * initVisualOff;
    sceneMgr.camera.position.set(rocketVisX + 10, rocketVisY + 3, rocketVisZ + 10);
    sceneMgr.camera.lookAt(rocketVisX, rocketVisY, rocketVisZ);
    this.controls = new Controls(this.state);

    // Auto-detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.controls.enableTouch();
    }

    this.sound = new SoundManager();

    this.hud = new HUD();
    this.hud.onAction = (action) => {
      if (action === 'stage') this.performStage();
      else if (action === 'parachute') this.toggleParachute();
      else if (action === 'map') {
        mapActive = !mapActive;
        mapEl.style.display = mapActive ? 'block' : 'none';
        if (mapActive) requestAnimationFrame(drawMap);
      }
      else if (action === 'resume') {
        this.paused = false;
        this.hud.setPaused(false);
      }
      else if (action === 'menu') {
        this.onCrashAction?.('menu');
      }
      else if (action === 'restart') {
        this.onCrashAction?.('restart');
      }
    };
    this.hud.mount();

    let mapActive = false;
    let mapZoom = 1.0;
    let mapPanX = 0;
    let mapPanY = 0;
    let mapDragStart: { x: number; y: number } | null = null;

    const mapEl = document.createElement('div');
    mapEl.style.cssText = 'position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;';
    const mapCanvas = document.createElement('canvas');
    mapCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
    mapEl.appendChild(mapCanvas);
    document.body.appendChild(mapEl);

    // Map UI overlay
    const mapUI = document.createElement('div');
    mapUI.style.cssText = 'position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;';
    mapUI.innerHTML = '<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>';
    mapEl.appendChild(mapUI);
    mapEl.appendChild(mapCanvas);
    document.body.appendChild(mapEl);

    mapCanvas.addEventListener('wheel', (e) => {
      mapZoom *= e.deltaY > 0 ? 0.9 : 1.1;
      mapZoom = Math.max(0.05, Math.min(100, mapZoom));
    });
    mapCanvas.addEventListener('mousedown', (e) => {
      mapDragStart = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { mapDragStart = null; });
    window.addEventListener('mousemove', (e) => {
      if (!mapDragStart) return;
      mapPanX += (e.clientX - mapDragStart.x);
      mapPanY += (e.clientY - mapDragStart.y);
      mapDragStart = { x: e.clientX, y: e.clientY };
    });
    mapCanvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) mapDragStart = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY };
    });
    mapCanvas.addEventListener('touchmove', (e) => {
      if (!mapDragStart || e.touches.length !== 1) return;
      mapPanX += (e.touches[0]!.clientX - mapDragStart.x);
      mapPanY += (e.touches[0]!.clientY - mapDragStart.y);
      mapDragStart = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY };
    });
    mapCanvas.addEventListener('touchend', () => { mapDragStart = null; });
    mapCanvas.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const rect = mapCanvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const cW = mapCanvas.clientWidth;
      const cH = mapCanvas.clientHeight;
      const cx2 = cW/2 + mapPanX;
      const cy2 = cH/2 + mapPanY;
      let maxRelD2 = 1;
      for (const b of this.system.bodies) {
        const dx = (b.position[0] - this.state.position[0]) * VISUAL_SCALE;
        const dz = (b.position[2] - this.state.position[2]) * VISUAL_SCALE;
        const d = Math.sqrt(dx * dx + dz * dz);
        if (d > maxRelD2) maxRelD2 = d;
      }
      const s2 = Math.min(cW, cH) * 0.4 / maxRelD2 * mapZoom;
      let nearest: string | null = null;
      let nearestDist = 25;
      for (const b of this.system.bodies) {
        const bx = cx2 + (b.position[0] - this.state.position[0]) * s2;
        const by = cy2 - (b.position[2] - this.state.position[2]) * s2;
        const dr = Math.sqrt((mx-bx)**2 + (my-by)**2);
        if (dr < nearestDist) { nearestDist = dr; nearest = b.name; }
      }
      if (nearest) {
        const body = this.system.bodyByName(nearest);
        if (body) {
          const zoomTo = nearest === 'earth' ? 20 : nearest === 'moon' ? 50 : 3;
          mapPanX = -(body.position[0] - this.state.position[0]) * s2;
          mapPanY = (body.position[2] - this.state.position[2]) * s2;
          mapZoom = zoomTo;
          toast.show(`${nearest}: ${((body as any).mass ?? 0).toExponential(2)}kg R=${((body as any).radius ?? 0)/1000}km`);
        }
      }
    });

    const drawMap = () => {
      if (!mapActive) return;
      const dpr = window.devicePixelRatio || 1;
      const w = mapCanvas.clientWidth;
      const h = mapCanvas.clientHeight;
      mapCanvas.width = w * dpr;
      mapCanvas.height = h * dpr;
      const ctx = mapCanvas.getContext('2d')!;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = '#060814'; ctx.fillRect(0, 0, w, h);

      const cx = w / 2 + mapPanX;
      const cy = h / 2 + mapPanY;

      // Subtle radial gradient from rocket position
      const radGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
      radGrad.addColorStop(0, 'rgba(20,30,60,0.3)');
      radGrad.addColorStop(0.5, 'rgba(10,15,30,0.15)');
      radGrad.addColorStop(1, 'rgba(6,8,20,0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, w, h);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(100,100,150,0.08)';
      ctx.lineWidth = 1;
      const gridSize = 100 * mapZoom;
      for (let x = cx % gridSize; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = cy % gridSize; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Concentric range rings from rocket
      ctx.strokeStyle = 'rgba(68,136,255,0.06)';
      ctx.lineWidth = 0.5;
      for (let r = gridSize; r < Math.max(w, h); r += gridSize) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Use VISUAL_SCALE for map distances to match visual scale
      let maxRelD = 1;
      for (const b of this.system.bodies) {
        const dx = (b.position[0] - this.state.position[0]) * VISUAL_SCALE;
        const dz = (b.position[2] - this.state.position[2]) * VISUAL_SCALE;
        const d = Math.sqrt(dx * dx + dz * dz);
        if (d > maxRelD) maxRelD = d;
      }
      const s = Math.min(w, h) * 0.4 / maxRelD * mapZoom;

      const colors: Record<string, string> = {
  sun: '#ffdd44', earth: '#4fc3f7', moon: '#ccccee',
  venus: '#e8b84c', mars: '#e88444', mercury: '#c0c0c0',
  jupiter: '#e8b87c', saturn: '#f4e8b0', uranus: '#5fe0f0',
  neptune: '#5b88ee', pluto: '#ddccbb', titan: '#ddaa77',
  io: '#eeddaa', europa: '#aaccdd', ganymede: '#bbccaa',
  phobos: '#bb9988', deimos: '#887766'
};
const glowColors: Record<string, string> = {
  sun: 'rgba(255,220,68,0.20)', earth: 'rgba(79,195,247,0.12)',
  mars: 'rgba(232,120,68,0.12)', venus: 'rgba(232,184,76,0.12)',
  jupiter: 'rgba(232,184,124,0.12)', saturn: 'rgba(244,232,176,0.20)',
  uranus: 'rgba(95,224,240,0.10)', neptune: 'rgba(91,136,238,0.10)',
  moon: 'rgba(204,204,238,0.06)', titan: 'rgba(221,170,119,0.08)'
};
const sizes: Record<string, number> = {
  sun: 8, earth: 5, moon: 2.5, venus: 3.5, mars: 3.5, mercury: 2.5,
  jupiter: 7, saturn: 6, uranus: 4, neptune: 3.5,
  pluto: 1.5, titan: 2, io: 1.5, europa: 1.5, ganymede: 2,
  phobos: 1, deimos: 1
};

  // Draw planet orbit trails around sun
const sunPos = this.system.bodyByName('sun')?.position;
if (sunPos) {
  for (const b of this.system.bodies) {
    if (b.name === 'sun' || b.name === 'moon') continue;
    const relToSun: [number, number, number] = [
      b.position[0] - sunPos[0],
      b.position[1] - sunPos[1],
      b.position[2] - sunPos[2],
    ];
    if (b.velocity) {
      const predOrbit = predictOrbit(relToSun, b.velocity, this.system.bodyByName('sun')!.mass, 5e14, 180);
      if (predOrbit.points.length > 10) {
        ctx.beginPath();
        ctx.strokeStyle = colors[b.name] + '30';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 6]);
        const firstX = cx + (predOrbit.points[0]![0] + sunPos[0]) * s;
        const firstY = cy - (predOrbit.points[0]![1] + sunPos[2]) * s;
        ctx.moveTo(firstX, firstY);
        for (let i = 1; i < predOrbit.points.length; i += 2) {
          const px = cx + (predOrbit.points[i]![0] + sunPos[0]) * s;
          const py = cy - (predOrbit.points[i]![1] + sunPos[2]) * s;
          ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }
}

    // Atmospheric halos for bodies with atmospheres
const atmosBodies = ['earth', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
for (const b of this.system.bodies) {
  if (atmosBodies.includes(b.name)) {
    const bx = cx + (b.position[0] - this.state.position[0]) * s;
    const by = cy - (b.position[2] - this.state.position[2]) * s;
    const baseR = sizes[b.name] || 3;
    const grad = ctx.createRadialGradient(bx, by, baseR * 0.5, bx, by, baseR * 3);
    const col = colors[b.name] || '#888';
    grad.addColorStop(0, col + '30');
    grad.addColorStop(0.5, col + '15');
    grad.addColorStop(1, col + '00');
    ctx.beginPath();
    ctx.arc(bx, by, baseR * 3, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }
}

// Kármán line atmosphere boundary rings (100km altitude)
for (const b of this.system.bodies) {
  if (atmosBodies.includes(b.name)) {
    const bx = cx + (b.position[0] - this.state.position[0]) * s;
    const by = cy - (b.position[2] - this.state.position[2]) * s;
    const baseR = sizes[b.name] || 3;
    const atmosFactor = 1.2;
    ctx.beginPath();
    ctx.arc(bx, by, baseR * atmosFactor, 0, Math.PI * 2);
    ctx.setLineDash([2, 6]);
    ctx.strokeStyle = 'rgba(100,180,255,0.25)';
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

// Planet bodies with glow
for (const b of this.system.bodies) {
  const bx = cx + (b.position[0] - this.state.position[0]) * s;
  const by = cy - (b.position[2] - this.state.position[2]) * s;

  // Glow for sun and large bodies
  if (sizes[b.name] && sizes[b.name]! >= 5) {
    ctx.beginPath();
    ctx.arc(bx, by, sizes[b.name]! * 3, 0, Math.PI * 2);
    ctx.fillStyle = glowColors[b.name] || 'rgba(100,100,150,0.05)';
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(bx, by, sizes[b.name] || 3, 0, Math.PI * 2);
  ctx.fillStyle = colors[b.name] || '#888';
  ctx.fill();
  ctx.strokeStyle = 'rgba(244,245,242,0.3)';
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.font = '9px monospace';
  ctx.fillStyle = '#F4F5F2';
  ctx.fillText(b.name.toUpperCase(), bx + sizes[b.name]! + 6, by + 3);
}

    // Draw SOI circles for all bodies
const sunBody = this.system.bodyByName('sun');
for (const b of this.system.bodies) {
  if (b.name === 'sun' || b.mass <= 0 || !sunBody || b.name === sunBody.name) continue;
  const dx = (b.position[0] - sunBody.position[0]) * VISUAL_SCALE;
  const dz = (b.position[2] - sunBody.position[2]) * VISUAL_SCALE;
  const distToSun = Math.sqrt(dx * dx + dz * dz);
  if (distToSun < 1) continue;
  const soiR = distToSun * Math.pow(b.mass / sunBody.mass, 0.4);
  const bx_s = cx + (b.position[0] - this.state.position[0]) * s;
  const by_s = cy - (b.position[2] - this.state.position[2]) * s;
  ctx.beginPath();
  ctx.arc(bx_s, by_s, soiR * s, 0, Math.PI * 2);
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = (colors[b.name] || '#888') + '44';
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.setLineDash([]);
}

// Scale indicator bar
const barWidth = 80;
const barHeight = 3;
const barX = w - barWidth - 15;
const barY = h - 30;
const realKmPerPx = (maxRelD * 2) / Math.min(w, h) * mapZoom;
const barKm = realKmPerPx * barWidth;
const niceKm = Math.pow(10, Math.floor(Math.log10(barKm)));
const nicePx = barWidth * (niceKm / barKm);
ctx.fillStyle = 'rgba(244,245,242,0.4)';
ctx.fillRect(barX, barY, nicePx, barHeight);
ctx.strokeStyle = 'rgba(244,245,242,0.5)';
ctx.lineWidth = 0.5;
ctx.strokeRect(barX, barY, nicePx, barHeight);
ctx.fillStyle = 'rgba(244,245,242,0.4)';
ctx.font = '8px monospace';
ctx.fillText(`${niceKm >= 1000 ? (niceKm/1000).toFixed(0)+'Mkm' : niceKm.toFixed(0)+'km'}`, barX, barY - 2);

// Compass rose
const compassX = 30;
const compassY = h - 35;
const compassR = 12;
ctx.strokeStyle = 'rgba(244,245,242,0.25)';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(compassX, compassY, compassR, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(compassX, compassY - compassR - 5);
ctx.lineTo(compassX, compassY + compassR + 5);
ctx.moveTo(compassX - compassR - 5, compassY);
ctx.lineTo(compassX + compassR + 5, compassY);
ctx.stroke();
ctx.fillStyle = 'rgba(244,245,242,0.4)';
ctx.font = 'bold 8px monospace';
ctx.fillText('N', compassX - 3, compassY - compassR - 7);
ctx.fillStyle = 'rgba(244,245,242,0.2)';
ctx.fillText('S', compassX - 3, compassY + compassR + 12);
ctx.fillText('W', compassX - compassR - 12, compassY + 3);
ctx.fillText('E', compassX + compassR + 7, compassY + 3);


      // Draw rocket position on map with trajectory
      const rocketX = cx;
      const rocketY = cy;
      const velX = this.state.velocity[0] || 0;
      const velZ = this.state.velocity[2] || 0;
      const velMag = Math.sqrt(velX * velX + velZ * velZ);
      const velAngle = velMag > 0.1 ? Math.atan2(velZ, velX) : 0;

      // Rocket icon - diamond shape in velocity direction
      ctx.save();
      ctx.translate(rocketX, rocketY);
      ctx.rotate(-velAngle);
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(0, -4);
      ctx.lineTo(-5, 0);
      ctx.lineTo(0, 4);
      ctx.closePath();
      ctx.fillStyle = '#EACD9E';
      ctx.fill();
      ctx.strokeStyle = '#EACD9E';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Draw velocity vector arrow
      if (velMag > 0.1) {
        const arrowLen = Math.min(30, 10 + velMag * s * 2);
        ctx.beginPath();
        ctx.moveTo(rocketX, rocketY);
        ctx.lineTo(rocketX + Math.cos(velAngle) * arrowLen, rocketY - Math.sin(velAngle) * arrowLen);
        ctx.strokeStyle = 'rgba(234,205,158,0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Arrow tip
        ctx.beginPath();
        ctx.moveTo(rocketX + Math.cos(velAngle) * arrowLen, rocketY - Math.sin(velAngle) * arrowLen);
        ctx.lineTo(rocketX + Math.cos(velAngle + 0.4) * (arrowLen - 5), rocketY - Math.sin(velAngle + 0.4) * (arrowLen - 5));
        ctx.lineTo(rocketX + Math.cos(velAngle - 0.4) * (arrowLen - 5), rocketY - Math.sin(velAngle - 0.4) * (arrowLen - 5));
        ctx.closePath();
        ctx.fillStyle = 'rgba(234,205,158,0.6)';
        ctx.fill();
      }

      // Draw trajectory endpoint if prediction available
      const refBody = getReferenceBody(this.state.position, this.system);
      const relPos: [number, number, number] = [
        (this.state.position[0] - refBody.position[0]) * VISUAL_SCALE,
        (this.state.position[1] - refBody.position[1]) * VISUAL_SCALE,
        (this.state.position[2] - refBody.position[2]) * VISUAL_SCALE,
      ];

      // Sun direction line from rocket
      const sun = this.system.bodyByName('sun');
      if (sun) {
        const dx = (sun.position[0] - this.state.position[0]) * s;
        const dz = (sun.position[2] - this.state.position[2]) * s;
        const dSun = Math.sqrt(dx * dx + dz * dz);
        if (dSun > 1) {
          ctx.beginPath();
          ctx.moveTo(rocketX + dx / dSun * 12, rocketY - dz / dSun * 12);
          ctx.lineTo(rocketX + dx / dSun * Math.min(dSun, 60), rocketY - dz / dSun * Math.min(dSun, 60));
          ctx.strokeStyle = 'rgba(255,220,68,0.15)';
          ctx.lineWidth = 2;
          ctx.setLineDash([3, 6]);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.arc(rocketX + dx / dSun * Math.min(dSun, 60), rocketY - dz / dSun * Math.min(dSun, 60), 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,220,68,0.3)';
          ctx.fill();
        }
      }

      const prediction = predictOrbit(relPos, this.state.velocity, refBody.mass, 5e14, 360);
      if (prediction.points.length > 1) {
        // Glow under line
        ctx.beginPath();
        ctx.strokeStyle = prediction.bound ? 'rgba(68,136,204,0.15)' : 'rgba(221,170,68,0.15)';
        ctx.lineWidth = 8;
        const firstX = cx + prediction.points[0]![0] * s;
        const firstY = cy - prediction.points[0]![1] * s;
        ctx.moveTo(firstX, firstY);
        for (let i = 1; i < prediction.points.length; i++) {
          const px = cx + prediction.points[i]![0] * s;
          const py = cy - prediction.points[i]![1] * s;
          ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Main trajectory line with gradient (bright near rocket, fades at end)
        const grad = ctx.createLinearGradient(firstX, firstY, 
          cx + prediction.points[prediction.points.length-1]![0] * s,
          cy - prediction.points[prediction.points.length-1]![1] * s);
        const startCol = prediction.bound ? 'rgba(68,136,204,0.9)' : 'rgba(221,170,68,0.9)';
        const endCol = prediction.bound ? 'rgba(68,136,204,0.2)' : 'rgba(221,170,68,0.2)';
        grad.addColorStop(0, startCol);
        grad.addColorStop(1, endCol);
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.moveTo(firstX, firstY);
        for (let i = 1; i < prediction.points.length; i++) {
          const px = cx + prediction.points[i]![0] * s;
          const py = cy - prediction.points[i]![1] * s;
          ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Single direction arrow at the end of the trajectory
        if (prediction.points.length > 4) {
          const last2 = prediction.points[prediction.points.length - 1]!;
          const last1 = prediction.points[prediction.points.length - 2]!;
          const adx = last2[0] - last1[0];
          const ady = last2[1] - last1[1];
          const ad = Math.sqrt(adx*adx + ady*ady) || 1;
          const arrowX = cx + last2[0] * s;
          const arrowY = cy - last2[1] * s;
          const aLen = 8;
          ctx.beginPath();
          ctx.moveTo(arrowX, arrowY);
          ctx.lineTo(arrowX - adx/ad * aLen + ady/ad * aLen * 0.4, arrowY + ady/ad * aLen + adx/ad * aLen * 0.4);
          ctx.lineTo(arrowX - adx/ad * aLen - ady/ad * aLen * 0.4, arrowY + ady/ad * aLen - adx/ad * aLen * 0.4);
          ctx.closePath();
          ctx.fillStyle = prediction.bound ? 'rgba(68,136,204,0.6)' : 'rgba(221,170,68,0.6)';
          ctx.fill();
        }

        if (prediction.bound && isFinite(prediction.apoapsis) && isFinite(prediction.periapsis)) {
          const apX = cx + prediction.apoapsis * s;
          const peX = cx + prediction.periapsis * s;
          ctx.beginPath(); ctx.arc(apX, cy, 4, 0, Math.PI * 2); ctx.fillStyle = '#FF8844'; ctx.fill();
          ctx.font = 'bold 9px monospace'; ctx.fillStyle = '#FF8844'; ctx.fillText('Ap', apX + 6, cy + 3);
          ctx.beginPath(); ctx.arc(peX, cy, 4, 0, Math.PI * 2); ctx.fillStyle = '#44DD88'; ctx.fill();
          ctx.fillStyle = '#44DD88'; ctx.fillText('Pe', peX + 6, cy + 3);
        }
        // Target planet label at trajectory end
        if (prediction.points.length > 2) {
          const last = prediction.points[prediction.points.length - 1]!;
          const lx = cx + last[0] * s, ly = cy - last[1] * s;
          const endWX = refBody.position[0] * VISUAL_SCALE + last[0];
          const endWZ = refBody.position[2] * VISUAL_SCALE + last[1];
          let nearName = '', nearD = 20;
          for (const b of this.system.bodies) {
            if (b.name === refBody.name || b.mass <= 0) continue;
            const dp = Math.sqrt((endWX - b.position[0]*VISUAL_SCALE)**2 + (endWZ - b.position[2]*VISUAL_SCALE)**2);
            if (dp < nearD) { nearD = dp; nearName = b.name; }
          }
          if (nearName) {
            ctx.font = 'bold 10px monospace'; ctx.fillStyle = '#EACD9E';
            ctx.fillText('\u2192 ' + nearName.toUpperCase(), lx + 8, ly - 4);
          }
        }

        // Label trajectory target — which planet is closest to the endpoint
        if (prediction.points.length > 2) {
          const lastPt = prediction.points[prediction.points.length - 1]!;
          const endWX = refBody.position[0] * VISUAL_SCALE + lastPt[0];
          const endWZ = refBody.position[2] * VISUAL_SCALE + lastPt[1];
          let nearestPlanet = '';
          let nearestDist = 30;
          for (const b of this.system.bodies) {
            if (b.name === refBody.name || b.mass <= 0) continue;
            const bx = b.position[0] * VISUAL_SCALE;
            const bz = b.position[2] * VISUAL_SCALE;
            const dp = Math.sqrt((endWX - bx)**2 + (endWZ - bz)**2);
            if (dp < nearestDist) { nearestDist = dp; nearestPlanet = b.name; }
          }
          if (nearestPlanet) {
            const lastX = cx + lastPt[0] * s;
            const lastY = cy - lastPt[1] * s;
            ctx.font = 'bold 10px monospace';
            ctx.fillStyle = '#EACD9E';
            ctx.fillText('→ ' + nearestPlanet.toUpperCase(), lastX + 10, lastY - 5);
          }
        }
      }

      ctx.fillStyle = 'rgba(244,245,242,0.3)';
      ctx.font = '9px sans-serif';
      ctx.fillText(`${(maxRelD / 1000).toFixed(0)} km | Zoom: ${mapZoom.toFixed(1)}x`, 10, h - 10);

      requestAnimationFrame(drawMap);
    };

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'm' || e.key === 'Tab') {
        mapActive = !mapActive;
        mapEl.style.display = mapActive ? 'block' : 'none';
        if (mapActive) requestAnimationFrame(drawMap);
        e.preventDefault();
      }
    });

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'q' || e.key === '[') {
        if (this.paused) return;
        this.warpIndex = Math.max(0, this.warpIndex - 1);
        this.timeWarp = this.warpLevels[this.warpIndex]!;
        this.hud.setWarp(this.timeWarp);
        e.preventDefault();
      } else if (e.key === 'e' || e.key === ']') {
        if (this.paused) return;
        this.warpIndex = Math.min(this.warpLevels.length - 1, this.warpIndex + 1);
        this.timeWarp = this.warpLevels[this.warpIndex]!;
        this.hud.setWarp(this.timeWarp);
        e.preventDefault();
      } else if (e.key === 'p') {
        const hasChute = rocket.assembly.roots.some(r => r.part.kind === 'parachute') ||
          rocket.assembly.roots.some(r => r.children.some(c => c.part.kind === 'parachute'));
        if (hasChute) {
          this.parachuteDeployed = !this.parachuteDeployed;
          if (this.parachuteDeployed) {
            const d = { radius: 0.6 * PART_SCALE, height: 1.0 * PART_SCALE };
            this.deployedChuteMesh = buildDeployedParachute(d);
            this.sceneMgr.scene.add(this.deployedChuteMesh);
          } else if (this.deployedChuteMesh) {
            this.sceneMgr.scene.remove(this.deployedChuteMesh);
            this.deployedChuteMesh = null;
          }
          toast.show(this.parachuteDeployed ? 'Parachute deployed!' : 'Parachute cut.');
        }
        e.preventDefault();
      } else if (e.key === 'g') {
        this.toggleGear();
        e.preventDefault();
      } else if (e.key === 'f') {
        this.chase.reset();
        toast.show('Camera view reset');
        e.preventDefault();
      } else if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
        this.cameraMode = this.cameraMode === 'chase' ? 'free' : 'chase';
        this.hud.setFreeCamera(this.cameraMode === 'free');
        toast.show(this.cameraMode === 'free' ? 'Free camera' : 'Chase camera');
        e.preventDefault();
      } else if (e.key === 'F1') {
        e.preventDefault();
        this.hudVisible = !this.hudVisible;
        this.hud.setVisible(this.hudVisible);
        toast.show(this.hudVisible ? 'HUD shown' : 'HUD hidden');
      }
      // Free cam orbit on arrow keys + Shift+C active
      if (this.cameraMode === 'free') {
        if (e.key === 'ArrowUp') { this.freeCamKeys.up = true; e.preventDefault(); }
        if (e.key === 'ArrowDown') { this.freeCamKeys.down = true; e.preventDefault(); }
        if (e.key === 'ArrowLeft') { this.freeCamKeys.left = true; e.preventDefault(); }
        if (e.key === 'ArrowRight') { this.freeCamKeys.right = true; e.preventDefault(); }
      }
    });

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') this.freeCamKeys.up = false;
      if (e.key === 'ArrowDown') this.freeCamKeys.down = false;
      if (e.key === 'ArrowLeft') this.freeCamKeys.left = false;
      if (e.key === 'ArrowRight') this.freeCamKeys.right = false;
    });

    // Free cam mouse + touch drag (touchpad)
    const dom = this.renderer.domElement;
    const startDrag = (clientX: number, clientY: number) => {
      if (this.cameraMode === 'free') {
        this.freeCamDragging = true;
        this.freeCamPrevMouse = { x: clientX, y: clientY };
      }
    };
    const moveDrag = (clientX: number, clientY: number) => {
      if (!this.freeCamDragging || this.cameraMode !== 'free') return;
      const dx = clientX - this.freeCamPrevMouse.x;
      const dy = clientY - this.freeCamPrevMouse.y;
      this.freeCamAzimuth -= dx * 0.005;
      this.freeCamPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.freeCamPolar + dy * 0.005));
      this.freeCamPrevMouse = { x: clientX, y: clientY };
    };
    const endDrag = () => { this.freeCamDragging = false; };

    dom.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
    window.addEventListener('mouseup', endDrag);
    dom.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && e.touches[0]) startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    dom.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && e.touches[0]) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    dom.addEventListener('touchend', endDrag);
    dom.addEventListener('wheel', (e) => {
      if (this.cameraMode === 'free') {
        e.preventDefault();
        this.freeCamDist *= e.deltaY > 0 ? 1.1 : 0.9;
        this.freeCamDist = Math.max(0.5, Math.min(500, this.freeCamDist));
      }
    }, { passive: false });

    this.achievements.unlock('first_launch');
    toast.show('You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, C camera, T SAS, Esc pause.');
  }

  private sanitize(v: [number, number, number]): void {
    if (!isFinite(v[0])) v[0] = 0;
    if (!isFinite(v[1])) v[1] = 0;
    if (!isFinite(v[2])) v[2] = 0;
  }

  private countStages(nodes: AssemblyNode[]): number {
    let count = 0;
    for (const n of nodes) {
      if (n.part.kind === 'decoupler') count++;
      count += this.countStages(n.children);
    }
    return count;
  }

  /**
   * Compute per-stage info for the HUD stage panel.
   * Stage definition: parts are ordered bottom-to-top (flat layout).
   * A decoupler splits the assembly into two stages. The first stage is below the decoupler,
   * the next is above. Spent stages had their decoupler already activated.
   */
  private computeStageData(): Array<{ label: string; fuelMass: number; dryMass: number; active: boolean; spent: boolean }> {
    const roots = this.rocket.assembly.roots;
    if (roots.length === 0) return [];

    const decouplerIndices: number[] = [];
    for (let i = 0; i < roots.length; i++) {
      if (roots[i]!.part.kind === 'decoupler') decouplerIndices.push(i);
    }

    type Stage = { parts: AssemblyNode[]; active: boolean; spent: boolean };
    const stages: Stage[] = [];

    let startIdx = 0;
    for (let i = 0; i <= decouplerIndices.length; i++) {
      const endIdx = i < decouplerIndices.length ? decouplerIndices[i]! : roots.length;
      const chunk: AssemblyNode[] = [];
      for (let j = startIdx; j < endIdx; j++) chunk.push(roots[j]!);
      if (chunk.length > 0) {
        const spent = this.isChunkSpent(chunk);
        stages.push({ parts: chunk, active: !spent, spent });
      }
      startIdx = endIdx + 1;
    }

    let activeIdx = 0;
    for (let i = 0; i < stages.length; i++) {
      if (!stages[i]!.spent) { activeIdx = i; break; }
      activeIdx = i;
    }

    return stages.map((st, idx) => {
      let dryMass = 0;
      let fuelMass = 0;
      for (const n of st.parts) {
        dryMass += n.part.mass;
        if (n.part.fuelCapacity) {
          const tank = this.rocket.fuelTanks.find(t => t.node === n);
          fuelMass += tank ? tank.remaining : n.part.fuelCapacity;
        }
      }
      const engineCount = st.parts.filter(p => p.part.kind === 'engine').length;
      const tankCount = st.parts.filter(p => p.part.fuelCapacity).length;

      const hasEngine = engineCount > 0;
      const label = hasEngine
        ? `${engineCount}E ${tankCount}T`
        : st.parts.length === 1
          ? (st.parts[0]!.part.name || 'C')
          : `${st.parts.length}P`;

      return {
        label: `S${idx + 1}: ${label}`,
        fuelMass,
        dryMass,
        active: idx === activeIdx,
        spent: st.spent,
      };
    });
  }

  /** A stage chunk is considered "spent" if it has no engines with remaining fuel */
  private isChunkSpent(chunk: AssemblyNode[]): boolean {
    const hasEngine = chunk.some(n => n.part.kind === 'engine');
    if (!hasEngine) return false;
    for (const n of chunk) {
      if (n.part.fuelCapacity) {
        const tank = this.rocket.fuelTanks.find(t => t.node === n);
        if (tank && tank.remaining > 0.01) return false;
      }
    }
    return true;
  }

  update(_dt: number): void {
    try {
      this.updateInner(_dt);
    } catch (e: any) {
      toast.show(`ERROR: ${e.message || e}`);
      console.error('FlightScene.update error:', e);
    }
  }

  private updateInner(_dt: number): void {
    const baseDt = _dt;
    if (this._spawnProtectionTimer > 0) this._spawnProtectionTimer -= 1;

    // Pause toggle
    if (this.controls.consumePauseToggle()) {
      this.paused = !this.paused;
      this.hud.setPaused(this.paused);
      if (this.paused) this.sound.stopEngine();
    }

    if (this.paused) {
      this.system.propagate(0, FIXED_DT);
      for (const body of this.system.bodies) (body as any).syncMesh?.();
      return;
    }

    if (this.crashed) {
      this.system.propagate(_dt * this.timeWarp, FIXED_DT);
      for (const body of this.system.bodies) (body as any).syncMesh?.();
      this.updateExplosion(baseDt);
      return;
    }

    // Track mission time (only when not crashed/paused)
    this.missionTime += baseDt;
    this.missionTime = Math.min(this.missionTime, 99999);

    _dt *= this.timeWarp;
    if (!isFinite(_dt) || _dt <= 0) _dt = 1 / 60;

    this.controls.update(baseDt);

    // Camera zoom
    if (this.controls.getZoomIn()) this.chase.zoom(0.92);
    if (this.controls.getZoomOut()) this.chase.zoom(1.08);

    // Disable controls in warp (only allow on x1)
    const warpActive = this.timeWarp > 1;
    if (warpActive) {
      this.state.throttle = 0;
    }
    // In freecam mode, disable rocket throttle and rotation
    if (this.cameraMode === 'free') {
      this.state.throttle = 0;
    }
    if (!warpActive && this.controls.getStageRequested()) this.performStage();

    // Auto-stage when engine has no fuel and there's a decoupler
    if (!warpActive && !this.grounded && this.state.throttle > 0) {
      const activeEngine = findFirstEngine(this.state.rocket.assembly.roots);
      if (!activeEngine || this.state.rocket.totalFuelMass() < 0.1) {
        const hasDecoupler = this.state.rocket.assembly.roots.some(n =>
          n.part.kind === 'decoupler' || n.children.some(c => c.part.kind === 'decoupler')
        );
        if (hasDecoupler) this.performStage();
      }
    }

    // Current forward direction (rocket local +Y in world space)
    const getFwd = (): THREE.Vector3 => new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);

    // Angular velocity with damping and engine gimbal (torque from engine when thrust is active)
    const engineActive = this.state.throttle > 0;
    // In freecam mode, arrow keys control camera, not rocket
    const inFreeCam = this.cameraMode === 'free';
    const pitchInput = (warpActive || inFreeCam) ? 0 : this.controls.getPitch();
    const yawInput = (warpActive || inFreeCam) ? 0 : this.controls.getYaw();
    const rollInput = warpActive ? 0 : this.controls.getRoll();
    this.angularVel.x += pitchInput * this.ANGULAR_ACCEL * baseDt;
    this.angularVel.y += yawInput * this.ANGULAR_ACCEL * baseDt;
    this.angularVel.z += rollInput * this.ANGULAR_ACCEL * baseDt;

    // Engine gimbal: extra rotation authority when thrust is active
    if (engineActive && !this.grounded) {
      this.angularVel.x += pitchInput * this.state.throttle * 6 * baseDt;
      this.angularVel.y += yawInput * this.state.throttle * 6 * baseDt;
    }

    // SAS: hold attitude or track prograde/retrograde
    if (this.sasMode !== 'off' && !warpActive) {
      if (this.sasMode === 'prograde' || this.sasMode === 'retrograde') {
        const velMagSas = Math.sqrt(this.state.velocity[0]**2 + this.state.velocity[1]**2 + this.state.velocity[2]**2);
        if (velMagSas > 0.1) {
          let targetDir = new THREE.Vector3(
            this.state.velocity[0] / velMagSas,
            this.state.velocity[1] / velMagSas,
            this.state.velocity[2] / velMagSas
          );
          if (this.sasMode === 'retrograde') targetDir.negate();
          this.sasTargetQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), targetDir);
        }
      }
      const drift = new THREE.Quaternion().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat);
      const angle = 2 * Math.acos(Math.abs(drift.w));
      if (angle > 0.001) {
        const axis = new THREE.Vector3(drift.x, drift.y, drift.z).normalize();
        this.angularVel.x -= axis.x * angle * 3 * baseDt;
        this.angularVel.y -= axis.y * angle * 3 * baseDt;
        this.angularVel.z -= axis.z * angle * 3 * baseDt;
      }
      this.angularVel.multiplyScalar(Math.exp(-5 * baseDt));
    }

    const damp = Math.exp(-this.ANGULAR_DAMPING * baseDt);
    this.angularVel.multiplyScalar(damp);

    // Apply rotation: yaw → pitch → roll
    const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), this.angularVel.y * baseDt);
    const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.angularVel.x * baseDt);
    const qRoll = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.angularVel.z * baseDt);
    
    this.rocketQuat.multiply(qYaw).multiply(qPitch).multiply(qRoll);
    this.rocketQuat.normalize();

    // Apply rotation to mesh
    this.rocketGroup.quaternion.copy(this.rocketQuat);

    // Thrust direction from quaternion
    const fwd = getFwd();
    const tx = fwd.x, ty = fwd.y, tz = fwd.z;

    // Apply thrust — always allowed after countdown finishes, no weight gate
    let canLiftOff = false;
    if (engineActive && this.grounded) {
      // Countdown — start once
      if (!this.countdownActive && !this.launched) {
        this.countdownActive = true;
        this.countdownTimer = 0;
        this.showCountdown('3');
      }
      if (this.countdownActive) {
        this.countdownTimer += baseDt;
        if (this.countdownTimer >= 1 && this.countdownTimer < 2) this.showCountdown('2');
        else if (this.countdownTimer >= 2 && this.countdownTimer < 3) this.showCountdown('1');
        else if (this.countdownTimer >= 3) {
          this.countdownActive = false;
          this.launched = true;
          // Check thrust-to-weight ratio using actual local gravity
          const eng = findFirstEngine(this.state.rocket.assembly.roots);
          const refBody = getReferenceBody(this.state.position, this.system);
          const gdx = this.state.position[0] - refBody.position[0];
          const gdy = this.state.position[1] - refBody.position[1];
          const gdz = this.state.position[2] - refBody.position[2];
          const gr = Math.sqrt(gdx*gdx + gdy*gdy + gdz*gdz) || 1;
          const localGrav = (G * refBody.mass) / (gr * gr);
          if (eng && eng.thrust && localGrav > 0) {
            const twr = (eng.thrust * 1000) / (this.state.rocket.totalMass() * localGrav);
            if (twr >= 0.0) {
              canLiftOff = true;
            } else {
              toast.show(`TWR ${twr.toFixed(2)} — insufficient for liftoff!`);
              this.launched = false;
              this.countdownTimer = 0; // Allow retry
            }
          }
          if (canLiftOff) {
            this.showCountdown('LIFTOFF!');
            setTimeout(() => this.hideCountdown(), 1500);
          }
        }
      }
    }
    if (engineActive && (!this.grounded || canLiftOff)) {
      applyThrust(this.state, _dt, [tx, ty, tz]);
      this.sanitize(this.state.velocity);
    }
    if (engineActive && canLiftOff && this.grounded) {
      this.grounded = false;
      this.groundedDir = null;
      this.liftoffFrames = 5;
      this.launched = true;
      this._camSnapped = false; // reset camera snap on liftoff
      this.achievements.unlock('reach_space');
      this.sound.startEngine();
    }

    // Flame and sound always show when engine is active (even if thrust < weight)
    if (engineActive) {
      this.sound.setThrottle(this.state.throttle);
      this.engineFlame.setThrottle(this.state.throttle);
      this.engineFlame.start();
      // Vacuum mode above 50km
      const refAltBody = getReferenceBody(this.state.position, this.system);
      const dxAlt = this.state.position[0] - refAltBody.position[0];
      const dyAlt = this.state.position[1] - refAltBody.position[1];
      const dzAlt = this.state.position[2] - refAltBody.position[2];
      const dAlt = Math.sqrt(dxAlt*dxAlt + dyAlt*dyAlt + dzAlt*dzAlt) || 1;
      const surfR = (refAltBody as any).getSurfaceRadiusAt?.(this.state.position) ?? (refAltBody as any).radius ?? 6371000;
      this.engineFlame.setVacuum(dAlt - surfR > 50000);
    } else {
      this.sound.setThrottle(0);
      this.engineFlame.stop();
    }
    this.engineFlame.update(baseDt);
    if (this.exhaustLight) {
      this.exhaustLight.intensity = this.state.throttle * 3;
      this.exhaustLight.color.setHSL(0.08 - this.state.throttle * 0.05, 1, 0.5 + this.state.throttle * 0.3);
    }

    // Ground smoke when engine active and grounded
    if (engineActive && this.grounded) this.groundSmoke.start();
    else this.groundSmoke.stop();
    this.groundSmoke.update(baseDt);

    // Integrate position (skip during warp when grounded to prevent bounce)
    if (!(this.grounded && warpActive)) {
      this.state.position[0] += this.state.velocity[0] * _dt;
      this.state.position[1] += this.state.velocity[1] * _dt;
      this.state.position[2] += this.state.velocity[2] * _dt;
    }

    let nearestBody: any = null;
    let nearestDist = Infinity;
    
    // Always compute nearest body for collision checks
    const nearRef = getReferenceBody(this.state.position, this.system);
    // SOI change notification
    const refName = nearRef.name;
    if (this.lastRefBody && this.lastRefBody !== refName) {
      toast.show(`Entering ${refName.toUpperCase()} SOI`);
    }
    this.lastRefBody = refName;
    const ndx = nearRef.position[0] - this.state.position[0];
    const ndy = nearRef.position[1] - this.state.position[1];
    const ndz = nearRef.position[2] - this.state.position[2];
    nearestDist = Math.sqrt(ndx*ndx + ndy*ndy + ndz*ndz);
    nearestBody = nearRef;

    // Reentry glow
    const speed = Math.sqrt(
      this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
    );
    if (!this.grounded && nearestBody && (nearestBody as any).radius) {
      const alt = nearestDist - (nearestBody as any).radius;
      if (alt > 0 && alt < 120000 && speed > 2000) {
        const intensity = Math.max(0, 1 - alt / 120000) * Math.min(1, speed / 8000);
        if (this.reentryGlow) {
          (this.reentryGlow.material as THREE.MeshBasicMaterial).color.setHSL(0.05, 1, 0.7 * intensity);
          (this.reentryGlow.material as THREE.MeshBasicMaterial).opacity = 0.4 * intensity;
          this.reentryGlow.scale.setScalar(1 + intensity * 2);
          const outer = this.rocketGroup.getObjectByName('reentry-outer') as THREE.Mesh | null;
          if (outer) {
            (outer.material as THREE.MeshBasicMaterial).color.setHSL(0.03, 1, 0.4 * intensity);
            (outer.material as THREE.MeshBasicMaterial).opacity = 0.2 * intensity;
            outer.scale.setScalar(1 + intensity * 4);
          }
        }
      } else {
        if (this.reentryGlow) (this.reentryGlow.material as THREE.MeshBasicMaterial).opacity = 0;
        const outer = this.rocketGroup.getObjectByName('reentry-outer') as THREE.Mesh | null;
        if (outer) (outer.material as THREE.MeshBasicMaterial).opacity = 0;
      }
    } else {
      if (this.reentryGlow) (this.reentryGlow.material as THREE.MeshBasicMaterial).opacity = 0;
      const outer = this.rocketGroup.getObjectByName('reentry-outer') as THREE.Mesh | null;
      if (outer) (outer.material as THREE.MeshBasicMaterial).opacity = 0;
    }

    if (this.liftoffFrames > 0) this.liftoffFrames--;

    if (!this.grounded) {
      const dx = ndx;
      const dy = ndy;
      const dz = ndz;
      const r = nearestDist;
      const r2 = r * r;
      if (r > 1 && r2 > 0) {
        const f = (G * nearRef.mass) / r2;
        const gDelta = f * baseDt;
        this.state.velocity[0] += gDelta * dx / r;
        this.state.velocity[1] += gDelta * dy / r;
        this.state.velocity[2] += gDelta * dz / r;
      }
      this.sanitize(this.state.velocity);

      // Aerodynamic drag
      const speed = Math.sqrt(
        this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
      );
      const mass = this.state.rocket.totalMass();
      let CdA = mass * 0.001 + 0.2;
      if (this.parachuteDeployed) CdA = 50;
      else if (this.gearDeployed) CdA *= 2.5;
      if (nearestBody && (nearestBody as any).radius && speed > 0.05 && speed < 1e6) {
        const alt = nearestDist - (nearestBody as any).radius;
        if (alt > 0 && alt < 300000) {
          const rho = 1.225 * Math.exp(-alt / 8500);
          const q = 0.5 * rho * speed * speed;
          const dragForce = q * CdA;
          const dragAccel = dragForce / mass;
          const dragDelta = dragAccel * baseDt;
          if (dragDelta >= speed) {
            this.state.velocity[0] = 0;
            this.state.velocity[1] = 0;
            this.state.velocity[2] = 0;
          } else {
            const f = 1 - dragDelta / speed;
            this.state.velocity[0] *= f;
            this.state.velocity[1] *= f;
            this.state.velocity[2] *= f;
          }
          this.sanitize(this.state.velocity);

        // Reentry glow effect (plasma)
        const reentryIntensity = Math.max(0, (speed / 2000) * (rho / 1.225) - 0.1);
        if (reentryIntensity > 0.05 && this.reentryGlowMesh) {
          this.reentryGlowMesh.visible = true;
          this.reentryGlowMesh.scale.setScalar(1 + reentryIntensity * 2);
          (this.reentryGlowMesh.material as THREE.MeshBasicMaterial).opacity = Math.min(1, reentryIntensity);
          const tempColor = reentryIntensity > 0.8 ? 0xffffff : reentryIntensity > 0.5 ? 0xffcc44 : 0xff8844;
          (this.reentryGlowMesh.material as THREE.MeshBasicMaterial).color.setHex(tempColor);
        } else if (this.reentryGlowMesh) {
          this.reentryGlowMesh.visible = false;
        }

        // Per-part heat visualization - parts glow red based on heat
        this.lastReentryIntensity = reentryIntensity;
        if (reentryIntensity > 0.1) {
          this.rocketGroup.traverse((obj) => {
            const m = obj as THREE.Mesh;
            if (!m.isMesh) return;
            const mat = m.material as THREE.MeshStandardMaterial;
            if (!mat || !mat.emissive) return;
            const heatFraction = Math.min(1, this.heatEnergy / 300000);
            const cr = heatFraction * 0.9;
            const cg = heatFraction * heatFraction * 0.5;
            const cb = heatFraction * heatFraction * heatFraction * 0.15;
            mat.emissive.setRGB(cr, cg, cb);
            mat.emissiveIntensity = heatFraction * 1.5;
          });
        } else if (this.heatEnergy > 0) {
          const coolFraction = Math.min(1, this.heatEnergy / 300000);
          this.rocketGroup.traverse((obj) => {
            const m = obj as THREE.Mesh;
            if (!m.isMesh) return;
            const mat = m.material as THREE.MeshStandardMaterial;
            if (!mat || !mat.emissive) return;
            mat.emissive.setRGB(coolFraction * 0.4, 0, 0);
            mat.emissiveIntensity = coolFraction * 0.5;
          });
        } else if (this.heatEnergy < 1) {
          // Fully cooled
          this.rocketGroup.traverse((obj) => {
            const m = obj as THREE.Mesh;
            if (!m.isMesh) return;
            const mat = m.material as THREE.MeshStandardMaterial;
            if (!mat || !mat.emissive) return;
            if (mat.emissiveIntensity > 0) {
              mat.emissive.setRGB(0, 0, 0);
              mat.emissiveIntensity = 0;
            }
          });
        }

        // Heat accumulation from aerodynamic heating
        const heatFlux = 0.5 * rho * speed * speed * speed * 1e-6 / 4;
        this.heatEnergy += heatFlux * baseDt;
        }
      }
      if (this.reentryGlowMesh) {
        const inAtmo = nearestBody && (nearestBody as any).radius && nearestDist - (nearestBody as any).radius < 300000;
        if (!inAtmo) this.reentryGlowMesh.visible = false;
      }

      // Heat radiation (cooling when out of dense atmosphere)
      if (!this.grounded) {
        if (this.heatEnergy > 0) {
          this.heatEnergy *= this.HEAT_RADIATION_RATE;
          if (this.heatEnergy < 1) this.heatEnergy = 0;
        }
        // Heat-related part failure
        if (this.heatEnergy > this.MAX_HEAT) {
          this.crashed = true;
          toast.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`);
        }
      }


      // Collision with surface
      const bodyR = nearestBody ? (nearestBody as any).radius ?? 0 : 0;
      const surfaceR = nearestBody ? ((nearestBody as any).getSurfaceRadiusAt?.(this.state.position) ?? bodyR) : 0;
      if (nearestBody && bodyR > 0 && isFinite(nearestDist) && this._spawnProtectionTimer <= 0) {
        const dx = this.state.position[0] - nearestBody.position[0];
        const dy = this.state.position[1] - nearestBody.position[1];
        const dz = this.state.position[2] - nearestBody.position[2];
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        const vertSpeed = (this.state.velocity[0] * dx + this.state.velocity[1] * dy + this.state.velocity[2] * dz) / d;
        // Penetration check — inside the planet = always crash
        if (d < surfaceR - 50) {
          this.doCrash(`Impact on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
        } else if (d < surfaceR + 60 && d > 0.001 && this.liftoffFrames <= 0) {
          const surfaceNorm = new THREE.Vector3(dx / d, dy / d, dz / d);
          const rocketUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
          const tiltDeg = Math.acos(Math.min(1, Math.abs(rocketUp.dot(surfaceNorm)))) * 180 / Math.PI;
          const hasLegs = this.hasLandingLegs();
          const speedLimit = this.parachuteDeployed ? 200 : 20000;
          const tiltLimit = hasLegs ? 30 : 20;

          if (isFinite(vertSpeed) && Math.abs(vertSpeed) > speedLimit) {
            this.doCrash(`Too fast! (${Math.abs(vertSpeed).toFixed(0)} m/s) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
          } else if (tiltDeg > tiltLimit) {
            this.doCrash(`Tipped over! (${tiltDeg.toFixed(0)}°) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
          } else if (isFinite(vertSpeed) && vertSpeed < 1) {
            this.state.velocity = [0, 0, 0];
            this.grounded = true;
            this.groundedDir = [dx / d, dy / d, dz / d];
            const landUp = new THREE.Vector3(dx / d, dy / d, dz / d);
            this.rocketQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), landUp);
            if (this.state.position[0] !== nearestBody.position[0] + dx / d * (surfaceR + 50) ||
                this.state.position[1] !== nearestBody.position[1] + dy / d * (surfaceR + 50) ||
                this.state.position[2] !== nearestBody.position[2] + dz / d * (surfaceR + 50)) {
              this.state.position = [nearestBody.position[0] + dx / d * (surfaceR + 50), nearestBody.position[1] + dy / d * (surfaceR + 50), nearestBody.position[2] + dz / d * (surfaceR + 50)];
              this.sound.playLand();
              this.sound.stopEngine();
              const bodyName = nearestBody.name;
              toast.show(`Landed on ${bodyName}!`);
              if (bodyName === 'earth') this.achievements.unlock('land_earth');
              else if (bodyName === 'moon') this.achievements.unlock('land_moon');
              else if (bodyName === 'mars') this.achievements.unlock('land_mars');
              else if (bodyName === 'venus') this.achievements.unlock('land_venus');
              else if (bodyName === 'mercury') this.achievements.unlock('land_mercury');
            }
          }
        } else if (d < surfaceR + 250 && isFinite(vertSpeed) && Math.abs(vertSpeed) > 50000) {
          // Altitude-based fallback: very fast near ground → crash even if outside surfaceR
          this.doCrash(`High-speed impact! (${Math.abs(vertSpeed).toFixed(0)} m/s) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
        }
      }
    } else {
      this.state.velocity = [0, 0, 0];
    }

    this.system.propagate(_dt, FIXED_DT);

    // Track body surface while grounded (body moves during propagate)
    if (this.grounded && this.groundedDir) {
      const refBody = getReferenceBody(this.state.position, this.system);
      const bodyR = (refBody as any).radius ?? 6.371e6;
      // Use groundedDir direction (not stale this.state.position) for terrain height lookup
      const surfPos: [number, number, number] = [
        refBody.position[0] + this.groundedDir[0],
        refBody.position[1] + this.groundedDir[1],
        refBody.position[2] + this.groundedDir[2],
      ];
      const surfaceR = (refBody as any).getSurfaceRadiusAt?.(surfPos) ?? bodyR;
      const targetDist = surfaceR + 50; // match SPAWN_OFFSET_M
      this.state.position[0] = refBody.position[0] + this.groundedDir[0] * targetDist;
      this.state.position[1] = refBody.position[1] + this.groundedDir[1] * targetDist;
      this.state.position[2] = refBody.position[2] + this.groundedDir[2] * targetDist;
    }
    // Safety net: if grounded rocket somehow escapes, snap back
    if (this.grounded) {
      const refBody = getReferenceBody(this.state.position, this.system);
      const dx = this.state.position[0] - refBody.position[0];
      const dy = this.state.position[1] - refBody.position[1];
      const dz = this.state.position[2] - refBody.position[2];
      const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
      const bodyR = (refBody as any).radius ?? 6.371e6;
      if (d > bodyR * 1.1) {
        this.state.velocity = [0, 0, 0];
        this.state.position[0] = refBody.position[0] + (dx / d) * (bodyR + 50);
        this.state.position[1] = refBody.position[1] + (dy / d) * (bodyR + 50);
        this.state.position[2] = refBody.position[2] + (dz / d) * (bodyR + 50);
      }
    }

    for (const body of this.system.bodies) {
      (body as any).syncMesh?.();
    }

    // Update atmosphere scattering direction for all planets
    const sunBody = this.system.bodyByName('sun');
    if (sunBody && (sunBody as any).mesh) {
      const sunWorldPos = (sunBody as any).mesh.position as THREE.Vector3;
      for (const b2 of this.system.bodies) {
        const b = b2 as any;
        if (b.atmosphereGlow && b.mesh) {
          b.atmosphereGlow.setSunDirection(sunWorldPos, b.mesh.position);
        }
      }
    }

    // Animate Earth cloud layer + day/night illumination
    const earthBody = this.system.bodyByName('earth');
    if (earthBody && 'updateClouds' in earthBody) {
      const sunBody = this.system.bodyByName('sun');
      const sunPosWC = sunBody ? sunBody.position : undefined;
      (earthBody as any).updateClouds(baseDt, sunPosWC);
    }

    // Update debris physics
    if (this.debris.length > 0) {
      const refBody = getReferenceBody(this.state.position, this.system);
      for (let i = this.debris.length - 1; i >= 0; i--) {
        const d = this.debris[i]!;
        d.life -= baseDt;
        if (d.life <= 0 || d.body.mass <= 0) {
          this.sceneMgr.scene.remove(d.mesh);
          this.debris.splice(i, 1);
          continue;
        }
        // Apply gravity
        const force = totalGravityOn(d.body, this.system.bodies);
        d.body.applyForce(force, baseDt);
        // Update mesh position
        d.mesh.position.set(
          d.body.position[0] * VISUAL_SCALE,
          d.body.position[1] * VISUAL_SCALE,
          d.body.position[2] * VISUAL_SCALE
        );
        // Check ground collision
        const bdx = d.body.position[0] - refBody.position[0];
        const bdy = d.body.position[1] - refBody.position[1];
        const bdz = d.body.position[2] - refBody.position[2];
        const bd = Math.sqrt(bdx * bdx + bdy * bdy + bdz * bdz);
        const bodyR = (refBody as any).getSurfaceRadiusAt?.(d.body.position) ?? (refBody as any).radius ?? 6.371e6;
        if (bd < bodyR) {
          this.sceneMgr.scene.remove(d.mesh);
          this.debris.splice(i, 1);
        }
      }
    }
    this.updateExplosion(baseDt);

    const camRefBody = getReferenceBody(this.state.position, this.system);
    const cdx = this.state.position[0] - camRefBody.position[0];
    const cdy = this.state.position[1] - camRefBody.position[1];
    const cdz = this.state.position[2] - camRefBody.position[2];
    const cd = Math.sqrt(cdx*cdx + cdy*cdy + cdz*cdz) || 1;
    const camUp = new THREE.Vector3(cdx / cd, cdy / cd, cdz / cd);

    if (this.rocketShadow) {
      this.rocketShadow.visible = this.grounded && !this.crashed;
      if (this.rocketShadow.visible) {
        this.rocketShadow.position.y = this.rocketBottomY - 0.02;
      }
    }

    // Update debug marker position
    if (this._debugMarker) {
      this._debugMarker.position.copy(this.rocketGroup.position);
    }

    if (!this.crashed) {
      // Visual offset: rocketBottomY is already in group's scaled coords.
      // Physics pos already accounts for terrain (getSurfaceRadiusAt at spawn).
      // Terrain disp cancels out — only need to lift rocket's own height.
      const visualOffset = -this.rocketBottomY - 50 * VISUAL_SCALE + 2;

      // Direction from reference body center to rocket (up vector = surface normal)
      const refBodyVis = getReferenceBody(this.state.position, this.system);
      const upXv = this.state.position[0] - refBodyVis.position[0];
      const upYv = this.state.position[1] - refBodyVis.position[1];
      const upZv = this.state.position[2] - refBodyVis.position[2];
      const upLenV = Math.sqrt(upXv*upXv + upYv*upYv + upZv*upZv) || 1;

      // Debug overlay — shows once then fades
      if (!this._debugShown) {
        this._debugShown = true;
        const dbg = document.createElement('div');
        dbg.style.cssText = 'position:fixed;top:120px;right:16px;z-index:600;font-family:monospace;font-size:11px;color:#0f0;background:rgba(0,0,0,0.85);padding:8px;border-radius:4px;pointer-events:none;max-width:300px;';
        dbg.id = 'rocket-debug';
        dbg.innerHTML = `v0.98<br>C=freecam F=reset T=SAS W=throttle`;
        document.body.appendChild(dbg);
        console.log('ROCKET DEBUG:', {
          rocketBottomY: this.rocketBottomY,
          visualOffset,
          VISUAL_SCALE,
          ROCKET_VISUAL_SCALE,
          earthVisualR: 6.371e6 * VISUAL_SCALE,
          rocketGroupPos: this.rocketGroup.position.toArray(),
          statePos: this.state.position,
        });
      }

      this.rocketGroup.position.set(
        this.state.position[0] * VISUAL_SCALE + (upXv / upLenV) * visualOffset,
        this.state.position[1] * VISUAL_SCALE + (upYv / upLenV) * visualOffset,
        this.state.position[2] * VISUAL_SCALE + (upZv / upLenV) * visualOffset
      );

      if (this.cameraMode === 'free') {
        // Free camera: orbit around rocket - WASD keys + mouse/touch drag
        const orbitSpeed = 3;
        if (this.freeCamKeys.left) this.freeCamAzimuth += orbitSpeed * baseDt;
        if (this.freeCamKeys.right) this.freeCamAzimuth -= orbitSpeed * baseDt;
        if (this.freeCamKeys.up) this.freeCamPolar = Math.max(0.05, this.freeCamPolar - orbitSpeed * 0.7 * baseDt);
        if (this.freeCamKeys.down) this.freeCamPolar = Math.min(Math.PI - 0.05, this.freeCamPolar + orbitSpeed * 0.7 * baseDt);

        const rocketWorld = new THREE.Vector3(
          this.state.position[0] * VISUAL_SCALE + (upXv / upLenV) * visualOffset,
          this.state.position[1] * VISUAL_SCALE + (upYv / upLenV) * visualOffset,
          this.state.position[2] * VISUAL_SCALE + (upZv / upLenV) * visualOffset
        );
        const ox = this.freeCamDist * Math.sin(this.freeCamPolar) * Math.cos(this.freeCamAzimuth);
        const oy = this.freeCamDist * Math.cos(this.freeCamPolar);
        const oz = this.freeCamDist * Math.sin(this.freeCamPolar) * Math.sin(this.freeCamAzimuth);
        this.sceneMgr.camera.position.set(rocketWorld.x + ox, rocketWorld.y + oy, rocketWorld.z + oz);
        const upVec = Math.abs(this.freeCamPolar - Math.PI / 2) > (Math.PI / 2 - 0.15)
          ? new THREE.Vector3(0, 0, Math.sin(this.freeCamPolar) > 0 ? 1 : -1)
          : new THREE.Vector3(0, 1, 0);
        this.sceneMgr.camera.up.copy(upVec);
        this.sceneMgr.camera.lookAt(rocketWorld);
      } else {
        const lookOffset = {
          x: (upXv / upLenV) * visualOffset,
          y: (upYv / upLenV) * visualOffset,
          z: (upZv / upLenV) * visualOffset,
        };
        this.chase.follow(this.state, baseDt, camUp, warpActive || !this._camSnapped, lookOffset);
        if (!this._camSnapped) this._camSnapped = true;
      }

      if (this.deployedChuteMesh) {
        this.deployedChuteMesh.position.set(
          this.state.position[0] * VISUAL_SCALE,
          this.state.position[1] * VISUAL_SCALE + 0.02,
          this.state.position[2] * VISUAL_SCALE
        );
        this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation);
      }
    }

    const nearestAlt = nearestBody && (nearestBody as any).radius ? nearestDist - (nearestBody as any).radius : 0;
    const stageCount = this.countStages(this.rocket.assembly.roots);

    // Stage info (internal only, no display)
    const stageData = this.computeStageData();
    this.stageInfo = stageData;

    // Compute Ap/Pe from orbit prediction
    let ape: number | undefined;
    let pe: number | undefined;
    let timeToAp: number | undefined;
    let timeToPe: number | undefined;
    let eccentricity: number | undefined;
    let period: number | undefined;
    const orbitRefBody = getReferenceBody(this.state.position, this.system);
    if (orbitRefBody && orbitRefBody.mass > 0) {
      const relPos: [number, number, number] = [
        (this.state.position[0] - orbitRefBody.position[0]) * VISUAL_SCALE,
        (this.state.position[1] - orbitRefBody.position[1]) * VISUAL_SCALE,
        (this.state.position[2] - orbitRefBody.position[2]) * VISUAL_SCALE,
      ];
      const orbitPred = predictOrbit(relPos, this.state.velocity, orbitRefBody.mass, 5e14, 360);
      if (orbitPred.bound) {
        ape = orbitPred.apoapsis;
        pe = orbitPred.periapsis;
        timeToAp = orbitPred.timeToAp;
        timeToPe = orbitPred.timeToPe;
        eccentricity = orbitPred.eccentricity;
        period = orbitPred.timeToAp !== undefined && orbitPred.timeToPe !== undefined
          ? (orbitPred.timeToAp + orbitPred.timeToPe) * 2 : undefined;
      }
    }

    // Update impact marker position
    if (this.impactMarker) {
      const refBodyMarker = getReferenceBody(this.state.position, this.system);
      const rPos: [number, number, number] = [
        (this.state.position[0] - refBodyMarker.position[0]),
        (this.state.position[1] - refBodyMarker.position[1]),
        (this.state.position[2] - refBodyMarker.position[2]),
      ];
      const markerPred = predictOrbit(rPos, this.state.velocity, refBodyMarker.mass, 5e14, 360);
      if (markerPred.points.length > 10 && !markerPred.bound) {
        const last = markerPred.points[markerPred.points.length - 1]!;
        const surfaceR = (refBodyMarker as any).getSurfaceRadiusAt?.([last[0], 0, last[1]]) ?? (refBodyMarker as any).radius ?? 6371000;
        const surfacePos: [number, number, number] = [
          refBodyMarker.position[0] + last[0],
          0,
          refBodyMarker.position[2] + last[1],
        ];
        const dir = Math.sqrt(last[0]*last[0] + last[1]*last[1]);
        if (dir > surfaceR * 0.5) {
          const hitX = refBodyMarker.position[0] + last[0] / dir * surfaceR;
          const hitZ = refBodyMarker.position[2] + last[1] / dir * surfaceR;
          this.impactMarker.position.set(hitX * VISUAL_SCALE, 0, hitZ * VISUAL_SCALE);
          this.impactMarker.visible = true;
        } else {
          this.impactMarker.visible = false;
        }
      } else {
        this.impactMarker.visible = false;
      }
    }
    const activeStage = this.stageInfo.filter(s => s.active).length > 0
      ? this.stageInfo.findIndex(s => s.active) + 1
      : 1;
    this.hud.update(this.state, this.system, this.heatEnergy, this.state.throttle);

    // Draw 3D orbit path
    const refBodyOrbit = getReferenceBody(this.state.position, this.system);
    const relPosOrbit: [number, number, number] = [
      (this.state.position[0] - refBodyOrbit.position[0]) * VISUAL_SCALE,
      (this.state.position[1] - refBodyOrbit.position[1]) * VISUAL_SCALE,
      (this.state.position[2] - refBodyOrbit.position[2]) * VISUAL_SCALE,
    ];
    const orbitPred3d = predictOrbit(relPosOrbit, this.state.velocity, refBodyOrbit.mass, 5e14, 90);
    if (orbitPred3d.points.length > 5) {
      if (!this.orbitLine) {
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(orbitPred3d.points.length * 3);
        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.LineBasicMaterial({
          color: orbitPred3d.bound ? 0x4488cc : 0xddaa44,
          transparent: true, opacity: 0.3, depthWrite: false
        });
        this.orbitLine = new THREE.Line(geom, mat);
        this.sceneMgr.scene.add(this.orbitLine);
      }
      const pos = this.orbitLine.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < orbitPred3d.points.length; i++) {
        pos.array[i * 3] = refBodyOrbit.position[0] * VISUAL_SCALE + orbitPred3d.points[i]![0];
        pos.array[i * 3 + 1] = this.state.position[1] * VISUAL_SCALE;
        pos.array[i * 3 + 2] = refBodyOrbit.position[2] * VISUAL_SCALE + orbitPred3d.points[i]![1];
      }
      pos.needsUpdate = true;
      this.orbitLine.geometry.setDrawRange(0, orbitPred3d.points.length);
      (this.orbitLine.material as THREE.LineBasicMaterial).color.set(orbitPred3d.bound ? 0x4488cc : 0xddaa44);
      this.orbitLine.visible = true;
    } else if (this.orbitLine) {
      this.orbitLine.visible = false;
    }

    // Track personal records
    if (nearestAlt > this.maxAlt) this.maxAlt = nearestAlt;
    if (speed > this.maxSpeed) this.maxSpeed = speed;

    // Altitude milestone notifications
    const milestones = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
    for (const m of milestones) {
      if (nearestAlt >= m && this.lastAltMilestone < m) {
        this.lastAltMilestone = m;
        toast.show(`Altitude: ${m >= 1000 ? (m/1000)+'km' : m+'m'}`);
        break;
      }
    }

    // Mach number + sonic boom (visual only, no HUD display)
    const speedMs = Math.sqrt(this.state.velocity[0]**2 + this.state.velocity[1]**2 + this.state.velocity[2]**2);
    const mach = speedMs / 340;
    this.hud.setMass(this.state.rocket.totalMass());
    this.prevMach = mach;

    // Local gravitational acceleration (keep for internal use, no HUD)
    const gravRefBody = getReferenceBody(this.state.position, this.system);
    if (gravRefBody && (gravRefBody as any).mass > 0) {
      const gdx = this.state.position[0] - gravRefBody.position[0];
      const gdy = this.state.position[1] - gravRefBody.position[1];
      const gdz = this.state.position[2] - gravRefBody.position[2];
      const gr = Math.sqrt(gdx*gdx + gdy*gdy + gdz*gdz) || 1;
      const localG = (G * (gravRefBody as any).mass) / (gr * gr);
    }

    this.prevVel = [this.state.velocity[0], this.state.velocity[1], this.state.velocity[2]];

    // Compute G-force from velocity change (for screen shake, no HUD display)
    const dvx = this.state.velocity[0] - this.prevVel[0];
    const dvy = this.state.velocity[1] - this.prevVel[1];
    const dvz = this.state.velocity[2] - this.prevVel[2];
    const dvgf = Math.sqrt(dvx * dvx + dvy * dvy + dvz * dvz);
    const gForce = baseDt > 0 ? dvgf / (baseDt * 9.80665) : 1;

    // Screen shake from high G-force or mach effects
    if (gForce > 2.5) {
      this.screenShake = Math.min(1, (gForce - 2.5) / 5);
    } else {
      this.screenShake *= Math.exp(-3 * baseDt);
    }
    if (this.screenShake > 0.01) {
      const shakeX = (Math.random() - 0.5) * this.screenShake * 0.01;
      const shakeY = (Math.random() - 0.5) * this.screenShake * 0.01;
      this.rocketGroup.position.x += shakeX;
      this.rocketGroup.position.z += shakeY;
    }

    // Dynamic FOV based on speed (warp effect at high speeds)
    const speedKms = speed / 1000;
    // Fixed FOV for sharp rendering — no dynamic zoom
    // const targetFov = 35 + Math.min(30, speedKms * 0.1);
    // this.sceneMgr.camera.fov += (targetFov - this.sceneMgr.camera.fov) * baseDt * 2;
    this.sceneMgr.camera.updateProjectionMatrix();

    // Dynamic sky color — smooth blue→black transition from surface to space
    const nearestAltSky = nearestAlt ?? 0;
    // Blend from 0m (bright blue) -> 100km (pure black)
    const skyBlend = Math.min(1, Math.max(0, nearestAltSky / 100000));
    const skyR = 0.45 * (1 - skyBlend) + 0.01 * skyBlend;
    const skyG = 0.65 * (1 - skyBlend) + 0.01 * skyBlend;
    const skyB = 0.95 * (1 - skyBlend) + 0.02 * skyBlend;
    this.sceneMgr.scene.background = new THREE.Color(skyR, skyG, skyB);

    const rocketFwd = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
    const velMag = Math.sqrt(
      this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
    );
    const velDir: [number, number, number] = velMag > 0.01
      ? [this.state.velocity[0] / velMag, this.state.velocity[1] / velMag, this.state.velocity[2] / velMag]
      : [0, 1, 0];
    const refBody = getReferenceBody(this.state.position, this.system);
    const upX = this.state.position[0] - refBody.position[0];
    const upY = this.state.position[1] - refBody.position[1];
    const upZ = this.state.position[2] - refBody.position[2];
    const upNorm = Math.sqrt(upX * upX + upY * upY + upZ * upZ) || 1;
    // Orbit normal (angular momentum vector)
    const relVelX = this.state.velocity[0];
    const relVelY = this.state.velocity[1];
    const relVelZ = this.state.velocity[2];
    const normX = upY * relVelZ - upZ * relVelY;
    const normY = upZ * relVelX - upX * relVelZ;
    const normZ = upX * relVelY - upY * relVelX;
    const normLen = Math.sqrt(normX * normX + normY * normY + normZ * normZ) || 1;
    // Planet direction markers for navball
    const bodyDirs: Array<{ name: string; dir: [number, number, number]; color: string }> = [];
    const mapColors: Record<string, string> = {
      sun: '#ffdd44', earth: '#4fc3f7', moon: '#ccccee',
      venus: '#e8b84c', mars: '#e88444', jupiter: '#e8b87c',
      saturn: '#f4e8b0', uranus: '#5fe0f0', neptune: '#5b88ee',
      titan: '#ddaa77', io: '#eeddaa', europa: '#aaccdd',
      ganymede: '#bbccaa', pluto: '#ddccbb'
    };
    for (const body of this.system.bodies) {
      if (body.mass <= 0) continue;
      const dx = body.position[0] - this.state.position[0];
      const dy = body.position[1] - this.state.position[1];
      const dz = body.position[2] - this.state.position[2];
      const d = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1;
      bodyDirs.push({ name: body.name, dir: [dx/d, dy/d, dz/d], color: mapColors[body.name] || '#888' });
    }
    this.hud.setNavballData(
      [rocketFwd.x, rocketFwd.y, rocketFwd.z],
      velDir,
      [upX / upNorm, upY / upNorm, upZ / upNorm],
      [normX / normLen, normY / normLen, normZ / normLen],
      bodyDirs
    );
  }

  private performStage(): void {
    const decoupler = this.findLowestDecoupler(this.rocket.assembly.roots);
    if (!decoupler) {
      toast.show('No decouplers to stage.');
      return;
    }

    this.sound.playStaging();

    const decouplerMesh = this.rocketGroup.getObjectByName(decoupler.part.id);
    if (decouplerMesh) {
      // Capture world positions before detaching
      const worldPositions: THREE.Vector3[] = [];
      const meshes: THREE.Object3D[] = [];

      // Staging particle burst (separation motors)
      for (let i = 0; i < 16; i++) {
        const size = 0.02 + Math.random() * 0.04;
        const pGeom = new THREE.SphereGeometry(size, 4, 3);
        const pMat = new THREE.MeshBasicMaterial({
          color: i < 4 ? 0xff8844 : 0xaaaaaa, transparent: true, opacity: 0.9,
          blending: THREE.AdditiveBlending, depthWrite: false
        });
        const pMesh = new THREE.Mesh(pGeom, pMat);
        const angle = (i / 16) * Math.PI * 2 + Math.random() * 0.3;
        const elev = (Math.random() - 0.5) * 0.8;
        pMesh.position.copy(this.rocketGroup.position);
        pMesh.position.x += Math.cos(angle) * 0.15;
        pMesh.position.y += elev * 0.1;
        pMesh.position.z += Math.sin(angle) * 0.15;
        this.sceneMgr.scene.add(pMesh);
        (pMesh as any)._life = 0.6 + Math.random() * 0.4;
        (pMesh as any)._age = 0;
        (pMesh as any)._vx = Math.cos(angle) * (0.8 + Math.random() * 1.5);
        (pMesh as any)._vy = elev * 0.5;
        (pMesh as any)._vz = Math.sin(angle) * (0.8 + Math.random() * 1.5);
        this.explosionMeshes.push(pMesh);
      }
      while (decouplerMesh.children.length > 0) {
        const child = decouplerMesh.children[0]!;
        const wp = new THREE.Vector3();
        child.getWorldPosition(wp);
        worldPositions.push(wp);
        meshes.push(child);
        child.removeFromParent();
      }

      // Create debris from detached parts with physics
      const refBody = getReferenceBody(this.state.position, this.system);
      const pos = [...this.state.position] as Vec3;
      // Push downward/away from rocket
      const pushDir: Vec3 = [
        refBody.position[0] - pos[0],
        refBody.position[1] - pos[1],
        refBody.position[2] - pos[2],
      ];
      const pdm = Math.sqrt(pushDir[0]*pushDir[0] + pushDir[1]*pushDir[1] + pushDir[2]*pushDir[2]) || 1;

      for (let i = 0; i < meshes.length; i++) {
        const dm = meshes[i]!;
        const debrisGroup = new THREE.Group();
        debrisGroup.add(dm);
        dm.position.set(0, 0, 0);

        const scene = this.sceneMgr.scene;
        debrisGroup.position.copy(worldPositions[i]!);
        // Small random spread
        debrisGroup.position.x += (Math.random() - 0.5) * 0.5;
        debrisGroup.position.y += (Math.random() - 0.5) * 0.5;
        debrisGroup.position.z += (Math.random() - 0.5) * 0.5;

        // Random rotation for tumbling
        debrisGroup.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);

        scene.add(debrisGroup);

        // Velocity: rocket velocity + push away + random
        const pushForce = 1 + Math.random() * 2;
        const sepVel: Vec3 = [
          this.state.velocity[0] - pushDir[0] / pdm * pushForce + (Math.random() - 0.5) * 0.5,
          this.state.velocity[1] - pushDir[1] / pdm * pushForce + (Math.random() - 0.5) * 0.5,
          this.state.velocity[2] - pushDir[2] / pdm * pushForce + (Math.random() - 0.5) * 0.5,
        ];

        const debrisBody = new Body('debris', 100, pos, sepVel);

        this.debris.push({
          mesh: debrisGroup,
          body: debrisBody,
          life: 60,
        });
      }
    }

    this.rocket.removeStage(decoupler);
    this.achievements.unlock('stage_separate');
    toast.show('Stage separated!');
  }

  private findLowestDecoupler(nodes: AssemblyNode[]): AssemblyNode | null {
    let last: AssemblyNode | null = null;
    const walk = (ns: AssemblyNode[]) => {
      for (const n of ns) {
        if (n.part.kind === 'decoupler') last = n;
        walk(n.children);
      }
    };
    walk(nodes);
    return last;
  }

  private toggleParachute(): void {
    const hasChute = this.rocket.assembly.roots.some(r => r.part.kind === 'parachute') ||
      this.rocket.assembly.roots.some(r => r.children.some(c => c.part.kind === 'parachute'));
    if (hasChute) {
      this.parachuteDeployed = !this.parachuteDeployed;
      if (this.parachuteDeployed) {
        const d = { radius: 0.6 * PART_SCALE, height: 1.0 * PART_SCALE };
        this.deployedChuteMesh = buildDeployedParachute(d);
        this.sceneMgr.scene.add(this.deployedChuteMesh);
      } else if (this.deployedChuteMesh) {
        this.sceneMgr.scene.remove(this.deployedChuteMesh);
        this.deployedChuteMesh = null;
      }
      toast.show(this.parachuteDeployed ? 'Parachute deployed!' : 'Parachute cut.');
    }
  }

  private toggleGear(): void {
    this.gearDeployed = !this.gearDeployed;
    for (const m of this.gearMeshes) {
      m.visible = this.gearDeployed;
    }
    toast.show(this.gearDeployed ? 'Landing gear deployed' : 'Landing gear retracted');
  }

  private doCrash(reason: string, body: any, dx: number, dy: number, dz: number, d: number, bodyR: number): void {
    if (this.crashed) return;
    if (this._spawnProtectionTimer > 0) return; // spawn grace period
    this.crashed = true;
    this.achievements.unlock('crash');
    this.sound.playCrash();
    this.sound.stopEngine();
    toast.show(`CRASH! ${reason}`);

    this.rocketGroup.visible = false;
    this.engineFlame.stop();

    // Camera shake on crash
    this.screenShake = 3.0;

    this.state.position = [
      body.position[0] + dx / d * (bodyR + 50),
      body.position[1] + dy / d * (bodyR + 50),
      body.position[2] + dz / d * (bodyR + 50),
    ];
    this.state.velocity = [0, 0, 0];
    this.state.throttle = 0;

    // Explosion effect
    this.spawnExplosion(
      this.state.position[0] * VISUAL_SCALE,
      this.state.position[1] * VISUAL_SCALE,
      this.state.position[2] * VISUAL_SCALE
    );

    // Crash overlay
    this.showCrashOverlay(reason);
  }

  private showCrashOverlay(reason: string): void {
    // Flash effect
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;';
    document.body.appendChild(flash);
    requestAnimationFrame(() => { flash.style.opacity = '1'; });
    setTimeout(() => { flash.style.opacity = '0'; }, 100);
    setTimeout(() => flash.remove(), 500);

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;top:0;left:0;width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.7);z-index:1000;
      font-family:system-ui,sans-serif;color:#fff;
    `;
    overlay.innerHTML = `
      <div style="font-size:48px;font-weight:bold;color:#ff4444;margin-bottom:8px;">CRASH!</div>
      <div style="font-size:16px;color:#ccc;margin-bottom:32px;">${reason}</div>
      <div style="display:flex;gap:16px;">
        <button id="crash-menu" style="padding:12px 32px;font-size:18px;border:1px solid #555;border-radius:6px;background:#222;color:#fff;cursor:pointer;">MENU</button>
        <button id="crash-restart" style="padding:12px 32px;font-size:18px;border:none;border-radius:6px;background:#4488ff;color:#fff;cursor:pointer;">LAUNCH AGAIN</button>
      </div>
    `;
    document.body.appendChild(overlay);
    this.crashOverlay = overlay;

    overlay.querySelector('#crash-menu')!.addEventListener('click', () => {
      this.onCrashAction?.('menu');
    });
    overlay.querySelector('#crash-restart')!.addEventListener('click', () => {
      this.onCrashAction?.('restart');
    });
  }

  private updateExplosion(dt: number): void {
    if (this.explosionMeshes.length > 0) {
      for (let i = this.explosionMeshes.length - 1; i >= 0; i--) {
        const m = this.explosionMeshes[i]!;
        const age = (m as any)._age + dt;
        (m as any)._age = age;
        const life = (m as any)._life;
        const t = age / life;
        if (t >= 1) {
          this.sceneMgr.scene.remove(m);
          m.geometry.dispose();
          (m.material as THREE.Material).dispose();
          this.explosionMeshes.splice(i, 1);
          continue;
        }
        const isShockRing = (m as any)._shockRing;
        // Shock rings expand much faster (need a bigger scale factor)
        const s = isShockRing ? 1 + t * 60 : 1 + t * 6;
        m.scale.setScalar(s);
        const fadeFactor = life < 1 ? 2 : 1;
        (m.material as THREE.MeshBasicMaterial).opacity = isShockRing
          ? Math.max(0, 0.85 * (1 - t * 1.5))
          : Math.max(0, 0.9 * (1 - t * fadeFactor));
        m.position.x += (m as any)._vx * dt;
        m.position.y += (m as any)._vy * dt;
        m.position.z += (m as any)._vz * dt;
      }
    }
  }

  private explosionMeshes: THREE.Mesh[] = [];

  private spawnExplosion(x: number, y: number, z: number): void {
    const colors = [0xff8800, 0xff4400, 0xff2200, 0xff6600, 0xcc4400, 0xffaa00];
    // Big central fireball
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    core.position.set(x, y, z);
    (core as any)._life = 0.8;
    (core as any)._age = 0;
    this.sceneMgr.scene.add(core);
    this.explosionMeshes.push(core);
    // Expanding fire spheres
    for (let i = 0; i < 8; i++) {
      const size = 1 + Math.random() * 1.5;
      const geom = new THREE.SphereGeometry(size, 8, 6);
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length]!,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geom, mat);
      const theta = (i / 8) * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 0.3;
      mesh.position.set(
        x + Math.sin(theta) * Math.cos(phi) * r,
        y + Math.sin(phi) * r,
        z + Math.cos(theta) * Math.cos(phi) * r
      );
      (mesh as any)._life = 1.5 + Math.random() * 0.5;
      (mesh as any)._age = 0;
      (mesh as any)._vx = Math.sin(theta) * Math.cos(phi) * (1 + Math.random() * 3);
      (mesh as any)._vy = Math.sin(phi) * (1 + Math.random() * 3);
      (mesh as any)._vz = Math.cos(theta) * Math.cos(phi) * (1 + Math.random() * 3);
      this.sceneMgr.scene.add(mesh);
      this.explosionMeshes.push(mesh);
    }
    // Smoke ring — grey expanding sprites
    for (let i = 0; i < 4; i++) {
      const size = 1.5 + Math.random() * 2;
      const smokeMat = new THREE.MeshBasicMaterial({
        color: 0x444444,
        transparent: true,
        opacity: 0.4,
        blending: THREE.NormalBlending,
        depthWrite: false,
      });
      const smoke = new THREE.Mesh(new THREE.SphereGeometry(size, 6, 6), smokeMat);
      const theta = (i / 4) * Math.PI * 2 + Math.random() * 0.5;
      smoke.position.set(x + Math.cos(theta) * 0.5, y + (Math.random() - 0.5) * 0.3, z + Math.sin(theta) * 0.5);
      (smoke as any)._life = 2 + Math.random() * 0.5;
      (smoke as any)._age = 0;
      (smoke as any)._vx = Math.cos(theta) * (0.5 + Math.random() * 1.5);
      (smoke as any)._vy = (Math.random() - 0.5) * 1;
      (smoke as any)._vz = Math.sin(theta) * (0.5 + Math.random() * 1.5);
      this.sceneMgr.scene.add(smoke);
      this.explosionMeshes.push(smoke);
    }
  }

  /**
   * Spawn a shock ring (e.g. sonic boom, staging event).
   * The ring expands radially around the rocket over a short amount of time.
   */
  private spawnShockRing(color: number = 0xffffff): void {
    // Place the ring at the rocket's world position
    const wp = new THREE.Vector3();
    this.rocketGroup.getWorldPosition(wp);
    const s = VISUAL_SCALE;
    const rx = wp.x * VISUAL_SCALE, ry = wp.y * VISUAL_SCALE, rz = wp.z * VISUAL_SCALE;

    const ringGeom = new THREE.RingGeometry(0.1, 0.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.position.set(this.rocketGroup.position.x, this.rocketGroup.position.y, this.rocketGroup.position.z);
    ring.quaternion.copy(this.rocketQuat);
    ring.scale.setScalar(1.0);
    (ring as any)._life = 1.2;
    (ring as any)._age = 0;
    (ring as any)._shockRing = true;
    (ring as any)._vx = 0;
    (ring as any)._vy = 0;
    (ring as any)._vz = 0;
    this.sceneMgr.scene.add(ring);
    this.explosionMeshes.push(ring);
  }

  private hasLandingLegs(): boolean {
    const walk = (ns: AssemblyNode[]): boolean => {
      for (const n of ns) {
        if (n.part.kind === 'legs') return true;
        if (walk(n.children)) return true;
      }
      return false;
    };
    return walk(this.rocket.assembly.roots);
  }

  private positionFlameAtNozzle(): void {
    // Find the lowest point of rocket meshes (engine nozzle)
    // Skip landing gear and other non-rocket parts that were added separately
    let minY = Infinity;
    let maxY = -Infinity;
    this.rocketGroup.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        // Skip gear meshes (they're tracked in gearMeshes and can be far below)
        if (this.gearMeshes.includes(obj)) return;
        if (obj === this.rocketShadow) return;
        if (obj === this.reentryGlow) return;
        if (obj === this.reentryGlowMesh) return;
        const box = new THREE.Box3().setFromObject(obj);
        if (box.min.y < minY) minY = box.min.y;
        if (box.max.y > maxY) maxY = box.max.y;
      }
    });
    this.rocketBottomY = minY === Infinity ? -0.1 : minY;
    // Position flame at the bottom center, in local space
    const flameY = minY === Infinity ? -0.1 : minY - 0.01;
    this.engineFlame.getMesh().position.set(0, flameY, 0);
    this.engineFlame.getMesh().rotation.set(0, 0, 0);
  }

  dispose(): void {
    if (this.crashOverlay) {
      this.crashOverlay.remove();
      this.crashOverlay = null;
    }
    this.sceneMgr.scene.remove(this.rocketGroup);
    for (const d of this.debris) {
      this.sceneMgr.scene.remove(d.mesh);
    }
    this.debris = [];
    for (const m of this.explosionMeshes) {
      this.sceneMgr.scene.remove(m);
      m.geometry.dispose();
      (m.material as THREE.Material).dispose();
    }
    this.explosionMeshes = [];
    this.controls.dispose();
    this.chase.dispose();
    this.engineFlame.dispose();
    this.groundSmoke.dispose();
    this.hud.unmount();
    this.sound.dispose();
  }
}
