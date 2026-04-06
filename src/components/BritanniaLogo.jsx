export default function BritanniaLogo({ width = 260, darkBg = false }) {
  const textColor = '#ffffff'
  const height = Math.round(width * (130 / 480))

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Britannia RFID"
    >
      {/* ── LEFT ARCS (outer → inner: blue, magenta, lime) ── */}
      <path
        d="M 90 6 Q 8 65 90 124"
        stroke="#1EC9E8"
        strokeWidth="8.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 104 18 Q 34 65 104 112"
        stroke="#D81BB0"
        strokeWidth="8.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 118 30 Q 63 65 118 100"
        stroke="#C2D600"
        strokeWidth="8.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── RIGHT ARCS (inner → outer: lime, magenta, blue) ── */}
      <path
        d="M 362 30 Q 417 65 362 100"
        stroke="#C2D600"
        strokeWidth="8.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 376 18 Q 446 65 376 112"
        stroke="#D81BB0"
        strokeWidth="8.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 390 6 Q 472 65 390 124"
        stroke="#1EC9E8"
        strokeWidth="8.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── TEXT ── */}
      <text
        x="240"
        y="76"
        textAnchor="middle"
        dominantBaseline="auto"
        fill={darkBg ? '#ffffff' : '#0f172a'}
        fontSize="58"
        fontWeight="900"
        fontFamily="'Inter', 'Arial Black', Arial, sans-serif"
        letterSpacing="-1"
      >
        Britannia
      </text>
      <text
        x="240"
        y="104"
        textAnchor="middle"
        dominantBaseline="auto"
        fill={textColor}
        fontSize="18"
        fontWeight="600"
        fontFamily="'Inter', Arial, sans-serif"
        letterSpacing="9"
      >
        RFID
      </text>
    </svg>
  )
}
