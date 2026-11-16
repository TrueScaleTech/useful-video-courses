# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mixed audience, none privileged: people starting or changing into information security who need to know where to begin; working security and IT professionals looking for deeper courses (firewalls, AppSec, automation) recommended by a colleague; and recruiters or technical leads arriving from the owner's portfolio who judge the owner's taste and competence from the list. Readers are Italian and international (the site is bilingual, Italian and English).

## Product Purpose

A short, hand-picked list of video courses on information security, networks and automation that the owner found genuinely useful, each with a short personal note on why. It exists to save the reader time by replacing a search result page with a trusted selection, and to show the owner's judgement in the field. Success: a reader opens the right course quickly and trusts the list; a visitor from the portfolio sees careful, professional work.

## Positioning

A personal, opinionated selection, not a catalogue and not a ranking: every entry carries the owner's own note, written by hand. It is also private by construction (no cookies, no analytics, no third-party scripts or fonts) and links only, never copying or embedding course content, which a commercial course directory or affiliate-driven list could not truthfully claim.

## Operating Context

Static site on GitHub Pages, published from the public repository `TrueScaleTech/useful-video-courses`. Visited mostly via a link from the owner's portfolio or GitHub profile, on desktop and phone. The list is maintained by adding small YAML files; a weekly job checks that the links still exist.

## Capabilities and Constraints

- Shows courses with title, author, platform (YouTube, Udemy, Coursera, other), level, topics, duration, free or paid, course language, date added, and a note in English and Italian.
- Filters by type (a single video or a whole channel); filters are optional JavaScript and every course stays visible without it.
- Every entry is a plain external link to the original page. No embedded player, no copied text or images.
- YouTube thumbnails are the only third-party load, fetched straight from `i.ytimg.com` without a referrer under a Content-Security-Policy; other platforms get a drawn placeholder. Nothing else may be loaded from another origin.
- Expected size: up to about 21 courses.
- No affiliate links, accounts, comments or analytics.
- Code, comments and documentation in English; user-facing text in Italian and English.

## Brand Commitments

The site is presented as the owner's professional work, linked from the portfolio and the TrueScaleTech profile, so it must read as carefully made and recognisably the owner's. It is an independent project, not affiliated with YouTube, Udemy, Coursera or any listed author, and says so. The portfolio's own look is not a binding reference; whether to echo it is undecided.

## Evidence on Hand

Real course entries do not exist yet: the two files in `src/content/courses/` are drafts with placeholder text and must not be treated as content or shown as real. The owner will supply the real list and notes. No testimonials, ratings, view counts or author endorsements exist and none may be invented.

## Product Principles

1. The owner's judgement is the product: each course earns its place with a note, and the page never pads the list.
2. Trust over reach: honest wording, no affiliate or tracking incentives, no claims the site cannot back.
3. Respect the reader's time: the right course should be findable and openable in seconds, in either language.
4. Private and light by construction: nothing loads that the reader did not ask for, beyond YouTube thumbnails.
5. Links only: credit and rights stay with the authors.

## Accessibility & Inclusion

No specific standard was set. Practical baseline: keyboard-operable filters and links, visible focus, readable contrast in light and dark, respect for reduced motion, and correct language attributes for Italian and English.
