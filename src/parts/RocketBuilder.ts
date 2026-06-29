import { Assembly } from '../rocket/Assembly';
import { PART_SCALE } from '../config/constants';
import { findPart } from './PartCatalog';

const H: Record<string, number> = {
  S: 0.6 * PART_SCALE, M: 1.0 * PART_SCALE,
  L: 1.4 * PART_SCALE, XL: 2.0 * PART_SCALE,
};

function addPartAt(assembly: Assembly, id: string, yPos: number): number {
  const p = findPart(id);
  if (!p) return yPos;
  const h = H[p.size] || 0.6 * PART_SCALE;
  assembly.addRoot({ part: p, position: [0, yPos + h / 2, 0], rotation: 0, children: [] });
  return yPos + h;
}

type StageSpec = { tank: string; engine: string };
const STAGES: Record<string, StageSpec> = {
  tiny:   { tank: 'tank_s_lfo', engine: 'engine_ant' },
  small:  { tank: 'tank_m_lfo', engine: 'engine_vector' },
  medium: { tank: 'tank_l_lfo', engine: 'engine_mastodon' },
  large:  { tank: 'tank_xl_lfo', engine: 'engine_mammoth' },
};

function addStage(a: Assembly, y: number, size: keyof typeof STAGES, extras: string[] = []): number {
  const s = STAGES[size];
  if (!s) return y;
  for (const id of [s.tank, s.engine, ...extras]) {
    y = addPartAt(a, id, y);
  }
  return y;
}

interface MissionPlan {
  stages: number;
  stageSize: keyof typeof STAGES;
  needsParachute: boolean;
  needsLegs: boolean;
  needsReturn: boolean;
}

function planMission(desc: string): MissionPlan {
  const d = desc.toLowerCase();

  const toSun      = /sun|солн|heliocentric/.test(d);
  const toMars     = /mars|марс/.test(d);
  const toVenus    = /venus|венер/.test(d);
  const toMercury  = /mercury|меркур/.test(d);
  const toMoon     = /moon|лун/.test(d);
  const toOrbit    = /orbit|орбит|station|станц|satellite|спутник/.test(d);
  const toSub      = /suborbit|суборбит|test|тест|hop|прыж/.test(d);

  const needsLand  = /land|сади|посад|touchdown/.test(d) && !/flyby|пролет/.test(d);
  const needsRet   = /return|back|верн|обратн|round.?trip|there\s+and\s+back/.test(d) || 
                     (toMoon && needsLand) ||
                     (toMars && needsLand);
  const needsChute = needsRet || /parachute|парашют|chute/.test(d) || !needsLand;
  const needsLegs  = needsLand || /legs|ноги|landing\s+gear/.test(d);

  let stages = 1;
  let stageSize: MissionPlan['stageSize'] = 'small';

  if (toSub) { stages = 1; stageSize = 'tiny'; }
  else if (toOrbit) { stages = 1; stageSize = 'small'; }
  else if (toMoon) {
    stages = needsRet ? 2 : 1;
    stageSize = 'medium';
  } else if (toMars || toVenus) {
    stages = needsRet ? 3 : 2;
    stageSize = 'large';
  } else if (toMercury) { stages = 2; stageSize = 'medium'; }
  else if (toSun) { stages = 3; stageSize = 'large'; }
  else {
    if (/big|large|тяже|больш|huge|super|giant/.test(d)) { stages = 2; stageSize = 'large'; }
    else if (/small|tiny|легк|малень/.test(d)) { stages = 1; stageSize = 'tiny'; }
    else if (/safe|50%|half/.test(d)) { stages = 2; stageSize = 'medium'; stages = 2; }
    else { stages = 1; stageSize = 'small'; }
  }

  if (/heavy|super|giant|тяжел/.test(d) && stageSize !== 'large') {
    stageSize = stageSize === 'tiny' ? 'small' : 'large';
  }
  if (/safe|50%|half\s+fuel/.test(d)) { stages = 2; stageSize = 'large'; }

  return { stages, stageSize, needsParachute: needsChute, needsLegs, needsReturn: needsRet };
}

function buildFromPlan(plan: MissionPlan): Assembly {
  const a = new Assembly();
  let y = 0;
  const sz = plan.stageSize;

  // Bottom to top: main stages first
  const mainN = plan.needsReturn ? Math.max(1, plan.stages - 1) : plan.stages;
  for (let i = 0; i < mainN; i++) {
    const size = i === 0 ? sz : (sz === 'large' && i > 0 ? 'medium' : sz);
    const extras: string[] = [];
    if (i === 0 && plan.needsLegs) extras.push('legs_landini');
    y = addStage(a, y, size, extras);
  }

  // Decoupler + return stage
  if (plan.needsReturn && plan.stages > 1) {
    y = addPartAt(a, 'decoupler_1', y);
    const rSize = sz === 'large' ? 'small' : 'tiny';
    y = addStage(a, y, rSize);
  }

  // Capsule on top
  y = addPartAt(a, 'capsule_mk1', y);
  if (plan.needsParachute) y = addPartAt(a, 'parachute_mk16', y);

  return a;
}

export function buildRocketFromDescription(description: string): Assembly {
  const plan = planMission(description);
  return buildFromPlan(plan);
}
