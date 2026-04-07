import { useState, useEffect, useRef } from "react";

const Clients = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const navLinks = ["HOME", "PRODUCT", "ABOUT", "CLIENT", "CONTACT"];

  const stats = [
    { value: "100+", label: "GLOBAL CLIENTS", color: "#0B73C8" },
    { value: "1M+", label: "TAGS TRACKED", color: "#0B73C8" },
    { value: "99%", label: "ACCURACY RATE", color: "#0B73C8" },
    { value: "20+", label: "INDUSTRIES SERVED", color: "#0B73C8" },
  ];

  const row1Brands = ["NIKE", "adidas", "PUMA", "ZARA", "H&M", "Nike"];
  const row2Brands = ["GUCCI", "LV", "CHANEL", "ROLEX", "Burberry", "GUCCI"];

  const footerSolutions = ["Smart Retail", "Warehouse Automation", "Source Tagging", "Asset Tracking"];
  const footerCompany = ["Global Offices", "Sustainability", "Careers", "Contact Us"];
  const footerLegal = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

  // Auto-scroll effect
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scrollRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .scroll-row-left {
        animation: scrollLeft 20s linear infinite;
      }
      .scroll-row-right {
        animation: scrollRight 20s linear infinite;
      }
      .scroll-row-left:hover, .scroll-row-right:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const BrandLogo = ({ name, style: s }) => {
    const logoStyles = {
      NIKE: { fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 22, fontStyle: "italic", letterSpacing: 1 },
      adidas: { fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 18, textTransform: "lowercase" },
      PUMA: { fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: 2 },
      ZARA: { fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 26, letterSpacing: 8 },
      "H&M": { fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 24, color: "#cc0033" },
      Nike: { fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 22, fontStyle: "italic" },
      GUCCI: { fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 3 },
      LV: { fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 28, letterSpacing: 2 },
      CHANEL: { fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: 4 },
      ROLEX: { fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 4 },
      Burberry: { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, fontStyle: "italic", letterSpacing: 1 },
    };

    const getSVGLogo = (n) => {
      switch (n) {
        case "NIKE":
        case "Nike":
          return (
            <svg width="60" height="24" viewBox="0 0 60 24">
              <path d="M5 20C10 14 20 2 35 2C42 2 44 5 42 8C39 12 28 18 22 20L25 18C30 14 38 8 38 5C38 3.5 36.5 3 35 4C28 8 12 22 5 20Z" fill="#111" />
            </svg>
          );
        case "adidas":
          return (
            <svg width="50" height="36" viewBox="0 0 50 36">
              <polygon points="8,30 14,18 20,30" fill="#111" />
              <polygon points="18,30 24,12 30,30" fill="#111" />
              <polygon points="28,30 36,8 44,30" fill="#111" />
            </svg>
          );
        case "PUMA":
          return (
            <span style={{ ...logoStyles.PUMA, ...s, background: "#111", color: "#fff", padding: "6px 16px", borderRadius: 6 }}>PUMA</span>
          );
        case "ZARA":
          return <span style={{ ...logoStyles.ZARA, ...s }}>ZARA</span>;
        case "H&M":
          return <span style={{ ...logoStyles["H&M"], ...s }}>H&M</span>;
        case "GUCCI":
          return (
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" fill="none" stroke="#8B7535" strokeWidth="2.5" />
              <circle cx="22" cy="22" r="12" fill="none" stroke="#8B7535" strokeWidth="2" />
              <text x="22" y="27" textAnchor="middle" fontSize="14" fontWeight="700" fill="#8B7535" fontFamily="Inter">G</text>
            </svg>
          );
        case "LV":
          return <span style={{ ...logoStyles.LV, ...s }}>LV</span>;
        case "CHANEL":
          return (
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="16" cy="22" r="10" fill="none" stroke="#111" strokeWidth="2" />
              <circle cx="28" cy="22" r="10" fill="none" stroke="#111" strokeWidth="2" />
            </svg>
          );
        case "ROLEX":
          return (
            <span style={{ ...logoStyles.ROLEX, background: "#1a3a2a", color: "#c8a84e", padding: "6px 14px", borderRadius: 4, fontSize: 14 }}>ROLEX</span>
          );
        case "Burberry":
          return <span style={{ ...logoStyles.Burberry, ...s }}>Burberry</span>;
        default:
          return <span style={{ fontWeight: 700, fontSize: 16, ...s }}>{n}</span>;
      }
    };

    return (
      <div
        style={{
          width: 200,
          height: 110,
          borderRadius: 16,
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          border: "1px solid #eaeaea",
        }}
      >
        {getSVGLogo(name)}
      </div>
    );
  };

  const ScrollRow = ({ brands, direction }) => (
    <div style={{ overflow: "hidden", width: "100%", margin: "12px 0", position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div
        className={direction === "left" ? "scroll-row-left" : "scroll-row-right"}
        style={{ display: "flex", gap: 28, width: "max-content" }}
      >
        {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
          <BrandLogo key={`${b}-${i}`} name={b} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Hero Banner */}
      <section style={{ background: "linear-gradient(135deg, #f0e6ef 0%, #e8dce8 25%, #d6e5ee 50%, #e4dce6 75%, #efe7ef 100%)", padding: "80px 60px 70px", textAlign: "center" }}>
        <h1 style={{ fontSize: 52, fontWeight: 800, margin: "0 0 18px", lineHeight: 1.15, color: "#111", maxWidth: 650, marginLeft: "auto", marginRight: "auto" }}>
          Behind the Success of Modern Industry Leaders
        </h1>
        <p style={{ fontSize: 15, color: "#555", margin: 0, maxWidth: 480, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
          Powering intelligent tracking across global businesses with precision-engineered RFID ecosystems.
        </p>
      </section>

      {/* Client Logos - Auto Scrolling */}
      <section style={{ padding: "70px 0 50px", maxWidth: 1200, margin: "0 auto" }}>
        <ScrollRow brands={row1Brands} direction="left" />
        <ScrollRow brands={row2Brands} direction="right" />
      </section>

      {/* Stats */}
      <section style={{ padding: "40px 60px 70px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 80, maxWidth: 1000, margin: "0 auto" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#333", marginTop: 8, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: "#f7f9fb", padding: "70px 60px", textAlign: "center" }}>
        <div style={{ fontSize: 40, fontWeight: 800, color: "#0B73C8", marginBottom: 24 }}>99</div>
        <p style={{ fontSize: 20, lineHeight: 1.65, color: "#333", maxWidth: 600, margin: "0 auto", fontWeight: 400 }}>
          "BRFID transformed our supply chain visibility overnight. Their engineering team understood our specific warehousing challenges and delivered a system that outperformed all our KPIs."
        </p>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "70px 60px" }}>
        <div style={{
          maxWidth: 900, margin: "0 auto", borderRadius: 20, overflow: "hidden",
          background: "linear-gradient(135deg, #1a3a5c 0%, #2a4a6c 30%, #6a4a7a 60%, #8a5a6a 80%, #5a6a8a 100%)",
          padding: "70px 60px", textAlign: "center", position: "relative",
        }}>
          {/* Subtle circuit pattern overlay */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)" }} />
          <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", position: "relative", fontStyle: "italic" }}>
            Let's Build Your Smart Infrastructure
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", margin: 0, maxWidth: 480, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6, position: "relative" }}>
            Connect with our solutions architecture team to design a precision tracking ecosystem for your business.
          </p>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};

export default Clients;