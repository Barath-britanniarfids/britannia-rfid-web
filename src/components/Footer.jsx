import BritanniaLogo from './BritanniaLogo'
import styles from './Footer.module.css'

const footerLinks = {
  Solutions: [
    'Smart Retail',
    'Asset Tracking',
    'Supply Chain',
    'Source Tagging',
    'Healthcare',
  ],
  Company: [
    'Unique Offerings',
    'Global Offices',
    'Careers',
    'Contact',
  ],
  'Unique Offerings': [
    'RFID Ecosystem',
    'Cloud Platform',
    'API Integration',
    'Managed Services',
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Settings',
  ],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <BritanniaLogo width={160} darkBg={true} />
          </div>
          <p className={styles.brandDesc}>
            Leading the global transition to intelligent, connected identity tracking since 1979.
          </p>
        </div>

        <div className={styles.links}>
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>© 2024 Britannia RFID Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
