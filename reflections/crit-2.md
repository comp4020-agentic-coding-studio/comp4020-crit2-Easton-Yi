# Crit 2 reflection

**The deployed URL:** https://comp4020-agentic-coding-studio.github.io/comp4020-crit2-Easton-Yi/

**The breakthrough.** `pnpm check` going green kept feeling like proof the
site was done, but it doesn't touch accessibility or responsive behaviour at
all — that gap is exactly what CLAUDE.md warns about. The shift was realising
that saying "looks fine to me" about keyboard order, touch targets or colour
contrast wasn't good enough, and that re-prompting the agent to "check
accessibility" wouldn't be either, since neither of us could see a 26px-tall
tap target by eye. So instead of asking again, I had the agent build the
sensor: three small Playwright scripts that actually measure overflow, run
axe-core, walk the tab order, and measure bounding boxes. The moment the
touch-target script came back with two real, currently-invisible failures —
the header wordmark and every action-card link were under the 44px minimum —
it stopped being a hypothetical checklist item and became a fixable, provable
problem. That's the version of "process evidence" I actually trust: a check
that could have failed and would have told me.

**What it changed.** I've mostly directed agents by describing outcomes and
judging the result. This project pushed me toward directing them by building
the thing that judges the result — write the check, then let the check argue
with the code, rather than arguing with the agent myself every time. That's
the developer I want to be: less "does this look right to me" and more
"what would prove this wrong if it were."
