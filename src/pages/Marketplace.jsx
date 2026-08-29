import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { PageHeader } from '../components/Ui'
import { marketPrices } from '../data'

export default function Marketplace() {
  return (
    <div>
      <PageHeader title="Marketplace" subtitle="CERC-regulated exchange for tradable energy credits (UEC)." />

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <div className="card kpi-card">
          <div className="kpi-label">Sellers</div>
          <div className="kpi-value">214</div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-label">Buyers</div>
          <div className="kpi-value glow-green">168</div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-label">Volume</div>
          <div className="kpi-value glow-orange">3,420 UEC</div>
        </div>
      </div>

      <div className="grid-1-1">
        <div className="card" style={{ padding: 20 }}>
          <div className="section-title">Clearing Price</div>
          <div className="section-sub">
            Watch liquidity and the clearing price respond within the regulated band.
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={marketPrices}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="t" hide />
              <YAxis domain={['dataMin - 40', 'dataMax + 40']} stroke="var(--text-faint)" fontSize={12} />
              <Tooltip contentStyle={{ background: 'var(--card-bg-solid)', border: '1px solid var(--border)', borderRadius: 10 }} />
              <Line type="monotone" dataKey="price" stroke="var(--green-bright)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div className="section-title">Why a market forms around credits</div>
          <p className="text-dim" style={{ lineHeight: 1.6, fontSize: '.85rem' }}>
            Facilities that beat target generate surplus credits, sold to recover capex on
            efficiency projects — the Urja Loop funds more savings.
          </p>
        </div>
      </div>
    </div>
  )
}
