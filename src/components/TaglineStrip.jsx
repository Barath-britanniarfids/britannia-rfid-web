export default function TaglineStrip() {
  return (
    <>
      <style>{`
        @keyframes ts-fade-in {
          from { opacity:0; transform:translateY(14px) }
          to   { opacity:1; transform:translateY(0) }
        }

        .ts-outer {
          background: #0f172a;
          padding: clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 2.5rem);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .ts-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: clamp(1.5rem, 4vw, 3.5rem);
        }

        .ts-item {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          animation: ts-fade-in 0.55s ease both;
        }
        .ts-item:nth-child(1) { animation-delay: 0.08s; }
        .ts-item:nth-child(3) { animation-delay: 0.2s; }

        .ts-bar {
          width: 4px;
          border-radius: 2px;
          flex-shrink: 0;
          align-self: stretch;
          min-height: 44px;
        }

        .ts-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0 0 5px;
          font-family: Inter, sans-serif;
        }

        .ts-text {
          font-size: clamp(0.9rem, 1.6vw, 1.15rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          font-family: Inter, sans-serif;
          letter-spacing: -0.01em;
          line-height: 1.35;
        }

        .ts-divider {
          width: 1px;
          background: rgba(255,255,255,0.12);
          flex-shrink: 0;
          align-self: stretch;
          min-height: 44px;
        }

        /* Tablet — stack at 820px where long text gets cramped */
        @media (max-width: 820px) {
          .ts-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.75rem;
          }
          .ts-divider { display: none; }
          .ts-item { flex: unset; width: 100%; }
          .ts-bar { min-height: 38px; }
          .ts-text { font-size: clamp(0.95rem, 3vw, 1.1rem); }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .ts-outer { padding: 2rem 1.25rem; }
          .ts-inner { gap: 1.5rem; }
          .ts-item { gap: 12px; }
          .ts-label { font-size: 0.58rem; }
          .ts-text { font-size: 0.95rem; }
        }
      `}</style>

      <div className="ts-outer">
        <div className="ts-inner">

          {/* Item 1 — Heritage */}
          <div className="ts-item">
            <div className="ts-bar" style={{ background: '#34ACE0' }} />
            <div>
              <p className="ts-label" style={{ color: '#34ACE0' }}>Heritage</p>
              <p className="ts-text">
                Designed in the UK&nbsp;
                <span style={{ color: '#34ACE0', fontWeight: 400 }}>·</span>
                &nbsp;Made in India
              </p>
            </div>
          </div>

          {/* Vertical divider (desktop only) */}
          <div className="ts-divider" />

          {/* Item 2 — Expertise */}
          <div className="ts-item">
            <div className="ts-bar" style={{ background: '#AB3480' }} />
            <div>
              <p className="ts-label" style={{ color: '#AB3480' }}>Expertise</p>
              <p className="ts-text">
                End-to-End RFID Solutions Provider in India
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
