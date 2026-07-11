/** Gravitational constant (m³/(kg·s²)) */
export const G = 6.67430e-11;

/** Orbit compression factor (1:10⁹) */
export const ORBIT_SCALE = 1e-9;

/** Visual planet size multiplier — ×562500 = 15x from original 37500 */
export const VISUAL_PLANET_MULT = 562500;

/** Fixed physics timestep (s) */
export const FIXED_DT = 1 / 60;

/** Standard gravity (m/s²) — used for Isp mass flow calc */
export const G0 = 9.80665;

/** Earth mass (kg) — 20x real for heavy gravity (196 m/s² surface) */
export const EARTH_MASS = 1.1944e26;

/** Visual part scale factor (rocket size relative to planets) */
export const PART_SCALE = 0.05;

/** Rocket visual scale multiplier — 2x smaller for proper planet ratio */
export const ROCKET_VISUAL_SCALE = 5;

/** Terrain displacement (0 = smooth sphere with texture) */
export const TERRAIN_DISP_FRAC = 0;

/** Ocean depression */
export const TERRAIN_OCEAN_FRAC = 0;

/** Sea level threshold */
export const TERRAIN_SEA_LEVEL = 0.35;

/** Resolve asset URL with correct base path for GitHub Pages. */
export function assetUrl(path: string): string {
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  return (base + path.replace(/^\//, '')).replace(/\/\//g, '/');
}
