import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join('/home/hatch/workspace/makefun/render-test/', 'package.json'));
const puppeteer = require('puppeteer');

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--force-color-profile=srgb', '--font-render-hinting=none'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(here, 'poster.html'), { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(here, 'entry.png') });
await browser.close();

const bytes = readFileSync(path.join(here, 'entry.png'));
const sha = createHash('sha256').update(bytes).digest('hex');
console.log('entry.png', bytes.length, 'bytes');
console.log('sha256', sha);
