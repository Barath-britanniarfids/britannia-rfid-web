import { useState, useEffect, useRef, useCallback } from "react";

const steps = [
  {
    side: "left",
    icon: "📡",
    iconBg: "#eff6ff",
    iconBorder: "#dbeafe",
    title: "Tagging / Encoding",
    desc: "Physical identity injection at source. Our high-speed encoding systems ensure every asset starts its journey with a unique, undeniable digital identity.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
  },
  {
    side: "right",
    icon: "🏭",
    iconBg: "#fef2f2",
    iconBorder: "#fecaca",
    title: "Warehouse / Inventory",
    desc: "Automated bulk scan reconciliation. Instantly audit entire pallets or storage zones without line-of-sight, reducing inventory time by up to 90%.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
  },
  {
    side: "left",
    icon: "📍",
    iconBg: "#fef2f2",
    iconBorder: "#fecaca",
    title: "Live Tracking",
    desc: "Precise identification and monitoring. Real-time visibility into the movement of goods across borders, ensuring security and ETD precision.",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&q=80",
  },
  {
    side: "right",
    icon: "🚚",
    iconBg: "#f0fdf4",
    iconBorder: "#bbf7d0",
    title: "Distribution Centers",
    desc: "High-speed dynamic sorting logic. Intelligent gates automatically sort and direct assets to their next destination based on real-time demand signals.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&q=80",
  },
  {
    side: "left",
    icon: "🛍️",
    iconBg: "#faf5ff",
    iconBorder: "#e9d5ff",
    title: "Retail Visibility",
    desc: "Frictionless stock visibility. Maintain 100% inventory accuracy on the sales floor, enabling omnichannel fulfillment and superior customer experiences.",
    img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&q=80",
  },
  {
    side: "right",
    icon: "📊",
    iconBg: "#fff7ed",
    iconBorder: "#fed7aa",
    title: "Customer Insights",
    desc: "Converting journeys into intelligence. Leverage discrete data to understand product velocity, consumer behavior, and supply chain efficiency.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
];

const NEON = "#CDD12A";
const NEON_GLOW = "rgba(205,209,42,0.55)";
const INACTIVE_LINE = "#e2e8f0";
const INACTIVE_DOT_BG = "#3b82f6";
const DOT_RING = "#bfdbfe";

export default function DigitalThread() {
  const timelineRef = useRef(null);
  const dotRefs = useRef([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeSteps, setActiveSteps] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [totalLineHeight, setTotalLineHeight] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Measure full line height (from first dot to last dot)
  const measureLine = useCallback(() => {
    if (!timelineRef.current || dotRefs.current.length === 0) return;
    const first = dotRefs.current[0];
    const last = dotRefs.current[dotRefs.current.length - 1];
    if (first && last) {
      const tRect = timelineRef.current.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      setTotalLineHeight(lastRect.top + lastRect.height / 2 - tRect.top);
    }
  }, []);

  useEffect(() => {
    measureLine();
    window.addEventListener("resize", measureLine);
    return () => window.removeEventListener("resize", measureLine);
  }, [measureLine]);

  const handleScroll = useCallback(() => {
    if (!timelineRef.current || dotRefs.current.length === 0) return;
    const tRect = timelineRef.current.getBoundingClientRect();
    const triggerY = window.innerHeight * 0.6;
    const newActive = new Set();

    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      const r = dot.getBoundingClientRect();
      if (r.top + r.height / 2 <= triggerY) newActive.add(i);
    });

    setActiveSteps(newActive);

    // Compute line height
    const sorted = [...newActive].sort((a, b) => b - a);
    if (sorted.length > 0 && dotRefs.current[sorted[0]]) {
      const dotRect = dotRefs.current[sorted[0]].getBoundingClientRect();
      const dotCenterFromTop = dotRect.top + dotRect.height / 2 - tRect.top;

      // If this is the last dot, let line continue growing past it to the end
      if (sorted[0] === steps.length - 1) {
        const overshoot = triggerY - (dotRect.top + dotRect.height / 2);
        const extra = Math.min(Math.max(overshoot * 0.8, 0), 120);
        setLineHeight(Math.min(dotCenterFromTop + extra, totalLineHeight + 60));
      } else {
        // Smoothly interpolate toward next dot
        const nextDot = dotRefs.current[sorted[0] + 1];
        if (nextDot) {
          const nextRect = nextDot.getBoundingClientRect();
          const nextCenter = nextRect.top + nextRect.height / 2;
          const gap = nextCenter - (dotRect.top + dotRect.height / 2);
          const progress = Math.min(Math.max((triggerY - (dotRect.top + dotRect.height / 2)) / gap, 0), 0.85);
          setLineHeight(dotCenterFromTop + progress * gap);
        } else {
          setLineHeight(dotCenterFromTop);
        }
      }
    } else {
      // Before first dot
      const first = dotRefs.current[0];
      if (first) {
        const r = first.getBoundingClientRect();
        const dist = triggerY - (r.top + r.height / 2);
        if (dist > -300 && dist < 0) {
          const firstCenter = r.top + r.height / 2 - tRect.top;
          setLineHeight(Math.max(0, ((dist + 300) / 300) * firstCenter));
        } else if (newActive.size === 0) {
          setLineHeight(0);
        }
      }
    }
    measureLine();
  }, [measureLine, totalLineHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 150);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const lineLeft = isMobile ? 24 : "50%";
  const lineTransform = isMobile ? "none" : "translateX(-50%)";

  return (
    <div style={{ background: "#f8fafc", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <section style={{ padding: isMobile ? "3rem 1rem" : "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, color: "#64748b", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
              SYSTEM LIFECYCLE
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "#0f172a", margin: 0 }}>
              The Digital Thread
            </h2>
          </div>

          <div ref={timelineRef} style={{ position: "relative" }}>
            {/* Background line */}
            <div style={{
              position: "absolute", left: lineLeft, top: 0, bottom: 0,
              width: 2, background: INACTIVE_LINE, transform: lineTransform, zIndex: 0
            }} />
            {/* Neon active line */}
            <div style={{
              position: "absolute", left: lineLeft, top: 0,
              width: 3, height: lineHeight,
              background: NEON,
              transform: lineTransform, zIndex: 1,
              borderRadius: "0 0 4px 4px",
              transition: "height 0.25s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: `0 0 16px ${NEON_GLOW}, 0 0 6px ${NEON_GLOW}`,
            }} />

            {steps.map((s, i) => (
              <Row key={i} step={s} index={i} isActive={activeSteps.has(i)} isMobile={isMobile}
                dotRef={el => (dotRefs.current[i] = el)} />
            ))}
          </div>
        </div>
      </section>


      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
        @keyframes neonPulse {
          0%,100% { box-shadow: 0 0 0 4px rgba(205,209,42,0.2), 0 0 14px rgba(205,209,42,0.4), 0 0 30px rgba(205,209,42,0.15); }
          50% { box-shadow: 0 0 0 6px rgba(205,209,42,0.3), 0 0 22px rgba(205,209,42,0.55), 0 0 44px rgba(205,209,42,0.25); }
        }
        @keyframes dotPop {
          0% { transform: scale(1); }
          40% { transform: scale(1.5); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

function Row({ step, index, isActive, isMobile, dotRef }) {
  const isLeft = step.side === "left";
  const [activated, setActivated] = useState(false);
  const [justActivated, setJustActivated] = useState(false);

  useEffect(() => {
    if (isActive && !activated) {
      setActivated(true);
      setJustActivated(true);
      const t = setTimeout(() => setJustActivated(false), 500);
      return () => clearTimeout(t);
    } else if (!isActive && activated) {
      setActivated(false);
    }
  }, [isActive]);

  const dotStyle = {
    width: 16, height: 16, borderRadius: "50%",
    background: activated ? "#ffffff" : INACTIVE_DOT_BG,
    border: activated ? `3px solid ${NEON}` : "3px solid #fff",
    boxShadow: activated ? undefined : `0 0 0 3px ${DOT_RING}`,
    animation: activated
      ? `neonPulse 2s ease-in-out infinite${justActivated ? ", dotPop 0.5s ease-out" : ""}`
      : "none",
    transition: "background 0.35s ease, border-color 0.35s ease",
    zIndex: 2, position: "relative", flexShrink: 0,
  };

  const textTransform = activated
    ? "translateX(0) translateY(0)"
    : isMobile ? "translateY(32px)" : isLeft ? "translateX(-48px)" : "translateX(48px)";

  const textBlock = (
    <div style={{
      opacity: activated ? 1 : 0,
      transform: textTransform,
      transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
      textAlign: isMobile ? "left" : isLeft ? "right" : "left",
      padding: isMobile ? "0 0 0 1rem" : isLeft ? "1.5rem 2.5rem 1.5rem 1rem" : "1.5rem 1rem 1.5rem 2.5rem",
    }}>
      <div style={{
        width: 40, height: 40, background: step.iconBg, borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1rem", marginBottom: 10, border: `1.5px solid ${step.iconBorder}`,
        marginLeft: !isMobile && isLeft ? "auto" : 0,
      }}>
        {step.icon}
      </div>
      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>{step.title}</h3>
      <p style={{
        fontSize: "0.84rem", color: "#64748b", lineHeight: 1.7, margin: 0, maxWidth: 380,
        marginLeft: !isMobile && isLeft ? "auto" : 0,
      }}>{step.desc}</p>
    </div>
  );

  const imgBlock = (
    <div style={{
      opacity: activated ? 1 : 0,
      transform: activated ? "scale(1) translateY(0)" : "scale(0.92) translateY(24px)",
      transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s",
      padding: isMobile ? "0.5rem 0 0 1rem" : "0.5rem",
      pointerEvents: activated ? "auto" : "none",
    }}>
      <div style={{
        width: "100%", height: isMobile ? 180 : 220, borderRadius: 14,
        overflow: "hidden", border: "1px solid #e2e8f0",
        boxShadow: activated
          ? `0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(205,209,42,0.1)`
          : "0 4px 20px rgba(0,0,0,0.08)",
        background: "#e2e8f0", position: "relative",
      }}>
        <img src={step.img} alt={step.title} loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gridTemplateRows: "auto auto", marginBottom: "2.5rem", position: "relative" }}>
        <div style={{ gridColumn: 1, gridRow: 1, display: "flex", alignItems: "center", paddingLeft: 16, zIndex: 2 }}>
          <div ref={dotRef} style={dotStyle} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 1 }}>{textBlock}</div>
        <div style={{ gridColumn: 2, gridRow: 2, marginBottom: 4 }}>{imgBlock}</div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", alignItems: "center", marginBottom: "3.5rem", position: "relative" }}>
      {isLeft ? (
        <>
          {textBlock}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2 }}>
            <div ref={dotRef} style={dotStyle} />
          </div>
          {imgBlock}
        </>
      ) : (
        <>
          {imgBlock}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2 }}>
            <div ref={dotRef} style={dotStyle} />
          </div>
          {textBlock}
        </>
      )}
    </div>
  );
}
