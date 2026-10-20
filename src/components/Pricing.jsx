import { Check, Lock } from 'lucide-react'

const TIERS = [
  {
    name: 'Trench worker',
    cost: '0.5 SOL',
    per: '/ month',
    limits: ['1 coin launched at a time'],
    features: ['1 deployment a week', 'standard RPC', 'shared agent compute'],
    featured: false,
  },
  {
    name: 'Syndicate pro',
    cost: '1 SOL',
    per: '/ month',
    limits: ['5 coins active at once', '1 concurrent build'],
    features: ['priority Groq routing', 'custom meme art styles', 'Jito MEV protection'],
    featured: true,
  },
  {
    name: 'Whale / enterprise',
    cost: '2.5 SOL',
    per: '/ month',
    limits: ['2 concurrent builds', 'unlimited active coins'],
    features: [
      'dedicated private RPC',
      '24/7 autonomous Telegram voice agent',
      'custom smart-contract logic',
      'zero platform fees',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-rule-strong doc-scene">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="mb-12 max-w-3xl">
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">Pricing</h2>
          <p className="mt-3 text-lg text-ink-soft">
            Plans switch on when the public app ships. Nothing is billing yet.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-px border border-rule-strong bg-rule-strong md:grid-cols-3">
          {TIERS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col bg-paper-raised ${plan.featured ? 'card-accent' : ''}`}
            >
              {plan.featured && (
                <>
                  <span className="absolute inset-x-0 top-0 h-1 bg-colony" aria-hidden="true" />
                  <span className="absolute right-5 top-5 bg-colony px-2 py-0.5 font-mono text-[10px] text-paper">
                    most chosen
                  </span>
                </>
              )}
              <div
                className={
                  plan.featured
                    ? 'flex flex-1 flex-col border-x-2 border-colony p-6 md:p-8'
                    : 'flex flex-1 flex-col p-6 md:p-8'
                }
              >
                <h3 className="font-display text-xl text-ink md:text-2xl">{plan.name}</h3>

                <div className="mt-6 flex items-baseline gap-1 border-t border-rule pt-5">
                  <span className="font-mono text-3xl text-ink">{plan.cost}</span>
                  <span className="font-mono text-[13px] text-ink-faint">{plan.per}</span>
                </div>

                <div className="mt-8 flex-1">
                  <p className="text-[13px] font-semibold text-ink">What you can run</p>
                  <ul className="mt-3 space-y-3">
                    {plan.limits.map((limit) => (
                      <li key={limit} className="flex items-start gap-2.5 text-[15px] text-ink">
                        <Check size={15} strokeWidth={2.5} className="mt-1 shrink-0 text-colony" />
                        {limit}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-[13px] font-semibold text-ink">Included</p>
                  <ul className="mt-3 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          className={`mt-1 shrink-0 ${plan.featured ? 'text-colony' : 'text-ink-faint'}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  disabled
                  title="Unlocks when the public app ships"
                  className="mt-9 flex w-full cursor-not-allowed items-center justify-center gap-2 border border-rule py-3 text-[15px] font-medium text-ink-faint"
                >
                  <Lock size={14} />
                  Unlock at phase 3
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-xl text-[15px] text-ink-soft">
          Plans activate at phase 3, the public app. Right now the colony runs in phase 1 — the
          token launch — and seats are reserved, not sold.
        </p>
      </div>
    </section>
  )
}
