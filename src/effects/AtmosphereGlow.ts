import * as THREE from 'three';

const vertexShader = `
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vNormal  = normalize(normalMatrix * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const fragmentShader = `
uniform vec3  glowColor;
uniform float intensity;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 3.0);
  gl_FragColor = vec4(glowColor, fresnel * intensity);
}
`;

const DEFAULT_RADIUS_SCALE = 1.05;

export class AtmosphereGlow {
  private mesh: THREE.Mesh;

  constructor(planetRadius: number, color = 0x4fc3f7, intensity = 0.6) {
    const radius = planetRadius * DEFAULT_RADIUS_SCALE;
    const geom = new THREE.SphereGeometry(radius, 48, 24);

    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        glowColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.mesh = new THREE.Mesh(geom, mat);
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }
}
