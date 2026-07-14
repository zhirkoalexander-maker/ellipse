/** Gravitational constant (m³/(kg·s²)) */
export const G = 6.67430e-11;

/** Orbit compression factor (1:10⁹) */
export const ORBIT_SCALE = 1e-9;

/** Visual planet size multiplier */
export const VISUAL_PLANET_MULT = 562500 * 17;

/** Fixed physics timestep (s) */
export const FIXED_DT = 1 / 60;

/** Standard gravity (m/s²) — used for Isp mass flow calc */
export const G0 = 9.80665;

/** Earth mass (kg) — 20x real for heavy gravity (196 m/s² surface) */
export const EARTH_MASS = 1.1944e26 * 20;

/** Visual part scale factor (rocket size relative to planets) */
export const PART_SCALE = 0.05;

/** Rocket visual scale multiplier — large enough to be visible against planet */
export const ROCKET_VISUAL_SCALE = 850;

/** Terrain displacement fraction of visual radius */
export const TERRAIN_DISP_FRAC = 0.001;

/** Ocean depression */
export const TERRAIN_OCEAN_FRAC = 0;

/** Sea level threshold */
export const TERRAIN_SEA_LEVEL = 0.35;

/** Resolve asset URL with correct base path for GitHub Pages. */
export function assetUrl(path: string): string {
  // In dev mode, public/ files are served at root (no prefix)
  if (import.meta.env.DEV) return path;
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  return (base + path.replace(/^\//, '')).replace(/\/\//g, '/');
}
