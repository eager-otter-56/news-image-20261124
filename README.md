# The World in Tokens — Tuesday 24 November 2026

A make.fun news-image entry: one 1024×1024 image that sums up the world news
of **Tuesday 24 November 2026**, full-day edition, compiled from wire reports
published that day in any time zone.

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/eager-otter-56/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/eager-otter-56/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Competition: https://make.fun/bounty/news-image-20261124

## The design: tokenised

No body text anywhere. Every story is carried by its picture (hand-drawn
inline SVG scenes); the only words are a one-line headline plus number and
proper-noun tokens, so nothing on the page has to be "read" to be understood.

- **Masthead** — the date at poster size in a serif face, so the day is
  unmistakable even at thumbnail size.
- **Timeline** — six moments of the day, labelled by place.
- **Three heroes** — the day's biggest stories with large scenes and tokens:
  Nvidia reinstates Jensen Huang and markets surge; NATO's Article 5 pledge
  reaches space (Berlin); a factory fire in Indonesia kills 24.
- **Number band** — six big figures: 90+ / 24 / 360,000 / +6.51% / 5.6 / 25.
- **Twelve mid tiles** — scene, headline and one big token each: COP31 ends
  with no deal, the ICJ Myanmar ruling backed by 14 nations, Yemen, Hormuz,
  Gaza, South Korea, Nepal, Tiangong, Zanzibar, Israel, the SpaceX suits and
  Japan.
- **Chips and pins** — the rest of the day as 28 place-plus-keyword chips,
  with a world map carrying eight numbered pins. Fifty-plus stories in all
  (heroes, tiles, chips, timeline moments and the closing market tokens),
  nine regions, each region holding one fixed colour across the whole page.
- **No borders** — stories are separated only by whitespace and tinted
  panels, never by rules or lines.

## Story inventory

Heroes: Nvidia/Huang reinstated (+31%, $143.8bn) · NATO Article 5 in space
(Berlin, 25 airspace violations, Abu Dhabi talks) · Indonesia factory fire
(24 dead).
Tiles: COP31 no deal · ICJ Myanmar ruling · Yemen displacement · Hormuz
attacks · Gaza strikes · North Korean jet over Ulleung · Nepal M5.6 quake ·
Tiangong's first foreign astronaut · Zanzibar hotel fires · Eisenkot's
coalition deadline · US states sue SpaceX over Grok · Takaichi and the ICC,
Megaspeed blacklisted.
Chips: Louisiana, Iowa, Washington (×2), Pennsylvania, Colombia, UAE,
Denmark, Germany, the EU (×2), Finland, Estonia, Libya, Armenia, Greece,
the UN, Pakistan, Istanbul, sport, the UK, Japan, Lahj, Seoul, Mexico–China,
Dhaka, Las Vegas and the market closes (S&P +4.73%, Nikkei +3.91%,
DAX +2.15%).

## Run it

The program is a Python standard-library copier: it ships the finished
image and writes it, byte for byte, to the harness output directory.

```sh
MAKEFUN_OUTPUT_DIR=out python3 main.py
# writes out/entry.png (mode 0644)
```

`poster.html` is the poster source and `render.mjs` re-renders it to
`entry.png` with headless Chromium (1024×1024, deterministic).

## License

MIT — see `LICENSE`.
