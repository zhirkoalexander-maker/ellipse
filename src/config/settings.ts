export type Units = 'metric' | 'imperial';
export type Difficulty = 'easy' | 'normal' | 'hard' | 'realistic';

export interface Settings {
  units: Units;
  autoSave: boolean;
  difficulty: Difficulty;
  musicVolume: number;
  sfxVolume: number;
}

export const DEFAULT_SETTINGS: Settings = {
  units: 'metric',
  autoSave: true,
  difficulty: 'normal',
  musicVolume: 0.7,
  sfxVolume: 0.8
};

export function difficultyMultiplier(d: Difficulty): number {
  switch (d) {
    case 'easy': return 2.0;
    case 'normal': return 1.0;
    case 'hard': return 0.5;
    case 'realistic': return 0.25;
  }
}
