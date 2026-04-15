import { useState, useEffect, useRef } from 'react'

const DISPLAY_MS = 7000
const CARD_MS    = DISPLAY_MS / 3

let _alreadyShown = false

const cards = [
  {
    label:   'MILESTONE',
    heading: 'Celebrating 50 Years',
    sub:     'in the Industry',
    body:    'From garment labelling in Leicester to a global AI-powered RFID ecosystem, five decades of innovation, precision, and trusted partnerships across the world.',
    color:   '#34ACE0',
  },
  {
    label:   'HERITAGE',
    heading: 'Designed in the UK',
    sub:     'Made in India',
    body:    'Our R&D and design roots run deep in the UK, backed by world-class manufacturing in India, delivering global-standard RFID solutions with precision at scale.',
    color:   '#AB3480',
  },
  {
    label:   'EXPERTISE',
    heading: 'End-to-End RFID',
    sub:     'Solutions Provider in India',
    body:    'Tags, readers, and AI analytics platforms, Britannia RFID delivers the complete RFID stack under one roof, serving Textile, Retail, Healthcare, Logistics and more.',
    color:   '#C9CD2C',
  },
]

// Orbiting particles — two rings, opposite directions
const ORBIT_A = [0, 72, 144, 216, 288]          // 5 dots, CW,  radius 320
const ORBIT_B = [36, 108, 180, 252, 324]         // 5 dots, CCW, radius 420
const ORB_COLORS = ['#34ACE0','#AB3480','#C9CD2C','#34ACE0','#AB3480']

// Backdrop floating orbs
const ORBS = [
  { w:90,  h:90,  top:'8%',  left:'5%',   dur:8,  delay:0,   op:0.13 },
  { w:60,  h:60,  top:'75%', left:'4%',   dur:11, delay:2,   op:0.10 },
  { w:110, h:110, top:'18%', left:'88%',  dur:9,  delay:1,   op:0.11 },
  { w:70,  h:70,  top:'80%', left:'86%',  dur:7,  delay:3,   op:0.12 },
  { w:50,  h:50,  top:'48%', left:'2%',   dur:13, delay:0.5, op:0.08 },
  { w:80,  h:80,  top:'38%', left:'91%',  dur:10, delay:1.8, op:0.09 },
]

export default function MilestonePopup() {
  const [open,     setOpen]     = useState(false)
  const [leaving,  setLeaving]  = useState(false)
  const [progress, setProgress] = useState(100)
  const [cardIdx,  setCardIdx]  = useState(0)
  const startRef   = useRef(null)
  const rafRef     = useRef(null)
  const leavingRef = useRef(false)

  useEffect(() => {
    if (_alreadyShown) return
    const t = setTimeout(() => {
      if (_alreadyShown) return
      _alreadyShown = true
      setOpen(true)
    }, 500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    leavingRef.current = false
    startRef.current   = performance.now()
    const tick = (now) => {
      if (leavingRef.current) return
      const elapsed = now - startRef.current
      setProgress(Math.max(0, 100 - (elapsed / DISPLAY_MS) * 100))
      setCardIdx(Math.min(cards.length - 1, Math.floor(elapsed / CARD_MS)))
      if (elapsed >= DISPLAY_MS) { triggerDismiss(); return }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [open])

  const triggerDismiss = () => {
    if (leavingRef.current) return
    leavingRef.current = true
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setLeaving(true)
    setTimeout(() => setOpen(false), 520)
  }

  if (!open) return null
  const card = cards[Math.min(cardIdx, cards.length - 1)] ?? cards[0]

  return (
    <>
      <style>{`
        @keyframes mp-bg-in  { from{opacity:0} to{opacity:1} }
        @keyframes mp-bg-out { from{opacity:1} to{opacity:0} }

        /* 3-D spring entry */
        @keyframes mp-card-in {
          0%   { opacity:0; transform:perspective(900px) rotateX(30deg) translateY(64px) scale(0.80); filter:blur(8px) }
          55%  { opacity:1; transform:perspective(900px) rotateX(-5deg) translateY(-10px) scale(1.03); filter:blur(0) }
          75%  { transform:perspective(900px) rotateX(2deg) translateY(4px) scale(0.985) }
          100% { transform:perspective(900px) rotateX(0) translateY(0) scale(1) }
        }
        @keyframes mp-card-out {
          0%   { opacity:1; transform:scale(1)    translateY(0);   filter:blur(0) }
          100% { opacity:0; transform:scale(0.86) translateY(36px); filter:blur(10px) }
        }


        /* ── ORBIT CW ── */
        @keyframes mp-orbit-cw {
          from { transform:rotate(0deg)   translateX(320px) rotate(0deg) }
          to   { transform:rotate(360deg) translateX(320px) rotate(-360deg) }
        }
        /* ── ORBIT CCW ── */
        @keyframes mp-orbit-ccw {
          from { transform:rotate(0deg)    translateX(420px) rotate(0deg) }
          to   { transform:rotate(-360deg) translateX(420px) rotate(360deg) }
        }

        /* ── SHIMMER SWEEP ── */
        @keyframes mp-shimmer {
          0%   { transform:translateX(-100%) skewX(-12deg); opacity:0 }
          8%   { opacity:1 }
          92%  { opacity:1 }
          100% { transform:translateX(800%) skewX(-12deg);  opacity:0 }
        }

        /* ── CONTENT REVEAL (blur + slide) ── */
        @keyframes mp-reveal {
          from { opacity:0; transform:translateY(16px); filter:blur(5px) }
          to   { opacity:1; transform:translateY(0);    filter:blur(0) }
        }

        /* ── FLOATING ORBS ── */
        @keyframes mp-orb {
          0%,100% { transform:translateY(0)   scale(1) }
          40%     { transform:translateY(-28px) scale(1.1) }
          70%     { transform:translateY(-12px) scale(0.94) }
        }

        /* ── AURORA ── */
        @keyframes mp-aurora-1 {
          0%,100% { transform:translate(0,0)      scale(1) }
          50%     { transform:translate(40px,-24px) scale(1.18) }
        }
        @keyframes mp-aurora-2 {
          0%,100% { transform:translate(0,0)       scale(1) }
          50%     { transform:translate(-30px,20px) scale(1.14) }
        }

        /* ── INNER PULSING RINGS ── */
        @keyframes mp-ring-a {
          0%,100% { transform:scale(1);    opacity:.22 }
          50%     { transform:scale(1.24); opacity:.07 }
        }
        @keyframes mp-ring-b {
          0%,100% { transform:scale(1);    opacity:.13 }
          50%     { transform:scale(1.42); opacity:.04 }
        }

        /* ── PROGRESS GLOW ── */
        @keyframes mp-bar-glow {
          0%,100% { opacity:.45 }
          50%     { opacity:1 }
        }

        /* ── DOT POP ── */
        @keyframes mp-dot-pop {
          0%   { transform:scaleX(1) }
          40%  { transform:scaleX(1.35) }
          70%  { transform:scaleX(0.88) }
          100% { transform:scaleX(1) }
        }
      `}</style>

      {/* ══ BACKDROP ══ */}
      <div
        onClick={triggerDismiss}
        style={{
          position:'fixed', inset:0, zIndex:9999,
          display:'flex', alignItems:'center', justifyContent:'center',
          padding:20,
          background:'rgba(5,10,24,0.82)',
          backdropFilter:'blur(8px)',
          WebkitBackdropFilter:'blur(8px)',
          overflow:'hidden',
          animation:`${leaving ? 'mp-bg-out' : 'mp-bg-in'} 0.45s ease forwards`,
        }}
      >

        {/* Aurora blobs */}
        <div style={{ position:'absolute', width:520, height:520, top:'8%', left:'12%', borderRadius:'50%', background:`radial-gradient(circle,${card.color}25 0%,transparent 70%)`, animation:'mp-aurora-1 7s ease-in-out infinite', pointerEvents:'none', transition:'background .6s' }}/>
        <div style={{ position:'absolute', width:420, height:420, bottom:'4%', right:'8%',  borderRadius:'50%', background:`radial-gradient(circle,${card.color}1e 0%,transparent 70%)`, animation:'mp-aurora-2 9s ease-in-out infinite', pointerEvents:'none', transition:'background .6s' }}/>

        {/* Floating orbs */}
        {ORBS.map((o,i) => (
          <div key={i} style={{ position:'absolute', top:o.top, left:o.left, width:o.w, height:o.h, borderRadius:'50%', background:`radial-gradient(circle,${card.color} 0%,transparent 70%)`, opacity:o.op, animation:`mp-orb ${o.dur}s ease-in-out ${o.delay}s infinite`, pointerEvents:'none', transition:'background .5s' }}/>
        ))}

        {/* ── GLOW WRAPPER + ORBIT LAYER ── */}
        <div onClick={e => e.stopPropagation()} style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>

          {/* ── ORBITING PARTICLES — ring A (CW, tighter) ── */}
          <div style={{ position:'absolute', width:0, height:0, pointerEvents:'none' }}>
            {ORBIT_A.map((_, i) => (
              <div key={i} style={{
                position:'absolute',
                width:10, height:10,
                marginLeft:-5, marginTop:-5,
                borderRadius:'50%',
                background: ORB_COLORS[i],
                boxShadow:`0 0 8px 2px ${ORB_COLORS[i]}`,
                animation:`mp-orbit-cw ${14 + i * 1.5}s linear ${i * -2.8}s infinite`,
                opacity: 0.85,
              }}/>
            ))}
          </div>

          {/* ── ORBITING PARTICLES — ring B (CCW, wider) ── */}
          <div style={{ position:'absolute', width:0, height:0, pointerEvents:'none' }}>
            {ORBIT_B.map((_, i) => (
              <div key={i} style={{
                position:'absolute',
                width:7, height:7,
                marginLeft:-3.5, marginTop:-3.5,
                borderRadius:'50%',
                background: ORB_COLORS[(i+2)%3],
                boxShadow:`0 0 6px 2px ${ORB_COLORS[(i+2)%3]}`,
                animation:`mp-orbit-ccw ${18 + i * 1.2}s linear ${i * -3.6}s infinite`,
                opacity: 0.6,
              }}/>
            ))}
          </div>



          {/* ══ CARD — static, sits on top of spinning border ══ */}
          <div style={{
            position:'relative', zIndex:1,
            background:'#fff',
            borderRadius:24,
            width:'min(556px, calc(100vw - 46px))',
            overflow:'hidden',
            boxShadow:`0 40px 120px rgba(0,0,0,0.40), 0 0 32px ${card.color}44`,
            transition:'box-shadow .5s',
            animation:`${leaving ? 'mp-card-out' : 'mp-card-in'} ${leaving ? '0.52s ease' : '0.72s cubic-bezier(0.22,1,0.36,1)'} forwards`,
          }}>

              {/* Colour band + shimmer */}
              <div style={{ display:'flex', height:6, position:'relative', overflow:'hidden' }}>
                {cards.map((c,i) => (
                  <div key={i} style={{ flex:1, background:c.color, opacity:i===cardIdx?1:0.25, transition:'opacity .5s' }}/>
                ))}
                <div style={{ position:'absolute', inset:0, width:'18%', background:'linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)', animation:'mp-shimmer 2.4s ease-in-out 1s infinite', pointerEvents:'none' }}/>
              </div>

              {/* Body */}
              <div style={{ padding:'42px 42px 28px', position:'relative' }}>

                {/* Inner pulsing rings */}
                <div style={{ position:'absolute', top:18, left:18, width:86, height:86, borderRadius:'50%', border:`2px solid ${card.color}`, animation:'mp-ring-a 2.8s ease-in-out infinite', pointerEvents:'none', transition:'border-color .5s' }}/>
                <div style={{ position:'absolute', top:3,  left:3,  width:116, height:116, borderRadius:'50%', border:`1.5px solid ${card.color}`, animation:'mp-ring-b 3.8s ease-in-out .4s infinite', pointerEvents:'none', transition:'border-color .5s' }}/>

                {/* Close button */}
                <button
                  onClick={triggerDismiss}
                  aria-label="Close"
                  style={{ position:'absolute', top:16, right:16, width:32, height:32, borderRadius:'50%', border:'1.5px solid #e2e6ea', background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#aaa', fontSize:14, lineHeight:1, transition:'all .25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=card.color; e.currentTarget.style.color=card.color; e.currentTarget.style.background=card.color+'15'; e.currentTarget.style.transform='rotate(90deg)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='#e2e6ea'; e.currentTarget.style.color='#aaa'; e.currentTarget.style.background='transparent'; e.currentTarget.style.transform='rotate(0deg)' }}
                >✕</button>

                {/* Animated content block */}
                <div key={cardIdx}>
                  {/* Label */}
                  <div style={{ display:'inline-flex', alignItems:'center', gap:7, background:card.color+'18', border:`1px solid ${card.color}55`, borderRadius:20, padding:'4px 14px', marginBottom:20, animation:'mp-reveal .38s ease both' }}>
                    <div style={{ width:7, height:7, borderRadius:'50%', background:card.color }}/>
                    <span style={{ fontSize:'.6rem', fontWeight:700, letterSpacing:'.2em', color:card.color, textTransform:'uppercase', fontFamily:'Inter,sans-serif' }}>{card.label}</span>
                  </div>

                  {/* Heading */}
                  <div style={{ marginBottom:14, animation:'mp-reveal .42s ease .07s both' }}>
                    <h2 style={{ fontSize:'clamp(1.75rem,5vw,2.375rem)', fontWeight:800, margin:'0 0 5px', lineHeight:1.1, color:'#0d1a2e', fontFamily:'Inter,sans-serif', letterSpacing:'-.025em' }}>{card.heading}</h2>
                    <p style={{ fontSize:'1.125rem', fontWeight:600, color:card.color, margin:0, fontFamily:'Inter,sans-serif', transition:'color .5s' }}>{card.sub}</p>
                  </div>

                  {/* Body */}
                  <p style={{ fontSize:'.9375rem', lineHeight:1.74, color:'#555', margin:'0 0 26px', fontFamily:'Inter,sans-serif', animation:'mp-reveal .46s ease .14s both' }}>{card.body}</p>
                </div>

                {/* Dot nav */}
                <div style={{ display:'flex', gap:8, marginBottom:22, alignItems:'center' }}>
                  {cards.map((c,i) => (
                    <button key={i} onClick={() => setCardIdx(i)} aria-label={`View ${c.heading}`} style={{ width:i===cardIdx?26:8, height:8, borderRadius:4, border:'none', padding:0, cursor:'pointer', background:i===cardIdx?c.color:'#dde1e7', transition:'all .38s cubic-bezier(0.34,1.56,0.64,1)', boxShadow:i===cardIdx?`0 0 10px ${c.color}99`:'none', animation:i===cardIdx?'mp-dot-pop .4s ease':'none' }}/>
                  ))}
                </div>

                <div style={{ height:1, background:'#f0f2f5' }}/>
              </div>

              {/* Progress bar */}
              <div style={{ height:5, background:'#f0f2f5', position:'relative', overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${progress}%`, background:`linear-gradient(90deg,${card.color}88,${card.color})`, transition:'background .5s', position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)', animation:'mp-shimmer 1.8s ease-in-out infinite' }}/>
                  <div style={{ position:'absolute', right:0, top:0, bottom:0, width:20, background:`radial-gradient(ellipse at right,${card.color},transparent)`, animation:'mp-bar-glow 1s ease-in-out infinite' }}/>
                </div>
              </div>

            </div>{/* /card */}
        </div>{/* /glow wrapper */}
      </div>
    </>
  )
}
