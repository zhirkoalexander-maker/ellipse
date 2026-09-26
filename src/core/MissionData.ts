export interface MissionDef {
  id: string;
  name: string;
  description: string;
  /** category for grouping in UI */
  category: 'launch' | 'altitude' | 'orbit' | 'landing' | 'speed' | 'staging';
}

export const MISSIONS: MissionDef[] = [
  { id: 'first_flight',   name: 'First Flight',         description: 'Launch your rocket',                    category: 'launch' },
  { id: 'reach_10km',     name: 'Sky Pilot',            description: 'Reach 10 km altitude',                  category: 'altitude' },
  { id: 'reach_space',    name: 'Edge of Space',        description: 'Reach 100 km altitude',            category: 'altitude' },
  { id: 'reach_orbit',    name: 'Orbital Velocity',     description: 'Achieve a stable orbit (Pe > 80 km)',   category: 'orbit' },
  { id: 'high_orbit',     name: 'High Orbit',           description: 'Apoapsis above 500 km',                 category: 'orbit' },
  { id: 'land_earth',     name: 'Homecoming',           description: 'Land safely on Earth',                  category: 'landing' },
  { id: 'land_moon',      name: 'One Small Step',       description: 'Land on the Moon',                      category: 'landing' },
  { id: 'land_mars',      name: 'Red Planet',           description: 'Land on Mars',                          category: 'landing' },
  { id: 'stage_master',   name: 'Staging Pro',          description: 'Separate 3 stages in one flight',       category: 'staging' },
  { id: 'speed_demon',    name: 'Speed Demon',          description: 'Exceed 3000 m/s',                       category: 'speed' },
  { id: 'ev_astronaut',   name: 'EV Astronaut',         description: 'Exceed 7000 m/s',       category: 'speed' },
  { id: 'munar_orbit',    name: 'Lunar Orbit',          description: 'Achieve orbit around the Moon',         category: 'orbit' },
];
