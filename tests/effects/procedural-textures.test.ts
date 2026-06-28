import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { generateEarthTexture, generateEarthBumpMap, generateMoonTexture, generateMoonBumpMap, generateTankTexture, generateCapsuleTexture, generateEngineTexture, generateParachuteTexture, makeNormalMap } from '../../src/effects/ProceduralTextures';

describe('ProceduralTextures', () => {
  it('generateEarthTexture returns a CanvasTexture', () => {
    const tex = generateEarthTexture();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(256);
  });

  it('generateEarthBumpMap returns a CanvasTexture', () => {
    const tex = generateEarthBumpMap();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(256);
  });

  it('generateMoonTexture returns a CanvasTexture', () => {
    const tex = generateMoonTexture();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(256);
  });

  it('generateMoonBumpMap returns a CanvasTexture', () => {
    const tex = generateMoonBumpMap();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(256);
  });

  it('generateTankTexture returns a CanvasTexture', () => {
    const tex = generateTankTexture();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(512);
  });

  it('generateCapsuleTexture returns a CanvasTexture', () => {
    const tex = generateCapsuleTexture();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(512);
  });

  it('generateEngineTexture returns a CanvasTexture', () => {
    const tex = generateEngineTexture();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(512);
  });

  it('generateParachuteTexture returns a CanvasTexture', () => {
    const tex = generateParachuteTexture();
    expect(tex.image.width).toBe(512);
    expect(tex.image.height).toBe(512);
  });

  it('makeNormalMap produces a CanvasTexture of matching size', () => {
    const c = document.createElement('canvas');
    c.width = 128; c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillRect(0, 0, 128, 128);
    const tex = makeNormalMap(c, 2.0);
    expect(tex).toBeInstanceOf(THREE.CanvasTexture);
    expect(tex.image.width).toBe(128);
    expect(tex.image.height).toBe(128);
  });

  it('makeNormalMap generates non-zero normal data on edge', () => {
    const c = document.createElement('canvas');
    c.width = 16; c.height = 16;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 8, 16);
    ctx.fillStyle = '#000';
    ctx.fillRect(8, 0, 8, 16);
    const tex = makeNormalMap(c, 2.0);
    const img = (tex as any).image as HTMLCanvasElement;
    const data = img.getContext('2d')!.getImageData(0, 0, 16, 16).data;
    let nonzero = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] !== 128 || data[i + 1] !== 128) nonzero++;
    }
    expect(nonzero).toBeGreaterThan(0);
  });
});
