// render.mjs — render poster.html to entry.png at exactly 1024x1024.
//
// Build-time tool only: the submitted program is main.py, which copies the
// pre-rendered entry.png. Rendering uses Puppeteer + headless Chromium from
// the shared render-test workspace on this machine.
//
// Usage:  node render.mjs
// Output: entry.png next to this file (deterministic: fixed viewport, fixed
// device scale factor, local fonts only, no network).

import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));

// Puppeteer lives in the sibling render-test workspace's node_modules.
const require = createRequire('/home/hatch/workspace/makefun/render-test/package.json');
const puppeteer = require('puppeteer');

const htmlPath = join(here, 'poster.html');
const outPath = join(here, 'entry.png');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0', timeout: 60000 });
  // Make sure the local @font-face fonts are fully loaded before the shot.
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: outPath, type: 'png' });
} finally {
  await browser.close();
}

const bytes = readFileSync(outPath);
const sha = createHash('sha256').update(bytes).digest('hex');
console.log(`entry.png  ${bytes.length} bytes  sha256 ${sha}`);
