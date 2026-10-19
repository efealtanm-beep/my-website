import { Lock } from 'lucide-react'

const LINKS = [
  { label: 'Agents', href: '#agents' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <a
          href="#top"
          className="whitespace-nowrap font-mono text-lg font-extrabold tracking-tight sm:text-xl"
        >
          SWARM
        </a>

        <nav className="flex items-center gap-4 md:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            disabled
            title="Unlocks at Phase 3: Public App"
            className="flex cursor-not-allowed items-center gap-1.5 whitespace-nowrap border border-line px-2.5 py-1.5 font-mono text-[11px] text-dim sm:px-3 sm:text-xs"
          >
            <Lock size={12} strokeWidth={2} />
            Launch App (Locked)
          </button>
        </nav>
      </div>
    </header>
  )
}
