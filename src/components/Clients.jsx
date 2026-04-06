import styles from './Clients.module.css'

const row1 = [
  { name: 'NIKE',            color: '#fff',    bg: '#111',   font: 'italic',  weight: '900', spacing: '2px' },
  { name: 'adidas',          color: '#fff',    bg: '#000',   font: 'normal',  weight: '700', spacing: '1px' },
  { name: 'PUMA',            color: '#fff',    bg: '#1a1a1a',font: 'normal',  weight: '900', spacing: '3px' },
  { name: 'ZARA',            color: '#888',    bg: '#f0f0f0',font: 'normal',  weight: '400', spacing: '6px' },
  { name: 'H&M',             color: '#e8000b', bg: '#fff',   font: 'normal',  weight: '700', spacing: '1px' },
  { name: 'UNIQLO',          color: '#fff',    bg: '#e40000',font: 'normal',  weight: '800', spacing: '2px' },
  { name: 'GAP',             color: '#fff',    bg: '#00356b',font: 'normal',  weight: '900', spacing: '4px' },
  { name: 'TOMMY',           color: '#fff',    bg: '#cc0001',font: 'normal',  weight: '800', spacing: '2px' },
]

const row2 = [
  { name: 'GUCCI',           color: '#c9a84c', bg: '#111',   font: 'normal',  weight: '600', spacing: '4px' },
  { name: 'LV',              color: '#fff',    bg: '#1a1a1a',font: 'normal',  weight: '700', spacing: '3px' },
  { name: 'CHANEL',          color: '#fff',    bg: '#000',   font: 'normal',  weight: '400', spacing: '5px' },
  { name: 'ROLEX',           color: '#c9a84c', bg: '#0a2240',font: 'normal',  weight: '600', spacing: '3px' },
  { name: 'CARTIER',         color: '#c9a84c', bg: '#111',   font: 'normal',  weight: '400', spacing: '4px' },
  { name: 'BURBERRY',        color: '#fff',    bg: '#1a1a1a',font: 'normal',  weight: '500', spacing: '3px' },
  { name: 'VERSACE',         color: '#c9a84c', bg: '#000',   font: 'normal',  weight: '600', spacing: '3px' },
  { name: 'ARMANI',          color: '#fff',    bg: '#222',   font: 'normal',  weight: '300', spacing: '5px' },
]

const stats = [
  { val: '100+', label: 'GLOBAL CLIENTS',    color: '#2563eb' },
  { val: '1M+',  label: 'TAGS TRACKED',      color: '#7c3aed' },
  { val: '99%',  label: 'ACCURACY RATE',     color: '#0891b2' },
  { val: '20+',  label: 'INDUSTRIES SERVED', color: '#7c3aed' },
]

function LogoRow({ logos, reverse }) {
  const doubled = [...logos, ...logos]
  return (
    <div className={styles.rowTrack}>
      <div className={`${styles.rowInner} ${reverse ? styles.reverse : ''}`}>
        {doubled.map((logo, i) => (
          <div
            key={i}
            className={styles.logoCard}
            style={{ background: logo.bg }}
          >
            <span
              className={styles.logoText}
              style={{
                color: logo.color,
                fontStyle: logo.font,
                fontWeight: logo.weight,
                letterSpacing: logo.spacing,
              }}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section className={styles.section} id="clients">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Behind the Success of<br />Modern Industry Leaders
          </h2>
          <p className={styles.subtitle}>
            Powering intelligent tracking across global businesses with precision-engineered RFID ecosystems.
          </p>
        </div>
      </div>

      {/* Full-bleed logo rows */}
      <div className={styles.marqueeSection}>
        <LogoRow logos={row1} reverse={false} />
        <LogoRow logos={row2} reverse={true} />
      </div>

      {/* Stats */}
      <div className={styles.statsWrap}>
        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statVal} style={{ color: s.color }}>{s.val}</span>
              <span className={styles.statKey}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
