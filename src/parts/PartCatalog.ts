import type { Part } from './Part';

export const PART_CATALOG: Part[] = [
  // Capsule
  {
    id: 'capsule_mk1',
    name: 'MK-1 Capsule',
    kind: 'capsule',
    size: 'S',
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
    fuelCapacity: 200,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_m_lfo',
    name: 'Fuel Tank M (LFO)',
    kind: 'tank',
    size: 'M',
    mass: 400,
    fuelCapacity: 400,
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
    thrust: 40,            // kN
    isp: 310,             // s
    fuelType: 'LFO'
  },
  {
    id: 'engine_vector',
    name: '"Vector" Engine',
    kind: 'engine',
    size: 'M',
    mass: 200,
    thrust: 120,
    isp: 325,
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
  }
];

export function findPart(id: string): Part | undefined {
  return PART_CATALOG.find((p) => p.id === id);
}
