import { Fragment } from 'react'
import { Rocket, Shield, Cpu } from 'lucide-react'
import { ClaudeSpark, XLogo } from './icons'

const MASTER = {
  kicker: 'Run by SwarmCore',
  title: 'The coordinator',
  body: 'Evaluates your prompt, calculates execution risk, and streams precise directives to worker agents in real time. Continuous command and control—you set the target, SwarmCore dispatches the swarm.',
  downstream: ['builder', 'viral', 'deployer', 'mod'],
}

const AGENTS = [
  {
    id: '01',
    name: 'Builder',
    icon: ClaudeSpark,
    purpose: 'Site & page builds',
    role: 'Runs on Claude Fable 5.1 as its engine. Assembles a fully functional website before launch—custom UI layout, copy, meme asset library, link tree, and live chart integration—delivering a production-ready site before trading ever begins.',
  },
  {
    id: '02',
    name: 'Viral',
    icon: XLogo,
    purpose: 'Memes & narrative',
    role: 'Draws the meme set, runs the official timeline around the clock, and keeps posting while you sleep.',
  },
  {
    id: '03',
    name: 'Deployer',
    icon: Rocket,
    purpose: 'Contract & pool',
    role: 'Sets metadata, lists the coin on Raydium or Pump.fun, and locks or burns the LP the moment SwarmCore says go.',
  },
  {
    id: '04',
    name: 'Mod',
    icon: Shield,
    purpose: 'Community & voice',
    role: 'Holds down Telegram, hosts AI voice rooms, answers real questions from real people, and filters scam links.',
  },
]

export default function Syndicate() {
  return (
    <section id="agents" className="border-b border-rule-strong doc-scene">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="mb-12 max-w-3xl">
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">The Swarm</h2>
          <p className="mt-3 text-lg text-ink-soft">
            One coordinator. Four specialists. Here is exactly who does what while you run prompt one.
          </p>
        </header>

        {/* coordinator panel — full width, colony accent */}
        <div className="panel-accent border border-colony bg-paper-raised p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <span className="bg-colony px-2.5 py-1 font-mono text-[11px] font-medium text-paper">
              {MASTER.kicker}
            </span>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div
              className="hidden h-11 w-11 shrink-0 items-center justify-center border border-colony/40 sm:flex"
              aria-hidden="true"
            >
              <Cpu size={22} strokeWidth={1.5} className="text-colony" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-ink md:text-3xl">{MASTER.title}</h3>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">{MASTER.body}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-rule pt-4 font-mono text-[11px] text-ink-soft">
            <span className="text-ink-faint">reports to:</span>
            {MASTER.downstream.map((id) => (
              <span key={id} className="border border-rule px-2 py-0.5">
                {id}
              </span>
            ))}
          </div>
        </div>

        {/* connector: coordinator → workers (desktop) */}
        <div className="hidden lg:block" aria-hidden="true">
          <div className="mx-auto flex h-8 w-[84.5%] justify-center">
            <span className="h-8 w-px bg-colony" />
          </div>
          <div className="relative mx-auto h-px w-[84.5%] bg-rule">
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-colony" />
          </div>
          <div className="grid grid-cols-4">
            {AGENTS.map((agent) => (
              <div key={agent.id} className="flex justify-center">
                <div className="h-6 w-px bg-rule" />
              </div>
            ))}
          </div>
        </div>

        {/* vertical stub for narrow layouts */}
        <div className="mx-auto h-8 w-px bg-rule lg:hidden" aria-hidden="true" />

        {/* workers — 2×2, visually distinct from the coordinator panel above */}
        <div className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon
            return (
              <Fragment key={agent.id}>
                {i > 0 && (
                  <div className="flex justify-center bg-paper sm:hidden" aria-hidden="true">
                    <div className="h-6 w-px bg-rule" />
                  </div>
                )}
                <article className="bg-paper p-5 md:p-7">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-9 w-9 items-center justify-center border border-rule-strong"
                      aria-hidden="true"
                    >
                      <Icon size={18} strokeWidth={1.5} className="text-colony" />
                    </div>
                    <span className="font-mono text-[11px] text-ink-faint">agent {agent.id}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink md:text-2xl">{agent.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-colony">{agent.purpose}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{agent.role}</p>
                </article>
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
