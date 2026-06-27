# Ellipse — Design System

> **Версия:** 1.0
> **Дата:** 2026-06-27
> **Применение:** все UI-экраны, 3D-объекты, маркетинговые материалы
> **Источник:** анализ 39 скриншотов из `screenshots/`

---

## 0. Subject и thesis

**Subject:** мобильная 3D-игра про полёты в Солнечной системе, где ты собираешь ракету, летишь к планетам и садишься на них.

**Thesis:** *«Суровая, честная космонавтика на ладони»* — игра ощущается как **инструмент**, а не как **развлечение**. Каждый пиксель говорит: «ты в космосе, и космос не прощает ошибок».

**Аудитория:** 12+, фанаты KSP / SimpleRockets, любители орбитальной механики.

**Single job of the UI:** дать игроку управление ракетой и информацию о её состоянии — не отвлекая от полёта.

---

## 1. Анализ существующего дизайна (по скриншотам)

### Что уже хорошо
- **Консистентный dark mode** — везде, в полёте, в сборке, в меню
- **Чёткие цветовые коды:**
  - Синий = основное действие / активное состояние (`Settings`, `PLAY`, выбранная деталь)
  - Оранжевый = внимание / активный процесс (пламя, активная ступень, активная панель)
  - Красный = опасность / деструктивное / цель
  - Зелёный = успех (отстрел ступени)
- **Реалистичные 3D-модели** ракет и планет
- **Мобильно-оптимизированный UI** — большие кнопки, чёткие иконки

### Что можно улучшить (per frontend-design skill)
- ❌ Типографика — generic iOS sans-serif (SF Pro)
- ❌ Палитра — «тёмный фон + синий + оранжевый» — стандартная комбинация
- ❌ Layout — стандартный iOS (rounded buttons, top/bottom bars)
- ❌ Нет signature-элемента, который делает Ellipse узнаваемой
- ❌ Wordmark «ELLIPSE» — стандартный sans, не выделяется

---

## 2. Brand identity

### 2.1. Название и логотип

**ELLIPSE** — название остаётся.

**Wordmark** — заменяем на кастомную конструкцию:

```
   ╔══════╗
  ╔╝  ◯   ╚╗       ← tilted ellipse through the "E"
  ║         ║
  ╚═══════╝
  E L L I P S E
```

- **Шрифт:** кастомный геометрический sans (Space Grotesk Bold или собственный)
- **Letter-spacing:** расширенный (+0.1em) для космического ощущения
- **Модификатор:** tilted ellipse проходит через слово как орбитальный путь
- **Цвет:** `#E8EAF0` (Starshine) на тёмном фоне

### 2.2. Signature element: Orbital Path

> Уникальная визуальная подпись бренда — **наклонный эллипс**, проходящий через ключевые элементы UI.

**Применения:**
- **Loading:** эллипс рисуется по экрану, как орбита планеты
- **Progress bar (fuel, time-warp):** вертикальная шкала в форме наклонного эллипса
- **Brand mark:** в логотипе
- **Trajectory predictor:** пунктирный эллипс в 3D-сцене (уже есть — но усилить)
- **Achievement unlock:** эллипс «захлопывается» вокруг ачивки

**Почему это работает:**
- Напрямую связано с названием (ellipse = орбита = Kepler)
- Уникально (не generic космический «звёзды и ракеты»)
- Масштабируется — от иконки до заставки

---

## 3. Цветовая палитра

### 3.1. Основные цвета

| Token | Hex | Использование |
|---|---|---|
| `--space-deep` | `#0A0E1A` | Главный фон (полёт, карта) |
| `--space-hangar` | `#1A1F2E` | Фон VAB / сцена сборки |
| `--space-panel` | `#252B3D` | UI-панели, кнопки |
| `--space-elevated` | `#323849` | Активная панель, hover |
| `--starshine` | `#E8EAF0` | Основной текст |
| `--stardust` | `#9DA3B5` | Вторичный текст |
| `--stardim` | `#5C6275` | Отключённый, плейсхолдеры |

### 3.2. Акценты

| Token | Hex | Использование |
|---|---|---|
| `--flare` | `#FF6B1A` | **Primary accent** — пламя, активная тяга, кнопка «Launch» |
| `--flare-soft` | `#FFAA66` | Hover/pressed states |
| `--flare-glow` | `#FFD9A0` | Подсветка огня, glow |
| `--plasma` | `#4FC3F7` | Secondary — выбранная деталь, prograde, info |
| `--plasma-deep` | `#1976D2` | Pressed plasma, активная кнопка |
| `--red-giant` | `#FF3D5A` | Destructive, target marker, danger |
| `--green-cosmic` | `#7CFFB2` | Success, «Stage separated», OK |
| `--gold-solar` | `#FFC857` | Highlights, fuel 100%, «you are at goal» |

### 3.3. Семантические токены

| Token | Значение | Применение |
|---|---|---|
| `--color-primary` | `var(--flare)` | Главные кнопки (Launch, Save, Confirm) |
| `--color-primary-hover` | `var(--flare-soft)` | Hover |
| `--color-primary-pressed` | `#E04E00` | Pressed |
| `--color-secondary` | `var(--plasma)` | Информационные кнопки (Map, Settings) |
| `--color-danger` | `var(--red-giant)` | Удаление, abort, danger zones |
| `--color-success` | `var(--green-cosmic)` | Успех, stage sep, mission complete |
| `--color-warning` | `var(--gold-solar)` | Внимание, Max Q, low fuel |
| `--color-text` | `var(--starshine)` | Текст |
| `--color-text-muted` | `var(--stardust)` | Подписи, вторичный |
| `--color-text-disabled` | `var(--stardim)` | Отключённый |
| `--color-bg` | `var(--space-deep)` | Фон |
| `--color-bg-panel` | `var(--space-panel)` | Карточки, модалки |
| `--color-border` | `#3A4055` | Границы, разделители |
| `--color-border-focus` | `var(--plasma)` | Focused |

### 3.4. Прозрачности

| Token | RGBA | Применение |
|---|---|---|
| `--overlay-50` | `rgba(10, 14, 26, 0.5)` | Модальный backdrop |
| `--overlay-70` | `rgba(10, 14, 26, 0.7)` | Heavy overlay |
| `--glow-flare` | `rgba(255, 107, 26, 0.4)` | Glow пламени |
| `--glow-plasma` | `rgba(79, 195, 247, 0.4)` | Glow plasma |
| `--shadow-panel` | `rgba(0, 0, 0, 0.4)` | Тень панели |

---

## 4. Типографика

### 4.1. Шрифты (free, Google Fonts)

| Роль | Шрифт | Использование |
|---|---|---|
| **Display** | `Space Grotesk` (500, 700) | «ELLIPSE» wordmark, заголовки экранов, mission titles |
| **Body** | `Inter` (400, 500, 600) | Основной текст, кнопки, подписи |
| **Data** | `JetBrains Mono` (400, 500) | Числа в HUD (speed, altitude, fuel %), технические данные |
| **Caption** | `Inter` (300) | Мелкие подписи, тултипы |

> **Зачем разные шрифты:**
> - Space Grotesk — характерный, геометрический, слегка «футуристичный», но не generic sci-fi
> - Inter — нейтральный, отлично читается на маленьких экранах
> - JetBrains Mono — фиксированная ширина для чисел (speed/altitude не «прыгают» при обновлении)

### 4.2. Шкала

| Token | size / line-height | Использование |
|---|---|---|
| `--text-display-xl` | `48px / 56px` | Wordmark ELLIPSE |
| `--text-display-lg` | `36px / 44px` | Заголовки экранов |
| `--text-display-md` | `28px / 36px` | Mission titles |
| `--text-h1` | `24px / 32px` | Section headers |
| `--text-h2` | `20px / 28px` | Sub-headers |
| `--text-body-lg` | `18px / 26px` | Body large |
| `--text-body` | `15px / 22px` | Body default |
| `--text-body-sm` | `13px / 18px` | Body small |
| `--text-caption` | `11px / 16px` | Captions, тултипы |
| `--text-data-lg` | `36px / 40px (mono)` | Big numbers (speed m/s) |
| `--text-data-md` | `24px / 28px (mono)` | Medium numbers |
| `--text-data-sm` | `14px / 18px (mono)` | Small numbers, units |

### 4.3. Letter-spacing

| Контекст | Значение |
|---|---|
| Display (XL) | `+0.05em` |
| Headings (H1, H2) | `+0.02em` |
| Body | `0` |
| Captions | `+0.05em` (uppercase) |
| Data | `0` (mono по умолчанию) |

### 4.4. Текстовые стили

```css
.text-display {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.5;
}

.text-data {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-variant-numeric: tabular-nums; /* цифры одной ширины */
}
```

---

## 5. Spacing

| Token | px | Использование |
|---|---|---|
| `--space-1` | 4 | Минимальный отступ, icon padding |
| `--space-2` | 8 | Между элементами в группе |
| `--space-3` | 12 | Между связанными группами |
| `--space-4` | 16 | Padding панелей |
| `--space-5` | 24 | Между секциями |
| `--space-6` | 32 | Большие отступы |
| `--space-8` | 48 | Margins между экранами |
| `--space-12` | 64 | Секционные разделители |

**Базовый шаг:** 4px (все spacing кратны 4).

---

## 6. Borders & Shapes

| Token | Значение | Применение |
|---|---|---|
| `--radius-sm` | `4px` | Inputs, маленькие кнопки |
| `--radius-md` | `8px` | Кнопки, карточки |
| `--radius-lg` | `12px` | Панели, модалки |
| `--radius-xl` | `16px` | Большие панели |
| `--radius-full` | `9999px` | Pills, circular icons |
| `--border-thin` | `1px solid var(--color-border)` | Разделители |
| `--border-focus` | `2px solid var(--color-border-focus)` | Focused state |

> **Скруглённые vs острые:** существующий дизайн — сильно скруглённый. Подтверждаем это, но не делаем всё pills. Кнопки — `8px`, большие панели — `12px`, иконки — `full`.

---

## 7. Тени

| Token | CSS | Применение |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Inputs |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` | Кнопки, карточки |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.5)` | Модалки |
| `--shadow-glow-flare` | `0 0 16px var(--glow-flare)` | Активная кнопка Launch |
| `--shadow-glow-plasma` | `0 0 12px var(--glow-plasma)` | Focused state |

---

## 8. Компоненты

### 8.1. Кнопки

| Тип | Использование | Стиль |
|---|---|---|
| **Primary** | Launch, Save, Confirm | bg `--color-primary`, glow shadow |
| **Secondary** | Map, Settings | bg `--color-secondary`, plasma border |
| **Tertiary** | Cancel, Back | bg transparent, border `--color-border` |
| **Danger** | Abort, Delete, Reset | bg `--color-danger` |
| **Icon** | Icon-only, 44×44px min | round (full) или square (8px) |

**Размеры:** S (36px), M (44px), L (52px), XL (60px).

**Стиль:**
- Border-radius: `--radius-md`
- Font: 15px Inter SemiBold
- Text-transform: uppercase (для primary), normal (для остальных)
- Letter-spacing: +0.02em
- Active state: scale(0.97) + brighter shadow

### 8.2. Иконки

| Набор | Стиль | Где |
|---|---|---|
| **UI icons** | 24px, line, 1.5px stroke | Кнопки, меню |
| **HUD icons** | 20px, solid | В полёте (Speed, Height, Angle) |
| **Mission icons** | 32px, duotone | Mission select |

**Иконки:** использовать **Phosphor Icons** (open-source) или **Lucide** (open-source) — оба с хорошим mobile-friendly набором.

**Стиль иконок:** **line** (контурные), 1.5px stroke, скруглённые концы. Контраст с уже solid-иконками в существующем дизайне, но лучше для mobile.

### 8.3. Панели

| Тип | Стиль |
|---|---|
| **Info panel** | bg `--color-bg-panel`, border `--color-border`, radius `--radius-lg` |
| **Modal** | backdrop `--overlay-70`, panel bg `--color-bg-panel`, shadow `--shadow-lg` |
| **Toast** | bg `--color-bg-elevated`, slide-in from top, 2-3 sec |

### 8.4. Input

- bg `--color-bg-panel`
- border `1px var(--color-border)`
- focus: border `2px var(--color-border-focus)`, glow
- placeholder: `--color-text-disabled`
- font: Inter 15px

### 8.5. Progress bar (fuel, time-warp)

- **Track:** rounded, bg `--color-bg-panel`
- **Fill:** gradient `var(--flare) → var(--gold-solar)` (100% → 0%)
- **Низкий уровень (< 20%):** fill становится `var(--red-giant)` + pulse
- **Вертикальная версия (throttle):** height заполнена снизу вверх

### 8.6. Mission card

- bg `--color-bg-panel`
- left border (4px) — `--color-plasma` для текущей, `--color-success` для completed, `--color-text-disabled` для locked
- Mission number крупно (Display), title (H2), description (body)
- Reward (cosmetic): small icon top-right

---

## 9. Анимации

### 9.1. Длительности

| Token | Значение | Применение |
|---|---|---|
| `--dur-instant` | `50ms` | Hover, tooltips |
| `--dur-fast` | `150ms` | Buttons, fades |
| `--dur-normal` | `250ms` | Modals, panels |
| `--dur-slow` | `400ms` | Page transitions, big reveals |

### 9.2. Easing

- **Стандарт:** `cubic-bezier(0.4, 0.0, 0.2, 1)` (Material standard)
- **Вход:** `cubic-bezier(0.0, 0.0, 0.2, 1)` (decelerate)
- **Выход:** `cubic-bezier(0.4, 0.0, 1, 1)` (accelerate)
- **Bounce:** `cubic-bezier(0.68, -0.55, 0.27, 1.55)` (для ачивок, success states)

### 9.3. Конкретные анимации

- **Loading:** orbital ellipse рисуется (stroke-dasharray) за 1.2s, loop
- **Button press:** scale(0.97) + brighter glow, 100ms
- **Page enter:** slide from right + fade, 250ms
- **Achievement unlock:** ellipse «захлопывается» вокруг иконки, 600ms bounce
- **Mission select:** orbit around selected card, 300ms
- **Toast:** slide down from top, 250ms

---

## 10. Sound design (UI sounds)

| Звук | Длительность | Описание |
|---|---|---|
| Button click | 30ms | Короткий tick, high-frequency |
| Stage sep | 800ms | Mechanical thunk + echo |
| Mission complete | 1.5s | Triumphant chord, brass |
| Achievement | 600ms | Bell-like ding + chord |
| Alert (low fuel) | loop | Soft beeping, 1Hz |
| Map open | 400ms | Whoosh, spatial |

---

## 11. Accessibility

- **Color contrast:** все текст/фон пары ≥ 4.5:1 (WCAG AA)
- **Touch targets:** минимум 44×44px (Apple HIG)
- **Reduced motion:** respect `prefers-reduced-motion` — отключать все анимации
- **Focus visible:** clear focus ring, 2px plasma
- **Color-blind:** не полагаться только на цвет — использовать иконки, текст, форму

---

## 12. Сводка signature-элементов (the bold risk)

**Риск, на который я иду:**

> **Orbital Ellipse** — наклонный эллипс как декоративный и функциональный элемент **везде**: в wordmark, в loading, в progress bars (вертикальный «эллипс-заполнение» для топлива), в achievement unlock анимации, в trajectory predictor.

**Почему это работает для Ellipse:**
- Прямая связь с названием (orbit = ellipse = Kepler)
- Уникально (не generic sci-fi с ракетами и звёздами)
- Масштабируется: иконка 16px, и логотип 200px — один и тот же мотив
- Функционально: orbital indicator для fuel/warp — не только декоративно, но и читаемо

**Возможный откат:** если signature-элемент не сработает, остальной дизайн (палитра + типографика + spacing) уже сильный — можно заменить только форму, не всю систему.

---

## 13. Чеклист self-review (per frontend-design skill)

> Проверяю свой план против generic AI defaults:

| Generic AI default | Мой выбор | Уникально? |
|---|---|---|
| Cream + serif + terracotta | Dark + Space Grotesk + orange | ✅ Нет |
| Black + acid green | Black + warm orange + plasma | ✅ Нет |
| Broadsheet + hairline rules | Mobile UI + 12px radius | ✅ Нет |
| iOS SF Pro default | Space Grotesk + Inter + JetBrains Mono | ✅ Нет |
| Standard wordmark | Tilted orbital ellipse | ✅ Нет |

**Проверка:** если бы я применил тот же план к другому космическому проекту (например, «Mars Explorer»), получилось бы иначе? Да — потому что выбор **tilted ellipse** как signature специфичен для Ellipse.

---

## 14. Файлы (для разработчиков)

```
src/
  styles/
    tokens.css       /* все CSS-переменные из §3, §4, §5, §6, §7 */
    typography.css   /* text-* стили */
    components.css   /* button, panel, toast, progress */
  fonts/
    SpaceGrotesk-Bold.woff2
    Inter-Regular.woff2
    Inter-SemiBold.woff2
    JetBrainsMono-Medium.woff2
  assets/
    logo.svg         /* ELLIPSE wordmark */
    icons/           /* Phosphor/Lucide иконки */
```

**Шрифты подключать через `<link rel="preload">`** для быстрой загрузки.

---

*Конец design system. Дальше: docs/3d-objects.md — спецификация 3D-моделей.*
