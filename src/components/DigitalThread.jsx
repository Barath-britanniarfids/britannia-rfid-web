import styles from './DigitalThread.module.css'

const steps = [
  {
    side: 'left',
    icon: '📡',
    title: 'Tagging / Encoding',
    desc: 'Physical identity injection at source. Our high-speed encoding systems ensure every asset starts its journey with a unique, undeniable digital identity.',
    imgAlt: 'RFID tagging encoding facility',
    imgSrc: '/images/hero-bg.jpg',
    imgBg: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
  },
  {
    side: 'right',
    icon: '🏭',
    title: 'Warehouse / Inventory',
    desc: 'Automated bulk scan reconciliation. Instantly audit entire pallets or storage zones without line-of-sight, reducing inventory time by up to 90%.',
    imgAlt: 'Warehouse interior with inventory',
    imgSrc: '/images/product-tile.jpg',
    imgBg: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
  },
  {
    side: 'left',
    icon: '📍',
    title: 'Live Tracking',
    desc: 'Precise identification and monitoring. Real-time visibility into the movement of goods across borders, ensuring security and ETD precision.',
    imgAlt: 'Live tracking interface',
    imgSrc: '/images/product-network.jpg',
    imgBg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  {
    side: 'right',
    icon: '🚚',
    title: 'Distribution Centers',
    desc: 'High-speed dynamic sorting logic. Intelligent gate automatically sort and direct assets to their next destination based on real-time demand signals.',
    imgAlt: 'Distribution center highway',
    imgSrc: '/images/product-payment.jpg',
    imgBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  },
  {
    side: 'left',
    icon: '🛍️',
    title: 'Retail Visibility',
    desc: 'Frictionless stock visibility. Maintain 100% inventory accuracy on the sales floor, enabling omnichannel fulfillment and superior customer experiences.',
    imgAlt: 'Retail store inventory',
    imgSrc: '/images/product-retail.jpg',
    imgBg: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)',
  },
  {
    side: 'right',
    icon: '📊',
    title: 'Customer Insights',
    desc: 'Converting journeys into intelligence. Leverage discrete data to understand product velocity, consumer behavior, and supply chain efficiency.',
    imgAlt: 'Customer analytics dashboard',
    imgSrc: '/images/product-pos.jpg',
    imgBg: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)',
  },
]

function TimelineCard({ step, index }) {
  const isLeft = step.side === 'left'

  return (
    <div className={`${styles.row} ${isLeft ? styles.rowLeft : styles.rowRight}`}>
      {isLeft ? (
        <>
          <div className={styles.textBlock}>
            <div className={styles.iconBadge}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
          <div className={styles.timelineCenter}>
            <div className={styles.dot} />
          </div>
          <div className={styles.imageBlock}>
            <div className={styles.imagePlaceholder} style={{ background: step.imgBg }}>
              {step.imgSrc
                ? <img src={step.imgSrc} alt={step.imgAlt} className={styles.realImg} />
                : <span className={styles.imgLabel}>{step.imgAlt}</span>
              }
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.imageBlock}>
            <div className={styles.imagePlaceholder} style={{ background: step.imgBg }}>
              {step.imgSrc
                ? <img src={step.imgSrc} alt={step.imgAlt} className={styles.realImg} />
                : <span className={styles.imgLabel}>{step.imgAlt}</span>
              }
            </div>
          </div>
          <div className={styles.timelineCenter}>
            <div className={styles.dot} />
          </div>
          <div className={styles.textBlock}>
            <div className={styles.iconBadge}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default function DigitalThread() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>SYSTEM LIFECYCLE</span>
          <h2 className={styles.heading}>The Digital Thread</h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {steps.map((step, i) => (
            <TimelineCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
