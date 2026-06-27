import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { findPart } from '../parts/PartCatalog';

const KEY_PREFIX = 'ellipse_assembly_';
const INDEX_KEY = 'ellipse_assemblies';

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

export function saveAssembly(name: string, assembly: Assembly): void {
  const data = assembly.roots.map(serializeNode);
  localStorage.setItem(KEY_PREFIX + name, JSON.stringify(data));
  const idx = JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]') as string[];
  if (!idx.includes(name)) {
    idx.push(name);
    localStorage.setItem(INDEX_KEY, JSON.stringify(idx));
  }
}

export function loadAssembly(name: string): Assembly | null {
  const raw = localStorage.getItem(KEY_PREFIX + name);
  if (!raw) return null;
  const data = JSON.parse(raw) as any[];
  const a = new Assembly();
  for (const n of data) {
    const node = deserializeNode(n);
    if (node) a.addRoot(node);
  }
  return a;
}

export function listAssemblies(): string[] {
  return JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]') as string[];
}
