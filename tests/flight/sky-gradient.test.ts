import { describe, it, expect } from 'vitest';
import * as THREE from 'three';

describe('Sky Gradient', () => {
  it('lerps colors correctly', () => {
    const color = new THREE.Color();
    color.lerpColors(
      new THREE.Color(0x87CEEB),
      new THREE.Color(0x060814),
      0
    );
    expect(color.getHex()).toBe(0x87CEEB);

    color.lerpColors(
      new THREE.Color(0x87CEEB),
      new THREE.Color(0x060814),
      1
    );
    expect(color.getHex()).toBe(0x060814);

    color.lerpColors(
      new THREE.Color(0x87CEEB),
      new THREE.Color(0x060814),
      0.5
    );
    const hex = color.getHex();
    expect(hex).not.toBe(0x87CEEB);
    expect(hex).not.toBe(0x060814);
  });
});
