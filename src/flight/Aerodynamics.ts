import type { AssemblyNode } from '../rocket/Assembly';

/** Effective area depends on shape and attitude, never on fuel mass. */
export function dragArea(nodes: AssemblyNode[], alignment: number, gear: boolean, parachute: boolean): number {
  const diameter = { S: 1.25, M: 2.5, L: 3.75, XL: 5 };
  let width = 1.25;
  const visit = (parts: AssemblyNode[]) => parts.forEach(n => { width = Math.max(width, diameter[n.part.size]); visit(n.children); });
  visit(nodes);
  const frontal = Math.PI * width * width / 4;
  const side = 1 - Math.min(1, alignment * alignment);
  return frontal * (.22 + side * 1.4) + (gear ? frontal * .35 : 0) + (parachute ? 300 : 0);
}

/** Exact quadratic-drag decay for constant density; cannot reverse velocity. */
export function dragRetention(speed: number, density: number, area: number, mass: number, dt: number): number {
  return 1 / (1 + .5 * Math.max(0, density) * Math.max(0, area) * Math.max(0, speed) * Math.max(0, dt) / Math.max(1, mass));
}
