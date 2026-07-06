/** Gravitational constant (m³/(kg·s²)) */
export const G = 6.67430e-11;

/** Orbit compression factor (1:10⁹) */
export const ORBIT_SCALE = 1e-9;

/** Visual planet size multiplier (×15000) */
export const VISUAL_PLANET_MULT = 15000;

/** Fixed physics timestep (s) */
export const FIXED_DT = 1 / 60;

/** Standard gravity (m/s²) — used for Isp mass flow calc */
export const G0 = 9.80665;

/** Earth mass (kg) — tuned for ~50 m/s² surface gravity */
export const EARTH_MASS = 3.04e25;

/** Visual part scale factor (rocket size relative to planets) */
export const PART_SCALE = 0.005;
