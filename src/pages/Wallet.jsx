import { PageHeader } from '../components/Ui'
import { walletTx } from '../data'

export default function Wallet() {
  return (
    <div>
      <PageHeader title="Credit Wallet" subtitle="Restricted capex wallet — earn, spend, and track your UEC balance." />

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <div className="card kpi-card">
          <div className="kpi-label">UEC Balance</div>
          <div className="kpi-value glow-green">142</div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-label">Capex Wallet</div>
          <div className="kpi-value">₹4,86,200</div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-label">Interest Subvention</div>
          <div className="kpi-value glow-orange">₹22,400</div>
        </div>
      </div>

      <div className="card" style={{ padding: 20 }}>
        <div className="section-title">Transaction History</div>
        <div className="section-sub">Order placed — your surplus UEC matched at the clearing price.</div>
        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {walletTx.map((tx) => (
                <tr key={tx.id}>
                  <td className="mono">{tx.id}</td>
                  <td>{tx.date}</td>
                  <td>{tx.type}</td>
                  <td className="mono">{tx.amount}</td>
                  <td><span className="badge">{tx.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
