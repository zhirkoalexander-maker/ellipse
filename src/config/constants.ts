/* Gravitational constant (m³/(kg·s²)) */
export const G = 6.67430e-11;

/** Orbit compression factor (1:10⁹) */
export const ORBIT_SCALE = 1e-9;

/** Visual planet size multiplier */
export const VISUAL_PLANET_MULT = 220000;

/** Fixed physics timestep (s) */
export const FIXED_DT = 1 / 60;

/** Standard gravity (m/s²) — used for Isp mass flow calc */
export const G0 = 9.80665;

/** Earth mass (kg) — g≈14.67 m/s² (max for Ant engine TWR≈1) */
export const EARTH_MASS = 8.92e25 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3;

/** Visual part scale factor (rocket size relative to planets) */
export const PART_SCALE = 0.05;

/** Rocket visual scale multiplier */
export const ROCKET_VISUAL_SCALE = 20;

/** Terrain displacement fraction of visual radius */
export const TERRAIN_DISP_FRAC = 0.005;

/** Ocean depression */
export const TERRAIN_OCEAN_FRAC = 0;

/** Sea level threshold */
export const TERRAIN_SEA_LEVEL = 0.35;

/** Resolve asset URL with correct base path for GitHub Pages. */
export function assetUrl(path: string): string {
  if (import.meta.env.DEV) return path;
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  return (base + path.replace(/^\//, '')).replace(/\/\//g, '/');
}
