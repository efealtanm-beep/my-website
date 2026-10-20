const ROWS = [
  { label: 'SWARM/SOL', value: '0.01250', delta: '+12.4%' },
  { label: 'Market cap', value: '$2.4M' },
  { label: '24h volume', value: '$862K' },
  { label: 'Holders', value: '3,412' },
  { label: 'LP', value: 'locked 100%' },
  { label: 'Agent uptime', value: '99.98%' },
  { label: 'Jobs run today', value: '8,204' },
]

function Row({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {ROWS.map((row) => (
        <span key={row.label} className="flex items-baseline gap-2 whitespace-nowrap px-6">
          <span className="font-mono text-[11px] text-ink-faint">{row.label}</span>
          <span className="font-mono text-[11px] text-ink">{row.value}</span>
          {row.delta && <span className="font-mono text-[11px] text-colony">▲{row.delta}</span>}
          <span className="pl-6 text-rule" aria-hidden="true">·</span>
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-b border-rule-strong bg-paper-raised" aria-label="Token telemetry">
      <div className="marquee flex w-max py-2.5">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}
