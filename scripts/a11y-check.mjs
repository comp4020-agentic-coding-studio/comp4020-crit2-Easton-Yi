import { chromium } from "playwright";
import fs from "node:fs";

const AXE_SRC = fs.readFileSync(
  new URL("../node_modules/axe-core/axe.min.js", import.meta.url),
  "utf8",
);

const BASE = "http://localhost:4321/comp4020-crit2-Easton-Yi";
const PAGES = ["index", "observe", "start-here", "about"];
const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const browser = await chromium.launch();

for (const page of PAGES) {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await ctx.goto(`${BASE}/${page}.html`, { waitUntil: "networkidle" });

    const overflow = await ctx.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    const overflowsX = overflow.scrollWidth > overflow.clientWidth;

    await ctx.addScriptTag({ content: AXE_SRC });
    const results = await ctx.evaluate(async () => {
      return await window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
      });
    });
    console.log(`\n=== ${page} (${vp.name}) axe: ${results.violations.length} violations ===`);
    for (const v of results.violations) {
      console.log(`  [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} nodes)`);
      for (const n of v.nodes) console.log(`    - ${n.target.join(" ")}`);
    }

    console.log(`${page} @ ${vp.name} (${vp.width}px): overflowsX=${overflowsX} (scrollWidth=${overflow.scrollWidth}, clientWidth=${overflow.clientWidth})`);
    await ctx.close();
  }
}

await browser.close();
