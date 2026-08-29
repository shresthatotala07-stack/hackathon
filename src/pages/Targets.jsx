import { PageHeader } from '../components/Ui'

const PCT = 63

function Ring({ pct }) {
  const r = 70
  const c = 2 * Math.PI * r
  const offset = c - (pct / 100) * c
  return (
    <div className="ring-wrap" style={{ position: 'relative' }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r={r} fill="none" stroke="var(--border)" strokeWidth="14" />
        <circle
          cx="90"
          cy="90"
          r={r}
          fill="none"
          stroke="var(--green-bright)"
          strokeWidth="14"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.22,1,.36,1)' }}
        />
      </svg>
      <div className="ring-label" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <div className="impact-big" style={{ fontSize: '2.2rem' }}>{pct}%</div>
      </div>
    </div>
  )
}

export default function Targets() {
  return (
    <div>
      <PageHeader title="Savings Target" subtitle="Machinery-aware annual target, built from your fleet baseline." />

      <div className="grid-2-1">
        <div className="card" style={{ padding: 24, textAlign: 'center' }}>
          <div className="section-title">Annual Target Progress</div>
          <div className="section-sub">Against 420 MWh of annual savings target</div>
          <Ring pct={PCT} />
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div className="section-title">How the target is built</div>
          <div className="stat-row">
            <span className="k">Baseline consumption</span>
            <span className="v">1,240 MWh/yr</span>
          </div>
          <div className="stat-row">
            <span className="k">Machinery drift adjustment</span>
            <span className="v">-84 MWh</span>
          </div>
          <div className="stat-row">
            <span className="k">Sector benchmark uplift</span>
            <span className="v">+36 MWh</span>
          </div>
          <div className="stat-row">
            <span className="k">Final annual target</span>
            <span className="v">420 MWh</span>
          </div>
          <div className="stat-row">
            <span className="k">Achieved so far</span>
            <span className="v glow-green">265 MWh</span>
          </div>
        </div>
      </div>
    </div>
  )
}
