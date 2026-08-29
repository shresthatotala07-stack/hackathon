export const machines = [
  { id: 'm1', name: 'Compressor Line 2', health: 'red', status: 'CRITICAL', baseline: 210, current: 281, uptime: 94.2 },
  { id: 'm2', name: 'Furnace Preheater A', health: 'green', status: 'HEALTHY', baseline: 640, current: 598, uptime: 99.1 },
  { id: 'm3', name: 'Cooling Tower Fan 3', health: 'amber', status: 'WATCH', baseline: 88, current: 93, uptime: 97.6 },
  { id: 'm4', name: 'Boiler Feed Pump', health: 'green', status: 'HEALTHY', baseline: 152, current: 149, uptime: 99.8 },
  { id: 'm5', name: 'Chiller Unit B', health: 'green', status: 'HEALTHY', baseline: 310, current: 305, uptime: 98.9 },
  { id: 'm6', name: 'Induction Motor 7', health: 'amber', status: 'WATCH', baseline: 74, current: 81, uptime: 96.4 },
  { id: 'm7', name: 'Air Handling Unit', health: 'green', status: 'HEALTHY', baseline: 120, current: 118, uptime: 99.3 },
  { id: 'm8', name: 'VFD Extruder Line', health: 'red', status: 'CRITICAL', baseline: 260, current: 340, uptime: 91.7 },
]

export const improvements = [
  { rank: 1, title: 'Compressor Line 2 — idle-load shutdown', category: 'orange', savingsKwh: 4200, savingsInr: 33600, effort: 'Low' },
  { rank: 2, title: 'VFD retrofit — Cooling Tower Fan 3', category: 'orange', savingsKwh: 3100, savingsInr: 24800, effort: 'Medium' },
  { rank: 3, title: 'Furnace preheat off-peak shift', category: 'green', savingsKwh: 2600, savingsInr: 20800, effort: 'Low' },
  { rank: 4, title: 'Chiller setpoint optimisation', category: 'green', savingsKwh: 1850, savingsInr: 14800, effort: 'Low' },
  { rank: 5, title: 'IE4 motor upgrade — Induction Motor 7', category: 'red', savingsKwh: 1600, savingsInr: 12800, effort: 'High' },
  { rank: 6, title: 'Compressed-air leak repair sweep', category: 'green', savingsKwh: 980, savingsInr: 7840, effort: 'Low' },
  { rank: 7, title: 'Lighting retrofit — Bay 3 & 4', category: 'green', savingsKwh: 640, savingsInr: 5120, effort: 'Low' },
]

export const walletTx = [
  { id: 'TX-8841', date: '2026-08-28', type: 'Credit issued', amount: '+6 UEC', status: 'Verified' },
  { id: 'TX-8830', date: '2026-08-24', type: 'Sold on marketplace', amount: '-12 UEC', status: 'Settled' },
  { id: 'TX-8812', date: '2026-08-19', type: 'Credit issued', amount: '+9 UEC', status: 'Verified' },
  { id: 'TX-8790', date: '2026-08-15', type: 'Capex draw — VFD retrofit', amount: '-₹1,80,000', status: 'Approved' },
  { id: 'TX-8774', date: '2026-08-11', type: 'Credit issued', amount: '+4 UEC', status: 'Verified' },
  { id: 'TX-8751', date: '2026-08-06', type: 'Sold on marketplace', amount: '-7 UEC', status: 'Settled' },
  { id: 'TX-8730', date: '2026-08-02', type: 'Interest subvention credit', amount: '+₹22,400', status: 'Applied' },
  { id: 'TX-8709', date: '2026-07-28', type: 'Credit issued', amount: '+8 UEC', status: 'Verified' },
]

export const marketPrices = Array.from({ length: 26 }, (_, i) => {
  const base = 1450 + Math.sin(i / 3) * 60 + (i > 18 ? 40 : 0)
  return { t: `Day ${i + 1}`, price: Math.round(base + (i % 4) * 8) }
})

export const toastMessages = [
  'Line 2 compressor drawing 34% above baseline since 02:00 — idle load suspected',
  'Off-peak window: furnace preheat executed — 640 kWh avoided',
  'New credit batch verified: +6 UEC issued to wallet',
  'Maximum-demand spike avoided: 12:30 peak shaved by 9%',
  'Cooling tower fan drift 6% — VFD retrofit ROI recalculated',
]

export const roadmap = [
  { phase: 'Phase 1', title: 'Registry Launch', desc: 'Onboard Designated Consumers + large MSMEs, Udyam eKYC, smart-meter fleet.' },
  { phase: 'Phase 2', title: 'UEC Marketplace', desc: 'CERC-regulated exchange, floor/ceiling band, ESCO pool trading.' },
  { phase: 'Phase 3', title: 'Green Wallet', desc: 'Restricted capex wallet, interest subvention, IE4/VFD/solar spend rails.' },
  { phase: 'Phase 4', title: 'IoT Everywhere', desc: 'ESP32 edge fleet, anomaly alerts, LSTM forecasting at scale.' },
  { phase: 'Phase 5', title: 'Carbon Interop', desc: 'Link to CCTS carbon credits, national voluntary offset registry.' },
]

export const sdgs = [
  { tag: 'SDG 7', title: 'Affordable & Clean Energy' },
  { tag: 'SDG 9', title: 'Industry, Innovation & Infra' },
  { tag: 'SDG 12', title: 'Responsible Consumption' },
  { tag: 'SDG 13', title: 'Climate Action' },
]

export const techStack = [
  { group: 'Edge / IoT', items: ['Modbus', 'CT clamps', 'MicroPython / Arduino C++'] },
  { group: 'Backend', items: ['FastAPI', 'Pydantic'] },
  { group: 'Data Layer', items: ['Hash-chained records', 'PostgreSQL', 'Redis (cache/queries)'] },
  { group: 'ML / Anomaly Detection', items: ['scikit-learn', 'PyTorch (LSTM)', 'Isolation Forest'] },
  { group: 'Monitoring', items: ['Grafana'] },
  { group: 'Auth / Identity', items: ['JWT + OAuth2', 'Udyam / PAN eKYC'] },
]
