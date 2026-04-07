import { useState, useEffect, useRef } from "react";
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

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

const fadeUp = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(36px)",
  transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
});

const fadeLeft = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateX(0)" : "translateX(-40px)",
  transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
});

const fadeRight = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateX(0)" : "translateX(40px)",
  transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
});

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  const [heroRef, heroVisible] = useReveal();
  const [warehouseRef, warehouseVisible] = useReveal();
  const [missionRef, missionVisible] = useReveal();
  const [valuesRef, valuesVisible] = useReveal();

  const values = [
    { icon: Sparkles, title: "Clarity", desc: "Eliminating the noise to reveal the essence." },
    { icon: Waves, title: "Fluidity", desc: "Designing for motion and natural flow." },
    { icon: Shield, title: "Integrity", desc: "Quality that goes beyond the surface." },
    { icon: Wind, title: "Breathability", desc: "Giving ideas the space they need to grow." },
  ];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#fff", color: "#1a1a1a", overflowX: "hidden" }}>

      {/* Hero: About Us */}
      <section ref={heroRef} style={{
        padding: isMobile ? "50px 20px 40px" : isTablet ? "50px 40px 40px" : "50px 80px 40px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 32 : 60,
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{ ...fadeLeft(heroVisible, 0), flex: isMobile ? "unset" : "0 0 520px", width: isMobile ? "100%" : "auto", height: isMobile ? "auto" : 420, borderRadius: 20, overflow: "hidden" }}>
          <img src={sourceimg} alt="Source Tagging" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
        </div>
        <div style={{ ...fadeRight(heroVisible, 0.15), flex: 1 }}>
          <h1 style={{ fontSize: isMobile ? 40 : 56, fontWeight: 800, margin: "0 0 14px", color: "#111" }}>About us</h1>
          <p style={{ fontSize: 15, fontWeight: 600, letterSpacing: 3, color: "#0B73C8", textTransform: "uppercase", margin: "0 0 20px" }}>
            Visibility Starts Here
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: 0, maxWidth: 540 }}>
            BRFID (Britannia RFID) redefines inventory management with real-time insights, seamless scanning, and precise data capture, it helps businesses move faster, operate smarter, and reduce losses across retail and logistics environments.
          </p>
        </div>
      </section>

      {/* Automate Warehouse Section */}
      <section ref={warehouseRef} style={{
        padding: isMobile ? "32px 20px" : isTablet ? "36px 40px" : "40px 80px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 20 : 32,
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{ ...fadeLeft(warehouseVisible, 0), flex: 1, order: isMobile ? 2 : 1 }}>
          <h2 style={{ fontSize: isMobile ? 36 : 52, fontWeight: 800, margin: "0 0 14px", lineHeight: 1.15, color: "#111" }}>
            Automate Warehouse<br />Intelligence.
          </h2>
          <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: 3, color: "#0B73C8", textTransform: "uppercase", margin: "0 0 20px" }}>
            Unrivaled Efficiency
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: 0, maxWidth: 420 }}>
            Zero-touch inventory control. Deploy tunnel scanners and overhead readers to process thousands of items in seconds, eliminating human error.
          </p>
        </div>
        <div style={{ ...fadeRight(warehouseVisible, 0.15), flex: isMobile ? "unset" : "0 0 560px", width: isMobile ? "100%" : "auto", height: isMobile ? "auto" : 380, borderRadius: 20, overflow: "hidden", order: isMobile ? 1 : 2 }}>
          <img src={containerimg} alt="Container" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
        </div>
      </section>

      {/* Mission & Vision - Blue Section */}
      <section style={{ background: "#3B8DD0", padding: isMobile ? "36px 20px" : isTablet ? "40px 40px" : "48px 80px" }}>
        <div ref={missionRef} style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 32,
          maxWidth: 1400,
          margin: "0 auto",
        }}>
          <div style={{ ...fadeUp(missionVisible, 0), flex: 1, background: "#fff", borderRadius: 20, padding: isMobile ? "32px 24px" : "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <div style={{ width: 48, height: 48, borderRadius: 10, background: "#EBF5FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <MapPin size={24} color="#0B73C8" />
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px", color: "#111" }}>Our Mission</h3>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#555", margin: 0 }}>
              Empowering businesses with smart RFID solutions for greater visibility, precision, and seamless supply chain efficiency.
            </p>
          </div>
          <div style={{ ...fadeUp(missionVisible, 0.15), flex: 1, background: "#fff", borderRadius: 20, padding: isMobile ? "32px 24px" : "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <div style={{ width: 48, height: 48, borderRadius: 10, background: "#EBF5FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Eye size={24} color="#0B73C8" />
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px", color: "#111" }}>Our Vision</h3>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#555", margin: 0 }}>
              To lead globally in smart tracking driving innovation, intelligent insights, and seamless automation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: isMobile ? "36px 20px" : isTablet ? "40px 40px" : "48px 80px", background: "#f7f9fb" }}>
        <div ref={valuesRef} style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...fadeUp(valuesVisible, 0), fontSize: isMobile ? 30 : 40, fontWeight: 700, margin: "0 0 10px", color: "#111" }}>The Values We Live By</h2>
          <div style={{ ...fadeUp(valuesVisible, 0.1), width: 50, height: 4, background: "#0B73C8", borderRadius: 2, margin: "14px auto 28px" }} />
          <div style={{
            display: "flex",
            flexWrap: isTablet ? "wrap" : "nowrap",
            gap: 24,
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
                    ...fadeUp(valuesVisible, 0.15 + i * 0.1),
                    flex: isMobile ? "0 1 100%" : isTablet ? "0 1 calc(50% - 12px)" : "0 1 260px",
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 24px 28px",
                    border: hoveredValue === i ? "1.5px solid #0B73C8" : "1.5px solid #e2e8f0",
                    transition: "all 0.25s ease",
                    transform: valuesVisible
                      ? hoveredValue === i ? "translateY(-4px)" : "translateY(0)"
                      : "translateY(36px)",
                    boxShadow: hoveredValue === i ? "0 8px 30px rgba(11,115,200,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
                    cursor: "default",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: hoveredValue === i ? "#EBF5FF" : "#f4f6f8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    transition: "background 0.25s",
                  }}>
                    <Icon size={26} color={hoveredValue === i ? "#0B73C8" : "#7a8a9e"} />
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px", color: "#111" }}>{v.title}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#777", margin: 0 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
