import type { AssemblyNode } from './Assembly';

/** The lowest axial separator isolates the active propulsion stage. Radial mounts stay with their tank. */
export function activeStageNodes(roots: AssemblyNode[]): AssemblyNode[] {
  const boundary = Math.min(Infinity, ...roots.filter(n => n.part.kind === 'decoupler' && !n.radial).map(n => n.position[1]));
  const result: AssemblyNode[] = [];
  const collect = (node: AssemblyNode) => { result.push(node); node.children.forEach(collect); };
  roots.filter(n => n.position[1] < boundary).forEach(collect);
  return result;
}
