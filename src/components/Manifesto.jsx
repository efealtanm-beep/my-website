const BURN_ROWS = [
  ['GROQ INFERENCE', '$1,240'],
  ['ELEVENLABS TTS', '$310'],
  ['PREMIUM RPC', '$180'],
  ['JITO MEV TIPS', '1.42 SOL'],
]

const PHASES = [
  { label: 'Phase 1: Token Launch', tag: 'ACTIVE', active: true },
  { label: 'Phase 2: Agent Devnet', tag: 'QUEUED', active: false },
  { label: 'Phase 3: Public App', tag: 'LOCKED', active: false },
]

export default function Manifesto() {
  return (
    <section id="roadmap" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Phase 0: Bootstrapping the Swarm.
          </h2>
          <p className="font-mono text-xs tracking-widest text-dim">
            [ 02 ] {'//'} MANIFESTO — ARCHITECTURE ROADMAP
          </p>
        </div>

        <div className="grid gap-px border border-line bg-line lg:grid-cols-[1fr_340px]">
          {/* the manifesto document */}
          <div className="flex flex-col bg-black p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-line-dim pb-3 font-mono text-[10px] uppercase tracking-widest text-dim">
              <span>FILE: PHASE0.TXT</span>
              <span>STATUS: UNFILTERED</span>
            </div>
            <p className="mt-6 text-sm leading-7 text-gray-300 md:text-[15px]">
              Running a 5-agent LLM syndicate 24/7 isn't cheap. Between Groq inference, ElevenLabs
              TTS, Jito MEV tips, and premium RPC nodes, the infrastructure burns cash. We are
              launching $SWARM on Pump.fun FIRST. There is no VC funding.{' '}
              <strong className="font-semibold text-white">The memecoin is the treasury.</strong>{' '}
              Trading volume and fees from the token directly fund the API costs to bring the
              SwarmCore to mainnet.
            </p>
            <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-8 font-mono text-[10px] uppercase tracking-widest text-dim">
              <span>REVISION: 0</span>
              <span>{'//'}</span>
              <span>VCS INVOLVED: 0</span>
              <span>{'//'}</span>
              <span>EDITED SINCE DEPLOY: NEVER</span>
            </div>
          </div>

          {/* the burn rate */}
          <div className="bg-black p-6 md:p-8">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-dim">
              <span>MONTHLY BURN</span>
              <span>{'//'} ESTIMATES</span>
            </div>
            <ul className="mt-4">
              {BURN_ROWS.map(([label, value]) => (
                <li
                  key={label}
                  className="flex items-center justify-between border-b border-line-dim py-2.5 font-mono text-xs"
                >
                  <span className="text-gray-400">{label}</span>
                  <span className="text-gray-200">{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border border-line px-3 py-2.5 font-mono text-xs">
              <span className="uppercase tracking-widest text-dim">TOTAL</span>
              <span className="font-bold text-toxic">$1,730 + 1.42 SOL</span>
            </div>
          </div>

          {/* deployment pipeline / progress */}
          <div className="bg-black p-6 md:p-8 lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-dim">
              <span>DEPLOYMENT PIPELINE</span>
              <span>
                SEGMENT 1/3 — <span className="text-toxic">33%</span>
              </span>
            </div>

            <div className="mt-4 flex h-3 border border-line">
              <div className="hazard w-1/3 border-r border-line" />
              <div className="flex-1 border-r border-line bg-[#101010]" />
              <div className="flex-1 bg-[#101010]" />
            </div>

            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
              {PHASES.map((phase, i) => (
                <div key={phase.label} className="contents">
                  <div className="flex items-center gap-2">
                    <p
                      className={`font-mono text-xs ${
                        phase.active ? 'font-semibold text-white' : 'text-gray-500'
                      }`}
                    >
                      {phase.label}
                    </p>
                    <span
                      className={`px-1.5 py-0.5 font-mono text-[10px] tracking-widest ${
                        phase.active
                          ? 'bg-toxic font-bold text-black'
                          : 'border border-line text-dim'
                      }`}
                    >
                      {phase.tag}
                    </span>
                  </div>
                  {i < PHASES.length - 1 && (
                    <span className="hidden font-mono text-dim md:inline">-&gt;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
