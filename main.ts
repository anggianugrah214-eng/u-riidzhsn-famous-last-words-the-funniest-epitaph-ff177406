import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Famous Last Words: The Funniest Epitaph — one line, at most 150 characters.
// Drafts considered in-session:
//  1. "He clicked 'I agree to the terms and conditions' without reading them. The last condition was this."
//  2. "My last words were 'Hold my beer and watch this' — he held the beer. He is still holding it."
//  3. "Here lies the world's worst hide-and-seek player: found at last."
//  4. "My last words were 'I've done this a thousand times' — the thousand-and-first time disagreed."
// Draft 4 wins: first-person dying speech, a clean numerical twist, carved-in-stone brevity.
// Revision pass: "had other plans" lands the twist as an idiom a reader repeats,
// where "disagreed" only described it — the idiom is the punchline.
const ENTRY =
  "My last words were \"I've done this a thousand times\" — the thousand-and-first time had other plans.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`chars: ${ENTRY.length}`);
