# Masters Portfolio Page — PLAN.md

Created: 2026-11-09, by Cochi, for Javier — v2, updated 2026-11-09 15:40 EST
Project: PortafolioFJFF — https://javierfloresaudio.com/
Stack: Astro + React + TypeScript, deployed via Vercel
Path: `/Users/javierflores/AI_Workspace/Web_Projects/PortafolioWEB/PortafolioFJFF`
Build with: Antigravity (Google), one file at a time

## Scope of THIS plan — no media yet

We do NOT have the media for the page yet. Do NOT wait for media, do NOT invent media, do NOT use stock photos / stock audio.
Build the page now with text, structure, and clearly marked media placeholder slots only. Media (photos, show clips, STELA PDF, OCA clips, durations) will be added in a SEPARATE plan later, once Javier supplies it.

This page is therefore a DRAFT for structure / review, not yet a finished ReSound submission.

## Goal

Create a single Masters application portfolio page that can be sent as ONE hyperlink in applications (ReSound, Chalmers, WAVES Plus, Pompeu Fabra).

URL: `https://javierfloresaudio.com/portfolio`
File: `src/pages/portfolio.astro`

This page REPLACES the Audio Tools page in the menus and on the index page. Do NOT delete Audio Tools — hide it only.

## Masters requirements — read first

ReSound (closes 12 Jan 2027, official site):
- Single hyperlink to your site
- Maximum 3 examples, totalling 10–15 minutes
- Each example with a short reflective paragraph explicitly stating your role
- In English

Chalmers / WAVES / Pompeu Fabra: same page works, they do not have the 10–15 minute audio rule in the same form, but a clear 3-project page with roles is what they all want.

⚠️ WARNING — read this before building:
The 3 projects below are professional projects, not timed audio pieces. For ReSound, you MUST also add a timed media example to each project (audio/video clip with a stated duration), and the 3 media examples together must total 10–15 minutes. If you send this page to ReSound with no playable media and no durations, it will not meet their portfolio rule.
That media work is OUT OF SCOPE for this plan — it will be a separate plan later, once Javier has the media. For this plan, build each project section with a clearly marked empty media slot, labelled with what media will go there, and do NOT send the ReSound link until the later media plan is done.

## Design — keep the existing design

- Keep the exact design system already in PortafolioFJFF: same Layout, same colors, typography, spacing, header/footer, dark theme as on engineering.astro / music.astro / experience.astro
- Do NOT invent a new theme, new colors, or a new layout system
- Reuse existing components / card styles from engineering.astro and music.astro where possible
- All text in English on this page (the site has an es/ version — do NOT translate this page to Spanish in this task, English only for applications)
- Responsive, same as other pages. Check mobile after build.

## Hide Audio Tools — do NOT erase it

- KEEP the file: `src/pages/audiotools.astro` — do not delete it, do not rename it
- REMOVE it from: main navigation menu, index page links / cards, footer navigation if listed there
- KEEP the route working directly: `https://javierfloresaudio.com/audiotools` must still load if someone visits it directly
- In its place in the menu and on the index page, put: Portfolio — link to `/portfolio`
- Order in menu: Home, Engineering, Experience, Portfolio, Music, Journey, Saxophonist — Portfolio in the position Audio Tools used to occupy, or directly after Experience. Do not add it at the end as an afterthought.
- If there is a sitemap / nav config file, update that file too, do not hard-code the menu in two places.

## Page structure — src/pages/portfolio.astro

Hero:
- Title: "Portfolio — Masters Application" or "Selected Projects"
- Subtitle, 1–2 lines: Lead Audio Engineer, Disney Cruise Line, 5 years, immersive / live theatre / community leadership. In English.
- Small meta line: "3 projects — for ReSound, Chalmers, WAVES Plus, and Pompeu Fabra applications, January 2027"

Then 3 project sections, in this order, each with the same structure:
- Number + Title
- Role statement — bold, first line, e.g. "My role: Audio Lead, Disney Cruise Line"
- Reflective paragraph — short, what you did, what you learned, why it matters for acoustics / immersive audio
- Key facts — bullet list, dates, scale, systems used
- Media slot — EMPTY placeholder only, labelled with what will go there later (e.g. "Show mix clip — to be added in media plan"). No player, no fake duration, no stock image.
- Link — "Read more" to the existing page where relevant, only if it adds value

### Project 1 — Disney Cruise Line, Audio Lead (5 years)
Role: Audio Lead / Lead Audio Technician, Disney Cruise Line, Walt Disney Theater
Reflective paragraph to include (use Javier's words, edited for clarity, in English):
- 5 years at Disney, thousands of performances and experiences affected
- Cast installs: recreate the sound design of the shows with every new cast. EQ sessions of 4 hours for each of the 3 shows for each new cast.
- For each performer, for each act, for each show: select microphones, fit them optimally, set EQ, dynamics, levels, and everything else
- Work with Disney Senior Sound Designers and Vocal Directors, achieving Disney's top quality every time

Sub-sections inside Project 1:
a) Cast installs & EQ sessions — as above
b) Dry docks — redesign and calibrate line arrays, comms systems, microphone systems, AoIP, networks, and everything for new audio systems on deck stages and theaters inside the ship
c) Current project — Disney Dream, Walt Disney Theater (WDT), with shoreside sound designers: update the sound design of the shows, create audio maps based on the audio infrastructure of the Disney Dream WDT from venue schematics, to allow object-based audio mixing in the venue and improve immersive design. Work includes: reading venue schematics, creating QLab 5 audio maps, redesigning Yamaha PM10 scenes, mix busses and matrices of the show files, re-routing AoIP mixing matrices in Dante, calibrating levels and object-based mixing.

Media slot for Project 1 (EMPTY in this plan — media in a later separate plan):
- Slot labelled: "Photos: Disney shows + Javier mixing live — to be added"
- Slot labelled: "Show mix clip — to be added, duration to be stated then"

### Project 2 — STELA, Master's Final Project
Full name: STELA — Sociedad de Técnicos del Entretenimiento Latino Americanos
Role: Founder / Lead, Master's field project in Communication and Digital Media, UDLAP
Status: Research and identity phase finalized. Now moving into implementation, after the first trial.
Reflective paragraph to include:
- STELA is a Master's field project designed to build, launch, and position a dedicated digital community and professional network for audio, lighting, and stage entertainment technicians across Latin America
- Full strategic lifecycle of brand deployment: institutional philosophy, brand identity, digital style guide, followed by multi-channel activation across Facebook, Instagram, LinkedIn, and WhatsApp
- To overcome cold-start growth: identity building + utility marketing, qualitative audience engagement, cross-platform distribution in established industry groups, and performance analytics, to foster professional development and regional networking
- Goal: bring knowledge and training to Latin American technicians, to elevate our community

Media / attachment slot for Project 2 (EMPTY in this plan — media in a later separate plan):
- Slot labelled: "STELA final Master's paper (PDF) — to be attached in media plan"
- Slot labelled: "STELA brand / logo images, social channel links — to be added in media plan"
- Do NOT invent a PDF link, do NOT invent a PDF URL

### Project 3 — OCA, Orquesta de Cámara de Atlixco
Full name: OCA — Orquesta de Cámara de Atlixco / Atlixco Chamber Orchestra
Role: Founding member, section leader, arranger & manager — first leadership project
Facts from Javier's existing site (saxophonist page — reuse, do not invent new dates):
- Founded in 2013, to unite the finest young musicians in Atlixco and form the city's premier chamber orchestra
- Javier was one of the founding members, with friends, to promote culture in his town
- Responsibilities went beyond performance: managed operations, wrote custom musical arrangements, served as section leader
Reflective paragraph to include:
- First leadership project, what leading a young orchestra in Atlixco taught him about organizing people, rehearsal, sound, and community culture — and how that led to later leadership at Disney and in STELA

Media slot for Project 3 (EMPTY in this plan — media in a later separate plan):
- Slot labelled: "OCA performance photos / clip — to be added, duration to be stated then"
- Reuse existing site images only if they are already in the repo — do not add new images in this plan, do not invent new images

### Section 4 — Other projects (references only, brief)
Short list, 1–2 lines each, link to the existing page. Do NOT expand these into full sections — they are references only:
- Jardín en tu mirada — song, Best Lyrics, ITESM Puebla Song Festival — link to /music
- One Please — original film score, psychological horror short, sound design + foley — link to /music
- Death And The Maiden — orchestral composition, leitmotifs, Frank Tallis adaptation — link to /music
- Musical Theater & Broadway Training — Beauty and the Beast, Golden Mickeys, Frozen, Tangled, Twice Charmed, Moulin Rouge, Wicked — link to /engineering
- Lunario del Auditorio Nacional, All Shook Up — Monitors Audio Engineer — link to /engineering and /experience
- La Casa de la Música de Viena, Puebla — FOH, 500-seat auditorium — link to /engineering
- Compañía Folklórica Magisterial de Hidalgo — international tours Taiwan 2018, Sharjah UAE 2019 — link to /experience and /saxophonist
- Cóctel Calavera — independent band, festivals, studio recordings — link to /saxophonist

## Checklist — for THIS plan (no media)

- [ ] Confirm the 3 project titles and role statements above are correct
- [ ] Confirm menu order for Portfolio vs Audio Tools
- [ ] No media is required for this plan — placeholders only

Media checklist is deferred to the later separate media plan:
- Photos: Disney shows + Javier mixing live, show mix clip with duration
- STELA final paper PDF, brand / logo images
- OCA photos / performance clip with duration
- Total media duration across Projects 1–3 is 10–15 minutes for ReSound

## Tasks for Antigravity

Work in order, one file at a time, build after each file, stop on BLOCKED.

- [ ] T1: Inventory — list src/pages/, nav/menu files, index.astro links, Layout, and where audiotools.astro is linked from. Do NOT edit yet.
- [ ] T2: Create src/pages/portfolio.astro — hero + Project 1 (DCL), with role statement, reflective paragraph, sub-sections a/b/c, empty media slots labelled as above
- [ ] T3: Add Project 2 (STELA) to portfolio.astro — role, status, reflective paragraph, PDF slot labelled only, no PDF link invented
- [ ] T4: Add Project 3 (OCA) to portfolio.astro — reuse facts from saxophonist page, do not invent dates or roles
- [ ] T5: Add Section 4 references, with links to existing pages only
- [ ] T6: Hide Audio Tools — remove from nav menu and index page, keep src/pages/audiotools.astro file untouched, verify /audiotools still loads directly, verify /portfolio is in menu and on index
- [ ] T7: Build — `npm run build`, fix errors, check `dist/portfolio/index.html` exists, check no broken links
- [ ] T8: Visual check — open http://localhost:4321/portfolio (or `npm run dev`), check desktop + mobile, check menu, check Portfolio replaces Audio Tools, check all controls / links work, check media slots are visible and clearly labelled as placeholders
- [ ] T9: Deploy via Vercel (existing workflow), verify live https://javierfloresaudio.com/portfolio loads, and https://javierfloresaudio.com/audiotools still loads directly

Media adding is NOT a task in this plan. That is a separate plan later.

## Verification — after each task

Proof to write in PROGRESS.md (or in the terminal output Javier pastes back):
- File path changed, first line, last line, line count
- Build output: `npm run build` success / error, exact error if any
- Live check: URL, what loads, what is missing

Do NOT mark a task DONE without build proof. Do NOT move to the next task if the build fails.
