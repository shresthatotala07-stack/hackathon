import { PageHeader } from '../components/Ui'
import { improvements } from '../data'

export default function Improvements() {
  return (
    <div>
      <PageHeader title="Improvements" subtitle="Ranked savings opportunities across your machinery fleet." />

      <div className="anomaly-banner">
        <span className="badge red">ANOMALY</span>
        <span>Line 2 compressor drawing 34% above baseline since 02:00 — idle load suspected</span>
      </div>

      <div className="card" style={{ padding: 10 }}>
        {improvements.map((imp) => (
          <div className="improvement-row" key={imp.rank}>
            <div className={`imp-rank ${imp.rank <= 3 ? `r${imp.rank}` : ''}`}>
              {imp.rank}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{imp.title}</div>
              <div className="text-dim" style={{ fontSize: '.8rem' }}>
                Effort: {imp.effort} · Potential: {imp.savingsKwh.toLocaleString()} kWh/mo
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontWeight: 700 }}>₹{imp.savingsInr.toLocaleString()}</div>
              <span className={`badge ${imp.category === 'green' ? '' : imp.category}`}>
                {imp.category === 'green' ? 'Quick win' : imp.category === 'orange' ? 'In progress' : 'Needs capex'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
