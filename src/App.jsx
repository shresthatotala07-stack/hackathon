import { useCallback, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Machinery from './pages/Machinery'
import Targets from './pages/Targets'
import Improvements from './pages/Improvements'
import Wallet from './pages/Wallet'
import Marketplace from './pages/Marketplace'
import Impact from './pages/Impact'
import Architecture from './pages/Architecture'

function App() {
  const [resetKey, setResetKey] = useState(0)
  const onReset = useCallback(() => setResetKey((k) => k + 1), [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout resetKey={resetKey} onReset={onReset} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/targets" element={<Targets />} />
          <Route path="/improvements" element={<Improvements />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/architecture" element={<Architecture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
