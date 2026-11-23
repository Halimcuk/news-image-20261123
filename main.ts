// news-image-20261123 entry (Node 22, standard library only).
//
// The poster for Monday 23 November 2026 lives beside this file as
// entry.png (1024x1024, drawn from vector fonts, so every word is legible).
// This program copies it to the grader's output directory. It reads no
// network, no clock and no environment beyond the output directory, so
// every run writes the same bytes.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
