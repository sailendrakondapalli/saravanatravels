import { useEffect, useState } from 'react'

// Phases:
// 'drive'   → car drives in from left onto centered road
// 'brake'   → car brakes and stops center
// 'exit'    → car + road slide down and disappear
// 'plane'   → airplane flies in from left
// 'reveal'  → logo text fades in
// 'fadeout' → whole overlay fades out

export default function IntroAnimation({ onDone }) {
  const [phase, setPhase] = useState('drive')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('brake'),   1400)
    const t2 = setTimeout(() => setPhase('exit'),    2300)
    const t3 = setTimeout(() => setPhase('plane'),   2900)
    const t4 = setTimeout(() => setPhase('reveal'),  3600)
    const t5 = setTimeout(() => setPhase('fadeout'), 4800)
    const t6 = setTimeout(() => onDone(),            5500)
    return () => [t1,t2,t3,t4,t5,t6].forEach(clearTimeout)
  }, [onDone])

  const carRoadVisible = phase === 'drive' || phase === 'brake'
  const carRoadExiting = phase === 'exit'

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0a0f1e 0%, #0d2a5e 55%, #0a0f1e 100%)',
        opacity: phase === 'fadeout' ? 0 : 1,
        transition: phase === 'fadeout' ? 'opacity 0.7s ease' : 'none',
        pointerEvents: phase === 'fadeout' ? 'none' : 'all',
      }}
    >
      <Stars />

      {/* ── CAR + ROAD (centered, exits downward) ── */}
      <div
        style={{
          position: 'absolute',
          left: 0, right: 0,
          top: '50%',
          transform: carRoadExiting
            ? 'translateY(60vh)'
            : 'translateY(-50%)',
          opacity: carRoadExiting ? 0 : 1,
          transition: carRoadExiting
            ? 'transform 0.55s cubic-bezier(0.55,0,1,0.45), opacity 0.45s ease'
            : 'none',
          display: carRoadVisible || carRoadExiting ? 'block' : 'none',
        }}
      >
        {/* Road strip */}
        <div style={{ position: 'relative', height: 56, background: '#374151', overflow: 'hidden' }}>
          {/* top kerb */}
          <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:'#6b7280' }} />
          {/* dashed center line */}
          <div style={{ position:'absolute', top:'50%', left:0, right:0, height:5, marginTop:-2.5, display:'flex', gap:0 }}>
            {Array(25).fill(0).map((_,i) => (
              <div key={i} style={{
                width:60, height:'100%', background:'#fbbf24', flexShrink:0, marginRight:40,
                animation: phase === 'drive' ? 'roadScroll 0.35s linear infinite' : 'none',
              }} />
            ))}
          </div>
          {/* bottom kerb */}
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:4, background:'#6b7280' }} />
        </div>

        {/* Car on road */}
        <div style={{
          position:'absolute',
          top: -62,   /* car sits on top of road */
          left:'50%',
          transform: phase === 'drive'
            ? 'translateX(-160vw)'
            : 'translateX(-50%)',
          transition: phase === 'brake'
            ? 'transform 0.85s cubic-bezier(0.22,1,0.36,1)'
            : phase === 'drive'
            ? 'transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)'
            : 'none',
        }}>
          <CarSVG />
          {/* brake dust */}
          {phase === 'brake' && (
            <div style={{ position:'absolute', right:-4, bottom:14, display:'flex', gap:3, alignItems:'flex-end' }}>
              {[9,13,8,11,7].map((s,i) => (
                <div key={i} style={{
                  width:s, height:s, borderRadius:'50%', background:'rgba(156,163,175,0.7)',
                  animation:`dustPuff 0.65s ease-out ${i*0.06}s forwards`, opacity:0,
                }} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── AIRPLANE ── */}
      {(phase === 'plane' || phase === 'reveal' || phase === 'fadeout') && (
        <div style={{
          position:'absolute',
          top:'38%',
          left: phase === 'plane' ? '-10%' : '50%',
          transform: phase === 'plane' ? 'translateY(-50%)' : 'translate(-50%,-50%)',
          fontSize: 72,
          filter:'drop-shadow(0 0 28px rgba(96,165,250,0.9))',
          transition: phase === 'reveal' || phase === 'fadeout'
            ? 'left 0.7s cubic-bezier(0.34,1.2,0.64,1), transform 0.7s cubic-bezier(0.34,1.2,0.64,1)'
            : 'left 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
          animation: (phase === 'reveal' || phase === 'fadeout') ? 'planeBob 2s ease-in-out infinite' : 'none',
        }}>
          ✈️
        </div>
      )}

      {/* ── LOGO TEXT ── */}
      <div style={{
        position:'absolute',
        top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        textAlign:'center',
        opacity: phase === 'reveal' || phase === 'fadeout' ? 1 : 0,
        transition:'opacity 0.6s ease 0.2s',
        whiteSpace:'nowrap',
      }}>
        <div style={{ marginTop: 60 }}>
          <h1 style={{ fontSize:'clamp(2rem,6vw,3.5rem)', fontWeight:800, color:'white', letterSpacing:2, margin:0 }}>
            Saravana <span style={{ color:'#60a5fa' }}>Travels</span>
          </h1>
          <p style={{ color:'#93c5fd', fontSize:'clamp(0.8rem,2vw,1.1rem)', marginTop:8, letterSpacing:6, fontWeight:300 }}>
            EXPLORE THE DIVINE SERENITY
          </p>
          <div style={{ marginTop:16, display:'flex', justifyContent:'center', gap:8 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width:8, height:8, borderRadius:'50%', background:'#60a5fa',
                animation:`dotPulse 1s ease-in-out ${i*0.2}s infinite`,
              }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes roadScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100px); }
        }
        @keyframes dustPuff {
          0%   { opacity:0.8; transform:translate(0,0) scale(1); }
          100% { opacity:0;   transform:translate(18px,-22px) scale(2.5); }
        }
        @keyframes dotPulse {
          0%,100% { opacity:0.3; transform:scale(0.8); }
          50%     { opacity:1;   transform:scale(1.3); }
        }
        @keyframes twinkle {
          0%,100% { opacity:0.15; }
          50%     { opacity:0.9; }
        }
        @keyframes planeBob {
          0%,100% { margin-top:0; }
          50%     { margin-top:-8px; }
        }
      `}</style>
    </div>
  )
}

function Stars() {
  const stars = Array(55).fill(0).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    dur: 2 + Math.random() * 2,
  }))
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
      {stars.map((s,i) => (
        <div key={i} style={{
          position:'absolute',
          left:`${s.x}%`, top:`${s.y}%`,
          width:s.size, height:s.size,
          borderRadius:'50%', background:'white',
          animation:`twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
    </div>
  )
}

function CarSVG() {
  return (
    <svg viewBox="0 0 220 90" width="280" height="114" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="110" cy="87" rx="88" ry="5" fill="rgba(0,0,0,0.3)" />
      <rect x="10" y="44" width="200" height="34" rx="10" fill="#1d4ed8" />
      <path d="M55 44 Q68 14 100 14 L140 14 Q172 14 178 44 Z" fill="#2563eb" />
      <path d="M140 16 Q168 18 175 44 L140 44 Z" fill="#93c5fd" opacity="0.75" />
      <path d="M80 16 Q62 18 58 44 L80 44 Z" fill="#93c5fd" opacity="0.75" />
      <rect x="84" y="17" width="34" height="24" rx="4" fill="#bfdbfe" opacity="0.65" />
      <rect x="122" y="17" width="34" height="24" rx="4" fill="#bfdbfe" opacity="0.65" />
      <ellipse cx="205" cy="55" rx="9" ry="6" fill="#fef08a" />
      <ellipse cx="205" cy="55" rx="5" ry="3.5" fill="#fde047" />
      <rect x="11" y="51" width="12" height="10" rx="3" fill="#ef4444" />
      <rect x="8" y="68" width="20" height="6" rx="3" fill="#1e40af" />
      <rect x="192" y="68" width="20" height="6" rx="3" fill="#1e40af" />
      <line x1="118" y1="45" x2="118" y2="77" stroke="#1e40af" strokeWidth="2" />
      <rect x="88" y="58" width="14" height="4" rx="2" fill="#93c5fd" />
      <rect x="124" y="58" width="14" height="4" rx="2" fill="#93c5fd" />
      <circle cx="58"  cy="78" r="14" fill="#0f172a" />
      <circle cx="58"  cy="78" r="9"  fill="#334155" />
      <circle cx="58"  cy="78" r="4"  fill="#94a3b8" />
      <circle cx="162" cy="78" r="14" fill="#0f172a" />
      <circle cx="162" cy="78" r="9"  fill="#334155" />
      <circle cx="162" cy="78" r="4"  fill="#94a3b8" />
      <circle cx="55"  cy="75" r="2"  fill="white" opacity="0.3" />
      <circle cx="159" cy="75" r="2"  fill="white" opacity="0.3" />
      <rect x="6" y="70" width="8" height="4" rx="2" fill="#475569" />
    </svg>
  )
}
