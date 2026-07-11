import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { generateEarthTexture, generateEarthBumpMap, generateMoonTexture, generateMoonBumpMap, generateTankTexture, generateCapsuleTexture, generateEngineTexture, generateParachuteTexture } from '../../src/effects/ProceduralTextures';

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

  it('generateTankTexture returns TextureSet with 2048x2048 color map', () => {
    const ts = generateTankTexture('M');
    expect(ts.color.image.width).toBe(2048);
    expect(ts.color.image.height).toBe(2048);
    expect(ts.normal).toBeDefined();
  });

  it('generateTankTexture handles XL size without error', () => {
    const ts = generateTankTexture('XL');
    expect(ts.color.image.width).toBe(2048);
    expect(ts.normal).toBeDefined();
  });

  it('generateCapsuleTexture returns TextureSet with 2048x2048 color map', () => {
    const ts = generateCapsuleTexture();
    expect(ts.color.image.width).toBe(2048);
    expect(ts.color.image.height).toBe(2048);
    expect(ts.normal).toBeDefined();
  });

  it('generateEngineTexture returns TextureSet with 1024x1024 color map', () => {
    const ts = generateEngineTexture();
    expect(ts.color.image.width).toBe(1024);
    expect(ts.color.image.height).toBe(1024);
    expect(ts.normal).toBeDefined();
  });

  it('generateParachuteTexture returns TextureSet with 1024x1024 color map', () => {
    const ts = generateParachuteTexture();
    expect(ts.color.image.width).toBe(1024);
    expect(ts.color.image.height).toBe(1024);
    expect(ts.normal).toBeDefined();
  });
});
