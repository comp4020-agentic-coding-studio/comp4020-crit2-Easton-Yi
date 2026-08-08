# COMP4020 Crit 2 — Canberra Astronomical Society Unsolicited Redesign (Summarized by GPT)

## 1. Task

Build a polished static redesign concept for the Canberra Astronomical Society (CAS):

Official website:
https://casastronomy.org.au/

This is an unsolicited student redesign for COMP4020 Crit 2. It is not an official CAS website and must not imply endorsement by CAS.

Before changing code:

1. Read the repository’s CLAUDE.md completely.
2. Inspect the starter structure, package.json, existing scripts and checks.
3. Preserve the starter’s required build and deployment contract.
4. Confirm the GitHub Pages base path and routing requirements.
5. Present a brief implementation plan before making large changes.
6. Do not remove course files or replace the starter configuration without a clear reason.

Use Astro as the static site stack unless the repository already contains an equivalent approved static setup.

The finished project must:

- build with `pnpm build`;
- emit the complete site into `dist/`;
- work under its GitHub Pages repository base path;
- pass all checks supplied by the starter;
- remain fully static;
- contain no backend, database, login, booking system or server-side form handler.

---

## 2. Project purpose

The original CAS site contains valuable and credible information, but it is organised around accumulated content and WordPress features rather than the needs of a new visitor.

The redesign should organise the experience around four visitor intentions:

1. Understand who CAS is.
2. Discover how people can observe the sky with CAS.
3. Learn whether a beginner is welcome and what to expect.
4. Find the society, attend a meeting or continue to the official joining process.

The central redesign proposition is:

“The original site is organised around the content CAS has accumulated. This redesign is organised around what a new visitor wants to do: observe, learn, visit and join.”

The site should help a first-time visitor answer the following questions within approximately ten seconds:

- What is CAS?
- What does CAS do?
- Is it suitable for a beginner?
- Do I need my own telescope?
- Where does the society meet?
- What should I do next?

---

## 3. Respectful analysis of the original website

Treat the organisation respectfully. The redesign is motivated by appreciation for CAS and its outreach work, not by ridicule of an older volunteer-maintained website.

### Problem 1: The homepage lacks a clear visitor journey

The current homepage combines:

- a general welcome;
- a meeting-location update;
- an external conference announcement;
- a large collection of astronomy images;
- links to articles;
- a notice about an unmaintained members’ area.

These elements may each be useful, but they have similar visual priority. A newcomer does not receive a concise explanation of CAS followed by clear actions.

### Redesign response

Create an intentional homepage hierarchy:

1. One-sentence CAS value proposition.
2. Three primary visitor actions.
3. A prominent beginner reassurance.
4. A short overview of CAS activities.
5. Mt Stromlo meeting/location information.
6. A link to the official CAS site and calendar.

The homepage must lead with CAS itself, not temporary announcements.

---

### Problem 2: Navigation reflects stored content rather than visitor goals

The original navigation includes Articles, Image Galleries, Resources, Calendar and a large About submenu. This describes categories in the CMS, but not necessarily what a first-time visitor is trying to accomplish.

Important information is distributed across About, Outreach, Calendar, Join and Contact.

### Redesign response

Use four clear top-level destinations:

- Home
- Observe
- Start Here
- About & Join

The navigation labels must use plain language and remain consistent on every page.

Do not reproduce the original site’s entire archive, resource collection or administrative structure.

---

### Problem 3: Beginner-friendly information is present but not prominent

The original site explains that beginners are welcome and that members do not need to own a telescope. This is one of the organisation’s strongest messages, but it is not the central message of the current homepage.

### Redesign response

Make “No telescope required” a prominent and repeated reassurance.

Create a dedicated Start Here page explaining:

- who CAS welcomes;
- what happens at a typical meeting;
- what a first-time visitor should expect;
- how someone can begin without equipment;
- that prospective members can attend up to two meetings before joining;
- where to confirm current dates and details.

Do not invent beginner programs or equipment-loan services unless an official source confirms them.

---

### Problem 4: Event and location information is fragmented

Meeting, observing and outreach information appears across multiple pages. Event information may change, and different cached pages can display different upcoming-event fragments.

A redesign must not pretend that a static student site provides a live authoritative calendar.

### Redesign response

Explain stable activity types rather than building a fake live event system:

- monthly meetings;
- public stargazing and outreach;
- members’ dark-sky observing;
- school outreach;
- astronomy presentations and skills sessions.

Include a clear “Check the official CAS calendar” link wherever current dates matter.

Display Mt Stromlo as the primary meeting context, but direct visitors to the official calendar for confirmation before travelling.

If any exact date is shown:

- verify it against an official source on the day it is added;
- record the verification date;
- label the information as checked on that date;
- retain a prominent link to the official source.

---

### Problem 5: Legacy and broken interface elements distract from core information

Some original gallery routes currently display a template error. Other pages include member login controls, tag clouds, old archives, recent comments and repeated sidebars even when those elements do not help a public visitor.

The homepage also states that the members’ area has not been maintained.

### Redesign response

Do not reproduce:

- login interfaces;
- member-only areas;
- tag clouds;
- recent-comment widgets;
- old article archives;
- broken galleries;
- WordPress search and sidebar elements;
- committee administration content that is not necessary for visitors.

Use a small, purposeful selection of imagery with valid attribution instead of attempting to reproduce the whole gallery.

---

### Problem 6: The organisation’s strongest identity is under-expressed

CAS is more than an archive of astronomy articles. It connects:

- amateur astronomy;
- beginners and experienced observers;
- professional astronomy at Mt Stromlo;
- ANU/RSAA;
- public education;
- schools and the broader Canberra community.

### Redesign response

Present CAS as a bridge between Canberra residents and the scientific work associated with Mt Stromlo.

The visual and editorial identity should feel:

- knowledgeable but welcoming;
- scientific but not institutional;
- atmospheric but readable;
- local to Canberra rather than a generic space website.

---

## 4. Target audience

Design primarily for:

### Primary audience

A Canberra resident or ANU student who is curious about astronomy but has never attended an astronomy club.

They may:

- not own a telescope;
- not know the difference between a meeting and an observing night;
- be unsure whether CAS is only for experts;
- want to know where CAS meets;
- want a low-pressure first step.

### Secondary audiences

- amateur astronomers looking for a local community;
- parents, teachers or schools interested in outreach;
- visitors looking for public stargazing opportunities;
- potential members seeking the official joining process.

Do not design primarily for existing members, committee administration or professional astronomers.

---

## 5. Content principles

All factual claims must be grounded in an official source.

Use these primary sources:

- Home:
  https://casastronomy.org.au/

- About:
  https://casastronomy.org.au/about/

- Outreach:
  https://casastronomy.org.au/about/outreach/

- Calendar:
  https://casastronomy.org.au/calendar/

- Join:
  https://casastronomy.org.au/join/

- Contact:
  https://casastronomy.org.au/about/contact/

- Mt Stromlo/ANU public astronomy information, where needed:
  https://rsaa.anu.edu.au/news-events/event-series/mount-stromlo-public-astronomy-nights

### Content workflow

For each section:

1. Identify the relevant official page.
2. Extract factual points, not whole paragraphs.
3. Decide what the target visitor needs.
4. Rewrite the information concisely in original language.
5. Preserve the meaning and important qualifications.
6. Link to the official source when details may change.
7. Record the source and date checked in PROCESS.md.

Do not scrape or mirror the original site.

Do not copy paragraphs wholesale.

Do not invent:

- event dates;
- membership prices;
- telescope access promises;
- equipment-loan services;
- booking procedures;
- venue access details;
- current office holders;
- official partnerships beyond those confirmed by sources.

Use 8 August 2026 as the initial content-audit date, but recheck changing information before final submission.

---

## 6. Required information to communicate

The redesign should communicate these stable, officially grounded facts in rewritten language:

- CAS was established in 1969.
- It serves amateur astronomers in Canberra, the ACT and surrounding areas.
- Beginners and experienced astronomers are welcome.
- A person does not need to own a telescope to join.
- CAS runs monthly meetings associated with Mt Stromlo.
- Meetings commonly include skills-oriented material and astronomy presentations.
- CAS works with ANU’s Research School of Astronomy and Astrophysics.
- CAS participates in public stargazing and school outreach.
- Members have access to dark-sky observing activities.
- Prospective members may attend up to two meetings before joining.
- Current dates and attendance details should be confirmed through official CAS channels.

These are factual inputs. Rewrite them rather than copying their original sentences.

---

## 7. Information architecture and page requirements

Build four substantive pages.

### Page 1: Home — “Look up, Canberra.”

Purpose:
Introduce CAS and give a first-time visitor an immediate path forward.

Recommended structure:

1. Accessible site header.
2. Hero section:
   - eyebrow: “Canberra Astronomical Society”
   - headline: “Look up, Canberra.”
   - concise explanation of CAS;
   - primary CTA: “Start here”
   - secondary CTA: “Explore observing”
3. Three action cards:
   - Observe the sky
   - Attend a meeting
   - Join the community
4. Beginner reassurance:
   - “No telescope required”
   - short explanation that curiosity is enough to begin.
5. “What CAS does” section:
   - Observe
   - Learn
   - Share
6. Mt Stromlo/location panel:
   - explain the meeting context;
   - link to the official calendar;
   - do not present unverified travel instructions.
7. Short “Why CAS matters” section connecting amateur astronomy, professional science and public outreach.
8. Footer containing:
   - visible link to the real CAS website;
   - project disclaimer;
   - content verification date;
   - image credits link if needed.

---

### Page 2: Observe

Purpose:
Explain the different ways CAS engages with the night sky without pretending to provide a live calendar.

Recommended structure:

1. Page introduction.
2. Activity cards:
   - Public stargazing
   - Monthly meetings
   - Members’ dark-sky nights
   - School and community outreach
3. “Choose your next step” section:
   - new visitor;
   - prospective member;
   - school/community enquiry.
4. “Before you go” panel:
   - astronomy activities may depend on weather;
   - check current official information;
   - follow the official calendar or outreach page.
5. Strong CTA linking to the official CAS calendar.

Do not implement booking functionality.

Do not imply that every activity is open to the general public.

Clearly distinguish public events from member activities.

---

### Page 3: Start Here

Purpose:
Reduce uncertainty for beginners.

Recommended structure:

1. Headline such as “Curious is enough.”
2. Prominent “No telescope required” statement.
3. “Your first CAS meeting” step sequence:
   - check the official calendar;
   - choose a meeting;
   - arrive as a prospective visitor;
   - introduce yourself to a member;
   - decide later whether to join.
4. What a meeting may include:
   - skills session;
   - talk or presentation;
   - conversation with other observers;
   - telescope observing when conditions and arrangements permit.
5. Beginner FAQ:
   - Do I need a telescope?
   - Do I need astronomy experience?
   - Can I attend before joining?
   - Where are meetings held?
   - Where do I confirm the current date?
6. CTA to the official joining page.

Avoid unsupported claims such as “all equipment is provided.”

---

### Page 4: About & Join

Purpose:
Explain CAS’s identity, community role and official joining path.

Recommended structure:

1. Brief history:
   - established in 1969;
   - serving Canberra and the ACT.
2. “Between community and observatory” section:
   - amateur and professional astronomy;
   - Mt Stromlo and RSAA relationship;
   - public education and outreach.
3. Membership-benefit summary:
   - meetings;
   - presentations;
   - observing opportunities;
   - member publication;
   - community.
4. “Try before you join” section:
   - prospective members may attend up to two meetings.
5. Official joining CTA:
   - link to the real CAS Join page;
   - do not reproduce payment details or membership forms.
6. Contact CTA:
   - link to official contact information;
   - avoid republishing personal phone numbers unless essential.
7. Visible original-website link and redesign disclaimer.

The long history of the CAS badge is not required in this four-page scope.

---

## 8. Content data implementation

This is a static site. Do not use a database or fetch the CAS site at runtime.

Stable repeated content may be stored in local TypeScript data.

Suggested structure:

src/
  components/
    SiteHeader.astro
    SiteFooter.astro
    Hero.astro
    ActionCard.astro
    ActivityCard.astro
    LocationPanel.astro
    SourceNote.astro
  data/
    activities.ts
    faq.ts
    sources.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    observe.astro
    start-here.astro
    about.astro
  styles/
    global.css

Example activity object:

{
  title: "Public stargazing",
  audience: "Canberra community",
  description: "Guided opportunities to experience the night sky through CAS outreach.",
  officialUrl: "https://casastronomy.org.au/about/outreach/",
  availability: "Check official details"
}

Use data only where it removes genuine repetition.

Do not over-engineer a content-management system for four pages.

All external URLs must be ordinary links. Open external links safely and make it clear when the visitor is leaving the redesign.

---

## 9. Visual direction

Use the concept:

“Canberra Night-Sky Field Guide”

The result should not look like:

- a generic space startup;
- a NASA imitation;
- a science-fiction game;
- a black template with random glowing stars;
- an image gallery with little written content.

It should feel like a contemporary field guide produced for local night-sky observation.

### Suggested palette

Define reusable CSS variables, for example:

- deep night background: #07111F
- elevated navy surface: #0D1B2A
- primary text: #F4F0E8
- muted text: #AAB7C4
- warm observing red: #E46A4A
- amber highlight: #F2B95F
- cool sky blue: #78A9D1
- subtle border: rgba(244, 240, 232, 0.16)

Check actual contrast rather than blindly using these exact values.

Warm red/orange accents should refer subtly to night-observation interfaces and dark adaptation. They should not dominate every section.

### Typography

Use reliable local/system font stacks unless the starter already supports self-hosted fonts.

Possible approach:

- editorial serif or restrained display face for major headlines;
- clean sans-serif for body content;
- monospace only for small observational labels, coordinates or metadata.

Do not use monospace for all body text.

Maintain comfortable line length, approximately 60–75 characters for prose.

### Visual motifs

Use sparingly:

- constellation-line patterns;
- observation labels;
- horizon arcs;
- coordinate-like metadata;
- star-chart dots;
- thin instrument-style rules;
- time/location tags.

These motifs must remain decorative and must not interfere with readability.

Do not create dense scientific diagrams that imply false astronomical precision.

### Imagery

Use a small number of meaningful, high-quality images.

Preferred sources:

- clearly labelled public-domain astronomy imagery;
- Creative Commons imagery with compatible reuse terms;
- properly attributed Wikimedia Commons assets;
- official sources whose reuse terms have been checked.

Requirements:

- store final images locally;
- use responsive dimensions;
- provide meaningful alt text;
- specify width and height where practical;
- optimise file size;
- record title, creator, source URL and licence;
- validate downloaded files with the system `file` command;
- do not trust an image extension alone;
- do not hotlink remote images;
- do not assume CAS member photographs are reusable.

Do not download and republish the entire CAS gallery.

A text-based CAS wordmark is acceptable for this student concept. Do not redraw or materially alter the official CAS badge without a clear reason.

---

## 10. Interaction and motion

Keep interaction limited and purposeful.

Allowed examples:

- accessible mobile navigation;
- subtle hover/focus states;
- a restrained star or horizon transition;
- minimal entrance motion that respects reduced-motion preferences.

Do not add:

- autoplay audio;
- parallax that harms readability;
- heavy canvas star fields;
- mouse-following effects;
- fake telescope controls;
- live weather widgets;
- live moon-phase APIs;
- account creation;
- booking forms.

The core experience must work without client-side JavaScript.

---

## 11. Accessibility requirements

Implement:

- semantic `header`, `nav`, `main`, `section` and `footer` landmarks;
- one clear `h1` per page;
- logical heading hierarchy;
- keyboard-accessible navigation;
- visible focus indicators;
- descriptive link text;
- sufficient colour contrast;
- useful image alt text;
- decorative graphics hidden from assistive technology;
- touch targets of reasonable size;
- `prefers-reduced-motion` support;
- no essential information conveyed only by colour;
- responsive behaviour at approximately 360px mobile width and above.

Do not solve horizontal overflow using `overflow-x: hidden`. Fix the component causing the overflow.

---

## 12. Responsive layout

Test at minimum:

- narrow mobile: approximately 360–390px;
- tablet: approximately 768px;
- desktop: approximately 1280–1440px.

Expected behaviour:

- navigation becomes compact but remains usable;
- cards stack cleanly;
- no clipped text;
- no horizontal scrolling;
- hero content remains readable;
- location and CTA panels do not become excessively tall;
- typography scales with controlled `clamp()` values;
- images preserve aspect ratio.

---

## 13. Trust, transparency and freshness

The footer or About page must state something equivalent to:

“An unsolicited student redesign created for COMP4020. This is not the official Canberra Astronomical Society website. For current events, membership and contact information, visit the official CAS website.”

Also include:

“Content last checked: 8 August 2026”

Update that date when facts are reverified.

Current-event links must point to official sources.

Do not use visual language that makes this look like an authorised replacement site.

---

## 14. SEO and document quality

Each page must have:

- a unique page title;
- a concise meta description;
- correct document language;
- sensible canonical/base-path handling if required by the starter;
- no placeholder text;
- no empty links;
- no broken internal routes;
- no unexplained duplicated content.

Use a consistent title pattern such as:

“Observe | Canberra Astronomical Society — Student Redesign”

---

## 15. PROCESS.md requirements

Maintain PROCESS.md while the project develops. Do not fabricate a process retrospectively.

It should include:

1. Organisation selected and why.
2. Link to the original website.
3. Original-site content audit.
4. Evidence-backed problems identified.
5. Target audience.
6. Redesign proposition.
7. Initial information architecture.
8. Visual direction and rationale.
9. Content sources and verification dates.
10. Image sources and licences.
11. Important prompts given to the agent.
12. Agent proposals accepted or rejected.
13. Concrete mistakes or weak choices found during review.
14. How the user corrected those problems.
15. Accessibility and responsive checks.
16. Build, link and deployment verification.
17. Remaining limitations.

Do not claim that an agent made a mistake unless it actually happened.

Do not claim the user attended a CAS event unless the user confirms it.

---

## 16. Reflection requirements

The repository must eventually include:

reflections/crit-2.md

It should answer the course reflection prompts based on the real completed process.

Do not invent the breakthrough or personal lesson before the work occurs. Maintain factual notes during implementation so the final 150–300-word reflection can be grounded in actual decisions and corrections.

---

## 17. Git process

The repository must demonstrate growth over time.

Use logical, reviewable commits rather than one final bulk commit.

Possible sequence:

1. Audit original site and establish content architecture.
2. Add Astro layout, navigation and design tokens.
3. Build homepage and core components.
4. Add Observe and Start Here content.
5. Add About & Join content and source links.
6. Add licensed imagery and attribution.
7. Improve responsive layout and accessibility.
8. Complete process documentation and final checks.
9. Fix issues found in deployed GitHub Pages version.

Do not squash the project into one commit before the crit.

Do not commit generated junk, secrets or unrelated files.

---

## 18. Verification

Before declaring the work complete:

1. Run `pnpm build`.
2. Run every invariant/check script supplied by the starter.
3. Inspect the generated `dist/`.
4. Verify all internal routes under the GitHub Pages base path.
5. Check all official external links.
6. Confirm the original CAS site is visibly linked.
7. Confirm the disclaimer is present.
8. Test keyboard navigation.
9. Test narrow mobile layout.
10. Check for horizontal overflow.
11. Check headings and alt text.
12. Check colour contrast.
13. Confirm all image licences and attributions.
14. Deploy to GitHub Pages.
15. Open the public Pages URL and test it independently.
16. Record the verification in PROCESS.md.

Tests are a minimum technical gate. Passing them does not by itself prove that the site has clear content, strong visual design or a convincing redesign argument.

---

## 19. Definition of done

The project is complete only when:

- it is a coherent four-page static redesign;
- it accurately explains who CAS is, what it does and how to engage;
- it links clearly to the real CAS website;
- it gives beginners a clearer path than the original site;
- its improvement can be articulated in specific information-design terms;
- it does not imitate an official production service;
- it contains no backend or live database dependency;
- it builds into `dist/`;
- starter checks pass;
- it works at the deployed GitHub Pages URL;
- PROCESS.md records the real process;
- reflections/crit-2.md is grounded in the completed work;
- the user can explain how the agent was directed, grounded, reviewed and corrected.

When design or content choices are uncertain, ask the user rather than filling the site with generic astronomy-template decisions.