import { Link } from 'react-router-dom'
import { products } from '../data/products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Products.module.css'

export default function Products() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerText}>
              <h1 className={styles.title}>Hardware Engineered<br />for Precision</h1>
              <p className={styles.subtitle}>
                The Britannia lineup integrates directly into your existing workflows,
                providing instant data clarity across business touchpoints.
              </p>
            </div>
            <div className={styles.headerNav}>
              <button className={styles.navBtn} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button className={styles.navBtn} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Product grid */}
          <div className={styles.grid}>
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  <img src={product.image} alt={product.name} className={styles.image} />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.category}>{product.category}</p>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.model}>{product.model}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.viewBtn}>View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
