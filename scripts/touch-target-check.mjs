import { chromium } from "playwright";

const BASE = "http://localhost:4321/comp4020-crit2-Easton-Yi";
const PAGES = ["index", "observe", "start-here", "about"];
const MIN = 44;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

let anyFail = false;
for (const p of PAGES) {
  await page.goto(`${BASE}/${p}.html`, { waitUntil: "networkidle" });
  const results = await page.evaluate((MIN) => {
    const els = document.querySelectorAll("a, button");
    const out = [];
    for (const el of els) {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue; // hidden/skip-link off-canvas
      out.push({
        text: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 40),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
        small: rect.width < MIN || rect.height < MIN,
      });
    }
    return out;
  }, MIN);
  const small = results.filter((r) => r.small);
  console.log(`\n=== ${p} === total interactive: ${results.length}, below ${MIN}px: ${small.length}`);
  for (const s of small) {
    console.log(`  SMALL: "${s.text}" ${s.w}x${s.h}`);
    anyFail = true;
  }
}
await browser.close();
console.log(anyFail ? "\nSome targets below 44px found." : "\nAll interactive elements meet the 44px touch target minimum.");
