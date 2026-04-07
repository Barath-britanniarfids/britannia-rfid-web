import { useState } from "react";
import { AtSign, Phone, MapPin, Share2, Send } from "lucide-react";
import contactimg from '../../public/images/img.png'

const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);

  const navLinks = ["HOME", "PRODUCT", "ABOUT", "CLIENT", "CONTACT"];
  const footerSolutions = ["Smart Retail", "Warehouse Automation", "Source Tagging", "Asset Tracking"];
  const footerCompany = ["Global Offices", "Sustainability", "Careers", "Contact Us"];
  const footerLegal = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

  const socialIcons = [
    { icon: <Share2 size={16} />, label: "Share" },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, label: "Instagram" },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>, label: "WhatsApp" },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768"/><path d="M20 4l-6.768 6.768"/></svg>, label: "X" },
  ];

  const inputStyle = (field) => ({
    width: "100%",
    padding: "10px 14px",
    border: `1.5px solid ${focused === field ? "#0B73C8" : "#e2e6ea"}`,
    borderRadius: 8,
    fontSize: 13.5,
    fontFamily: "Inter, sans-serif",
    color: "#333",
    outline: "none",
    transition: "border-color 0.2s",
    background: "#fff",
    boxSizing: "border-box",
  });

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #faf5f5 0%, #f5eeef 40%, #eee8e4 70%, #f0eae6 100%)", padding: "100px 80px 90px", display: "flex", gap: 60, alignItems: "center", maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{ flex: 1, paddingTop: 10 }}>
          <h1 style={{ fontSize: 64, fontWeight: 800, margin: "0 0 24px", lineHeight: 1.1, color: "#111" }}>
            Get in <span style={{ color: "#0B73C8" }}>Touch</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#555", margin: 0, maxWidth: 420 }}>
            Ready to explore what's next?<br />
            Connect with us to discuss your needs or discover new possibilities in technology.
          </p>
        </div>
        <div style={{ flex: "0 0 520px", position: "relative" }}>
          <div style={{ width: 520, height: 340, borderRadius: 18, overflow: "hidden" }}>
            <img src={contactimg} alt="Contact" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 18 }} />
          </div>
          {/* Response Time Card */}
          <div style={{
            position: "absolute", bottom: -36, left: -24,
            background: "#fff", borderRadius: 16, padding: "24px 28px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)", minWidth: 260,
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: "#0B73C8", textTransform: "uppercase", margin: "0 0 10px" }}>
              Our Response Time
            </p>
            <p style={{ fontSize: 16, color: "#333", margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
              "Expect a response within<br />4 business hours".
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section style={{ padding: "100px 80px 80px", display: "flex", gap: 70, maxWidth: 1100, margin: "0 auto", alignItems: "center", justifyContent: "center" }}>
        {/* Form Card */}
        <div style={{
          flex: "0 0 480px", background: "#fff", borderRadius: 18, padding: "44px 38px",
          border: "1px solid #e8ecf0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}>
          <div style={{ display: "flex", gap: 18, marginBottom: 28 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#333", textTransform: "uppercase", display: "block", marginBottom: 10 }}>Full Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                style={inputStyle("name")}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#333", textTransform: "uppercase", display: "block", marginBottom: 10 }}>Email Address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                style={inputStyle("email")}
              />
            </div>
          </div>
          <div style={{ marginBottom: 32 }}>
            <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#333", textTransform: "uppercase", display: "block", marginBottom: 10 }}>Message</label>
            <textarea
              placeholder="Tell us about your project or inquiry..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              rows={6}
              style={{ ...inputStyle("message"), resize: "vertical", minHeight: 140 }}
            />
          </div>
          <button
            style={{
              background: "#0B73C8", color: "#fff", border: "none", borderRadius: 10,
              padding: "14px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#095da0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0B73C8")}
          >
            Send Message <Send size={15} />
          </button>
        </div>

        {/* Contact Info */}
        <div style={{ flex: 1 }}>
          {/* Email */}
          <div style={{ display: "flex", gap: 18, marginBottom: 36, alignItems: "flex-start" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#EBF5FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1.5px solid #0B73C8" }}>
              <AtSign size={20} color="#0B73C8" />
            </div>
            <div>
              <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px", color: "#111" }}>Email Us</h4>
              <p style={{ fontSize: 15, color: "#666", margin: "0 0 3px" }}>hello@luminoustech.com</p>
              <p style={{ fontSize: 15, color: "#666", margin: 0 }}>support@luminoustech.com</p>
            </div>
          </div>

          {/* Phone */}
          <div style={{ display: "flex", gap: 18, marginBottom: 36, alignItems: "flex-start" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#EBF5FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1.5px solid #0B73C8" }}>
              <Phone size={20} color="#0B73C8" />
            </div>
            <div>
              <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px", color: "#111" }}>Call Us</h4>
              <p style={{ fontSize: 15, color: "#666", margin: "0 0 3px" }}>+1 (555) 234-5678</p>
              <p style={{ fontSize: 15, color: "#666", margin: 0 }}>Mon - Fri, 9am - 6pm EST</p>
            </div>
          </div>

          {/* Visit */}
          <div style={{ display: "flex", gap: 18, marginBottom: 40, alignItems: "flex-start" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#EBF5FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1.5px solid #0B73C8" }}>
              <MapPin size={20} color="#0B73C8" />
            </div>
            <div>
              <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px", color: "#111" }}>Visit Us</h4>
              <p style={{ fontSize: 15, color: "#666", margin: "0 0 3px" }}>The Innovation Hub, Suite 400</p>
              <p style={{ fontSize: 15, color: "#666", margin: 0 }}>250 Tech Plaza, Palo Alto, CA 94301</p>
            </div>
          </div>

          {/* Connect With Us */}
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#555", textTransform: "uppercase", margin: "0 0 16px" }}>Connect With Us</p>
          <div style={{ display: "flex", gap: 14 }}>
            {socialIcons.map((s, i) => (
              <div
                key={i}
                style={{
                  width: 44, height: 44, borderRadius: "50%", border: "1.5px solid #d0d5dc",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#555", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0B73C8"; e.currentTarget.style.color = "#0B73C8"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#d0d5dc"; e.currentTarget.style.color = "#555"; }}
              >
                {s.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: "20px 60px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          borderRadius: 16, border: "1px solid #e2e6ea", overflow: "hidden",
          background: "#f0f2f5", position: "relative", height: 300,
        }}>
          {/* Simplified Map */}
          <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="300" fill="#e8ecf0" />
            {/* Roads grid */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="#d8dce0" strokeWidth="1" />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <line key={`v${i}`} x1={i * 70} y1="0" x2={i * 70} y2="300" stroke="#d8dce0" strokeWidth="1" />
            ))}
            {/* Main roads */}
            <line x1="0" y1="150" x2="800" y2="150" stroke="#cdd1d5" strokeWidth="3" />
            <line x1="400" y1="0" x2="400" y2="300" stroke="#cdd1d5" strokeWidth="3" />
            <line x1="0" y1="80" x2="800" y2="80" stroke="#d4d8dc" strokeWidth="2" />
            <line x1="250" y1="0" x2="250" y2="300" stroke="#d4d8dc" strokeWidth="2" />
            {/* Parks / green areas */}
            <rect x="100" y="100" width="80" height="60" rx="4" fill="#d4e8d0" opacity="0.5" />
            <rect x="500" y="40" width="100" height="50" rx="4" fill="#d4e8d0" opacity="0.5" />
            {/* Buildings */}
            {[[60, 30, 40, 25], [150, 180, 50, 30], [320, 60, 35, 25], [450, 170, 45, 35], [580, 120, 55, 30], [680, 200, 40, 40]].map(([x, y, w, h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="#d8dce0" />
            ))}
          </svg>
          {/* Pin Marker */}
          <div style={{
            position: "absolute", top: "50%", left: "42%", transform: "translate(-50%, -100%)",
            display: "flex", alignItems: "center", gap: 8, background: "#fff",
            borderRadius: 30, padding: "8px 16px 8px 10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#0B73C8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <MapPin size={16} color="#fff" />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, margin: 0, color: "#111" }}>Britannia RFID</p>
              <p style={{ fontSize: 11, color: "#777", margin: 0 }}>Palo Alto, California</p>
            </div>
          </div>
          {/* Shadow under pin */}
          <div style={{
            position: "absolute", top: "52%", left: "42%", transform: "translate(-50%, 0)",
            width: 12, height: 6, borderRadius: "50%", background: "rgba(0,0,0,0.2)",
          }} />
        </div>
        {/* Open in Google Maps */}
        <div style={{ textAlign: "right", marginTop: 12 }}>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#0B73C8",
              textTransform: "uppercase", textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: 6,
            }}
          >
            Open in Google Maps
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B73C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};

export default Contact;