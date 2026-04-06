import BritanniaLogo from './BritanniaLogo'
import WorkflowSteps from './WorkflowSteps'
import styles from './Hero.module.css'

/* ── Orbital items around the logo ── */
const orbitItems = [
  {
    angle: 0, radius: 170, dur: 20, dir: 'cw',
    label: 'Tag & Encode',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="14" height="10" rx="2"/><rect x="7" y="10" width="6" height="4" rx="1"/><path d="M17 10h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2"/><line x1="7" y1="12" x2="3" y2="12"/></svg>,
    clr: '#1EC9E8',
  },
  {
    angle: 72, radius: 170, dur: 20, dir: 'cw',
    label: 'RF Capture',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="13" strokeWidth="2"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M5 13.5a9 9 0 0 1 14 0"/><path d="M1.5 10.5a13.5 13.5 0 0 1 21 0"/><circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none"/></svg>,
    clr: '#C2D600',
  },
  {
    angle: 144, radius: 170, dur: 20, dir: 'cw',
    label: 'Edge Filter',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="0.5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>,
    clr: '#D81BB0',
  },
  {
    angle: 216, radius: 170, dur: 20, dir: 'cw',
    label: 'Cloud Sync',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><polyline points="12 13 12 21"/><polyline points="9 18 12 21 15 18"/></svg>,
    clr: '#1EC9E8',
  },
  {
    angle: 288, radius: 170, dur: 20, dir: 'cw',
    label: 'Analytics',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="4" height="7" rx="1"/><rect x="9" y="9" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="17" rx="1"/><path d="M4 14l7-5 7-5" strokeDasharray="2 2" opacity="0.5"/></svg>,
    clr: '#C2D600',
  },
]

function OrbitNode({ item }) {
  return (
    <div
      className={`${styles.arm} ${item.dir === 'cw' ? styles.armCW : styles.armCCW}`}
      style={{ '--start': `${item.angle}deg`, '--radius': `${item.radius}px`, '--dur': `${item.dur}s` }}
    >
      <div
        className={`${styles.node} ${item.dir === 'cw' ? styles.nodeCW : styles.nodeCCW}`}
        style={{ '--start': `${item.angle}deg`, '--dur': `${item.dur}s`, '--clr': item.clr }}
      >
        <div className={styles.nodeIcon} style={{ '--clr': item.clr }}>{item.icon}</div>
        <span className={styles.nodeLabel}>{item.label}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden="true" />

      {/* ── TOP ROW: orbital logo  +  workflow panel ── */}
      <div className={styles.topRow}>

        {/* LEFT — logo with orbiting nodes */}
        <div className={styles.orbitScene} aria-hidden="true">
          {/* Glow rings */}
          <div className={styles.glowPulse} />
          <div className={styles.glowPulse2} />
          {/* Orbit track */}
          <div className={styles.track} style={{ '--r': '170px' }} />
          {/* Center logo card */}
          <div className={styles.logoCenter}>
            <BritanniaLogo width={200} />
          </div>
          {/* Orbiting nodes */}
          {orbitItems.map((item) => (
            <OrbitNode key={item.label} item={item} />
          ))}
        </div>

        {/* RIGHT — workflow panel */}
        <div className={styles.rightPanel}>
          <div className={styles.logoBg} aria-hidden="true">
            <div className={styles.logoSpinner}><BritanniaLogo width={440} /></div>
            <div className={styles.logoGlow} />
          </div>
          <div className={styles.wfHeader}>
            <span className={styles.wfBadgeDot} />
            <span className={styles.wfBadgeText}>Industry-Standard RFID Architecture</span>
          </div>
          <WorkflowSteps />
        </div>
      </div>

      {/* ── BOTTOM ROW: text content ── */}
      <div className={styles.content}>
        <span className={styles.badge}>END TO END RFID TECH SOLUTION</span>
        <h1 className={styles.heading}>
          SMARTER TRACKING <span className={styles.accent}>STARTS HERE</span>
        </h1>
        <p className={styles.desc}>
          RFID-powered, data-optimized solutions that drive profitability through precise
          monitoring and real-time traceability across every vertical.
        </p>
        <div className={styles.actions}>
          <a href="#product" className={styles.btnPrimary}>Explore Products</a>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statVal}>45+</span>
            <span className={styles.statLabel}>Years</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statVal}>60+</span>
            <span className={styles.statLabel}>Locations</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statVal}>500M+</span>
            <span className={styles.statLabel}>Annual Units</span>
          </div>
        </div>
      </div>
    </section>
  )
}
