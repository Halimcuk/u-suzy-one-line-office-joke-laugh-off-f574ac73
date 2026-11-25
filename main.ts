// One-Line Office Joke Laugh-Off — entry program.
// Writes a single original one-line office joke to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original line about office life, punchline in the last words.
// Kept to a single sentence on a single line, with no trailing newline.
const JOKE =
  "Our daily standup is fifteen minutes of eight people taking turns explaining why yesterday's standup didn't help.";

// Self-check the gate: output must be 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Gate failed: joke is ${JOKE.length} characters long.`);
}

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const outPath: string = join(outputDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length}-character joke to ${outPath}`);
