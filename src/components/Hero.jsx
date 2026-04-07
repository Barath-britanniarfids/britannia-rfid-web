import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import BritanniaLogo from './BritanniaLogo'
import styles from './Hero.module.css'

/* ─── CONFIG ─── */
const H = 10   // 1000vh total scroll

/* ─── STAGES ─── */
const STAGES = [
  {
    id: 'tag', step: '01', tag: 'RFID Tag & Encode', color: '#34ACE0',
    heading: 'Every Item Gets', accent: 'a Smart Digital Identity.',
    bg: '/images/product-tile.jpg', stat: { val: '1B+', key: 'Tags Encoded Annually' },
  },
  {
    id: 'reader', step: '02', tag: 'Antenna & Reader', color: '#C9CD2C',
    heading: 'Captured.', accent: 'Every Pass. Instantly.',
    bg: '/images/product-network.jpg', stat: { val: '1,000+', key: 'Tags Read per Second' },
  },
  {
    id: 'edge', step: '03', tag: 'AI Edge Processing', color: '#AB3480',
    heading: 'Filtered.', accent: 'AI-Validated. In Milliseconds.',
    bg: '/images/product-payment.jpg', stat: { val: '<50ms', key: 'Processing Latency' },
  },
  {
    id: 'cloud', step: '04', tag: 'AI Cloud Platform', color: '#34ACE0',
    heading: 'Every Tag.', accent: 'One Intelligent Dashboard.',
    bg: '/images/hero-bg.jpg', stat: { val: '99.9%', key: 'Platform Uptime SLA' },
  },
  {
    id: 'analytics', step: '05', tag: 'AI Analytics & Insights', color: '#C9CD2C',
    heading: 'AI-Driven Data That', accent: 'Drives Smarter Decisions.',
    bg: '/images/product-retail.jpg', stat: { val: '40%', key: 'Average Cost Reduction' },
  },
]

/* ─── ORBIT NODES ─── */
const orbitItems = [
  {
    angle: 0, radius: 165, dur: 24, label: 'Tag & Encode', clr: '#34ACE0',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="14" height="10" rx="2"/><rect x="7" y="10" width="6" height="4" rx="1"/><path d="M17 10h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2"/><line x1="7" y1="12" x2="3" y2="12"/></svg>,
  },
  {
    angle: 72, radius: 165, dur: 24, label: 'RF Capture', clr: '#C9CD2C',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="13" strokeWidth="2"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M5 13.5a9 9 0 0 1 14 0"/><path d="M1.5 10.5a13.5 13.5 0 0 1 21 0"/><circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none"/></svg>,
  },
  {
    angle: 144, radius: 165, dur: 24, label: 'Edge Filter', clr: '#AB3480',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="0.5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>,
  },
  {
    angle: 216, radius: 165, dur: 24, label: 'Cloud Sync', clr: '#34ACE0',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><polyline points="12 13 12 21"/><polyline points="9 18 12 21 15 18"/></svg>,
  },
  {
    angle: 288, radius: 165, dur: 24, label: 'Analytics', clr: '#C9CD2C',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="4" height="7" rx="1"/><rect x="9" y="9" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="17" rx="1"/><path d="M4 14l7-5 7-5" strokeDasharray="2 2" opacity="0.4"/></svg>,
  },
]

/* ─── HORIZONTAL STRIP CONFIG ─── */
const CARD_W    = 18                   
const CARD_H    = 74                   
const CARD_TOP  = (100 - CARD_H) / 2  
const CARD_LEFT = 50 - CARD_W / 2     
const SLOT_W    = CARD_W + 1        

// Left edge (%) for a card at `slot` relative to centre
function slotLeft(slot) { return CARD_LEFT + slot * SLOT_W }

// Flow cards: sequential left-to-right, slots -2 to +2 (fills centre gap)
const FLOW_REVEAL = [
  { idx: 0, slot: -2, at: 0.22, dur: 0.13 },  // Tag       → far left
  { idx: 1, slot: -1, at: 0.30, dur: 0.13 },  // Reader    → left-adjacent
  { idx: 2, slot:  0, at: 0.38, dur: 0.13 },  // Edge      → centre
  { idx: 3, slot: +1, at: 0.46, dur: 0.13 },  // Cloud     → right-adjacent
  { idx: 4, slot: +2, at: 0.54, dur: 0.13 },  // Analytics → far right
]

/* ─── HELPERS ─── */
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)) }
function lerp(a, b, t)    { return a + (b - a) * t }
function easeOut(t)        { return 1 - Math.pow(1 - t, 2.5) }

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

  /* ── Intro panel parallax: fades out and scales down on scroll ── */
  const FADE_START = 0.08
  const FADE_END   = 0.22
  const fadeT = clamp((progress - FADE_START) / (FADE_END - FADE_START), 0, 1)
  const introOp    = 1 - fadeT
  const introScale = lerp(1, 0.85, fadeT)
  const introY     = lerp(0, -60, fadeT)  // parallax: moves up/backwards slowly

  const scrollHintOp = clamp(1 - progress * 15, 0, 1)

  return (
    <section ref={heroRef} className={styles.hero} style={{ height: `${H * 100}vh` }}>
      <div className={styles.stickyFrame}>

        {/* ── INTRO PANEL (full-screen hero, fades out with parallax) ── */}
        <div
          className={styles.introPanel}
          style={{
            opacity:   introOp,
            transform: `translateY(${introY}px) scale(${introScale})`,
            pointerEvents: introOp > 0.3 ? 'auto' : 'none',
          }}
        >
          <div className={styles.dotGrid} />
          <div className={styles.introGlow} />

          {/* Orbital */}
          <div className={styles.orbital} style={{ left: '66%' }}>
            <div className={styles.glowPulse} />
            <div className={styles.glowPulse2} />
            <div className={styles.track} style={{ '--r': '165px' }} />
            <div className={styles.logoCenter}><BritanniaLogo width={160} /></div>
            {orbitItems.map(item => <OrbitNode key={item.label} item={item} />)}
          </div>

          {/* Full-screen intro content */}
          <div className={styles.introFullContent}>
            <span className={styles.badge}>AI-POWERED RFID SOLUTIONS</span>
            <h1 className={styles.introHeading}>
              AI-Powered RFID.<br />
              <span className={styles.accent}>Intelligent. Accurate. Scalable.</span>
            </h1>
            <p className={styles.introDesc}>
              From AI-enhanced source tagging to intelligent cloud analytics — real-time asset visibility across
              retail, warehouse, healthcare and manufacturing, powered by machine learning at 99.9% accuracy.
            </p>
            <div className={styles.introCtas}>
              <Link to="/products" className={styles.btnPrimary}>Explore Products</Link>
              <button
                className={styles.btnDemo}
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className={styles.playRing}>
                  <svg width="9" height="11" viewBox="0 0 9 11">
                    <polygon points="0,0 9,5.5 0,11" fill="#34ACE0" />
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>
            <div className={styles.scrollHint} style={{ opacity: scrollHintOp }}>
              <span>Scroll to reveal the RFID flow</span>
              <div className={styles.scrollBounce}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── FLOW TILES — fly in from sides into horizontal strip ── */}
        {FLOW_REVEAL.map(({ idx, slot, at, dur }) => {
          const stage    = STAGES[idx]
          const rawT     = clamp((progress - at) / dur, 0, 1)
          const t        = easeOut(rawT)

          // Slide in from beyond the slot
          const overshoot  = (slot < 0 ? -1 : slot > 0 ? 1 : 0) * SLOT_W * 1.2
          const cardLeft   = lerp(slotLeft(slot) + overshoot, slotLeft(slot), t)

          // Depth: cards further from centre are slightly smaller
          const depthScale = 1 - Math.abs(slot) * 0.028
          const cardScale  = lerp(depthScale * 0.88, depthScale, t)

          // z-index: centre cards on top
          const zIndex = 18 - Math.abs(slot) * 4

          // Image parallax within tile
          const tileProgress = clamp((progress - at) / Math.max(0.01, 1 - at), 0, 1)
          const imgPy        = lerp(28, -38, tileProgress)

          return (
            <div
              key={stage.id}
              className={styles.gridTile}
              style={{
                left:            `${cardLeft}%`,
                top:             `${CARD_TOP}%`,
                width:           `${CARD_W}%`,
                height:          `${CARD_H}%`,
                opacity:         t,
                transform:       `scale(${cardScale})`,
                transformOrigin: 'center center',
                zIndex,
                '--accent':      stage.color,
              }}
            >
              <img
                src={stage.bg}
                alt=""
                className={styles.tileImg}
                style={{ transform: `translateY(${imgPy}px) scale(1.18)` }}
              />
              <div className={styles.tileGradient} />
              <div className={styles.tileContent}>
                <div className={styles.tileStep}>
                  <span className={styles.tileStepNum} style={{ color: stage.color }}>{stage.step}</span>
                  <span className={styles.tileStepLine} style={{ background: stage.color }} />
                  <span className={styles.tileStepTag} style={{ color: stage.color }}>{stage.tag}</span>
                </div>
                <h3 className={styles.tileHeading}>
                  {stage.heading}{' '}
                  <em style={{ color: stage.color }}>{stage.accent}</em>
                </h3>
                <div className={styles.tileStat}>
                  <span className={styles.tileStatVal} style={{ color: stage.color }}>{stage.stat.val}</span>
                  <span className={styles.tileStatKey}>{stage.stat.key}</span>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}