# Process overview

A reading-guide to how this redesign came together, following
`docs/PROJECT_BRIEF.md` §15's checklist. `docs/CONTENT_SOURCES.md` and
`docs/CRIT_QA_NOTES.md` carry the full detail behind several sections below;
this file points at that detail rather than duplicating it.

## 1–2. Organisation and original site

The [Canberra Astronomical Society](https://casastronomy.org.au/) (CAS), a
real community organisation established in 1969 for amateur astronomers in
the ACT and surrounding regions. It connects beginners and experienced
observers with the ANU Research School of Astronomy and Astrophysics at Mt
Stromlo. This is an unsolicited student redesign, not work commissioned or
endorsed by CAS — the deployed site and this repo both say so.

## 3–4. Content audit and evidence-backed problems

`docs/PROJECT_BRIEF.md` §3 records the audit: the homepage mixes a welcome
message, meeting updates, an external conference notice, member images and a
notice about an unmaintained members' area with no strong visitor sequence;
beginner-reassurance content ("no telescope required") exists but isn't
prominent; meeting, outreach, observing, joining and location information is
spread across About, Outreach, Calendar, Join and Contact; and some legacy
interface elements (broken gallery routes, login/archive sidebars) don't
serve a public visitor. None of this is a claim that the site "looks dated" —
the argument is about information structure, not visual style.

## 5–7. Audience, redesign proposition and information architecture

Primary audience: a Canberra resident or ANU student curious about the night
sky who has never joined an astronomy society, doesn't know whether they need
a telescope, and isn't sure what a first visit involves. The redesign
reorganises the site around what that visitor needs to decide — observe,
start, visit, join — rather than around the content CAS has accumulated,
giving four pages instead of the original's article/section sprawl: Home,
Observe, Start Here, About & Join
([`a2d9a77`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/a2d9a77)).

## 8. Visual direction and rationale

Concept: "Canberra Night-Sky Field Guide" — deep night colours, warm
observing-red/amber accents, editorial typography, and restrained
constellation motifs, deliberately avoiding a generic space-startup look. The
hero treatment is a hand-drawn CSS/SVG constellation-and-horizon motif rather
than a stock photo, so it carries no licence and doesn't compete with the
content
([`e832f53`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/e832f53)).
Colour tokens were contrast-checked against both dark backgrounds used
(`--bg-deep`, `--surface-navy`) — see §15 below for the actual ratios found.

## 9–10. Content sources, verification dates, image sources and licences

Every factual claim traces to `docs/CONTENT_SOURCES.md`'s per-fact table (source
page, date checked, stable/changing status); changing details such as meeting
dates always link to the official CAS calendar rather than stating a date.
The three images are all CC BY-SA from Wikimedia Commons, downloaded via each
file's `Special:FilePath` redirect, validated with the system `file` command
against the actual bytes rather than trusted by extension, and each carries a
visible on-page credit linking to its licence and Commons source — full table
in `docs/CONTENT_SOURCES.md`
([`97c46f4`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/97c46f4)).

## 11–14. Directing the agent, proposals, mistakes and corrections

The agent was grounded up front with `docs/PROJECT_BRIEF.md` and
`docs/CONTENT_SOURCES.md` rather than an open-ended "make it better" prompt,
and work proceeded stage by stage (roughly following §17's suggested
sequence), each stage reviewed before the next was authorised with a short
prompt — e.g. `go to stage 7`, which produced the responsive/accessibility
pass in
[`346c452`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/346c452).
No agent proposal from this stretch of work was rejected outright; the
moments that mattered were mistakes the agent's own output surfaced and then
corrected, not choices reversed by review:

1. **The image pipeline broke the build, not just a line of code.**
   Adding the three licensed photos through Astro's `<Image>` component (so
   they're auto-converted to WebP and resized, not shipped as raw JPEGs/PNGs)
   failed with `MissingSharp` — `sharp` existed only as a transitive
   dependency, not one the build could resolve directly. The obvious
   workaround would have been to drop `<Image>` and use plain `<img>` tags
   against the original files, but that would have shipped ~600 KB–3.4 MB
   images instead of optimised ones. Adding `sharp` as an explicit
   devDependency fixed the resolution gap without giving up the pipeline; the
   rebuild confirmed it, converting `telescope.jpg` from 620 KB to a 39 KB
   WebP and `outreach-domes.png` from 3.4 MB to 73 KB
   ([`97c46f4`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/97c46f4)).

2. **A screenshot that looked broken wasn't.** After that fix, all three new
   images rendered as blank space in full-page Playwright screenshots. Rather
   than assume the site was broken and start changing image markup blindly, I
   checked each layer in turn: the raw optimised-image bytes (fine), the
   image's DOM/CSSOM state after load (`complete`, correct dimensions,
   visible per computed style — all fine), a screenshot of just the `<img>`
   element (rendered correctly), and a normal (non-full-page) screenshot at
   real viewport size after scrolling to it (also correct). That isolated the
   fault to Playwright's full-page screenshot stitching, not the page —
   real users in a real browser viewport, which is how the deployed site is
   graded, never see this. `loading="eager"` was kept on the three images as
   a minor, independently-justified improvement, but no code change was made
   to "fix" a bug that wasn't in the site.

3. **An automated check found a real, invisible problem.** `pnpm check`
   doesn't cover accessibility or responsive behaviour — CLAUDE.md is
   explicit that wiring those sensors is the student's own work — so Stage 7
   added three Playwright-based scripts (`scripts/a11y-check.mjs` for
   axe-core WCAG2A/AA, `scripts/keyboard-check.mjs` for tab order and focus
   visibility, `scripts/touch-target-check.mjs` for the 44 px touch-target
   minimum) run across all four pages at mobile/tablet/desktop viewports.
   The touch-target script found two real gaps invisible on a quick look:
   the header wordmark link and each action/activity card's primary CTA link
   were 26–29 px tall against a 44 px target. Rather than wrapping every link
   in a new padded container, I extended each with the same
   `inline-flex`/`min-height: 2.75rem` pattern the primary nav links already
   used, keeping the fix consistent with an existing convention. Re-running
   the script confirmed both were gone from the "below 44 px" list, and a
   full re-run of the overflow/axe/contrast checks confirmed no regression
   ([`346c452`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/346c452)).

## 15. Accessibility and responsive checks

At mobile (390×844), tablet (768×1024) and desktop (1440×900) across all four
pages: zero horizontal overflow (`scrollWidth <= clientWidth`, no
`overflow-x: hidden` band-aid anywhere in `src/`), zero axe-core WCAG2A/AA
violations, full keyboard reachability with the skip link as the first tab
stop and a visible `:focus-visible` ring on every real interactive element,
and (after the fix above) every standalone tap target at or above 44 px —
remaining small targets are inline text-within-a-sentence links (citations,
footer, figcaption credits), which WCAG's target-size guidance exempts.
Colour contrast for every text/accent token against both dark backgrounds
used ranges from 5.35:1 to 16.66:1, comfortably past the 4.5:1 AA floor for
normal text
([`346c452`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/346c452)).

## 16. Build, link and deployment verification

`pnpm check` (typecheck → build → oxlint → stylelint → vitest) is green: 0
type errors, a clean build, 0 lint errors, 33/33 tests passing. Full-page
screenshots at both graded viewports (1920×1080, 390×844) were taken and
reviewed for all four pages after the Stage 7 changes, then re-checked against
the live deployed URL below.

Deploying surfaced one real gap: GitHub Pages had never been enabled on this
repo, so the first CI run's `deploy` job failed at `configure-pages` with
"Get Pages site failed... Not Found." Enabling Pages with the Actions build
type fixed it, and the rerun went green
([`58a601e`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Easton-Yi/commit/58a601e)).
The live site — <https://comp4020-agentic-coding-studio.github.io/comp4020-crit2-Easton-Yi/>
— was then independently verified rather than assumed correct from a green
CI badge: all four pages return HTTP 200, `linkinator` run against the live
URL (all four pages, `--recurse`) scanned 20 links with 0 broken — the same
total and same zero found against a locally-mounted `dist/` served under the
matching `/comp4020-crit2-Easton-Yi/` subpath, which is the specific failure
mode CLAUDE.md warns about (a base-path misconfiguration that "looks fine
locally while every asset 404s on the live URL") — and full-page screenshots
at both graded viewports were re-taken against the live URL for all four
pages, confirming imagery, layout and the hero motif render correctly with no
asset breakage beyond the site's own build.

## 17. Remaining limitations

This is a static student concept, not a production replacement for CAS's
live site: no live event data, member accounts, payments or backend of any
kind. Anywhere a visitor needs current information (meeting dates, joining,
contact), the site links to the official CAS pages rather than restating
them.
