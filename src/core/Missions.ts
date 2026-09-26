import { MISSIONS, type MissionDef } from './MissionData';
import { toast } from '../ui/Toast';

const COMPLETED_KEY = 'ellipse_missions_completed';

/** Live flight state snapshot used to evaluate mission conditions. */
export interface FlightSnapshot {
  launched: boolean;
  altitude: number;          // m above nearest body surface
  maxAltitude: number;       // m
  speed: number;             // m/s
  maxSpeed: number;          // m/s
  grounded: boolean;
  nearestBody: string;       // 'earth', 'moon', ...
  refBody: string;           // current SOI body
  bound: boolean;            // stable orbit?
  apoapsis: number;          // m (relative to ref body center, may be undefined → -1)
  periapsis: number;         // m
  stageSeparations: number;  // count this flight
  softLanded: boolean;       // just landed softly this frame?
}

export class Missions {
  private completed: Set<string> = new Set();
  private stageCountThisFlight = 0;
  private landedThisFrame = false;

  constructor() {
    try {
      const saved=JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? '[]');
      if(Array.isArray(saved))for(const raw of saved){
        const id=raw==='ev astronaut'?'ev_astronaut':raw;
        if(MISSIONS.some(m=>m.id===id))this.completed.add(id);
      }
    } catch { /* Progress still works for this session without storage. */ }
  }

  getCompleted(): string[] { return [...this.completed]; }
  isCompleted(id: string): boolean { return this.completed.has(id); }

  /** Call when a stage separation happens during flight. */
  recordStageSeparation(): void {
    this.stageCountThisFlight++;
    this.tryUnlock('stage_master', this.stageCountThisFlight >= 3);
  }

  /** Call once when the rocket lands softly. */
  recordLanding(body: string): void {
    this.landedThisFrame = true;
    if (body === 'earth') this.tryUnlock('land_earth', true);
    else if (body === 'moon') this.tryUnlock('land_moon', true);
    else if (body === 'mars') this.tryUnlock('land_mars', true);
  }

  /** Reset per-flight counters (call on new flight / restart). */
  resetFlight(): void {
    this.stageCountThisFlight = 0;
    this.landedThisFrame = false;
  }

  /** Evaluate all missions against the current flight snapshot (call each frame). */
  evaluate(s: FlightSnapshot): void {
    if (s.launched) this.tryUnlock('first_flight', true);
    if (s.maxAltitude >= 10000) this.tryUnlock('reach_10km', true);
    if (s.maxAltitude >= 100000) this.tryUnlock('reach_space', true);
    if (s.maxSpeed >= 3000) this.tryUnlock('speed_demon', true);
    if (s.maxSpeed >= 7000) this.tryUnlock('ev_astronaut', true);
    if (s.bound && s.periapsis > 80000 && s.refBody === 'earth') this.tryUnlock('reach_orbit', true);
    if (s.bound && s.apoapsis > 500000 && s.refBody === 'earth') this.tryUnlock('high_orbit', true);
    if (s.bound && s.periapsis > 1000 && s.refBody === 'moon') this.tryUnlock('munar_orbit', true);
  }

  private tryUnlock(id: string, condition: boolean): void {
    if (!condition) return;
    if (this.completed.has(id)) return;
    this.completed.add(id);
    try { localStorage.setItem(COMPLETED_KEY, JSON.stringify([...this.completed])); } catch {}
    const def = MISSIONS.find(m => m.id === id);
    if (def) {
      toast.show(`☑ ${def.name}`, 3200);
    }
  }
}

export { MISSIONS, type MissionDef };
