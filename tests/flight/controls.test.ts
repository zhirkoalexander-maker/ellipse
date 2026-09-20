import { describe, it, expect, beforeEach } from 'vitest';
import { Controls } from '../../src/flight/Controls';
import { FlightState } from '../../src/flight/FlightState';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { System } from '../../src/physics/System';

function makeState() {
  const assembly = new Assembly();
  const rocket = new Rocket(assembly);
  const system = new System();
  return new FlightState(rocket, system, [0, 0, 0], [0, 0, 0]);
}

function emitKey(key: string, type: 'keydown' | 'keyup') {
  window.dispatchEvent(new KeyboardEvent(type, { key }));
}

describe('Controls', () => {
  let controls: Controls;

  beforeEach(() => {
    controls = new Controls(makeState());
  });

  describe('pitch (W/S — documented mapping: ↑/↓ throttle, W/S pitch, A/D yaw)', () => {
    it('returns 0 when no keys', () => {
      expect(controls.getPitch()).toBe(0);
    });

    it('returns 1 for W', () => {
      emitKey('w', 'keydown');
      expect(controls.getPitch()).toBe(1);
    });

    it('returns -1 for S', () => {
      emitKey('s', 'keydown');
      expect(controls.getPitch()).toBe(-1);
    });
  });

  describe('yaw', () => {
    it('returns 1 for A', () => {
      emitKey('a', 'keydown');
      expect(controls.getYaw()).toBe(1);
    });

    it('returns -1 for D', () => {
      emitKey('d', 'keydown');
      expect(controls.getYaw()).toBe(-1);
    });
  });

  describe('throttle', () => {
    it('increases with ArrowUp', () => {
      emitKey('ArrowUp', 'keydown');
      controls.update(0.1);
      expect(controls.state.throttle).toBeGreaterThan(0);
    });
  });

  describe('staging', () => {
    it('returns true on first space press', () => {
      emitKey(' ', 'keydown');
      expect(controls.getStageRequested()).toBe(true);
    });

    it('returns false after consumed', () => {
      emitKey(' ', 'keydown');
      controls.getStageRequested();
      expect(controls.getStageRequested()).toBe(false);
    });
  });
});
