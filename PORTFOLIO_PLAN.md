# Portfolio ORBIT Fix — PLAN.md

Created: 2026-11-10, by Cochi, for Javier
Project: PortafolioFJFF — https://javierfloresaudio.com/
Path: `/Users/javierflores/AI_Workspace/Web_Projects/PortafolioWEB/PortafolioFJFF`
Build with: Antigravity (Google), one file at a time

## What happened — live check 2026-11-10 00:33 UTC

Antigravity DID deploy the portfolio page, and the structure is correct:
- Live: https://javierfloresaudio.com/portfolio
- Project 1: Disney Cruise Line, Audio Lead, with 01.A Cast Installs, 01.B Dry Docks, 01.C Disney Dream WDT, plus IP note "Process and methodology description only"
- Project 3: STELA, correct
- Section 4: OCA, Jardín en tu mirada, One Please, Death And The Maiden, Broadway, Lunario, La Casa de la Música de Viena, Folklórica, Cóctel Calavera — all present, correct
- Audio Tools still loads directly at https://javierfloresaudio.com/audiotools — good, it was hidden, not deleted

BUT the name is WRONG:
- Live Project 2 still says **IBTRDAI (Immersive Binaural Tools Research and Development with AI)** — lines 44, 58, 66-67 in the live crawl
- It does NOT say ORBIT anywhere on the live page
- Cause: Antigravity ran the v2 plan (IBTRDAI), not the v3 plan (ORBIT). The plan file in the project folder was probably the old v2 version, or Antigravity used a cached prompt.

This plan fixes ONLY the name. Do NOT rebuild the whole portfolio page. Do NOT change DCL, STELA, Section 4, layout, design, or media slots.

## Goal

Replace EVERY occurrence of IBTRDAI with ORBIT on the live portfolio page, and everywhere else on the site where it appears.
New name: ORBIT — Immersive Binaural Mixer for NDH 30, AI-assisted research
Old name to remove: IBTRDAI, and its expansion "Immersive Binaural Tools Research and Development with AI" as a NAME — keep that phrase ONLY as a descriptive sentence if needed, never as the project title.

After this plan, a search for "IBTRDAI" in the whole PortafolioFJFF project must return zero, except for a single historical rename note if one is explicitly kept in a plan file (not on the live site).

## Rename mapping — portfolio only

| Old (live) | New |
|---|---|
| IBTRDAI | ORBIT |
| IBTRDAI (Immersive Binaural Tools Research and Development with AI) | ORBIT — Immersive Binaural Mixer for NDH 30 |
| "IBTRDAI is a personal, independent research tool..." | "ORBIT is a personal, independent research tool..." |
| "IBTRDAI supports comprehensive immersive monitor mixing formats..." | "ORBIT supports comprehensive immersive monitor mixing formats..." |
| "Independent Research Notice: IBTRDAI is an independent academic learning project..." | "Independent Research Notice: ORBIT is an independent academic learning project..." |
| Any title, subtitle, heading, tag, meta title, meta description, alt text, link text containing IBTRDAI | Same text with ORBIT |

Do NOT change the IP-safe narrative itself — only the name in it. Keep: open-source only (IEM / SPARTA), no copied code, Oratory1990 NDH 30 public measurements, personal tool for Javier's own headphones, not affiliated / not endorsed / not distributed.

Also check for, and remove if present on the live site:
- "OpenRIME", "Open RIME", "RIME", "Neumann RIME" — must be zero on the portfolio page
- "OpenRime", "open_rime" — must be zero

## Tasks for Antigravity

- [ ] F1: Inventory, do NOT edit yet — in the local PortafolioFJFF project, search the WHOLE project (src/, public/, and any config) for: `IBTRDAI`, `OpenRIME`, `OpenRime`, `open_rime`, `RIME`. List every file + line. Confirm the plan file in the project folder is PORTFOLIO_PLAN.md v3 (ORBIT), not v2 (IBTRDAI) — if it is v2, replace it with the v3 file Javier has, before editing anything. Report the list.
- [ ] F2: Fix src/pages/portfolio.astro ONLY — replace every IBTRDAI with ORBIT, using the mapping above. Keep all other text, layout, design, and media slots exactly as they are. Do NOT rebuild the page from scratch.
- [ ] F3: Fix any other files found in F1 — nav, index, meta, es/ version if it links to /portfolio, sitemap, README. Replace IBTRDAI / RIME names with ORBIT in those files only, no other changes.
- [ ] F4: Search again — repeat the F1 search in the whole project. Result must be zero for `IBTRDAI`, `OpenRIME`, `OpenRime`, `open_rime`, and standalone `RIME` on any live site file (src/pages/, src/layouts/, public/). List any remaining hits and fix them before building.
- [ ] F5: Build — `npm run build`, fix errors, check `dist/portfolio/index.html` exists, and check that file contains "ORBIT" and does NOT contain "IBTRDAI".
- [ ] F6: Deploy via Vercel (existing workflow), verify live https://javierfloresaudio.com/portfolio loads, and https://javierfloresaudio.com/audiotools still loads directly.
- [ ] F7: Final live check — open the live portfolio page, confirm Project 2 title is ORBIT, confirm no IBTRDAI / RIME is visible anywhere on the page, confirm DCL, STELA, and Section 4 are unchanged.

## Verification — after each task

Proof to report (paste back to Javier):
- Search output in F1 / F4: file list + counts, must be zero in F4
- File path changed, first line, last line, line count
- Build output in F5: success / exact error, plus `grep -c ORBIT dist/portfolio/index.html` and `grep -c IBTRDAI dist/portfolio/index.html` (must be 0 for IBTRDAI)
- Live check in F6/F7: URL, Project 2 title as seen live

Do NOT mark a task DONE without search proof + build proof. Do NOT move to the next task if the build fails.