export type Units = 'metric' | 'imperial' | 'mixed';
export type Difficulty = 'easy' | 'normal' | 'hard';

export interface Settings {
  units: Units;
  autoSave: boolean;
  difficulty: Difficulty;
}

export const DEFAULT_SETTINGS: Settings = {
  units: 'metric',
  autoSave: true,
  difficulty: 'normal'
};
