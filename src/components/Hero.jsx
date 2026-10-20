import { useEffect, useRef } from 'react'

function BoidsCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let raf = 0
    let lastT = performance.now()

    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const pointer = { x: -9999, y: -9999, active: false }
    // 1.0 the instant the cursor enters the box, decays to 0 — a short burst
    // of extra speed that settles back to the normal cruise.
    let enterBoost = 0

    const GROUPS = 5
    const PER_GROUP = 26
    // Flat swarm state. group is a 0..1 band used only for hue; spacing comes
    // from real per-dot separation so the dots never pile onto the cursor.
    let boids = []
    const SEP_RADIUS = 11 // dots push apart inside this distance
    const SEP_FORCE = 0.09 // strength of that push
    const CURSOR_RADIUS = 46 // dots orbit the cursor in a ring this wide

    function resize() {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      boids = []
      const total = GROUPS * PER_GROUP
      for (let i = 0; i < total; i += 1) {
        const angle = Math.random() * Math.PI * 2
        boids.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * 0.6,
          vy: Math.sin(angle) * 0.6,
          group: i / total, // 0..1 band -> one of five blue hues
        })
      }
    }

    function step(dt) {
      const total = boids.length

      // Per-dot separation: each dot keeps clear of its nearest neighbours so
      // the swarm stays spread apart instead of clumping at the cursor.
      for (let i = 0; i < total; i += 1) {
        const b = boids[i]
        for (let j = i + 1; j < total; j += 1) {
          const o = boids[j]
          let dx = o.x - b.x
          let dy = o.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < SEP_RADIUS * SEP_RADIUS && d2 > 0.0001) {
            const d = Math.sqrt(d2)
            // push both apart, stronger the closer they are
            const push = (SEP_FORCE * (SEP_RADIUS - d) / SEP_RADIUS) * dt
            dx /= d
            dy /= d
            b.vx -= dx * push
            b.vy -= dy * push
            o.vx += dx * push
            o.vy += dy * push
          }
        }
      }

      for (const b of boids) {
        // Cursor gathers the swarm into a loose ring around the pointer
        // rather than a single point, keeping the middle open.
        if (pointer.active) {
          const dx = pointer.x - b.x
          const dy = pointer.y - b.y
          const dist = Math.hypot(dx, dy) || 0.001
          const pull = (dist - CURSOR_RADIUS) * 0.00028 * dt
          b.vx += (dx / dist) * pull
          b.vy += (dy / dist) * pull
        } else {
          // gentle wander so the swarm keeps breathing on its own
          b.vx += Math.sin(b.y * 0.01 + performance.now() * 0.0004) * 0.004 * dt
          b.vy += Math.cos(b.x * 0.01 + performance.now() * 0.0004) * 0.004 * dt
        }

        const m = 28
        if (b.x < m) b.vx += 0.01 * dt
        if (b.x > width - m) b.vx -= 0.01 * dt
        if (b.y < m) b.vy += 0.01 * dt
        if (b.y > height - m) b.vy -= 0.01 * dt

        const v = Math.hypot(b.vx, b.vy) || 0.001
        const min = 0.55
        // while the entry boost lasts, dots are allowed to travel faster
        const max = 2.1 * (1 + 1.1 * enterBoost)
        const k = v < min ? min / v : v > max ? max / v : 1
        b.vx *= k
        b.vy *= k
        const pace = 0.55 * (1 + 0.7 * enterBoost)
        b.x += b.vx * dt * pace
        b.y += b.vy * dt * pace
      }

      // decay the entry burst back to normal over roughly a second
      if (enterBoost > 0) enterBoost = Math.max(0, enterBoost - 0.02 * dt)
    }

    // five shades per theme — on the dark canvas, lighter electric blues
    // echo the accent so the swarm reads as part of the theme
    const DOT_PALETTE = {
      light: ['#16248f', '#1d33c8', '#3a4ddb', '#2a3fc4', '#1a2ba8'],
      dark: ['#8fa0ff', '#6474ff', '#a5b2ff', '#5a67f0', '#7b88ff'],
    }

    function dotHue(group) {
      const p = DOT_PALETTE[document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light']
      return group < 0.2 ? p[0] : group < 0.4 ? p[1]
        : group < 0.6 ? p[2] : group < 0.8 ? p[3] : p[4]
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const dark = document.documentElement.dataset.theme === 'dark'
      for (const b of boids) {
        ctx.fillStyle = dotHue(b.group)
        ctx.beginPath()
        ctx.arc(b.x, b.y, 1.7, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = dark ? 'rgba(143, 160, 255, 0.22)' : 'rgba(29, 51, 200, 0.14)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(b.x, b.y)
        ctx.lineTo(b.x - b.vx * 5.5, b.y - b.vy * 5.5)
        ctx.stroke()
      }
    }

    function loop(t) {
      const dt = Math.min(3, (t - lastT) / 16.7)
      lastT = t
      if (!reduceMotion) {
        step(dt)
        draw()
        raf = requestAnimationFrame(loop)
      } else {
        if (boids.length) draw()
      }
    }

    function onPointer(e) {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }
    function onLeave() {
      pointer.active = false
      pointer.x = -9999
      pointer.y = -9999
    }
    // fires once per entry — this is what kicks the swarm into the faster burst
    function onEnter() {
      enterBoost = 1
    }

    resize()
    seed()
    raf = requestAnimationFrame(loop)

    window.addEventListener('resize', resize)
    canvas.addEventListener('pointerenter', onEnter)
    canvas.addEventListener('pointermove', onPointer)
    canvas.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointerenter', onEnter)
      canvas.removeEventListener('pointermove', onPointer)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}

const REGISTRY = [
  ['01', 'Builder', 'coin site builds'],
  ['02', 'Viral', 'memes + timeline'],
  ['03', 'Deployer', 'contract + LP'],
  ['04', 'Mod', 'community + voice'],
  ['05', 'SwarmCore', 'runs the colony'],
]

const FACTS = [
  ['Agents online', '05/05'],
  ['Prompt ratio', '1 → 5 workers'],
  ['VC funding', 'none'],
  ['Launch phase', '1 of 3'],
]

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-rule-strong doc-scene">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-24">
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.5rem,12vw,7.5rem)] leading-[0.95] text-ink [text-wrap:balance]">
          One prompt.
          <br />
          Five workers.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
          Most launchpads hand you a checklist and wish you luck. Swarm gives you a colony:
          a coordinator and four specialists that push the coin, make the memes, run the
          community, and farm the liquidity while you do everything else you were going to do today.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#pricing"
            className="bg-colony px-6 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-colony-hold"
          >
            Buy $SWARM on Pump.fun
          </a>
          <a
            href="#agents"
            className="px-1 py-1 text-base font-medium text-ink-soft underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            See who does what
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          {FACTS.map(([label, value]) => (
            <div key={label} className="border-t border-rule-strong pt-3">
              <dt className="text-[13px] text-ink-faint">{label}</dt>
              <dd className="mt-1 font-mono text-sm text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* telemetry strip: log left, live colony canvas right */}
      <div className="mx-auto grid max-w-6xl gap-px border-t border-rule-strong bg-rule-strong md:grid-cols-[1fr_380px]">
        <div className="bg-paper px-5 py-6 md:px-8 md:py-7">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-semibold text-ink">Telemetry</h2>
            <p className="font-mono text-[11px] text-ink-faint">swarm-colony · channel core</p>
          </div>
          <div className="mt-4 font-mono text-[13px] leading-6 text-ink-soft">
            <p>[09:41:07] deployer · pool seeded — 100% LP locked</p>
            <p>[09:41:09] viral · 12 assets queued to timeline</p>
            <p>[09:41:11] mod · voice room open — 214 listening</p>
            <p>[09:41:14] builder · coin.pub site live</p>
            <p className="text-ink">
              [09:41:15] core · coordination cycle 1,204 — nominal
              <span className="blink ml-1 inline-block h-3 w-2 translate-y-0.5 bg-colony" aria-hidden="true" />
            </p>
          </div>
        </div>

        <div className="relative min-h-[240px] bg-paper-raised md:min-h-0">
          <BoidsCanvas />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-rule bg-paper/90 px-4 py-2.5 font-mono text-[11px] text-ink-soft">
            live colony · your prompt leads the swarm
          </div>
        </div>
      </div>

      {/* agent registry rail */}
      <div className="hidden border-t border-rule-strong lg:block">
        <div className="mx-auto grid max-w-6xl grid-cols-5 divide-x divide-rule-strong px-8">
          {REGISTRY.map(([id, name, job]) => (
            <div key={id} className="px-4 py-4">
              <span className="font-mono text-[11px] text-ink-faint">{id}</span>
              <p className="mt-0.5 text-sm font-semibold text-ink">{name}</p>
              <p className="text-[13px] text-ink-soft">{job}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
