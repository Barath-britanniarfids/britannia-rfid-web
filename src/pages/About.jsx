import { useState, useEffect, useRef } from "react";
import { MapPin, Eye, Target, Zap, Shield, Users } from "lucide-react";
import sourceimg from "../../public/images/Source Tagging.png";
import containerimg from "../../public/images/Container.png";

const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
};

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
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
  const [quoteRef, quoteVisible] = useReveal();
  const [warehouseRef, warehouseVisible] = useReveal();
  const [missionRef, missionVisible] = useReveal();
  const [valuesRef, valuesVisible] = useReveal();

  const values = [
    {
      icon: Target,
      title: "Precision",
      desc: "Every tag, reader, and platform engineered for 99.9% read accuracy because a single missed scan carries real operational cost.",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Continuously advancing AI analytics, solutions capabilities, and hardware to stay ahead of our clients' most demanding requirements.",
    },
    {
      icon: Shield,
      title: "Reliability",
      desc: "Battle-tested hardware and enterprise-grade solutions that perform at scale from a single site to a global supply chain.",
    },
    {
      icon: Users,
      title: "Partnership",
      desc: "50+ years building long-term relationships with 60+ global brands a trusted extension of our clients' operations teams.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#fff",
        color: "#1a1a1a",
        overflowX: "hidden",
      }}
    >
      {/* Hero: About Us */}
      <section
        ref={heroRef}
        style={{
          padding: isMobile
            ? "72px 16px 32px"
            : isTablet
              ? "80px 32px 32px"
              : "80px 48px 32px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 24 : 40,
          alignItems: "center",
        }}
      >
        <div
          style={{
            ...fadeLeft(heroVisible, 0),
            flex: isMobile ? "unset" : "0 0 440px",
            width: isMobile ? "100%" : "auto",
          }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: 30,
              overflow: "hidden",
            }}
          >
            <img
              src={sourceimg}
              alt="Source Tagging"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
        <div style={{ ...fadeRight(heroVisible, 0.15), flex: 1 }}>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.375rem)",
              fontWeight: 800,
              margin: "0 0 14px",
              color: "#111",
            }}
          >
            Pioneering RFID Solutions
          </h1>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#0B73C8",
              textTransform: "uppercase",
              margin: "0 0 20px",
            }}
          >
            About Britannia RFID
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#444",
              margin: 0,
            }}
          >
            Britannia RFID (BRFID) began as Britannia Garment Packaging in
            Leicester, UK a trusted name in garment labelling and packaging
            for over four decades. Today we deliver a complete AI-powered RFID
            ecosystem across mutiple industry, giving businesses
            real-time item-level visibility from source tag to enterprise
            analytics.
          </p>
        </div>
      </section>

      {/* Section Divider — brand colour bands */}
      <div style={{ margin: "0 48px", display: "flex", height: 4, borderRadius: 2, overflow: "hidden", gap: 3 }}>
        <div style={{ flex: 1, background: "#34ACE0", borderRadius: "2px 0 0 2px" }} />
        <div style={{ flex: 1, background: "#AB3480" }} />
        <div style={{ flex: 1, background: "#C9CD2C", borderRadius: "0 2px 2px 0" }} />
      </div>

      {/* Pull Quote */}
      <div
        ref={quoteRef}
        style={{
          ...fadeUp(quoteVisible, 0),
          padding: isMobile ? "36px 20px" : isTablet ? "44px 40px" : "52px 80px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.125rem, 3vw, 1.625rem)",
              fontWeight: 600,
              lineHeight: 1.55,
              color: "#1a1a1a",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            We don&apos;t just supply RFID tags we build the intelligence
            layer that connects your physical operations to real-time data,
            turning every scanned item into a decision that saves time, cuts
            cost, and drives growth.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 32,
                height: 2,
                background: "#0B73C8",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#0B73C8",
                textTransform: "uppercase",
              }}
            >
              Britannia RFID
            </span>
          </div>
        </div>
      </div>

      {/* Automate Warehouse Section */}
      <section
        ref={warehouseRef}
        style={{
          padding: isMobile
            ? "24px 16px"
            : isTablet
              ? "28px 32px"
              : "32px 48px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 20 : 40,
          alignItems: "center",
        }}
      >
        <div
          style={{
            ...fadeLeft(warehouseVisible, 0),
            flex: 1,
            order: isMobile ? 2 : 1,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 800,
              margin: "0 0 14px",
              lineHeight: 1.15,
              color: "#111",
            }}
          >
            One Ecosystem Every Industry
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#0B73C8",
              textTransform: "uppercase",
              margin: "0 0 20px",
            }}
          >
            Complete RFID Stack
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "#555",
              margin: 0,
            }}
          >
            BRFID delivers a vertically integrated RFID stack precision tags
            and labels, purpose-built readers for every touchpoint, and
            AI-powered solutions platforms for Textile, Retail, Healthcare,
            Logistics, Agriculture, Food, and more. With 500M+ units shipped
            annually across 10+ global locations, we are the single accountable
            partner from source encoding to enterprise intelligence.
          </p>
        </div>
        <div
          style={{
            ...fadeRight(warehouseVisible, 0.15),
            flex: isMobile ? "unset" : "0 0 440px",
            width: isMobile ? "100%" : "auto",
            height: isMobile ? "auto" : 340,
            borderRadius: 20,
            overflow: "hidden",
            order: isMobile ? 1 : 2,
          }}
        >
          <img
            src={containerimg}
            alt="Container"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
            }}
          />
        </div>
      </section>

      {/* Mission & Vision - Blue Section */}
      <section
        style={{
          background: "#3B8DD0",
          padding: isMobile
            ? "32px 16px"
            : isTablet
              ? "40px 32px"
              : "48px 48px",
        }}
      >
        <div
          ref={missionRef}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 20 : 28,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              ...fadeUp(missionVisible, 0),
              flex: 1,
              background: "#fff",
              borderRadius: 20,
              padding: isMobile ? "24px 20px" : isTablet ? "32px 28px" : "36px 32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: isMobile ? 40 : 48,
                height: isMobile ? 40 : 48,
                borderRadius: 10,
                background: "#EBF5FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <MapPin size={isMobile ? 20 : 24} color="#0B73C8" />
            </div>
            <h3
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                margin: "0 0 12px",
                color: "#111",
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#555",
                margin: 0,
              }}
            >
              To empower businesses with a complete AI-driven RFID ecosystem
              precision tags, purpose-built hardware, and intelligent solutions
              delivering real-time item-level visibility and measurable cost
              savings across every industry we serve.
            </p>
          </div>
          <div
            style={{
              ...fadeUp(missionVisible, 0.15),
              flex: 1,
              background: "#fff",
              borderRadius: 20,
              padding: isMobile ? "24px 20px" : isTablet ? "32px 28px" : "36px 32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: isMobile ? 40 : 48,
                height: isMobile ? 40 : 48,
                borderRadius: 10,
                background: "#EBF5FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Eye size={isMobile ? 20 : 24} color="#0B73C8" />
            </div>
            <h3
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                margin: "0 0 12px",
                color: "#111",
              }}
            >
              Our Vision
            </h3>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#555",
                margin: 0,
              }}
            >
              To be the world's most trusted end-to-end RFID solutions partner
              setting the global standard for intelligent item-level tracking
              from source tag to enterprise insight across every industry we
              serve.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          padding: isMobile
            ? "32px 16px"
            : isTablet
              ? "40px 32px"
              : "48px 48px",
          background: "#f7f9fb",
        }}
      >
        <div
          ref={valuesRef}
          style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              ...fadeUp(valuesVisible, 0),
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              margin: "0 0 10px",
              color: "#111",
            }}
          >
            What Drives Everything We Build
          </h2>
          <div
            style={{
              ...fadeUp(valuesVisible, 0.1),
              width: 50,
              height: 4,
              background: "#0B73C8",
              borderRadius: 2,
              margin: "14px auto 28px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: isTablet ? "wrap" : "nowrap",
              gap: 24,
              justifyContent: "center",
            }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    ...fadeUp(valuesVisible, 0.15 + i * 0.1),
                    flex: isMobile
                      ? "0 1 100%"
                      : isTablet
                        ? "0 1 calc(50% - 12px)"
                        : "0 1 240px",
                    background: "#fff",
                    borderRadius: 16,
                    padding: isMobile ? "24px 18px 20px" : "28px 20px 24px",
                    border:
                      hoveredValue === i
                        ? "1.5px solid #0B73C8"
                        : "1.5px solid #e2e8f0",
                    transition: "all 0.25s ease",
                    transform: valuesVisible
                      ? hoveredValue === i
                        ? "translateY(-4px)"
                        : "translateY(0)"
                      : "translateY(36px)",
                    boxShadow:
                      hoveredValue === i
                        ? "0 8px 30px rgba(11,115,200,0.12)"
                        : "0 2px 12px rgba(0,0,0,0.04)",
                    cursor: "default",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: hoveredValue === i ? "#EBF5FF" : "#f4f6f8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      transition: "background 0.25s",
                    }}
                  >
                    <Icon
                      size={26}
                      color={hoveredValue === i ? "#0B73C8" : "#7a8a9e"}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                      fontWeight: 700,
                      margin: "0 0 8px",
                      color: "#111",
                    }}
                  >
                    {v.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "#777",
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
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
