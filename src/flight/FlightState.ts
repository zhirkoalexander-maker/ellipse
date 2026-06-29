import type { Rocket } from '../rocket/Rocket';
import type { System } from '../physics/System';
import type { Vec3 } from '../physics/Body';

export class FlightState {
  rocket: Rocket;
  system: System;
  position: Vec3;
  velocity: Vec3;
  throttle = 0; // 0..1

  constructor(rocket: Rocket, system: System, position: Vec3, velocity: Vec3) {
    this.rocket = rocket;
    this.system = system;
    this.position = [...position] as Vec3;
    this.velocity = [...velocity] as Vec3;
  }

  /** Subtract fuel at rate (kg/s) for dt seconds. */
  consumeFuel(rate: number, dt: number): void {
    this.rocket.consumeFuel(rate, dt);
  }
}
