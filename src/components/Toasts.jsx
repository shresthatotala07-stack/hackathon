import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toastMessages } from '../data'

export default function Toasts() {
  const [toasts, setToasts] = useState([])
  const idxRef = useRef(0)
  const idRef = useRef(0)

  useEffect(() => {
    const spawn = () => {
      const id = idRef.current++
      const msg = toastMessages[idxRef.current % toastMessages.length]
      idxRef.current++
      setToasts((t) => [...t, { id, msg }])
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id))
      }, 6000)
    }
    const first = setTimeout(spawn, 3000)
    const interval = setInterval(spawn, 11000)
    return () => {
      clearTimeout(first)
      clearInterval(interval)
    }
  }, [])

  const dismiss = (id) => setToasts((t) => t.filter((x) => x.id !== id))

  return (
    <div className="toast-wrap">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            className="toast"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.25 }}
          >
            <span className="toast-icon" />
            <div className="toast-body">
              <div className="toast-label">Live telemetry event</div>
              <div className="toast-msg">{t.msg}</div>
            </div>
            <button className="toast-dismiss" onClick={() => dismiss(t.id)}>
              Dismiss
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
