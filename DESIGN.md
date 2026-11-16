---
name: Useful Video Courses
description: A hand-picked list of security courses, hung like an exhibition on a gallery wall with an object label under each cover.
colors:
  wall: '#f4f4f2'
  ink: '#141414'
  quiet: '#595954'
  rule: '#d9d9d4'
  mark: '#c8321e'
  wall-night: '#151514'
  ink-night: '#ecece8'
  quiet-night: '#a3a39c'
  rule-night: '#34342f'
  mark-night: '#ee6a52'
  tone-fundamentals: '#2f4858'
  tone-networking: '#1f4e5f'
  tone-firewalls: '#7a2e1f'
  tone-appsec: '#4a3a6b'
  tone-pentest: '#5a1f2e'
  tone-cloud: '#1d4f7a'
  tone-blue-team: '#1f5a43'
  tone-grc: '#5a4a1f'
  tone-automation: '#3d5a22'
  tone-ai-security: '#6a2f5a'
typography:
  display:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: 'clamp(3rem, 8.4vw, 6rem)'
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: '-0.04em'
  plate:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: 'clamp(1.5rem, 2.3vw, 2.4rem)'
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  title:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: '1.1875rem'
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: '-0.015em'
  headline:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 800
    lineHeight: 1.55
    letterSpacing: '-0.015em'
  wall-text:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.55
  link:
    fontFamily: 'Hanken Grotesk Variable, system-ui, sans-serif'
    fontSize: '0.95rem'
    fontWeight: 700
    lineHeight: 1.55
rounded:
  none: '0px'
  dot: '50%'
spacing:
  gutter: 'clamp(16px, 4vw, 56px)'
  label-gap: '18px'
  wall-row: 'clamp(36px, 5vw, 64px)'
  wall-column: 'clamp(20px, 2.4vw, 32px)'
  max-width: '90rem'
components:
  cover:
    backgroundColor: '{colors.tone-fundamentals}'
    textColor: '#ffffff'
    rounded: '{rounded.none}'
    typography: '{typography.plate}'
    padding: 'clamp(14px, 2vw, 26px)'
  label-title:
    textColor: '{colors.ink}'
    typography: '{typography.title}'
  label-meta:
    textColor: '{colors.quiet}'
    typography: '{typography.label}'
  label-note:
    textColor: '{colors.ink}'
    typography: '{typography.body}'
  open-link:
    textColor: '{colors.ink}'
    typography: '{typography.link}'
  open-link-hover:
    textColor: '{colors.ink}'
  filters-select:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '4px 22px 4px 0'
  free-mark:
    backgroundColor: '{colors.mark}'
    rounded: '{rounded.dot}'
    size: '0.5em'
---

# Design System: Useful Video Courses

## Overview

**Creative North Star: "Parete di museo" (the gallery wall)**

The list is an exhibition one person curated. Covers hang on an off-white wall, each with a small object label beneath it: title, author, level, hours and price, then a short description. The page reads as wall text plus labels, not as a catalogue of cards. Type is a single grotesque (Hanken Grotesk Variable) pushed to heavy weight and tight tracking for display, and kept small and quiet for captions. The dark theme is the same room at night.

Density is airy at the top (a large two-line title beside an intro paragraph) and measured below (a three-column wall, two at tablet, one at phone). Depth is a soft contact shadow under each cover, as if hung, and nothing else. There is exactly one accent, a vermilion mark, used sparingly.

The build's stylesheet is the source of truth; where it differs from the original contract, the build wins and the differences are noted below.

**Key Characteristics:**

- Warm-neutral wall, near-black ink, one vermilion mark; hairline rules, no fills.
- Heavy grotesque display at very tight tracking; small quiet captions.
- Square covers (16:9, no radius) with a soft hung shadow that lifts 4px on hover or focus.
- Courses without a YouTube thumbnail get a typographic plate: the title set large on a deep tone chosen by the first topic.
- No chips, no filled buttons: the action is an underlined caption link with a small arrow.
- Self-hosted face only; nothing loads from another origin except YouTube thumbnails.

## Colors

A near-neutral wall and ink pair, one vermilion mark, and ten deep topic tones that appear only inside covers.

### Primary

- **Vermilion Mark** (#c8321e light, #ee6a52 dark): the single accent. Used as the focus ring (2px, 3px offset), text selection background, and the underline colour on link hover. Never a fill, a button or a heading colour.

### Neutral

- **Gallery Wall** (#f4f4f2 light, #151514 dark): page background; also the text colour on selection and skip link.
- **Gallery Ink** (#141414 light, #ecece8 dark): headlines, labels' title and note, links, the heavy rule above filters.
- **Quiet Caption** (#595954 light, #a3a39c dark): secondary text, nav links at rest, author line, topics, footer, scrollbar.
- **Hairline Rule** (#d9d9d4 light, #34342f dark): masthead and footer rules, lower filter border.

### Topic tones (cover plates)

- Fundamentals #2f4858, Networking #1f4e5f, Firewalls #7a2e1f, AppSec #4a3a6b, Pentest #5a1f2e, Cloud #1d4f7a, Blue team #1f5a43, GRC #5a4a1f, Automation #3d5a22, AI security #6a2f5a. Each cover takes the tone of the course's first topic. In dark mode the plate is mixed 18% toward white so it reads on the dark wall. White plate text sits on every tone.

### Named Rules

**The One Mark Rule.** Vermilion is a dot, a ring, a selection and a hover underline. It is never a surface, a button or a text colour.
**The Tone Stays In The Cover Rule.** Topic tones colour a cover plate and nothing else; they never reach chrome, links or text.

## Typography

**Display Font:** Hanken Grotesk Variable (self-hosted via @fontsource-variable, weight axis only), with system-ui and sans-serif fallbacks
**Body Font:** the same family
**Label/Mono Font:** none

**Character:** One grotesque in two registers: very heavy and tightly tracked for titles and plates, regular and small for caption data. The contrast of weight and size does the work that colour and chips would do elsewhere.

### Hierarchy

- **Display** (800, clamp(3rem, 8.4vw, 6rem), 0.95, -0.04em): page h1 on the list and About; balanced wrapping.
- **Plate** (800, clamp(1.5rem, 2.3vw, 2.4rem), 1.02, -0.035em): course title inside a typographic cover, bottom-left, white.
- **Title** (800, 1.1875rem, 1.25, -0.015em): course title in the object label.
- **Headline** (800, 1.25rem, -0.015em): About section headings.
- **Wall text** (400, 1.125rem, 1.55): the intro paragraph, max 34rem.
- **Body** (400, 1rem, 1.5): the short description, max 34rem; About prose at 65ch.
- **Label** (400, 0.875rem): author and platform, hours and price, topics, filters, count (tabular numerals). Level is the same size at 600 in ink.
- **Link** (700, 0.95rem, 2px underline): the "open the course" line.

### Named Rules

**The Weight Is The Hierarchy Rule.** Emphasis comes from weight 800 against 400 and from size, never from colour or uppercase tracking.

## Layout

A single centred wrap, max 90rem, with a fluid side gutter of clamp(16px, 4vw, 56px). The masthead and footer rules stop at the content edge (drawn as a gradient inset by the gutter), matching the filter rules. The opening is a two-column grid (title 1.1fr, wall text 1fr, bottom-aligned) that collapses to one column at 62rem. The wall is a list grid: three columns, two below 62rem, one below 40rem; row gap clamp(36px, 5vw, 64px), column gap clamp(20px, 2.4vw, 32px). Covers are 16:9. Each label is a two-column grid: title and author left, level and facts (right aligned, no wrap) right; the note, link, topics and small print span both. Main carries 96px bottom padding.

Filters are a caption-type line (a single type select, video or channel, with the count right-aligned) and are shown only when JavaScript runs; without it every course stays visible.

## Elevation & Depth

Hybrid but restrained: flat page, with a soft contact shadow on covers only.

### Shadow Vocabulary

- **Hang** (`0 1px 2px rgb(0 0 0 / 0.14), 0 16px 28px -14px rgb(0 0 0 / 0.34)`; dark: 0.5 and 0.8 alphas): resting cover, a tight contact edge plus a long soft drop.
- **Hang lift** (`0 2px 4px rgb(0 0 0 / 0.16), 0 24px 36px -14px rgb(0 0 0 / 0.4)`; dark: 0.55 and 0.9): hovered or focus-within cover, together with a 4px upward move over 0.45s on cubic-bezier(0.16, 1, 0.3, 1). Reduced motion removes both transitions and the move.

### Named Rules

**The Hung Object Rule.** Only covers cast a shadow, and it is soft and offset downward. Text, labels, links and form controls are flat.

## Shapes

Square and ruled. Covers and controls have no radius; separation comes from 1px hairlines and a 1px ink rule above the filter line. The single round form is the 0.5em vermilion dot. Form controls are underline-only (select has a 1px ink bottom border and no box).

## Components

### Cover

A 16:9 plate hung with the Hang shadow. YouTube entries show a cover image (object-fit: cover, only from the YouTube image hosts i.ytimg.com and yt3.googleusercontent.com, no referrer): the channel banner when the entry sets `cover`, otherwise the video thumbnail. Entries with neither show the typographic plate: Plate type in white, bottom-left, on the first topic's tone. The cover link is a mouse-only second route (aria-hidden, tabindex -1); the caption link is the accessible one.

### Object label

Grid under the cover, 18px below it. Title (800) top-left, level (600, ink) top-right, author and platform in quiet caption, hours and price right-aligned with tabular figures, then the note in ink at 1rem, then the link, then the small print (the year it was added, videos only) in quiet caption.

### Open link

Underlined caption line, 700 weight, 2px underline, a 14px stroke arrow icon (inline SVG), with a screen-reader note that it opens in a new tab. Hover and focus recolour the underline to the mark; there is no fill, border or background.

### Filters

Caption-type row with a 1px ink top rule and hairline bottom rule. Selects are transparent, underline-only, min-width 10.5rem; one select (type) and the count. The live count is announced politely.

### Navigation

Masthead: brand in 700 at 0.9rem left, nav right in quiet caption; hover and the current page switch to ink with an underline. Language switch is one more nav link. Footer is a quiet caption line with a hairline rule above.

## Do's and Don'ts

### Do:

- **Do** keep the wall and ink as the only large surfaces, and let one vermilion dot, ring or underline carry all emphasis.
- **Do** set course titles in weight 800 with negative tracking (-0.015em to -0.04em) and keep captions at 0.875rem in quiet.
- **Do** give covers a 16:9 box, no radius, and the Hang shadow; give typographic plates the first topic's tone.
- **Do** keep the link a plain underlined caption line.
- **Do** keep every asset self-hosted; the only third-party load is YouTube thumbnails with no referrer.
- **Do** honour reduced motion and keep visible 2px focus rings in the mark colour.

### Don't:

- **Don't** introduce pill chips, filled or coloured buttons, or card borders; the shadow and the label are the whole card.
- **Don't** use vermilion as a fill, button, heading colour or large area.
- **Don't** reuse a topic tone outside a cover plate.
- **Don't** add a second typeface or load a face from another origin.
- **Don't** add shadows to text, labels or form controls.
