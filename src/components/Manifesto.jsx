const BURN_ROWS = [
  {
    label: 'Groq AI Inference',
    value: '$1,240/mo',
    desc: 'Ultra-fast LPU hardware processing thousands of agent logic prompts per minute.',
  },
  {
    label: 'ElevenLabs Voice Synthesis',
    value: '$310/mo',
    desc: 'Real-time AI voice generation for audio streaming and agent interactions.',
  },
  {
    label: 'Dedicated Solana RPC',
    value: '$180/mo',
    desc: 'High-speed blockchain node endpoints for instant, unthrottled state reads and writes.',
  },
  {
    label: 'Jito MEV Validator Tips',
    value: '1.42 SOL/mo',
    desc: 'Validator priority bribes ensuring agent transactions never fail during high network load.',
  },
]

const SPECS = [
  ['Creator fee', '0.30% – 0.95%'],
  ['VC equity', '0%'],
  ['Fee routing', 'Operational wallet'],
]

const PHASES = [
  { label: 'Token launch', tag: 'live', active: true },
  { label: 'Agent devnet', tag: 'next', active: false },
  { label: 'Public app', tag: 'locked', active: false },
]

export default function Manifesto() {
  return (
    <section id="roadmap" className="border-b border-rule-strong doc-scene">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="mb-10 max-w-3xl">
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Why the Token Comes First
          </h2>
          <p className="mt-3 font-mono text-base font-medium text-colony md:text-lg">
            0% VC funding. 100% powered by protocol trading volume.
          </p>
        </header>

        <div className="grid gap-px border border-rule-strong bg-rule-strong lg:grid-cols-[1fr_420px]">
          {/* left column: narrative + roadmap stacked so there is no dead space */}
          <div className="flex flex-col gap-px bg-rule-strong">
            <div className="bg-paper-raised p-6 md:p-8">
              <div className="flex items-baseline justify-between border-b border-rule pb-3.5">
                <p className="font-mono text-[11px] text-ink-faint">file · phase0.txt</p>
                <p className="font-mono text-[11px] text-ink-faint">creator-fee-model</p>
              </div>
              <p className="mt-5 text-[17px] leading-8 text-ink-soft md:text-lg">
                Running a swarm of 5 autonomous AI agents 24/7 requires continuous high-performance compute. Instead of relying on venture capital, our infrastructure is funded directly by token volume. As the creator, every buy and sell generates an automated 0.30% to 0.95% creator fee that routes directly to our operational wallet. Trading volume keeps the servers running and the agents evolving.
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-rule pt-4">
                {SPECS.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs text-ink-faint">{label}</dt>
                    <dd className="mt-0.5 font-mono text-xs font-semibold text-ink sm:text-sm">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* roadmap strip tucked directly under the narrative */}
            <div className="flex flex-1 flex-col justify-between bg-paper-raised p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-semibold text-ink">Roadmap</p>
                <p className="font-mono text-[11px] text-ink-faint">segment 1 of 3 · 33%</p>
              </div>

              <div className="mt-4 flex h-3 border border-rule-strong">
                <div className="stage-bar-active relative w-1/3 overflow-hidden border-r border-rule-strong">
                  <span
                    className="stage-bar-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/2"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 border-r border-rule-strong bg-paper" />
                <div className="flex-1 bg-paper" />
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                {PHASES.map((phase, i) => (
                  <div key={phase.label} className="contents">
                    <div className="flex items-center gap-2.5">
                      <p
                        className={
                          phase.active
                            ? 'text-[15px] font-semibold text-ink'
                            : 'text-[15px] text-ink-faint'
                        }
                      >
                        {phase.label}
                      </p>
                      <span
                        className={
                          phase.active
                            ? 'bg-colony px-2 py-0.5 font-mono text-[10px] text-paper'
                            : 'border border-rule px-2 py-0.5 font-mono text-[10px] text-ink-faint'
                        }
                      >
                        {phase.tag}
                      </span>
                    </div>
                    {i < PHASES.length - 1 && (
                      <span className="hidden text-rule sm:inline" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right column: monthly burn */}
          <div className="flex flex-col justify-between bg-paper-raised p-6 md:p-8">
            <div>
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-ink">Monthly Burn</p>
                <p className="font-mono text-[11px] text-ink-faint">infrastructure</p>
              </div>
              <ul className="mt-4">
                {BURN_ROWS.map((item) => (
                  <li
                    key={item.label}
                    title={item.desc}
                    className="border-b border-rule py-3"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] font-medium text-ink">{item.label}</span>
                      <span className="shrink-0 font-mono text-[13px] font-semibold text-colony">
                        {item.value}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex items-baseline justify-between border border-rule-strong bg-paper px-4 py-3">
              <span className="text-[15px] font-semibold text-ink">Total</span>
              <span className="font-mono text-[13px] text-colony">$1,730/mo + 1.42 SOL/mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
