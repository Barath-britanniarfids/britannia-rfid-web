import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import BritanniaLogo from './BritanniaLogo'
import styles from './Hero.module.css'

/* ─── CONFIG ─── */
const H = 10  // 1000vh — more scroll = slower, cinematic feel
const N = 6   // stages: 0=intro, 1-5=flow steps

/* ─── FLOW STAGES ─── */
const STAGES = [
  {
    id: 'tag', step: '01', tag: 'RFID Tag & Encode', color: '#1EC9E8',
    heading: 'Every Item Gets', accent: 'a Digital Identity.',
    desc: 'At point of manufacture or receipt, RFID inlays are encoded with a unique EPC — a permanent digital fingerprint that travels with the product through its entire lifecycle.',
    stat: { val: '1B+', key: 'Tags Encoded Annually' },
  },
  {
    id: 'reader', step: '02', tag: 'Antenna & Reader', color: '#C2D600',
    heading: 'Captured.', accent: 'Every Pass. Instantly.',
    desc: 'Fixed UHF readers with optimised antenna arrays silently scan hundreds of tagged items per second — no line of sight, no manual handling, zero read errors.',
    stat: { val: '1,000+', key: 'Tags Read per Second' },
  },
  {
    id: 'edge', step: '03', tag: 'Edge Processing', color: '#D81BB0',
    heading: 'Filtered.', accent: 'Validated. In Milliseconds.',
    desc: 'On-premise edge devices filter RF noise, de-duplicate reads, and validate EPCs — all before a single byte reaches the network.',
    stat: { val: '<50ms', key: 'Processing Latency' },
  },
  {
    id: 'cloud', step: '04', tag: 'Cloud Platform', color: '#3b82f6',
    heading: 'Every Tag.', accent: 'One Dashboard.',
    desc: 'Clean event streams sync with your ERP, WMS and TMS in real time. Full audit trail, zero data loss, 99.9% uptime SLA.',
    stat: { val: '99.9%', key: 'Platform Uptime SLA' },
  },
  {
    id: 'analytics', step: '05', tag: 'Analytics & Insights', color: '#f59e0b',
    heading: 'Data That', accent: 'Drives Decisions.',
    desc: 'Turn raw tag events into business intelligence — inventory accuracy scores, shrinkage alerts, dwell-time heatmaps, and OEE metrics refreshed every second.',
    stat: { val: '40%', key: 'Average Cost Reduction' },
  },
]

/* ─── ORBIT NODES ─── */
const orbitItems = [
  {
    angle: 0, radius: 165, dur: 24, label: 'Tag & Encode', clr: '#1EC9E8',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="14" height="10" rx="2"/><rect x="7" y="10" width="6" height="4" rx="1"/><path d="M17 10h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2"/><line x1="7" y1="12" x2="3" y2="12"/></svg>,
  },
  {
    angle: 72, radius: 165, dur: 24, label: 'RF Capture', clr: '#C2D600',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="13" strokeWidth="2"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M5 13.5a9 9 0 0 1 14 0"/><path d="M1.5 10.5a13.5 13.5 0 0 1 21 0"/><circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none"/></svg>,
  },
  {
    angle: 144, radius: 165, dur: 24, label: 'Edge Filter', clr: '#D81BB0',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="0.5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>,
  },
  {
    angle: 216, radius: 165, dur: 24, label: 'Cloud Sync', clr: '#3b82f6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><polyline points="12 13 12 21"/><polyline points="9 18 12 21 15 18"/></svg>,
  },
  {
    angle: 288, radius: 165, dur: 24, label: 'Analytics', clr: '#f59e0b',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="4" height="7" rx="1"/><rect x="9" y="9" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="17" rx="1"/><path d="M4 14l7-5 7-5" strokeDasharray="2 2" opacity="0.4"/></svg>,
  },
]

/* ─── PURE HELPERS ─── */
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))
const lerp  = (a, b, t)   => a + (b - a) * t

/* ─── ORBIT NODE (static) ─── */
function OrbitNode({ item }) {
  return (
    <div
      className={styles.arm}
      style={{ '--start': `${item.angle}deg`, '--radius': `${item.radius}px`, '--dur': `${item.dur}s` }}
    >
      <div
        className={styles.node}
        style={{ '--start': `${item.angle}deg`, '--dur': `${item.dur}s`, '--clr': item.clr }}
      >
        <div className={styles.nodeIcon} style={{ '--clr': item.clr }}>{item.icon}</div>
        <span className={styles.nodeLabel}>{item.label}</span>
      </div>
    </div>
  )
}

/* ─── SET helpers — write to DOM directly, skip React ─── */
const s = (el, prop, val) => { if (el) el.style[prop] = val }
const t = (el, val)       => { if (el) el.style.transform = val }
const o = (el, val)       => { if (el) el.style.opacity   = val }

/* ═══════════════════════════════════════════════
   MAIN HERO — zero useState, all DOM-direct
════════════════════════════════════════════════ */
export default function Hero() {
  const heroRef = useRef(null)
  const rafRef  = useRef(null)

  /* scroll progress: target = raw, current = smoothed */
  const targetP  = useRef(0)
  const currentP = useRef(0)

  /* refs for every animated DOM element */
  const elIntroBg   = useRef(null)
  const elDotGrid   = useRef(null)
  const elIntroGlow = useRef(null)
  const elOrbital   = useRef(null)
  const elIntro     = useRef(null)
  const elFooter    = useRef(null)
  const elFStep     = useRef(null)
  const elFName     = useRef(null)

  const glowEls = useRef([])   // per-stage color glow
  const numEls  = useRef([])   // per-stage big number
  const stepEls = useRef([])   // per-stage text block

  /* ── Animation loop: reads scroll → lerps → writes DOM ── */
  useEffect(() => {
    /* read raw scroll progress */
    function readScroll() {
      if (!heroRef.current) return
      const { top, height } = heroRef.current.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      if (scrollable > 0) targetP.current = clamp(-top / scrollable, 0, 1)
    }

    /* write all DOM transforms/opacities for given progress p */
    function update(p) {

      /* ── INTRO (stage 0) ─────────────────────────── */
      const f0 = clamp(p * N, 0, 1)

      // Intro: hold at full scale, then zoom out on exit
      // Scroll UP back to intro: zooms back IN from 0.55 → 1.0 (symmetric reverse)
      const zoomT      = clamp((f0 - 0.28) / 0.72, 0, 1)
      const introScale = lerp(1, 0.55, zoomT)
      const introOp    = f0 > 0.62 ? clamp(1 - (f0 - 0.62) / 0.38, 0, 1) : 1
      const orbScale   = lerp(1, 0.50, zoomT)
      const orbOp      = f0 > 0.66 ? clamp(1 - (f0 - 0.66) / 0.34, 0, 1) : 1

      // Light intro bg fades exactly as stage-1 glow fades in — no dark flash
      const firstRaw  = p * N - 1
      const introBgOp = clamp(1 - (firstRaw + 0.15) / 0.30, 0, 1)

      o(elIntroBg.current,   introBgOp)
      o(elDotGrid.current,   introBgOp)
      o(elIntroGlow.current, introBgOp)

      o(elOrbital.current, orbOp)
      t(elOrbital.current, `translateX(-50%) scale(${orbScale})`)

      o(elIntro.current, introOp)
      t(elIntro.current, `scale(${introScale})`)
      s(elIntro.current, 'pointerEvents', introOp > 0.15 ? 'auto' : 'none')

      /* ── FLOW STAGES (1-5) ────────────────────────── */
      STAGES.forEach((stage, idx) => {
        const i   = idx + 1
        const raw = p * N - i   // 0 at stage start, 1 at stage end

        // Layer 1 — glow: slightly wider window than text so color is always present
        const glowOp = clamp(
          raw < -0.10 ? 0 :
          raw <  0.10 ? (raw + 0.10) / 0.20 :
          raw >  0.88 ? (1.10 - raw) / 0.22 :
          raw >= 1.10 ? 0 : 1
        , 0, 1)
        o(glowEls.current[idx], glowOp)
        t(glowEls.current[idx], `translate(-50%, -50%)`)

        // Layer 2 — big number: symmetric zoom, same distance both ends
        const numOp = clamp(
          raw <  0.00 ? 0 :
          raw <  0.18 ? raw / 0.18 :
          raw >  0.75 ? (1.0 - raw) / 0.25 :
          raw >= 1.00 ? 0 : 1
        , 0, 1)
        const numEntry = clamp(raw / 0.18, 0, 1)
        const numExit  = clamp((raw - 0.75) / 0.25, 0, 1)
        const numScale = numExit > 0 ? lerp(1.0, 0.76, numExit) : lerp(0.76, 1.0, numEntry)
        o(numEls.current[idx], numOp * 0.06)
        t(numEls.current[idx], `translate(-50%, -50%) scale(${numScale})`)

        // Layer 3 — text: FULLY SYMMETRIC zoom
        // Scroll DOWN → entry zooms IN (0.52→1.0), exit zooms OUT (1.0→0.52)
        // Scroll UP   → reverses exactly: entry zooms OUT (1.0→0.52), exit zooms IN (0.52→1.0)
        // Both directions feel identical because the math is the same — just p going ↑ or ↓
        const textOp = clamp(
          raw <  0.00 ? 0 :
          raw <  0.20 ? raw / 0.20 :
          raw >  0.72 ? (1.0 - raw) / 0.28 :
          raw >= 1.00 ? 0 : 1
        , 0, 1)
        const entryT = clamp(raw / 0.20, 0, 1)             // 0→1 as raw 0→0.20
        const exitT  = clamp((raw - 0.72) / 0.28, 0, 1)   // 0→1 as raw 0.72→1.0
        // entry: 0.52→1.0  |  hold: 1.0  |  exit: 1.0→0.52  (same scale both ends)
        const scale  = exitT > 0
          ? lerp(1.0, 0.52, exitT)
          : lerp(0.52, 1.0, entryT)
        o(stepEls.current[idx], textOp)
        t(stepEls.current[idx], `translate(-50%, -50%) scale(${scale})`)
      })

      /* ── FOOTER LABEL ──────────────────────────────── */
      const activeStage = clamp(Math.floor(p * N), 0, N - 1)
      if (elFooter.current) {
        if (activeStage > 0) {
          const stage    = STAGES[activeStage - 1]
          const frac     = clamp(p * N - activeStage, 0, 1)
          const footerOp = frac < 0.12 ? frac / 0.12 : frac > 0.88 ? (1 - frac) / 0.12 : 1
          o(elFooter.current, footerOp)
          s(elFooter.current, 'display', 'flex')
          if (elFStep.current) elFStep.current.textContent = stage.step
          if (elFName.current) elFName.current.textContent = stage.tag
        } else {
          s(elFooter.current, 'display', 'none')
        }
      }
    }

    /* rAF loop: lerp currentP toward targetP for buttery smoothing */
    function loop() {
      readScroll()
      // 0.072 ≈ GSAP scrub:1.5 feel — chases scroll with just enough lag
      currentP.current = lerp(currentP.current, targetP.current, 0.072)
      update(currentP.current)
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  /* ══════════════════════════════════════════
     JSX — 100 % static, zero progress values
     All motion driven by the rAF loop above
  ══════════════════════════════════════════ */
  return (
    <section ref={heroRef} className={styles.hero} style={{ height: `${H * 100}vh` }}>
      <div className={styles.stickyFrame}>

        {/* ── FLOW STAGES: 3-layer parallax ── */}
        {STAGES.map((stage, idx) => (
          <div key={stage.id}>

            {/* Layer 1 — color glow (slowest) */}
            <div
              ref={el => { glowEls.current[idx] = el }}
              className={styles.flowGlow}
              style={{
                opacity: 0,
                background: `radial-gradient(ellipse 90% 80% at 50% 50%,
                  ${stage.color}22 0%, ${stage.color}08 50%, transparent 75%)`,
              }}
            />

            {/* Layer 2 — big step number (medium) */}
            <div
              ref={el => { numEls.current[idx] = el }}
              className={styles.flowBigNum}
              style={{ opacity: 0, color: stage.color }}
            >
              {stage.step}
            </div>

            {/* Layer 3 — text content (fastest) */}
            <div
              ref={el => { stepEls.current[idx] = el }}
              className={styles.flowStep}
              style={{ opacity: 0, '--accent': stage.color }}
            >
              <div className={styles.stepMarker}>
                <span className={styles.stepNum} style={{ color: stage.color }}>{stage.step}</span>
                <div className={styles.stepLine} style={{ background: stage.color }} />
                <span className={styles.stepTag} style={{ color: stage.color }}>{stage.tag}</span>
              </div>
              <h2 className={styles.flowHeading}>
                {stage.heading} <em style={{ color: stage.color }}>{stage.accent}</em>
              </h2>
              <p className={styles.flowDesc}>{stage.desc}</p>
              <div className={styles.flowStat}>
                <span className={styles.flowStatVal} style={{ color: stage.color }}>
                  {stage.stat.val}
                </span>
                <span className={styles.flowStatKey}>{stage.stat.key}</span>
              </div>
            </div>

          </div>
        ))}

        {/* ── INTRO BACKGROUNDS ── */}
        <div ref={elIntroBg}   className={styles.introBg} />
        <div ref={elDotGrid}   className={styles.dotGrid} />
        <div ref={elIntroGlow} className={styles.introGlow} />

        {/* ── ORBITAL ── */}
        <div ref={elOrbital} className={styles.orbital}>
          <div className={styles.glowPulse} />
          <div className={styles.glowPulse2} />
          <div className={styles.track} style={{ '--r': '165px' }} />
          <div className={styles.logoCenter}><BritanniaLogo width={160} /></div>
          {orbitItems.map(item => <OrbitNode key={item.label} item={item} />)}
        </div>

        {/* ── INTRO CONTENT ── */}
        <div
          ref={elIntro}
          className={styles.introOuter}
          style={{ transformOrigin: 'center center' }}
        >
          <div className={styles.introInner}>
            <span className={styles.badge}>AI-POWERED RFID SOLUTIONS</span>
            <h1 className={styles.introHeading}>
              AI-Powered RFID.<br />
              <span className={styles.accent}>Intelligent. Accurate. Scalable.</span>
            </h1>
            <p className={styles.introDesc}>
              From AI-enhanced source tagging to intelligent cloud analytics — real-time
              asset visibility across retail, warehouse, healthcare and manufacturing,
              powered by machine learning at 99.9% accuracy.
            </p>
            <div className={styles.introCtas}>
              <Link to="/products" className={styles.btnPrimary}>Explore Products</Link>
              <button
                className={styles.btnDemo}
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className={styles.playRing}>
                  <svg width="9" height="11" viewBox="0 0 9 11">
                    <polygon points="0,0 9,5.5 0,11" fill="#34ace0" />
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* ── STAGE FOOTER ── */}
        <div
          ref={elFooter}
          className={styles.stageFooter}
          style={{ display: 'none', opacity: 0 }}
        >
          <span ref={elFStep} className={styles.stageFooterStep} />
          <span className={styles.stageFooterSep}>—</span>
          <span className={styles.stageFooterTotal}>05</span>
          <span ref={elFName} className={styles.stageFooterName} />
        </div>

      </div>
    </section>
  )
}
