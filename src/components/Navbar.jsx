import ThemeToggle from './ThemeToggle'

const LINKS = [
  { label: 'The swarm', href: '#agents' },
  { label: 'Why a token', href: '#roadmap' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule-strong bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ink">Swarm</span>
          <span className="hidden font-mono text-[11px] text-ink-faint sm:inline">/ colony OS</span>
        </a>

        <nav className="flex items-center gap-1 md:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#pricing"
            className="ml-2 bg-colony px-3.5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-colony-hold sm:ml-0"
          >
            Buy $SWARM
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
