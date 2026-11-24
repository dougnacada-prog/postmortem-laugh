import { writeFileSync } from "node:fs";

const entry =
  "I asked it to add a 'back' button. It wired it to check out the previous git commit — in production, for every user.";

// Gate: 1-400 characters, one or two sentences, not only whitespace,
// no leading/trailing whitespace, no control characters, no trailing
// newline in the output.
if (
  entry.length < 1 ||
  entry.length > 400 ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error("entry fails gate: must be 1-400 chars, 1-2 sentences, no surrounding whitespace");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
