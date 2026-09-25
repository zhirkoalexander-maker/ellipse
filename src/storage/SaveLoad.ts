import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Rocket } from '../rocket/Rocket';
import { findPart } from '../parts/PartCatalog';

const KEY_PREFIX = 'ellipse_assembly_';
const INDEX_KEY = 'ellipse_assemblies';
const LAST_KEY = 'ellipse_assembly_last';

function serializeNode(n: AssemblyNode): any {
  return { partId: n.part.id, position: [...n.position], rotation: n.rotation, children: n.children.map(serializeNode) };
}
function deserializeNode(data: any): AssemblyNode | null {
  const part = findPart(data.partId);
  if (!part) return null;
  return {
    part,
    position: [...data.position] as [number, number, number],
    rotation: data.rotation,
    children: (data.children ?? []).map(deserializeNode).filter((x: AssemblyNode | null): x is AssemblyNode => x !== null)
  };
}

export function serializeAssembly(assembly: Assembly): any[] {
  return assembly.roots.map(serializeNode);
}

export function deserializeAssembly(data: any[]): Assembly | null {
  if (!Array.isArray(data) || !data.every(n => validNode(n))) return null;
  const a = new Assembly();
  let any = false;
  for (const n of data) {
    const node = deserializeNode(n);
    if (node) { a.addRoot(node); any = true; }
  }
  return any ? a : null;
}

export function saveAssembly(name: string, assembly: Assembly): boolean {
  try {
    const idx = listAssemblies();
    localStorage.setItem(KEY_PREFIX + name, JSON.stringify(serializeAssembly(assembly)));
    if (!idx.includes(name)) localStorage.setItem(INDEX_KEY, JSON.stringify([...idx, name]));
    return true;
  } catch { return false; }
}

export function loadAssembly(name: string): Assembly | null {
  try {
    const raw = localStorage.getItem(KEY_PREFIX + name);
    return raw ? deserializeAssembly(JSON.parse(raw)) : null;
  } catch { return null; }
}

export function listAssemblies(): string[] {
  try { const value=JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]'); return Array.isArray(value) ? [...new Set(value.filter((n:unknown):n is string=>typeof n==='string'))] : []; } catch { return []; }
}

export function deleteAssembly(name: string): boolean {
  try {
    localStorage.setItem(INDEX_KEY, JSON.stringify(listAssemblies().filter(n=>n!==name)));
    localStorage.removeItem(KEY_PREFIX + name);
    return true;
  } catch { return false; }
}

/** Persist the most recent build so "Continue" can resume it. */
export function saveLastAssembly(assembly: Assembly): boolean {
  return saveAssembly(LAST_KEY, assembly);
}

export function loadLastAssembly(): Assembly | null {
  return loadAssembly(LAST_KEY);
}

export function hasLastAssembly(): boolean {
  return loadLastAssembly() !== null;
}

// ─── Full flight-state save: CONTINUE resumes WHERE YOU LEFT OFF ───

const FLIGHT_KEY = 'ellipse_flight_save';

export interface FlightSave {
  version?: 2 | 3;
  mission?: { target: string; departure: string; autoWarp: boolean; phase?: 'landing' };
  fuelByPath?: Record<string, number>;
  bodyRadii?: Record<string, number>;
  parachuteDeployed?: boolean;
  gearDeployed?: boolean;
  heatEnergy?: number;
  maxAlt?: number;
  maxSpeed?: number;
  stageSeparations?: number;
  assembly: any[];
  launchAssembly?: any[];
  /** Remaining fuel per assembly root index (parallel to assembly array). */
  fuel: number[];
  position: [number, number, number];
  velocity: [number, number, number];
  throttle: number;
  missionTime: number;
  /** Rocket orientation quaternion [x, y, z, w]. */
  quat: [number, number, number, number];
  launched: boolean;
  grounded: boolean;
  groundedDir: [number, number, number] | null;
  /** Full planetary state — positions drift with sim time, so without this
   *  the rocket would resume relative to planets that reset to epoch. */
  bodies: Array<{
    name: string;
    position: [number, number, number];
    velocity: [number, number, number];
  }>;
}

export function saveFlightState(s: FlightSave): void {
  try {
    localStorage.setItem(FLIGHT_KEY, JSON.stringify(s));
  } catch { /* storage full — non-fatal */ }
}

export function loadFlightState(): FlightSave | null {
  try {
    const raw = localStorage.getItem(FLIGHT_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as FlightSave;
    if (!validFlight(s)) return null;
    return s;
  } catch {
    return null;
  }
}

export function hasFlightSave(): boolean {
  return loadFlightState() !== null;
}

export function clearFlightSave(): void {
  try { localStorage.removeItem(FLIGHT_KEY); }
  catch { /* A blocked save must not prevent starting or ending a flight. */ }
}


function finite(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}
function vector(value: unknown, length: number): value is number[] {
  return Array.isArray(value) && value.length === length && value.every(finite);
}
function validNode(node: any, depth = 0): boolean {
  return depth < 100 && node !== null && typeof node === 'object' && typeof node.partId === 'string'
    && vector(node.position, 3) && finite(node.rotation)
    && (node.children === undefined || (Array.isArray(node.children) && node.children.every((n: any) => validNode(n, depth + 1))));
}
function numberMap(value: unknown): boolean {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    && Object.values(value).every(v => finite(v) && v >= 0);
}
function validFlight(s: any): s is FlightSave {
  if (!s || !Array.isArray(s.assembly) || !s.assembly.length || !s.assembly.every((n: any) => validNode(n))) return false;
  if (!vector(s.position, 3) || !vector(s.velocity, 3) || !vector(s.quat, 4)) return false;
  const quatLength = Math.hypot(...s.quat);
  if (quatLength < 0.5 || quatLength > 1.5) return false;
  if (!finite(s.throttle) || s.throttle < 0 || s.throttle > 1 || !finite(s.missionTime) || s.missionTime < 0) return false;
  if (typeof s.launched !== 'boolean' || typeof s.grounded !== 'boolean') return false;
  if (s.groundedDir !== null && (!vector(s.groundedDir, 3) || Math.hypot(...s.groundedDir) < 1e-8)) return false;
  if (!Array.isArray(s.fuel) || !s.fuel.every((v: unknown) => finite(v) && v >= 0)) return false;
  if (!Array.isArray(s.bodies) || !s.bodies.every((b: any) => b && typeof b.name === 'string' && vector(b.position, 3) && vector(b.velocity, 3))) return false;
  // Resume replays these events; reject corrupt values that could stall the browser.
  if (s.stageSeparations !== undefined && (!Number.isInteger(s.stageSeparations) || s.stageSeparations > 10000)) return false;
  if (s.launchAssembly !== undefined && (!Array.isArray(s.launchAssembly) || !s.launchAssembly.length || !s.launchAssembly.every((n:any)=>validNode(n)))) return false;
  if (s.version !== undefined && s.version !== 2 && s.version !== 3) return false;
  if (s.mission !== undefined) {
    const solidBodies = ['mercury', 'venus', 'earth', 'moon', 'mars', 'pluto'];
    const allBodies = [...solidBodies, 'sun', 'jupiter', 'saturn', 'uranus', 'neptune'];
    const m = s.mission;
    if (!m || typeof m !== 'object' || Array.isArray(m)
      || !solidBodies.includes(m.target) || !allBodies.includes(m.departure)
      || typeof m.autoWarp !== 'boolean' || (m.phase !== undefined && m.phase !== 'landing')) return false;
  }
  if (s.fuelByPath !== undefined && !numberMap(s.fuelByPath)) return false;
  if (s.bodyRadii !== undefined && !numberMap(s.bodyRadii)) return false;
  for (const key of ['parachuteDeployed', 'gearDeployed']) if (s[key] !== undefined && typeof s[key] !== 'boolean') return false;
  for (const key of ['heatEnergy', 'maxAlt', 'maxSpeed', 'stageSeparations']) if (s[key] !== undefined && (!finite(s[key]) || s[key] < 0)) return false;
  return true;
}

function visitNodes(nodes: AssemblyNode[], visit: (node: AssemblyNode, path: string) => void, prefix = ''): void {
  nodes.forEach((node, i) => {
    const path = prefix ? `${prefix}.${i}` : String(i);
    visit(node, path);
    visitNodes(node.children, visit, path);
  });
}

/** Paths identify tanks in the assembly tree, independently of the burn-order sorting. */
export function captureFuel(rocket: Rocket): Record<string, number> {
  const tanks = new Map(rocket.fuelTanks.map(t => [t.node, t]));
  const result: Record<string, number> = {};
  visitNodes(rocket.assembly.roots, (node, path) => {
    const tank = tanks.get(node);
    if (tank) result[path] = tank.remaining;
  });
  return result;
}

export function restoreFuel(rocket: Rocket, save: Pick<FlightSave, 'fuel' | 'fuelByPath'>): void {
  const tanks = new Map(rocket.fuelTanks.map(t => [t.node, t]));
  visitNodes(rocket.assembly.roots, (node, path) => {
    const tank = tanks.get(node);
    const amount = save.fuelByPath?.[path] ?? (!path.includes('.') ? save.fuel[Number(path)] : undefined);
    if (tank && finite(amount)) tank.remaining = Math.max(0, Math.min(tank.capacity, amount));
  });
}
