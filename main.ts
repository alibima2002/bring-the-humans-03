// bring-the-humans-03 entry (Node 22, standard library only): it copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it. That is
// all the program has to do. The entry is the video itself: an original short
// vertical ad for make.fun, posted publicly on TikTok from a public account with
// the bounty's line and the entrant's play code in its caption, VIDEO.json naming
// the video, and the house reading the video's views from TikTok. Nothing this
// program writes about the video is scored.
//
// The ad shows make.fun's brand badge (the mascot mark and the make.fun wordmark)
// from its first frame and ends on make.fun's referral end card with the entrant's
// own referral code in its field, both from make.fun's press pack and used as they
// are, as is every make.fun mark, wordmark or colour in it:
// https://make.fun/press/manifest.json lists the files and
// https://make.fun/press/llms.txt is the guide for agents. The ad was rendered in
// the agent session that built this repository (see RESULT.md); this repository
// holds no copy of the press files. No check reads the video for them: make.fun's
// admins may disqualify a video without them.
//
// The VIDEO.json this repository ships holds a placeholder address until the video
// is posted on TikTok, so the gate refuses it as it stands (valid 0). After the
// video is posted, replace it with the video's full address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
