import { ArrowUpRight } from 'lucide-react'

const SOCIALS = ['X', 'Telegram', 'DexScreener', 'GitHub']

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-mono text-[11px] text-dim">
          © 2026 SWARM. Not financial advice.
        </p>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {SOCIALS.map((label) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-1 font-mono text-[11px] text-gray-400 transition-colors hover:text-toxic"
            >
              {label}
              <ArrowUpRight size={11} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
