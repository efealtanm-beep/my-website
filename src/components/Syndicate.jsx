import { Fragment } from 'react'
import { Rocket, Megaphone, Shield, Waves, Cpu } from 'lucide-react'

const MASTER = {
  badge: 'ORCHESTRATOR ENGINE: CLAUDE / FABLE 5.1',
  title: 'SwarmCore Brain',
  subtitle: 'Controls & Coordinates All Sub-Agents',
  body: 'Claude / Fable 5.1 acts as the central intelligence engine of the syndicate. It parses user prompts, evaluates risk metrics, and issues real-time execution commands to all lower-level specialized agents.',
  downstream: ['01', '02', '03', '04'],
}

const AGENTS = [
  {
    id: '01',
    name: 'DeployerBot',
    icon: Rocket,
    purpose: 'Smart Contract & LP Execution',
    role: 'Compiles SPL token metadata, executes deployments on Raydium/Pump.fun, and locks or burns LP tokens automatically upon command from Fable 5.1.',
  },
  {
    id: '02',
    name: 'ViralBot',
    icon: Megaphone,
    purpose: 'Social Media & Narrative Engine',
    role: 'Generates FLUX meme graphics, manages the official X timeline 24/7, creates automated posts, and coordinates community raids.',
  },
  {
    id: '03',
    name: 'ModBot',
    icon: Shield,
    purpose: 'Community & Voice Operations',
    role: 'Operates inside Telegram, hosts continuous AI voice spaces via ElevenLabs TTS, answers technical community questions, and filters scam links.',
  },
  {
    id: '04',
    name: 'LiquidityBot',
    icon: Waves,
    purpose: 'Market Making & MEV Protection',
    role: 'Executes MEV-protected Jito bundle snipes, sets programmatic stop-loss orders, and executes buyback-and-burn cycles funded by volume fees.',
  },
]

export default function Syndicate() {
  return (
    <section id="agents" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">The Swarm</h2>
          <p className="font-mono text-xs tracking-widest text-dim">[ 01 ] {'//'} SYSTEM TOPOLOGY</p>
        </div>

        {/* ── MASTER NODE: orchestrator engine ─────────────────────────── */}
        <div className="relative mx-auto max-w-3xl border border-claude bg-black p-5 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <span className="bg-claude px-2 py-1 font-mono text-[10px] font-bold tracking-widest text-black">
              {MASTER.badge}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-claude">
              <span className="pulse-dot inline-block h-1.5 w-1.5 bg-claude" />
              [STATUS: ORCHESTRATING]
            </span>
          </div>

          <div className="mt-5 flex items-start gap-4">
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-claude/50 sm:flex">
              <Cpu size={20} strokeWidth={1.5} className="text-claude" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">{MASTER.title}</h3>
              <p className="mt-1 font-mono text-xs text-gray-400">{MASTER.subtitle}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-300">{MASTER.body}</p>

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line-dim pt-4 font-mono text-[10px] tracking-widest">
            <span className="text-dim">DOWNSTREAM:</span>
            {MASTER.downstream.map((id) => (
              <span key={id} className="border border-line px-1.5 py-0.5 text-gray-300">
                {id}
              </span>
            ))}
            <span className="text-dim">{'//'} EXEC: AUTONOMOUS</span>
          </div>
        </div>

        {/* ── CONNECTORS: master → sub-agent bus (desktop) ─────────────── */}
        <div className="hidden lg:block" aria-hidden="true">
          {/* orange drop from the brain */}
          <div className="mx-auto h-8 w-px bg-claude" />
          {/* horizontal bus across the 4 column centers */}
          <div className="relative mx-auto h-px w-3/4 bg-line">
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-claude" />
          </div>
          {/* 1px stubs into each node */}
          <div className="grid grid-cols-4">
            {AGENTS.map((agent) => (
              <div key={agent.id} className="flex justify-center">
                <div className="h-6 w-px bg-line" />
              </div>
            ))}
          </div>
        </div>

        {/* vertical link — collapses the tree on mobile / tablet */}
        <div className="mx-auto h-8 w-px bg-line lg:hidden" aria-hidden="true" />

        {/* ── SUB-AGENT NODES ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-0 border-x border-b border-line bg-line sm:grid-cols-2 sm:gap-px lg:grid-cols-4">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon
            return (
              <Fragment key={agent.id}>
                {/* in-sequence connector (single-column layouts only) */}
                {i > 0 && (
                  <div className="flex justify-center bg-black sm:hidden" aria-hidden="true">
                    <div className="h-6 w-px bg-line" />
                  </div>
                )}

                <article className="flex flex-col bg-black p-4 md:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center border border-line">
                      <Icon size={16} strokeWidth={1.5} className="text-toxic" />
                    </div>
                    <span className="font-mono text-[11px] text-toxic">[AGENT_{agent.id}]</span>
                  </div>

                  <h3 className="mt-4 text-base font-bold tracking-tight">{agent.name}</h3>
                  <p className="mt-1.5 font-mono text-[11px] leading-snug text-gray-400">
                    <span className="text-dim">PURPOSE:</span> {agent.purpose}
                  </p>
                  <p className="mb-5 mt-3 text-[13px] leading-relaxed text-gray-300">{agent.role}</p>

                  <div className="mt-auto flex items-center justify-between border-t border-line-dim pt-3 font-mono text-[10px] tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <span className="pulse-dot inline-block h-1.5 w-1.5 bg-toxic" />
                      <span className="text-toxic">[STATUS: READY]</span>
                    </span>
                    <span className="text-dim">UPTIME: 24/7</span>
                  </div>
                </article>
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
