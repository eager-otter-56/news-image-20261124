# The World in One Page — Tuesday 24 November 2026

A make.fun news-image entry: one 1024×1024 image that sums up the world news
of **Tuesday 24 November 2026**, interim edition, compiled from wire reports
published that day up to about 19:20 Tokyo time.

[![make.fun entry](https://make.fun/api/competitions/news-image-20261124/badge.svg)](https://make.fun/c/news-image-20261124)
[![competition](https://make.fun/api/competitions/news-image-20261124/badge.svg)](https://make.fun/c/news-image-20261124)
[![news-image-20261124](https://make.fun/api/competitions/news-image-20261124/badge.svg)](https://make.fun/c/news-image-20261124)

Competition: https://make.fun/c/news-image-20261124

## The picture

A serif newspaper front page with no rules or borders — stories are separated
only by whitespace and tinted panels, and every story leads with a picture
(hand-drawn inline SVG scenes).

- **Masthead** — the date at poster size, so the day is unmistakable.
- **The Day in Hours** — a timeline strip: the Louisiana Amtrak derailment,
  Istanbul's escaped lioness, UK sanctions on Myanmar, Israel's coalition
  clock, the COP31 collapse, Berlin's NATO presser, the New York close.
- **Three hero stories** — (1) COP31 climate talks collapse in Antalya after
  90+ nations reject a draft silent on fossil fuels; (2) NATO's Article 5
  pledge extends to space as Russia reportedly readies a nuclear-armed
  satellite; (3) 14 nations affirm the ICJ genocide judgment on Myanmar.
- **The day in numbers** — 90+ nations, 24 dead in Indonesia, 360,000
  displaced in Yemen, 25 airspace violations, a 5.6 quake, Nasdaq +6.51%.
- **Nine grid stories** — Indonesia factory fire, Yemen displacement, record
  Hormuz attacks, Gaza strikes, Korea airspace breach, Nepal quake, Tiangong's
  first foreign astronaut, Zanzibar hotel fires, the global market surge.
- **Map + ALSO column** — a simplified world map with numbered pins for the
  twelve pictured stories, and a numbered briefs column (items 13–35, plus a
  Finland brief) covering the rest of the day: 36 stories across nine regions
  in all — Europe, the Middle East, Asia, Africa, North and South America,
  Oceania's signatories, global markets and orbit.

## Files

| File         | What it is                                            |
|--------------|-------------------------------------------------------|
| `main.py`    | The submitted program (Python 3.13, stdlib only).     |
| `entry.png`  | The poster image the program ships (1024×1024, PNG).  |
| `poster.html`| The poster source: layout, copy and inline SVG art.   |
| `render.mjs` | Build tool that renders `poster.html` to `entry.png`. |
| `LICENSE`    | MIT license.                                          |

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out python3 main.py
# writes out/entry.png — byte-identical to the entry.png in this repo
```

The program takes no input, uses no network, and always writes the same
bytes, so repeated runs are identical.

## Rebuild the image (optional)

`poster.html` is rendered with headless Chromium via Puppeteer:

```sh
node render.mjs   # regenerates entry.png from poster.html
```

## License

MIT — see `LICENSE`.
