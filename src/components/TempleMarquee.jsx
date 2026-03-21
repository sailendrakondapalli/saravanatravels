import { useNavigate } from 'react-router-dom'

// Kasi first, then rest
const items = [
  { label: '🛕 Kasi Yatra – ₹35,999',       to: '/temple',        tab: 'india' },
  { label: '🛕 Chardham Yatra – ₹79,999',   to: '/temple',        tab: 'india' },
  { label: '🛕 Kailash Mansarovar',          to: '/temple',        tab: 'india' },
  { label: '🛕 Tirupati Darshan – ₹12,999', to: '/temple',        tab: 'india' },
  { label: '🛕 Rameswaram & Madurai',        to: '/temple',        tab: 'india' },
  { label: '🌴 Guruvayur Temple Tour',       to: '/temple',        tab: 'kerala' },
  { label: '🌴 Kerala Temple Circuit',       to: '/temple',        tab: 'kerala' },
  { label: '🕉️ Om Namah Shivaya',           to: '/temple',        tab: null },
  { label: '✈️ Kerala Packages',             to: '/kerala',        tab: null },
  { label: '🏖️ Goa Friends Package',        to: '/goa',           tab: null },
  { label: '🌍 Golden Triangle – ₹33,000',  to: '/international', tab: null },
  { label: '🌍 Nepal Tour – ₹57,999',       to: '/international', tab: null },
  { label: '💑 Honeymoon Packages',          to: '/kerala',        tab: null },
  { label: '🕉️ Lord Shiva Blessings',       to: '/temple',        tab: null },
]

export default function TempleMarquee() {
  const navigate = useNavigate()
  const doubled = [...items, ...items]

  const handleClick = (item) => {
    if (item.tab) {
      navigate(item.to, { state: { tab: item.tab } })
    } else {
      navigate(item.to)
    }
  }

  return (
    <div
      className="w-full overflow-hidden py-2 select-none"
      style={{
        background: 'linear-gradient(90deg, #7c2d12, #92400e, #78350f)',
        borderBottom: '2px solid #f59e0b',
      }}
    >
      {/* direction: right → left (translateX from 0 to -50%) = items enter from right */}
      <div
        style={{
          display: 'flex',
          animation: 'marqueeRTL 18s linear infinite',
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {doubled.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClick(item)}
            style={{
              color: '#fef3c7',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              paddingRight: 40,
              flexShrink: 0,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fbbf24' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#fef3c7' }}
          >
            {item.label}
            <span style={{ color: '#f59e0b', marginLeft: 16 }}>•</span>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes marqueeRTL {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
