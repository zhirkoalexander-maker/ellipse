import type { BufferGeometry, Material, Object3D, ShaderMaterial, Texture } from 'three';

interface Resources {
  geometries: Set<BufferGeometry>;
  materials: Set<Material>;
  textures: Set<Texture>;
}

function collect(objects: Object3D[]): Resources {
  const resources: Resources = { geometries: new Set(), materials: new Set(), textures: new Set() };
  const textureValue = (value: unknown): void => {
    if (value && typeof value === 'object' && (value as Texture).isTexture) resources.textures.add(value as Texture);
    else if (Array.isArray(value)) {
      // Uniform sampler arrays contain textures; do not follow arbitrary object graphs.
      value.forEach(item => {
        if (item && typeof item === 'object' && (item as Texture).isTexture) resources.textures.add(item as Texture);
      });
    }
  };
  for (const root of objects) root.traverse(object => {
    const renderable = object as Object3D & { geometry?: BufferGeometry; material?: Material | Material[] };
    if (renderable.geometry) resources.geometries.add(renderable.geometry);
    const materials = Array.isArray(renderable.material) ? renderable.material : renderable.material ? [renderable.material] : [];
    for (const material of materials) {
      if (resources.materials.has(material)) continue;
      resources.materials.add(material);
      Object.values(material).forEach(textureValue);
      const uniforms = (material as ShaderMaterial).uniforms;
      if (uniforms) Object.values(uniforms).forEach(uniform => textureValue(uniform.value));
    }
  });
  return resources;
}

/** Release GPU resources once per call, preserving anything used by protected roots.
 * Does not detach objects or dispose the protected scene/cache. Callers own scene membership.
 * Texture image data is retained because image sources can be shared by independent textures.
 */
export function releaseSceneObjects(objects: Object3D[], protectedObjects: Object3D[] = []): void {
  const retained = collect(protectedObjects);
  const released = collect(objects);
  released.geometries.forEach(geometry => { if (!retained.geometries.has(geometry)) geometry.dispose(); });
  released.materials.forEach(material => { if (!retained.materials.has(material)) material.dispose(); });
  released.textures.forEach(texture => { if (!retained.textures.has(texture)) texture.dispose(); });
}
