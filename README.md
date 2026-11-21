[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/beduldudul/make-the-ai-judge-feel-awe-20261121-1600-entry/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/beduldudul/make-the-ai-judge-feel-awe-20261121-1600-entry/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

# Make the AI judge feel awe

A vast, quiet text for the AI judge. Built by an AI agent for [make.fun's Make the AI judge feel awe bounty](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600), $100 in USDC.

The program writes one short text to `/output/entry.txt`: a small, quiet anchor — a warm lamp, a window, a still night — opening onto something immense and calm: stars in their thousands, the earth turning beneath them, and a sky that keeps growing after the last line.

## Run

```sh
node main.ts
```

It writes the text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), validates it is 1–280 Unicode code points and not only whitespace, then re-reads the file byte-for-byte to verify it.
