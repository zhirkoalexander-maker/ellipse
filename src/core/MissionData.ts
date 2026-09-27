export interface MissionDef {
  id: string;
  name: string;
  description: string;
  /** category for grouping in UI */
  category: 'launch' | 'altitude' | 'orbit' | 'landing' | 'speed' | 'staging';
}

export const MISSIONS: MissionDef[] = [
  { id: 'first_flight',   name: 'First flight',         description: 'Launch your rocket',                    category: 'launch' },
  { id: 'reach_10km',     name: '10 km',            description: 'Reach 10 km altitude',                  category: 'altitude' },
  { id: 'reach_space',    name: '100 km',        description: 'Reach 100 km altitude',            category: 'altitude' },
  { id: 'reach_orbit',    name: 'Earth orbit',     description: 'Orbit Earth without dropping below 80 km',   category: 'orbit' },
  { id: 'high_orbit',     name: 'High orbit',           description: 'Apoapsis above 500 km',                 category: 'orbit' },
  { id: 'land_earth',     name: 'Back on Earth',           description: 'Land safely on Earth',                  category: 'landing' },
  { id: 'land_moon',      name: 'Moon landing',       description: 'Land on the Moon',                      category: 'landing' },
  { id: 'land_mars',      name: 'Mars landing',           description: 'Land on Mars',                          category: 'landing' },
  { id: 'stage_master',   name: 'Three stages',          description: 'Separate 3 stages in one flight',       category: 'staging' },
  { id: 'speed_demon',    name: '3,000 m/s',          description: 'Exceed 3000 m/s',                       category: 'speed' },
  { id: 'ev_astronaut',   name: '7,000 m/s',         description: 'Exceed 7000 m/s',       category: 'speed' },
  { id: 'munar_orbit',    name: 'Moon orbit',          description: 'Enter orbit around the Moon',         category: 'orbit' },
];
