import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { roadmap, sdgs } from '../data'

export default function Landing() {
  return (
    <div>
      <div className="hero">
        <motion.img
          src="/urja_chakra_logo.jpeg"
          alt="URJA-CHAKRA logo"
          className="chakra-emblem"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="wordmark">URJA-CHAKRA</h1>
        <div className="tagline">Account for Every Watt</div>
        <div className="hindi">Har Watt Ka Hisaab.</div>
        <div className="badges">
          <span className="badge">CERC-regulated</span>
          <span className="badge orange">Verification: 15 min</span>
        </div>
        <p className="pitch">
          Factories stream live meter data, get a machinery-aware savings target, and earn
          tradable energy credits for every MWh they save — verified every 15 minutes, not
          every 3 years.
        </p>
        <div className="credit">Smart India Hackathon 2026</div>
        <div className="cta-row">
          <Link to="/dashboard" className="btn">Enter Dashboard</Link>
          <Link to="/architecture" className="btn ghost">View Architecture</Link>
        </div>
      </div>

      <div className="section-wrap">
        <h2 className="section-title">Why industrial demand is the lever</h2>
        <p className="section-sub">
          Industry is the single largest slice of India's electricity consumption — and the
          fastest lever to pull for grid-wide savings.
        </p>
        <div className="card" style={{ padding: 20 }}>
          <p className="text-dim" style={{ lineHeight: 1.6 }}>
            Verification cycle collapsed from a 3-year PAT audit to 15-minute smart-meter
            verification. Peak shaving delivers a grid benefit: demand-response shaves peaks,
            deferring new generation capacity.
          </p>
        </div>
      </div>

      <div className="section-wrap">
        <h2 className="section-title">Rollout Roadmap</h2>
        <p className="section-sub">Five phases from registry launch to carbon interoperability.</p>
        <div className="roadmap">
          {roadmap.map((r, i) => (
            <motion.div
              className="card phase-card"
              key={r.phase}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="phase-num">{r.phase}</div>
              <div className="phase-title">{r.title}</div>
              <div className="phase-desc">{r.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-wrap">
        <div className="sdg-row">
          {sdgs.map((s) => (
            <span className="badge" key={s.tag}>
              {s.tag} · {s.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
