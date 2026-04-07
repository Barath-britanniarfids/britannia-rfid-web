import { useState, useEffect } from "react";
import { MapPin, Eye, Sparkles, Waves, Shield, Wind } from "lucide-react";
import sourceimg from '../../public/images/Source Tagging.png'
import containerimg from '../../public/images/Container.png'

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
};

const About = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  const navLinks = ["HOME", "PRODUCT", "ABOUT", "CLIENT", "CONTACT"];
  const values = [
    { icon: Sparkles, title: "Clarity", desc: "Eliminating the noise to reveal the essence." },
    { icon: Waves, title: "Fluidity", desc: "Designing for motion and natural flow." },
    { icon: Shield, title: "Integrity", desc: "Quality that goes beyond the surface." },
    { icon: Wind, title: "Breathability", desc: "Giving ideas the space they need to grow." },
  ];
  const footerSolutions = ["Smart Retail", "Warehouse Automation", "Source Tagging", "Asset Tracking"];
  const footerCompany = ["Global Offices", "Sustainability", "Careers", "Contact Us"];
  const footerLegal = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", background: "#fff", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.5 }}>(( Britannia ))</span>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 3, marginTop: -2 }}>RFID</span>
        </div>
        <div style={{ display: isMobile ? "none" : "flex", gap: 32, alignItems: "center" }}>
          {navLinks.map((l) => (
            <span
              key={l}
              onMouseEnter={() => setHoveredLink(l)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: 13,
                fontWeight: l === "HOME" ? 700 : 500,
                textDecoration: l === "HOME" ? "underline" : "none",
                cursor: "pointer",
                color: hoveredLink === l ? "#0B73C8" : "#222",
                transition: "color 0.2s",
                textUnderlineOffset: 3,
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <button
          style={{
            display: isMobile ? "none" : "block",
            background: "#0B73C8",
            color: "#fff",
            border: "none",
            borderRadius: 24,
            padding: "10px 26px",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#095da0")}
          onMouseLeave={(e) => (e.target.style.background = "#0B73C8")}
        >
          contact us
        </button>
      </nav>

      {/* Hero: About Us */}
      <section style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 80px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 40 : 80,
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{
          flex: isMobile ? "unset" : "0 0 520px",
          width: isMobile ? "100%" : "auto",
          height: isMobile ? "auto" : 440,
          borderRadius: 20,
          overflow: "hidden",
        }}>
          <img src={sourceimg} alt="Source Tagging" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: isMobile ? 40 : 56, fontWeight: 800, margin: "0 0 16px", color: "#111" }}>About us</h1>
          <p style={{ fontSize: 15, fontWeight: 600, letterSpacing: 3, color: "#0B73C8", textTransform: "uppercase", margin: "0 0 24px" }}>
            Visibility Starts Here
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: 0, maxWidth: 540 }}>
            BRFID (Britannia RFID) redefines inventory management with real-time insights, seamless scanning, and precise data capture, it helps businesses move faster, operate smarter, and reduce losses across retail and logistics environments.
          </p>
        </div>
      </section>

      {/* Automate Warehouse Section */}
      <section style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 80px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 40 : 80,
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{ flex: 1, order: isMobile ? 2 : 1 }}>
          <h2 style={{ fontSize: isMobile ? 36 : 52, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15, color: "#111" }}>
            Automate<br />Warehouse<br />Intelligence.
          </h2>
          <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: 3, color: "#0B73C8", textTransform: "uppercase", margin: "0 0 24px" }}>
            Unrivaled Efficiency
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: 0, maxWidth: 420 }}>
            Zero-touch inventory control. Deploy tunnel scanners and overhead readers to process thousands of items in seconds, eliminating human error.
          </p>
        </div>
        <div style={{
          flex: isMobile ? "unset" : "0 0 560px",
          width: isMobile ? "100%" : "auto",
          height: isMobile ? "auto" : 400,
          borderRadius: 20,
          overflow: "hidden",
          order: isMobile ? 1 : 2,
        }}>
          <img src={containerimg} alt="Container" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
        </div>
      </section>

      {/* Mission & Vision - Blue Section */}
      <section style={{ background: "#3B8DD0", padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 80px" }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 40,
          maxWidth: 1400,
          margin: "0 auto",
        }}>
          {/* Mission Card */}
          <div style={{ flex: 1, background: "#fff", borderRadius: 20, padding: isMobile ? "36px 24px" : "48px 40px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <div style={{ width: 48, height: 48, borderRadius: 10, background: "#EBF5FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <MapPin size={24} color="#0B73C8" />
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px", color: "#111" }}>Our Mission</h3>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#555", margin: 0 }}>
              Empowering businesses with smart RFID solutions for greater visibility, precision, and seamless supply chain efficiency.
            </p>
          </div>
          {/* Vision Card */}
          <div style={{ flex: 1, background: "#fff", borderRadius: 20, padding: isMobile ? "36px 24px" : "48px 40px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <div style={{ width: 48, height: 48, borderRadius: 10, background: "#EBF5FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <Eye size={24} color="#0B73C8" />
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px", color: "#111" }}>Our Vision</h3>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#555", margin: 0 }}>
              To lead globally in smart tracking driving innovation, intelligent insights, and seamless automation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 80px", background: "#f7f9fb" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: isMobile ? 30 : 40, fontWeight: 700, margin: "0 0 10px", color: "#111" }}>The Values We Live By</h2>
          <div style={{ width: 50, height: 4, background: "#0B73C8", borderRadius: 2, margin: "16px auto 60px" }} />
          <div style={{
            display: "flex",
            flexWrap: isTablet ? "wrap" : "nowrap",
            gap: 32,
            justifyContent: "center",
          }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    flex: isMobile ? "0 1 100%" : isTablet ? "0 1 calc(50% - 16px)" : "0 1 280px",
                    background: "#fff",
                    borderRadius: 16,
                    padding: "40px 28px 36px",
                    border: hoveredValue === i ? "1.5px solid #0B73C8" : "1.5px solid #e2e8f0",
                    transition: "all 0.25s ease",
                    transform: hoveredValue === i ? "translateY(-4px)" : "none",
                    boxShadow: hoveredValue === i ? "0 8px 30px rgba(11,115,200,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
                    cursor: "default",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: hoveredValue === i ? "#EBF5FF" : "#f4f6f8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      transition: "background 0.25s",
                    }}
                  >
                    <Icon size={28} color={hoveredValue === i ? "#0B73C8" : "#7a8a9e"} />
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px", color: "#111" }}>{v.title}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#777", margin: 0 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0a1628", color: "#c0c8d4", padding: isMobile ? "60px 20px 40px" : "60px 60px 40px" }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 32 : 60,
          maxWidth: 1200,
          margin: "0 auto",
          paddingBottom: 40,
          borderBottom: "1px solid #1e2d42",
        }}>
          {/* Brand */}
          <div style={{ flex: isMobile ? "unset" : "0 0 240px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "#0B73C8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>B</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#e8ecf1" }}>Britannia RFID Technologies</span>
            </div>
            <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#7a8a9e", margin: 0 }}>
              Leading the global transition to transparent, intelligent asset tracking since 1976.
            </p>
          </div>
          {/* Solutions */}
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: 13, fontWeight: 600, color: "#e8ecf1", margin: "0 0 16px" }}>Solutions</h5>
            {footerSolutions.map((s) => (
              <p key={s} style={{ fontSize: 13, color: "#7a8a9e", margin: "0 0 10px", cursor: "pointer" }}>{s}</p>
            ))}
          </div>
          {/* Company */}
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: 13, fontWeight: 600, color: "#e8ecf1", margin: "0 0 16px" }}>Company</h5>
            {footerCompany.map((s) => (
              <p key={s} style={{ fontSize: 13, color: "#7a8a9e", margin: "0 0 10px", cursor: "pointer" }}>{s}</p>
            ))}
          </div>
          {/* Legal */}
          <div style={{ flex: 1 }}>
            <h5 style={{ fontSize: 13, fontWeight: 600, color: "#e8ecf1", margin: "0 0 16px" }}>Legal</h5>
            {footerLegal.map((s) => (
              <p key={s} style={{ fontSize: 13, color: "#7a8a9e", margin: "0 0 10px", cursor: "pointer", textDecoration: s === "Privacy Policy" ? "underline" : "none" }}>{s}</p>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
