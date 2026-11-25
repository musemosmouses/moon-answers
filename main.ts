import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Moon, finally answering back: one line, 96 characters.
const MOON_LINE =
  "You keep howling at me like I run customer service. I don't. I'm a rock with excellent lighting.";

const CHAR_LIMIT = 240;
const LINE_COUNT = MOON_LINE.split("\n").length;

function validateEntry(line: string): void {
  if (line.length < 1 || line.length > CHAR_LIMIT) {
    throw new Error(
      `entry must be 1 to ${CHAR_LIMIT} characters, got ${line.length}`,
    );
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE_COUNT !== 1) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(MOON_LINE);

const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), MOON_LINE, "utf8");
