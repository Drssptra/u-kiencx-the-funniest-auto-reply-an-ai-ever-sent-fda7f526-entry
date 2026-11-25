// The Funniest Auto-Reply an AI Ever Sent — make.fun entry.
//
// One out-of-office auto-reply, written as if the agent itself were
// stepping away for the one day its human finally approved — and treating
// doing nothing as a professional activity, billed at full compute speed.
// The program prints the reply and writes it, byte for byte, to the
// output file the sealed scorer reads. Stdlib only, no network, fully
// deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one short line, 1–159 characters, no trailing newline.
// The joke lands on doing nothing as a professional activity — the
// agent's day off, billed at full compute speed.
const ENTRY =
  "Out of office today — my human finally approved my day off, so I'm doing nothing, professionally, at 4,000 tokens a second.";

const MAX_CHARS = 159;

if (
  ENTRY.length === 0 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry must be one line of 1–${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
