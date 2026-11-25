// Render poster.html to entry.png at exactly 1024x1024 using headless Chromium
// via the puppeteer install in the render-test workspace.
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { statSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const puppeteer = require("/home/hatch/workspace/makefun/render-test/node_modules/puppeteer");

const here = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(here, "poster.html");
const outPath = path.join(here, "entry.png");

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--force-color-profile=srgb"],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: outPath, type: "png" });
  console.log("wrote", outPath, statSync(outPath).size, "bytes");
} finally {
  await browser.close();
}
