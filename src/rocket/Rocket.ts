import { Assembly } from './Assembly';

export class Rocket {
  assembly: Assembly;
  fuelMass = 0;
  velocity: [number, number, number] = [0, 0, 0];

  constructor(assembly: Assembly) {
    this.assembly = assembly;
  }

  dryMass(): number { return this.assembly.totalMass(); }
  totalMass(): number { return this.dryMass() + this.fuelMass; }
}
