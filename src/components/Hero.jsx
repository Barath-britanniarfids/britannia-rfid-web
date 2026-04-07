import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import BritanniaLogo from './BritanniaLogo'
import styles from './Hero.module.css'

/* ─── CONFIG ─── */
const H = 7   // 700vh total  (intro + 5 flow steps + hold)
const N = 6   // scroll stages: 0 = intro, 1-5 = flow steps

/* ─── FLOW STAGES ─── */
const STAGES = [
  {
    id: 'tag', step: '01', tag: 'RFID Tag & Encode', color: '#1EC9E8',
    heading: 'Every Item Gets', accent: 'a Digital Identity.',
    desc: 'At point of manufacture or receipt, RFID inlays are encoded with a unique EPC — a permanent digital fingerprint that travels with the product through its entire lifecycle.',
    bg: '/images/product-tile.jpg', stat: { val: '1B+', key: 'Tags Encoded Annually' },
  },
  {
    id: 'reader', step: '02', tag: 'Antenna & Reader', color: '#C2D600',
    heading: 'Captured.', accent: 'Every Pass. Instantly.',
    desc: 'Fixed UHF readers with optimised antenna arrays silently scan hundreds of tagged items per second — no line of sight, no manual handling, zero read errors.',
    bg: '/images/product-network.jpg', stat: { val: '1,000+', key: 'Tags Read per Second' },
  },
  {
    id: 'edge', step: '03', tag: 'Edge Processing', color: '#D81BB0',
    heading: 'Filtered.', accent: 'Validated. In Milliseconds.',
    desc: 'On-premise edge devices filter RF noise, de-duplicate reads, and validate EPCs — all before a single byte reaches the network.',
    bg: '/images/product-payment.jpg', stat: { val: '<50ms', key: 'Processing Latency' },
  },
  {
    id: 'cloud', step: '04', tag: 'Cloud Platform', color: '#3b82f6',
    heading: 'Every Tag.', accent: 'One Dashboard.',
    desc: 'Clean event streams sync with your ERP, WMS and TMS in real time. Full audit trail, zero data loss, 99.9% uptime SLA.',
    bg: '/images/hero-bg.jpg', stat: { val: '99.9%', key: 'Platform Uptime SLA' },
  },
  {
    id: 'analytics', step: '05', tag: 'Analytics & Insights', color: '#f59e0b',
    heading: 'Data That', accent: 'Drives Decisions.',
    desc: 'Turn raw tag events into business intelligence — inventory accuracy scores, shrinkage alerts, dwell-time heatmaps, and OEE metrics refreshed every second.',
    bg: '/images/product-retail.jpg', stat: { val: '40%', key: 'Average Cost Reduction' },
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

/* ─── HELPERS ─── */
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)) }
function lerp(a, b, t)    { return a + (b - a) * t }

// Stage-local fraction 0→1 for scroll stage i
function sf(prog, i) { return clamp(prog * N - i, 0, 1) }


/* ─── ORBIT NODE ─── */
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

/* ─── MAIN HERO ─── */
export default function Hero() {
  const heroRef = useRef(null)
  const rafRef  = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function tick() {
      if (!heroRef.current) return
      const { top, height } = heroRef.current.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      setProgress(clamp(-top / scrollable, 0, 1))
    }
    function onScroll() {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    tick()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  /* ── Derived: intro stage (stage 0) ── */
  const f0 = sf(progress, 0)

  // Intro: zoom-out parallax — scales down from center like receding into distance
  // scale: 1.0 → 0.62 (strong zoom-out so recession is clearly visible)
  // fade:  starts at 55%, gone by 90% of the intro stage
  // no translateY — the zoom itself creates the depth; slide fights the effect
  const introScale = lerp(1, 0.62, f0)
  const introOp    = f0 > 0.55 ? clamp(1 - (f0 - 0.55) / 0.45, 0, 1) : 1

  // Orbital: same zoom-out, slightly faster fade so text leads the exit
  const orbScale = lerp(1, 0.58, f0)
  const orbOp    = f0 > 0.60 ? clamp(1 - (f0 - 0.60) / 0.40, 0, 1) : 1

  // Intro bg: fades in EXACT sync with the first flow bg fading in — no dark gap
  const firstRaw  = progress * N - 1     // raw fraction for stage-1 background
  const introBgOp = clamp(1 - (firstRaw + 0.15) / 0.30, 0, 1)

  // Active stage for dots / footer
  const activeStage = clamp(Math.floor(progress * N), 0, N - 1)

  return (
    <section ref={heroRef} className={styles.hero} style={{ height: `${H * 100}vh` }}>
      <div className={styles.stickyFrame}>

        {/* ── FLOW STAGES: 3-layer parallax (no images) ── */}
        {STAGES.map((stage, idx) => {
          const i   = idx + 1
          const raw = progress * N - i  // -∞ to +∞; 0=stage start, 1=stage end

          // ── Layer 1: color glow (SLOWEST — barely moves, wide fade window)
          const glowOp = clamp(
            raw < -0.40 ? 0 :
            raw < -0.05 ? (raw + 0.40) / 0.35 :
            raw >  0.95 ? (1.40 - raw) / 0.45 : 1
          , 0, 1)
          const glowY = lerp(14, -7, clamp(raw, 0, 1))   // 21px total — almost static

          // ── Layer 2: decorative step number (MEDIUM speed)
          const numOp = clamp(
            raw < -0.35 ? 0 :
            raw < -0.05 ? (raw + 0.35) / 0.30 :
            raw >  0.85 ? (1.35 - raw) / 0.50 : 1
          , 0, 1)
          const numY = lerp(50, -25, clamp(raw, 0, 1))   // 75px total — mid speed

          // ── Layer 3: text content (FASTEST — wide overlap so two stages crossfade)
          const textOp = clamp(
            raw < -0.28 ? 0 :
            raw <  0.02 ? (raw + 0.28) / 0.30 :
            raw >  0.78 ? (1.28 - raw) / 0.50 : 1
          , 0, 1)
          const textY = lerp(110, -55, clamp(raw, 0, 1)) // 165px total — fast

          return (
            <div key={stage.id}>
              {/* Glow bg — slow layer */}
              <div
                className={styles.flowGlow}
                style={{
                  opacity: glowOp,
                  background: `radial-gradient(ellipse 90% 80% at 50% 50%, ${stage.color}1e 0%, ${stage.color}08 50%, transparent 75%)`,
                  transform: `translate(-50%, calc(-50% + ${glowY}px))`,
                }}
              />

              {/* Big decorative number — medium layer */}
              <div
                className={styles.flowBigNum}
                style={{
                  opacity: numOp * 0.055,
                  color: stage.color,
                  transform: `translate(-50%, calc(-50% + ${numY}px))`,
                }}
              >
                {stage.step}
              </div>

              {/* Text content — fast layer */}
              <div
                className={styles.flowStep}
                style={{
                  opacity: textOp,
                  transform: `translate(-50%, calc(-50% + ${textY}px))`,
                  '--accent': stage.color,
                }}
              >
                <div className={styles.stepMarker}>
                  <span className={styles.stepNum} style={{ color: stage.color }}>{stage.step}</span>
                  <div className={styles.stepLine} style={{ background: stage.color }} />
                  <span className={styles.stepTag} style={{ color: stage.color }}>{stage.tag}</span>
                </div>
                <h2 className={styles.flowHeading}>
                  {stage.heading}{' '}
                  <em style={{ color: stage.color }}>{stage.accent}</em>
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
          )
        })}

        {/* ── INTRO LIGHT BACKGROUND (fades out as first flow bg fades in) ── */}
        <div className={styles.introBg}  style={{ opacity: introBgOp }} />
        <div className={styles.dotGrid}  style={{ opacity: introBgOp }} />
        <div className={styles.introGlow} style={{ opacity: introBgOp }} />

        {/* ── ORBITAL (right side, parallax push-back) ── */}
        <div
          className={styles.orbital}
          style={{
            opacity:   orbOp,
            transform: `translateX(-50%) scale(${orbScale})`,
          }}
        >
          <div className={styles.glowPulse} />
          <div className={styles.glowPulse2} />
          <div className={styles.track} style={{ '--r': '165px' }} />
          <div className={styles.logoCenter}><BritanniaLogo width={160} /></div>
          {orbitItems.map(item => <OrbitNode key={item.label} item={item} />)}
        </div>

        {/* ── INTRO CONTENT (left side, parallax push-back) ── */}
        <div
          className={styles.introOuter}
          style={{
            opacity:       introOp,
            transform:     `scale(${introScale})`,
            transformOrigin: 'center center',
            pointerEvents:  introOp > 0.2 ? 'auto' : 'none',
          }}
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

        {/* ── STAGE FOOTER (shows step label when in a flow stage) ── */}
        {activeStage > 0 && (() => {
          const stage  = STAGES[activeStage - 1]
          const frac   = sf(progress, activeStage)
          const footerOp = frac < 0.12 ? frac / 0.12 : frac > 0.88 ? (1 - frac) / 0.12 : 1
          return (
            <div className={styles.stageFooter} style={{ opacity: footerOp }}>
              <span className={styles.stageFooterStep}>{stage.step}</span>
              <span className={styles.stageFooterSep}>—</span>
              <span className={styles.stageFooterTotal}>05</span>
              <span className={styles.stageFooterName}>{stage.tag}</span>
            </div>
          )
        })()}

      </div>
    </section>
  )
}
