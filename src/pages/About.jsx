import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './About.module.css'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Clarity',
    desc: 'Delivering precise data visibility across every node of the supply chain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Trust',
    desc: 'Every system we ship meets rigorous quality standards, no exceptions.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Integrity',
    desc: 'Honest engineering, honest partnerships — built on results that speak.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Accountability',
    desc: 'We own every outcome and continuously improve our solutions for you.',
  },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── Section 1: About us ── */}
        <section className={styles.section1}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.imageBlock}>
                <img src="/images/product-pos.jpg" alt="Britannia RFID technology" className={styles.img} />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.textBlock}>
                <span className={styles.eyebrow}>QUALITY STARTS HERE</span>
                <h1 className={styles.h1}>About us</h1>
                <p className={styles.body}>
                  Britannia RFID handles inventory management with real-time insights, automated scanning, and accurate data capture. It drives optimized supply chains, speeds dispatch, and reduces losses across retail and logistics environments.
                </p>
                <p className={styles.body}>
                  Founded in 1979, we have grown into one of South Asia's most trusted RFID solution providers — serving enterprise clients across fashion, healthcare, logistics, and government sectors.
                </p>
                <Link to="/products" className={styles.cta}>Explore Products →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Automate Warehouse ── */}
        <section className={styles.section2}>
          <div className={styles.container}>
            <div className={`${styles.row} ${styles.rowReverse}`}>
              <div className={styles.textBlock2}>
                <span className={styles.eyebrow2}>UNMATCHED EFFICIENCY</span>
                <h2 className={styles.h2}>
                  Automate<br />Warehouse<br />Intelligence.
                </h2>
                <p className={styles.body2}>
                  Our real-time inventory system and warehouse management platform integrates RFID at every checkpoint — from goods-in to dispatch — eliminating manual errors and reducing process time.
                </p>
                <p className={styles.body2}>
                  Clients report a 40% reduction in fulfillment time and near-zero shrinkage within 90 days of deployment.
                </p>
              </div>
              <div className={styles.imageBlock}>
                <img src="/images/product-health.jpg" alt="Warehouse intelligence system" className={styles.img} />
                <div className={styles.imgOverlay} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Mission & Vision ── */}
        <section className={styles.section3}>
          <div className={styles.container}>
            <div className={styles.mvGrid}>
              <div className={styles.mvCard}>
                <div className={styles.mvIcon} style={{ background: '#eff6ff', color: '#2563eb' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <h3 className={styles.mvTitle}>Our Mission</h3>
                <p className={styles.mvDesc}>
                  Empowering businesses with smart RFID solutions for greater visibility, precision, and seamless supply chain efficiency.
                </p>
              </div>
              <div className={styles.mvCard}>
                <div className={styles.mvIcon} style={{ background: '#fff1f2', color: '#e11d48' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className={styles.mvTitle}>Our Vision</h3>
                <p className={styles.mvDesc}>
                  To pioneer the next era of intelligent tracking, driving connected, intelligent supply chains and redefining operational excellence at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 4: Values ── */}
        <section className={styles.section4}>
          <div className={styles.container}>
            <h2 className={styles.valuesHeading}>The Values We Live By</h2>
            <div className={styles.valueDivider} />
            <div className={styles.valuesGrid}>
              {values.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h4 className={styles.valueTitle}>{v.title}</h4>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
