import { Check, Lock } from 'lucide-react'

const TIERS = [
  {
    tier: 'TIER-01',
    name: 'Trench Worker',
    cost: '0.5 SOL / Month',
    limits: ['1 coin launched at a time'],
    features: ['1 deployment per week', 'standard RPC', 'shared agent compute'],
    featured: false,
  },
  {
    tier: 'TIER-02',
    name: 'Syndicate Pro',
    cost: '1 SOL / Month',
    limits: ['5 coins active at once', '1 concurrent build — one coin in build at a time'],
    features: ['priority Groq routing', 'custom meme art styles', 'Jito MEV protection'],
    featured: true,
  },
  {
    tier: 'TIER-03',
    name: 'Whale / Enterprise',
    cost: '2.5 SOL / Month',
    limits: ['2 concurrent builds', 'unlimited active coins'],
    features: [
      'dedicated private RPC',
      '24/7 autonomous Telegram voice agent',
      'custom smart contract logic',
      'zero platform fees',
    ],
    featured: false,
  },
]

function Price({ cost }) {
  const suffix = ' / Month'
  if (cost.endsWith(suffix)) {
    return (
      <p className="mt-1 font-mono text-xl font-bold text-white md:text-2xl">
        {cost.slice(0, -suffix.length)}
        <span className="text-sm font-normal text-dim">{suffix}</span>
      </p>
    )
  }
  return <p className="mt-1 font-mono text-xl font-bold text-white md:text-2xl">{cost}</p>
}

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Pricing</h2>
          <p className="font-mono text-xs tracking-widest text-dim">
            [ 03 ] {'//'} PAID PLANS — FOR WHEN THE APP IS LIVE
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {TIERS.map((plan) => (
            <article
              key={plan.tier}
              className={`relative flex flex-col bg-black p-6 md:p-7 ${
                plan.featured ? 'bg-[#0c0b03]' : ''
              }`}
            >
              {plan.featured && (
                <>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-toxic" aria-hidden="true" />
                  <span className="absolute right-4 top-4 bg-toxic px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-widest text-black">
                    POPULAR
                  </span>
                </>
              )}

              <p className="font-mono text-xs tracking-widest text-dim">[{plan.tier}]</p>
              <h3 className="mt-2 text-lg font-bold tracking-tight">{plan.name}</h3>

              <div className="mt-5 border-t border-line-dim pt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-dim">COST</p>
                <Price cost={plan.cost} />
              </div>

              <div className="mt-6 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Concurrency</p>
                <ul className="mt-2.5 space-y-2.5">
                  {plan.limits.map((limit) => (
                    <li key={limit} className="flex items-start gap-2.5 text-sm text-white">
                      <Check size={14} strokeWidth={2.5} className="mt-0.5 shrink-0 text-toxic" />
                      {limit}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-dim">Included</p>
                <ul className="mt-2.5 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className={`mt-0.5 shrink-0 ${plan.featured ? 'text-toxic' : 'text-dim'}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                disabled
                title="Unlocks at Phase 3: Public App"
                className={`mt-7 flex w-full cursor-not-allowed items-center justify-center gap-2 border py-2.5 font-mono text-xs uppercase tracking-widest ${
                  plan.featured ? 'border-toxic/60 text-toxic' : 'border-line text-dim'
                }`}
              >
                <Lock size={12} />
                Select Plan
              </button>
            </article>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] text-dim">
          {'//'} PLANS ACTIVATE AT PHASE 3: PUBLIC APP. CURRENT STATUS: PHASE 1 (ACTIVE).
        </p>
      </div>
    </section>
  )
}
