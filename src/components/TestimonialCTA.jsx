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
    </>
  )
}
