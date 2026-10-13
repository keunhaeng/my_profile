---
name: Modern Technical Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#585f67'
  on-secondary: '#ffffff'
  secondary-container: '#dce3ec'
  on-secondary-container: '#5e656d'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce3ec'
  secondary-fixed-dim: '#c0c7d0'
  on-secondary-fixed: '#151c23'
  on-secondary-fixed-variant: '#40484f'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies a modern, technical, and precision-driven digital identity. Tailored for software engineers, product designers, and technology leaders, it combines the restraint of contemporary editorial design with the rigor of modern developer tooling interfaces.

The visual style merges structured minimalism with subtle ambient depth. It prioritizes generous whitespace, razor-sharp type hierarchy, and surgical pops of tech-forward cobalt blue against pristine white and cool slate-tinted surfaces. The atmosphere is confident, uncluttered, and unmistakably professional—letting work artifacts and projects take center stage without visual noise.

## Colors

The palette relies on a clinical white-and-slate ground system energized by a concentrated blue spectrum:

- **Canvas & Surfaces:**
  - Base Background: `#FFFFFF`
  - Subtle Section Fill: `#F8FAFC` (Slate-50)
  - Card/Container Surface: `#FFFFFF`
  - Subtle Borders & Dividers: `#E2E8F0` (Slate-200)

- **Typography & Neutrals:**
  - High-Contrast Primary Text: `#0F172A` (Slate-900)
  - Secondary Body & Labels: `#475569` (Slate-600)
  - Muted Captions & Placeholders: `#94A3B8` (Slate-400)

- **Tech Blue Accent System:**
  - Primary Interactive: `#2563EB` (Blue-600)
  - Hover / Active State: `#1D4ED8` (Blue-700)
  - Focus Ring & Glow: `#3B82F6` (Blue-500)
  - Soft Tint / Surface Highlight: `#EFF6FF` (Blue-50)

## Typography

The typography leverages `Inter` across all text tiers to achieve an objective, cohesive, and modern feel. Optical character spacing scales inversely with size: larger display headings use tight negative tracking (`-0.03em`) for structural density, while metadata and tags feature neutral or slightly expanded tracking for scannability.

Leading is tuned generously on long-form content (`body-lg` at 1.55x ratio) to ensure comfortable readability across technical project write-ups and case studies.

## Layout & Spacing

The layout is built on a responsive 12-column fixed-max grid capped at 1200px container width for standard viewports, with a narrower 768px reading column for editorial and case study bodies.

- **Breakpoints & Grids:**
  - **Desktop (1024px+):** 12 columns, 24px (`gutter`), 32px to 64px (`margin`).
  - **Tablet (768px – 1023px):** 8 columns, 20px (`gutter`), 24px (`margin`).
  - **Mobile (< 768px):** 4 columns, 16px (`gutter-mobile`), 16px (`margin-mobile`).

Vertical layout rhythm relies on standard section clearances (`space-2xl` on mobile, `space-3xl` on desktop) to preserve significant white space around key narrative points.

## Elevation & Depth

Visual hierarchy is maintained through subtle, low-opacity ambient shadows paired with razor-thin structural borders (`1px solid #E2E8F0`). High-elevation shadows are deliberately avoided to maintain a lightweight, planar modernism.

- **Level 0 (Flat Canvas):** No shadow. `#FFFFFF` or `#F8FAFC`.
- **Level 1 (Card & Content Container):** `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04);` with a border of `1px solid #E2E8F0`.
- **Level 2 (Hovered Card & Dropdowns):** `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.03);` with border transition to `#CBD5E1`.
- **Navigation Bar (Floating / Fixed):** Uses frosted glass surface layering: `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(226, 232, 240, 0.8);`.

## Shapes

The design system employs a **Rounded** shape language (`roundedness: 2`). Standard controls, interactive elements, and input fields receive `0.5rem` (8px) border radius. Larger structural containers and project cards scale to `0.75rem` - `1rem` (12px - 16px) radius, balancing software precision with organic warmth. Pill shapes (`9999px`) are strictly reserved for status badges and categorical chips.

## Components

### Buttons
- **Primary:** Filled `#2563EB`, text `#FFFFFF`, font-weight 500, height 40px (desktop) / 44px (touch). Hover background shifts to `#1D4ED8`. Focus indicator is a 2px offset ring in `#3B82F6`.
- **Secondary / Outline:** Background `#FFFFFF`, border `1px solid #E2E8F0`, text `#0F172A`. Hover transitions background to `#F8FAFC` and border to `#CBD5E1`.
- **Ghost:** Transparent background, text `#475569`, padding inline `space-sm`. Hover introduces `#EFF6FF` background with `#2563EB` text.

### Navigation Bar
- Positioned sticky or floating at the top with a z-index of 50.
- Translucent backdrop blur (`backdrop-filter: blur(12px)`) over `#FFFFFF` at 85% opacity.
- Links utilize `label-md` with `#475569` base color, transitioning to `#0F172A` on hover, with a subtle 2px active pill or indicator. Includes an integrated CTA on the right rail.

### Project & Portfolio Cards
- Constructed with `#FFFFFF` background, `1px solid #E2E8F0`, and `rounded-lg` (16px).
- Image media containers feature an internal 16:9 or 4:3 aspect ratio, subtle inset border, and smooth scale transitions (`scale(1.02)`) on parent hover.
- Card padding defaults to `space-lg` (24px). Hover lifts the card with Level 2 elevation and dynamic border lightening.

### Chips & Badges
- **Skill / Tech Stack Chips:** Subtle style with `#EFF6FF` background, `#1D4ED8` text, `label-sm` typography, and pill radius (`9999px`).
- **Status Indicators (e.g., "Available for work"):** Features a miniature 6px pulsing dot in emerald green or tech blue paired with a soft background badge.

### Form Inputs & Textareas
- Base height 42px, padding `0 12px`, background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`.
- Active focus state: border shifts to `#2563EB` accompanied by a `3px` focus ring in `rgba(37, 99, 235, 0.15)`.

### Lists & Timelines (Experience / Career)
- Left-aligned chronological spine using a `1px` continuous rule in `#E2E8F0`.
- Milestone nodes highlighted with small circular markers containing `#2563EB` centers.