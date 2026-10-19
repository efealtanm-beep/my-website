const ROWS = [
  { label: '$SWARM/SOL', value: '0.01250', delta: '+12.40%' },
  { label: 'MCAP', value: '$2.4M' },
  { label: '24H VOL', value: '$862K' },
  { label: 'HOLDERS', value: '3,412' },
  { label: 'LP', value: 'LOCKED 100%' },
  { label: 'AGENT UPTIME', value: '99.98%' },
  { label: 'GROQ QUEUE', value: '0ms' },
  { label: 'JITO TIPS', value: '1.42 SOL' },
  { label: 'PROMPTS / 24H', value: '8,204' },
]

function Row({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {ROWS.map((row) => (
        <span
          key={row.label}
          className="flex items-center gap-2 whitespace-nowrap px-5 font-mono text-[11px] tracking-wide"
        >
          <span className="text-dim">{row.label}</span>
          <span className="text-gray-200">{row.value}</span>
          {row.delta && <span className="text-toxic">▲ {row.delta}</span>}
          <span className="pl-5 text-line-dim">{'//'}</span>
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="group overflow-hidden border-b border-line bg-black">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}
