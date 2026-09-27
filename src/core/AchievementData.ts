export interface AchievementDef {
  id: string;
  name: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: 'first_launch', name: 'First launch', description: 'Lift off from the pad' },
  { id: 'reach_space', name: '100 km', description: 'Reach 100 km altitude' },
  { id: 'reach_orbit', name: 'In orbit', description: 'Enter a stable orbit' },
  { id: 'first_landing', name: 'Soft landing', description: 'Land at v < 3 m/s' },
  { id: 'parachute_landing', name: 'Parachute landing', description: 'Land using only a parachute' },
  { id: 'moon_landing', name: 'On the Moon', description: 'Land on the Moon' },
  { id: 'no_damage', name: 'No damage', description: 'Complete a flight without damage' },
  { id: 'one_stage', name: 'Single stage', description: 'Reach orbit without staging' },
  { id: 'crash', name: 'First crash', description: 'Crash your rocket' },
  { id: 'land_earth', name: 'Back on Earth', description: 'Land safely on Earth' },
  { id: 'land_moon', name: 'Moon landing', description: 'Land safely on the Moon' },
  { id: 'land_mars', name: 'Mars landing', description: 'Land safely on Mars' },
  { id: 'land_venus', name: 'Venus landing', description: 'Land safely on Venus' },
  { id: 'land_mercury', name: 'Mercury landing', description: 'Land safely on Mercury' },
  { id: 'stage_separate', name: 'Stage separation', description: 'Separate a stage in flight' },
];
