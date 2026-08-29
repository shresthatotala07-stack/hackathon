import { useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Toasts from './Toasts'

export default function Layout({ resetKey, onReset }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('urja-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('urja-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'r' || e.key === 'R') {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return
        onReset()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onReset])

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar theme={theme} onToggleTheme={toggleTheme} onReset={onReset} />
        <div className="content">
          <div className="page" key={resetKey}>
            <Outlet />
          </div>
        </div>
      </div>
      <Toasts />
    </div>
  )
}
