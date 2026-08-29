import { PageHeader } from '../components/Ui'
import { machines } from '../data'

export default function Machinery() {
  return (
    <div>
      <PageHeader title="Machinery Registry" subtitle="Fleet health, drift from baseline, and maintenance status." />
      <div className="machine-grid">
        {machines.map((m) => (
          <div className="card machine-card" key={m.id}>
            <div className="m-head">
              <div className="m-name">
                <span className={`health-dot ${m.health}`} />
                {m.name}
              </div>
              <span className={`badge${m.health === 'red' ? ' red' : m.health === 'amber' ? ' orange' : ''}`}>
                {m.status}
              </span>
            </div>
            <div className="stat-row">
              <span className="k">Baseline</span>
              <span className="v">{m.baseline} kWh</span>
            </div>
            <div className="stat-row">
              <span className="k">Current</span>
              <span className="v">{m.current} kWh</span>
            </div>
            <div className="stat-row">
              <span className="k">Uptime</span>
              <span className="v">{m.uptime}%</span>
            </div>
            <button className="btn ghost" style={{ marginTop: 12, width: '100%' }}>
              Open maintenance ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
