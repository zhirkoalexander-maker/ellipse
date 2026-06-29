import type { Part } from './Part';

export const PART_CATALOG: Part[] = [
  // Capsule
  {
    id: 'capsule_mk1',
    name: 'MK-1 Capsule',
    kind: 'capsule',
    size: 'M',
    mass: 1200,
    crewCapacity: 1,
    hasParachute: true,
    dragCoeff: 0.5
  },
  // Tanks
  {
    id: 'tank_s_lfo',
    name: 'Fuel Tank S (LFO)',
    kind: 'tank',
    size: 'S',
    mass: 200,
    fuelCapacity: 3000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_m_lfo',
    name: 'Fuel Tank M (LFO)',
    kind: 'tank',
    size: 'M',
    mass: 600,
    fuelCapacity: 30000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_l_lfo',
    name: 'Fuel Tank L (LFO)',
    kind: 'tank',
    size: 'L',
    mass: 1200,
    fuelCapacity: 60000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_xl_lfo',
    name: 'Fuel Tank XL (LFO)',
    kind: 'tank',
    size: 'XL',
    mass: 2500,
    fuelCapacity: 150000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  // Engines
  {
    id: 'engine_ant',
    name: '"Ant" Engine',
    kind: 'engine',
    size: 'S',
    mass: 50,
    thrust: 1500,           // kN
    isp: 350,             // s
    fuelType: 'LFO'
  },
  {
    id: 'engine_vector',
    name: '"Vector" Engine',
    kind: 'engine',
    size: 'M',
    mass: 400,
    thrust: 800,
    isp: 340,
    fuelType: 'LFO'
  },
  {
    id: 'engine_mastodon',
    name: '"Mastodon" Engine',
    kind: 'engine',
    size: 'L',
    mass: 1200,
    thrust: 2000,
    isp: 330,
    fuelType: 'LFO'
  },
  {
    id: 'engine_mammoth',
    name: '"Mammoth" Engine',
    kind: 'engine',
    size: 'XL',
    mass: 3000,
    thrust: 5000,
    isp: 310,
    fuelType: 'LFO'
  },
  // Parachute (separate part that attaches to capsule)
  {
    id: 'parachute_mk16',
    name: 'Mk-16 Parachute',
    kind: 'parachute',
    size: 'M',
    mass: 30,
    dragCoeff: 5.0
  },
  // Landing legs
  {
    id: 'legs_landini',
    name: '"Landini" Landing Legs',
    kind: 'legs',
    size: 'S',
    mass: 80,
    dragCoeff: 0.1
  },
  // Decoupler
  {
    id: 'decoupler_1',
    name: 'TD-1 Decoupler',
    kind: 'decoupler',
    size: 'M',
    mass: 100,
    dragCoeff: 0.3
  }
];

export function findPart(id: string): Part | undefined {
  return PART_CATALOG.find((p) => p.id === id);
}
