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
    fuelCapacity: 4500,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_m_lfo',
    name: 'Fuel Tank M (LFO)',
    kind: 'tank',
    size: 'M',
    mass: 600,
    fuelCapacity: 45000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_l_lfo',
    name: 'Fuel Tank L (LFO)',
    kind: 'tank',
    size: 'L',
    mass: 1200,
    fuelCapacity: 90000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_xl_lfo',
    name: 'Fuel Tank XL (LFO)',
    kind: 'tank',
    size: 'XL',
    mass: 2500,
    fuelCapacity: 225000,
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
    thrust: 177000,
    isp: 350,             // s
    fuelType: 'LFO'
  },
  {
    id: 'engine_vector',
    name: '"Vector" Engine',
    kind: 'engine',
    size: 'M',
    mass: 400,
    thrust: 1600000,
    isp: 340,
    fuelType: 'LFO'
  },
  {
    id: 'engine_mastodon',
    name: '"Mastodon" Engine',
    kind: 'engine',
    size: 'L',
    mass: 1200,
    thrust: 4000000,
    isp: 330,
    fuelType: 'LFO'
  },
  {
    id: 'engine_mammoth',
    name: '"Mammoth" Engine',
    kind: 'engine',
    size: 'XL',
    mass: 3000,
    thrust: 10000000,
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
  // Heat shields
  {
    id: 'heatshield_s',
    name: 'Heat Shield S (Ablative)',
    kind: 'heatshield',
    size: 'S',
    mass: 50,
    heatCapacity: 50000,
    dragCoeff: 1.2
  },
  {
    id: 'heatshield_m',
    name: 'Heat Shield M (Ablative)',
    kind: 'heatshield',
    size: 'M',
    mass: 150,
    heatCapacity: 150000,
    dragCoeff: 1.2
  },
  {
    id: 'heatshield_l',
    name: 'Heat Shield L (Ablative)',
    kind: 'heatshield',
    size: 'L',
    mass: 400,
    heatCapacity: 400000,
    dragCoeff: 1.2
  },
  // Decoupler
  {
    id: 'decoupler_1',
    name: 'TD-1 Decoupler',
    kind: 'decoupler',
    size: 'M',
    mass: 100,
    dragCoeff: 0.3
  },
// GLTF Models (scales calibrated: GLTF in meters → game units via gltfScale)
// Target: ~0.0015 scale for all (1 meter = 0.0015 game units)
  {
    id: 'agena_target',
    name: 'Agena Target Vehicle',
    kind: 'gltf',
    size: 'M',
    mass: 1500,
    dragCoeff: 0.3,
    gltfUrl: '/models/agena.glb',
    gltfScale: 0.0015
  },
  {
    id: 'apollo_soyuz',
    name: 'Apollo Soyuz',
    kind: 'gltf',
    size: 'L',
    mass: 5000,
    dragCoeff: 0.3,
    gltfUrl: '/models/apollo_soyuz.glb',
    gltfScale: 0.0015
  },
  {
    id: 'saturn_v',
    name: 'Saturn V',
    kind: 'gltf',
    size: 'XL',
    mass: 3000000,
    dragCoeff: 0.3,
    gltfUrl: '/models/saturn_v.glb',
    gltfScale: 0.0015
  },
  {
    id: 'ares_1',
    name: 'Ares I',
    kind: 'gltf',
    size: 'XL',
    mass: 2000000,
    dragCoeff: 0.3,
    gltfUrl: '/models/ares_1.glb',
    gltfScale: 0.0015
  },
  {
    id: 'apollo_lunar_module',
    name: 'Apollo Lunar Module',
    kind: 'gltf',
    size: 'L',
    mass: 15000,
    dragCoeff: 0.3,
    gltfUrl: '/models/apollo_lunar_module.glb',
    gltfScale: 0.002
  },
  {
    id: 'atlas_6',
    name: 'Atlas 6 (Friendship 7)',
    kind: 'gltf',
    size: 'L',
    mass: 120000,
    dragCoeff: 0.3,
    gltfUrl: '/models/atlas_6.glb',
    gltfScale: 0.0015
  },
  {
    id: 'atlas_9',
    name: 'Atlas 9 (Faith 7)',
    kind: 'gltf',
    size: 'L',
    mass: 120000,
    dragCoeff: 0.3,
    gltfUrl: '/models/atlas_9.glb',
    gltfScale: 0.0015
  },
  {
    id: 'crawler',
    name: 'Crawler Transporter',
    kind: 'gltf',
    size: 'XL',
    mass: 2700000,
    dragCoeff: 0.3,
    gltfUrl: '/models/crawler.glb',
    gltfScale: 0.001
  }
];

export function findPart(id: string): Part | undefined {
  return PART_CATALOG.find((p) => p.id === id);
}
