export interface MissionDef {
  id: string;
  name: string;
  description: string;
  reward: number;
  /** category for grouping in UI */
  category: 'launch' | 'altitude' | 'orbit' | 'landing' | 'speed' | 'staging';
}

export const MISSIONS: MissionDef[] = [
  { id: 'first_flight',   name: 'First Flight',         description: 'Launch your rocket',                    reward: 10,  category: 'launch' },
  { id: 'reach_10km',     name: 'Sky Pilot',            description: 'Reach 10 km altitude',                  reward: 15,  category: 'altitude' },
  { id: 'reach_space',    name: 'Edge of Space',        description: 'Reach 100 km (Kármán line)',            reward: 25,  category: 'altitude' },
  { id: 'reach_orbit',    name: 'Orbital Velocity',     description: 'Achieve a stable orbit (Pe > 80 km)',   reward: 50,  category: 'orbit' },
  { id: 'high_orbit',     name: 'High Orbit',           description: 'Apoapsis above 500 km',                 reward: 40,  category: 'orbit' },
  { id: 'land_earth',     name: 'Homecoming',           description: 'Land safely on Earth',                  reward: 20,  category: 'landing' },
  { id: 'land_moon',      name: 'One Small Step',       description: 'Land on the Moon',                      reward: 100, category: 'landing' },
  { id: 'land_mars',      name: 'Red Planet',           description: 'Land on Mars',                          reward: 150, category: 'landing' },
  { id: 'stage_master',   name: 'Staging Pro',          description: 'Separate 3 stages in one flight',       reward: 30,  category: 'staging' },
  { id: 'speed_demon',    name: 'Speed Demon',          description: 'Exceed 3000 m/s',                       reward: 20,  category: 'speed' },
  { id: 'ev astronaut',   name: 'EV Astronaut',         description: 'Exceed 7000 m/s (orbital speed)',       reward: 35,  category: 'speed' },
  { id: 'munar_orbit',    name: 'Lunar Orbit',          description: 'Achieve orbit around the Moon',         reward: 80,  category: 'orbit' },
];
