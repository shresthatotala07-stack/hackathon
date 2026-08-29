# URJA-CHAKRA

A React web app for URJA-CHAKRA — "Unified Registry for Joule Accounting":
an industrial energy metering, savings-target, and tradable-credit
marketplace platform. Built as a Smart India Hackathon 2026 concept, modeled
after the public demo at `https://urja-chakra.netlify.app`.

## About URJA-CHAKRA

URJA-CHAKRA ("Har Watt Ka Hisaab" — accounting for every watt) targets
industrial electricity demand, the single largest lever in India's power
consumption. Factories stream live smart-meter data, receive a
machinery-aware savings target, and earn tradable Unified Energy Credits
(UEC) for every MWh saved — verified every 15 minutes under a CERC-regulated
framework, instead of a multi-year audit cycle.

Core pieces: a live operations dashboard, a machinery health registry,
savings targets with progress tracking, ranked improvement opportunities, a
credit wallet, a CERC-regulated UEC marketplace, an impact/reporting view,
and a technical architecture overview covering the edge-to-cloud stack
(smart meters, FastAPI backend, PostgreSQL/Redis, ML-based anomaly
detection, Grafana monitoring, JWT/eKYC auth). A five-phase rollout runs from
registry launch through IoT scale-out and carbon-market interoperability,
aligned to SDG 7, 9, 12, and 13.

## This project

No original source repository is public for the demo site, so this app was
independently built as a React implementation of the same concept and
design language — component structure, mock data, and app logic are original
work.

## Notes

- Logo/emblem uses a static image (`public/urja_chakra_logo.jpeg`) instead
  of a 3D rendered mark — kept lightweight, no Three.js dependency.
- Landing page is a standalone hero route (no sidebar); `/dashboard` through
  `/architecture` share a sidebar + topbar app shell.
- Nav grouped as "Operations" / "Energy Finance" / "Insight".
- Toast feed cycles 5 sample telemetry messages on an interval, with
  auto-dismiss, manual dismiss, and a demo state-reset bound to the `R` key.

## Stack

React + Vite, react-router-dom, framer-motion, recharts. Fonts: Inter +
Space Grotesk via Google Fonts, matching the original's `<link>` tags.

## Run

```
npm install
npm run dev
```
