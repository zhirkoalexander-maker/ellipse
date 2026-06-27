import type { FlightState } from './FlightState';
import type { System } from '../physics/System';
import type { Vec3 } from '../physics/Body';

export class HUD {
  private root: HTMLDivElement;
  private speedEl!: HTMLDivElement;
  private altEl!: HTMLDivElement;
  private angleEl!: HTMLDivElement;
  private fuelEl!: HTMLDivElement;
  private throtEl!: HTMLDivElement;

  constructor() {
    this.root = document.createElement('div');
    this.root.style.cssText = `
      position: fixed; top: 16px; left: 16px; z-index: 100;
      background: rgba(37, 43, 61, 0.85);
      border: 1px solid #3A4055;
      border-radius: 12px;
      padding: 12px 16px;
      font-family: 'JetBrains Mono', monospace;
      color: var(--starshine);
      min-width: 120px;
    `;
  }

  mount(parent: HTMLElement = document.body): void {
    this.speedEl = this.makeRow('SPEED', '0', 'm/s');
    this.altEl = this.makeRow('ALTITUDE', '0', 'm');
    this.angleEl = this.makeRow('ANGLE', '0', '°');
    this.fuelEl = this.makeRow('FUEL', '0', '%');
    this.throtEl = this.makeRow('THROTTLE', '0', '%');
    parent.appendChild(this.root);
  }

  private makeRow(label: string, value: string, unit: string): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'margin-bottom: 6px; font-size: 13px;';
    row.innerHTML = `
      <div style="font-size:10px;color:var(--stardust);text-transform:uppercase;letter-spacing:0.05em;">${label}</div>
      <div style="font-size:18px;font-weight:500;"><span class="val">${value}</span> <span style="font-size:11px;color:var(--stardust);">${unit}</span></div>
    `;
    this.root.appendChild(row);
    return row;
  }

  update(state: FlightState, system: System): void {
    const speed = Math.sqrt(
      state.velocity[0] ** 2 + state.velocity[1] ** 2 + state.velocity[2] ** 2
    );
    // altitude = distance to nearest body minus body radius
    let nearestAlt = Infinity;
    for (const body of system.bodies) {
      if (body.name === 'rocket') continue;
      const dx = state.position[0] - body.position[0];
      const dy = state.position[1] - body.position[1];
      const dz = state.position[2] - body.position[2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      // Use body.radius if it's a Planet; else 0
      const r = (body as any).radius ?? 0;
      const alt = d - r;
      if (alt < nearestAlt) nearestAlt = alt;
    }
    // tilt angle from vertical (assume rocket points up)
    const horiz = Math.sqrt(state.velocity[0] ** 2 + state.velocity[2] ** 2);
    const angle = Math.atan2(horiz, Math.abs(state.velocity[1])) * 180 / Math.PI;

    const fuelPct = state.rocket.totalMass() > 0
      ? (state.rocket.fuelMass / (state.rocket.totalMass() - state.rocket.dryMass() + state.rocket.fuelMass)) * 100
      : 0;

    this.setVal(this.speedEl, speed.toFixed(1));
    this.setVal(this.altEl, nearestAlt > 1000 ? (nearestAlt / 1000).toFixed(2) : nearestAlt.toFixed(0));
    this.setUnit(this.altEl, nearestAlt > 1000 ? 'km' : 'm');
    this.setVal(this.angleEl, angle.toFixed(0));
    this.setVal(this.fuelEl, fuelPct.toFixed(0));
    this.setVal(this.throtEl, (state.throttle * 100).toFixed(0));
  }

  private setVal(row: HTMLDivElement, val: string): void {
    row.querySelector('.val')!.textContent = val;
  }
  private setUnit(row: HTMLDivElement, unit: string): void {
    row.querySelectorAll('span')[1]!.textContent = unit;
  }

  unmount(): void {
    this.root.remove();
  }
}
