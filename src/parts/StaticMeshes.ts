import { Group, Mesh, type Material } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/** Part-local, unnamed decorations never animate independently. */
export function batchStaticMeshes(root: Group): void {
  const groups = new Map<Material, Mesh[]>();
  for (const object of root.children) {
    if (!(object instanceof Mesh) || object.name || object.children.length || Array.isArray(object.material)
      || object.material.transparent || (object as Mesh & { isSkinnedMesh?: boolean }).isSkinnedMesh || object.morphTargetInfluences) continue;
    const group = groups.get(object.material) ?? [];
    group.push(object); groups.set(object.material, group);
  }
  for (const [material, meshes] of groups) {
    if (meshes.length < 2) continue;
    const first = meshes[0]!;
    const signature = (mesh: Mesh) => JSON.stringify({
      indexed: !!mesh.geometry.index, cast: mesh.castShadow, receive: mesh.receiveShadow,
      order: mesh.renderOrder, layers: mesh.layers.mask, visible: mesh.visible,
      attributes: Object.entries(mesh.geometry.attributes).map(([name,a])=>[name,a.itemSize,a.normalized,a.array.constructor.name]),
    });
    if (meshes.some(mesh=>signature(mesh)!==signature(first))) continue;
    const baked = meshes.map(mesh=>{
      mesh.updateMatrix();return mesh.geometry.clone().applyMatrix4(mesh.matrix);
    });
    const geometry = mergeGeometries(baked);
    baked.forEach(g=>g.dispose());
    if (!geometry) continue;
    const merged = new Mesh(geometry,material);
    merged.castShadow=first.castShadow;merged.receiveShadow=first.receiveShadow;
    merged.renderOrder=first.renderOrder;merged.layers.mask=first.layers.mask;merged.visible=first.visible;
    meshes.forEach(mesh=>root.remove(mesh));
    root.add(merged);
    const retained = new Set(root.children.filter((o):o is Mesh=>o instanceof Mesh).map(o=>o.geometry));
    for (const original of new Set(meshes.map(mesh=>mesh.geometry))) if (!retained.has(original)) original.dispose();
  }
}
