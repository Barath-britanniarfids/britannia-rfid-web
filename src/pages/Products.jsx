import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products as productData } from "../data/products";

/* ================================================================
   BRITANNIA RFID — PRODUCT PAGE
   Save as: ProductPage.jsx
   Usage: import ProductPage from "./ProductPage";
   ================================================================ */

// ======================== RESPONSIVE HOOK ========================
const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
};

// ======================== LOGO ========================
const BritanniaLogo = ({ size = "default" }) => {
  const s = size === "small" ? 0.7 : 1;
  return (
    <svg
      width={140 * s}
      height={40 * s}
      viewBox="0 0 180 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 10 C20 15, 20 35, 28 40" stroke="#00BCD4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M22 6 C12 14, 12 36, 22 44" stroke="#C0CA33" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M16 2 C4 12, 4 38, 16 48" stroke="#AB47BC" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M152 10 C160 15, 160 35, 152 40" stroke="#00BCD4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M158 6 C168 14, 168 36, 158 44" stroke="#C0CA33" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M164 2 C176 12, 176 38, 164 48" stroke="#AB47BC" strokeWidth="3" fill="none" strokeLinecap="round" />
      <text x="90" y="26" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="22" fontWeight="900" fill="#1a1a2e" letterSpacing="-0.5">
        Britannia
      </text>
      <text x="90" y="43" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800" fill="#1a1a2e" letterSpacing="4">
        RFID
      </text>
    </svg>
  );
};

// ======================== HEADER ========================
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["HOME", "PRODUCT", "ABOUT", "CLIENT", "CONTACT"];

  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: "1px solid #f0f0f0",
        transition: "all 0.3s ease",
      }}
    >
    </header>
  );
};

// ======================== FOOTER ========================
const Footer = () => {
  const cols = [
    {
      title: "Solutions",
      links: ["Smart Retail", "Warehouse Automation", "Source Tagging", "Asset Tracking"],
    },
    {
      title: "Company",
      links: ["Global Offices", "Sustainability", "Careers", "Contact Us"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Settings"],
    },
  ];

  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <footer style={{ background: "#111118", color: "#fff", padding: "48px 24px 36px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1.5fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div style={{ marginBottom: 16, filter: "brightness(0) invert(1)", opacity: 0.9 }}>
            <BritanniaLogo size="small" />
          </div>
          <p style={{ fontSize: 12, color: "#999", lineHeight: 1.6, maxWidth: 200 }}>
            Leading the global transition to transparent, intelligent asset tracking since 1976.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 16,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {col.title}
            </h4>
            {col.links.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#999",
                  marginBottom: 10,
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

// ======================== HERO SECTION ========================
const HeroSection = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <section style={{ background: "#fafafa", padding: "100px 24px 80px", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0e7490" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 1.5,
                color: "#555",
                textTransform: "uppercase",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Next-Gen RFID Ecosystem
            </span>
          </div>
          <h1
            style={{
              fontSize: isMobile ? 32 : 48,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#111",
              margin: 0,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Smart RFID
            <br />
            <span style={{ color: "#0e7490" }}>Seamless</span>
            <br />
            <span style={{ color: "#0e7490" }}>Modern</span>
            <br />
            <span style={{ color: "#0e7490" }}>operation</span>
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "#666",
              lineHeight: 1.7,
              margin: "24px 0 32px",
              maxWidth: 340,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Precision. Speed. Intelligence. We redefine inventory tracking and asset management
            through ultra-high frequency technology.
          </p>
        </div>

        {!isMobile && (
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #0a1628 100%)",
                borderRadius: 16,
                height: 320,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <svg
                viewBox="0 0 400 320"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              >
                <defs>
                  <radialGradient id="glow" cx="50%" cy="45%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="145" r="120" fill="url(#glow)" />
                {[40, 65, 90, 115].map((r, i) => (
                  <circle
                    key={i}
                    cx="200"
                    cy="145"
                    r={r}
                    fill="none"
                    stroke="#06b6d4"
                    strokeOpacity={0.15 + i * 0.05}
                    strokeWidth="0.5"
                  />
                ))}
                <circle cx="200" cy="145" r="8" fill="#06b6d4" fillOpacity="0.6" />
                <circle cx="200" cy="145" r="3" fill="#06b6d4" />
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="145"
                      x2={200 + Math.cos(angle) * 130}
                      y2={145 + Math.sin(angle) * 130}
                      stroke="#06b6d4"
                      strokeOpacity="0.08"
                      strokeWidth="0.5"
                    />
                  );
                })}
              </svg>

              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#06b6d4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>99.9% Accuracy</div>
                  <div style={{ fontSize: 10, color: "#94a3b8" }}>Real-time signal processing</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ======================== PRODUCT CARD ========================
const ProductCard = ({ p }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${p.id}`)}
      style={{
        border: "1px solid #e8e8e8",
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff",
        transition: "box-shadow 0.2s, transform 0.2s",
        cursor: "pointer",
        boxShadow: hovered ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          height: 180,
          background: "#f0f4f8",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
          />
        ) : null}
        <div
          style={{
            display: p.image ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            fontSize: 56,
          }}
        >
          {p.icon || "📦"}
        </div>
        {p.badge && (
          <span style={{
            position: "absolute", top: 10, left: 10,
            background: p.badgeColor || "#0e7490", color: "#fff",
            fontSize: 10, fontWeight: 700, letterSpacing: 1,
            padding: "3px 8px", borderRadius: 4, textTransform: "uppercase",
          }}>
            {p.badge}
          </span>
        )}
      </div>
      <div style={{ padding: "16px 18px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <h3
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#111",
              margin: 0,
              lineHeight: 1.3,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            {p.name}
          </h3>
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#0e7490",
              whiteSpace: "nowrap",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            ${p.price?.toLocaleString?.() ?? p.price}
          </span>
        </div>
        <p
          style={{
            fontSize: 11,
            color: "#999",
            margin: "6px 0 8px",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {p.model}
        </p>
        <p
          style={{
            fontSize: 12,
            color: "#777",
            lineHeight: 1.5,
            margin: 0,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {p.shortDesc}
        </p>
      </div>
    </div>
  );
};

// ======================== PRODUCTS SECTION ========================
const ProductsSection = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            marginBottom: 40,
            gap: isMobile ? 16 : 0,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "#111",
                margin: 0,
                lineHeight: 1.15,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Hardware Engineered for
              <br />
              Precision
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#666",
                margin: "16px 0 0",
                lineHeight: 1.7,
                maxWidth: 440,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Our hardware lineup integrates seamlessly into your existing workflow, providing
              instant data clarity across every touchpoint.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {productData.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ======================== FEATURES SECTION ========================
const FeaturesSection = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const target = 1.2;
    let current = 0;
    const step = target / 60;
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, 16);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <section ref={ref} style={{ background: "#111118", padding: "80px 24px", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 40px",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Simplify Complexity. Amplify
            <br />
            Intelligence.
          </h2>

          <div style={{ display: "flex", gap: 14, marginBottom: 28 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(6,182,212,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  margin: "0 0 6px",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Real-time Sync
              </h4>
              <p
                style={{
                  fontSize: 12,
                  color: "#999",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Instantly synchronize inventory data across all your locations with ultra-low
                latency cloud connectivity.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(239,68,68,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
            <div>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  margin: "0 0 6px",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Enterprise Security
              </h4>
              <p
                style={{
                  fontSize: 12,
                  color: "#999",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Encrypted RFID protocols ensure your asset data remains protected and private at
                all times.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(145deg, #1a1a2e, #16213e)",
            borderRadius: 16,
            padding: 24,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg viewBox="0 0 400 220" style={{ width: "100%", opacity: 0.6 }}>
            <defs>
              <radialGradient id="dot-glow">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[
              [80, 60], [100, 55], [120, 50], [140, 55], [160, 60], [180, 65], [200, 55],
              [220, 50], [240, 60], [260, 70], [280, 80], [100, 80], [120, 75], [140, 70],
              [160, 75], [180, 80], [200, 75], [300, 65], [320, 70], [340, 90], [130, 100],
              [150, 95], [170, 100], [190, 105], [80, 110], [100, 115], [250, 100], [270, 95],
              [290, 100], [310, 110], [120, 130], [140, 135], [200, 120], [220, 115],
              [160, 140], [180, 145], [260, 130], [280, 140], [300, 135],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#06b6d4" fillOpacity="0.4" />
            ))}
            {[
              [120, 50], [200, 55], [300, 65], [140, 135],
            ].map(([x, y], i) => (
              <g key={"active-" + i}>
                <circle cx={x} cy={y} r="8" fill="url(#dot-glow)" />
                <circle cx={x} cy={y} r="3" fill="#06b6d4" />
              </g>
            ))}
            <line x1="120" y1="50" x2="200" y2="55" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="0.5" />
            <line x1="200" y1="55" x2="300" y2="65" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="0.5" />
            {Array.from({ length: 40 }).map((_, i) => {
              const h = 10 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
              return (
                <rect
                  key={"bar-" + i}
                  x={50 + i * 8}
                  y={190 - h}
                  width="3"
                  height={h}
                  fill="#06b6d4"
                  fillOpacity="0.3"
                  rx="1"
                />
              );
            })}
          </svg>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
              padding: "12px 0 0",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 9,
                  color: "#666",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 4,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Current Throughput
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#06b6d4",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {count}M{" "}
                <span style={{ fontSize: 13, color: "#999", fontWeight: 400 }}>items/day</span>
              </div>
            </div>
            <div
              style={{
                background: "rgba(16,185,129,0.15)",
                color: "#10b981",
                borderRadius: 20,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              +34% Efficiency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ======================== MAIN PAGE ========================
const Products = () => {
  return (
    <div
      style={{
        fontFamily: "Inter, -apple-system, system-ui, sans-serif",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      <Header />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
    </div>
  );
};

export default Products;
