import { useNavigate } from 'react-router-dom'
import styles from './LandingCTA.module.css'

export default function LandingCTA() {
  const navigate = useNavigate()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHAT'S NEXT</span>
          <h2 className={styles.heading}>
            Ready to bring RFID intelligence<br className={styles.br} /> to your operations?
          </h2>
          <p className={styles.sub}>
            Explore how Britannia RFID has spent 50+ years building the technology stack
            that powers global supply chains — or reach out directly to our team.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Our Story</h3>
            <p className={styles.cardDesc}>
              From a Leicester garment packaging company in 1976 to a global AI-powered RFID
              ecosystem — learn what drives every product we build.
            </p>
            <button className={styles.outlineBtn} onClick={() => navigate('/about')}>
              Learn About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          <div className={`${styles.card} ${styles.cardAccent}`}>
            <div className={`${styles.iconWrap} ${styles.iconAccent}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Talk to Our Team</h3>
            <p className={styles.cardDesc}>
              Tell us about your industry and scale. Our engineers will map the right
              tags, readers, and platform to your exact workflow.
            </p>
            <button className={styles.solidBtn} onClick={() => navigate('/contact')}>
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
