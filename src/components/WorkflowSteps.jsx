import styles from './WorkflowSteps.module.css'

const steps = [
  {
    num: '01',
    name: 'RFID Tag',
    type: 'Asset Identification',
    color: '#1EC9E8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="14" height="10" rx="2" />
        <rect x="7" y="10" width="6" height="4" rx="1" />
        <path d="M17 10h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
        <line x1="7" y1="12" x2="3" y2="12" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Antenna & Reader',
    type: 'RF Signal Capture',
    color: '#C2D600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="13" strokeWidth="2" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path d="M5 13.5a9 9 0 0 1 14 0" />
        <path d="M1.5 10.5a13.5 13.5 0 0 1 21 0" />
        <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Edge Processing',
    type: 'Data Filtering',
    color: '#D81BB0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Cloud Platform',
    type: 'Secure Storage',
    color: '#1EC9E8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
        <polyline points="12 13 12 21" />
        <polyline points="9 18 12 21 15 18" />
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Analytics',
    type: 'Actionable Insights',
    color: '#C2D600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="14" width="4" height="7" rx="1" />
        <rect x="9" y="9" width="4" height="12" rx="1" />
        <rect x="16" y="4" width="4" height="17" rx="1" />
        <path d="M4 14l7-5 7-5" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
  },
]

const connectors = [
  { label: 'RF Signal', sub: '860–960 MHz', dots: [0, 0.7, 1.4] },
  { label: 'TCP/IP', sub: 'or Serial', dots: [0.2, 0.9, 1.6] },
  { label: 'REST API', sub: 'or MQTT', dots: [0.4, 1.1, 1.8] },
  { label: 'WebSocket', sub: 'Push', dots: [0.6, 1.3, 2.0] },
]

const tickers = [
  'EPC 300833B2DDD9014000000002 · Gate-A1 · 14:32:07.102',
  'EPC E2004085000000001234ABCD · Dock-7 · 14:32:07.318',
  'EPC 300833B2DDD9014000000019 · Shelf-C3 · 14:32:07.541',
  'EPC E28011606000020000A71A61 · Cold-Zone · 14:32:07.799',
  'EPC 300833B2DDD9014000000044 · Gate-A1 · 14:32:08.013',
  'EPC E2004085000000001234ABCD · Exit-2 · 14:32:08.214',
]

const specs = [
  { val: '< 100 ms', key: 'End-to-End Latency' },
  { val: 'ISO 18000-63', key: 'UHF Standard' },
  { val: 'EPC Gen 2v2', key: 'Air Protocol' },
  { val: '1,000+ tags/s', key: 'Peak Read Rate' },
  { val: 'AES-256', key: 'Data Encryption' },
]

export default function WorkflowSteps() {
  return (
    <div className={styles.wrapper}>
      {/* ── Flow ── */}
      <div className={styles.flow}>
        {steps.map((step, i) => (
          <>
            {/* Step node */}
            <div key={step.num} className={styles.step}>
              <div className={styles.node} style={{ '--clr': step.color }}>
                <div className={styles.ring} />
                <div className={`${styles.ring} ${styles.ring2}`} />
                <div className={styles.iconWrap}>{step.icon}</div>
                <span className={styles.num}>{step.num}</span>
              </div>
              <div className={styles.stepText}>
                <p className={styles.stepName}>{step.name}</p>
                <p className={styles.stepType}>{step.type}</p>
              </div>
            </div>

            {/* Connector (between steps) */}
            {i < connectors.length && (
              <div key={`conn-${i}`} className={styles.conn}>
                <div className={styles.connTrack} />
                {connectors[i].dots.map((delay) => (
                  <div
                    key={delay}
                    className={styles.connDot}
                    style={{ '--delay': `${delay}s` }}
                  />
                ))}
                <div className={styles.connArrow} />
                <span className={styles.connLabel}>
                  {connectors[i].label}<br />{connectors[i].sub}
                </span>
              </div>
            )}
          </>
        ))}
      </div>

      {/* ── Live ticker ── */}
      <div className={styles.tickerWrap}>
        <span className={styles.liveDot} />
        <span className={styles.liveLabel}>LIVE READS</span>
        <div className={styles.ticker}>
          <div className={styles.tickerInner}>
            {[...tickers, ...tickers].map((t, i) => (
              <span key={i} className={styles.tick}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Specs bar ── */}
      <div className={styles.specs}>
        {specs.map((s, i) => (
          <>
            <div key={s.key} className={styles.spec}>
              <span className={styles.specVal}>{s.val}</span>
              <span className={styles.specKey}>{s.key}</span>
            </div>
            {i < specs.length - 1 && <div key={`sep-${i}`} className={styles.specSep} />}
          </>
        ))}
      </div>
    </div>
  )
}
