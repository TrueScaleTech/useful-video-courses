# useful-video-courses

[![CI](https://github.com/TrueScaleTech/useful-video-courses/actions/workflows/ci.yml/badge.svg)](https://github.com/TrueScaleTech/useful-video-courses/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A small, hand-picked list of video courses on information security, networks and automation that I found genuinely useful, each with a short personal note. The site is static, bilingual (English and Italian) and every entry is a plain link to the original page.

Course data is a handful of small YAML files, so adding a course means adding one text file. No video is ever stored here.

> Independent project. It is not affiliated with, sponsored or endorsed by YouTube, Udemy, Coursera or any author listed. There are no affiliate links.

## What it does

- Lists courses with title, author, platform, level, topics, duration, price (free or paid) and a note in English and Italian.
- Filters by type (video or channel), with plain JavaScript that is optional: without it, every course stays visible.
- Hangs each course as a cover with a small label, like works on a gallery wall: a YouTube thumbnail for a YouTube video or playlist, and a typographic cover (the course title on a deep tone per first topic) for other platforms. Light and dark themes follow the reader's system, with a toggle in the header; the choice is kept only in the reader's own browser (local storage, no cookie).
- Checks every link once a week and fails only when a page is gone.

## What it never does

- It does not host, copy or embed videos, transcripts or course material.
- It does not store thumbnails: the image is loaded by the visitor's browser straight from YouTube's image host, without sending a referrer.
- No cookies, no analytics, no third-party scripts. The one typeface (Hanken Grotesk) is self-hosted. A Content-Security-Policy in every page allows images from the two YouTube image hosts (`i.ytimg.com` for thumbnails, `yt3.googleusercontent.com` for channel banners) and nothing else.

## Quick start

You need Node.js 22 or newer.

```bash
npm install
npm run dev
```

The two example entries in `src/content/courses/` are drafts and stay hidden. To see them while working on the layout:

```bash
# bash
SHOW_DRAFTS=1 npm run dev
```

```powershell
# PowerShell
$env:SHOW_DRAFTS = '1'; npm run dev
```

## Adding a course

Copy one of the example files in `src/content/courses/`, rename it, fill it in and set `draft: false`.

```yaml
title: Course title as shown on the original page
author: Author or channel
platform: youtube # youtube, udemy, coursera or other
kind: video # video or channel
url: https://www.youtube.com/watch?v=...
level: beginner # beginner, intermediate or advanced
topics: [firewalls, automation] # see src/content.config.ts
hours: 6.5 # optional
spoken: en # language of the course: en or it
free: true
note:
  en: One or two sentences of your own on why it helped.
  it: Una o due frasi tue sul perchÃƒÂ© ÃƒÂ¨ stato utile.
added: 2026-11-13
draft: false
# thumbnailVideoId: dQw4w9WgXcQ  # optional, YouTube playlists only: the video whose thumbnail to show
```

The schema is checked at build time, so a typo in a topic or a missing note stops the build instead of reaching the site. Write the notes yourself: do not copy descriptions from the course page.

## Commands

| Command          | What it does                        |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Local site with live reload         |
| `npm run build`  | Builds the static site into `dist/` |
| `npm run check`  | Type check and content schema       |
| `npm test`       | Unit tests (no network)             |
| `npm run links`  | Checks every published course link  |
| `npm run format` | Formats the code and data           |

## How links are checked

`npm run links` asks each published link whether it still exists. YouTube links go through YouTube's public oEmbed endpoint, which answers 404 for removed or private videos; other links are requested directly. Only 404 and 410 count as broken. Platforms that block automated requests, and network errors, are reported as "unknown" and do not fail the run. Draft entries and `example.com` placeholders are skipped.

## Publishing

The site is published to GitHub Pages at `https://truescaletech.github.io/useful-video-courses/`. Publishing is a manual step: the `Deploy to GitHub Pages` workflow runs only when started by hand from the Actions tab, after enabling Pages with the source set to GitHub Actions.

## Development

```bash
npm run format:check && npm run check && npm test && npm run build
```

These are the same four steps the CI runs on Linux and Windows with Node 22 and 24. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Scope and limits

This is a personal list of opinions, not a ranking and not a review by the authors. Courses change or disappear: if a link is wrong, [open an issue](https://github.com/TrueScaleTech/useful-video-courses/issues/new/choose).

## AI assistance

Parts of this project were written with the help of an AI assistant. The content choices and every note are mine.

## License

[MIT](LICENSE). The licence covers this code only; the courses, videos and thumbnails belong to their authors.
