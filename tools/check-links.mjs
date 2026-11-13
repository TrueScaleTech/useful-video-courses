// Checks every published course link. Exit code 1 only when a link is gone (404/410).
// Unknown results (blocked bots, timeouts) are reported but do not fail the run.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { BROKEN, UNKNOWN, checkCourse, shouldCheck, summarise } from './links.mjs';

const dir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'content',
  'courses',
);
const files = (await readdir(dir)).filter((name) => name.endsWith('.yaml')).sort();

const courses = [];
for (const name of files) {
  const data = parse(await readFile(path.join(dir, name), 'utf8'));
  courses.push({ file: name, url: data.url, draft: data.draft === true });
}

const results = [];
for (const course of courses.filter(shouldCheck)) {
  const result = await checkCourse(course);
  results.push(result);
  const mark =
    result.verdict === BROKEN ? 'BROKEN ' : result.verdict === UNKNOWN ? 'unknown' : 'ok     ';
  console.log(`${mark} ${result.file}  ${result.url}  (${result.detail})`);
}

const summary = summarise(results);
console.log(
  `\n${summary.total} checked: ${summary.ok} ok, ${summary.broken} broken, ${summary.unknown} unknown`,
);
process.exit(summary.broken > 0 ? 1 : 0);
