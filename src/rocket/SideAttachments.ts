import { Assembly, type AssemblyNode } from './Assembly';
import { SIZE_DIMS } from '../parts/PartBuilder';
import type { Part } from '../parts/Part';

export function addSidePair(assembly: Assembly, host: AssemblyNode, part: Part): string | null {
  const mounts = host.children.filter(n => n.radial);
  const directEngines = host.children.filter(n => n.part.kind === 'engine');
  const engines = [...directEngines, ...mounts.flatMap(n => n.children.filter(c => c.part.kind === 'engine'))];
  if (part.kind === 'engine' && engines.length) return 'Remove the current side engines before choosing another pair.';
  if (part.kind === 'decoupler' && mounts.length) return 'This pair already has side decouplers.';
  const hd = SIZE_DIMS[host.part.size];
  if (part.kind === 'decoupler') {
    for (const side of [-1, 1]) {
      const width = SIZE_DIMS[part.size].height * .2;
      const engine = directEngines.find(n => Math.sign(n.position[0]) === side);
      const mount: AssemblyNode = {part, radial:true, position:[side * (hd.radius + width / 2),0,0],rotation:0,children:[]};
      assembly.addChild(host,mount);
      if (engine) {
        host.children = host.children.filter(n => n !== engine);
        mount.children.push(engine);
        positionEngine(mount,engine,hd.height,side);
      }
    }
  } else {
    for (const side of [-1, 1]) {
      const engine: AssemblyNode = {part,position:[0,0,0],rotation:0,children:[]};
      const mount = mounts.find(n => Math.sign(n.position[0]) === side);
      if (mount) {
        assembly.addChild(mount,engine);positionEngine(mount,engine,hd.height,side);
      } else {
        const ed = SIZE_DIMS[part.size];
        engine.position = [side * (hd.radius + ed.radius),(ed.height-hd.height)/2,0];
        assembly.addChild(host,engine);
      }
    }
  }
  return null;
}

function positionEngine(mount: AssemblyNode, engine: AssemblyNode, hostHeight: number, side: number): void {
  const ed = SIZE_DIMS[engine.part.size], width = SIZE_DIMS[mount.part.size].height * .2;
  mount.position[1] = (ed.height-hostHeight)/2 + ed.height * .36;
  engine.position = [side * (width/2 + ed.radius), -ed.height * .36, 0];
}
