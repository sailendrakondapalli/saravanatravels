import { useNavigate } from 'react-router-dom'

const items = [
  { label: '🛕 Kasi Yatra – ₹35,999', to: '/temple', tab: 'india' },
  { label: '🛕 Chardham Yatra – ₹79,999', to: '/temple', tab: 'india' },
  { label: '🛕 Kailash Mansarovar', to: '/temple', tab: 'india' },
  { label: '🛕 Tirupati Darshan – ₹12,999', to: '/temple', tab: 'india' },
  { label: '🛕 Rameswaram & Madurai', to: '/temple', tab: 'india' },
  { label: '🌴 Guruvayur Temple Tour', to: '/temple', tab: 'kerala' },
  { label: '🌴 Kerala Temple Circuit', to: '/temple', tab: 'kerala' },
  { label: '🕉️ Om Namah Shivaya', to: '/temple', tab: null },
  { label: '✈️ Kerala Packages', to: '/kerala', tab: null },
  { label: '🏖️ Goa Friends Package', to: '/goa', tab: null },
  { label: '🌍 Golden Triangle – ₹33,000', to: '/international', tab: null },
  { label: '🌍 Nepal Tour – ₹57,999', to: '/international', tab: null },
  { label: '💑 Honeymoon Packages', to: '/kerala', tab: null },
  { label: '🕉️ Lord Shiva Blessings', to: '/temple', tab: null },
]

export default function TempleMarquee() {
  const navigate = useNavigate()

  const handleClick = (item) => {
    if (item.tab) {
      navigate(item.to, { state: { tab: item.tab } })
    } else {
      navigate(item.to)
    }
  }

  // ✅ Force Kasi Yatra FIRST
  const sortedItems = [
    ...items.filter(item => item.label.includes('Kasi Yatra')),
    ...items.filter(item => !item.label.includes('Kasi Yatra')),
  ]

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '6px 0',
        background: 'linear-gradient(90deg, #7c2d12, #92400e, #78350f)',
        borderBottom: '2px solid #f59e0b',
      }}
    >
      <div
        className="marquee-track"
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {[...sortedItems, ...sortedItems].map((item, i) => (
          <button
            key={i}
            onClick={() => item.to && handleClick(item)}
            style={{
              color: '#fef3c7',
              fontWeight: 600,
              fontSize: '0.82rem',
              padding: '0 32px 0 0',
              marginLeft: i === 0 ? '40px' : '0px',
              background: 'none',
              border: 'none',
              cursor: item.to ? 'pointer' : 'default',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
            <span style={{ color: '#f59e0b', marginLeft: 12 }}>•</span>
          </button>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-ltr 30s linear infinite;
        }

        @keyframes scroll-ltr {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  )
}