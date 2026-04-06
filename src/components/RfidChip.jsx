export default function RfidChip({ size = 160 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 20px 40px rgba(30,58,138,0.25))' }}
    >
      <defs>
        <linearGradient id="chipGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="50%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="chipBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0d2060" />
        </linearGradient>
        <radialGradient id="chipGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer glow */}
      <circle cx="100" cy="100" r="98" fill="url(#chipGlow)" />

      {/* Outer rounded square */}
      <rect x="12" y="12" width="176" height="176" rx="28" fill="url(#chipBg)" />

      {/* Concentric gold rings */}
      <rect x="22" y="22" width="156" height="156" rx="22" fill="none" stroke="url(#chipGold)" strokeWidth="2.5" />
      <rect x="34" y="34" width="132" height="132" rx="16" fill="none" stroke="url(#chipGold)" strokeWidth="2" />
      <rect x="46" y="46" width="108" height="108" rx="12" fill="none" stroke="url(#chipGold)" strokeWidth="1.5" />
      <rect x="58" y="58" width="84" height="84" rx="8" fill="none" stroke="url(#chipGold)" strokeWidth="1.5" />
      <rect x="68" y="68" width="64" height="64" rx="6" fill="url(#chipGold)" opacity="0.15" />

      {/* Center chip core */}
      <rect x="76" y="76" width="48" height="48" rx="6" fill="url(#chipGold)" opacity="0.9" />
      <rect x="82" y="82" width="36" height="36" rx="4" fill="#1e3a8a" />

      {/* Circuit lines */}
      <line x1="100" y1="22" x2="100" y2="68" stroke="url(#chipGold)" strokeWidth="1.5" opacity="0.7" />
      <line x1="100" y1="132" x2="100" y2="178" stroke="url(#chipGold)" strokeWidth="1.5" opacity="0.7" />
      <line x1="22" y1="100" x2="68" y2="100" stroke="url(#chipGold)" strokeWidth="1.5" opacity="0.7" />
      <line x1="132" y1="100" x2="178" y2="100" stroke="url(#chipGold)" strokeWidth="1.5" opacity="0.7" />

      {/* Corner contact pads */}
      <rect x="30" y="30" width="10" height="10" rx="2" fill="url(#chipGold)" />
      <rect x="160" y="30" width="10" height="10" rx="2" fill="url(#chipGold)" />
      <rect x="30" y="160" width="10" height="10" rx="2" fill="url(#chipGold)" />
      <rect x="160" y="160" width="10" height="10" rx="2" fill="url(#chipGold)" />

      {/* RFID text */}
      <text x="100" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F5C842" letterSpacing="1">RFID</text>
    </svg>
  )
}
