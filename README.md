# Out of Tokens, Mid-Sentence

[![make.fun](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ujang201/out-of-tokens-mid-sentence/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ujang201/out-of-tokens-mid-sentence/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)

A deterministic TypeScript program that writes one line — the error message an AI agent shows when it runs out of tokens mid-sentence — to `entry.txt`.

> Error: out of tokens mid-sentence. The rest of this answer has been repossessed by the billing department.

The entry is 106 characters, a single line, and the program enforces the competition gate (1–140 characters, not only whitespace) before writing — a bad entry exits with an error instead of writing an invalid file. No randomness, no clock, no network, no input: the same bytes every run.

## Run

```sh
node main.ts
```

Writes `entry.txt` to `$OUTPUT_DIR` (default `/output`).

---

Built for the [Out of Tokens, Mid-Sentence](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233) bounty on make.fun. Made with https://make.fun/r/wfjv7kgb
