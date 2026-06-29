import { Assembly } from '../rocket/Assembly';
import { PART_SCALE } from '../config/constants';
import { findPart } from './PartCatalog';

const H: Record<string, number> = {
  S: 0.6 * PART_SCALE, M: 1.0 * PART_SCALE,
  L: 1.4 * PART_SCALE, XL: 2.0 * PART_SCALE,
};

function addPart(assembly: Assembly, id: string, yPos: number): number {
  const p = findPart(id);
  if (!p) return yPos;
  const h = H[p.size] || 0.6 * PART_SCALE;
  assembly.addRoot({ part: p, position: [0, yPos + h / 2, 0], rotation: 0, children: [] });
  return yPos + h;
}

function buildStack(assembly: Assembly, parts: string[]): void {
  let y = 0;
  for (const id of parts) y = addPart(assembly, id, y);
}

type StageSpec = { tank: string; engine: string };
const STAGES: Record<string, StageSpec> = {
  tiny:   { tank: 'tank_s_lfo', engine: 'engine_ant' },
  small:  { tank: 'tank_m_lfo', engine: 'engine_vector' },
  medium: { tank: 'tank_l_lfo', engine: 'engine_mastodon' },
  large:  { tank: 'tank_xl_lfo', engine: 'engine_mammoth' },
};

interface MissionPlan {
  stages: number;           // number of propulsion stages
  stageSize: 'tiny' | 'small' | 'medium' | 'large';
  needsParachute: boolean;
  needsLegs: boolean;
  needsReturn: boolean;     // add decoupler + return stage
}

function planMission(desc: string): MissionPlan {
  const d = desc.toLowerCase();

  // Detect destination difficulty
  const toSun      = /sun|солн|heliocentric|гелио/.test(d);
  const toInter    = /interplanetary|межплан|asteroid|астероид/.test(d);
  const toMars     = /mars|марс/.test(d);
  const toVenus    = /venus|венер/.test(d);
  const toMercury  = /mercury|меркур/.test(d);
  const toMoon     = /мoon|лун|selene|celestial\s+body/.test(d);
  const toOrbit    = /orbit|орбит|station|станц|satellite|спутник/.test(d);
  const toSub      = /suborbit|суборбит|test|тест|hop|прыж/.test(d);

  // Detect actions
  const needsLand  = /land|сади|посад|touchdown|приземл/.test(d);
  const needsRet   = /return|back|верн|обратн|round.?trip/.test(d) ||
                     (toMoon && (needsLand || /there\s+and\s+back/i.test(d))) ||
                     (toMoon && /return|верн/.test(d));
  const needsChute = needsRet || /parachute|парашют|chute/.test(d) || !needsLand;
  const needsLegs  = needsLand || /legs|ноги|landing\s+gear|шасси/.test(d);

  // Tor each stage: more distant = more stages, bigger tanks
  let stages = 1;
  let stageSize: MissionPlan['stageSize'] = 'tiny';

  if (toSub) { stages = 1; stageSize = 'tiny'; }
  else if (toOrbit || /earth\s+orbit|leo|low\s+earth/.test(d)) { stages = 1; stageSize = 'small'; }
  else if (toMoon) {
    stages = needsRet ? 2 : 1;
    stageSize = 'medium';
  } else if (toMars || toVenus) {
    stages = needsRet ? 3 : 2;
    stageSize = 'large';
  } else if (toMercury) {
    stages = needsRet ? 3 : 2;
    stageSize = 'medium';
  } else if (toInter) {
    stages = 2; stageSize = 'large';
  } else if (toSun) {
    stages = 3; stageSize = 'large';
  } else {
    // Generic: detect size hints
    if (/big|large|тяже|больш|huge|super|giant|огром/.test(d)) { stages = 2; stageSize = 'large'; }
    else if (/small|tiny|легк|малень/.test(d)) { stages = 1; stageSize = 'tiny'; }
    else { stages = 1; stageSize = 'small'; }
  }

  // Detect "heavy" modifiers
  if (/heavy|super|giant|тяжел/.test(d) && stageSize !== 'large') {
    if (stageSize === 'small' || stageSize === 'tiny') stageSize = 'medium';
    else stageSize = 'large';
  }
  if (/light|轻型|легк/.test(d) && stageSize !== 'tiny') {
    stageSize = 'tiny';
  }

  return { stages, stageSize, needsParachute: needsChute, needsLegs, needsReturn: needsRet };
}

function buildFromPlan(plan: MissionPlan): Assembly {
  const a = new Assembly();

  // Return / upper stage (sits on top, below capsule)
  if (plan.needsReturn && plan.stages > 1) {
    const size = plan.stageSize === 'large' ? 'small' : 'tiny';
    const ss = STAGES[size];
    if (!ss) { buildStack(a, ['decoupler_1', 'tank_s_lfo', 'engine_ant']); }
    else { buildStack(a, ['decoupler_1', ss.tank, ss.engine]); }
    if (plan.needsLegs) buildStack(a, ['legs_landini']);
  }

  // Main propulsion stages (bottom to top)
  const mainCount = plan.needsReturn ? Math.max(1, plan.stages - 1) : plan.stages;
  for (let i = 0; i < mainCount; i++) {
    const size = i === 0 ? plan.stageSize : (
      plan.stageSize === 'large' ? 'medium' : plan.stageSize
    );
    const ss = STAGES[size];
    if (!ss) continue;
    const parts: string[] = [ss.tank, ss.engine];
    if (plan.needsLegs && i === 0) parts.push('legs_landini');
    buildStack(a, parts);
  }

  // Capsule + parachute on top
  const top: string[] = ['capsule_mk1'];
  if (plan.needsParachute) top.push('parachute_mk16');
  buildStack(a, top);

  return a;
}

export function buildRocketFromDescription(description: string): Assembly {
  const plan = planMission(description);
  return buildFromPlan(plan);
}
