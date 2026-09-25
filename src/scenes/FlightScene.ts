import { automaticWarp } from '../flight/AutomaticWarp';
import * as THREE from 'three';
import type { Renderer } from '../core/Renderer';
import type { SceneManager } from '../core/SceneManager';
import type { System } from '../physics/System';
import type { Vec3 } from '../physics/Body';
import { Body } from '../physics/Body';
import type { Rocket } from '../rocket/Rocket';
import type { AssemblyNode } from '../rocket/Assembly';
import type { Achievements } from '../core/Achievements';
import type { Missions } from '../core/Missions';
import { FlightState } from '../flight/FlightState';
import { ChaseCamera } from '../flight/ChaseCamera';
import { Controls } from '../flight/Controls';
import { HUD } from '../flight/HUD';
import { applyThrust, findFirstEngine, totalThrust, weightedIsp } from '../flight/Thrust';
import { SoundManager } from '../flight/SoundManager';
import { toast } from '../ui/Toast';
import { FIXED_DT, G, ORBIT_SCALE, VISUAL_PLANET_MULT, PART_SCALE, EARTH_MASS, ROCKET_VISUAL_SCALE, FUEL_FLOW_MULT } from '../config/constants';
import { getReferenceBody } from '../physics/SoiResolver';
import { predictOrbit } from '../physics/OrbitPredictor';
import { OrbitMap } from '../ui/OrbitMap';
import { buildDeployedParachute, gltfCache } from '../parts/PartBuilder';
import { saveFlightState, clearFlightSave, captureFuel, restoreFuel, serializeAssembly, type FlightSave } from '../storage/SaveLoad';
import { gravitationalAccelerationAt, totalGravityOn } from '../physics/Gravity';
import { LaunchClamps } from '../flight/LaunchClamps';
import { SurfaceView, magnifyPoint } from '../planets/SurfaceView';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;
import { EngineFlame } from '../effects/EngineFlame';
import { GroundSmoke } from '../effects/GroundSmoke';
import { Lifetime } from '../core/Lifetime';
import { releaseSceneObjects } from '../core/disposeObject';
import { aimAttitude, steerAttitude } from '../flight/Attitude';
import { landingCommand, landingOutcome } from '../flight/LandingGuidance';
import { flightTelemetry } from '../flight/Telemetry';
import { propagateCoast } from '../flight/Coast';
import { MissionGuidance, type NavigationBody, type MissionCommand } from '../flight/MissionGuidance';

interface Debris {
  mesh: THREE.Group;
  body: Body;
  life: number;
}

export class FlightScene {
  static readonly SPAWN_OFFSET_M = 2;
  private lifetime = new Lifetime();
  private structuralRoots: THREE.Object3D[] = [];
  private ownedSceneObjects: THREE.Object3D[] = [];
  private saveTimer = 0;
  private stageSeparations = 0;
  private landingAssist = false;
  private landingDirection = new THREE.Vector3();
  private landingStatus = 'Click Launch or press Space · ↑/↓ throttle · W/S, A/D steer';
  private renderer: Renderer;
  private sceneMgr: SceneManager;
  private system: System;
  private achievements: Achievements;
  private missions: Missions;
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
  private launchPadGroup: THREE.Group | null = null;
  private launchClamps: LaunchClamps | null = null;
  private surfaceView = new SurfaceView();
  private reentryGlow: THREE.Mesh | null = null;
  private orbitMap!: OrbitMap;
  private maneuverRemaining = new THREE.Vector3();
  private rocketQuat = new THREE.Quaternion();
  private attitudePresentationActive = false;
  private previousDisplayedAttitude = new THREE.Quaternion();
  private angularVel = new THREE.Vector3();
  private readonly ANGULAR_ACCEL = 2.5;
  private readonly ANGULAR_DAMPING = 3.5;
  private timeWarp = 1;
  private parachuteDeployed = false;
  private deployedChuteMesh: THREE.Group | null = null;
  private chuteDeployProgress = 0; // 0 = closed, 1 = fully open
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
  private countdownCooldown = 0;
  private _debugShown = false;
  private _dbgEl: HTMLDivElement | null = null;
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
private throttleUpKey = false;
private throttleDownKey = false;
private hudVisible = true;
  private lastAltMilestone = 0;
  private sonicBoomRing: THREE.Mesh | null = null;
  private sonicBoomLife = 0;
  private reentryGlowMesh: THREE.Mesh | null = null;
  private rocketRadius = 0.1;
  private rocketBottomY = 0; // lowest point of rocket mesh in local space
  private _debugMarker: THREE.Mesh | null = null;
  private _spawnProtectionTimer = 0;
  private _camSnapped = false;
  private presentationUp = new THREE.Vector3(0,1,0);
  private _gravityTurnBias = 0;
  private manualAttitude = false;
  private _gravityTurnAltThreshold = 800;
private rocketTopY = 0; // highest point of rocket mesh in local space

  // Autopilot state
  private autopilotActive = false;
  private autopilotPhase: MissionCommand['phase'] | 'idle' | 'burn' | 'coast' | 'arrived' | 'aborted' = 'idle';
  private missionGuidance: MissionGuidance | null = null;
  private missionDirection = new THREE.Vector3(0, 1, 0);
  private missionThrottle = 0;
  private missionAutoWarp = true;
  private missionRate = 1;
  private autopilotTarget = '';
  private autopilotDeltaV = 0;
  private autopilotDirection: 'prograde' | 'retrograde' = 'prograde';
  private autopilotBurnStartSpeed = 0;
  private autopilotStartMissionTime = 0;
  private autopilotStartFuel = 0;
  private autopilotStartMass = 0;
  private autopilotMaxWarpIndex = 6; // 100000x for coast
  private autopilotStatusEl: HTMLDivElement | null = null;

  private lastCountdownText = '';

  private showCountdown(text: string): void {
    if (!this.countdownEl) {
      this.countdownEl = document.createElement('div');
      this.countdownEl.style.cssText = `
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:120px;font-weight:bold;color:#ff0;z-index:9999;
        text-shadow:0 0 30px rgba(255,136,0,0.8);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `;
      this.lifetime.append(this.countdownEl);
    }
    // Update ONLY when the text changes — the update loop calls this
    // every frame within each 1s window; per-frame reflow restarts
    // caused the countdown to jank/lag.
    if (text === this.lastCountdownText) {
      this.countdownEl.style.opacity = '1';
      return;
    }
    this.lastCountdownText = text;
    // Restart pop animation on each new text
    this.countdownEl.textContent = text;
    this.countdownEl.style.opacity = '1';
    this.countdownEl.classList.remove('countdown-pulse');
    // Force reflow to restart the keyframe animation
    void this.countdownEl.offsetWidth;
    if (text === 'LIFTOFF!') {
      this.countdownEl.style.color = '#FF8844';
      this.countdownEl.style.fontSize = '48px';
    } else {
      this.countdownEl.style.color = '#FFFFFF';
      this.countdownEl.style.fontSize = '72px';
      this.countdownEl.classList.add('countdown-pulse');
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


  constructor(renderer: Renderer, sceneMgr: SceneManager, system: System, rocket: Rocket, achievements: Achievements, missions: Missions, save?: FlightSave) {
    const existingSceneObjects = new Set(sceneMgr.scene.children);
    this.renderer = renderer;
    this.sceneMgr = sceneMgr;
    this.system = system;
    this.achievements = achievements;
    this.missions = missions;
    this.missions.resetFlight();
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

    // Compute nominal surface position (for terrain lookup)
    const nominalSurface: [number, number, number] = [
      earth.position[0] + dirNorm[0] * earthR,
      earth.position[1] + dirNorm[1] * earthR,
      earth.position[2] + dirNorm[2] * earthR,
    ];
    // Get actual surface radius including terrain displacement
    const surfaceR = (earth as any).getSurfaceRadiusAt?.(nominalSurface) ?? earthR;
    const spawnPos: [number, number, number] = [
      earth.position[0] + dirNorm[0] * (surfaceR + FlightScene.SPAWN_OFFSET_M),
      earth.position[1] + dirNorm[1] * (surfaceR + FlightScene.SPAWN_OFFSET_M),
      earth.position[2] + dirNorm[2] * (surfaceR + FlightScene.SPAWN_OFFSET_M),
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
    this.structuralRoots = [...this.rocketGroup.children];
    this.rocketGroup.quaternion.copy(this.rocketQuat);
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
    this.chase.frame((this.rocketTopY - this.rocketBottomY) * ROCKET_VISUAL_SCALE, this.rocketRadius * ROCKET_VISUAL_SCALE);
    this.chase.setAzimuth(azimuth);
    this.chase.enableOrbit(this.renderer.domElement);
    // Compute visual offset for initial camera placement. rocketBottomY is in
    // MODEL units but the group renders at ROCKET_VISUAL_SCALE — multiply, or
    // the rocket sits ~1 scene-unit (≈4 km) underground.
    const initVisualOff = (-this.rocketBottomY + (this.rocketTopY + this.rocketBottomY) * 0.5) * ROCKET_VISUAL_SCALE;
    const initOffX = upDir.x * initVisualOff;
    const initOffY = upDir.y * initVisualOff;
    const initOffZ = upDir.z * initVisualOff;
    this.chase.initialiseAt(this.state, this.rocketQuat, upDir, { x: initOffX, y: initOffY, z: initOffZ });
    this._spawnProtectionTimer = 120;
    this.controls = new Controls(this.state);

    // Auto-detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.controls.enableTouch();
      // Wire mobile SAS/CHUTE buttons
      if (this.controls.touch) {
        this.controls.touch.onSasAction(() => this.cycleSasMode());
        this.controls.touch.onChuteAction(() => this.toggleParachute());
      }
    }

    this.sound = new SoundManager();

    this.hud = new HUD();
    // Debug/diagnostics hook (headless e2e tests read live state from here)
    (window as any).__ellipse = { flight: this };
    this.hud.onAction = (action) => {
      if (this.lifetime.disposed || this.crashed) return;
      if (['stage', 'parachute', 'sas', 'landing', 'warpDown', 'warpUp', 'warp100', 'cameraZoomIn', 'cameraZoomOut'].includes(action) && this.paused) return;
      if (action.startsWith('autopilot') && this.paused) return;
      if (action.startsWith('autopilot:')) this.startMission(action.slice('autopilot:'.length));
      else if (action === 'autopilotCancel') this.abortAutopilot('Cancelled by user');
      else if (action === 'landing') this.toggleLandingAssist();
      else if (action === 'warpDown') this.setPlayerWarp(this.warpIndex - 1);
      else if (action === 'warpUp') this.setPlayerWarp(this.warpIndex + 1);
      else if (action === 'warp100') this.setPlayerWarp(this.warpLevels.indexOf(100));
      else if (action === 'lookDown') { this.cameraMode = 'chase'; this.hud.setFreeCamera(false); this.chase.setPolar(0.55); }
      else if (action === 'cameraZoomIn') this.chase.zoom(0.82);
      else if (action === 'cameraZoomOut') this.chase.zoom(1.22);
      else if (action === 'stage') this.stageOrLaunch();
      else if (action === 'parachute') this.toggleParachute();
      else if (action === 'sas') this.cycleSasMode();
      else if (action === 'map') { this.orbitMap.toggle(); }
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

    this.orbitMap = new OrbitMap(() => ({
      position: this.state.position, velocity: this.state.velocity, bodies: this.system.bodies,
      reference: this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system),
      grounded: this.grounded, paused: this.paused, fuel: this.rocket.totalFuelMass(), remainingBurn: this.maneuverRemaining.length(),
    }), dv => this.startMapBurn(dv), () => this.stopMapBurn(), target => this.startMission(target), () => this.controls.clearInput());
    this.lifetime.listen(window, 'keydown', (e: KeyboardEvent) => {
      if (e.repeat || (e.target instanceof HTMLElement && e.target.closest('input, select, textarea'))) return;
      if (e.key.toLowerCase() === 'm' || e.key === 'Tab') { e.preventDefault(); this.orbitMap.toggle(); }
    });

    this.lifetime.listen(window, 'keydown', (e: KeyboardEvent) => {
      if (this.lifetime.disposed || e.repeat || (e.target instanceof HTMLElement && e.target.closest('input, select, textarea'))) return;
      if (this.paused || this.crashed) return;
      if (this.autopilotActive && ['w', 's', 'a', 'd', 'j', 'k', 'arrowup', 'arrowdown'].includes(e.key.toLowerCase())) this.abortAutopilot('Manual control');
      if (e.key.toLowerCase() === 'l') { this.toggleLandingAssist(); e.preventDefault(); return; }
      if (e.key === 'q' || e.key === '[') {
        if (this.paused) return;
        this.setPlayerWarp(this.warpIndex - 1);
        e.preventDefault();
      } else if (e.key === 'e' || e.key === ']') {
        if (this.paused) return;
        this.setPlayerWarp(this.warpIndex + 1);
        e.preventDefault();
      } else if (e.key === 'p') {
        this.toggleParachute();
        e.preventDefault();
      } else if (e.key === 'g') {
        this.toggleGear();
        e.preventDefault();
      } else if (e.key === 't') {
        this.cycleSasMode();
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
      // Keyboard throttle
      if (e.key === 'ArrowUp') { this.throttleUpKey = true; e.preventDefault(); }
      if (e.key === 'ArrowDown') { this.throttleDownKey = true; e.preventDefault(); }
      // Free cam orbit on arrow keys + Shift+C active
      if (this.cameraMode === 'free') {
        if (e.key === 'ArrowUp') { this.freeCamKeys.up = true; e.preventDefault(); }
        if (e.key === 'ArrowDown') { this.freeCamKeys.down = true; e.preventDefault(); }
        if (e.key === 'ArrowLeft') { this.freeCamKeys.left = true; e.preventDefault(); }
        if (e.key === 'ArrowRight') { this.freeCamKeys.right = true; e.preventDefault(); }
      }
    });

    this.lifetime.listen(window, 'keyup', (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') { this.throttleUpKey = false; this.freeCamKeys.up = false; }
      if (e.key === 'ArrowDown') { this.throttleDownKey = false; this.freeCamKeys.down = false; }
      if (e.key === 'ArrowLeft') { this.freeCamKeys.left = false; }
      if (e.key === 'ArrowRight') { this.freeCamKeys.right = false; }
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

    this.lifetime.listen(dom, 'mousedown', (e) => startDrag(e.clientX, e.clientY));
    this.lifetime.listen(window, 'mousemove', (e) => moveDrag(e.clientX, e.clientY));
    this.lifetime.listen(window, 'mouseup', endDrag);
    this.lifetime.listen(dom, 'touchstart', (e) => {
      if (e.touches.length === 1 && e.touches[0]) startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    this.lifetime.listen(dom, 'touchmove', (e) => {
      if (e.touches.length === 1 && e.touches[0]) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    this.lifetime.listen(dom, 'touchend', endDrag);
    this.lifetime.listen(dom, 'wheel', (e) => {
      if (this.cameraMode === 'free') {
        e.preventDefault();
        this.freeCamDist *= e.deltaY > 0 ? 1.1 : 0.9;
        this.freeCamDist = Math.max(0.5, Math.min(500, this.freeCamDist));
      }
    }, { passive: false });

    if (save) {
      this.applyFlightSave(save);
      toast.show('Flight resumed');
    } else {
      toast.show('Ready to launch');
    }
    this.syncVisualTransform();
    this.buildLaunchPad(earth, dirNorm, surfaceR);
    this.updateSurfaceView(0);
    const initialRef = getReferenceBody(this.state.position, this.system);
    const initialUp = new THREE.Vector3(...this.state.position).sub(new THREE.Vector3(...initialRef.position)).normalize();
    const cameraOffset = initialUp.clone().multiplyScalar(-this.rocketBottomY * ROCKET_VISUAL_SCALE);
    cameraOffset.add(new THREE.Vector3(0, (this.rocketTopY + this.rocketBottomY) * ROCKET_VISUAL_SCALE * 0.5, 0).applyQuaternion(this.rocketQuat));
    this.chase.initialiseAt(this.state, this.rocketQuat, initialUp, cameraOffset);
    this.ownedSceneObjects = sceneMgr.scene.children.filter(obj => !existingSceneObjects.has(obj));
    this.lifetime.listen(window, 'resize', () => {
      this.sceneMgr.camera.aspect = window.innerWidth / window.innerHeight;
      this.sceneMgr.camera.updateProjectionMatrix();
      this.chase.frame((this.rocketTopY - this.rocketBottomY) * ROCKET_VISUAL_SCALE, this.rocketRadius * ROCKET_VISUAL_SCALE);
      this._camSnapped = false;
    });
    this.lifetime.listen(window, 'pagehide', () => this.persistFlight());
    this.lifetime.listen(document, 'visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.persistFlight();
    });
    this.lifetime.listen(window, 'blur', () => {
      this.throttleUpKey = false; this.throttleDownKey = false;
      this.freeCamKeys = { left: false, right: false, up: false, down: false };
    });
  }

  /** Resume a saved flight: position, velocity, attitude, fuel, landing state. */
  private applyFlightSave(save: FlightSave): void {
    // Defensive: a stale/corrupted save must never resurrect the rocket
    // inside a planet (instant 'Impact on Earth' crash on resume). Fall back
    // to a fresh spawn on the launchpad.
    const refBody = getReferenceBody(save.position as [number, number, number], this.system);
    const sdx = save.position[0] - refBody.position[0];
    const sdy = save.position[1] - refBody.position[1];
    const sdz = save.position[2] - refBody.position[2];
    const sd = Math.sqrt(sdx * sdx + sdy * sdy + sdz * sdz);
    const refR = (refBody as any).radius ?? 0;
    const oldRadius = save.bodyRadii?.[refBody.name] ?? (refBody.name === 'earth' ? 6.371e6 * 2 : refR / 1.25);
    const resized = !save.bodyRadii || Math.abs(oldRadius - refR) > 1;
    const direction: Vec3 = sd > 0 ? [sdx / sd, sdy / sd, sdz / sd] : [0, 1, 0];
    const surface = (refBody as any).getSurfaceRadiusAt?.(save.position) ?? refR;
    const savedRadius = resized ? Math.max(surface + FlightScene.SPAWN_OFFSET_M, sd + refR - oldRadius) : sd;
    if (!isFinite(sd) || sd === 0) {
      this.resetToLaunchPad();
    } else {
      const distance = save.grounded ? surface + FlightScene.SPAWN_OFFSET_M : Math.max(savedRadius, surface + FlightScene.SPAWN_OFFSET_M);
      this.state.position = refBody.position.map((x, i) => x + direction[i]! * distance) as Vec3;
      this.state.velocity = [...save.velocity] as Vec3;
      this.state.throttle = save.throttle;
      this.missionTime = save.missionTime;
      this.rocketQuat.fromArray(save.quat).normalize();
      this.launched = save.launched;
      this.grounded = save.grounded;
      this.groundedDir = save.grounded ? direction : null;
      this.maxAlt = save.maxAlt ?? 0;
      this.maxSpeed = save.maxSpeed ?? 0;
      this.heatEnergy = save.heatEnergy ?? 0;
      this.stageSeparations = save.stageSeparations ?? 0;
      for (let i = 0; i < this.stageSeparations; i++) this.missions.recordStageSeparation();
      if (save.parachuteDeployed) this.toggleParachute();
      if (save.gearDeployed) this.toggleGear();
    }
    this._spawnProtectionTimer = 0; // resumed mid-flight: no pad grace needed
    restoreFuel(this.rocket, save);
    // Recreate an in-progress automatic flight only after position, planets,
    // orientation and fuel have been restored.  The controller is stateless
    // between frames, so rebuilding it from the saved departure/target keeps
    // Continue deterministic without moving the rocket to a waypoint.
    if (save.mission && !this.grounded && !this.crashed) {
      const departure = this.system.bodyByName(save.mission.departure);
      const target = this.system.bodyByName(save.mission.target);
      if (departure && target && departure.name !== target.name && this.rocket.totalFuelMass() > 0 && totalThrust(this.rocket.assembly.roots) > 0) {
        this.autopilotActive = true;
        this.autopilotTarget = target.name;
        this.autopilotPhase = save.mission.phase === 'landing' ? 'landing' : 'cruise';
        this.missionGuidance = new MissionGuidance(this.navigationBody(departure), this.navigationBody(target));
        this.missionDirection.set(0, 1, 0).applyQuaternion(this.rocketQuat).normalize();
        this.missionThrottle = this.state.throttle;
        this.missionAutoWarp = save.mission.autoWarp;
        this.missionRate = 1;
        this.timeWarp = 1;
        this.warpIndex = 0;
        this.hud.setWarp(1);
        this.sasMode = 'off';
        this.hud.setSasMode('off');
        this.landingAssist = this.autopilotPhase === 'landing';
        this.hud.setAutopilotStatus(this.autopilotPhase === 'landing' ? 'LAND' : 'CRUISE', target.name, 'Automatic flight resumed');
      }
    }
    this.syncVisualTransform();
  }

  /** Re-spawn on the flat KSC launchpad (also used when a saved flight is invalid). */
  private resetToLaunchPad(): void {
    const earth = this.system.bodyByName('earth')!;
    const earthR = (earth as any).radius ?? 6.371e6;
    this.launched = false;
    this.groundedDir = null;
    this.state.velocity = [0, 0, 0];
    // Kennedy Space Center: 28.5°N, 80.5°W
    const lat = 28.5 * Math.PI / 180;
    const lon = -80.5 * Math.PI / 180;
    const dir: [number, number, number] = [
      Math.cos(lat) * Math.cos(lon),
      Math.sin(lat),
      Math.cos(lat) * Math.sin(lon),
    ];
    const dirMag = Math.sqrt(dir[0] * dir[0] + dir[1] * dir[1] + dir[2] * dir[2]);
    const dirNorm: [number, number, number] = [dir[0] / dirMag, dir[1] / dirMag, dir[2] / dirMag];
    const nominal: [number, number, number] = [
      earth.position[0] + dirNorm[0] * earthR,
      earth.position[1] + dirNorm[1] * earthR,
      earth.position[2] + dirNorm[2] * earthR,
    ];
    const surfaceR = (earth as any).getSurfaceRadiusAt?.(nominal) ?? earthR;
    this.state.position = [
      earth.position[0] + dirNorm[0] * (surfaceR + FlightScene.SPAWN_OFFSET_M),
      earth.position[1] + dirNorm[1] * (surfaceR + FlightScene.SPAWN_OFFSET_M),
      earth.position[2] + dirNorm[2] * (surfaceR + FlightScene.SPAWN_OFFSET_M),
    ];
    this.groundedDir = dirNorm;
    this.grounded = true;
    this.missionTime = 0;
    const upDir = new THREE.Vector3(
      this.state.position[0] - earth.position[0],
      this.state.position[1] - earth.position[1],
      this.state.position[2] - earth.position[2]
    ).normalize();
    this.rocketQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), upDir);
  }

  private atmosphereScale(bodyName: string): number {
    switch (bodyName) {
      case 'earth': return 1.0;
      case 'venus': return 1.5;
      case 'mars': return 0.05;
      default: return 0;
    }
  }

  /** Velocity RELATIVE to the reference body. Planets race along their orbits
   *  (Earth: 17 km/s!) — drag, plasma, SAS prograde, orbits and HUD speed must
   *  all use local-relative velocity, or the pad would burn like a reentry. */
  private relVelocity(): [number, number, number] {
    if (this.grounded) return [0, 0, 0];
    const ref = getReferenceBody(this.state.position, this.system);
    const rv = ref.velocity ?? [0, 0, 0];
    return [
      this.state.velocity[0] - rv[0],
      this.state.velocity[1] - rv[1],
      this.state.velocity[2] - rv[2],
    ];
  }

  private relSpeed(): number {
    const v = this.relVelocity();
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
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
    const allRoots = this.rocket.assembly.roots;
    if (allRoots.length === 0) return [];
    // Sort top-first by Y — decoupler chunks assume upper stage comes before decoupler.
    // Root array order differs between VAB (bottom-first) and Game default (top-first).
    const roots = [...allRoots].sort((a, b) => b.position[1] - a.position[1]);

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
    if (this.lifetime.disposed || !Number.isFinite(_dt) || _dt <= 0) return;
    this.previousDisplayedAttitude.copy(this.rocketGroup.quaternion);
    try {
      if (this.autopilotActive && this.missionGuidance && this.missionAutoWarp && !this.grounded && !this.paused && !this.crashed) {
        const ref = this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system);
        const altitude = flightTelemetry(this.state.position, this.state.velocity, ref, false).altitude;
        const target = this.missionGuidance.target;
        const toTarget = Math.hypot(...this.state.position.map((v, i) => v - target.position[i]!)) - target.radius;
        const relativeSpeed = Math.hypot(...this.state.velocity.map((v,i) => v-target.velocity[i]!));
        const journey = new THREE.Vector3(...target.position).distanceTo(new THREE.Vector3(...this.missionGuidance.departure.position));
        const requestedRate = automaticWarp(altitude,toTarget,relativeSpeed,journey);
        // Acceleration ramps up; braking the simulation rate takes effect immediately.
        const rate = Math.min(requestedRate, this.missionRate + Math.max(1,this.missionRate)*_dt*.7);
        const maxStep = altitude < 20000 ? 0.1 : Math.min(1, Math.max(0.25, toTarget / 1e6));
        this.missionRate = Math.min(rate, maxStep * 32 / _dt);
        const total = _dt * this.missionRate;
        const count = Math.min(32, Math.max(1, Math.ceil(total / maxStep)));
        for (let i = 0; i < count; i++) {
          this.updateInner(total / count, i === count - 1, _dt / count, _dt);
          if (this.crashed || this.paused || !this.autopilotActive || this.grounded) {
            if (i < count - 1 && !this.crashed && !this.paused) this.updateInner(0, true, 0, _dt);
            break;
          }
        }
        if (this.autopilotActive) this.hud.setWarp(this.missionRate);
      } else this.updateInner(_dt);

    } catch (e: any) {
      toast.show(`ERROR: ${e.message || e}`);
      console.error('FlightScene.update error:', e);
    }
  }

  private updateInner(_dt: number, render = true, wallDt = _dt, renderDt = wallDt): void {
    let baseDt = wallDt;
    const simulationDt = _dt;
    // A crash is terminal: keep planet, contact point and camera in one frozen
    // frame until restart. Only the short explosion animation continues.
    if (this.crashed) {
      this.updateExplosion(baseDt);
      return;
    }
    if (this._spawnProtectionTimer > 0) this._spawnProtectionTimer = Math.max(0, this._spawnProtectionTimer - baseDt * 60);
    this.saveTimer += baseDt;
    if (this.saveTimer >= 5) { this.persistFlight(); this.saveTimer = 0; }

    // Pause toggle
    if (this.controls.consumePauseToggle()) {
      this.paused = !this.paused;
      this.hud.setPaused(this.paused);
      if (this.paused) this.sound.stopEngine();
    }

    if (this.paused) {
      this.controls.getStageRequested();
      this.system.propagate(0, FIXED_DT);
      return;
    }

    // Track mission time (only when not crashed/paused)


    // Atmosphere warp clamp: high warp in atmosphere tunnels through the 200m
    // crash band (and drag overshot) — rockets "landed" instead of crashing.
    // Limit to 10x below 70km altitude (KSP-style).
    {
      const clampRef = getReferenceBody(this.state.position, this.system);
      const cdx = this.state.position[0] - clampRef.position[0];
      const cdy = this.state.position[1] - clampRef.position[1];
      const cdz = this.state.position[2] - clampRef.position[2];
      const cd = Math.sqrt(cdx*cdx + cdy*cdy + cdz*cdz) || 1;
      const cR = (clampRef as any).getSurfaceRadiusAt?.(this.state.position) ?? (clampRef as any).radius ?? 0;
      const cAlt = cd - cR;
      const atmoWarpLimit = 3; // index of 10x in warpLevels
      if (cR > 0 && cAlt < 70000 && this.warpIndex > atmoWarpLimit) {
        this.warpIndex = atmoWarpLimit;
        this.timeWarp = this.warpLevels[this.warpIndex]!;
        this.hud.setWarp(this.timeWarp);
        toast.show('Time warp limited near the surface', 1800);
      }
    }



    const previousThrottle = this.state.throttle;
    this.controls.update(baseDt);
    if (this.maneuverRemaining.lengthSq() > 0 && this.state.throttle !== previousThrottle) {
      const manualThrottle = this.state.throttle;
      this.stopMapBurn(); this.state.throttle = manualThrottle;
    }
    if (this.controls.getStageRequested()) this.stageOrLaunch();
    // Screen buttons throttle
    if (this.hud.throttleUpBtn) this.state.throttle = Math.min(1, this.state.throttle + baseDt * 0.5);
    if (this.hud.throttleDownBtn) this.state.throttle = Math.max(0, this.state.throttle - baseDt * 0.3);
    // Autopilot: override throttle/SAS/warp BEFORE warp checks so it takes effect
    this.updateAutopilot(simulationDt);
    this.updateLandingAssist(simulationDt);
    _dt = simulationDt * this.timeWarp;
    this.missionTime += _dt;

    // Throttle is locked only above 10x warp (silently zeroing it at ANY
    // warp made rockets "not lift off" for no visible reason). Physics warp
    // up to 10x is safe: thrust and drag both use the warped dt.
    const warpActive = this.timeWarp > 1;
    if (warpActive && this.warpIndex > 3 && !(this.autopilotActive && (this.autopilotPhase === 'burn' || this.autopilotPhase === 'ascent'))) {
      if (this.state.throttle > 0) toast.show('Throttle locked above 10x warp — press [ to reduce warp', 2500);
      this.state.throttle = 0;
    }
    // Free camera is just a CAMERA — it must not silently kill the throttle
    // (another "why doesn't it lift off" trap).

    // Auto-stage when the CURRENT (lowest) stage's tanks run dry — also
    // during warped autopilot ascent, otherwise a dry booster at 10x warp
    // leaves the rocket dead in the water. Allowed at warp during ascent.
    if ((!warpActive || (this.autopilotActive && this.autopilotPhase === 'ascent')) && !this.grounded && this.state.throttle > 0) {
      const dec = this.findLowestDecoupler(this.rocket.assembly.roots);
      if (dec) {
        const decY = dec.position[1];
        const below = this.rocket.fuelTanks.filter(t => t.node.position[1] < decY);
        const belowFuel = below.reduce((s, t) => s + t.remaining, 0);
        const totalFuel = this.state.rocket.totalFuelMass();
        // Booster tanks dry but fuel remains above → drop the booster.
        // Everything dry → drop dead weight anyway.
        if ((below.length > 0 && belowFuel <= 0.01 && totalFuel > 0.1) || totalFuel <= 0.1) {
          this.performStage();
        }
      }
    }

    // Quaternion-based rotation in local space — natural feel
    // engineActive: throttle is up (countdown/spool can run)
    // engineFiring: throttle up AND fuel remains — thrust, flame and sound
    // require fuel, otherwise rockets accelerated forever on empty tanks.
    const engineActive = this.state.throttle > 0;
    const engineFiring = engineActive && this.state.rocket.totalFuelMass() > 0.01;
    const pitchInput = warpActive ? 0 : this.controls.getPitch();
    const yawInput = warpActive ? 0 : this.controls.getYaw();
    const rollInput = warpActive ? 0 : this.controls.getRoll();

    const rotRefBody = this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system);
    const surfaceNormal = new THREE.Vector3(...this.state.position).sub(new THREE.Vector3(...rotRefBody.position)).normalize();
    const altM = new THREE.Vector3(...this.state.position).distanceTo(new THREE.Vector3(...rotRefBody.position)) - ((rotRefBody as any).radius ?? 0);
    const steering = pitchInput !== 0 || yawInput !== 0 || rollInput !== 0;
    if (!this.grounded && !warpActive) {
      if (steering) {
        this.manualAttitude = true;
        if (this.landingAssist) { this.landingAssist = false; this.landingStatus = 'Manual control · L: landing assist'; }
        steerAttitude(this.rocketQuat, this.angularVel, pitchInput, yawInput, rollInput, baseDt);
        this.sasTargetQuat.copy(this.rocketQuat);
      } else if (this.landingAssist) {
        aimAttitude(this.rocketQuat, this.landingDirection, this.autopilotActive ? simulationDt : baseDt, 1.4, surfaceNormal);
        this.angularVel.set(0, 0, 0);
      } else if (this.autopilotActive && this.missionGuidance) {
        aimAttitude(this.rocketQuat, this.missionDirection, simulationDt, 1.4, surfaceNormal);
        this.angularVel.set(0, 0, 0);
      } else if (this.sasMode === 'prograde' || this.sasMode === 'retrograde') {
        const target = new THREE.Vector3(...this.relVelocity());
        if (this.sasMode === 'retrograde') target.negate();
        aimAttitude(this.rocketQuat, target, baseDt);
        this.angularVel.set(0, 0, 0);
      } else if (this.sasMode === 'hold') {
        this.rocketQuat.rotateTowards(this.sasTargetQuat, baseDt * 0.8);
        this.angularVel.set(0, 0, 0);
      } else {
        steerAttitude(this.rocketQuat, this.angularVel, 0, 0, 0, baseDt);
      }
    }
    // A gentle ascent turn is never allowed to follow a descending trajectory nose-down.
    const radialSpeed = new THREE.Vector3(...this.relVelocity()).dot(surfaceNormal);
    const canAutoturn = this.launched && !this.grounded && !warpActive && !this.landingAssist &&
      !this.autopilotActive && !steering && !this.manualAttitude && this.sasMode === 'off' && this.state.throttle > 0 && radialSpeed > 5;
    if (canAutoturn && altM > this._gravityTurnAltThreshold) {
      this._gravityTurnBias = Math.min(this._gravityTurnBias + 0.012 * baseDt, 0.65);
      const east = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), surfaceNormal);
      if (east.lengthSq() < 1e-8) east.set(1, 0, 0);
      east.normalize();
      const targetDir = surfaceNormal.clone().multiplyScalar(Math.cos(this._gravityTurnBias)).addScaledVector(east, Math.sin(this._gravityTurnBias));
      aimAttitude(this.rocketQuat, targetDir, baseDt, 0.25);
    }
    if (this.maneuverRemaining.lengthSq() > 0) {
      if (steering || this.grounded || this.rocket.totalFuelMass() <= 0) this.stopMapBurn();
      else {
        aimAttitude(this.rocketQuat, this.maneuverRemaining, baseDt, 1.4);
        const alignment = new THREE.Vector3(0,1,0).applyQuaternion(this.rocketQuat).dot(this.maneuverRemaining.clone().normalize());
        const acceleration = totalThrust(this.rocket.assembly.roots) * 1000 / this.rocket.totalMass();
        this.state.throttle = alignment > .999 ? Math.min(1, this.maneuverRemaining.length() / Math.max(.00001, acceleration * _dt)) : 0;
      }
    }
    this.rocketQuat.normalize();
    this.rocketGroup.quaternion.copy(this.rocketQuat);
    // Use the orientation that will actually be rendered this frame.
    const fwd = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
    const tx = fwd.x, ty = fwd.y, tz = fwd.z;
    if (this.autopilotActive && this.missionGuidance && !this.grounded && !this.landingAssist) {
      const alignment = Math.max(0, fwd.dot(this.missionDirection));
      // Keep thrust continuous while the nose catches up. A hard 0/1 gate
      // made the controller pulse every frame, which looked like shaking.
      this.state.throttle *= THREE.MathUtils.clamp((alignment - 0.55) / 0.45, 0, 1) * alignment;
    }

    // Apply thrust — TWR gate: must have enough thrust at current throttle
    let canLiftOff = false;
    if (this.countdownCooldown > 0) this.countdownCooldown -= baseDt;
    if (!engineActive && this.grounded && this.countdownActive) {
      this.countdownActive = false;
      this.countdownTimer = 0;
      this.hideCountdown();
    }
    if (engineActive && this.grounded) {
      // Countdown — start once
      if (!this.countdownActive && this.countdownCooldown <= 0) {
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
          // Sum ALL engines' thrust (not just first found)
          const sumThrust = totalThrust(this.state.rocket.assembly.roots);
          const refBody = getReferenceBody(this.state.position, this.system);
          const gdx = this.state.position[0] - refBody.position[0];
          const gdy = this.state.position[1] - refBody.position[1];
          const gdz = this.state.position[2] - refBody.position[2];
          const gr = Math.sqrt(gdx*gdx + gdy*gdy + gdz*gdz) || 1;
          const localGrav = (G * refBody.mass) / (gr * gr);
          if (sumThrust > 0 && localGrav > 0) {
            const fuelNow = this.state.rocket.totalFuelMass();
            if (fuelNow <= 0.01) {
              toast.show('No fuel — cannot launch!');
              this.launched = false;
              this.countdownTimer = 0;
              this.countdownCooldown = 5;
            } else {
              const twr = (sumThrust * 1000 * this.state.throttle) / (this.state.rocket.totalMass() * localGrav);
              if (twr >= 1.0) {
                canLiftOff = true;
              } else {
                toast.show(`TWR ${twr.toFixed(2)} — need more throttle!`);
                this.launched = false;
                this.countdownTimer = 0;
                this.countdownCooldown = 5; // 5s cooldown before retry
              }
            }
          }
          if (canLiftOff) {
            this.showCountdown('LIFTOFF!');
            this.lifetime.timeout(() => this.hideCountdown(), 1500);
          }
        }
      }
    }
    if ((engineFiring || this.maneuverRemaining.lengthSq() > 0) && (!this.grounded || canLiftOff)) {
      const beforeBurn = new THREE.Vector3(...this.state.velocity);
      applyThrust(this.state, _dt, [tx, ty, tz]);
      if (this.maneuverRemaining.lengthSq() > 0) {
        const delivered = new THREE.Vector3(...this.state.velocity).sub(beforeBurn);
        this.maneuverRemaining.sub(delivered);
        if (this.maneuverRemaining.length() < 0.05 || this.rocket.totalFuelMass() <= 0) this.stopMapBurn();
      }
      this.sanitize(this.state.velocity);
    }
    if (engineFiring && canLiftOff && this.grounded) {
      this.grounded = false;
      this.groundedDir = null;
      this.liftoffFrames = 60;
      this.launched = true;
      this.landingStatus = 'W/S and A/D steer · ↑/↓ throttle · Space stages · L landing assist';
      this._camSnapped = false; // reset camera snap on liftoff
      // Inherit the planet's ORBITAL velocity (Earth: 17 km/s). Without it
      // the planet races away from the rocket and everything downstream
      // (debris, altitude, orbit prediction) collapses into garbage.
      const liftoffRef = getReferenceBody(this.state.position, this.system);
      const liftoffVel = liftoffRef.velocity ?? [0, 0, 0];
      this.state.velocity[0] += liftoffVel[0];
      this.state.velocity[1] += liftoffVel[1];
      this.state.velocity[2] += liftoffVel[2];
      this.achievements.unlock('first_launch');
      this.sound.startEngine();
      // Brief camera shake on liftoff
      this.screenShake = 0.8;
    }

    // Flame and sound show only while fuel remains (engineFiring)
    if (engineFiring) {
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
      // Subtle combustion flicker
      const flicker = 1 + (Math.random() - 0.5) * 0.08;
      this.exhaustLight.intensity = this.state.throttle * 3 * flicker;
      this.exhaustLight.color.setHSL(0.08 - this.state.throttle * 0.05, 1, 0.5 + this.state.throttle * 0.3);
    }

    // Ground smoke when engine runs on pad
    if (engineFiring && this.grounded) this.groundSmoke.start();
    else this.groundSmoke.stop();
    this.groundSmoke.update(baseDt);

    let nearestBody: any = null;
    let nearestDist = Infinity;
    
    // Always compute nearest body for collision checks
    const nearRef = this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system);
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

    // Reentry glow — RELATIVE speed (planet's 17 km/s orbital motion removed;
    // absolute speed would light the pad up like a reentry)
    const speed = this.relSpeed();
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

    if (this.liftoffFrames > 0) this.liftoffFrames = Math.max(0, this.liftoffFrames - baseDt * 60);

    if (!this.grounded) {
      if (nearestDist > 1 && this.timeWarp <= 10) {
        const gravity = gravitationalAccelerationAt(this.state.position, this.system.bodies);
        // Integration below already carries the craft with its accelerating
        // reference body. Apply only relative acceleration here.
        const frameGravity = gravitationalAccelerationAt(nearRef.position, this.system.bodies.filter(body => body !== nearRef));
        for (const axis of [0, 1, 2] as const) {
          this.state.velocity[axis] += (gravity[axis] - frameGravity[axis]) * _dt;
        }
      }
      this.sanitize(this.state.velocity);

// Aerodynamic drag — RELATIVE speed (atmosphere co-moves with the planet)
       const speed = this.relSpeed();
       const mass = this.state.rocket.totalMass();
       let CdA = mass * 0.001 + 0.2;
       if (this.parachuteDeployed) CdA = Math.max(50, mass * 6);
       else if (this.gearDeployed) CdA *= 2.5;
       if (nearestBody && (nearestBody as any).radius && speed > 0.05 && speed < 1e6) {
         const alt = nearestDist - (nearestBody as any).radius;
         // Only apply drag if the body has an atmosphere
         const atmoScale = this.atmosphereScale((nearestBody as any).name);
         if (atmoScale > 0 && alt > 0 && alt < 300000) {
           const rho = 1.225 * Math.exp(-alt / 8500) * atmoScale;
           const q = 0.5 * rho * speed * speed;
           const dragForce = q * CdA;
           const dragAccel = dragForce / mass;
           const dragDelta = dragAccel * _dt;
            // Never kill more than 90% of RELATIVE speed in one frame — the
            // old full-stop (velocity = 0) at high time warp halted rockets
            // mid-air. Applied to the RELATIVE velocity (planet's orbital
            // component must pass through untouched).
            const f = Math.max(0.1, 1 - dragDelta / speed);
            const rv = this.relVelocity();
            this.state.velocity[0] = rv[0] * f + (this.state.velocity[0] - rv[0]);
            this.state.velocity[1] = rv[1] * f + (this.state.velocity[1] - rv[1]);
            this.state.velocity[2] = rv[2] * f + (this.state.velocity[2] - rv[2]);
            this.sanitize(this.state.velocity);

        // Reentry glow effect (plasma)
        const reentryIntensity = Math.max(0, (speed / 2000) * (rho / 1.225) - 0.1);
        if (reentryIntensity > 0.05 && this.reentryGlowMesh) {
          this.reentryGlowMesh.visible = true;
          // Subtle plasma flicker
          const flicker = 1 + (Math.random() - 0.5) * 0.06 * reentryIntensity;
          this.reentryGlowMesh.scale.setScalar((1 + reentryIntensity * 2) * flicker);
          (this.reentryGlowMesh.material as THREE.MeshBasicMaterial).opacity = Math.min(1, reentryIntensity * (0.92 + Math.random() * 0.08));
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
          const delta = new THREE.Vector3(...this.state.position).sub(new THREE.Vector3(...nearRef.position));
          this.doCrash('Overheated during reentry', nearRef, delta.x, delta.y, delta.z, delta.length(), (nearRef as any).getSurfaceRadiusAt?.(this.state.position) ?? (nearRef as any).radius ?? 0);
          if (this.crashed) return;
        }
      }


    } else {
      this.state.velocity = [0, 0, 0];
    }

    const motionRef = nearRef;
    // Keep an explicit segment for the selected destination as well. SOI
    // switching is intentionally conservative, so a fast approach can still
    // be referenced to the departure planet while already crossing the target
    // body's surface. Without this second segment the rocket could orbit a
    // few metres above a planet forever and never register touchdown.
    const previousAbsolute = [...this.state.position] as Vec3;
    const destinationBody = this.autopilotActive && this.missionGuidance
      ? this.system.bodyByName(this.autopilotTarget) : undefined;
    const destinationBefore = destinationBody ? [...destinationBody.position] as Vec3 : null;
    const oldRelative = this.state.position.map((x, i) => x - motionRef.position[i]!) as Vec3;
    const relativeVelocity = this.state.velocity.map((x, i) => x - motionRef.velocity[i]!) as Vec3;
    const surfaceBefore = (motionRef as any).getSurfaceRadiusAt?.(this.state.position) ?? (motionRef as any).radius ?? 0;
    const coast = !this.grounded && this.timeWarp > 10
      ? propagateCoast(oldRelative, relativeVelocity, motionRef.mass, _dt, surfaceBefore + FlightScene.SPAWN_OFFSET_M)
      : null;
    this.system.propagate(_dt, this.autopilotActive && this.missionGuidance ? 1 : FIXED_DT);
    if (!this.grounded) {
      const relativeEnd = coast?.position ?? oldRelative.map((x, i) => x + relativeVelocity[i]! * _dt) as Vec3;
      this.state.position = relativeEnd.map((x, i) => x + motionRef.position[i]!) as Vec3;
      // Account for acceleration of the reference body's heliocentric frame.
      this.state.velocity = (coast?.velocity ?? relativeVelocity).map((x, i) => x + motionRef.velocity[i]!) as Vec3;
      this.resolveSurfaceContact(motionRef, coast ? relativeEnd : oldRelative, relativeEnd, coast?.impacted ?? false);
      if (!this.grounded && !this.crashed && destinationBody && destinationBody !== motionRef && destinationBefore) {
        const destinationStart = previousAbsolute.map((x, i) => x - destinationBefore[i]!) as Vec3;
        const destinationEnd = this.state.position.map((x, i) => x - destinationBody.position[i]!) as Vec3;
        this.resolveSurfaceContact(destinationBody, destinationStart, destinationEnd, false);
      }
      if (this.crashed) return;
    }

    // Track body surface while grounded (body moves during propagate)
    if (this.grounded && this.groundedDir) {
      const refBody = motionRef;
      const bodyR = (refBody as any).radius ?? 6.371e6;
      // Use groundedDir direction (not stale this.state.position) for terrain height lookup
      const surfPos: [number, number, number] = [
        refBody.position[0] + this.groundedDir[0] * bodyR,
        refBody.position[1] + this.groundedDir[1] * bodyR,
        refBody.position[2] + this.groundedDir[2] * bodyR,
      ];
      const surfaceR = (refBody as any).getSurfaceRadiusAt?.(surfPos) ?? bodyR;
      const targetDist = surfaceR + FlightScene.SPAWN_OFFSET_M;
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
        this.state.position[0] = refBody.position[0] + (dx / d) * (bodyR + FlightScene.SPAWN_OFFSET_M);
        this.state.position[1] = refBody.position[1] + (dy / d) * (bodyR + FlightScene.SPAWN_OFFSET_M);
        this.state.position[2] = refBody.position[2] + (dz / d) * (bodyR + FlightScene.SPAWN_OFFSET_M);
      }
    }

    if (!render) return;
    baseDt = renderDt;
      const displayedAttitude = this.previousDisplayedAttitude.clone();
      if (this.autopilotActive) this.attitudePresentationActive = true;
      if (this.attitudePresentationActive && !this.grounded && !this.paused && !this.crashed) {
        // Simulation may advance seconds per frame at warp. Present attitude
        // corrections in wall time so guidance substeps never snap the model.
        const angle = displayedAttitude.angleTo(this.rocketQuat);
        const step = Math.min(angle * (1 - Math.exp(-6 * renderDt)), 1.4 * renderDt);
        displayedAttitude.rotateTowards(this.rocketQuat, step);
        this.rocketGroup.quaternion.copy(displayedAttitude);
        if (this.deployedChuteMesh) {
          this.deployedChuteMesh.quaternion.copy(displayedAttitude);
          this.deployedChuteMesh.position.copy(this.rocketGroup.position).add(
            new THREE.Vector3(0, this.rocketTopY * ROCKET_VISUAL_SCALE, 0).applyQuaternion(displayedAttitude));
        }
        if (!this.autopilotActive && angle < 0.001) this.attitudePresentationActive = false;
      }

    for (const body of this.system.bodies) {
      (body as any).syncMesh?.();
    }
    this.updateSurfaceView(baseDt);

    // Keep the planet under the rocket fully visible. Previously every body
    // except Earth was faded to 5% opacity while landed, which made the Moon
    // look like a black void and hid the rest of the system from its surface.
    const refVis = this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system);
    const rdx = this.state.position[0] - refVis.position[0];
    const rdy = this.state.position[1] - refVis.position[1];
    const rdz = this.state.position[2] - refVis.position[2];
    const altAboveSurface = Math.sqrt(rdx*rdx + rdy*rdy + rdz*rdz) - ((refVis as any).radius ?? 6371000);
    const planetAlpha = Math.max(0.72, Math.min(1, 0.72 + altAboveSurface / 200000));
    for (const body of this.system.bodies) {
      const b = body as any;
      if (!b.mesh || b.name === 'sun') continue;
      const opacity = b.name === refVis.name ? 1 : planetAlpha;
      if (b.mesh.material) {
        const mats = Array.isArray(b.mesh.material) ? b.mesh.material : [b.mesh.material];
        for (const m of mats) {
          if (m.transparent !== undefined) { m.transparent = opacity < 1; m.opacity = opacity; m.needsUpdate = true; }
        }
      }
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
          releaseSceneObjects([d.mesh], [this.rocketGroup, ...gltfCache.values()]);
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
        // Tumble away — visible separation
        d.mesh.rotation.x += 0.6 * baseDt;
        d.mesh.rotation.z += 0.4 * baseDt;
        // Check ground collision
        const bdx = d.body.position[0] - refBody.position[0];
        const bdy = d.body.position[1] - refBody.position[1];
        const bdz = d.body.position[2] - refBody.position[2];
        const bd = Math.sqrt(bdx * bdx + bdy * bdy + bdz * bdz);
        const bodyR = (refBody as any).getSurfaceRadiusAt?.(d.body.position) ?? (refBody as any).radius ?? 6.371e6;
        if (bd < bodyR) {
          this.sceneMgr.scene.remove(d.mesh);
          releaseSceneObjects([d.mesh], [this.rocketGroup, ...gltfCache.values()]);
          this.debris.splice(i, 1);
        }
      }
    }
    this.updateExplosion(baseDt);

    const camRefBody = this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system);
    const cdx = this.state.position[0] - camRefBody.position[0];
    const cdy = this.state.position[1] - camRefBody.position[1];
    const cdz = this.state.position[2] - camRefBody.position[2];
    const cd = Math.sqrt(cdx*cdx + cdy*cdy + cdz*cdz) || 1;
    const camUp = new THREE.Vector3(cdx / cd, cdy / cd, cdz / cd);
    if(!this._camSnapped || this.grounded)this.presentationUp.copy(camUp);
    else {
      const turn=new THREE.Quaternion().setFromUnitVectors(this.presentationUp,camUp);
      this.presentationUp.applyQuaternion(new THREE.Quaternion().rotateTowards(turn,Math.min(.1,baseDt)*.65)).normalize();
    }
    camUp.copy(this.presentationUp);

    if (this.rocketShadow) {
      this.rocketShadow.visible = false;
    }

    // Update debug marker position
    if (this._debugMarker) {
      this._debugMarker.position.copy(this.rocketGroup.position);
    }

    if (!this.crashed) {
      // Visual offset: rocketBottomY is in MODEL units but the group renders at
      // ROCKET_VISUAL_SCALE, so lift by rocketBottomY * ROCKET_VISUAL_SCALE to
      // put the rocket's very bottom on the reference point (the old formula
      // forgot the ×ROCKET_VISUAL_SCALE and left the rocket ~1 unit buried).
      // Physics pos already accounts for terrain (getSurfaceRadiusAt at spawn).
      const visualOffset = -this.rocketBottomY * ROCKET_VISUAL_SCALE;

      this.rocketGroup.position.fromArray(this.state.position).multiplyScalar(VISUAL_SCALE)
        .addScaledVector(this.presentationUp,visualOffset);

      // Stage separation pulse: scale overshoot then settle
      if (this.stagePulseTimer > 0) {
        this.stagePulseTimer -= baseDt;
        const t = 1 - Math.max(0, this.stagePulseTimer / 0.35); // 0→1
        // back-out: bump up to ~1.04 then back to 1
        const c1 = 1.70158, c3 = c1 + 1;
        const bump = 1 + (c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)) * 0.04;
        this.rocketGroup.scale.setScalar(ROCKET_VISUAL_SCALE * Math.max(1, bump));
      } else if (this.rocketGroup.scale.x !== ROCKET_VISUAL_SCALE) {
        this.rocketGroup.scale.setScalar(ROCKET_VISUAL_SCALE);
      }

      if (this.cameraMode === 'free') {
        // Free camera: orbit around rocket - WASD keys + mouse/touch drag
        const orbitSpeed = 3;
        if (this.freeCamKeys.left) this.freeCamAzimuth += orbitSpeed * baseDt;
        if (this.freeCamKeys.right) this.freeCamAzimuth -= orbitSpeed * baseDt;
        if (this.freeCamKeys.up) this.freeCamPolar = Math.max(0.05, this.freeCamPolar - orbitSpeed * 0.7 * baseDt);
        if (this.freeCamKeys.down) this.freeCamPolar = Math.min(Math.PI - 0.05, this.freeCamPolar + orbitSpeed * 0.7 * baseDt);

        const rocketWorld = this.rocketGroup.position.clone();
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
        const lookOffset = this.presentationUp.clone().multiplyScalar(visualOffset);
        // Follow the centre of the displayed, eased attitude to keep the craft framed.
        const modelCenter = new THREE.Vector3(0, (this.rocketTopY + this.rocketBottomY) * ROCKET_VISUAL_SCALE * 0.5).applyQuaternion(this.rocketGroup.quaternion);
        lookOffset.x += modelCenter.x; lookOffset.y += modelCenter.y; lookOffset.z += modelCenter.z;
        // At high coast warp keep the camera at the current craft position.
        // Zoom and orbit inputs still ease inside ChaseCamera.
        const warpSnap = (this.autopilotActive ? this.missionRate : this.timeWarp) >= 100;
        this.chase.follow(this.state, baseDt, camUp, !this._camSnapped || warpSnap, lookOffset);
        if (!this._camSnapped) this._camSnapped = true;
      }

      if (this.deployedChuteMesh) {
        this.deployedChuteMesh.position.set(
          this.rocketGroup.position.x,
          this.rocketGroup.position.y,
          this.rocketGroup.position.z
        );
        this.deployedChuteMesh.position.add(new THREE.Vector3(0, this.rocketTopY * ROCKET_VISUAL_SCALE, 0).applyQuaternion(this.rocketGroup.quaternion));
        this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation);
        // Animate deployment: ease-out with slight overshoot (back-out)
        if (this.chuteDeployProgress < 1) {
          this.chuteDeployProgress = Math.min(1, this.chuteDeployProgress + baseDt * 0.8);
          const t = this.chuteDeployProgress;
          // back-out easing: overshoot ~1.1 at t≈0.7, settle to 1
          const c1 = 1.70158;
          const c3 = c1 + 1;
          const scale = 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
          this.deployedChuteMesh.scale.setScalar(Math.max(0.001, scale));
        }
      }
    }

    const nearestAlt = nearestBody && (nearestBody as any).radius ? Math.hypot(...this.state.position.map((x, i) => x - nearestBody!.position[i]!)) - ((nearestBody as any).getSurfaceRadiusAt?.(this.state.position) ?? (nearestBody as any).radius) : 0;
    const stageCount = this.countStages(this.rocket.assembly.roots);

    // Stage info (internal only, no display)
    const stageData = this.computeStageData();
    this.stageInfo = stageData;

    // All orbital elements are computed in physical metres and the body's velocity frame.
    let ape: number | undefined;
    let pe: number | undefined;
    let timeToAp: number | undefined;
    let timeToPe: number | undefined;
    let eccentricity: number | undefined;
    let period: number | undefined;
    const orbitRefBody = getReferenceBody(this.state.position, this.system);
    if (!this.grounded && orbitRefBody && orbitRefBody.mass > 0) {
      const relPos = this.state.position.map((x, i) => x - orbitRefBody.position[i]!) as Vec3;
      const orbitPred = predictOrbit(relPos, this.relVelocity(), orbitRefBody.mass, 5e14, 90);
      const bodyRadius = (orbitRefBody as any).radius ?? 0;
      if (orbitPred.bound) {
        ape = orbitPred.apoapsis - bodyRadius;
        pe = orbitPred.periapsis - bodyRadius;
        timeToAp = orbitPred.timeToAp;
        timeToPe = orbitPred.timeToPe;
        eccentricity = orbitPred.eccentricity;
        const semiMajor = (orbitPred.apoapsis + orbitPred.periapsis) / 2;
        period = 2 * Math.PI * Math.sqrt(semiMajor ** 3 / (G * orbitRefBody.mass));
      }
    }

    // Ground cue below the predicted near-term landing point (surface-relative velocity).
    if (this.impactMarker) {
      const radius = (orbitRefBody as any).radius ?? 0;
      const relative = new THREE.Vector3(...this.relVelocity());
      const up = new THREE.Vector3(...this.state.position).sub(new THREE.Vector3(...orbitRefBody.position)).normalize();
      const down = relative.dot(up);
      this.impactMarker.visible = !this.grounded && down < 0 && nearestAlt < 20000 && radius > 0;
      if (this.impactMarker.visible) {
        const estimate = new THREE.Vector3(...this.state.position).addScaledVector(relative, Math.min(60, nearestAlt / Math.max(1, -down)));
        const normal = estimate.clone().sub(new THREE.Vector3(...orbitRefBody.position)).normalize();
        const surface = (orbitRefBody as any).getSurfaceRadiusAt?.(estimate.toArray()) ?? radius;
        this.impactMarker.position.copy(normal).multiplyScalar((surface + 5) * VISUAL_SCALE).add(new THREE.Vector3(...orbitRefBody.position).multiplyScalar(VISUAL_SCALE));
        this.impactMarker.position.copy(magnifyPoint(this.impactMarker.position, this.surfaceView.pivot, this.surfaceView.scale));
        this.impactMarker.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      }
    }
    const activeStage = this.stageInfo.filter(s => s.active).length > 0
      ? this.stageInfo.findIndex(s => s.active) + 1
      : 1;

    // Live TWR: total thrust*throttle / (mass * local_g)
    let twr = 0;
    const twrRefBody = getReferenceBody(this.state.position, this.system);
    if (twrRefBody && (twrRefBody as any).mass > 0) {
      const tgdx = this.state.position[0] - twrRefBody.position[0];
      const tgdy = this.state.position[1] - twrRefBody.position[1];
      const tgdz = this.state.position[2] - twrRefBody.position[2];
      const tgr = Math.sqrt(tgdx*tgdx + tgdy*tgdy + tgdz*tgdz) || 1;
      const localG = (G * (twrRefBody as any).mass) / (tgr * tgr);
      const sumThrustLive = totalThrust(this.state.rocket.assembly.roots);
      const mass = this.state.rocket.totalMass();
      if (sumThrustLive > 0 && localG > 0 && mass > 0) {
        twr = (sumThrustLive * 1000 * this.state.throttle) / (mass * localG);
      }
    }
    this.hud.setTwr(twr);
    this.hud.setSasMode(this.sasMode);
    this.hud.setGrounded(this.grounded);
    this.hud.setLandingStatus(this.landingStatus, this.landingAssist);

    // Delta-V budget: Tsiolkovsky with game fuel-flow scaling
    // (effective exhaust velocity = Isp * g0 / FUEL_FLOW_MULT)
    const dvIsp = weightedIsp(this.state.rocket.assembly.roots);
    const dvMass0 = this.state.rocket.totalMass();
    const dvFuel = this.state.rocket.totalFuelMass();
    const dvMass1 = dvMass0 - dvFuel;
    let deltaV = 0;
    if (dvIsp > 0 && dvMass0 > 0 && dvMass1 > 0) {
      deltaV = (dvIsp * 9.80665 / FUEL_FLOW_MULT) * Math.log(dvMass0 / dvMass1);
    }
    this.hud.setDeltaV(deltaV);

    const surfaceTelemetry = flightTelemetry(this.state.position, this.state.velocity, this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system), this.grounded);
    this.hud.update(this.state, this.system, this.heatEnergy, this.state.throttle, surfaceTelemetry);
    this.hud.updateSurfaceReadout(surfaceTelemetry.altitude, surfaceTelemetry.verticalSpeed, this.grounded);

    // Orbit info → HUD
    this.hud.setOrbit({
      apoapsis: ape,
      periapsis: pe,
      timeToAp,
      timeToPe,
      eccentricity,
      period,
      bound: ape !== undefined && pe !== undefined,
    });

    // Evaluate missions against current flight state
    const orbitRefBodyForMission = getReferenceBody(this.state.position, this.system);
    this.missions.evaluate({
      launched: this.launched,
      altitude: nearestAlt,
      maxAltitude: this.maxAlt,
      speed,
      maxSpeed: this.maxSpeed,
      grounded: this.grounded,
      nearestBody: nearRef.name,
      refBody: orbitRefBodyForMission.name,
      bound: ape !== undefined && pe !== undefined,
      apoapsis: ape ?? -1,
      periapsis: pe ?? -1,
      stageSeparations: this.stageSeparations,
      softLanded: false,
    });

    // Draw 3D orbit path
    const refBodyOrbit = getReferenceBody(this.state.position, this.system);
    const relPosOrbit: [number, number, number] = [
      (this.state.position[0] - refBodyOrbit.position[0]),
      (this.state.position[1] - refBodyOrbit.position[1]),
      (this.state.position[2] - refBodyOrbit.position[2]),
    ];
    const orbitPred3d = predictOrbit(relPosOrbit, this.relVelocity(), refBodyOrbit.mass, 5e14, 90);
    if (!this.grounded && orbitPred3d.points.length > 5) {
      if (!this.orbitLine) {
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(91 * 3);
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
        const point = new THREE.Vector3(...orbitPred3d.points3d[i]!).add(new THREE.Vector3(...refBodyOrbit.position)).multiplyScalar(VISUAL_SCALE);
        const visual = magnifyPoint(point, this.surfaceView.pivot, this.surfaceView.scale);
        pos.setXYZ(i, visual.x, visual.y, visual.z);
      }
      pos.needsUpdate = true;
      this.orbitLine.geometry.computeBoundingSphere();
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

    // Mach number + sonic boom (visual only, no HUD display) — relative speed
    const speedMs = this.relSpeed();
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

    // Keep the craft attached to its physical position. Engine vibration is
    // confined to exhaust effects; never add random offsets to the hull.
    this.screenShake = 0;

    // Dynamic FOV — subtle widen at very high speed only
    const speedKms = speed / 1000;
    const targetFov = 45 + Math.min(8, Math.max(0, speedKms - 3) * 0.06);
    const curFov = this.sceneMgr.camera.fov;
    const newFov = curFov + (targetFov - curFov) * baseDt * 1.2;
    if (Math.abs(newFov - curFov) > 0.01) {
      this.sceneMgr.camera.fov = newFov;
      this.sceneMgr.camera.updateProjectionMatrix();
    }

    // Dynamic sky color — smooth blue→black transition from surface to space
    const nearestAltSky = nearestAlt ?? 0;
    // Blend from 0m (bright blue) -> 100km (pure black)
    const skyBlend = this.atmosphereScale(nearRef.name) === 0 ? 1 : Math.min(1, Math.max(0, nearestAltSky / 30000));
    const skyR = 0.02 * (1 - skyBlend) + 0.00 * skyBlend;
    const skyG = 0.05 * (1 - skyBlend) + 0.00 * skyBlend;
    const skyB = 0.15 * (1 - skyBlend) + 0.01 * skyBlend;
    this.sceneMgr.scene.background = (this.sceneMgr.scene.background as THREE.Color).setRGB(skyR, skyG, skyB);

    const rocketDir = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
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
      [fwd.x, fwd.y, fwd.z],
      velDir,
      [upX / upNorm, upY / upNorm, upZ / upNorm],
      [normX / normLen, normY / normLen, normZ / normLen],
      bodyDirs
    );
  }

  private showAutopilotStatus(): void {
    if (this.autopilotStatusEl) this.autopilotStatusEl.remove();
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;top:48px;left:50%;transform:translateX(-50%);z-index:250;background:rgba(8,10,24,0.85);border:1px solid rgba(124,255,178,0.3);border-radius:6px;padding:6px 14px;font:600 11px system-ui;color:#7CFFB2;letter-spacing:0.05em;pointer-events:auto;cursor:pointer;text-align:center;';
    el.innerHTML = `<div id="ap-phase">AUTOPILOT: BURN</div><div id="ap-detail" style="font-size:9px;color:#889;margin-top:2px;font-weight:400;"></div><div style="font-size:8px;color:#ff6644;margin-top:3px;font-weight:400;">click to cancel</div>`;
    el.addEventListener('click', () => this.abortAutopilot('Cancelled by user'));
    this.lifetime.append(el);
    this.autopilotStatusEl = el;
  }

  private hideAutopilotStatus(): void {
    if (this.autopilotStatusEl) { this.autopilotStatusEl.remove(); this.autopilotStatusEl = null; }
  }

  private updateAutopilotStatus(phase: string, detail: string): void {
    if (!this.autopilotStatusEl) return;
    const phaseEl = this.autopilotStatusEl.querySelector('#ap-phase') as HTMLElement;
    const detailEl = this.autopilotStatusEl.querySelector('#ap-detail') as HTMLElement;
    if (phaseEl) phaseEl.textContent = `AUTOPILOT: ${phase}`;
    if (detailEl) detailEl.textContent = detail;
  }

  private navigationBody(body: Body): NavigationBody {
    return { name: body.name, mass: body.mass, position: body.position, velocity: body.velocity,
      radius: (body as any).radius ?? 0,
      getSurfaceRadiusAt: (body as any).getSurfaceRadiusAt?.bind(body) };
  }

  private updateSurfaceView(dt: number): void {
    this.surfaceView.update(this.state.position, this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system), this.system.bodies, dt);
    if (this.launchPadGroup) {
      const earth = this.system.bodyByName('earth')!;
      this.launchPadGroup.position.copy(this.launchPadGroup.userData.surfaceOffset)
        .add(new THREE.Vector3(...earth.position).multiplyScalar(VISUAL_SCALE));
      this.launchPadGroup.position.copy(magnifyPoint(this.launchPadGroup.position, this.surfaceView.pivot, this.surfaceView.scale));
      this.launchClamps?.update(dt, this.launched && !this.grounded);
    }
  }

  private buildLaunchPad(earth: Body, up: [number, number, number], surfaceRadius: number): void {
    const pad = new THREE.Group();
    pad.name = 'earth-launch-pad';
    const steel = new THREE.MeshStandardMaterial({ color: 0x53606a, metalness: 0.8, roughness: 0.36 });
    const stripe = new THREE.MeshStandardMaterial({ color: 0xd59c38, metalness: 0.45, roughness: 0.45 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x18212a, metalness: 0.65, roughness: 0.5 });
    const deck = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 9.2, 0.32, 48), steel);
    deck.position.y = -0.08; pad.add(deck);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(7.3, 0.16, 8, 48), stripe);
    ring.rotation.x = Math.PI / 2; ring.position.y = 0; pad.add(ring);
    const trench = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.08, 12), dark);
    trench.position.set(0, -0.035, 0); pad.add(trench);
    for (const [x, z] of [[-6.2, -4.7], [6.2, -4.7], [-6.2, 4.7], [6.2, 4.7]] as Array<[number, number]>) {
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.5, 0.65), dark);
      foot.position.set(x, 0.38, z); pad.add(foot);
    }
    const tower = new THREE.Mesh(new THREE.BoxGeometry(0.34, 5.5, 0.34), steel);
    tower.position.set(6.5, 2.9, 0); pad.add(tower);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.22, 0.22), stripe);
    arm.position.set(4.9, 5.0, 0); pad.add(arm);
    const holdHeight = Math.max(2.5, (this.rocketTopY - this.rocketBottomY) * ROCKET_VISUAL_SCALE * 0.26);
    this.rocketGroup.updateMatrixWorld(true);
    const holdY = this.rocketBottomY + holdHeight / ROCKET_VISUAL_SCALE;
    const origin = new THREE.Vector3(this.rocketRadius * 2 + 0.1, holdY, 0).applyMatrix4(this.rocketGroup.matrixWorld);
    const direction = new THREE.Vector3(-1, 0, 0).transformDirection(this.rocketGroup.matrixWorld);
    const hit = new THREE.Raycaster(origin, direction).intersectObjects(this.structuralRoots, true)[0];
    const contact = hit?.point.clone().applyMatrix4(this.rocketGroup.matrixWorld.clone().invert());
    const rocketRadius = Math.max(0.5, (contact ? Math.hypot(contact.x, contact.z) : this.rocketRadius) * ROCKET_VISUAL_SCALE);
    this.launchClamps = new LaunchClamps(rocketRadius, holdHeight);
    pad.add(this.launchClamps);
    pad.position.set(
      earth.position[0] * VISUAL_SCALE + up[0] * surfaceRadius * VISUAL_SCALE,
      earth.position[1] * VISUAL_SCALE + up[1] * surfaceRadius * VISUAL_SCALE,
      earth.position[2] * VISUAL_SCALE + up[2] * surfaceRadius * VISUAL_SCALE,
    );
    pad.userData.surfaceOffset = new THREE.Vector3(...up).multiplyScalar(surfaceRadius * VISUAL_SCALE);
    pad.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...up));
    this.sceneMgr.scene.add(pad);
    this.launchPadGroup = pad;
    this.ownedSceneObjects.push(pad);
  }

  /** During the final approach, use the selected destination as the local
   * frame even if the SOI resolver has not switched yet. This keeps gravity,
   * attitude, camera and collision checks on the same planet. */
  private autopilotSurfaceBody(): Body | null {
    if (!this.autopilotActive || !this.missionGuidance) return null;
    const target=this.system.bodyByName(this.autopilotTarget) as (Body & {radius:number}) | undefined;
    if(!target)return null;
    const distance=new THREE.Vector3(...this.state.position).distanceTo(new THREE.Vector3(...target.position));
    // Guidance phase can alternate while braking. Only proximity selects the
    // destination's surface frame, so distant braking never moves the scenery.
    return distance < target.radius + Math.max(500000,target.radius*.15) ? target : null;
  }

  private startMapBurn(dv: Vec3): string {
    if (this.grounded) return 'Launch before executing a burn.';
    if (this.paused || this.crashed) return 'Resume flight before executing a burn.';
    if (!dv.every(Number.isFinite) || Math.hypot(...dv) < 0.05) return 'Set a course correction first.';
    if (this.rocket.totalFuelMass() <= 0 || totalThrust(this.rocket.assembly.roots) <= 0) return 'An engine and fuel are required.';
    if (this.autopilotActive) this.abortAutopilot('Course correction');
    this.landingAssist = false; this.manualAttitude = true; this.sasMode = 'off';
    this.timeWarp = 1; this.warpIndex = 0; this.state.throttle = 0;
    this.angularVel.set(0,0,0); this.maneuverRemaining.fromArray(dv);
    return 'Aligning for burn…';
  }

  private stopMapBurn(): void {
    this.maneuverRemaining.set(0,0,0); this.state.throttle = 0;
    this.sasTargetQuat.copy(this.rocketQuat); this.sasMode = 'hold';
  }

  private startMission(targetName: string, autoWarp = this.hud.autopilotAutoWarp): boolean {
    this.stopMapBurn();
    if (this.paused || this.crashed || this.lifetime.disposed) return false;
    const target = this.system.bodyByName(targetName);
    const departure = getReferenceBody(this.state.position, this.system);
    const error = !target || !['moon','earth','mars','mercury','venus','pluto'].includes(targetName)
      ? 'Choose a destination with a solid landing surface.'
      : this.grounded && departure.name === targetName ? `Already landed on ${targetName.toUpperCase()}.`
      : this.rocket.totalFuelMass() < 1 ? 'No fuel available for an automatic mission.'
      : totalThrust(this.rocket.assembly.roots) <= 0 ? 'Add an engine before starting a mission.' : '';
    if (error) { toast.show(error, 4500); return false; }
    if (this.grounded) { this.stageOrLaunch(); if (this.state.throttle === 0) return false; }
    this.autopilotActive = true; this.autopilotTarget = targetName;
    this.autopilotPhase = this.grounded ? 'ascent' : 'cruise';
    this.missionGuidance = new MissionGuidance(this.navigationBody(departure), this.navigationBody(target!));
    this.missionDirection.set(0, 1, 0).applyQuaternion(this.rocketQuat).normalize();
    this.missionThrottle = 0;
    this.missionAutoWarp = autoWarp;
    this.missionRate = 1; this.timeWarp = 1; this.warpIndex = 0;
    this.hud.setWarp(1); this.landingAssist = false; this.sasMode = 'off'; this.hud.setSasMode('off');
    if (this.parachuteDeployed) this.toggleParachute();
    if (this.gearDeployed) this.toggleGear();
    this.autopilotStartMissionTime = this.missionTime;
    this.autopilotStartFuel = this.rocket.totalFuelMass();
    this.autopilotStartMass = this.rocket.totalMass();
    this.hud.setAutopilotStatus('LAUNCH', targetName, 'Launching, navigating and landing automatically');
    return true;
  }

  private updateAutopilot(dt: number): void {
    if (!this.autopilotActive || !this.missionGuidance) return;
    if (this.autopilotPhase === 'landing') {
      this.landingAssist = true;
      this.hud.setAutopilotStatus('LAND', this.autopilotTarget, this.landingStatus);
      return;
    }
    const command = this.missionGuidance.update({ position: this.state.position, velocity: this.state.velocity,
      reference: this.navigationBody(this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system)),
      mass: this.rocket.totalMass(), maxAcceleration: totalThrust(this.rocket.assembly.roots) * 1000 / this.rocket.totalMass(),
      dt, grounded: this.grounded, fuel: this.rocket.totalFuelMass() });
    if (command.phase === 'blocked') { this.abortAutopilot(command.status); return; }
    this.autopilotPhase = command.phase;
    // Guidance is evaluated on a moving target and can change by several
    // degrees between frames. Slew both the desired direction and throttle so
    // the attitude controller does not chase a noisy vector and visibly shake.
    const desiredDirection = new THREE.Vector3(...command.direction).normalize();
    const directionResponse = 1 - Math.exp(-4.5 * Math.max(0, dt));
    if (this.missionDirection.lengthSq() < 1e-8) this.missionDirection.copy(desiredDirection);
    else this.missionDirection.lerp(desiredDirection, directionResponse).normalize();
    this.missionThrottle += (command.throttle - this.missionThrottle) * (1 - Math.exp(-5 * Math.max(0, dt)));
    this.state.throttle = this.missionThrottle;
    this.timeWarp = 1; this.warpIndex = 0;
    if (command.readyToLand) {
      if (!this.landingAssist) this.landingDirection.set(0, 0, 0);
      this.landingAssist = true;
      if (this.hasLandingLegs() && !this.gearDeployed) this.toggleGear();
    }
    this.hud.setAutopilotStatus(command.phase.toUpperCase(), this.autopilotTarget, command.status);
  }

  private abortAutopilot(reason: string): void {
    this.autopilotActive = false;
    this.autopilotPhase = 'aborted';
    this.missionGuidance = null; this.missionRate = 1; this.landingAssist = false;
    this.missionThrottle = 0;
    this.hud.setAutopilotStatus(null, '', '');
    this.state.throttle = 0;
    this.sasMode = 'off';
    this.hud.setSasMode('off');
    this.warpIndex = 0;
    this.timeWarp = 1;
    this.hud.setWarp(1);
    this.hideAutopilotStatus();
    toast.show(`Automatic flight cancelled: ${reason}`, 5000);
  }

  private showArrivalOverlay(target: string, timeS: number, fuelKg: number, massKg: number): void {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:700;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.7);opacity:0;transition:opacity 400ms ease-out;';
    const card = document.createElement('div');
    card.style.cssText = 'max-width:420px;padding:32px;background:#0c1020;border:1px solid rgba(124,255,178,0.4);border-radius:10px;text-align:center;font-family:system-ui,sans-serif;box-shadow:0 0 40px rgba(124,255,178,0.15);';
    const days = timeS / 86400;
    const timeStr = days >= 1 ? `${days.toFixed(1)} days` : `${(timeS/3600).toFixed(1)} hours`;
    card.innerHTML = `
      <div style="font-size:28px;font-weight:700;color:#7CFFB2;letter-spacing:0.05em;margin-bottom:6px;text-shadow:0 0 20px rgba(124,255,178,0.4);">YOU HAVE ARRIVED</div>
      <div style="font-size:14px;color:#ddd;margin-bottom:20px;">Destination: <b style="color:#88ccff;">${target.toUpperCase()}</b></div>
      <div style="display:flex;justify-content:center;gap:24px;margin-bottom:24px;">
        <div><div style="font-size:10px;color:#889;letter-spacing:0.1em;">TRAVEL TIME</div><div style="font-size:18px;color:#c89838;font-weight:600;margin-top:4px;">${timeStr}</div></div>
        <div><div style="font-size:10px;color:#889;letter-spacing:0.1em;">FUEL USED</div><div style="font-size:18px;color:#ffaa44;font-weight:600;margin-top:4px;">${(fuelKg/1000).toFixed(1)} t</div></div>
        <div><div style="font-size:10px;color:#889;letter-spacing:0.1em;">MASS LOST</div><div style="font-size:18px;color:#ff6644;font-weight:600;margin-top:4px;">${(massKg/1000).toFixed(1)} t</div></div>
      </div>
      <button class="btn btn--primary" style="width:100%;padding:12px;font-size:13px;" id="arrival-close">CONTINUE</button>
    `;
    overlay.appendChild(card);
    this.lifetime.append(overlay);
    this.lifetime.frame(() => { overlay.style.opacity = '1'; });
    card.querySelector('#arrival-close')!.addEventListener('click', () => {
      overlay.style.opacity = '0';
      this.lifetime.timeout(() => overlay.remove(), 420);
    });
    this.achievements.unlock('reach_space');
  }

  private performStage(): void {
    const decoupler = this.findLowestDecoupler(this.rocket.assembly.roots);
    if (!decoupler) {
      toast.show('No decouplers to stage.');
      return;
    }

    if (this.lifetime.disposed || this.paused || this.crashed) return;
    this.sound.playStaging();

    const decouplerMesh = this.rocketGroup.getObjectByName(decoupler.uid ?? decoupler.part.id);
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
      // Detach decoupler + everything physically BELOW it (Y < decoupler Y) — look up by unique uid.
      // Position-based: works for both VAB (bottom-first) and Game (top-first) root orderings.
      const roots = this.rocket.assembly.roots;
      const decY = decoupler.position[1];
      for (const r of roots) {
        if (r !== decoupler && r.position[1] >= decY) continue;
        const m = this.rocketGroup.getObjectByName(r.uid ?? r.part.id);
        if (m) { const wp = new THREE.Vector3(); m.getWorldPosition(wp); worldPositions.push(wp); meshes.push(m); m.removeFromParent(); }
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
        // CRITICAL: part meshes are built at PART_SCALE (~0.1 units) but the
        // rocket renders at ROCKET_VISUAL_SCALE (×60). Without this the
        // "separated booster" is an invisible speck — staging looked like
        // nothing happened (or a tiny lump stuck under the rocket).
        debrisGroup.scale.setScalar(ROCKET_VISUAL_SCALE);

        const scene = this.sceneMgr.scene;
        debrisGroup.position.copy(worldPositions[i]!);
        // Small random spread
        debrisGroup.position.x += (Math.random() - 0.5) * 0.5;
        debrisGroup.position.y += (Math.random() - 0.5) * 0.5;
        debrisGroup.position.z += (Math.random() - 0.5) * 0.5;

        // Random rotation for tumbling
        debrisGroup.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);

        scene.add(debrisGroup);

        // Velocity: rocket velocity + the PLANET's orbital velocity (debris
        // must co-move with the planet, or it races away at 17 km/s and they
        // look like they "fly off into space" while still on the ground) +
        // push toward planet + random
        const pushForce = 5 + Math.random() * 5;
        const refVel = refBody.velocity ?? [0, 0, 0];
        const sepVel: Vec3 = [
          this.state.velocity[0] + (this.grounded ? refVel[0] : 0) + pushDir[0] / pdm * pushForce + (Math.random() - 0.5) * 2,
          this.state.velocity[1] + (this.grounded ? refVel[1] : 0) + pushDir[1] / pdm * pushForce + (Math.random() - 0.5) * 2,
          this.state.velocity[2] + (this.grounded ? refVel[2] : 0) + pushDir[2] / pdm * pushForce + (Math.random() - 0.5) * 2,
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
    this.positionFlameAtNozzle();
    this.achievements.unlock('stage_separate');
    this.missions.recordStageSeparation();
    this.stageSeparations++;
    // Visual feedback: brief white flash + rocket scale pulse
    this.triggerStageFlash();
    this.stagePulseTimer = 0.35;
    toast.show('Stage separated!');
  }

  private stagePulseTimer = 0;

  private triggerStageFlash(): void {
    const flash = document.createElement('div');
    flash.className = 'stage-flash';
    this.lifetime.append(flash);
    this.lifetime.timeout(() => flash.remove(), 240);
  }

  /** Bottom-most decoupler by PHYSICAL position (lowest Y) — stages drop bottom-first.
   *  Independent of root array order (VAB vs Game ordering differ). */
  private findLowestDecoupler(nodes: AssemblyNode[]): AssemblyNode | null {
    let best: AssemblyNode | null = null;
    const walk = (ns: AssemblyNode[]) => {
      for (const n of ns) {
        if (n.part.kind === 'decoupler') {
          if (!best || n.position[1] < best.position[1]) best = n;
        }
        walk(n.children);
      }
    };
    walk(nodes);
    return best;
  }

  private setPlayerWarp(index: number): void {
    if (this.paused || this.crashed || this.lifetime.disposed) return;
    const nextIndex = Math.max(0, Math.min(this.warpLevels.length - 1, index));
    const warp = this.warpLevels[nextIndex]!;
    const body = getReferenceBody(this.state.position, this.system);
    const surface = (body as any).getSurfaceRadiusAt?.(this.state.position) ?? (body as any).radius ?? 0;
    const altitude = new THREE.Vector3(...this.state.position).distanceTo(new THREE.Vector3(...body.position)) - surface;
    if (warp > 10 && (this.grounded || altitude < 70000 || this.landingAssist)) {
      const reason = this.landingAssist ? 'Disable landing assist before using high time warp.' : '100× and higher warp is available above 70 km. Use up to 10× near the surface.';
      this.landingStatus = reason;
      this.hud.setLandingStatus(reason, false);
      toast.show(reason, 4500);
      return;
    }
    if (this.maneuverRemaining.lengthSq() > 0) this.stopMapBurn();
    if (this.autopilotActive) this.abortAutopilot('Manual time warp');
    this.warpIndex = nextIndex; this.timeWarp = warp; this.hud.setWarp(warp);
    if (warp > 10) {
      this.state.throttle = 0;
      this.landingStatus = `${warp}× coast · engines off · use − or [ to slow down`;
      this.hud.setLandingStatus(this.landingStatus, false);
    }
  }

  private stageOrLaunch(): void {
    if (this.paused || this.crashed || this.lifetime.disposed) return;
    if (!this.grounded) {
      if (this.timeWarp === 1) this.performStage();
      else toast.show('Return time warp to ×1 before staging.');
      return;
    }
    const thrust = totalThrust(this.rocket.assembly.roots) * 1000;
    const body = getReferenceBody(this.state.position, this.system);
    const radiusSq = new THREE.Vector3(...this.state.position).distanceToSquared(new THREE.Vector3(...body.position));
    const gravity = G * body.mass / Math.max(1, radiusSq);
    const twr = thrust / (this.rocket.totalMass() * gravity);
    const reason = thrust <= 0 ? 'No engine — add an engine in Vehicle Assembly.'
      : this.rocket.totalFuelMass() <= 0.01 ? 'No fuel — add a fuel tank or start a new flight.'
      : twr <= 1 ? `Insufficient thrust (TWR ${twr.toFixed(2)}). Use a stronger engine or reduce mass.`
      : '';
    if (reason) {
      this.state.throttle = 0;
      this.landingStatus = reason;
      this.hud.setLandingStatus(reason, false);
      toast.show(reason, 5000);
      return;
    }
    this.timeWarp = 1; this.warpIndex = 0; this.hud.setWarp(1);
    this.state.throttle = 1;
    this.countdownCooldown = 0;
    this.landingStatus = 'Engines starting · countdown 3…2…1 · ↓ to reduce throttle';
    this.hud.setLandingStatus(this.landingStatus, false);
  }

  private toggleLandingAssist(): void {
    if (this.grounded || this.crashed) { toast.show('Landing assist is available in flight.'); return; }
    const enable = !this.landingAssist;
    if (enable) {
      this.abortAutopilot('Landing control');
      // abortAutopilot clears all automatic descent state; restore the
      // explicitly requested manual landing assist after cancelling it.
      this.landingAssist = true;
      this.timeWarp = 1; this.warpIndex = 0; this.hud.setWarp(1);
      this.sasMode = 'off';
      if (this.hasLandingLegs() && !this.gearDeployed) this.toggleGear();
    } else {
      this.landingAssist = false;
    }
    this.landingStatus = this.landingAssist ? 'Landing assist · braking toward the surface' : 'Manual control · L: landing assist';
    toast.show(this.landingStatus);
  }

  private updateLandingAssist(dt: number): void {
    const ref = this.autopilotSurfaceBody() ?? getReferenceBody(this.state.position, this.system);
    const radial = new THREE.Vector3(...this.state.position).sub(new THREE.Vector3(...ref.position));
    const radius = radial.length();
    const up = radial.normalize();
    const surface = (ref as any).getSurfaceRadiusAt?.(this.state.position) ?? (ref as any).radius ?? 0;
    const altitude = Math.max(0, radius - surface - FlightScene.SPAWN_OFFSET_M);
    const relative = new THREE.Vector3(...this.relVelocity());
    const verticalSpeed = relative.dot(up);
    const lateral = relative.clone().addScaledVector(up, -verticalSpeed);
    // A returning craft needs normal-speed control before it reaches the surface.
    if (this.landingAssist || (!this.grounded && verticalSpeed < 0 && altitude < 20000)) {
      if (this.timeWarp !== 1) { this.timeWarp = 1; this.warpIndex = 0; this.hud.setWarp(1); }
    }
    if (!this.landingAssist || this.grounded) {
      if (!this.grounded && altitude < 20000 && verticalSpeed < 0) {
        this.landingStatus = `GROUND ${altitude.toFixed(0)} m · DESCENT ${(-verticalSpeed).toFixed(1)} m/s · DRIFT ${lateral.length().toFixed(1)} m/s · L: assist`;
      }
      return;
    }
    if (this.controls.getPitch() || this.controls.getYaw() || this.controls.getRoll()) {
      this.landingAssist = false;
      this.landingStatus = 'Manual control · L: landing assist';
      return;
    }
    const maxAcceleration = this.rocket.totalFuelMass() > 0 ? totalThrust(this.rocket.assembly.roots) * 1000 / this.rocket.totalMass() : 0;
    const command = landingCommand({ altitude, verticalSpeed, horizontalSpeed: lateral.length(), gravity: G * ref.mass / (radius * radius), maxAcceleration });
    const desiredLandingDirection = up.clone().multiplyScalar(command.verticalAcceleration);
    if (lateral.lengthSq() > 1e-8) desiredLandingDirection.addScaledVector(lateral.normalize(), -command.lateralAcceleration);
    if (desiredLandingDirection.lengthSq() === 0) desiredLandingDirection.copy(up);
    desiredLandingDirection.normalize();
    // Keep the landing attitude visually upright. Lateral braking can still
    // lean the thrust vector at altitude, but the allowed lean closes smoothly
    // to a few degrees near the surface instead of producing a tilted,
    // oscillating rocket at touchdown.
    const maxTilt = THREE.MathUtils.degToRad(THREE.MathUtils.clamp(4 + altitude * 0.0015, 4, 32));
    const tilt = Math.acos(THREE.MathUtils.clamp(up.dot(desiredLandingDirection), -1, 1));
    if (tilt > maxTilt) {
      const lateralDirection = desiredLandingDirection.clone().addScaledVector(up, -up.dot(desiredLandingDirection));
      if (lateralDirection.lengthSq() > 1e-10) {
        lateralDirection.normalize();
        desiredLandingDirection.copy(up).multiplyScalar(Math.cos(maxTilt)).addScaledVector(lateralDirection, Math.sin(maxTilt)).normalize();
      } else desiredLandingDirection.copy(up);
    }
    const landingResponse = 1 - Math.exp(-6 * Math.max(0, dt));
    if (this.landingDirection.lengthSq() < 1e-8) this.landingDirection.copy(desiredLandingDirection);
    else this.landingDirection.lerp(desiredLandingDirection, landingResponse).normalize();
    const nose = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
    // Point the engine in the useful direction before applying descent thrust.
    const aligned = Math.max(0, nose.dot(this.landingDirection));
    this.state.throttle = aligned > 0.55 ? command.throttle : 0;
    this.landingStatus = `${command.insufficientThrust ? 'LOW THRUST — ' : 'LANDING — '}GROUND ${altitude.toFixed(0)} m · DESCENT ${Math.max(0, -verticalSpeed).toFixed(1)} m/s · L: cancel`;
  }

  /** Test the travelled segment, not only the next endpoint: fast falls must not tunnel. */
  private resolveSurfaceContact(body: Body, previous: Vec3, next: Vec3, coastImpact: boolean): void {
    if (this.grounded || this.crashed || !(body as any).radius) return;
    const start = new THREE.Vector3(...previous), end = new THREE.Vector3(...next);
    const movement = end.clone().sub(start);
    const denominator = movement.lengthSq();
    const closestT = denominator > 0 ? THREE.MathUtils.clamp(-start.dot(movement) / denominator, 0, 1) : 1;
    const closest = start.clone().addScaledVector(movement, closestT);
    const terrainPoint = closest.clone().add(new THREE.Vector3(...body.position)).toArray() as Vec3;
    const surface = (body as any).getSurfaceRadiusAt?.(terrainPoint) ?? (body as any).radius;
    const contactRadius = surface + FlightScene.SPAWN_OFFSET_M;
    if (!coastImpact && closest.length() > contactRadius) return;
    let point = end.clone();
    const a = denominator, b = 2 * start.dot(movement), c = start.lengthSq() - contactRadius * contactRadius;
    const discriminant = b * b - 4 * a * c;
    if (a > 0 && discriminant >= 0 && c > 0) {
      const t = (-b - Math.sqrt(discriminant)) / (2 * a);
      if (t >= 0 && t <= 1) point = start.clone().addScaledVector(movement, t);
    }
    const normal = point.normalize();
    if (normal.lengthSq() === 0) normal.copy(start).normalize();
    const velocity = new THREE.Vector3(...this.state.velocity).sub(new THREE.Vector3(...body.velocity));
    const vertical = velocity.dot(normal);
    // Moving away from the pad is not a touchdown.
    if (vertical >= 0 && start.length() >= contactRadius - 1) return;
    const lateral = velocity.clone().addScaledVector(normal, -vertical).length();
    const tilt = THREE.MathUtils.radToDeg(new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat).angleTo(normal));
    const outcome = landingOutcome(vertical, lateral, tilt, this.parachuteDeployed || (this.gearDeployed && this.hasLandingLegs()));
    if (outcome === 'crash') {
      this.doCrash(`Impact: ${Math.abs(vertical).toFixed(0)} m/s descent, ${lateral.toFixed(0)} m/s drift, ${tilt.toFixed(0)}° tilt`, body, normal.x, normal.y, normal.z, 1, surface);
      this.persistFlight();
      return;
    }
    this.grounded = true;
    this.groundedDir = normal.toArray() as Vec3;
    this.state.position = normal.clone().multiplyScalar(contactRadius).add(new THREE.Vector3(...body.position)).toArray() as Vec3;
    this.state.velocity = [0, 0, 0];
    this.state.throttle = 0;
    this.countdownActive = false; this.countdownCooldown = 1;
    this.landingAssist = false;
    this.angularVel.set(0, 0, 0);
    this.rocketQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    this.sasTargetQuat.copy(this.rocketQuat);
    this.sound.stopEngine(); this.sound.playLand(); this.engineFlame.stop();
    this.screenShake = outcome === 'rough' ? 0.2 : 0;
    this.landingStatus = `Landed on ${body.name.toUpperCase()} · throttle up to launch again`;
    this.achievements.unlock(`land_${body.name}`);
    if (Math.abs(vertical) < 3) this.achievements.unlock('first_landing');
    if (this.parachuteDeployed) this.achievements.unlock('parachute_landing');
    this.missions.recordLanding(body.name);
    if (this.autopilotActive && body.name === this.autopilotTarget) {
      this.autopilotActive = false; this.autopilotPhase = 'arrived';
      this.missionGuidance = null; this.missionRate = 1; this.timeWarp = 1; this.warpIndex = 0; this.hud.setWarp(1);
      this.hud.setAutopilotStatus('LANDED', body.name, 'Mission complete — engines shut down');
      this.showArrivalOverlay(body.name, this.missionTime - this.autopilotStartMissionTime,
        this.autopilotStartFuel - this.rocket.totalFuelMass(), this.autopilotStartMass - this.rocket.totalMass());
    }
    toast.show(this.landingStatus);
    this.syncVisualTransform();
    this.persistFlight();
  }

  private toggleParachute(): void {
    const containsChute = (nodes: AssemblyNode[]): boolean => nodes.some(n => n.part.kind === 'parachute' || n.part.hasParachute || containsChute(n.children));
    const hasChute = containsChute(this.rocket.assembly.roots);
    if (!hasChute) { toast.show('This rocket has no parachute.'); return; }
    const ref = getReferenceBody(this.state.position, this.system);
    if (!this.parachuteDeployed && this.atmosphereScale(ref.name) === 0) { toast.show('No atmosphere here — use engines to brake.'); return; }
    if (hasChute) {
      this.parachuteDeployed = !this.parachuteDeployed;
      if (this.parachuteDeployed) {
        const d = { radius: 0.6 * PART_SCALE, height: 1.0 * PART_SCALE };
        this.deployedChuteMesh = buildDeployedParachute(d);
        this.deployedChuteMesh.scale.setScalar(0.001); // start collapsed
        this.chuteDeployProgress = 0;
        this.sceneMgr.scene.add(this.deployedChuteMesh);
      } else if (this.deployedChuteMesh) {
        this.sceneMgr.scene.remove(this.deployedChuteMesh);
        releaseSceneObjects([this.deployedChuteMesh]);
        this.deployedChuteMesh = null;
        this.chuteDeployProgress = 0;
      }
      toast.show(this.parachuteDeployed ? 'Parachute deployed!' : 'Parachute cut.');
    }
  }

  private cycleSasMode(): void {
    const order: Array<'off' | 'hold' | 'prograde' | 'retrograde'> =
      ['off', 'hold', 'prograde', 'retrograde'];
    const idx = order.indexOf(this.sasMode);
    this.sasMode = order[(idx + 1) % order.length]!;
    if (this.sasMode === 'hold') {
      this.sasTargetQuat.copy(this.rocketQuat);
    }
    const labels: Record<string, string> = {
      off: 'SAS: OFF',
      hold: 'SAS: HOLD attitude',
      prograde: 'SAS: PROGRADE',
      retrograde: 'SAS: RETROGRADE',
    };
    toast.show(labels[this.sasMode]!);
    this.hud.setSasMode(this.sasMode);
    this.hud.setLandingStatus(this.landingStatus, this.landingAssist);
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
    this.missionGuidance = null; this.missionRate = 1;
    this.hud.setAutopilotStatus(null, '', '');
    this.grounded = false;
    this.groundedDir = null;
    this.paused = false;
    this.countdownActive = false;
    this.countdownTimer = 0;
    this.countdownCooldown = 0;
    this.hideCountdown();
    this.autopilotActive = false;
    this.autopilotPhase = 'aborted';
    this.hideAutopilotStatus();
    this.landingAssist = false;
    this.angularVel.set(0, 0, 0);
    this.controls.dispose();
    this.groundSmoke.stop();
    this.deployedChuteMesh && (this.deployedChuteMesh.visible = false);
    this.orbitLine && (this.orbitLine.visible = false);
    // Propagation may already have occurred this frame. Render the planet at
    // that same instant before freezing so the impact cannot appear to bounce.
    clearFlightSave();
    this.achievements.unlock('crash');
    this.sound.playCrash();
    this.sound.stopEngine();
    toast.show(`CRASH! ${reason}`);

    this.rocketGroup.visible = false;
    this.engineFlame.stop();

    // Camera shake on crash
    this.screenShake = 3.0;

    this.state.position = [
      body.position[0] + dx / d * (bodyR + FlightScene.SPAWN_OFFSET_M),
      body.position[1] + dy / d * (bodyR + FlightScene.SPAWN_OFFSET_M),
      body.position[2] + dz / d * (bodyR + FlightScene.SPAWN_OFFSET_M),
    ];
    this.state.velocity = [0, 0, 0];
    this.state.throttle = 0;

    // Explosion effect
    this.updateSurfaceView(0);
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
    this.lifetime.append(flash);
    this.lifetime.frame(() => { flash.style.opacity = '1'; });
    this.lifetime.timeout(() => { flash.style.opacity = '0'; }, 100);
    this.lifetime.timeout(() => flash.remove(), 500);

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;top:0;left:0;width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.7);z-index:9999;
      font-family:system-ui,sans-serif;color:#ff0;
      opacity:0;transition:opacity 360ms ease-out;
    `;
    overlay.innerHTML = `
      <div class="crash-shake" style="text-align:center;">
        <div style="font-size:48px;font-weight:bold;color:#ff4444;margin-bottom:8px;text-shadow:0 0 24px rgba(255,68,68,0.6);">CRASH!</div>
        <div style="font-size:16px;color:#ccc;margin-bottom:32px;">${reason}</div>
      </div>
      <div style="display:flex;gap:16px;">
        <button id="crash-menu" style="padding:12px 32px;font-size:18px;border:1px solid #555;border-radius:6px;background:#222;color:#ff0;cursor:pointer;transition:all 0.15s;">MENU</button>
        <button id="crash-restart" style="padding:12px 32px;font-size:18px;border:none;border-radius:6px;background:#4488ff;color:#ff0;cursor:pointer;transition:all 0.15s;">LAUNCH AGAIN</button>
      </div>
    `;
    this.lifetime.append(overlay);
    this.crashOverlay = overlay;
    this.lifetime.frame(() => { overlay.style.opacity = '1'; });

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
    this.rocketGroup.updateWorldMatrix(true, true);
    const inverse = this.rocketGroup.matrixWorld.clone().invert();
    const bounds = new THREE.Box3();
    for (const root of this.structuralRoots) {
      if (root.parent !== this.rocketGroup) continue;
      root.traverse(obj => {
        if (!(obj instanceof THREE.Mesh)) return;
        obj.geometry.computeBoundingBox();
        if (obj.geometry.boundingBox) bounds.union(obj.geometry.boundingBox.clone().applyMatrix4(inverse.clone().multiply(obj.matrixWorld)));
      });
    }
    this.rocketRadius = bounds.isEmpty() ? 0.1 : Math.max(Math.abs(bounds.min.x), Math.abs(bounds.max.x), Math.abs(bounds.min.z), Math.abs(bounds.max.z));
    this.rocketBottomY = bounds.isEmpty() ? -0.05 : bounds.min.y;
    this.rocketTopY = bounds.isEmpty() ? 0.05 : bounds.max.y;
    this.engineFlame.getMesh().position.set(0, this.rocketBottomY - 0.002, 0);
    this.engineFlame.getMesh().rotation.set(0, 0, 0);
    this.syncVisualTransform();
  }

  private syncVisualTransform(): void {
    const ref = getReferenceBody(this.state.position, this.system);
    const up = new THREE.Vector3(...this.state.position).sub(new THREE.Vector3(...ref.position)).normalize();
    this.rocketGroup.quaternion.copy(this.rocketQuat);
    this.rocketGroup.position.fromArray(this.state.position).multiplyScalar(VISUAL_SCALE).addScaledVector(up, -this.rocketBottomY * ROCKET_VISUAL_SCALE);
    this.rocketGroup.updateMatrixWorld(true);
  }

  private persistFlight(): void {
    if (this.lifetime.disposed) return;
    if (this.crashed) { clearFlightSave(); return; }
    saveFlightState({
      version: 3,
      mission: this.autopilotActive && this.missionGuidance ? {
        target: this.autopilotTarget,
        departure: this.missionGuidance.departure.name,
        autoWarp: this.missionAutoWarp,
        ...(this.autopilotPhase === 'landing' ? { phase: 'landing' as const } : {}),
      } : undefined,
      assembly: serializeAssembly(this.rocket.assembly),
      fuel: this.rocket.assembly.roots.map(n => this.rocket.fuelTanks.find(t => t.node === n)?.remaining ?? 0),
      fuelByPath: captureFuel(this.rocket),
      bodyRadii: Object.fromEntries(this.system.bodies.map(b => [b.name, (b as any).radius ?? 0])),
      position: [...this.state.position] as Vec3, velocity: [...this.state.velocity] as Vec3,
      throttle: this.state.throttle, missionTime: this.missionTime,
      quat: this.rocketQuat.toArray() as [number, number, number, number],
      launched: this.launched, grounded: this.grounded, groundedDir: this.groundedDir,
      parachuteDeployed: this.parachuteDeployed, gearDeployed: this.gearDeployed,
      heatEnergy: this.heatEnergy, maxAlt: this.maxAlt, maxSpeed: this.maxSpeed, stageSeparations: this.stageSeparations,
      bodies: this.system.bodies.map(b => ({ name: b.name, position: [...b.position] as Vec3, velocity: [...b.velocity] as Vec3 })),
    });
  }

  dispose(): void {
    this.orbitMap?.dispose();
    if (this.lifetime.disposed) return;
    this.persistFlight();
    this.lifetime.dispose();
    this.engineFlame.getMesh().removeFromParent();
    this.groundSmoke.getMesh().removeFromParent();
    const protectedObjects: THREE.Object3D[] = [...gltfCache.values(), ...this.system.bodies.map(b => (b as any).mesh).filter(Boolean)];
    releaseSceneObjects([
      ...this.ownedSceneObjects, this.rocketGroup, ...this.debris.map(d => d.mesh),
      ...[this.orbitLine, this.deployedChuteMesh].filter((x): x is THREE.Line | THREE.Group => x !== null),
    ], protectedObjects);
    this.ownedSceneObjects.forEach(obj => obj.removeFromParent());
    this.launchPadGroup = null;
    this.launchClamps = null;
    this.surfaceView.dispose(this.system.bodies);
    this.deployedChuteMesh?.removeFromParent();
    this.orbitLine?.removeFromParent();
    if ((window as any).__ellipse?.flight === this) delete (window as any).__ellipse;
    if (this.crashOverlay) {
      this.crashOverlay.remove();
      this.crashOverlay = null;
    }
    this.hideAutopilotStatus();
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
