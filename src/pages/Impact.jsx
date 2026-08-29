import { PageHeader } from '../components/Ui'
import { sdgs } from '../data'

export default function Impact() {
  return (
    <div>
      <PageHeader title="Reports & Impact" subtitle="Cumulative savings, avoided emissions, and program-level outcomes." />

      <div className="card" style={{ padding: 30, textAlign: 'center', marginBottom: 22 }}>
        <div className="impact-big">1,842 MWh</div>
        <div className="text-dim">saved across the registry this fiscal year</div>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 20 }}>
          <div className="section-title">Avoided Emissions</div>
          <div className="stat-row"><span className="k">CO₂e avoided</span><span className="v">1,510 tCO₂e</span></div>
          <div className="stat-row"><span className="k">Peak demand deferred</span><span className="v">6.4 MW</span></div>
          <div className="stat-row"><span className="k">UEC issued to date</span><span className="v">9,240</span></div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div className="section-title">Aligned SDGs</div>
          {sdgs.map((s) => (
            <div className="stat-row" key={s.tag}>
              <span className="k">{s.tag}</span>
              <span className="v">{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
