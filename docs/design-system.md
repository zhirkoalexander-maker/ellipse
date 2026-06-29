# Ellipse Design System

> Based on analysis of 39 reference screenshots + Juno: New Origins aesthetic.

## Visual Identity

**"Clean Technical"** — flat dark panels with golden warmth. Think mission control at night. Not photorealistic, not cartoon. Technical, legible, intentional.

## Color Palette

### Space Environment
| Token | Value | Usage |
|-------|-------|-------|
| `--space-deep` | `#060814` | Page background |
| `--space-bg` | `#0D0D0D` | Dark UI surfaces |
| `--nebula` | `#2A1A3A` | Subtle purple accent |

### Panels (dominant: 41% of UI)
| Token | Value | Usage |
|-------|-------|-------|
| `--panel-bg` | `#242831` | Cards, panels, menus |
| `--panel-border` | `#3A4055` | Borders, separators |
| `--panel-elevated` | `#2E333A` | Hover/active surfaces |

### Text
| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#F4F5F2` | Body, HUD readouts |
| `--text-secondary` | `#9DA3B5` | Labels, secondary info |
| `--text-muted` | `#5C6275` | Placeholder, captions |

### Accents
| Token | Value | Usage |
|-------|-------|-------|
| `--accent-gold` | `#EACD9E` | Primary CTA, fuel, gold accents |
| `--accent-blue` | `#145181` | Engine glow, nav markers, info |
| `--success` | `#7CFFB2` | Green (landed, good) |
| `--warning` | `#FFC857` | Gold/amber (max Q, caution) |
| `--danger` | `#FF3D5A` | Red (crash, critical) |

## Typography

| Role | Font | Weight | Size | Usage |
|------|------|--------|------|-------|
| **Display** | Space Grotesk | 700 | — | Mission titles, big numbers |
| **Body** | Inter | 400/500 | 13–14px | Buttons, labels, panels |
| **Data** | JetBrains Mono | 500 | 12–22px | HUD telemetry, speed, alt |
| **Caption** | Inter | 400 | 10px | Unit labels, hints |

## Component Style

### Buttons
- Rectangular, flat, no gradient
- Border: `1px solid var(--panel-border)`
- Hover: subtly lighter background
- Active: `scale(0.97)`
- **Primary**: gold background (`#EACD9E`), dark text
- **Secondary**: blue border, blue text
- **Ghost**: no border/bg, shows on hover

### Panels
- Background: `#242831`
- Border: `1px solid #3A4055`
- Radius: 10px (large panels), 6px (buttons)
- No box shadow by default

### HUD
- Semi-transparent dark overlay (`rgba(13,13,13,0.85)`)
- Subtle blur backdrop
- Data in JetBrains Mono, tabular-nums
- Labels in Inter, small, uppercase, muted

### Data Bars (fuel, throttle)
- 6px height track
- Rounded fill
- Gold for fuel, blue for throttle, red for danger

## Signature Element

The **Orbital Ellipse** — a thin, golden elliptical ring used as:
- Loading indicator (spinning ellipse)
- Decorative border on panels
- Achievement badge frame

## CSS Architecture

```
styles/
  tokens.css      # CSS custom properties (colors, spacing, radius)
  typography.css   # Fonts, text styles, scrollbar, focus
  components.css   # Buttons, panels, inputs, HUD, toast, bars
```

All UI uses CSS variables from `tokens.css`. No hardcoded colors.
