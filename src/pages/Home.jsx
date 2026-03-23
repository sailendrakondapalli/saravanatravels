import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { waBooking } from '../utils/whatsapp'
import useSEO from '../utils/useSEO'

const SHIVA_OVERLAY = `linear-gradient(rgba(10,5,30,0.88), rgba(10,5,30,0.88)), url('https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1400&q=80')`
const WINGS_PATTERN = `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 30 L5 8 L22 30 L5 52 Z' fill='rgba(13,71,161,0.18)'/%3E%3Cpath d='M60 30 L115 8 L98 30 L115 52 Z' fill='rgba(13,71,161,0.18)'/%3E%3Ccircle cx='60' cy='30' r='3' fill='rgba(13,71,161,0.12)'/%3E%3C/svg%3E")`

const categories = [
  { label: 'Temple Packages', icon: '🛕', to: '/temple', img: '/siva.png', priority: true },
  { label: 'Family Packages', icon: '👨‍👩‍👧‍👦', to: '/kerala', state: { tab: 'family' }, img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80' },
  { label: 'Honeymoon Packages', icon: '💑', to: '/kerala', state: { tab: 'honeymoon' }, img: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&q=80' },
  { label: 'Goa Packages', icon: '🏖️', to: '/goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80' },
  { label: 'International Packages', icon: '🌍', to: '/international', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80' },
  { label: 'Kerala Packages', icon: '🌴', to: '/kerala', state: { tab: 'group' }, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80' },
]

const CHARDHAM_IMG = '/chardam.png'
const CHARDHAM_BG = '/chardam.png'

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  useSEO({
    title: 'Best Travel Agency in Coimbatore - Temple Tours, Kerala, Goa, Nepal Packages',
    description: 'Saravana Travels Coimbatore - Book Kasi Yatra, Chardham Yatra, Tirupati Darshan, Kerala, Goa, Nepal, Andaman tour packages. Best price guaranteed. Call +91 9442855620.',
    keywords: 'Saravana Travels Coimbatore, travel agency Coimbatore, Kasi Yatra, Chardham Yatra, Tirupati darshan, Kerala tour, Goa tour, Nepal tour, temple tour Tamil Nadu, pilgrimage packages Coimbatore',
    url: 'https://saravanatravels.vercel.app/'
  })
  const navigate = useNavigate()
  const goToDetail = (pkg) => navigate(`/package/${pkg.id}`, { state: pkg })
  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: '#0a0f1e' }}>
          <img src="/siva.png" alt="bg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,30,0.25)' }}></div>
        </div>
        <div className="text-center text-white px-4 max-w-5xl mx-auto relative z-10 pt-24 md:pt-0">
          <p className="text-orange-300 font-medium mb-2 tracking-widest text-xl md:text-2xl uppercase">🕉️ Welcome to Saravana Travels</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Explore the <span className="text-orange-400">Divine Serenity</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
            Discover breathtaking destinations, spiritual journeys, and unforgettable experiences crafted just for you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <button
              onClick={() => window.open(waBooking({ message: 'I would like to book a tour package. Please help me.' }), '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-2xl font-bold text-base transition-all hover:scale-105 shadow-lg"
            >
              📲 Book Now
            </button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link to="/contact" className="bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/30 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              📩 Contact Us
            </Link>
            <a href="https://wa.me/918838691200" target="_blank" rel="noreferrer" className="bg-green-600/80 hover:bg-green-600 text-white border border-green-500/40 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              💬 WhatsApp
            </a>
            <a href="tel:+918838691200" className="bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/30 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              📞 8838691200
            </a>
            <a href="tel:+919442855620" className="bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/30 px-5 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              📞 9442855620
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-10">
            <span>✅ 500+ Happy Travelers</span>
            <span>✅ Best Price Guarantee</span>
            <span>✅ 24/7 Support</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-2xl z-10">↓</div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: '#0a0f1e' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#0a0f1e" />
        </svg>
      </div>

      {/* Kasi Yatra Section */}
      <section className="relative py-20" style={{ backgroundImage: `linear-gradient(rgba(10,5,30,0.72), rgba(10,5,30,0.72)), url('https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <span className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block">MOST POPULAR</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">🕉️ Kasi Yatra</h2>
            <p className="text-orange-300 mb-4">Varanasi → Prayagraj → Ayodhya · 6 Days / 5 Nights</p>
            <ul className="text-gray-300 text-sm space-y-1 mb-6">
              <li>✅ Kashi Vishwanath Temple darshan</li>
              <li>✅ Ganga Aarti at Dashashwamedh Ghat</li>
              <li>✅ Prayagraj Sangam &amp; Triveni</li>
              <li>✅ Ram Mandir, Ayodhya</li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-green-400">₹35,999</span>
              <button onClick={() => goToDetail({ id: 'kasi', name: 'Kasi Yatra', price: '₹35,999', rawPrice: '35999', days: '6 Days / 5 Nights', img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=344&h=256&fit=crop&q=80', badge: 'MOST POPULAR', badgeColor: '#ec4899', desc: 'A sacred spiritual journey to Varanasi, Prayagraj and Ayodhya.', highlights: ['Kashi Vishwanath Temple darshan', 'Ganga Aarti at Dashashwamedh Ghat', 'Prayagraj Sangam & Triveni', 'Ram Mandir Ayodhya', 'Boat ride on River Ganga', 'Sarnath Buddhist site'], itinerary: ['Arrival at Varanasi, hotel check-in, evening Ganga Aarti', 'Kashi Vishwanath darshan, Kashi Corridor tour', 'Sarnath visit, local temple tour', 'Travel to Prayagraj, Sangam darshan & holy dip', 'Travel to Ayodhya, Ram Mandir darshan', 'Return journey'] })} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105">📋 View Details</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=344&h=256&fit=crop&q=80" alt="Kasi Yatra" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C360,80 1080,0 1440,80 L1440,80 L0,80 Z" fill="#1a0a2e" />
        </svg>
      </div>

      {/* Chardham Yatra Section */}
      <section className="relative py-20" style={{ backgroundImage: `linear-gradient(rgba(5,10,30,0.75), rgba(5,10,30,0.75)), url('${CHARDHAM_BG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 text-white">
            <span className="text-xs bg-teal-500 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block">BEST VALUE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">🕉️ Chardham Yatra</h2>
            <p className="text-orange-300 mb-4">Yamunotri → Gangotri → Kedarnath → Badrinath · 12 Days / 11 Nights</p>
            <ul className="text-gray-300 text-sm space-y-1 mb-6">
              <li>✅ Kedarnath Temple — Shiva's abode</li>
              <li>✅ Badrinath Dham darshan</li>
              <li>✅ Gangotri — source of Ganga</li>
              <li>✅ Yamunotri — source of Yamuna</li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-green-400">₹79,999</span>
              <button onClick={() => goToDetail({ id: 'chardham', name: 'Chardham Yatra', price: '₹79,999', rawPrice: '79999', days: '12 Days / 11 Nights', img: CHARDHAM_IMG, badge: 'BEST VALUE', badgeColor: '#14b8a6', desc: 'The most sacred pilgrimage in Hinduism — visit all four divine dhams in the Himalayas.', highlights: ['Kedarnath Temple darshan', 'Badrinath Dham darshan', 'Gangotri — source of Ganga', 'Yamunotri — source of Yamuna', 'Helicopter option available', 'All meals & accommodation included'], itinerary: ['Arrival Haridwar, Rishikesh sightseeing', 'Drive to Yamunotri, temple darshan', 'Drive to Gangotri, temple darshan', 'Drive to Kedarnath base, trek begins', 'Kedarnath Temple darshan', 'Drive to Badrinath', 'Badrinath darshan, Mana village', 'Return to Haridwar', 'Haridwar Ganga Aarti', 'Drive to Rishikesh', 'Local sightseeing', 'Departure'] })} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105">📋 View Details</button>
            </div>
          </div>
          <div className="flex-1">
            <img src={CHARDHAM_IMG} alt="Chardham Yatra" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,80 C360,0 1080,80 1440,0 L1440,80 L0,80 Z" fill="#0f0a1e" />
        </svg>
      </div>

      {/* Nepal Tour Section */}
      <section className="relative py-20" style={{ backgroundImage: `linear-gradient(rgba(5,15,10,0.75), rgba(5,15,10,0.75)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <span className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block">RECOMMENDED</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">🌄 Nepal Tour</h2>
            <p className="text-orange-300 mb-4">Kathmandu → Pokhara → Pashupatinath · 9 Days / 8 Nights</p>
            <ul className="text-gray-300 text-sm space-y-1 mb-6">
              <li>✅ Pashupatinath Temple darshan</li>
              <li>✅ Muktinath Dham darshan</li>
              <li>✅ Boudhanath Stupa</li>
              <li>✅ Sonali border & Pokhara Lake</li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-green-400">₹57,999</span>
              <button onClick={() => goToDetail({ id: 'nepal', name: 'Nepal Tour', price: '₹57,999', rawPrice: '57999', days: '7 Days / 6 Nights', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', badge: 'RECOMMENDED', badgeColor: '#0d9488', desc: 'Explore the spiritual and natural wonders of Nepal.', highlights: ['Pashupatinath Temple darshan', 'Boudhanath Stupa visit', 'Pokhara Lake & Himalayan views', 'Everest viewpoint', 'Swayambhunath Monkey Temple', 'Chitwan jungle safari option'], itinerary: ['Arrival Kathmandu, hotel check-in', 'Pashupatinath, Boudhanath, Swayambhunath', 'Kathmandu Durbar Square, Patan', 'Drive to Pokhara, lakeside walk', 'Sarangkot sunrise, Phewa Lake boat ride', 'Drive back to Kathmandu', 'Departure'] })} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105">📋 View Details</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" alt="Nepal Tour" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z" fill="#0a0f1e" />
        </svg>
      </div>

      {/* Categories */}
      <section className="py-16" style={{ backgroundImage: `${WINGS_PATTERN}, ${SHIVA_OVERLAY}`, backgroundSize: '80px 40px, cover', backgroundPosition: 'center, center top' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">🕉️ Our Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">Choose Your Dream Destination</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <Link key={cat.label + i} to={cat.to} state={cat.state} className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${cat.priority ? 'ring-2 ring-orange-500' : ''}`}>
                <img src={cat.img} alt={cat.label} className="w-full h-40 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-4">
                  <div>
                    {cat.priority && <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full mb-1 block w-fit">⭐ Featured</span>}
                    <span className="text-2xl">{cat.icon}</span>
                    <p className="text-white font-bold text-sm md:text-base mt-1">{cat.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Packages Grid */}
      <section className="py-16" style={{ backgroundColor: '#0a0f1e' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">📦 All Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">Explore Every Package</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'kasi', name: 'Kasi Yatra', sub: 'Varanasi · Prayagraj · Ayodhya', price: '₹35,999', days: '6 Days', badge: 'MOST POPULAR', color: '#ec4899', img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=344&h=256&fit=crop&q=80' },
              { id: 'chardham', name: 'Chardham Yatra', sub: 'Yamunotri · Gangotri · Kedarnath · Badrinath', price: '₹79,999', days: '12 Days', badge: 'BEST VALUE', color: '#14b8a6', img: CHARDHAM_IMG },
              { id: 'nepal', name: 'Nepal Tour', sub: 'Kathmandu · Pokhara · Pashupatinath · Muktinath', price: '₹57,999', days: '9 Days', badge: 'RECOMMENDED', color: '#0d9488', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80' },
              { id: 'tirupati', name: 'Tirupati Darshan', sub: 'Tirupati · Tirumala', price: '₹12,999', days: '3 Days', badge: 'DEVOTION', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=344&h=256&fit=crop&q=80' },
              { id: 'rameswaram', name: 'Rameswaram & Madurai', sub: 'Rameswaram · Madurai · Kanyakumari', price: '₹14,999', days: '4 Days', badge: 'SOUTH INDIA', color: '#7c3aed', img: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80' },
              { id: 'andaman', name: 'Andaman Islands', sub: 'Port Blair · Havelock · Neil Island', price: '₹45,000', days: '6 Days', badge: 'BEACH PARADISE', color: '#0891b2', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80' },
              { id: 'golden_triangle', name: 'Golden Triangle', sub: 'Delhi · Agra · Jaipur', price: '₹33,000', days: '6 Days', badge: 'HERITAGE', color: '#d97706', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80' },
              { id: 'kailash', name: 'Kailash Mansarovar', sub: 'Sacred Himalayan Pilgrimage', price: '₹2,75,000', days: '15+ Days', badge: 'PREMIUM', color: '#7c3aed', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
              { id: 'kerala_group', name: 'Kerala Group Tour', sub: 'Kochi · Munnar · Alleppey · Kovalam', price: '₹6,999', days: '5 Days', badge: 'GROUP TOUR', color: '#059669', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },
              { id: 'kerala_honeymoon', name: 'Kerala Honeymoon', sub: 'Kochi · Munnar · Alleppey · Varkala', price: '₹25,999', days: '5 Days', badge: 'HONEYMOON', color: '#db2777', img: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&q=80' },
              { id: 'goa', name: 'Goa Friends Package', sub: 'North Goa · South Goa · Beaches', price: '₹9,999', days: '4 Days', badge: 'FRIENDS TRIP', color: '#0284c7', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80' },
            ].map(pkg => (
              <div key={pkg.id} className="rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="relative">
                  <img src={pkg.img} alt={pkg.name} className="w-full h-44 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: pkg.color }}>{pkg.badge}</span>
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">🗓️ {pkg.days}</span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-base">{pkg.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{pkg.sub}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <p className="text-green-400 font-bold text-lg">{pkg.price}</p>
                    <div className="flex gap-2">
                      <button onClick={() => navigate(`/package/${pkg.id}`)} className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-2 rounded-xl text-xs font-semibold transition-colors">📋 Details</button>
                      <button onClick={() => window.open(`https://wa.me/918838691200?text=${encodeURIComponent('Hi! I want to book ' + pkg.name + '. Please confirm availability.')}`, '_blank')} className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-xl text-xs font-semibold transition-colors">📲 Book</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {(() => {
        const GALLERY_IMGS = [
          '/galery/WhatsApp Image 2026-03-22 at 12.53.21 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.22 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.24 PM (1).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.24 PM (2).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.24 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.25 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.26 PM (1).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.26 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.27 PM (1).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.27 PM (2).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.27 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.28 PM (1).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.28 PM (2).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.28 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.29 PM (1).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.29 PM (2).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.29 PM.jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.30 PM (1).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.30 PM (2).jpeg',
          '/galery/WhatsApp Image 2026-03-22 at 12.53.30 PM.jpeg',
        ]
        const [lightboxIdx, setLightboxIdx] = useState(null)
        return (
          <section className="py-16" style={{ background: '#0a0f1e' }}>
            {lightboxIdx !== null && (
              <div onClick={() => setLightboxIdx(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.93)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={() => setLightboxIdx(null)} style={{ position: 'absolute', top: 20, right: 24, color: 'white', fontSize: 36, background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}>✕</button>
                <button onClick={e => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length) }} style={{ position: 'absolute', left: 16, color: 'white', fontSize: 36, background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', borderRadius: 8, padding: '8px 14px' }}>‹</button>
                <img src={GALLERY_IMGS[lightboxIdx]} alt="" onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '88vh', borderRadius: 12, objectFit: 'contain', boxShadow: '0 8px 40px rgba(0,0,0,0.8)' }} />
                <button onClick={e => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % GALLERY_IMGS.length) }} style={{ position: 'absolute', right: 16, color: 'white', fontSize: 36, background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', borderRadius: 8, padding: '8px 14px' }}>›</button>
                <div style={{ position: 'absolute', bottom: 16, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{lightboxIdx + 1} / {GALLERY_IMGS.length}</div>
              </div>
            )}
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">📸 Memories</p>
                <h2 className="text-3xl font-bold text-white mt-1">Our Travel Gallery</h2>
                <p className="text-gray-400 mt-2 text-sm">Real moments from our journeys</p>
              </div>
              <div className="gallery-scroll" style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 12, scrollbarWidth: 'thin', scrollbarColor: '#f97316 rgba(255,255,255,0.1)', WebkitOverflowScrolling: 'touch' }}>
                {GALLERY_IMGS.map((src, i) => (
                  <img key={i} src={src} alt={`Gallery ${i + 1}`} onClick={() => setLightboxIdx(i)}
                    style={{ height: 240, width: 'auto', minWidth: 180, maxWidth: 320, objectFit: 'cover', borderRadius: 16, flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.3)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* YouTube Reviews */}
      <section className="py-16" style={{ backgroundColor: '#0a0f1e', backgroundImage: WINGS_PATTERN, backgroundSize: '120px 60px' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">⭐ Real Experiences</p>
            <h2 className="text-3xl font-bold text-white mt-1">Happy Clients — Their Stories</h2>
            <p className="text-gray-400 mt-2 text-sm">Watch what our satisfied travelers say about us</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {[
              { url: 'https://www.youtube.com/embed/C81lBKIVtVQ', title: 'Customer Review 1' },
              { url: 'https://www.youtube.com/embed/a9E1YvR7B8s', title: 'Customer Review 2' },
              { url: 'https://www.youtube.com/embed/MXcvxH2a3iw', title: 'Customer Review 3' },
              { url: 'https://www.youtube.com/embed/JJP2ClykIv4', title: 'Customer Review 4' },
            ].map((v, i) => (
              <div key={i} className="w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: 200, border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0 }}>
                  <iframe src={v.url} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} />
                </div>
                <div className="p-2 text-center">
                  <p className="text-orange-300 text-xs font-semibold">⭐⭐⭐⭐⭐ Verified Traveler</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16" style={{ backgroundImage: WINGS_PATTERN, backgroundColor: '#0a0f1e', backgroundSize: '120px 60px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">✈️ Why Choose Us</p>
            <h2 className="text-3xl font-bold text-white mt-1">Why Saravana Travels?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: '10+ Years', desc: 'Trusted travel experience' },
              { icon: '😊', title: '500+ Clients', desc: 'Happy travelers served' },
              { icon: '💰', title: 'Best Price', desc: 'Guaranteed lowest rates' },
              { icon: '📞', title: '24/7 Support', desc: 'Always here for you' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #1a0a2e 100%)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-gray-300 mb-8">Contact us today and let us plan your perfect journey.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/918838691200" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-bold transition-all hover:scale-105">
              💬 WhatsApp Us
            </a>
            <a href="tel:+919442855620" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold transition-all hover:scale-105">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
