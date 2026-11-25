# The World in One Day — Tuesday 24 November 2026 (Full-Day Final Edition)

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/eager-otter-56/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/eager-otter-56/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of **Tuesday 24 November 2026** — the full
UTC day, wires to 24:00 UTC. **55 stories across 9 regions** (Europe, Middle East,
Asia, Africa, North America, South America, Oceania, global markets, space/science).

## Design: tokenized, picture-first

No body text anywhere. Every story is **picture + one-line headline + a large
number / proper-noun token** — the picture carries the information, because
unreadable small text only costs points. Three oversized heroes lead; middle
tiles are headline + number only; the rest of the day exists as region-coloured
chips and numbered map pins. Colour is fixed per region, so colour = region
reads inside the picture (no legend prose). Type is heavy and crush-resistant;
numbers and proper nouns are pulled out large. No borders or rules between
stories — whitespace and tinted panels only. Legible at ~300 px across.

## The three heroes

1. **COP31 COLLAPSES — NO DEAL** (Antalya): 130+ nations rejected the
   fossil-fuel-silent draft; the first COP to end with no deal since 2009.
2. **HUANG IS BACK — +31%** (Nvidia): Jensen Huang reinstated as CEO; Nvidia
   added ~$950bn in one day, Nasdaq +6.51%, its best day since April 2025.
3. **NATO: WE WILL DEFEND SPACE — 60 DAYS** (Berlin): reports of Russia's
   nuclear-armed Sputnik-S satellite, launch possible by December; Rutte
   pledges the alliance will defend its assets in space.

## The numbers band

Dow 50,018 (tops 50,000) · Nasdaq +6.51% · 699 drones Russia says it downed ·
47,000 women killed by partners in 2025 · $41bn Sanofi buys Insmed · 5.6
Nepal quake.

## Also inside

ICJ Rohingya ruling backed by 14 nations (9–6) · Gaza “toxic land” · Zaporizhzhia
hit again · Kyiv hits Russian ships off Libya · Yemen 25 dead · Iran: singer
given 74 lashes · Virginia + Oregon sue SpaceX over Grok · Guterres: global AI
rules in 1 year · Ebola teams trapped in DRC · US loses measles elimination
status · Tiangong's first foreign crew · farthest black hole ever found — plus
34 more stories as chips and map pins.

## Build

`poster.html` is the poster source (1024×1024, inline hand-drawn SVG art, local
fonts only, no network). `render.mjs` renders it with Puppeteer + headless
Chromium to `entry.png` (deterministic: two renders give identical bytes).
`main.py` (Python 3.13, stdlib only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR`.

## Sources

Reuters, AP, BBC, UN News, Investopedia, Zacks, Smithsonian, Japan Times,
Kyiv Post, Horizon, Principia, The Global Eye, Seven Lights — all figures as
reported on 24 November 2026 UTC.
