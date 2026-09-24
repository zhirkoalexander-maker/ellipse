import { describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';
import * as disposal from '../../src/core/disposeObject';

describe('scene resource disposal', () => {
  it('releases shared mesh, line, points and sprite resources exactly once without detaching objects', () => {
    expect(disposal).toHaveProperty('releaseSceneObjects');
    const geometry = new THREE.BufferGeometry();
    const texture = new THREE.Texture();
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const group = new THREE.Group();
    group.add(new THREE.Mesh(geometry, material), new THREE.Line(geometry, material), new THREE.Points(geometry, material));
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    group.add(new THREE.Sprite(spriteMaterial));
    const parent = new THREE.Group(); parent.add(group);
    const geo = vi.spyOn(geometry, 'dispose'), mat = vi.spyOn(material, 'dispose'), tex = vi.spyOn(texture, 'dispose'), sprite = vi.spyOn(spriteMaterial, 'dispose');
    disposal.releaseSceneObjects([group, group.children[0]!]);
    expect(geo).toHaveBeenCalledTimes(1); expect(mat).toHaveBeenCalledTimes(1);
    expect(tex).toHaveBeenCalledTimes(1); expect(sprite).toHaveBeenCalledTimes(1);
    expect(group.parent).toBe(parent);
  });
  it('protects shared resources and textures referenced by a different cached material', () => {
    const geometry = new THREE.BufferGeometry();
    const texture = new THREE.Texture();
    const cachedMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const localMaterial = cachedMaterial.clone();
    const cached = new THREE.Mesh(geometry, cachedMaterial);
    const local = new THREE.Mesh(geometry, [cachedMaterial, localMaterial]);
    const geo = vi.spyOn(geometry, 'dispose'), tex = vi.spyOn(texture, 'dispose'), cache = vi.spyOn(cachedMaterial, 'dispose'), own = vi.spyOn(localMaterial, 'dispose');
    disposal.releaseSceneObjects([local], [cached]);
    expect(geo).not.toHaveBeenCalled(); expect(tex).not.toHaveBeenCalled(); expect(cache).not.toHaveBeenCalled();
    expect(own).toHaveBeenCalledTimes(1);
  });
  it('releases shader uniform textures and arrays while preserving protected uniforms', () => {
    const localTexture = new THREE.Texture(), cachedTexture = new THREE.Texture();
    const material = new THREE.ShaderMaterial({ uniforms: { textures: { value: [localTexture, cachedTexture] }, direct: { value: localTexture } } });
    const cachedMaterial = new THREE.ShaderMaterial({ uniforms: { map: { value: cachedTexture } } });
    const local = vi.spyOn(localTexture, 'dispose'), cached = vi.spyOn(cachedTexture, 'dispose');
    disposal.releaseSceneObjects([new THREE.Mesh(new THREE.BufferGeometry(), material)], [new THREE.Mesh(new THREE.BufferGeometry(), cachedMaterial)]);
    expect(local).toHaveBeenCalledTimes(1); expect(cached).not.toHaveBeenCalled();
  });
});
