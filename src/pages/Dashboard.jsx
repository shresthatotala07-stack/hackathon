import { PageHeader, KpiCard, ProgressBar } from '../components/Ui'
import { machines, improvements } from '../data'

export default function Dashboard() {
  const critical = machines.filter((m) => m.health === 'red')

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Live operational view — this plant doesn't know it yet, but it's losing energy right now."
      />

      {critical.length > 0 && (
        <div className="anomaly-banner">
          <span className="badge red">ANOMALY</span>
          <span>
            {critical[0].name} drawing {Math.round(((critical[0].current - critical[0].baseline) / critical[0].baseline) * 100)}% above baseline since 02:00 — idle load suspected
          </span>
        </div>
      )}

      <div className="kpi-grid">
        <KpiCard label="Current Load" value="2,841 kW" delta="+6.2%" deltaType="up" index={0} />
        <KpiCard label="Today's Consumption" value="18.4 MWh" delta="-3.1%" deltaType="good" index={1} />
        <KpiCard label="UEC Balance" value="142 UEC" delta="+6 today" deltaType="good" index={2} />
        <KpiCard label="Savings vs Target" value="63%" delta="on track" deltaType="good" index={3} />
      </div>

      <div className="grid-2-1">
        <div className="card" style={{ padding: 20 }}>
          <div className="section-title">Live Load Trend</div>
          <div className="section-sub">Rolling 24h consumption vs machinery-aware baseline</div>
          <ProgressBar label="Peak demand (12:30)" value="3,120 kW" pct={78} color="orange" />
          <ProgressBar label="Off-peak preheat window" value="640 kWh avoided" pct={92} color="green" />
          <ProgressBar label="Compressor Line 2 drift" value="34% above baseline" pct={65} color="orange" />
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div className="section-title">Top Improvement</div>
          <div className="section-sub">Highest-impact opportunity right now</div>
          {improvements.slice(0, 3).map((imp) => (
            <div className="stat-row" key={imp.rank}>
              <span className="k">{imp.title}</span>
              <span className="v">{imp.savingsKwh.toLocaleString()} kWh</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
