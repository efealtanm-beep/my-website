const SOCIALS = ['X', 'Telegram', 'DexScreener', 'GitHub']

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-lg text-ink">Swarm</span>
          <p className="font-mono text-[11px] text-ink-faint">not financial advice</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {SOCIALS.map((label) => (
            <a
              key={label}
              href="#"
              className="text-sm text-ink-soft underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
