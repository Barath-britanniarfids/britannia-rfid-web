import styles from './TestimonialCTA.module.css'

export default function TestimonialCTA() {
  return (
    <>
      {/* ── Testimonial ── */}
      <section className={styles.testimonial}>
        <div className={styles.testimonialInner}>
          <span className={styles.quoteIcon}>"</span>
          <blockquote className={styles.quote}>
            BRFID transformed our supply chain visibility overnight. Their engineering team
            understood our specific warehousing challenges and delivered a system that
            outperformed all our KPIs.
          </blockquote>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <div className={styles.ctaCircuit} aria-hidden="true">
          {/* Circuit-board SVG lines */}
          <svg width="100%" height="100%" viewBox="0 0 900 260" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.18">
            <path d="M0 80 H200 V40 H400 V120 H600 V60 H900" stroke="white" strokeWidth="1.2"/>
            <path d="M0 160 H150 V200 H350 V140 H550 V200 H900" stroke="white" strokeWidth="1.2"/>
            <path d="M100 0 V80" stroke="white" strokeWidth="1.2"/>
            <path d="M300 40 V0" stroke="white" strokeWidth="1.2"/>
            <path d="M500 120 V80" stroke="white" strokeWidth="1.2"/>
            <path d="M700 60 V0" stroke="white" strokeWidth="1.2"/>
            <path d="M200 200 V260" stroke="white" strokeWidth="1.2"/>
            <path d="M450 140 V260" stroke="white" strokeWidth="1.2"/>
            <path d="M650 200 V260" stroke="white" strokeWidth="1.2"/>
            <circle cx="200" cy="80" r="4" fill="white"/>
            <circle cx="400" cy="40" r="4" fill="white"/>
            <circle cx="400" cy="120" r="4" fill="white"/>
            <circle cx="600" cy="60" r="4" fill="white"/>
            <circle cx="150" cy="200" r="4" fill="white"/>
            <circle cx="350" cy="140" r="4" fill="white"/>
            <circle cx="550" cy="200" r="4" fill="white"/>
            <circle cx="100" cy="80" r="3" fill="white" opacity="0.5"/>
            <circle cx="300" cy="40" r="3" fill="white" opacity="0.5"/>
            <circle cx="500" cy="120" r="3" fill="white" opacity="0.5"/>
            <circle cx="700" cy="60" r="3" fill="white" opacity="0.5"/>
          </svg>
        </div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Let's Build Your Smart Infrastructure</h2>
          <p className={styles.ctaSubtitle}>
            Connect with our solutions architecture team to design a precision
            tracking ecosystem for your business.
          </p>
        </div>
      </section>
    </>
  )
}
