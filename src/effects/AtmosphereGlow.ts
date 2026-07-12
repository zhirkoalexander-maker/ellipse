import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Vertex shader – shared by inner & outer shells                     */
/* ------------------------------------------------------------------ */
const vertexShader = `
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos     = wp.xyz;
  vWorldNormal  = normalize(mat3(modelMatrix) * normal);
  vViewDir      = normalize(cameraPosition - wp.xyz);
  gl_Position   = projectionMatrix * viewMatrix * wp;
}
`;

/* ------------------------------------------------------------------ */
/*  Fragment shader with full scattering model                         */
/* ------------------------------------------------------------------ */
const fragmentShader = `
uniform vec3  uSunDir;           // normalised world-space direction planet→sun
uniform vec3  uPlanetCenter;     // world-space centre of the planet
uniform float uInnerRadius;      // planet surface radius
uniform float uAtmHeight;        // physical height of the atmosphere shell
uniform vec3  uRayleighCol;      // base Rayleigh colour (per-planet tint)
uniform vec3  uMieCol;           // Mie / haze colour
uniform float uDensity;          // overall optical depth multiplier
uniform vec3  uTerminatorCol;    // colour at the terminator (sunset band)
uniform float uGlowPower;        // how much the glow spreads past the limb

varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

// Rayleigh phase function  P(θ) = 3/16π (1 + cos²θ)
float rayleighPhase(float cosTheta) {
  float ct2 = cosTheta * cosTheta;
  return 0.0596831 * (1.0 + ct2);           // 3/(16π) ≈ 0.05968
}

// Henyey–Greenstein Mie phase function
float miePhase(float cosTheta, float g) {
  float g2 = g * g;
  return 0.0795775 * (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5);   // 1/(4π) ≈ 0.07958
}

void main() {
  vec3  V   = normalize(vViewDir);
  vec3  L   = normalize(uSunDir);
  vec3  N   = normalize(vWorldNormal);
  vec3  C   = uPlanetCenter;
  float R   = uInnerRadius;
  float Ratm = R + uAtmHeight;

  // ---- 1. Geometry: where on the planet disk? ----
  float viewAngle = max(dot(N, V), 0.0);
  float fresnel   = pow(1.0 - viewAngle, uGlowPower);

  // ---- 2. Lighting: day / terminator / night ----
  float NdotL     = dot(N, L);
  float daySide   = smoothstep(-0.15, 0.25, NdotL);
  float terminator = exp(-pow((NdotL - 0.08) * 6.0, 2.0));   // band at terminator

  // ---- 3. Phase functions ----
  float cosTheta   = dot(V, L);
  float phaseR    = rayleighPhase(cosTheta);
  float phaseM    = miePhase(cosTheta, 0.76);

  // ---- 4. Density approximation ----
  // Use fresnel as a proxy for the optical path length through the atmosphere
  float optDepth = fresnel * uDensity * 0.5;

  // ---- 5. Base colour mixing ----
  vec3 dayCol       = uRayleighCol;
  vec3 nightCol     = vec3(0.01, 0.005, 0.02);
  vec3 terminatorCol = uTerminatorCol;

  vec3 baseCol = mix(nightCol, dayCol, daySide);
  baseCol      = mix(baseCol, terminatorCol, terminator);

  // ---- 6. Apply phase + depth ----
  float scattering = phaseR * 0.7 + phaseM * 0.3;
  float alpha      = fresnel * (0.3 + 0.7 * daySide) * uDensity;

  vec3 color = baseCol * scattering * optDepth * 2.0;

  // ---- 7. Outer haze (adds bright white at limb) ----
  float haze = fresnel * fresnel * uDensity * 0.15 * (0.5 + 0.5 * daySide);
  color += vec3(haze);

  alpha = clamp(alpha, 0.0, 1.0);
  if (alpha < 0.005) discard;

  gl_FragColor = vec4(color, alpha);
}
`;

/* ------------------------------------------------------------------ */
/*  Outer / glow shell fragment shader (softer, fainter)              */
/* ------------------------------------------------------------------ */
const glowFragmentShader = `
uniform vec3  uSunDir;
uniform vec3  uPlanetCenter;
uniform float uInnerRadius;
uniform float uDensity;
uniform float uGlowPower;

varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

void main() {
  vec3 V = normalize(vViewDir);
  vec3 L = normalize(uSunDir);
  vec3 N = normalize(vWorldNormal);

  float viewAngle = max(dot(N, V), 0.0);
  float fresnel   = pow(1.0 - viewAngle, uGlowPower * 0.7);
  float NdotL     = dot(N, L);
  float dayFactor = smoothstep(-0.3, 0.2, NdotL);

  float cosTheta  = dot(V, L);
  float phase     = 0.05968 * (1.0 + cosTheta * cosTheta);

  float alpha = fresnel * (0.1 + 0.4 * dayFactor) * uDensity * phase;
  alpha = clamp(alpha, 0.0, 0.6);

  vec3 color = mix(
    vec3(0.01, 0.005, 0.03),
    vec3(0.3, 0.5, 1.0),
    dayFactor
  ) * fresnel * uDensity * 0.3;

  if (alpha < 0.005) discard;
  gl_FragColor = vec4(color, alpha);
}
`;

/* ------------------------------------------------------------------ */
/*  AtmosphereGlow class – dual shell (inner + outer)                  */
/* ------------------------------------------------------------------ */
export class AtmosphereGlow {
  private group = new THREE.Group();
  private innerMesh: THREE.Mesh;
  private outerMesh: THREE.Mesh;
  private innerMat: THREE.ShaderMaterial;
  private outerMat: THREE.ShaderMaterial;

  /**
   * @param planetRadius   visual radius of the planet body
   * @param color          base atmospheric tint (e.g. 0x4488ff for Earth)
   * @param intensity      overall strength of the effect
   * @param atmHeight      height of the atmosphere shell (in visual units, default 8 % of radius)
   * @param terminatorCol  colour at the sunset terminator (default orange)
   * @param glowPower      how far the glow spreads past the limb
   */
  constructor(
    planetRadius: number,
    color = 0x4488ff,
    intensity = 0.7,
    atmHeight?: number,
    terminatorCol = 0xff6622,
    glowPower = 3.0,
  ) {
    const baseCol = new THREE.Color(color);
    const termCol = new THREE.Color(terminatorCol);
    const h = atmHeight ?? planetRadius * 0.08;

    const planetCenter = new THREE.Vector3(0, 0, 0); // relative to parent (planet mesh)

    // ---- Inner shell ----
    const innerRadius = planetRadius * 1.01;
    const innerGeom = new THREE.SphereGeometry(innerRadius, 64, 48);

    this.innerMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uSunDir:        { value: new THREE.Vector3(0, 1, 0) },
        uPlanetCenter:  { value: planetCenter },
        uInnerRadius:   { value: planetRadius },
        uAtmHeight:     { value: h },
        uRayleighCol:   { value: baseCol },
        uMieCol:        { value: new THREE.Color(0.9, 0.9, 1.0) },
        uDensity:       { value: intensity },
        uTerminatorCol: { value: termCol },
        uGlowPower:     { value: glowPower },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.innerMesh = new THREE.Mesh(innerGeom, this.innerMat);
    this.group.add(this.innerMesh);

    // ---- Outer shell (wider, fainter glow) ----
    const outerRadius = planetRadius * 1.06;
    const outerGeom = new THREE.SphereGeometry(outerRadius, 48, 32);

    this.outerMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: glowFragmentShader,
      uniforms: {
        uSunDir:       { value: new THREE.Vector3(0, 1, 0) },
        uPlanetCenter: { value: planetCenter },
        uInnerRadius:  { value: planetRadius },
        uDensity:      { value: intensity * 0.5 },
        uGlowPower:    { value: glowPower },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.outerMesh = new THREE.Mesh(outerGeom, this.outerMat);
    this.group.add(this.outerMesh);
  }

  /** Update the sun direction uniform (called each frame from the scene) */
  setSunDirection(sunWorldPos: THREE.Vector3, planetWorldPos: THREE.Vector3): void {
    const dir = new THREE.Vector3().copy(sunWorldPos).sub(planetWorldPos).normalize();
    (this.innerMat.uniforms['uSunDir']!.value as THREE.Vector3).copy(dir);
    (this.outerMat.uniforms['uSunDir']!.value as THREE.Vector3).copy(dir);
  }

  getMesh(): THREE.Group {
    return this.group;
  }

  dispose(): void {
    this.innerMat.dispose();
    this.outerMat.dispose();
    this.innerMesh.geometry.dispose();
    this.outerMesh.geometry.dispose();
  }
}
