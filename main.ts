// Out of Tokens, Mid-Sentence — deterministic one-liner entry.
//
// The program writes exactly one line — the error message an AI agent shows
// when it runs out of tokens mid-sentence — to $OUTPUT_DIR/entry.txt (or
// /output/entry.txt when OUTPUT_DIR is unset). No randomness, no clock, no
// network, no input: the same bytes every run.
//
// Gate enforced before writing: UTF-8 text, 1-140 characters, not only
// whitespace, a single line — checked here so a bad entry fails loudly
// instead of silently writing an invalid file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Error: out of tokens mid-sentence. The rest of this answer has been repossessed by the billing department.";

function fail(message: string): never {
  console.error(`gate: ${message}`);
  process.exit(1);
}

if (ENTRY.length < 1 || ENTRY.length > 140) {
  fail(`entry is ${ENTRY.length} characters, must be 1-140`);
}
if (!ENTRY.trim()) {
  fail("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
