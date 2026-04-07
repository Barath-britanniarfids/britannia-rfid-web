import { useState } from "react";

const LOGO_URL =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60"><text x="30" y="38" font-family="Arial Black,sans-serif" font-size="24" font-weight="900" fill="#1a2332">Britannia</text><text x="30" y="54" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#1a2332" letter-spacing="4">RFID</text><path d="M18 15 Q8 30 18 45" stroke="#c4d93e" stroke-width="2.5" fill="none"/><path d="M13 10 Q0 30 13 50" stroke="#2ba4b8" stroke-width="2.5" fill="none"/><path d="M8 6 Q-8 30 8 54" stroke="#5bbad5" stroke-width="2.5" fill="none"/><path d="M185 15 Q195 30 185 45" stroke="#c4d93e" stroke-width="2.5" fill="none"/><path d="M190 10 Q203 30 190 50" stroke="#2ba4b8" stroke-width="2.5" fill="none"/><path d="M195 6 Q211 30 195 54" stroke="#5bbad5" stroke-width="2.5" fill="none"/></svg>`,
  );

const SCANNER_IMG =
  "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&h=700&fit=crop&auto=format";
const SCANNER_THUMB_1 =
  "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=120&h=90&fit=crop&auto=format";
const SCANNER_THUMB_2 =
  "https://images.unsplash.com/photo-1587825045005-5f62e0173672?w=120&h=90&fit=crop&auto=format";
const SCANNER_THUMB_3 =
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=120&h=90&fit=crop&auto=format";
const SCANNER_THUMB_4 =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=90&fit=crop&auto=format";
const MESH_BG =
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop&auto=format";
const DASHBOARD_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format";

// ---- HEADER COMPONENT (Replace with your own) ----
const Header = () => (
  <header style={styles.header}>
    <div style={styles.headerInner}>
      <img src={LOGO_URL} alt="Britannia RFID" style={{ height: 40 }} />
      <nav style={styles.nav}>
        {["HOME", "PRODUCT", "ABOUT", "CLIENT", "CONTACT"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              ...styles.navLink,
              ...(item === "PRODUCT"
                ? { fontWeight: 700, color: "#1a2332" }
                : {}),
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

// ---- FOOTER COMPONENT (Replace with your own) ----
const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerInner}>
      <div style={{ maxWidth: 200 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              background: "#1a2332",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>
              B
            </span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#1a2332" }}>
            Britannia RFID Technologies
          </span>
        </div>
        <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
          Leading the global transition to transparent, intelligent asset
          tracking since 1976.
        </p>
      </div>
      <div>
        <h4 style={styles.footerHead}>Solutions</h4>
        {[
          "Smart Retail",
          "Warehouse Automation",
          "Source Tagging",
          "Asset Tracking",
        ].map((s) => (
          <a key={s} href="#" style={styles.footerLink}>
            {s}
          </a>
        ))}
      </div>
      <div>
        <h4 style={styles.footerHead}>Company</h4>
        {["Global Offices", "Sustainability", "Careers", "Contact Us"].map(
          (s) => (
            <a key={s} href="#" style={styles.footerLink}>
              {s}
            </a>
          ),
        )}
      </div>
      <div>
        <h4 style={styles.footerHead}>Legal</h4>
        {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((s) => (
          <a
            key={s}
            href="#"
            style={{
              ...styles.footerLink,
              ...(s === "Privacy Policy"
                ? { color: "#0e7490", textDecoration: "underline" }
                : {}),
            }}
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

// ---- ICONS ----
const BluetoothIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
  </svg>
);
const DimensionIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);
const WeightIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
  >
    <path d="M12 3a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
    <path d="M5 7h14l-1.5 14H6.5L5 7z" />
  </svg>
);
const BatteryIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="6" width="18" height="12" rx="2" />
    <line x1="23" y1="10" x2="23" y2="14" />
  </svg>
);
const ScanIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 8V6a2 2 0 0 1 2-2h4" />
    <path d="M18 4h2a2 2 0 0 1 2 2v2" />
    <path d="M22 16v2a2 2 0 0 1-2 2h-4" />
    <path d="M6 20H4a2 2 0 0 1-2-2v-2" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);
const ShippingIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b7280"
    strokeWidth="1.5"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const WarrantyIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b7280"
    strokeWidth="1.5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const SupportIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b7280"
    strokeWidth="1.5"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const LightningIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#0e7490">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const SyncIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
    <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#dc2626"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// ============================================================
// MAIN PRODUCT INFO COMPONENT
// ============================================================
export default function ProductInfo() {
  const [activeThumb, setActiveThumb] = useState(0);
  const thumbs = [
    SCANNER_THUMB_1,
    SCANNER_THUMB_2,
    SCANNER_THUMB_3,
    SCANNER_THUMB_4,
  ];

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#1a2332",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      <Header />

      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <span style={{ color: "#6b7280" }}>Products</span>
        <span style={{ color: "#9ca3af", margin: "0 6px" }}>›</span>
        <span style={{ color: "#6b7280" }}>Inventory Solutions</span>
        <span style={{ color: "#9ca3af", margin: "0 6px" }}>›</span>
        <span style={{ fontWeight: 600 }}>R9802</span>
      </div>

      {/* ====== HERO PRODUCT SECTION ====== */}
      <section style={styles.heroSection}>
        <div style={styles.heroGrid}>
          {/* Left - Image */}
          <div>
            <div style={styles.mainImageWrap}>
              <img
                src={SCANNER_IMG}
                alt="R9802 Scanner"
                style={styles.mainImage}
              />
              <div style={styles.btBadge}>
                <span
                  style={{
                    fontSize: 9,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Connectivity
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
                  Bluetooth 4.0
                </span>
              </div>
            </div>
            <div style={styles.thumbRow}>
              {thumbs.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  style={{
                    ...styles.thumbWrap,
                    border:
                      activeThumb === i
                        ? "2px solid #0e7490"
                        : "2px solid #e5e7eb",
                  }}
                >
                  <img
                    src={t}
                    alt={`Thumb ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 6,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div style={{ paddingTop: 8 }}>
            <span style={styles.categoryLabel}>INDUSTRIAL PRECISION</span>
            <h1 style={styles.productTitle}>
              RFID Bluetooth Inventory Scanner
            </h1>
            <p style={styles.modelLabel}>Model: R9802</p>
            <p style={styles.productDesc}>
              Compact portable RFID scanner with Bluetooth for efficient
              inventory tracking. Designed for high-volume environments where
              precision and speed are non-negotiable.
            </p>

            {/* Tech Specs */}
            <h3 style={styles.specsHeading}>TECHNICAL SPECIFICATIONS</h3>
            <div style={styles.specsList}>
              {[
                {
                  icon: <BluetoothIcon />,
                  label: "WIRELESS STANDARDS",
                  value: "Bluetooth BT4.0~2.0",
                },
                {
                  icon: <DimensionIcon />,
                  label: "PHYSICAL DIMENSIONS",
                  value: "443 × 153 × 38 mm",
                },
                {
                  icon: <WeightIcon />,
                  label: "DEVICE WEIGHT",
                  value: "400 g",
                },
                {
                  icon: <BatteryIcon />,
                  label: "POWER SUPPLY",
                  value: "3.7V lithium, 6400mAh (6 hrs active)",
                },
                {
                  icon: <ScanIcon />,
                  label: "SCANNING RANGE",
                  value: "Up to 20m Omnidirectional",
                },
              ].map((spec, i) => (
                <div key={i} style={styles.specRow}>
                  <div style={styles.specIconWrap}>{spec.icon}</div>
                  <div>
                    <div style={styles.specLabel}>{spec.label}</div>
                    <div style={styles.specValue}>{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

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

      {/* ====== PRECISION SECTION ====== */}
      <section style={styles.precisionSection}>
        <h2 style={styles.sectionTitle}>Precision-Engineered Performance</h2>
        <p style={styles.sectionSubtitle}>
          The R9802 isn't just a scanner; it's a workflow accelerator. Built for
          the modern enterprise that demands real-time data integrity.
        </p>

        <div style={styles.featureGrid}>
          {/* Intelligent Pairing Card */}
          <div style={styles.featureCard}>
            <div style={{ padding: 28 }}>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: "#1a2332",
                }}
              >
                Intelligent Pairing
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#6b7280",
                  lineHeight: 1.6,
                  maxWidth: 220,
                }}
              >
                Seamlessly sync with existing warehouse management systems via
                our proprietary Bluetooth mesh protocol.
              </p>
            </div>
            <img
              src={MESH_BG}
              alt="Mesh network"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: "0 0 12px 12px",
              }}
            />
          </div>

          {/* Zero Latency Card */}
          <div style={styles.featureCardTeal}>
            <LightningIcon />
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                margin: "12px 0 8px",
              }}
            >
              Zero Latency
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.6,
              }}
            >
              Process up to 150 tags per second with our high-frequency
              dual-core processing unit.
            </p>
          </div>
        </div>
      </section>

      {/* ====== DARK CTA SECTION ====== */}
      <section style={styles.darkSection}>
        <div style={styles.darkGrid}>
          <div style={{ maxWidth: 380 }}>
            <h2 style={styles.darkTitle}>
              Simplify Complexity. Amplify Intelligence.
            </h2>
            <div style={{ marginTop: 32 }}>
              <div style={styles.darkFeature}>
                <div
                  style={{
                    ...styles.darkFeatureIcon,
                    background: "rgba(14,116,144,0.2)",
                  }}
                >
                  <SyncIcon />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    Real-time Sync
                  </h4>
                  <p
                    style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}
                  >
                    Instantly synchronize inventory data across all your
                    locations with ultra-low latency cloud connectivity.
                  </p>
                </div>
              </div>
              <div style={styles.darkFeature}>
                <div
                  style={{
                    ...styles.darkFeatureIcon,
                    background: "rgba(220,38,38,0.15)",
                  }}
                >
                  <ShieldIcon />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    Enterprise Security
                  </h4>
                  <p
                    style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}
                  >
                    Encrypted RFID protocols ensure your asset data remains
                    protected and private at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div style={styles.dashboardWrap}>
            <img
              src={DASHBOARD_IMG}
              alt="Dashboard"
              style={{ width: "100%", borderRadius: 12, display: "block" }}
            />
            <div style={styles.throughputBar}>
              <div>
                <span
                  style={{
                    fontSize: 10,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Current Throughput
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                    marginTop: 2,
                  }}
                >
                  <span
                    style={{ fontSize: 28, fontWeight: 800, color: "#0e7490" }}
                  >
                    1.2M
                  </span>
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>
                    items/day
                  </span>
                </div>
              </div>
              <div style={styles.efficiencyBadge}>+24% Efficiency</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ============================================================
// STYLES
// ============================================================
const styles = {
  // Header
  header: {
    borderBottom: "1px solid #f0f0f0",
    background: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: { display: "flex", gap: 28 },
  navLink: {
    textDecoration: "none",
    color: "#6b7280",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  contactBtn: {
    background: "#0e7490",
    color: "#fff",
    border: "none",
    borderRadius: 20,
    padding: "8px 22px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },

  // Breadcrumb
  breadcrumb: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "16px 24px",
    fontSize: 13,
  },

  // Hero
  heroSection: { maxWidth: 1120, margin: "0 auto", padding: "0 24px 60px" },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "start",
  },
  mainImageWrap: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    background: "linear-gradient(135deg, #0f1729 0%, #1e3a5f 100%)",
    aspectRatio: "4/5",
    maxHeight: 480,
  },
  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.85,
  },
  btBadge: {
    position: "absolute",
    bottom: 20,
    left: 20,
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(8px)",
    borderRadius: 8,
    padding: "8px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  thumbRow: { display: "flex", gap: 10, marginTop: 14 },
  thumbWrap: {
    width: 72,
    height: 56,
    borderRadius: 8,
    overflow: "hidden",
    cursor: "pointer",
    transition: "border 0.2s",
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#0e7490",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  productTitle: {
    fontSize: 30,
    fontWeight: 800,
    lineHeight: 1.15,
    margin: "10px 0 6px",
    color: "#1a2332",
  },
  modelLabel: { fontSize: 14, color: "#6b7280", marginBottom: 16 },
  productDesc: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 1.7,
    marginBottom: 28,
  },
  specsHeading: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 2,
    color: "#374151",
    marginBottom: 18,
    textTransform: "uppercase",
  },
  specsList: { display: "flex", flexDirection: "column", gap: 16 },
  specRow: { display: "flex", alignItems: "center", gap: 14 },
  specIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "#f0fdfa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  specLabel: {
    fontSize: 9,
    fontWeight: 600,
    color: "#9ca3af",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  specValue: { fontSize: 14, fontWeight: 600, color: "#1a2332" },
  trustRow: {
    display: "flex",
    gap: 24,
    marginTop: 28,
    paddingTop: 20,
    borderTop: "1px solid #f0f0f0",
  },
  trustBadge: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  trustText: {
    fontSize: 9,
    fontWeight: 600,
    color: "#6b7280",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  // Precision
  precisionSection: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "40px 24px 60px",
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 800,
    color: "#1a2332",
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 1.6,
    maxWidth: 520,
    marginBottom: 28,
  },
  featureGrid: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20 },
  featureCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    overflow: "hidden",
  },
  featureCardTeal: {
    background: "linear-gradient(135deg, #0e7490 0%, #155e75 100%)",
    borderRadius: 14,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  // Dark section
  darkSection: { background: "#0f172a", padding: "64px 24px 48px" },
  darkGrid: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 48,
    alignItems: "center",
  },
  darkTitle: { fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1.15 },
  darkFeature: { display: "flex", gap: 14, marginBottom: 24 },
  darkFeatureIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  dashboardWrap: {
    background: "#1e293b",
    borderRadius: 16,
    padding: 16,
    overflow: "hidden",
  },
  throughputBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 4px 4px",
  },
  efficiencyBadge: {
    background: "linear-gradient(90deg, #0e7490, #06b6d4)",
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    padding: "6px 14px",
    borderRadius: 6,
  },

  // Footer
  footer: {
    borderTop: "1px solid #e5e7eb",
    padding: "40px 24px",
    background: "#fff",
  },
  footerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerHead: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1a2332",
    marginBottom: 14,
  },
  footerLink: {
    display: "block",
    fontSize: 13,
    color: "#6b7280",
    textDecoration: "none",
    marginBottom: 8,
  },
};
