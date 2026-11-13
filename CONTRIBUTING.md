# Contributing

This is a personal, curated list, so the course selection is decided by the maintainer. Bug reports, broken links and code improvements are welcome.

## Set up

You need Node.js 22 or newer.

```bash
npm install
npm run dev
```

## Before sending a change

```bash
npm run format:check && npm run check && npm test && npm run build
```

Run `npm run format` to fix formatting. The CI runs the same steps on Linux and Windows.

## House rules

- Code, comments, commits and documentation are in English. Course notes are written in English and Italian.
- Commits follow Conventional Commits (`feat:`, `fix:`, `docs:`, `ci:`, `chore:`), one change per commit, with the reason in the message.
- Never copy text, descriptions, transcripts or images from a course page. Notes are written by hand.
- Do not add embedded players, trackers, analytics, third-party fonts or scripts. The Content-Security-Policy and the CI check exist to keep the site free of them.
- Thumbnails are never stored in the repository.
- Every code path that handles a link has a test that runs without network access: inject `fetch` instead of calling it.

## Suggesting a course

Open an issue with the course link and a sentence on why it is useful. It is added only if the maintainer has followed it and agrees.

## Out of scope

Affiliate links, sponsored entries, user accounts, comments, and hosting or mirroring course content.
