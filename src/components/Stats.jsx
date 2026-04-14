import styles from './Stats.module.css'

const stats = [
  { value: '45+', label: 'YEARS EXPERIENCE' },
  { value: '60+', label: 'GLOBAL BRANDS' },
  { value: '500M+', label: 'ANNUAL UNITS' },
]

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
