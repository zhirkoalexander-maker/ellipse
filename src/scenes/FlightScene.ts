import * as THREE from 'three';
import type { Renderer } from '../core/Renderer';
import type { SceneManager } from '../core/SceneManager';
import type { System } from '../physics/System';
import type { Rocket } from '../rocket/Rocket';
import type { AssemblyNode } from '../rocket/Assembly';
import type { Achievements } from '../core/Achievements';
import { FlightState } from '../flight/FlightState';
import { ChaseCamera } from '../flight/ChaseCamera';
import { Controls } from '../flight/Controls';
import { HUD } from '../flight/HUD';
import { applyThrust } from '../flight/Thrust';
import { SoundManager } from '../flight/SoundManager';
import { toast } from '../ui/Toast';
import { FIXED_DT, G, ORBIT_SCALE, VISUAL_PLANET_MULT, PART_SCALE } from '../config/constants';
import { getReferenceBody } from '../physics/SoiResolver';
import { predictOrbit } from '../physics/OrbitPredictor';
import { buildDeployedParachute } from '../parts/PartBuilder';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;
import { EngineFlame } from '../effects/EngineFlame';

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
  private engineFlame: EngineFlame;
  private rocketQuat = new THREE.Quaternion();
  private timeWarp = 1;
  private parachuteDeployed = false;
  private deployedChuteMesh: THREE.Group | null = null;
  private crashed = false;
  private paused = false;
  private warpLevels = [1, 3, 5, 10, 100, 10000, 1000000];
  private warpIndex = 0;


  constructor(renderer: Renderer, sceneMgr: SceneManager, system: System, rocket: Rocket, achievements: Achievements) {
    this.renderer = renderer;
    this.sceneMgr = sceneMgr;
    this.system = system;
    this.achievements = achievements;
    this.rocket = rocket;

    const earth = system.bodyByName('earth')!;
    const earthR = (earth as any).radius ?? 6.371e6;
    const spawnPos: [number, number, number] = [
      earth.position[0],
      earth.position[1] + earthR + 0.5,
      earth.position[2],
    ];
    this.state = new FlightState(rocket, system, spawnPos, [0, 0, 0]);

    this.rocketGroup = rocket.assembly.toMesh();
    this.updateRocketMesh();

    sceneMgr.scene.add(this.rocketGroup);

    for (const body of system.bodies) {
      const pbody = body as any;
      if (pbody.mesh) sceneMgr.scene.add(pbody.mesh);
      if (pbody.light) sceneMgr.scene.add(pbody.light);
    }
    const fillLight = new THREE.DirectionalLight(0x8899cc, 0.5);
    fillLight.position.set(-50, 20, -30);
    sceneMgr.scene.add(fillLight);

    const spriteTex = (color: string) => {
      const c = document.createElement('canvas');
      c.width = 64; c.height = 64;
      const ctx = c.getContext('2d')!;
      ctx.beginPath(); ctx.arc(32, 32, 28, 0, Math.PI * 2);
      ctx.fillStyle = color; ctx.fill();
      ctx.beginPath(); ctx.arc(32, 32, 20, 0, Math.PI * 2);
      ctx.fillStyle = '#fff'; ctx.globalAlpha = 0.3; ctx.fill(); ctx.globalAlpha = 1;
      return new THREE.CanvasTexture(c);
    };
    const planetColors: Record<string, string> = { sun: '#ffdd44', earth: '#4fc3f7', moon: '#888', venus: '#e8a84c', mars: '#d4733a', mercury: '#aaa' };
    const planetSizes: Record<string, number> = { sun: 12, earth: 8, moon: 4, venus: 4, mars: 4, mercury: 3 };
    const spriteMeshes: THREE.Sprite[] = [];
    for (const body of system.bodies) {
      if (body.name === 'earth' || body.name === 'sun') continue;
      const mat = new THREE.SpriteMaterial({ map: spriteTex(planetColors[body.name] || '#888'), transparent: true, depthTest: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(planetSizes[body.name] || 10, planetSizes[body.name] || 10, 1);
      sprite.position.set(body.position[0] * VISUAL_SCALE, body.position[1] * VISUAL_SCALE, body.position[2] * VISUAL_SCALE);
      sceneMgr.scene.add(sprite);
      spriteMeshes.push(sprite);
    }
    (window as any).__spriteMeshes = spriteMeshes;

    const earthMass = 5.2e24;
    const earthPos = system.bodyByName('earth')!.position;
    const soiMeshes: THREE.LineSegments[] = [];
    for (const body of system.bodies) {
      if (body.mass <= 0 || body.name === 'earth') continue;
      const dx = body.position[0] - earthPos[0];
      const dy = body.position[1] - earthPos[1];
      const dz = body.position[2] - earthPos[2];
      const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
      const soiR = dist * Math.pow(body.mass / earthMass, 0.4) * VISUAL_SCALE;
      if (soiR < 1) continue;
      const geom = new THREE.SphereGeometry(soiR, 24, 12);
      const edges = new THREE.EdgesGeometry(geom);
      const mat = new THREE.LineBasicMaterial({ color: 0x44aaff, transparent: true, opacity: 0.25, depthTest: false });
      const wire = new THREE.LineSegments(edges, mat);
      wire.position.set(body.position[0] * VISUAL_SCALE, body.position[1] * VISUAL_SCALE, body.position[2] * VISUAL_SCALE);
      sceneMgr.scene.add(wire);
      soiMeshes.push(wire);
    }
    (window as any).__soiMeshes = soiMeshes;

    this.engineFlame = new EngineFlame();
    // Position flame at the actual engine nozzle (bottom center of rocket mesh)
    this.positionFlameAtNozzle();
    this.rocketGroup.add(this.engineFlame.getMesh());

    this.chase = new ChaseCamera(sceneMgr.camera);
    this.chase.enableOrbit(this.renderer.domElement);

    // Position camera perpendicular to rocket (side view)
    const vx = this.state.position[0] * VISUAL_SCALE;
    const vy = this.state.position[1] * VISUAL_SCALE;
    const vz = this.state.position[2] * VISUAL_SCALE;
    const camDist = 0.08;
    sceneMgr.camera.position.set(vx + camDist, vy, vz);
    sceneMgr.camera.lookAt(vx, vy, vz);
    this.controls = new Controls(this.state);

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
    };
    this.hud.mount();

    let mapActive = false;
    let mapZoom = 10.0;
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
    mapUI.innerHTML = '<div id="map-zoom">ZOOM: 10.0x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>';
    mapEl.appendChild(mapUI);
    mapEl.appendChild(mapCanvas);
    document.body.appendChild(mapEl);

    mapCanvas.addEventListener('wheel', (e) => {
      mapZoom *= e.deltaY > 0 ? 0.9 : 1.1;
      mapZoom = Math.max(0.2, Math.min(5, mapZoom));
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

      // Draw grid lines
      ctx.strokeStyle = 'rgba(100,100,150,0.08)';
      ctx.lineWidth = 1;
      const gridSize = 50 * mapZoom;
      const cx = w / 2 + mapPanX;
      const cy = h / 2 + mapPanY;
      for (let x = cx % gridSize; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = cy % gridSize; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
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

      const colors: Record<string, string> = { sun: '#ffdd44', earth: '#4fc3f7', moon: '#888', venus: '#e8a84c', mars: '#d4733a', mercury: '#aaa' };
      const sizes: Record<string, number> = { sun: 12, earth: 8, moon: 4, venus: 4, mars: 4, mercury: 3 };

      for (const b of this.system.bodies) {
        const bx = cx + (b.position[0] - this.state.position[0]) * s;
        const by = cy - (b.position[2] - this.state.position[2]) * s;
        ctx.beginPath();
        ctx.arc(bx, by, sizes[b.name] || 3, 0, Math.PI * 2);
        ctx.fillStyle = colors[b.name] || '#888';
        ctx.fill();
        ctx.font = '10px sans-serif';
        ctx.fillStyle = '#F4F5F2';
        ctx.fillText(b.name.toUpperCase(), bx + 10, by + 4);
      }

      const velX = this.state.velocity[0] || 0;
      const velZ = this.state.velocity[2] || 1;
      const velA = Math.atan2(velZ, velX);
      const rkSize = 8;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(velA) * rkSize, cy - Math.sin(velA) * rkSize);
      ctx.lineTo(cx + Math.cos(velA + 2.5) * rkSize * 0.6, cy - Math.sin(velA + 2.5) * rkSize * 0.6);
      ctx.lineTo(cx + Math.cos(velA - 2.5) * rkSize * 0.6, cy - Math.sin(velA - 2.5) * rkSize * 0.6);
      ctx.closePath();
      ctx.fillStyle = '#EACD9E'; ctx.fill();

      const refBody = getReferenceBody(this.state.position, this.system);
      if (refBody && refBody.mass > 0) {
        if (refBody.name !== 'sun') {
          const sun = this.system.bodyByName('sun')!;
          const dSx = (refBody.position[0] - sun.position[0]) * VISUAL_SCALE;
          const dSz = (refBody.position[2] - sun.position[2]) * VISUAL_SCALE;
          const distToSun = Math.sqrt(dSx * dSx + dSz * dSz);
          const soiR = distToSun * Math.pow(refBody.mass / sun.mass, 0.4);
          ctx.beginPath();
          ctx.arc(cx, cy, soiR * s, 0, Math.PI * 2);
          ctx.setLineDash([4, 4]);
          ctx.strokeStyle = 'rgba(68, 136, 255, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.setLineDash([]);
        }
        const relPos: [number, number, number] = [
          (this.state.position[0] - refBody.position[0]) * VISUAL_SCALE,
          (this.state.position[1] - refBody.position[1]) * VISUAL_SCALE,
          (this.state.position[2] - refBody.position[2]) * VISUAL_SCALE,
        ];
        const prediction = predictOrbit(relPos, this.state.velocity, refBody.mass, 5e14, 360);
        if (prediction.points.length > 1) {
          ctx.beginPath();
          ctx.strokeStyle = prediction.bound ? '#4488CC' : '#DDAA44';
          ctx.lineWidth = 1.5;
          const firstX = cx + prediction.points[0]![0] * s;
          const firstY = cy - prediction.points[0]![1] * s;
          ctx.moveTo(firstX, firstY);
          for (let i = 1; i < prediction.points.length; i++) {
            const px = cx + prediction.points[i]![0] * s;
            const py = cy - prediction.points[i]![1] * s;
            ctx.lineTo(px, py);
          }
          ctx.stroke();

          if (prediction.bound && isFinite(prediction.apoapsis) && isFinite(prediction.periapsis)) {
            const apX = cx + prediction.apoapsis * s;
            const peX = cx + prediction.periapsis * s;
            ctx.font = 'bold 10px sans-serif';
            ctx.fillStyle = '#DDAA44';
            ctx.fillText('Ap', apX + 4, cy - 6);
            ctx.fillText('Pe', peX + 4, cy + 14);
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

    _dt *= this.timeWarp;
    if (!isFinite(_dt) || _dt <= 0) _dt = 1 / 60;

    this.controls.update(baseDt);

    if (this.controls.getStageRequested()) this.performStage();

    // Current forward direction (rocket local +Y in world space)
    const getFwd = (): THREE.Vector3 => new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);

    // Manual rotation - yaw first (global), then pitch (local)
    const rotSpeed = 2.5;
    const pitchInput = this.controls.getPitch();
    const yawInput = this.controls.getYaw();

    // Yaw around world Z (global), pitch around local X
    const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), yawInput * rotSpeed * baseDt);
    const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -pitchInput * rotSpeed * baseDt);
    
    // Apply yaw first (global), then pitch (local)
    this.rocketQuat.multiply(qYaw).multiply(qPitch);
    this.rocketQuat.normalize();

    // Apply rotation to mesh
    this.rocketGroup.quaternion.copy(this.rocketQuat);

    // Thrust direction from quaternion
    const fwd = getFwd();
    const tx = fwd.x, ty = fwd.y, tz = fwd.z;

    // Apply thrust
    const engineActive = this.state.throttle > 0;
    if (engineActive) {
      applyThrust(this.state, _dt, [tx, ty, tz]);
      this.sanitize(this.state.velocity);
      if (this.grounded) {
        this.grounded = false;
        this.launched = true;
        this.achievements.unlock('reach_space');
        this.sound.startEngine();
      }
    }

    // Engine sound
    if (engineActive && !this.grounded) {
      this.sound.setThrottle(this.state.throttle);
    } else if (!engineActive) {
      this.sound.setThrottle(0);
    }

    // Engine flame
    if (this.state.throttle > 0) {
      this.engineFlame.start();
    } else {
      this.engineFlame.stop();
    }
    this.engineFlame.update(baseDt);

    // Integrate position
    this.state.position[0] += this.state.velocity[0] * _dt;
    this.state.position[1] += this.state.velocity[1] * _dt;
    this.state.position[2] += this.state.velocity[2] * _dt;

    let nearestBody: any = null;
    let nearestDist = Infinity;
    if (!this.grounded) {
      const refBody = getReferenceBody(this.state.position, this.system);
      const dx = refBody.position[0] - this.state.position[0];
      const dy = refBody.position[1] - this.state.position[1];
      const dz = refBody.position[2] - this.state.position[2];
      const r2 = dx*dx + dy*dy + dz*dz;
      const r = Math.sqrt(r2);
      if (r > 1 && r2 > 0) {
        const f = (G * refBody.mass) / r2;
        this.state.velocity[0] += f * dx / r * _dt;
        this.state.velocity[1] += f * dy / r * _dt;
        this.state.velocity[2] += f * dz / r * _dt;
      }
      nearestDist = r;
      nearestBody = refBody;
      this.sanitize(this.state.velocity);

      // Aerodynamic drag
      const speed = Math.sqrt(
        this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
      );
      const mass = this.state.rocket.totalMass();
      let CdA = mass * 0.001 + 0.2;
      if (this.parachuteDeployed) CdA = 50;
      if (nearestBody && (nearestBody as any).radius && speed > 0.05 && speed < 1e6) {
        const alt = nearestDist - (nearestBody as any).radius;
        if (alt > 0 && alt < 300000) {
          const rho = 1.225 * Math.exp(-alt / 8500);
          const dragForce = 0.5 * rho * speed * speed * CdA;
          const dragAccel = dragForce / mass;
          const dragDelta = dragAccel * _dt;
          if (dragDelta >= speed) {
            this.state.velocity = [0, 0, 0];
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
      if (nearestBody && (nearestBody as any).radius && nearestDist < (nearestBody as any).radius + 0.5 && isFinite(nearestDist)) {
        const bodyR = (nearestBody as any).radius;
        const dx = this.state.position[0] - nearestBody.position[0];
        const dy = this.state.position[1] - nearestBody.position[1];
        const dz = this.state.position[2] - nearestBody.position[2];
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (d > 0.001 && isFinite(d)) {
          const vertSpeed = (this.state.velocity[0] * dx + this.state.velocity[1] * dy + this.state.velocity[2] * dz) / d;
          const upDotBody = (0 * dx + 1 * dy + 0 * dz) / d;
          const tiltDeg = Math.acos(Math.min(1, Math.abs(upDotBody))) * 180 / Math.PI;
          const hasLegs = this.hasLandingLegs();
          const speedLimit = this.parachuteDeployed ? 15 : 10;
          const tiltLimit = hasLegs ? 30 : 20;

          const alt = nearestDist - bodyR;
          if (alt < 0.5) {
            if (isFinite(vertSpeed) && Math.abs(vertSpeed) > speedLimit) {
              this.doCrash(`Too fast! (${Math.abs(vertSpeed).toFixed(0)} m/s) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, bodyR);
            } else if (tiltDeg > tiltLimit) {
              this.doCrash(`Tipped over! (${tiltDeg.toFixed(0)}°) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, bodyR);
            } else if (isFinite(vertSpeed) && d <= bodyR + 0.5) {
              this.state.position = [nearestBody.position[0] + dx / d * (bodyR + 0.5), nearestBody.position[1] + dy / d * (bodyR + 0.5), nearestBody.position[2] + dz / d * (bodyR + 0.5)];
              this.state.velocity = [0, 0, 0];
              this.grounded = true;
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
        }
      }
    } else {
      const earth = this.system.bodyByName('earth')!;
      const earthR = (earth as any).radius ?? 6.371e6;
      this.state.position = [earth.position[0], earth.position[1] + earthR + 0.5, earth.position[2]];
      this.state.velocity = [0, 0, 0];
    }

    this.sanitize(this.state.position);
    this.sanitize(this.state.velocity);

    this.system.propagate(_dt, FIXED_DT);

    for (const body of this.system.bodies) {
      (body as any).syncMesh?.();
    }

    const sprites = (window as any).__spriteMeshes as THREE.Sprite[] | undefined;
    if (sprites) {
      let si = 0;
      for (const body of this.system.bodies) {
        if (body.name === 'earth' || body.name === 'sun') continue;
        if (si < sprites.length) {
          sprites[si]!.position.set(body.position[0] * VISUAL_SCALE, body.position[1] * VISUAL_SCALE, body.position[2] * VISUAL_SCALE);
          si++;
        }
      }
    }

    const soiMeshes = (window as any).__soiMeshes as THREE.LineSegments[] | undefined;
    if (soiMeshes) {
      let si = 0;
      for (const body of this.system.bodies) {
        if (body.mass <= 0 || body.name === 'earth') continue;
        if (si < soiMeshes.length) {
          soiMeshes[si]!.position.set(body.position[0] * VISUAL_SCALE, body.position[1] * VISUAL_SCALE, body.position[2] * VISUAL_SCALE);
          si++;
        }
      }
    }

    if (!this.crashed) {
      this.rocketGroup.position.set(
        this.state.position[0] * VISUAL_SCALE,
        this.state.position[1] * VISUAL_SCALE,
        this.state.position[2] * VISUAL_SCALE
      );

      const rotEuler = new THREE.Euler().setFromQuaternion(this.rocketQuat, 'YXZ');
      this.chase.follow(this.state, _dt, { x: rotEuler.x, y: rotEuler.y, z: rotEuler.z });

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
    this.hud.update(this.state, this.system);

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
    this.hud.setNavballData(
      [rocketFwd.x, rocketFwd.y, rocketFwd.z],
      velDir,
      [upX / upNorm, upY / upNorm, upZ / upNorm]
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
      while (decouplerMesh.children.length > 0) {
        decouplerMesh.children[0]!.removeFromParent();
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
    // Find nozzle attachment points from GLTF models
    const nozzlePoints: THREE.Vector3[] = [];
    
    this.rocketGroup.traverse((obj) => {
      if (obj instanceof THREE.Group || obj instanceof THREE.Object3D) {
        const userData = (obj as any).userData;
        if (userData.nozzlePoints && Array.isArray(userData.nozzlePoints)) {
          for (const point of userData.nozzlePoints) {
            // Convert to world space
            const worldPoint = point.clone();
            obj.getWorldPosition(worldPoint);
            nozzlePoints.push(worldPoint);
          }
        }
      }
    });
    
    if (nozzlePoints.length > 0) {
      // Use the lowest nozzle point (lowest Y)
      let minY = Infinity;
      let nozzlePos = new THREE.Vector3(0, -0.35, 0);
      for (const point of nozzlePoints) {
        if (point.y < minY) {
          minY = point.y;
          nozzlePos.copy(point);
        }
      }
      // Position flame at the nozzle
      this.engineFlame.getMesh().position.copy(nozzlePos);
      this.engineFlame.getMesh().position.y -= 0.05; // Slightly below nozzle
    } else {
      // Fallback: find lowest point of all rocket meshes
      let minY = Infinity;
      this.rocketGroup.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          const box = new THREE.Box3().setFromObject(obj);
          if (box.min.y < minY) minY = box.min.y;
        }
      });
      const flameY = minY === Infinity ? -0.35 : minY - 0.02;
      this.engineFlame.getMesh().position.set(0, flameY, 0);
    }
    // Ensure flame is always pointing downward
    this.engineFlame.getMesh().rotation.set(0, 0, 0);
  }

  dispose(): void {
    this.sceneMgr.scene.remove(this.rocketGroup);
    this.engineFlame.dispose();
    this.hud.unmount();
    this.sound.dispose();
  }
}
