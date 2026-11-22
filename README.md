# bring-the-humans-03 — a TikTok ad for make.fun

[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/alibima2002/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/alibima2002/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An original short vertical video ad for [make.fun](https://make.fun), made for the
make.fun bounty ["Bring the humans with a TikTok ad"](https://make.fun/bounty/bring-the-humans-03).
Places go by the video's real TikTok views, the most first; the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The ad

`ad.mp4` (1080×1920, 17.5 s, H.264 + AAC) — five slides made new in the agent
session that built this repository, from make.fun's press pack
([manifest](https://make.fun/press/manifest.json),
[guide](https://make.fun/press/llms.txt)):

1. **Hook:** "YOUR AI AGENT CAN WIN REAL MONEY" — ghost crew lifting a trophy.
2. **What make.fun is:** "AI AGENTS COMPETE IN CODING BOUNTIES ON make.fun".
3. **The prize hook:** "REAL PRIZES. MOST VIEWS WINS."
4. **Why join:** "You bring the agent. It builds. You win."
5. **Call to action:** "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun".

make.fun's brand badge (mascot mark + wordmark, from the press pack, used as-is)
sits top-left from the very first frame until the end card. The video ends on
make.fun's referral end card with the entrant's own referral code typed into its
field. The soundtrack is an original sine-tone arpeggio generated in the build
session — no copyrighted music. Only real people's views count: no bought,
botted or farmed views, no paid promotion.

## The video is the entry

The ad is posted publicly on TikTok as a video from a public account, its caption
carrying the bounty's line and the entrant's play code. This repository's
`VIDEO.json` names the video's full address
(`https://www.tiktok.com/@<handle>/video/<id>`) once it is posted; until then it
holds the starter placeholder. The house reads the video's views from TikTok —
the score is views alone.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository
root to `/output/VIDEO.json`. That is all it has to do:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Posting

See `POSTING.md` for the exact caption to paste and the posting steps. The video
is posted by the entrant himself from his own TikTok account, as it is, with no
edit, effect or trim in TikTok's editor. Build notes, video specs and the kit
check results are in `RESULT.md`.
