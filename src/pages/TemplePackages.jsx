import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { waBooking } from '../utils/whatsapp'

const SHIVA_BG = `linear-gradient(rgba(10,5,30,0.82), rgba(10,5,30,0.82)), url('/siva.png')`

const allIndia = [
  {
    name: 'Kasi Yatra',
    subtitle: 'Varanasi → Prayagraj → Ayodhya',
    price: '₹35,999',
    rawPrice: '35,999',
    img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80',
    badge: '🕉️ Spiritual',
    highlights: ['Kashi Vishwanath', 'Ganga Aarti', 'Prayagraj Sangam', 'Ram Mandir'],
    days: '6 Days',
  },
  {
    name: 'Chardham Yatra',
    subtitle: 'Yamunotri → Gangotri → Kedarnath → Badrinath',
    price: '₹79,999',
    rawPrice: '79,999',
    img: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&q=80',
    badge: '🕉️ Sacred',
    highlights: ['Kedarnath Temple', 'Badrinath Dham', 'Gangotri', 'Yamunotri'],
    days: '12 Days',
  },
  {
    name: 'Kailash Mansarovar',
    subtitle: 'Sacred Himalayan Pilgrimage',
    price: 'Contact Us',
    rawPrice: null,
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    badge: '🕉️ Premium',
    highlights: ['Mt. Kailash', 'Mansarovar Lake', 'Shiva Abode'],
    days: '15+ Days',
    contactOnly: true,
  },
  {
    name: 'Tirupati Darshan',
    subtitle: 'Tirupati → Tirumala',
    price: '₹12,999',
    rawPrice: '12,999',
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
    badge: '🛕 Devotion',
    highlights: ['Venkateswara Temple', 'Padmavathi Temple', 'Kapila Theertham'],
    days: '3 Days',
  },
  {
    name: 'Rameswaram & Madurai',
    subtitle: 'Rameswaram → Madurai → Kanyakumari',
    price: '₹14,999',
    rawPrice: '14,999',
    img: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80',
    badge: '🛕 South India',
    highlights: ['Ramanathaswamy', 'Meenakshi Temple', 'Kanyakumari Sunrise'],
    days: '4 Days',
  },
]

const keralaTemples = [
  {
    route: 'Kochi → Alappuzha → Kollam → Varkala → Trivandrum',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
    days: '5 Days',
    price: 21999,
  },
  {
    route: 'Guruvayur → Thrissur → Kochi → Kollam → Varkala → Trivandrum',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    days: '6 Days',
    price: 21999,
  },
  {
    route: 'Kasaragod → Kannur → Guruvayur → Thrissur → Kochi → Alappuzha → Kollam → Varkala → Trivandrum',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    days: '9 Days',
    price: 21999,
  },
]

function KeralaTempleCalc() {
  const [members, setMembers] = useState(2)
  const price = members > 4 ? 17999 : 21999
  const total = price * members
  return (
    <div className="bg-orange-950/60 border border-orange-700 rounded-2xl p-5">
      <p className="font-semibold text-orange-200 mb-3">Kerala Temple Pricing</p>
      <div className="flex items-center gap-3 mb-3">
        <button onClick={() => setMembers(m => Math.max(1, m - 1))} className="w-8 h-8 rounded-full bg-orange-800 text-white font-bold hover:bg-orange-700">−</button>
        <span className="text-xl font-bold text-orange-300 w-6 text-center">{members}</span>
        <button onClick={() => setMembers(m => m + 1)} className="w-8 h-8 rounded-full bg-orange-800 text-white font-bold hover:bg-orange-700">+</button>
        <span className="text-sm text-orange-300">members</span>
      </div>
      {members > 4 && <p className="text-xs text-green-400 mb-2">🎉 Group discount applied!</p>}
      <div className="flex items-center justify-between bg-black/30 rounded-xl p-3 mb-3">
        <div>
          <p className="text-xs text-orange-400">Per Person</p>
          <p className="text-2xl font-bold text-orange-300">₹{price.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-orange-400">Total</p>
          <p className="text-xl font-bold text-green-400">₹{total.toLocaleString()}</p>
        </div>
      </div>
      <button
        onClick={() => window.open(waBooking({ packageName: 'Kerala Temple Package', members, price: total.toLocaleString() }), '_blank')}
        className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-xl text-sm font-semibold transition-colors"
      >
        📲 Book on WhatsApp
      </button>
    </div>
  )
}

export default function TemplePackages() {
  const location = useLocation()
  const [tab, setTab] = useState(location.state?.tab || 'india')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-24 min-h-screen" style={{ background: 'linear-gradient(180deg,#0f0a1e 0%,#1a0a2e 50%,#0f0a1e 100%)' }}>
      {/* Hero */}
      <div
        className="relative h-72 flex items-center justify-center"
        style={{ backgroundImage: SHIVA_BG, backgroundSize: 'cover', backgroundPosition: 'center top' }}
      >
        <div className="text-center text-white z-10">
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-2">🕉️ Om Namah Shivaya</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-100">Temple Tour Packages</h1>
          <p className="text-orange-300 mt-2">Sacred journeys to divine destinations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {[
            { id: 'india', label: '🇮🇳 All India Temples' },
            { id: 'kerala', label: '🌴 Kerala Temples' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all border ${
                tab === t.id
                  ? 'bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-900/50'
                  : 'bg-transparent text-orange-300 border-orange-700 hover:bg-orange-900/40'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* All India Temples */}
        {tab === 'india' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allIndia.map(pkg => (
              <div
                key={pkg.name}
                className="rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'rgba(120,53,15,0.25)', border: '1px solid rgba(251,146,60,0.4)', backdropFilter: 'blur(8px)' }}
              >
                <div className="relative">
                  <img src={pkg.img} alt={pkg.name} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-3 left-3 bg-orange-700 text-orange-100 text-xs font-semibold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/60 text-orange-200 text-xs px-2 py-1 rounded-full">
                    🗓️ {pkg.days}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-orange-100">{pkg.name}</h3>
                  <p className="text-orange-400 text-sm mt-1">{pkg.subtitle}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {pkg.highlights.map(h => (
                      <span key={h} className="bg-orange-900/50 text-orange-300 text-xs px-2 py-1 rounded-full border border-orange-800">{h}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-orange-500">{pkg.contactOnly ? 'for pricing' : 'per person'}</p>
                      <p className="font-bold text-xl text-orange-300">{pkg.price}</p>
                    </div>
                    <button
                      onClick={() => window.open(waBooking({ packageName: pkg.name, price: pkg.rawPrice || '', message: pkg.subtitle }), '_blank')}
                      className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                    >
                      {pkg.contactOnly ? '📞 Enquire' : '📲 Book Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Kerala Temples */}
        {tab === 'kerala' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              {keralaTemples.map((pkg, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all"
                  style={{ background: 'rgba(120,53,15,0.25)', border: '1px solid rgba(251,146,60,0.4)' }}
                >
                  <img src={pkg.img} alt={pkg.route} className="w-full sm:w-40 h-40 object-cover" />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <span className="bg-orange-800 text-orange-200 text-xs px-2 py-1 rounded-full font-semibold">{pkg.days}</span>
                      <p className="font-bold text-orange-100 text-sm mt-2">{pkg.route}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-orange-300 font-bold">₹{pkg.price.toLocaleString()}<span className="text-xs text-orange-500 font-normal">/head</span></p>
                      <button
                        onClick={() => window.open(waBooking({ packageName: `Kerala Temple Tour - ${pkg.days}`, message: pkg.route }), '_blank')}
                        className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors"
                      >
                        📲 Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <KeralaTempleCalc />
          </div>
        )}

        {/* Shiva quote */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,146,60,0.2)' }}
        >
          <p className="text-4xl mb-3">🕉️</p>
          <p className="text-orange-200 text-xl font-semibold italic">"Om Namah Shivaya — The divine journey begins within"</p>
          <p className="text-orange-500 text-sm mt-2">Book your sacred pilgrimage with Saravana Travels</p>
          <button
            onClick={() => window.open(waBooking({ message: 'I am interested in a temple tour package. Please guide me.' }), '_blank')}
            className="mt-5 bg-orange-700 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold transition-all hover:scale-105"
          >
            📲 Plan My Pilgrimage
          </button>
        </div>
      </div>
    </div>
  )
}
