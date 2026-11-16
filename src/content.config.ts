import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const PLATFORMS = ['youtube', 'udemy', 'coursera', 'other'] as const;
// A single video (or playlist of a course) or a whole channel.
export const KINDS = ['video', 'channel'] as const;
export const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;
export const TOPICS = [
  'fundamentals',
  'networking',
  'firewalls',
  'appsec',
  'pentest',
  'cloud',
  'blue-team',
  'grc',
  'automation',
  'ai-security',
  'ai',
  'homelab',
] as const;

const courses = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/courses' }),
  schema: z.object({
    title: z.string().min(1),
    author: z.string().min(1),
    platform: z.enum(PLATFORMS),
    kind: z.enum(KINDS),
    // Always a plain link to the original page: no embedded player, no copied text or images.
    url: z.string().refine((u) => URL.canParse(u) && u.startsWith('https://'), {
      message: 'url must be a valid https link',
    }),
    // YouTube only: id of the video whose thumbnail to show, for playlists (a single video
    // link already gives it). The image is loaded from YouTube, never stored in this repo.
    thumbnailVideoId: z
      .string()
      .regex(/^[A-Za-z0-9_-]{11}$/)
      .optional(),
    // Optional cover image for the card, typically a YouTube channel banner. It is loaded by the
    // reader's browser from YouTube's image host and never stored in this repo; it wins over the
    // video thumbnail. Only that one host is allowed, because the page's CSP allows only that host.
    cover: z
      .string()
      .refine(
        (u) =>
          URL.canParse(u) &&
          new URL(u).protocol === 'https:' &&
          new URL(u).hostname === 'yt3.googleusercontent.com',
        { message: 'cover must be an https image on yt3.googleusercontent.com' },
      )
      .optional(),
    // How much to zoom the cover (1 = whole image) and around which horizontal point (0-100%).
    // Some banners keep their artwork in a thin strip and need more zoom than the default.
    coverZoom: z.number().min(1).max(4).optional(),
    coverFocusX: z.number().min(0).max(100).optional(),
    coverFocusY: z.number().min(0).max(100).optional(),
    level: z.enum(LEVELS),
    topics: z.array(z.enum(TOPICS)).min(1),
    hours: z.number().positive().optional(),
    free: z.boolean(),
    // A short description in both languages, written by hand. Never copied from the course page.
    note: z.object({
      en: z.string().min(1).max(300),
      it: z.string().min(1).max(300),
    }),
    added: z.coerce.date(),
    // Drafts (and the placeholder examples) are hidden from the built site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { courses };
