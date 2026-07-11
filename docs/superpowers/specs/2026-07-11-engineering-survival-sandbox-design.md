# ELLIPSE Survival Sandbox — Design Spec

## Core Concept
Engineer rockets with procedural parts, survive the harshness of space,
compete in weekly challenges, and learn real physics along the way.

---

## 1. Procedural Parts System

### 1.1 Procedural Fuel Tanks
- Player chooses **diameter** (0.625–5m in steps) and **length** (0.3–8m)
- Volume → fuel capacity (LFO, LH₂, etc.) → dry mass (tank skin)
- Different materials: aluminium (light, cheap), steel (heavy, strong), titanium (light, expensive)
- Tank mass = f(surface area × thickness × material density)
- Fuel type affects Isp of engine and boil-off rate

### 1.2 Procedural Engines
- Parameters: **chamber pressure**, **nozzle expansion ratio**, **fuel type**
- Derived stats: thrust, Isp (vacuum), Isp (sea level), mass, cost
- Higher chamber pressure → more thrust, thicker walls needed → more mass
- Larger nozzle → higher vacuum Isp, lower sea-level Isp, heavier
- Real equations: thrust coefficient, characteristic velocity, nozzle area ratio

### 1.3 Procedural Structural Parts
- Struts, adapters, interstage fairings — defined by dimensions and material
- Auto-generated mesh (cone, cylinder, ogive)

---

## 2. Survival Systems

### 2.1 Life Support
- Resources: **O₂, CO₂ scrubber capacity, H₂O, food, waste storage**
- Crew capsule has finite capacity; add life-support modules for longer missions
- Consumption rates: O₂ ~0.84 kg/day, H₂O ~3.3 kg/day, food ~1.8 kg/day per kerbal(-equivalent)
- CO₂ scrubber: limited capacity, must be replaced or regenerated
- Cabin pressure, temperature (passive radiators, active heaters)

### 2.2 Power
- Solar panels: degraded by radiation/particle impact over time
- RTG: heavy, expensive, reliable
- Fuel cells: consume H₂ + O₂ → electricity + H₂O (mass-efficient for short missions)
- Batteries: capacity, depth-of-discharge limits

### 2.3 Reliability & Failures
- Procedural engines have **rated lifetime** (seconds of burn) before failure risk rises
- Rapid throttling, overheating, running dry → cumulative fatigue
- Parts have **quality** rating (cost vs reliability trade-off)
- Random failures: stuck throttle, failed ignition, structural rupture
- Player can add redundant systems, manual override

### 2.4 Environmental Hazards
- Van Allen belts — radiation damage to electronics and crew
- Solar flares — random events, require shielded shelter
- Micrometeoroids — roll the dice every time you cross a debris field
- Atmospheric reentry heating — procedural heatshield ablation

---

## 3. Competitive Science

### 3.1 Tech Tree
- **Tiers** from basic rocketry (1940s) to advanced fusion (fictional future)
- Unlock new materials, fuel types, engine cycles, life support equipment
- Science points earned by **completing missions** and **returning data**
- Data types: crew report, EVA observation, surface sample, atmosphere analysis, gravioli scan
- Each biome (shore, highlands, ice cap, mare, etc.) gives unique science

### 3.2 Weekly Challenges
- Automatic challenge generation with fixed constraints
  - e.g. "Reach 300 km altitude with ≤2000 kg launch mass"
  - e.g. "Land on the Mun and return — minimum total mass wins"
- Leaderboard: score = f(mission success, mass efficiency, science returned)
- Challenges run for 7 days, results posted to a static page
- Anti-cheat: craft file hash verification, telemetry validation

### 3.3 Progression
- Start with basic parts (early rocketry), no life support needed for 1-kerbal short flights
- Gradually introduce life support, procedural parts, harder destinations
- New players learn one system at a time through guided missions
- Sandbox mode: everything unlocked, no life support, pure engineering

---

## 4. Education Layer

### 4.1 Interactive Tutorials
- Built-in missions that teach one concept at a time:
  1. **Getting off the ground** — TWR, gravity loss, staging
  2. **Orbit insertion** — Δv, Hohmann transfer, inclination
  3. **Rendezvous & docking** — phasing, relative velocity
  4. **Interplanetary transfers** — phase angles, ejection windows
  5. **Aerobraking & reentry** — heating, drag, heat shield sizing
- Each tutorial shows **visualised physics**: thrust curve overlay, Δv map, orbital maneuver nodes
- Player must hit target orbit within tolerance to pass

### 4.2 In-Game Reference
- **Part stats explained**: "Why does this nozzle give better vacuum Isp?"
- **Engineering formulas** shown on-demand with sliders to see trade-offs
- **Glossary** of terms (specific impulse, mass ratio, characteristic velocity)
- **Visual dV tool** — "What can this rocket actually reach?"

---

## 5. Architecture Notes

### Data model additions
```
ProceduralTankConfig { diameter, length, material, fuelType }
ProceduralEngineConfig { chamberPressure, nozzleRatio, fuelType, coolingMethod }
LifeSupportState { o2, co2, h2o, food, waste, cabinPressure, cabinTemp }
PartReliability { burnTime, fatigue, quality, failureHistory }
```

### Existing code integration
- `Part` interface gets optional `proceduralParams` field
- `RocketBuilder` and `VABScene` get procedural part editors
- `FlightScene` adds life-support tick per frame (separate from physics)
- `System.propagate` extended with environment hazards
- New singleton: `ChallengeManager` for weekly challenge generation + validation
- New singleton: `TutorialManager` for guided mission flow

### File structure impact
```
src/
  parts/
    ProceduralTank.ts
    ProceduralEngine.ts
  flight/
    LifeSupport.ts
    HazardSystem.ts
  challenges/
    ChallengeManager.ts
    ChallengeValidator.ts
  tutorials/
    TutorialManager.ts
    missionFlows/
      gettingOffTheGround.ts
      orbitInsertion.ts
      rendezvous.ts
      interplanetary.ts
```

---

## 6. Implementation Order

1. **Procedural tank** — most impactful, enables creative building
2. **Procedural engine** — core of engineering gameplay
3. **Tutorial system** — teaches the above two
4. **Tech tree + science** — gives progression meaning
5. **Life support** — first survival layer
6. **Reliability + failures** — stakes for engineering choices
7. **Weekly challenges** — competitive replayability
8. **Environmental hazards** — endgame depth

---

## 7. Open Questions
- One kerbal or crew names with personalities?
- Real Earth vs scaled-down Kerbin-like system?
- Cost/money mechanic alongside science?
- Mod support for custom procedural algorithms?
