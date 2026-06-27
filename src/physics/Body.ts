export type Vec3 = [number, number, number];

export class Body {
  name: string;
  mass: number;
  position: Vec3;
  velocity: Vec3;

  constructor(name: string, mass: number, position: Vec3, velocity: Vec3) {
    this.name = name;
    this.mass = mass;
    this.position = [...position] as Vec3;
    this.velocity = [...velocity] as Vec3;
  }

  applyForce(force: Vec3, dt: number): void {
    // F = m*a, so a = F/m; dv = a*dt
    const ax = force[0] / this.mass;
    const ay = force[1] / this.mass;
    const az = force[2] / this.mass;
    this.velocity[0] += ax * dt;
    this.velocity[1] += ay * dt;
    this.velocity[2] += az * dt;
    // Also advance position (semi-implicit Euler)
    this.position[0] += this.velocity[0] * dt;
    this.position[1] += this.velocity[1] * dt;
    this.position[2] += this.velocity[2] * dt;
  }

  kineticEnergy(): number {
    const v2 = this.velocity[0] ** 2 + this.velocity[1] ** 2 + this.velocity[2] ** 2;
    return 0.5 * this.mass * v2;
  }
}
