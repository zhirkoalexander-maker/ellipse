/** UI metres are smaller than simulation coordinates; time and mass are unchanged. */
export const GAME_METRES_PER_METRE = 0.25;
export const gameMetres = (value: number): number => value * GAME_METRES_PER_METRE;
export const simulationMetres = (value: number): number => value / GAME_METRES_PER_METRE;
