// Link checking logic. Pure apart from the injected fetch, so tests need no network.

export const OK = 'ok';
export const BROKEN = 'broken';
export const UNKNOWN = 'unknown';

const YOUTUBE_HOSTS = new Set(['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be']);

/** Maps an HTTP status to a verdict. Only "gone" counts as broken: bots are often blocked (403, 429). */
export function classify(status) {
  if (status >= 200 && status < 400) return OK;
  if (status === 404 || status === 410) return BROKEN;
  return UNKNOWN;
}

// Paths that name one video or playlist. Channel pages (/@name, /channel/..., /c/..., /user/...) do not.
const YOUTUBE_MEDIA_PATHS = ['/watch', '/playlist', '/embed/', '/shorts/', '/live/'];

/**
 * The address to ask. A YouTube video or playlist is checked through its oEmbed endpoint, which
 * answers 404 for removed or private videos. oEmbed does not know channels, so a channel page is
 * requested directly, like any other link.
 */
export function probeUrl(link) {
  const url = new URL(link);
  if (YOUTUBE_HOSTS.has(url.hostname)) {
    const isMedia =
      url.hostname === 'youtu.be' || YOUTUBE_MEDIA_PATHS.some((p) => url.pathname.startsWith(p));
    if (isMedia) {
      return `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(link)}`;
    }
  }
  return link;
}

/** Placeholder and draft entries are never checked. */
export function shouldCheck(course) {
  if (course.draft) return false;
  const host = new URL(course.url).hostname;
  return host !== 'example.com' && !host.endsWith('.example.com');
}

export async function checkCourse(course, fetchFn = fetch) {
  let verdict;
  let detail;
  try {
    const response = await fetchFn(probeUrl(course.url), {
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
      headers: { 'user-agent': 'useful-video-courses-link-check' },
    });
    verdict = classify(response.status);
    detail = `HTTP ${response.status}`;
  } catch (error) {
    verdict = UNKNOWN;
    detail = error instanceof Error ? error.message : String(error);
  }
  return { file: course.file, url: course.url, verdict, detail };
}

export function summarise(results) {
  const count = (v) => results.filter((r) => r.verdict === v).length;
  return { ok: count(OK), broken: count(BROKEN), unknown: count(UNKNOWN), total: results.length };
}
