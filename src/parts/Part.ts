export type FuelType = 'LFO' | 'LF';
export type PartKind = 'capsule' | 'tank' | 'engine' | 'parachute' | 'legs' | 'decoupler' | 'heatshield' | 'gltf';
export type PartSize = 'S' | 'M' | 'L' | 'XL';

export interface Part {
  id: string;
  name: string;
  kind: PartKind;
  size: PartSize;
  mass: number;            // kg (dry)
  fuelCapacity?: number;   // kg of fuel (tanks only)
  fuelType?: FuelType;     // for tanks + engines
  thrust?: number;         // kN (engines only)
  isp?: number;            // s (engines only)
  crewCapacity?: number;   // crew (capsules only)
  hasParachute?: boolean;  // capsules
  heatCapacity?: number;   // J (heat shields)
  dragCoeff?: number;      // aerodynamic
  gltfUrl?: string;        // GLTF model URL (for gltf kind)
  gltfScale?: number;      // scale factor for GLTF model
}
