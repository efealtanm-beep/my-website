const LOG_LINES = [
  '> Initializing SwarmCore...',
  '> DeployerBot connected to RPC.',
  '> ViralBot generating meme assets.',
  '> Awaiting deployment prompt...',
]

const REGISTRY = [
  ['01', 'DeployerBot'],
  ['02', 'ViralBot'],
  ['03', 'ModBot'],
  ['04', 'LiquidityBot'],
  ['05', 'SwarmCore'],
]

const STATS = [
  ['AGENTS ONLINE', '05/05'],
  ['UPTIME', '24/7'],
  ['VC FUNDING', '0'],
  ['BUILD PHASE', '1/3'],
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 md:px-6 md:pb-20 md:pt-20">
        {/* status line */}
        <p className="flex items-center gap-2 whitespace-nowrap font-mono text-[10px] tracking-widest text-toxic sm:text-xs">
          <span className="pulse-dot inline-block h-1.5 w-1.5 bg-toxic" />
          [ SYNDICATE_OS v0.1.0 // STATUS: ONLINE ]
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight [text-wrap:balance] md:text-6xl">
          Autonomous Multi-Agent <span className="text-toxic">Launchpad.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
          Most launchpads make you do all the work.{' '}
          <span className="text-white">SWARM deploys 5 specialized AI agents to do it all for you.</span>
        </p>

        {/* actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#"
            className="flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm text-white transition-colors hover:border-white"
          >
            Read the Docs
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-toxic px-5 py-3 font-mono text-sm font-semibold text-black transition-colors hover:bg-toxic-dim"
          >
            Buy $SWARM on Pump.fun
          </a>
        </div>

        {/* dense stat strip */}
        <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {STATS.map(([label, value]) => (
            <div key={label} className="bg-black p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">{label}</p>
              <p className="mt-1 font-mono text-xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        {/* terminal window */}
        <div className="mt-px border border-line bg-panel">
          <div className="flex items-center justify-between border-b border-line px-3 py-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 border border-line bg-[#161616]" />
              <span className="h-2.5 w-2.5 border border-line bg-[#161616]" />
              <span className="h-2.5 w-2.5 border border-line bg-[#161616]" />
            </div>
            <p className="font-mono text-xs text-dim">swarm@syndicate:~/core</p>
            <p className="hidden font-mono text-xs text-dim md:block">PID 0005 // TTY/0</p>
          </div>

          <div className="grid md:grid-cols-[1fr_280px]">
            <div className="min-h-[210px] p-4 font-mono text-[13px] leading-7 md:p-5">
              {LOG_LINES.map((line, i) => (
                <p key={line} className={i === LOG_LINES.length - 1 ? 'text-white' : 'text-gray-400'}>
                  {line}
                  {i === LOG_LINES.length - 1 && (
                    <span className="cursor-blink ml-2 inline-block h-3.5 w-2 translate-y-0.5 bg-toxic" />
                  )}
                </p>
              ))}
              <p className="mt-2 text-dim">$</p>
            </div>

            <aside className="border-t border-line p-4 font-mono text-[11px] md:border-l md:border-t-0 md:p-5">
              <p className="text-[10px] uppercase tracking-widest text-dim">Agent Registry</p>
              <ul className="mt-3">
                {REGISTRY.map(([id, name]) => (
                  <li
                    key={id}
                    className="flex items-center gap-3 border-b border-line-dim py-2 last:border-b-0"
                  >
                    <span className="text-dim">{id}</span>
                    <span className="flex-1 text-gray-300">{name}</span>
                    <span className="flex items-center gap-1.5 text-toxic">
                      <span className="pulse-dot inline-block h-1.5 w-1.5 bg-toxic" />
                      ONLINE
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-dim">
                CORE: <span className="text-white">STANDBY</span> // AWAITING PROMPT
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
