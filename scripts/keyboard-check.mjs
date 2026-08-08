import { chromium } from "playwright";

const BASE = "http://localhost:4321/comp4020-crit2-Easton-Yi";
const PAGES = ["index", "observe", "start-here", "about"];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const p of PAGES) {
  await page.goto(`${BASE}/${p}.html`, { waitUntil: "networkidle" });
  console.log(`\n=== ${p} ===`);

  // First Tab should land on the skip link, and it should become visible.
  await page.keyboard.press("Tab");
  const first = await page.evaluate(() => {
    const el = document.activeElement;
    const cs = getComputedStyle(el);
    return { tag: el.tagName, cls: el.className, left: cs.left, text: el.textContent?.trim() };
  });
  console.log("first focus:", first);

  const seen = [first];
  for (let i = 0; i < 60; i++) {
    await page.keyboard.press("Tab");
    const info = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const cs = getComputedStyle(el, null);
      const outline = cs.outlineStyle;
      const rect = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        text: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 40),
        href: el.getAttribute("href"),
        outline,
        visible: rect.width > 0 && rect.height > 0,
      };
    });
    if (!info) break;
    seen.push(info);
  }
  console.log(`tab stops: ${seen.length}`);
  const noOutline = seen.filter((s) => s.outline === "none");
  const invisible = seen.filter((s) => s.visible === false);
  console.log("elements with no focus outline:", noOutline.length, noOutline.slice(0, 5));
  console.log("focused but not visible (offscreen without skip-link mechanism):", invisible.length, invisible.slice(0,5));
  for (const s of seen) console.log(`  <${s.tag}> "${s.text}" href=${s.href}`);
}

await browser.close();
