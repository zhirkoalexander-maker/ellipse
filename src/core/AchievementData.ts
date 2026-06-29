export interface AchievementDef {
  id: string;
  name: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: 'first_launch', name: 'First Launch', description: 'Successful liftoff from the pad' },
  { id: 'reach_space', name: 'Edge of Space', description: 'Reach 100 km altitude' },
  { id: 'reach_orbit', name: 'Orbital', description: 'Achieve a stable orbit' },
  { id: 'first_landing', name: 'Soft Touchdown', description: 'Land at v < 3 m/s' },
  { id: 'parachute_landing', name: 'Parachute Pioneer', description: 'Land using only a parachute' },
  { id: 'moon_landing', name: 'Moon Walker', description: 'Land on the Moon' },
  { id: 'no_damage', name: 'Pristine', description: 'Complete a flight without damage' },
  { id: 'one_stage', name: 'Single Stage', description: 'Reach orbit without staging' },
  { id: 'crash', name: 'Rapid Unscheduled Disassembly', description: 'Crash your rocket' },
  { id: 'land_earth', name: 'Home Sweet Home', description: 'Land safely on Earth' },
  { id: 'land_moon', name: 'Lunar Landing', description: 'Land safely on the Moon' },
  { id: 'land_mars', name: 'Red Planet Touchdown', description: 'Land safely on Mars' },
  { id: 'land_venus', name: 'Venusian Visit', description: 'Land safely on Venus' },
  { id: 'land_mercury', name: 'Mercurial Touch', description: 'Land safely on Mercury' },
  { id: 'stage_separate', name: 'Stage Separation', description: 'Separate a stage in flight' },
];
