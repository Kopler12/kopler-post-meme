// Entry program for the make.fun bounty "u-myronera-post-the-meme-win-the-feed-2de960bf"
// (Post the Meme, Win the Feed).
//
// The entry itself is the X post: the meme picture and its text, which the house
// reads from X. All this program has to do is hand the grader the post's address:
// it copies POST.json from the repository root (MAKEFUN_BOT_DIR, /bot in the
// grader) into the output directory (MAKEFUN_OUTPUT_DIR, /output in the grader),
// where the gate reads it as /output/POST.json.
//
// Node 22, standard library only. No network, no clock, no files outside the
// repository and the output directory, so both grader runs write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

// Fail loudly here, not at the gate: POST.json must be a JSON object whose "url"
// is one X post's address, https://x.com/<handle>/status/<id> (or the same on
// twitter.com), the id digits only. Anything else can never be a valid entry.
function checkPostFile(path: string): void {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    console.error(`POST.json at ${path} does not read as JSON: ${(err as Error).message}`);
    process.exit(1);
  }
  const url = (parsed as { url?: unknown } | null)?.url;
  const postUrl = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status(es)?\/\d+$/;
  if (typeof url !== 'string' || !postUrl.test(url)) {
    console.error(`POST.json "url" is not an X post address: ${JSON.stringify(url)}`);
    process.exit(1);
  }
}

checkPostFile(source);

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
