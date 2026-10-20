import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

// Sun shows while Dark Mode is active (press to go light); Moon while Light Mode is active (press to go dark).
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const current = document.documentElement.dataset.theme
    if (current === 'light' || current === 'dark') setTheme(current)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('swarm-theme', next)
    } catch {
      // storage unavailable (private mode) — theme still switches for the session
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'dark'}
      className="flex h-9 w-9 shrink-0 items-center justify-center border border-rule-strong text-ink transition-colors hover:bg-ink hover:text-paper"
    >
      {theme === 'dark' ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
    </button>
  )
}
