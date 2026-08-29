import { motion } from 'framer-motion'

export function KpiCard({ label, value, delta, deltaType, index = 0 }) {
  return (
    <motion.div
      className="card kpi-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      {delta && <span className={`kpi-delta ${deltaType}`}>{delta}</span>}
    </motion.div>
  )
}

export function ProgressBar({ label, value, pct, color = 'green' }) {
  return (
    <div className="progress-row">
      <div className="progress-head">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="progress-track">
        <div className={`progress-fill ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function PageHeader({ title, subtitle }) {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <p className="page-sub">{subtitle}</p>
    </>
  )
}
