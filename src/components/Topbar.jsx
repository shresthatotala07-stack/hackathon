import { useLocation } from 'react-router-dom'

const labels = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/machinery': 'Machinery',
  '/targets': 'Targets',
  '/improvements': 'Improvements',
  '/wallet': 'Credit Wallet',
  '/marketplace': 'Marketplace',
  '/impact': 'Reports & Impact',
  '/architecture': 'Architecture',
}

export default function Topbar({ theme, onToggleTheme, onReset }) {
  const { pathname } = useLocation()
  const label = labels[pathname] || 'Home'

  return (
    <div className="topbar">
      <div className="breadcrumb">
        <span className="mono">urja.gov.in</span>
        <span className="seg">/</span>
        <span className="crumb">{label}</span>
      </div>
      <div className="topbar-right">
        <span className="live-dot">
          <span className="pulse" />
          Live
        </span>
        <button
          className="btn ghost"
          type="button"
          title="Reset the demo to its initial state (or press R)"
          onClick={onReset}
        >
          Reset Demo
        </button>
        <button
          className="btn ghost"
          type="button"
          aria-label="Toggle theme"
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </div>
  )
}
