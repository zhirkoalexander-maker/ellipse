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
  private readonly ANGULAR_ACCEL = 8;
  private readonly ANGULAR_DAMPING = 10;
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
  private sasActive = false;
  private sasTargetQuat = new THREE.Quaternion();
  private screenShake = 0;

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

    // Compute spawn above displaced surface
    const surfacePos: [number, number, number] = [
      earth.position[0] + dirNorm[0] * earthR,
      earth.position[1] + dirNorm[1] * earthR,
      earth.position[2] + dirNorm[2] * earthR,
    ];
    const surfaceR = (earth as any).getSurfaceRadiusAt?.(surfacePos) ?? earthR;
    const spawnPos: [number, number, number] = [
      earth.position[0] + dirNorm[0] * (surfaceR + 10),
      earth.position[1] + dirNorm[1] * (surfaceR + 10),
      earth.position[2] + dirNorm[2] * (surfaceR + 10),
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

    // Landing gear legs (retracted initially)
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const legGeom = new THREE.CylinderGeometry(0.015, 0.04, 0.3, 6);
      const legMat = new THREE.MeshStandardMaterial({ color: 0x556677, metalness: 0.8, roughness: 0.3 });
      const leg = new THREE.Mesh(legGeom, legMat);
      leg.position.set(Math.cos(angle) * 0.15, -0.1, Math.sin(angle) * 0.15);
      leg.rotation.z = Math.cos(angle) * 0.3;
      leg.rotation.x = Math.sin(angle) * 0.3;
      leg.visible = false;
      this.rocketGroup.add(leg);
      this.gearMeshes.push(leg);
      // Foot pad
      const footGeom = new THREE.CylinderGeometry(0.05, 0.06, 0.02, 6);
      const footMat = new THREE.MeshStandardMaterial({ color: 0x445566, metalness: 0.5, roughness: 0.6 });
      const foot = new THREE.Mesh(footGeom, footMat);
      foot.position.set(
        Math.cos(angle) * 0.22,
        -0.22,
        Math.sin(angle) * 0.22
      );
      this.rocketGroup.add(foot);
      this.gearMeshes.push(foot);
    }

    for (const body of system.bodies) {
      const pbody = body as any;
      if (pbody.mesh) sceneMgr.scene.add(pbody.mesh);
      if (pbody.light) sceneMgr.scene.add(pbody.light);
    }
    const fillLight = new THREE.DirectionalLight(0x8899cc, 0.5);
    fillLight.position.set(-50, 20, -30);
    sceneMgr.scene.add(fillLight);

    this.engineFlame = new EngineFlame();
    this.positionFlameAtNozzle();
    this.rocketGroup.add(this.engineFlame.getMesh());

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
    this.chase.initialiseAt(this.state, this.rocketQuat, upDir);
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
  sun: '#ffdd44', earth: '#4fc3f7', moon: '#aaaacc',
  venus: '#e8a84c', mars: '#d4733a', mercury: '#b0b0b0',
  jupiter: '#d4a574', saturn: '#f4e4a1', uranus: '#4fd0e8',
  neptune: '#4b70dd'
};
const glowColors: Record<string, string> = {
  sun: 'rgba(255,220,68,0.12)', earth: 'rgba(79,195,247,0.08)',
  mars: 'rgba(212,115,58,0.08)', venus: 'rgba(232,168,76,0.08)',
  jupiter: 'rgba(212,165,116,0.08)', saturn: 'rgba(244,228,161,0.15)',
};
const sizes: Record<string, number> = {
  sun: 8, earth: 5, moon: 2, venus: 3, mars: 3, mercury: 2,
  jupiter: 7, saturn: 6, uranus: 3.5, neptune: 3.5
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

        // Main trajectory line
        ctx.beginPath();
        ctx.strokeStyle = prediction.bound ? '#4488CC' : '#DDAA44';
        ctx.lineWidth = 2;
        ctx.setLineDash(prediction.bound ? [] : [6, 4]);
        ctx.moveTo(firstX, firstY);
        for (let i = 1; i < prediction.points.length; i++) {
          const px = cx + prediction.points[i]![0] * s;
          const py = cy - prediction.points[i]![1] * s;
          ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbit direction arrows along path
        const arrowSteps = Math.max(4, Math.floor(prediction.points.length / 6));
        ctx.fillStyle = prediction.bound ? '#4488CC' : '#DDAA44';
        for (let i = arrowSteps; i < prediction.points.length - arrowSteps; i += arrowSteps) {
          const pi = prediction.points[i]!;
          const pn = prediction.points[Math.min(i + 2, prediction.points.length - 1)]!;
          const dx = pn[0] - pi[0];
          const dy = pn[1] - pi[1];
          const da = Math.atan2(dy, dx);
          const ax = cx + pi[0] * s;
          const ay = cy - pi[1] * s;
          ctx.beginPath();
          ctx.moveTo(ax + Math.cos(da) * 5, ay - Math.sin(da) * 5);
          ctx.lineTo(ax + Math.cos(da + 1.8) * 7, ay - Math.sin(da + 1.8) * 7);
          ctx.lineTo(ax + Math.cos(da - 1.8) * 7, ay - Math.sin(da - 1.8) * 7);
          ctx.closePath();
          ctx.fill();
        }

        if (prediction.bound && isFinite(prediction.apoapsis) && isFinite(prediction.periapsis)) {
          const apX = cx + prediction.apoapsis * s;
          const peX = cx + prediction.periapsis * s;
          // Ap marker
          ctx.beginPath();
          ctx.arc(apX, cy, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#FF8844';
          ctx.fill();
          ctx.font = 'bold 9px monospace';
          ctx.fillStyle = '#FF8844';
          ctx.fillText('Ap', apX + 6, cy + 3);
          // Pe marker
          ctx.beginPath();
          ctx.arc(peX, cy, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#44DD88';
          ctx.fill();
          ctx.fillStyle = '#44DD88';
          ctx.fillText('Pe', peX + 6, cy + 3);
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
        this.hud.setWarpLabel(`x${this.timeWarp}`);
        e.preventDefault();
      } else if (e.key === 'e' || e.key === ']') {
        if (this.paused) return;
        this.warpIndex = Math.min(this.warpLevels.length - 1, this.warpIndex + 1);
        this.timeWarp = this.warpLevels[this.warpIndex]!;
        this.hud.setWarpLabel(`x${this.timeWarp}`);
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
      } else if (e.key === 't') {
        this.sasActive = !this.sasActive;
        if (this.sasActive) {
          this.sasTargetQuat.copy(this.rocketQuat);
          toast.show('SAS enabled — holding attitude');
        } else {
          toast.show('SAS disabled');
        }
        e.preventDefault();
      }
    });

    this.achievements.unlock('first_launch');
    toast.show('You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, T SAS, Esc pause.');
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
    const pitchInput = warpActive ? 0 : this.controls.getPitch();
    const yawInput = warpActive ? 0 : this.controls.getYaw();
    const rollInput = warpActive ? 0 : this.controls.getRoll();
    this.angularVel.x += pitchInput * this.ANGULAR_ACCEL * baseDt;
    this.angularVel.y += yawInput * this.ANGULAR_ACCEL * baseDt;
    this.angularVel.z += rollInput * this.ANGULAR_ACCEL * baseDt;

    // Engine gimbal: extra rotation authority when thrust is active
    if (engineActive && !this.grounded) {
      this.angularVel.x += pitchInput * this.state.throttle * 4 * baseDt;
      this.angularVel.y += yawInput * this.state.throttle * 4 * baseDt;
    }

    // SAS: hold attitude by countering drift
    if (this.sasActive && !warpActive) {
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

    // Apply thrust
    let canLiftOff = false;
    if (engineActive && this.grounded) {
      // Compute if thrust exceeds weight before actually applying thrust
      const eng = findFirstEngine(this.state.rocket.assembly.roots);
      if (eng && eng.thrust) {
        const thrustN = eng.thrust * 1000 * this.state.throttle;
        const refBody = getReferenceBody(this.state.position, this.system);
        const dx = this.state.position[0] - refBody.position[0];
        const dy = this.state.position[1] - refBody.position[1];
        const dz = this.state.position[2] - refBody.position[2];
        const r = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1;
        const localG = (G * refBody.mass) / (r * r);
        const weight = this.state.rocket.totalMass() * localG;
        canLiftOff = thrustN > weight * 0.95;
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
        this.state.velocity[0] -= f * dx / r * baseDt;
        this.state.velocity[1] -= f * dy / r * baseDt;
        this.state.velocity[2] -= f * dz / r * baseDt;
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
          const dragForce = 0.5 * rho * speed * speed * CdA;
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
        }
      }

      // Collision with surface
      const bodyR = nearestBody ? (nearestBody as any).radius ?? 0 : 0;
      const surfaceR = nearestBody ? ((nearestBody as any).getSurfaceRadiusAt?.(this.state.position) ?? bodyR) : 0;
      if (nearestBody && bodyR > 0 && isFinite(nearestDist)) {
        const dx = this.state.position[0] - nearestBody.position[0];
        const dy = this.state.position[1] - nearestBody.position[1];
        const dz = this.state.position[2] - nearestBody.position[2];
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        const vertSpeed = (this.state.velocity[0] * dx + this.state.velocity[1] * dy + this.state.velocity[2] * dz) / d;
        // Penetration check — inside the planet = always crash
        if (d < surfaceR - 1) {
          this.doCrash(`Impact on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
        } else if (d < surfaceR + 5 && d > 0.001 && this.liftoffFrames <= 0) {
          const surfaceNorm = new THREE.Vector3(dx / d, dy / d, dz / d);
          const rocketUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
          const tiltDeg = Math.acos(Math.min(1, Math.abs(rocketUp.dot(surfaceNorm)))) * 180 / Math.PI;
          const hasLegs = this.hasLandingLegs();
          const speedLimit = this.parachuteDeployed ? 15 : 10;
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
            if (this.state.position[0] !== nearestBody.position[0] + dx / d * (surfaceR + 0.5) ||
                this.state.position[1] !== nearestBody.position[1] + dy / d * (surfaceR + 0.5) ||
                this.state.position[2] !== nearestBody.position[2] + dz / d * (surfaceR + 0.5)) {
              this.state.position = [nearestBody.position[0] + dx / d * (surfaceR + 0.5), nearestBody.position[1] + dy / d * (surfaceR + 0.5), nearestBody.position[2] + dz / d * (surfaceR + 0.5)];
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
        } else if (d < surfaceR + 200 && isFinite(vertSpeed) && Math.abs(vertSpeed) > 50) {
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
      const targetDist = surfaceR + 0.5;
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
        this.state.position[0] = refBody.position[0] + (dx / d) * (bodyR + 10);
        this.state.position[1] = refBody.position[1] + (dy / d) * (bodyR + 10);
        this.state.position[2] = refBody.position[2] + (dz / d) * (bodyR + 10);
      }
    }

    for (const body of this.system.bodies) {
      (body as any).syncMesh?.();
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

    if (this.rocketShadow) this.rocketShadow.visible = this.grounded && !this.crashed;

    if (!this.crashed) {
      this.rocketGroup.position.set(
        this.state.position[0] * VISUAL_SCALE,
        this.state.position[1] * VISUAL_SCALE,
        this.state.position[2] * VISUAL_SCALE
      );

      this.chase.follow(this.state, baseDt, camUp, warpActive);

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

    // Compute TWR
    const eng = findFirstEngine(this.state.rocket.assembly.roots);
    if (eng && eng.thrust) {
      const thrustN = eng.thrust * 1000 * this.state.throttle;
      const refBodyTwr = getReferenceBody(this.state.position, this.system);
      const dx_t = this.state.position[0] - refBodyTwr.position[0];
      const dy_t = this.state.position[1] - refBodyTwr.position[1];
      const dz_t = this.state.position[2] - refBodyTwr.position[2];
      const r_t = Math.sqrt(dx_t*dx_t + dy_t*dy_t + dz_t*dz_t) || 1;
      const localG = (G * refBodyTwr.mass) / (r_t * r_t);
      const weight = this.state.rocket.totalMass() * localG;
      this.hud.setTWR(thrustN / (weight || 1));
    } else {
      this.hud.setTWR(0);
    }

    // Compute Ap/Pe from orbit prediction
    let ape: number | undefined;
    let pe: number | undefined;
    let timeToAp: number | undefined;
    let timeToPe: number | undefined;
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
      }
    }
    this.hud.update(this.state, this.system, 0, stageCount, ape, pe, timeToAp, timeToPe, this.missionTime);
    this.hud.setSAS(this.sasActive);

    // Compute approximate delta-v remaining
    const engDv = findFirstEngine(this.state.rocket.assembly.roots);
    if (engDv && engDv.thrust) {
      const massWet = this.state.rocket.totalMass();
      const massDry = massWet - this.state.rocket.totalFuelMass();
      if (massDry > 0 && massWet > massDry) {
        const isp = 320; // rough ISP estimate in seconds
        const ve = isp * 9.80665;
        const dv = ve * Math.log(massWet / massDry);
        this.hud.setDeltaV(dv);
      } else {
        this.hud.setDeltaV(0);
      }
    } else {
      this.hud.setDeltaV(-1);
    }

    // Compute G-force from velocity change
    const dvx = this.state.velocity[0] - this.prevVel[0];
    const dvy = this.state.velocity[1] - this.prevVel[1];
    const dvz = this.state.velocity[2] - this.prevVel[2];
    const dv = Math.sqrt(dvx * dvx + dvy * dvy + dvz * dvz);
    const gForce = baseDt > 0 ? dv / (baseDt * 9.80665) : 1;
    this.hud.setGForce(gForce);
    this.hud.setGForceEnabled(gForce > 1.1);
    this.prevVel = [this.state.velocity[0], this.state.velocity[1], this.state.velocity[2]];

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
    const targetFov = 50 + Math.min(30, speedKms * 0.1);
    this.sceneMgr.camera.fov += (targetFov - this.sceneMgr.camera.fov) * baseDt * 2;
    this.sceneMgr.camera.updateProjectionMatrix();

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
      sun: '#ffdd44', earth: '#4fc3f7', moon: '#aaaacc',
      venus: '#e8a84c', mars: '#d4733a', jupiter: '#d4a574',
      saturn: '#f4e4a1', uranus: '#4fd0e8', neptune: '#4b70dd'
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

  private updateRocketMesh(): void {
    const earth = this.system.bodyByName('earth') as any;
    if (earth) this.rocketGroup.position.set(0, (earth.radius + 100) * VISUAL_SCALE, 0);
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
    this.crashed = true;
    this.achievements.unlock('crash');
    this.sound.playCrash();
    this.sound.stopEngine();
    toast.show(`CRASH! ${reason}`);

    this.rocketGroup.visible = false;
    this.engineFlame.stop();

    this.state.position = [
      body.position[0] + dx / d * bodyR,
      body.position[1] + dy / d * bodyR,
      body.position[2] + dz / d * bodyR,
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
        const s = 1 + t * 6;
        m.scale.setScalar(s);
        const fadeFactor = life < 1 ? 2 : 1;
        (m.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.9 * (1 - t * fadeFactor));
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
    // Find the lowest point of all rocket meshes (engine nozzle)
    let minY = Infinity;
    this.rocketGroup.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        const box = new THREE.Box3().setFromObject(obj);
        if (box.min.y < minY) minY = box.min.y;
      }
    });
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
    this.engineFlame.dispose();
    this.groundSmoke.dispose();
    this.hud.unmount();
    this.sound.dispose();
  }
}
