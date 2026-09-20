import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { findPart } from '../parts/PartCatalog';

const KEY_PREFIX = 'ellipse_assembly_';
const INDEX_KEY = 'ellipse_assemblies';
const LAST_KEY = 'ellipse_assembly_last';

function serializeNode(n: AssemblyNode): any {
  return { partId: n.part.id, position: n.position, rotation: n.rotation, children: n.children.map(serializeNode) };
}
function deserializeNode(data: any): AssemblyNode | null {
  const part = findPart(data.partId);
  if (!part) return null;
  return {
    part,
    position: data.position,
    rotation: data.rotation,
    children: (data.children ?? []).map(deserializeNode).filter((x: AssemblyNode | null): x is AssemblyNode => x !== null)
  };
}

export function serializeAssembly(assembly: Assembly): any[] {
  return assembly.roots.map(serializeNode);
}

export function deserializeAssembly(data: any[]): Assembly | null {
  const a = new Assembly();
  let any = false;
  for (const n of data) {
    const node = deserializeNode(n);
    if (node) { a.addRoot(node); any = true; }
  }
  return any ? a : null;
}

export function saveAssembly(name: string, assembly: Assembly): void {
  localStorage.setItem(KEY_PREFIX + name, JSON.stringify(serializeAssembly(assembly)));
  const idx = JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]') as string[];
  if (!idx.includes(name)) {
    idx.push(name);
    localStorage.setItem(INDEX_KEY, JSON.stringify(idx));
  }
}

export function loadAssembly(name: string): Assembly | null {
  const raw = localStorage.getItem(KEY_PREFIX + name);
  if (!raw) return null;
  return deserializeAssembly(JSON.parse(raw) as any[]);
}

export function listAssemblies(): string[] {
  return JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]') as string[];
}

export function deleteAssembly(name: string): void {
  localStorage.removeItem(KEY_PREFIX + name);
  const idx = JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]') as string[];
  const next = idx.filter(n => n !== name);
  localStorage.setItem(INDEX_KEY, JSON.stringify(next));
}

/** Persist the most recent build so "Continue" can resume it. */
export function saveLastAssembly(assembly: Assembly): void {
  saveAssembly(LAST_KEY, assembly);
}

export function loadLastAssembly(): Assembly | null {
  return loadAssembly(LAST_KEY);
}

export function hasLastAssembly(): boolean {
  return localStorage.getItem(KEY_PREFIX + LAST_KEY) !== null;
}

// ─── Full flight-state save: CONTINUE resumes WHERE YOU LEFT OFF ───

const FLIGHT_KEY = 'ellipse_flight_save';

export interface FlightSave {
  assembly: any[];
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
  const raw = localStorage.getItem(FLIGHT_KEY);
  if (!raw) return null;
  try {
    const s = JSON.parse(raw) as FlightSave;
    if (!Array.isArray(s.assembly) || !Array.isArray(s.position) || !Array.isArray(s.velocity)) return null;
    return s;
  } catch {
    return null;
  }
}

export function hasFlightSave(): boolean {
  return loadFlightState() !== null;
}

export function clearFlightSave(): void {
  localStorage.removeItem(FLIGHT_KEY);
}

