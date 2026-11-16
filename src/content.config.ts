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
    level: z.enum(LEVELS),
    topics: z.array(z.enum(TOPICS)).min(1),
    hours: z.number().positive().optional(),
    spoken: z.enum(['en', 'it']),
    free: z.boolean(),
    // Personal notes, written by hand in both languages. Never copied from the course.
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
