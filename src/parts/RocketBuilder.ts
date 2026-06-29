import { Assembly } from '../rocket/Assembly';
import { PART_SCALE } from '../config/constants';
import { findPart } from './PartCatalog';

const H: Record<string, number> = {
  S: 0.6 * PART_SCALE,
  M: 1.0 * PART_SCALE,
  L: 1.4 * PART_SCALE,
  XL: 2.0 * PART_SCALE,
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
  for (const id of parts) {
    y = addPart(assembly, id, y);
  }
}

const TEMPLATES: Record<string, string[]> = {
  suborbital: ['capsule_mk1', 'tank_s_lfo', 'engine_ant'],
  orbital: ['capsule_mk1', 'tank_m_lfo', 'engine_vector'],
  lunar: ['capsule_mk1', 'tank_m_lfo', 'engine_vector', 'decoupler_1', 'tank_m_lfo', 'engine_ant', 'legs_landini'],
  lunar_return: ['capsule_mk1', 'parachute_mk16', 'tank_l_lfo', 'engine_vector', 'decoupler_1', 'tank_l_lfo', 'engine_ant', 'legs_landini'],
  interplanetary: ['capsule_mk1', 'parachute_mk16', 'tank_xl_lfo', 'engine_mastodon', 'decoupler_1', 'tank_xl_lfo', 'engine_mastodon', 'legs_landini'],
  heavy: ['capsule_mk1', 'parachute_mk16', 'tank_xl_lfo', 'tank_xl_lfo', 'engine_mammoth', 'decoupler_1', 'tank_xl_lfo', 'engine_mastodon', 'legs_landini'],
};

function keywordMatch(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some(k => lower.includes(k));
}

export function buildRocketFromDescription(description: string): Assembly {
  const assembly = new Assembly();
  const desc = description.toLowerCase();

  if (keywordMatch(desc, ['moon', 'лун']) && keywordMatch(desc, ['return', 'back', 'верн', 'обратн'])) {
    buildStack(assembly, TEMPLATES.lunar_return!);
  } else if (keywordMatch(desc, ['moon', 'лун']) && keywordMatch(desc, ['land', 'сади', 'посад'])) {
    buildStack(assembly, TEMPLATES.lunar!);
  } else if (keywordMatch(desc, ['moon', 'лун'])) {
    buildStack(assembly, TEMPLATES.lunar!);
  } else if (keywordMatch(desc, ['mars', 'марс', 'venus', 'венер', 'interplanetary', 'межплан'])) {
    buildStack(assembly, TEMPLATES.interplanetary!);
  } else if (keywordMatch(desc, ['orbit', 'орбит', 'station', 'станц'])) {
    buildStack(assembly, TEMPLATES.orbital!);
  } else if (keywordMatch(desc, ['heavy', 'big', 'large', 'тяже', 'больш']) || keywordMatch(desc, ['return', 'верн'])) {
    buildStack(assembly, TEMPLATES.heavy!);
  } else if (keywordMatch(desc, ['suborbital', 'sub-orbital', 'test', 'тест'])) {
    buildStack(assembly, TEMPLATES.suborbital!);
  } else {
    buildStack(assembly, TEMPLATES.orbital!);
  }

  return assembly;
}
