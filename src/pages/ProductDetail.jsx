import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)
  const [activeThumb, setActiveThumb] = useState(0)

  if (!product) {
    return (
      <>
        <Navbar />
        <div className={styles.notFound}>
          <h2>Product not found</h2>
          <Link to="/products" className={styles.backLink}>← Back to Products</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <Link to="/products">{product.category}</Link>
            <span>/</span>
            <span>{product.model}</span>
          </nav>

          {/* Main section */}
          <div className={styles.productRow}>

            {/* Left: images */}
            <div className={styles.imageSection}>
              <div className={styles.mainImageWrap}>
                <img
                  src={product.thumbnails[activeThumb]}
                  alt={product.name}
                  className={styles.mainImage}
                />
                </div>
              <div className={styles.thumbs}>
                {product.thumbnails.map((src, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === activeThumb ? styles.thumbActive : ''}`}
                    onClick={() => setActiveThumb(i)}
                  >
                    <img src={src} alt={`${product.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: details */}
            <div className={styles.detailSection}>
              <span className={styles.detailBadge}>INDUSTRIAL PRODUCT</span>
              <h1 className={styles.name}>{product.name}</h1>
              <p className={styles.model}>{product.model}</p>
              <p className={styles.desc}>{product.shortDesc}</p>

              {/* Specs */}
              <div className={styles.specsBlock}>
                <p className={styles.specsTitle}>TECHNICAL SPECIFICATIONS</p>
                <div className={styles.specsList}>
                  {product.specs.map((s) => (
                    <div key={s.label} className={styles.specRow}>
                      <span className={styles.specLabel}>{s.label}</span>
                      <span className={styles.specValue}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom feature section */}
          <div className={styles.featuresSection}>
            <h2 className={styles.featuresTitle}>Precision-Engineered Performance</h2>
            <p className={styles.featuresSubtitle}>
              The {product.name} is built as a workhorse appliance, built for the modern enterprise that demands real-time data insights.
            </p>
            <div className={styles.featuresGrid}>
              {product.features.map((f) => (
                <div key={f.title} className={`${styles.featureCard} ${f.dark ? styles.featureCardDark : ''}`}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </main>
      <Footer />
    </>
  )
}
