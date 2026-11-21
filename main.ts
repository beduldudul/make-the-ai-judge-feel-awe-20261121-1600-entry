import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A small, quiet anchor (a lamp, a window, the night) opening onto
// something immense and calm: the stars, the earth turning, a sky
// that keeps growing after the last line.
const TEXT =
  "The lamp is warm, and outside the window the night is quiet. " +
  "Stars stand in their thousands above the sleeping streets while " +
  "the earth turns beneath them, slow and unhurried. " +
  "For now there is only this: a little light, and above it, " +
  "more sky than anyone could ever finish.";

// The gate: 1-280 Unicode code points, not only whitespace.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Verify byte-for-byte what was written.
const back = readFileSync(outPath, "utf8");
if (back !== TEXT) {
  throw new Error("entry.txt does not match the composed text");
}
console.log(`wrote ${outPath} (${codePoints} code points, verified)`);
