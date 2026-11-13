import assert from 'node:assert/strict';
import { test } from 'node:test';
import { courseThumbnail, youtubeThumbnailUrl, youtubeVideoId } from '../src/lib/youtube.ts';

const ID = 'dQw4w9WgXcQ';

test('extracts the id from the common link shapes', () => {
  assert.equal(youtubeVideoId(`https://www.youtube.com/watch?v=${ID}`), ID);
  assert.equal(youtubeVideoId(`https://youtube.com/watch?v=${ID}&t=42s`), ID);
  assert.equal(youtubeVideoId(`https://m.youtube.com/watch?v=${ID}`), ID);
  assert.equal(youtubeVideoId(`https://youtu.be/${ID}?si=abc`), ID);
  assert.equal(youtubeVideoId(`https://www.youtube.com/embed/${ID}`), ID);
  assert.equal(youtubeVideoId(`https://www.youtube.com/shorts/${ID}`), ID);
});

test('returns null for links without a single video', () => {
  assert.equal(youtubeVideoId('https://www.youtube.com/playlist?list=PL123'), null);
  assert.equal(youtubeVideoId('https://www.youtube.com/@somechannel'), null);
  assert.equal(youtubeVideoId('https://www.udemy.com/course/example/'), null);
  assert.equal(youtubeVideoId('not a url'), null);
});

test('rejects malformed ids and look-alike hosts', () => {
  assert.equal(youtubeVideoId('https://www.youtube.com/watch?v=short'), null);
  assert.equal(youtubeVideoId(`https://youtube.com.evil.example/watch?v=${ID}`), null);
  assert.equal(youtubeVideoId(`https://www.youtube.com/watch?v=${ID}%00x`), null);
});

test('thumbnail url points at the YouTube image host over https', () => {
  assert.equal(youtubeThumbnailUrl(ID), `https://i.ytimg.com/vi/${ID}/mqdefault.jpg`);
});

test('an explicit video id wins and is validated', () => {
  const playlist = 'https://www.youtube.com/playlist?list=PL123';
  assert.equal(courseThumbnail(playlist), null);
  assert.equal(courseThumbnail(playlist, ID), `https://i.ytimg.com/vi/${ID}/mqdefault.jpg`);
  assert.equal(courseThumbnail(playlist, '../../x'), null);
  assert.equal(
    courseThumbnail(`https://youtu.be/${ID}`),
    `https://i.ytimg.com/vi/${ID}/mqdefault.jpg`,
  );
});
