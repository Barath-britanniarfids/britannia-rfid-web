import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const LOGO_URL =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60"><text x="30" y="38" font-family="Arial Black,sans-serif" font-size="24" font-weight="900" fill="#1a2332">Britannia</text><text x="30" y="54" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#1a2332" letter-spacing="4">RFID</text><path d="M18 15 Q8 30 18 45" stroke="#c4d93e" stroke-width="2.5" fill="none"/><path d="M13 10 Q0 30 13 50" stroke="#2ba4b8" stroke-width="2.5" fill="none"/><path d="M8 6 Q-8 30 8 54" stroke="#5bbad5" stroke-width="2.5" fill="none"/><path d="M185 15 Q195 30 185 45" stroke="#c4d93e" stroke-width="2.5" fill="none"/><path d="M190 10 Q203 30 190 50" stroke="#2ba4b8" stroke-width="2.5" fill="none"/><path d="M195 6 Q211 30 195 54" stroke="#5bbad5" stroke-width="2.5" fill="none"/></svg>`,
  );

// ---- HEADER ----
const Header = () => {
  const navigate = useNavigate();
  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
        <img
          src={LOGO_URL}
          alt="Britannia RFID"
          style={{ height: 40, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <nav style={styles.nav}>
          {["HOME", "PRODUCT", "ABOUT", "CLIENT", "CONTACT"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (item === "HOME") navigate("/");
                else if (item === "PRODUCT") navigate("/products");
                else if (item === "ABOUT") navigate("/about");
              }}
              style={{
                ...styles.navLink,
                ...(item === "PRODUCT" ? { fontWeight: 700, color: "#1a2332" } : {}),
              }}
            >
              {item}
            </a>
          ))}
        </nav>
        <button style={styles.contactBtn}>contact us</button>
      </div>
    </header>
  );
};

// ---- FOOTER ----
const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerInner}>
      <div style={{ maxWidth: 200 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 24, height: 24, background: "#1a2332", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>B</span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#1a2332" }}>Britannia RFID Technologies</span>
        </div>
        <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
          Leading the global transition to transparent, intelligent asset tracking since 1976.
        </p>
      </div>
      <div>
        <h4 style={styles.footerHead}>Solutions</h4>
        {["Smart Retail", "Warehouse Automation", "Source Tagging", "Asset Tracking"].map((s) => (
          <a key={s} href="#" style={styles.footerLink}>{s}</a>
        ))}
      </div>
      <div>
        <h4 style={styles.footerHead}>Company</h4>
        {["Global Offices", "Sustainability", "Careers", "Contact Us"].map((s) => (
          <a key={s} href="#" style={styles.footerLink}>{s}</a>
        ))}
      </div>
      <div>
        <h4 style={styles.footerHead}>Legal</h4>
        {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((s) => (
          <a key={s} href="#" style={{ ...styles.footerLink, ...(s === "Privacy Policy" ? { color: "#0e7490", textDecoration: "underline" } : {}) }}>
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

// ---- ICONS ----
const ShippingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const WarrantyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const SupportIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const SyncIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0e7490" strokeWidth="2">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
    <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// ============================================================
// MAIN PRODUCT DETAIL
// ============================================================
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeThumb, setActiveThumb] = useState(0);

  // Reset state and scroll to top whenever the product id changes
  useEffect(() => {
    setActiveThumb(0);
    window.scrollTo(0, 0);
  }, [id]);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1a2332" }}>Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          style={{ background: "#0e7490", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const thumbs = product.thumbnails?.length ? product.thumbnails : [product.image];
  const activeImage = thumbs[activeThumb] || product.image;

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1a2332", background: "#fff", minHeight: "100vh", paddingTop : "70px"}}>


      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <span style={{ color: "#6b7280", cursor: "pointer" }} onClick={() => navigate("/products")}>Products</span>
        <span style={{ color: "#9ca3af", margin: "0 6px" }}>›</span>
        <span style={{ color: "#6b7280" }}>{product.category}</span>
        <span style={{ color: "#9ca3af", margin: "0 6px" }}>›</span>
        <span style={{ fontWeight: 600 }}>{product.model}</span>
      </div>

      {/* ====== HERO PRODUCT SECTION ====== */}
      <section style={styles.heroSection}>
        <div style={styles.heroGrid}>
          {/* Left - Image */}
          <div>
            <div style={styles.mainImageWrap}>
              <img
                src={activeImage}
                alt={product.name}
                style={styles.mainImage}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {product.badge && (
                <div style={styles.btBadge}>
                  <span style={{ fontSize: 9, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1 }}>Category</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{product.badge}</span>
                </div>
              )}
            </div>
            {thumbs.length > 1 && (
              <div style={styles.thumbRow}>
                {thumbs.map((t, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    style={{ ...styles.thumbWrap, border: activeThumb === i ? "2px solid #0e7490" : "2px solid #e5e7eb" }}
                  >
                    <img
                      src={t}
                      alt={`View ${i + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }}
                      onError={(e) => { e.currentTarget.style.opacity = "0.3"; }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right - Details */}
          <div style={{ paddingTop: 8 }}>
            <span style={styles.categoryLabel}>{product.category?.toUpperCase()}</span>
            <h1 style={styles.productTitle}>{product.name}</h1>
            <p style={styles.modelLabel}>{product.model}</p>
            <p style={styles.productDesc}>{product.shortDesc}</p>

            {/* Price */}
            <div style={{ marginBottom: 28 }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: "#0e7490" }}>
                ${Number(product.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Tech Specs */}
            {product.specs?.length > 0 && (
              <>
                <h3 style={styles.specsHeading}>TECHNICAL SPECIFICATIONS</h3>
                <div style={styles.specsList}>
                  {product.specs.map((spec, i) => (
                    <div key={i} style={styles.specRow}>
                      <div style={styles.specIconWrap}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0e7490" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 8 12 12 14 14" />
                        </svg>
                      </div>
                      <div>
                        <div style={styles.specLabel}>{spec.label?.toUpperCase()}</div>
                        <div style={styles.specValue}>{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Trust badges */}
            <div style={styles.trustRow}>
              {[
                { icon: <ShippingIcon />, text: "EXPRESS SHIPPING" },
                { icon: <WarrantyIcon />, text: "2 YEAR WARRANTY" },
                { icon: <SupportIcon />, text: "24/7 TECH SUPPORT" },
              ].map((b, i) => (
                <div key={i} style={styles.trustBadge}>
                  {b.icon}
                  <span style={styles.trustText}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      {product.features?.length > 0 && (
        <section style={styles.precisionSection}>
          <h2 style={styles.sectionTitle}>Precision-Engineered Performance</h2>
          <p style={styles.sectionSubtitle}>
            Built for the modern enterprise that demands real-time data integrity and operational excellence.
          </p>

          <div style={styles.featureGrid}>
            {product.features.map((feat, i) =>
              feat.dark ? (
                <div key={i} style={styles.featureCardTeal}>
                  <span style={{ fontSize: 32, marginBottom: 12 }}>{feat.icon}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{feat.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
                </div>
              ) : (
                <div key={i} style={styles.featureCard}>
                  <div style={{ padding: 28 }}>
                    <span style={{ fontSize: 32, marginBottom: 12, display: "block" }}>{feat.icon}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#1a2332" }}>{feat.title}</h3>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* ====== DARK CTA SECTION ====== */}
      <section style={styles.darkSection}>
        <div style={styles.darkGrid}>
          <div style={{ maxWidth: 380 }}>
            <h2 style={styles.darkTitle}>Simplify Complexity. Amplify Intelligence.</h2>
            <div style={{ marginTop: 32 }}>
              <div style={styles.darkFeature}>
                <div style={{ ...styles.darkFeatureIcon, background: "rgba(14,116,144,0.2)" }}>
                  <SyncIcon />
                </div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Real-time Sync</h4>
                  <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
                    Instantly synchronize inventory data across all your locations with ultra-low latency cloud connectivity.
                  </p>
                </div>
              </div>
              <div style={styles.darkFeature}>
                <div style={{ ...styles.darkFeatureIcon, background: "rgba(220,38,38,0.15)" }}>
                  <ShieldIcon />
                </div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Enterprise Security</h4>
                  <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
                    Encrypted RFID protocols ensure your asset data remains protected and private at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other products suggestion */}
          <div style={styles.dashboardWrap}>
            <p style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, marginBottom: 16 }}>
              Explore More Products
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {products.filter((p) => p.id !== id).slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  onClick={() => { navigate(`/products/${p.id}`); window.scrollTo(0, 0); }}
                  style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.05)", transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 8, background: "#1e293b", overflow: "hidden", flexShrink: 0 }}>
                    <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</p>
                    <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{p.model}</p>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#0e7490", whiteSpace: "nowrap" }}>
                    ${Number(p.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// STYLES
// ============================================================
const styles = {
  header: { borderBottom: "1px solid #f0f0f0", background: "#fff", position: "sticky", top: 0, zIndex: 100 },
  headerInner: { maxWidth: 1120, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" },
  nav: { display: "flex", gap: 28 },
  navLink: { textDecoration: "none", color: "#6b7280", fontSize: 13, fontWeight: 500, letterSpacing: 0.5 },
  contactBtn: { background: "#0e7490", color: "#fff", border: "none", borderRadius: 20, padding: "8px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer" },

  breadcrumb: { maxWidth: 1120, margin: "0 auto", padding: "16px 24px", fontSize: 13 },

  heroSection: { maxWidth: 1120, margin: "0 auto", padding: "0 24px 60px" },
  heroGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" },
  mainImageWrap: { position: "relative", borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg, #0f1729 0%, #1e3a5f 100%)", aspectRatio: "4/5", maxHeight: 480 },
  mainImage: { width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 },
  btBadge: { position: "absolute", bottom: 20, left: 20, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "8px 14px", display: "flex", flexDirection: "column", gap: 2 },
  thumbRow: { display: "flex", gap: 10, marginTop: 14 },
  thumbWrap: { width: 72, height: 56, borderRadius: 8, overflow: "hidden", cursor: "pointer", transition: "border 0.2s" },

  categoryLabel: { fontSize: 12, fontWeight: 600, color: "#0e7490", letterSpacing: 1.5, textTransform: "uppercase" },
  productTitle: { fontSize: 30, fontWeight: 800, lineHeight: 1.15, margin: "10px 0 6px", color: "#1a2332" },
  modelLabel: { fontSize: 14, color: "#6b7280", marginBottom: 16 },
  productDesc: { fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 20 },

  specsHeading: { fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#374151", marginBottom: 18, textTransform: "uppercase" },
  specsList: { display: "flex", flexDirection: "column", gap: 16 },
  specRow: { display: "flex", alignItems: "center", gap: 14 },
  specIconWrap: { width: 36, height: 36, borderRadius: 8, background: "#f0fdfa", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  specLabel: { fontSize: 9, fontWeight: 600, color: "#9ca3af", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 },
  specValue: { fontSize: 14, fontWeight: 600, color: "#1a2332" },

  trustRow: { display: "flex", gap: 24, marginTop: 28, paddingTop: 20, borderTop: "1px solid #f0f0f0" },
  trustBadge: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6 },
  trustText: { fontSize: 9, fontWeight: 600, color: "#6b7280", letterSpacing: 1, textTransform: "uppercase" },

  precisionSection: { maxWidth: 1120, margin: "0 auto", padding: "40px 24px 60px" },
  sectionTitle: { fontSize: 26, fontWeight: 800, color: "#1a2332", marginBottom: 10 },
  sectionSubtitle: { fontSize: 14, color: "#6b7280", lineHeight: 1.6, maxWidth: 520, marginBottom: 28 },
  featureGrid: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20 },
  featureCard: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" },
  featureCardTeal: { background: "linear-gradient(135deg, #0e7490 0%, #155e75 100%)", borderRadius: 14, padding: 28, display: "flex", flexDirection: "column", justifyContent: "center" },

  darkSection: { background: "#0f172a", padding: "64px 24px 48px" },
  darkGrid: { maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center" },
  darkTitle: { fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1.15 },
  darkFeature: { display: "flex", gap: 14, marginBottom: 24 },
  darkFeatureIcon: { width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  dashboardWrap: { background: "#1e293b", borderRadius: 16, padding: "24px", overflow: "hidden" },

  footer: { borderTop: "1px solid #e5e7eb", padding: "40px 24px", background: "#fff" },
  footerInner: { maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 32 },
  footerHead: { fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 14 },
  footerLink: { display: "block", fontSize: 13, color: "#6b7280", textDecoration: "none", marginBottom: 8 },
};
