# Security policy

## Reporting a vulnerability

Please report security problems privately, using GitHub's [private vulnerability reporting](https://github.com/TrueScaleTech/useful-video-courses/security/advisories/new) for this repository. Do not open a public issue for them.

## What this project is

A static website generated at build time. It has no server, no database, no accounts and no forms, so there is nothing for a visitor to log in to or submit.

## What the site does and does not do

- Every course is a plain external link opened with `rel="noopener noreferrer"`.
- No cookies, no analytics, no third-party scripts or fonts, no embedded players.
- The only third-party requests a page makes are for YouTube thumbnails from `i.ytimg.com` and channel banners from `yt3.googleusercontent.com`, sent without a referrer. A Content-Security-Policy in every page restricts images to this site and those two hosts, and blocks frames, forms and other origins.
- Course data comes only from reviewed YAML files in the repository, validated against a schema at build time. The CI also fails if the built pages mention any host other than the site, this repository and YouTube's image host.

## Supply chain

- Dependencies are locked in `package-lock.json` and updated through Dependabot.
- Workflows have read-only permissions. Only the manual Pages deploy job can write, and only to Pages.
- The weekly link check sends plain GET requests to the listed course pages and nothing else.

## Out of scope

Problems in YouTube, Udemy, Coursera or the linked courses themselves should be reported to those services.
