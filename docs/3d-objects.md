# Ellipse — 3D Objects Specification

> **Версия:** 1.0
> **Дата:** 2026-06-27
> **Источник:** анализ 39 скриншотов из `screenshots/` + game design spec §4

---

## 0. Subject

Все 3D-объекты в игре Ellipse: ракеты (детали + сборки), планеты, поверхности, станции, частицы.

---

## 1. Стиль (Visual direction)

**Анализ существующих 3D-моделей (по скриншотам):**

- **Ракеты:** low-poly геометрические (цилиндры, конусы, сферы), слегка стилизованные
  - Корпус: белый + оранжевый + синий/чёрный
  - Боковые бустеры: белые сегментированные
  - Двигатели: чёрные/серые
  - Обтекатель: белый с тёмным кончиком
- **Планеты:** реалистичные текстуры (Earth, Mars с горами), low-poly для других
- **Поверхности:** простые (плоскость с текстурой), launch pad с жёлтой разметкой
- **VAB:** тёмно-синий сетчатый фон, реалистичное освещение

**Решение: «стилизованный реализм»** (как Juno: New Origins / SimpleRockets).

**Характеристики:**
- PBR materials (metalness, roughness)
- DirectionalLight (Солнце) + ambient (0.1) + slight rim light
- Shadows от солнца
- LOD (low poly на расстоянии, high poly близко)
- Frustum culling
- No bloom (subtle, только на солнце/звёздах)
- No SSAO/SSR (overkill для mobile)

---

## 2. Pipeline

### 2.1. Архитектура генерации

> В каталоге ~80 деталей. Создавать 80 уникальных mesh-файлов — непрактично. Решение: **процедурная генерация** через Three.js primitives.

```
partConfig (JSON) → PartMeshBuilder (Three.js) → InstancedMesh / Mesh
```

**Преимущества:**
- 1 код = 80 деталей
- Параметрические варианты (S/M/L — меняется `height`, `radius`)
- Low memory footprint
- Легко балансировать (поменять параметр — изменится везде)

**Когда не процедурно:**
- Капсула (сложная геометрия, окна, люки) — модель
- Планеты — модели с текстурами
- Лунная станция — модель
- Стартовый стол — модель

### 2.2. Формат файлов

| Тип | Формат | Где |
|---|---|---|
| Процедурные детали | — (Three.js primitives) | runtime |
| Капсулы, станции, уникальные | `glTF 2.0` (`.glb`) | `assets/models/` |
| Планеты | `glTF 2.0` (`.glb`) | `assets/models/planets/` |
| Текстуры | `KTX2` (compressed) | `assets/textures/` |

### 2.3. Размеры и оптимизация

- **Poly budget per part:** 500–2000 triangles
- **Planet:** 5000–10000 triangles (sphere с 64–128 segments)
- **Texture size:** 1024×1024 (mobile), 2048×2048 (desktop high)
- **Total draw calls:** < 200 (target 50–100)

---

## 3. Каталог 3D-объектов

### 3.1. Структурные детали (процедурные)

| Деталь | Геометрия | Параметры | Визуал |
|---|---|---|---|
| Адаптер S→M | `CylinderGeometry` | radiusDiff | Серый металл, резьба на стыке |
| Адаптер M→L | `CylinderGeometry` | radiusDiff | Серый металл |
| Адаптер L→XL | `CylinderGeometry` | radiusDiff | Серый металл |
| Service Module | `CylinderGeometry` | radius, height | Чёрный матовый + белые панели |
| Truss (ферма) | `BoxGeometry` × N | length, width | Серый, открытая структура |
| Radial ring | `TorusGeometry` | radius, segments | Чёрный металл |
| Cargo bay | `BoxGeometry` | length, width, height | Серый, створки видны |

### 3.2. Топливные баки (процедурные)

| Деталь | Геометрия | Параметры | Визуал |
|---|---|---|---|
| FL-T100…FL-T1600 | `CylinderGeometry` | radius, height, segments | Белый, оранжевые полосы |
| FT-Sphere | `SphereGeometry` (half) | radius | Белый |
| RT-Ring (боковой) | `TorusGeometry` | radius, tube | Белый/чёрный, сайд-маунт |

**Параметрическая база:**
```ts
tank = {
  type: 'cylinder' | 'sphere' | 'ring',
  size: 'XS' | 'S' | 'M' | 'L' | 'XL',
  fuelType: 'LFO' | 'LF' | 'LCH4',
  color: hex (default based on fuel)
}
```

### 3.3. Двигатели (процедурные)

| Деталь | Геометрия | Параметры | Визуал |
|---|---|---|---|
| ЖРД (Liquid) | `CylinderGeometry` (камера) + `ConeGeometry` (сопло) | thrust, size | Чёрный металл + silver nozzle |
| SRB | `CylinderGeometry` (корпус) | size | Серый/белый с логотипом |
| RCS | `BoxGeometry` × 4 | thrust | Чёрный, маленькие дюзы |

**Параметрическая база:**
```ts
engine = {
  type: 'liquid' | 'SRB' | 'RCS',
  size: 'XS' | 'S' | 'M' | 'L',
  fuelType?: 'LFO' | 'LF' | 'LCH4' | 'SRB',
  thrust, isp, mass
}
```

### 3.4. Капсулы (модели)

Уникальные модели для каждой капсулы (процедурно слишком ограничено):

| Модель | Файл | Триангуляция | Текстура |
|---|---|---|---|
| MK1 Pod | `capsule_mk1.glb` | ~1500 | 1024² |
| MK1-3 Command Pod | `capsule_mk1_3.glb` | ~2000 | 1024² |
| MK2 Adventure | `capsule_mk2.glb` | ~2000 | 1024² |
| MK3 Cruise Capsule | `capsule_mk3.glb` | ~3000 | 1024² |
| MK4 Colony Module | `capsule_mk4.glb` | ~4000 | 1024² |
| Probe Core | `capsule_probe.glb` | ~800 | 512² |
| Science Lab | `capsule_lab.glb` | ~3000 | 1024² |

**Состав капсулы (общий):**
- Цилиндрический корпус
- Окна (материал: `MeshStandardMaterial` с `transmission: 0.8` — стекло)
- Тепловой экран (низ, абляционная текстура)
- Двигатель (маленький, сзади)
- Парашютный отсек (сверху)
- Люки (внутри, для анимации)

### 3.5. Теплозащита (процедурные + материалы)

| Деталь | Геометрия | Материал |
|---|---|---|
| Nose Cone (5 размеров) | `LatheGeometry` (curve-based) | Чёрный/белый (PBR) |
| Heat Shield (4 размера) | `ConeGeometry` (blunt, inverted) | Аблятор: чёрный, roughness 0.9 |
| Fairing (4 размера) | `ConeGeometry` (clamshell split) | Белый снаружи, серый внутри |

**Nose cone profile:**
```ts
// Lathe profile: 0..1 → (radius, height)
function noseProfile(type, size) {
  // type: 'conical' | 'ogive' | 'blunt'
  // size: S | M | L | XL
  const points = [];
  // ... generate profile points based on type
  return points;
}
```

### 3.6. Парашюты (процедурные)

| Деталь | Геометрия | Визуал |
|---|---|---|
| Drogue (XS, S) | `ConeGeometry` (inverted, small) | Ткань (rough, alpha 0.95) |
| Main (S, M, L) | `ConeGeometry` (inverted, large) | Бело-красный (Radial pattern) |
| Hybrid (XL) | `ConeGeometry` + support struts | Бело-красный |

**Анимация:** при раскрытии — scale 0→1 за 0.5s (bounce easing).

### 3.7. Шасси (процедурные)

| Деталь | Геометрия | Визуал |
|---|---|---|
| LT-05 / LT-1 (3 опоры) | `BoxGeometry` × 3 + pivot | Серый металл |
| LT-2 / LT-3 (4 опоры) | `BoxGeometry` × 4 + pivot | Серый металл, гидравлика |

### 3.8. Сепараторы (процедурные)

| Деталь | Геометрия | Визуал |
|---|---|---|
| Decoupler (пиро) | `TorusGeometry` + bolt details | Серый |
| Separator (пневмо) | `CylinderGeometry` | Серый + цветной ring |

---

## 4. Планеты

### 4.1. Геометрия

Все планеты — `SphereGeometry` с разным количеством сегментов:

| Тип | Сегменты | Триангуляция |
|---|---|---|
| Star (Sun) | 96 | ~18000 |
| Террестриальные (Earth, Mars, Venus, Mercury) | 64 | ~8000 |
| Газовые гиганты (Jupiter, Saturn, Uranus, Neptune) | 48 | ~4500 |
| Карликовые (Pluto) | 32 | ~2000 |
| Moon | 32 | ~2000 |

### 4.2. Текстуры (KTX2)

| Планета | Diffuse (1024²) | Normal (512²) | Roughness (512²) | Особенности |
|---|---|---|---|---|
| Sun | emissive map (flares) | — | — | Анимированная поверхность, no shadows |
| Mercury | gray cratered | yes | rough | Кратеры видны |
| Venus | yellow-orange clouds | yes | smooth | Толстый облачный слой (alpha) |
| Earth | blue+green+white | yes | mixed | Атмосферный glow shader |
| Moon | gray cratered | yes | rough | Кратеры |
| Mars | red+gray | yes | rough | Горы, долины |
| Jupiter | bands | — | smooth | Bands анимированы (UV scroll) |
| Saturn | bands+yellow | — | smooth | Кольца (отдельный объект) |
| Uranus | cyan | — | smooth | Наклон оси (98°) |
| Neptune | dark blue | — | smooth | Большое тёмное пятно |
| Pluto | pink-gray | yes | rough | Сердцевидная область (Sputnik Planitia) |

**Источник текстур:** NASA Visible Earth, Solar System Scope (CC-BY 4.0), или генерируемые процедурно.

### 4.3. Атмосферный glow

Для планет с атмосферой (Earth, Venus, фаза 2 — Mars):

```glsl
// Custom shader на сфере большего радиуса
// Fresnel-based: ярче на границе (limb), прозрачнее к центру
gl_FragColor = vec4(atmoColor, fresnel * intensity);
```

Earth: голубой glow. Venus: оранжевый. Mars: красноватый.

### 4.4. Кольца (Saturn, Uranus)

- `RingGeometry` (отдельный объект, не на сфере)
- Текстура: bands (радиальный градиент)
- Альфа-blending для прозрачности
- Self-shadowing от солнца

### 4.5. Поверхность планет (landing)

При приближении к планете (altitude < 1000×radius):
- **Far:** гладкая сфера с текстурой
- **Medium:** добавляется detail (LOD bump)
- **Near (landing):** subdivided sphere + displacement (на основе текстуры heightmap)

Высотная карта: отдельный канал в текстуре (R-канал = height). Используется в vertex shader для displacement.

---

## 5. Звёзды

### 5.1. Фоновое поле

- `Points` (Three.js) с 5000–10000 вершин
- Размер: 1000 unit sphere (вокруг сцены)
- Размер точек: атрибут `size` (варьируется 1–3 px)
- Цвет: белый/слегка голубой
- Дополнительно: **Milky Way** (HDRI как background sphere) — фаза 2+

### 5.2. Star brightness

Звёзды слегка мерцают (sine wave на яркости):
```glsl
brightness = baseBrightness * (0.9 + 0.1 * sin(time * speed));
```

---

## 6. Лунная станция

### 6.1. Модель

`lunar_station.glb`, ~3000 треугольников, 1024² текстура.

**Состав:**
- Центральный цилиндр (жилой модуль) — белый/серый
- 4 радиальных модуля — серые
- 2 солнечные панели (раскладные) — тёмно-синие с жёлтыми ячейками
- 1 радиомачта (communications) — серый
- 1 стыковочный порт (фаза 2) — синий

**Анимации:**
- Солнечные панели: «трекинг» солнца (медленное вращение)
- Антенна: слежение за Землёй (медленное)
- Стыковочный порт: pulse при подлёте

---

## 7. Стартовый стол (Launch Pad)

### 7.1. Процедурный

```ts
launchPad = {
  base: BoxGeometry(20, 0.5, 20),  // concrete
  markings: ShapeGeometry(yellowStripes),
  tower: BoxGeometry(0.5, 30, 0.5),  // service tower
  // optional: water deluge system, lighting
}
```

**Текстура:** бетон (серый, procedural noise) + жёлтая разметка (сгенерирована).

---

## 8. Частицы

### 8.1. Engine exhaust

`Points` (или `Sprite` для 2D):

- Spawn rate: 200 particles/sec
- Lifetime: 0.5–1.5 sec
- Color: gradient от ядра (белый) → оранжевый → красный
- Size: уменьшается со временем
- Velocity: backward (от сопла), slight spread

### 8.2. Contrails (атмосфера)

В верхних слоях (15–30 км):

- За двигателем виден белый/серый конденсационный след
- Fades за 2–3 секунды
- Альфа-blend

### 8.3. Atmosphere particles (пыль при посадке)

- Spawn при касании поверхности
- Серо-коричневые частицы
- Поднимаются вверх, gravity их тянет вниз
- Fade за 1.5 сек

### 8.4. Meteors / debris

- Bright streak, быстро прочерчивает линию
- Particle trail

---

## 9. Освещение

### 9.1. Default сцена (полёт)

- **DirectionalLight** (Солнце) — strong, casts shadows
  - intensity 1.5
  - color: `#FFF5E0` (warm white)
  - shadow.mapSize 2048×2048
  - shadow.camera frustum tight (для производительности)
- **AmbientLight** — слабый fill
  - intensity 0.15
  - color: `#3A4055` (cool dark blue)
- **HemisphereLight** (опционально) — для неосвещённых сторон
  - skyColor: `#1A1F2E`, groundColor: `#000000`, intensity 0.3

### 9.2. VAB (сборка)

- **DirectionalLight** (сверху-сбоку, как в студии)
  - intensity 1.0
  - color: white
  - cast shadows
- **AmbientLight** (равномерный)
  - intensity 0.5

### 9.3. Planet surface (landing)

- **DirectionalLight** (Солнце)
- **PointLight** (от ракеты, optional)
- **AmbientLight** (для теневых сторон)

---

## 10. Постпроцесс (subtle)

### 10.1. Bloom (только на ярких объектах)

- threshold: 0.9
- strength: 0.3
- radius: 0.5
- Применяется: солнце, яркая планета, flare glow

### 10.2. Tone mapping

- `ACESFilmicToneMapping`
- exposure: 1.0

### 10.3. Color space

- `THREE.SRGBColorSpace` для текстур
- `LinearSRGBColorSpace` для шейдеров

---

## 11. Файловая структура

```
assets/
  models/
    capsules/
      capsule_mk1.glb
      capsule_mk1_3.glb
      capsule_mk2.glb
      capsule_mk3.glb
      capsule_mk4.glb
      capsule_probe.glb
      capsule_lab.glb
    planets/
      sun.glb
      mercury.glb
      venus.glb
      earth.glb
      moon.glb
      mars.glb
      jupiter.glb
      saturn.glb
      saturn_rings.glb
      uranus.glb
      neptune.glb
      pluto.glb
    stations/
      lunar_station.glb
    structures/
      launchpad.glb
  textures/
    planets/
      earth_diffuse.ktx2
      earth_normal.ktx2
      earth_specular.ktx2
      earth_clouds.ktx2
      # ...
  shaders/
    atmosphere.glsl
    ring.glsl
    particle_engine.glsl
    sky_dome.glsl  (atmospheric scattering)
src/
  builders/
    partBuilder.ts         // параметрическая генерация деталей
    planetBuilder.ts       // setup планет
    particleBuilder.ts     // системы частиц
  scenes/
    vabScene.ts
    flightScene.ts
    mapScene.ts
```

---

## 12. Чеклист качества (per part)

Каждая деталь (модель) должна пройти:

- [ ] `< 2000` треугольников (capsule исключение, до 4000)
- [ ] `< 1024²` текстура
- [ ] PBR materials (metalness, roughness, normal)
- [ ] Casts shadows (если solid)
- [ ] Receives shadows
- [ ] Frustum culling works
- [ ] LOD готов (low/mid/high варианты)
- [ ] InstancedMesh если возможно (детали одного типа)

---

## 13. Процедурная генерация деталей — пример

```typescript
// partBuilder.ts
import * as THREE from 'three';

export type PartSpec = {
  type: 'tank' | 'engine' | 'nose' | 'adapter' | 'parachute' | 'legs' | 'separator';
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  // ... параметры
};

export function buildPart(spec: PartSpec): THREE.Mesh {
  switch (spec.type) {
    case 'tank':
      return buildTank(spec);
    case 'engine':
      return buildEngine(spec);
    // ...
  }
}

function buildTank(spec): THREE.Mesh {
  const dims = TANK_DIMS[spec.size]; // {radius, height}
  const geom = new THREE.CylinderGeometry(
    dims.radius, dims.radius, dims.height, 24
  );
  const mat = new THREE.MeshStandardMaterial({
    color: getColorForFuel(spec.fuelType),
    metalness: 0.3,
    roughness: 0.6,
  });
  return new THREE.Mesh(geom, mat);
}
```

Такой подход позволяет:
- 1 файл `partBuilder.ts` = 80 деталей
- Параметрические варианты (S/M/L)
- Лёгкий баланс (изменить формулу — обновится всё)
- GPU instancing для одинаковых деталей (например, 3 одинаковых бака)

---

## 14. Self-review (per frontend-design skill)

| Default AI choice | Мой выбор | Уникально? |
|---|---|---|
| Generic sphere для всех планет | Специфичные текстуры + glow per planet | ✅ |
| Photorealistic только | Stylized realism (procedural + low-poly) | ✅ |
| Все детали как модели | Процедурные для повторяющихся, модели для уникальных | ✅ |
| 1 гигантский texture | KTX2 compressed, 1024² max, LOD | ✅ |
| Bloom всё подряд | Только sun и bright glow | ✅ |

---

*Конец 3D-objects spec. Эти две спецификации (design-system + 3d-objects) + game-design-spec формируют полный набор документации проекта Ellipse.*
