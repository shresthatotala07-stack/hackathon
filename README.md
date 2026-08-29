# URJA-CHAKRA (reconstruction)

A from-scratch React reconstruction of the URJA-CHAKRA energy-dashboard demo
(`https://urja-chakra.netlify.app`), built for a Smart India Hackathon 2026
concept: "Unified Registry for Joule Accounting" — an industrial energy
metering, savings-target, and tradable-credit marketplace platform.

## Provenance

**No original source was available.** There is no public GitHub repository
for the site, and the deployed Netlify build ships no JS sourcemap (the
`.js.map` URL returns the SPA's `index.html` fallback, not a real map). This
app was rebuilt by:

1. Fetching the deployed site's real, unminified production CSS bundle
   directly (Vite outputs CSS mostly unobfuscated) — used almost verbatim as
   the design-system foundation in `src/index.css`.
2. Extracting every human-readable string literal out of the minified JS
   bundle (`grep`-style regex over the ~1.6MB file) to recover real UI copy:
   page titles, nav labels, KPI text, taglines, roadmap phases, tech stack
   names, toast messages, etc.
3. Reconstructing clean, idiomatic React source (components, routing, mock
   data) around that recovered design system and copy.

Numeric/tabular data (KPI values, machine list, wallet transactions, market
price series) is invented — plausible, unit-consistent placeholder data, not
recovered from the original (no API or database was reachable).

## Known deviations from the original

- **3D visuals omitted.** The original uses React Three Fiber (Three.js) for
  a rotating "chakra" emblem logo, sparkles, and a 3D target-progress ring —
  each with a documented static/2D fallback string baked into the bundle
  ("3D unavailable — showing static emblem" etc). This reconstruction skips
  R3F/Three.js entirely and implements only those fallback versions (a
  CSS conic-gradient emblem, an SVG progress ring) to avoid a heavy,
  speculative 3D reimplementation.
- **Landing page is a standalone route** (no sidebar), matching how the hero
  content reads (badges/pitch/CTA), while `/dashboard` through
  `/architecture` share the sidebar + topbar app shell.
- **Nav grouping** ("Operations" / "Energy Finance" / "Insight") is inferred
  from string proximity in the bundle, not confirmed from rendered markup.
- **Toast rotation and Reset Demo** are implemented as best-effort demo
  behavior (5 sample telemetry messages cycling on an interval, auto-dismiss,
  manual dismiss, and a state-reset bound to the `R` key) — the original's
  exact timing/logic wasn't recoverable from strings alone.

## Stack

React + Vite, react-router-dom, framer-motion, recharts. Fonts: Inter +
Space Grotesk via Google Fonts, matching the original's `<link>` tags.

## Run

```
npm install
npm run dev
```
