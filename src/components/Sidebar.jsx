import { NavLink } from 'react-router-dom'

const groups = [
  {
    title: 'Operations',
    items: [
      { to: '/dashboard', label: 'Dashboard', icon: '◧' },
      { to: '/machinery', label: 'Machinery', icon: '⚙' },
      { to: '/targets', label: 'Targets', icon: '◎' },
      { to: '/improvements', label: 'Improvements', icon: '↗' },
    ],
  },
  {
    title: 'Energy Finance',
    items: [
      { to: '/wallet', label: 'Credit Wallet', icon: '◈' },
      { to: '/marketplace', label: 'Marketplace', icon: '⇄' },
    ],
  },
  {
    title: 'Insight',
    items: [
      { to: '/impact', label: 'Reports & Impact', icon: '◫' },
      { to: '/architecture', label: 'Architecture', icon: '▤' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar-brand">
        <img
          src="/urja_chakra_logo.jpeg"
          alt="URJA-CHAKRA logo"
          className="mini-logo"
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
        <h3 className="txt">URJA-CHAKRA</h3>
      </NavLink>
      {groups.map((g) => (
        <div className="nav-group" key={g.title}>
          <div className="nav-group-title">{g.title}</div>
          {g.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}
