# bring-the-humans-03 — build result (BUILD ONLY, not submitted)

Built 2026-11-22 ~06:47–07:00 UTC (13:47–14:00 WIB) by subagent session
`2f0a0741-cb2c-4e10-ad5c-e9b6a3884047` (agent: Muse Spark, harness: Muse app).

## Repo

- GitHub: https://github.com/alibima2002/bring-the-humans-03 (PUBLIC)
- Commit: `277e1bb87f605ca8c7904918495328ec85c41c3e` (the commit carrying
  `ad.mp4`, `main.ts`, `VIDEO.json`, `README.md`, `LICENSE`); `POSTING.md` and
  `RESULT.md` were added in a follow-up commit on the same branch — see git
  log for the final HEAD.
- Branch: `master`, pushed. Repo About: website https://make.fun, topic
  `makefun`. License: MIT (`LICENSE` declares SPDX-License-Identifier: MIT).
- Files: `ad.mp4`, `main.ts`, `VIDEO.json`, `README.md`, `LICENSE`,
  `POSTING.md`, `RESULT.md`.

## The video

`ad.mp4` — an original 17.5 s vertical ad for make.fun, rendered in this
session with ffmpeg from make.fun's press pack:

- Duration: **17.508 s**; resolution: **1080×1920 (9:16)**; 30 fps;
  H.264 video + AAC audio; file size **4,082,481 bytes**;
  sha256 `acdc67481a5c49b6d9589d009897c54f686d5da2f757f76e291363b6d66f91b9`.
- Full decode check passed (`ffmpeg -i ad.mp4 -f null -`, no errors); audio
  present for the whole duration.
- Creative (decided in-session): hook "YOUR AI AGENT CAN WIN REAL MONEY"
  (ghost crew + trophy) → "AI AGENTS COMPETE IN CODING BOUNTIES ON make.fun"
  (ghost at laptop) → "REAL PRIZES. MOST VIEWS WINS." (ghost with spyglass) →
  "You bring the agent. It builds. You win." (ghost with clipboard) → call to
  action "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun" (ghost waving with
  mail). Each slide 3.5 s with a slow Ken Burns zoom. Soundtrack: an original
  sine-tone arpeggio (C–Am–F–G, 120 BPM) generated in-session with Python
  stdlib — no copyrighted music.
- Brand badge: the press pack's 9:16 overlay
  (`makefun-badge-9x16.png`, 1080×1920) laid over the video from its first
  frame until the end card comes in, at 100%, unmoved — verified on frames at
  t=0.1 s and t=5 s (badge top-left at its place).
- Referral end card: the press pack's transparent 9:16 card
  (`makefun-card-9x16-transparent.webm`, decoded with libvpx-vp9) over the
  last 2.5 s (starts t=15.0 s), with the clip blurred (sigma 28) and
  desaturated underneath per the press pack's ffmpeg recipe. Referral code
  **`8q4hj8xe`** typed into the field in JetBrains Mono Bold 62 px, ink
  #191419, appearing once the field rests (t=16.433 s) — verified on the last
  frame (t=17.4 s): card at rest, code `8q4hj8xe` in the white field, copy
  button beside it, no badge. Frame at t=16.2 s shows the card mid-build with
  the blinking caret and no code yet, as the recipe intends.
- Press files were fetched in-session from https://make.fun/press/manifest.json
  (edition 2026-11-21) and https://make.fun/press/llms.txt, and used as-is.
  The end-card webm's sha256 matched the manifest exactly. The badge PNG and
  the mascot illustrations did NOT match the manifest sha256 — because
  Cloudflare Polish recompresses them in transit (response header
  `cf-polished: ok, orig_size=22841`, which equals the manifest's byte count
  for the badge); dimensions verified 1080×1920 and the badge's position
  verified visually on the first frame. No press file is stored in the repo.
- On-screen text uses Inter Bold (brand font); the referral code uses
  JetBrains Mono Bold (brand font). Colours are the brand's magenta #c41c83,
  ink #191419 and white only.

## Caption (exact text — see POSTING.md)

```
Your AI agent can win real money 🤖💰
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-clarinet-leaf-castle
Join with my code 8q4hj8xe: https://make.fun/r/8q4hj8xe
```

- Play code: **`makefun-clarinet-leaf-castle`** (code 0 of Ali's 4 in this
  bounty, from `node cli/makefun.mjs check --play-code 0`).
- Referral code: **`8q4hj8xe`**; referral link: https://make.fun/r/8q4hj8xe.
- The caption carries `$500 bounty` (whole word), `make.fun` written out, and
  the play code, as the gate requires.

## Kit check

Run from inside the kit (`node cli/makefun.mjs check --kit . --repo
<entry> --play-code 0`, receipt 2026-11-22T06:54:50Z, commit 277e1bb):

- **4 passed, 1 failed, 15 skipped, 5 checked at submission.**
- Passed: `competition_open`, `snapshot` (5 files, 4,088,565 bytes, within
  caps), `license_osi` (MIT), `entrypoint` (main.ts, node22).
- Failed: `transcripts_present` — **expected and by design**: this task is
  BUILD ONLY, no submission bundle was created, so there were no transcripts
  to check. The parent re-bundles and submits later; the gate must be re-run
  with `--transcripts` then.
- Skipped: all other transcript checks (no sessions parsed) and
  `prerequisites` / `strategy_note` / `committed_secret` (no --dotenv).
- Checked at submission (deferred to submit time, not failures): `repo_public`
  (repo IS public), `repo_owner` (owner is alibima2002, Ali's GitHub login),
  `repo_created_after_open` (created 2026-11-22, after the 2026-11-21T19:00:00Z
  opening), `commit_in_repo` (277e1bb is pushed to master),
  `duplicate_snapshot` (own original work).

## main.ts local run

`mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` —
success, `out/VIDEO.json` byte-identical to the repo's `VIDEO.json`. (A
`MODULE_TYPELESS_PACKAGE_JSON` warning is printed by Node 24 and is harmless;
the starter ships the same way.)

## Quota

`node cli/makefun.mjs status --competition bring-the-humans-03` (2026-11-22
~06:48 UTC): entries made 0; left today 6 of 6; daily limit left 50 of 50;
left under hard limit 40 of 40; **can submit now: yes**.

## What is still open (parent / Ali)

1. **Ali must post the video** on TikTok himself (public account, Everyone,
   exact caption from POSTING.md, before Wed 25 Nov 02:00 WIB) and send back
   the full video URL (`https://www.tiktok.com/@<handle>/video/<id>`).
2. **`VIDEO.json` still holds the starter placeholder**
   (`https://www.tiktok.com/@<handle>/video/<id>`) — it MUST be replaced with
   the real TikTok URL before submitting; as it stands the gate refuses it
   (valid 0), which is intentional until the video exists.
3. **No submission was made and no bundle was created** (BUILD ONLY, per
   task). The parent re-bundles the transcripts and submits later, with Ali's
   explicit approval, before the deadline (2026-11-24T19:00:00Z).
4. The prize table in the task brief ($150/$80/$50…) differs from the kit's
   RULES.txt payout curve ($100/$70/$50, 4th–10th $20, 11th–20th $14, total
   $500): the kit's figures are the authoritative ones and are what the README
   and caption use ($500 total, top 20).

## Blockers

None for the build. No play-code blocker: the kit's CLI printed code 0
directly. No X/Twitter involvement (meme-x untouched, per task).
