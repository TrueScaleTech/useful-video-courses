// Helpers for YouTube links. Pure functions, no I/O, so they can be tested without a browser.

const ID = /^[A-Za-z0-9_-]{11}$/;
const HOSTS = new Set(['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com']);

/** Returns the 11-character video id of a YouTube link, or null (playlists, channels, other sites). */
export function youtubeVideoId(link: string): string | null {
  let url: URL;
  try {
    url = new URL(link);
  } catch {
    return null;
  }
  let candidate: string | null = null;
  if (url.hostname === 'youtu.be') {
    candidate = url.pathname.split('/')[1] ?? null;
  } else if (HOSTS.has(url.hostname)) {
    if (url.pathname === '/watch') {
      candidate = url.searchParams.get('v');
    } else {
      const [, kind, id] = url.pathname.split('/');
      if (kind === 'embed' || kind === 'shorts' || kind === 'live') candidate = id ?? null;
    }
  }
  return candidate !== null && ID.test(candidate) ? candidate : null;
}

/**
 * The thumbnail YouTube serves for a video (480x360). It is a 4:3 frame with black bars above
 * and below the 16:9 picture; showing it with `object-fit: cover` in a 16:9 box crops the bars.
 */
export function youtubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

/**
 * Picks the thumbnail for a course: an explicit video id (useful for playlists),
 * otherwise the id found in the link. Returns null when there is none.
 */
export function courseThumbnail(link: string, explicitVideoId?: string): string | null {
  const id = explicitVideoId ?? youtubeVideoId(link);
  return id !== null && ID.test(id) ? youtubeThumbnailUrl(id) : null;
}
