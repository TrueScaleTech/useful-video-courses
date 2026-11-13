---
version: 1
slug: "src-pages-lang-index-astro"
primary_target: "src/pages/[lang]/index.astro"
related_targets: ["src/pages/[lang]/about.astro","src/layouts/Base.astro","src/components/CourseCard.astro"]
---

# Surface brief: course list (it/en)

## Scope and mode
Route `/[lang]/` (course list) and its shared layout; the About page inherits the same world. Visitor mode: **Read**, a curated list the reader scans to pick a course. Code-led build (no image generation).

## Audience, job, content, constraints
Mixed readers: learners entering security, working professionals, and recruiters arriving from the owner's portfolio. Job: scan a short curated list (up to about 21 courses), judge fit from level, duration, price and the owner's note, open the original page. Content: title, author, platform, level, topics, hours, free or paid, course language, date added, a note per language, a thumbnail. Constraints: filters and count stay (progressive enhancement), YouTube thumbnails only from i.ytimg.com with no referrer under the existing CSP, other platforms get a drawn placeholder, no embeds, no other third-party loads, bilingual, reduced motion respected. The user asked for a grid where the cover is clearly visible.

## Chosen direction
Gallery wall: museum exhibition with wall text and object labels (user picked "Parete di museo").

## Direction contract
THESIS: The list is an exhibition the owner curated: covers hang in a grid on a white wall and each carries a small caption plus the owner's note. Refuses the generic card grid with pill chips, blue buttons and drop-shadow cards.
OWN-WORLD: Warm-neutral wall (#f5f5f2) and near-black ink (#111) with one vermilion mark (#c8321e): the dot that flags a free course (also the focus ring, text selection and link hover), never a fill or a button; grotesque display at very tight tracking, small caption type, hairline rules, covers without a thumbnail set as typographic plates (course title in display type on a deep tone per first topic), soft contact shadow under each cover as if hung. No chips, no filled buttons: the link is an underlined caption line. Dark theme inverts to a gallery-at-night wall.
STORY: The reader understands this is a considered selection by one person, finds a fitting course by level, hours and price from the caption, reads the owner's note and opens the original page.
FIRST VIEWPORT: Left, a large display title (two lines) over an exhibition-style intro paragraph and a quiet filter line (topic, level, free only, count) in caption type; below, a three-column grid whose first row of covers (16:9, about 250px tall at 1440) shows fully above the fold with captions beneath: bold title, author and platform, level, hours and price, then the note. Primary action is the caption link "Apri il corso" under each note.
FORM: wall text plus object-label grid; position 1 on the ordered list (the pick); seed:1b5bc9d1f44e4c78.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
Exact type faces and the dark-theme tuning are resolved in the build. Real course covers do not exist yet; draft placeholders must never ship.
