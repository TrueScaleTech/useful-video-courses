import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  BROKEN,
  OK,
  UNKNOWN,
  checkCourse,
  classify,
  probeUrl,
  shouldCheck,
  summarise,
} from './links.mjs';

test('only gone pages count as broken', () => {
  assert.equal(classify(200), OK);
  assert.equal(classify(301), OK);
  assert.equal(classify(404), BROKEN);
  assert.equal(classify(410), BROKEN);
  assert.equal(classify(403), UNKNOWN);
  assert.equal(classify(429), UNKNOWN);
  assert.equal(classify(500), UNKNOWN);
});

test('YouTube links are probed through oEmbed, others directly', () => {
  const yt = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  assert.equal(
    probeUrl(yt),
    `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(yt)}`,
  );
  assert.ok(probeUrl('https://youtu.be/dQw4w9WgXcQ').startsWith('https://www.youtube.com/oembed'));
  assert.equal(probeUrl('https://www.udemy.com/course/x/'), 'https://www.udemy.com/course/x/');
});

test('YouTube channel pages are requested directly, since oEmbed does not know channels', () => {
  assert.equal(probeUrl('https://youtube.com/@freecodecamp'), 'https://youtube.com/@freecodecamp');
  assert.equal(
    probeUrl('https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ'),
    'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ',
  );
  assert.ok(
    probeUrl('https://www.youtube.com/playlist?list=PL123').startsWith(
      'https://www.youtube.com/oembed',
    ),
  );
});

test('drafts and example.com placeholders are skipped', () => {
  assert.equal(shouldCheck({ url: 'https://www.udemy.com/course/x/', draft: false }), true);
  assert.equal(shouldCheck({ url: 'https://www.udemy.com/course/x/', draft: true }), false);
  assert.equal(shouldCheck({ url: 'https://example.com/a', draft: false }), false);
  assert.equal(shouldCheck({ url: 'https://www.example.com/a', draft: false }), false);
});

test('checkCourse reports the verdict from the injected fetch', async () => {
  const course = { file: 'a.yaml', url: 'https://www.udemy.com/course/x/' };
  const gone = await checkCourse(course, async () => ({ status: 404 }));
  assert.equal(gone.verdict, BROKEN);
  assert.equal(gone.detail, 'HTTP 404');
  const fine = await checkCourse(course, async () => ({ status: 200 }));
  assert.equal(fine.verdict, OK);
});

test('a network failure is unknown, never broken', async () => {
  const course = { file: 'a.yaml', url: 'https://www.udemy.com/course/x/' };
  const result = await checkCourse(course, async () => {
    throw new Error('getaddrinfo ENOTFOUND');
  });
  assert.equal(result.verdict, UNKNOWN);
  assert.match(result.detail, /ENOTFOUND/);
});

test('summarise counts each verdict', () => {
  const summary = summarise([
    { verdict: OK },
    { verdict: OK },
    { verdict: BROKEN },
    { verdict: UNKNOWN },
  ]);
  assert.deepEqual(summary, { ok: 2, broken: 1, unknown: 1, total: 4 });
});
