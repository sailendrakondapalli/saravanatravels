import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { waBooking } from '../utils/whatsapp'

const DETAIL_IDS = { 'Golden Triangle': 'golden_triangle', 'Chardham Yatra': 'chardham', 'Kasi Yatra': 'kasi', 'Andaman': 'andaman', 'Nepal': 'nepal', 'Kailash Mansarovar': 'kailash' }

const packages = [
  {
    name: 'Golden Triangle',
    subtitle: 'Delhi → Agra → Jaipur',
    price: '₹33,000',
    rawPrice: '33,000',
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80',
    badge: 'Popular',
    highlights: ['Taj Mahal', 'Amber Fort', 'Qutub Minar'],
  },
  {
    name: 'Chardham Yatra',
    subtitle: 'Yamunotri → Gangotri → Kedarnath → Badrinath',
    price: '₹79,999',
    rawPrice: '79,999',
    img: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&q=80',
    badge: 'Spiritual',
    highlights: ['Kedarnath Temple', 'Badrinath', 'Gangotri'],
  },
  {
    name: 'Kasi Yatra',
    subtitle: 'Varanasi → Prayagraj → Ayodhya',
    price: '₹35,999',
    rawPrice: '35,999',
    img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80',
    badge: 'Spiritual',
    highlights: ['Kashi Vishwanath', 'Ganga Aarti', 'Prayagraj'],
  },
  {
    name: 'Andaman',
    subtitle: 'Port Blair → Havelock → Neil Island',
    price: '₹45,000',
    rawPrice: '45,000',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    badge: 'Beach',
    highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail'],
  },
  {
    name: 'Nepal',
    subtitle: 'Kathmandu → Pokhara → Chitwan',
    price: '₹57,999',
    rawPrice: '57,999',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
    badge: 'Adventure',
    highlights: ['Pashupatinath', 'Phewa Lake', 'Himalayan Views'],
  },
  {
    name: 'Kailash Mansarovar',
    subtitle: 'Sacred Himalayan Pilgrimage',
    price: 'Contact Us',
    rawPrice: null,
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    badge: 'Premium',
    highlights: ['Mt. Kailash', 'Mansarovar Lake', 'Spiritual Journey'],
    contactOnly: true,
  },
]

const badgeColors = {
  Popular: 'bg-blue-600',
  Spiritual: 'bg-orange-500',
  Beach: 'bg-teal-500',
  Adventure: 'bg-green-600',
  Premium: 'bg-purple-600',
}

export default function InternationalPackages() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const navigate = useNavigate()
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,60,0.65), rgba(0,0,60,0.65)), url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">International & Other Packages</h1>
          <p className="text-blue-200 mt-2">Explore beyond boundaries</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map(pkg => (
            <div key={pkg.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="relative">
                <img src={pkg.img} alt={pkg.name} className="w-full h-48 object-cover" />
                <span className={`absolute top-3 left-3 ${badgeColors[pkg.badge] || 'bg-blue-600'} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {pkg.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{pkg.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {pkg.highlights.map(h => (
                    <span key={h} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{h}</span>
                  ))}
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">{pkg.contactOnly ? 'for pricing' : 'per person'}</p>
                    <p className={`font-bold text-xl ${pkg.contactOnly ? 'text-purple-600' : 'text-blue-700'}`}>{pkg.price}</p>
                  </div>
                  <div className="flex gap-2">
                    {DETAIL_IDS[pkg.name] && (
                      <button onClick={() => navigate(`/package/${DETAIL_IDS[pkg.name]}`)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-xl text-sm font-semibold transition-colors">📋 Details</button>
                    )}
                    <button
                      onClick={() => window.open(waBooking({ packageName: pkg.name, price: pkg.rawPrice || '', message: pkg.subtitle }), '_blank')}
                      className={`${pkg.contactOnly ? 'bg-purple-600 hover:bg-purple-700' : 'bg-green-500 hover:bg-green-600'} text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors`}
                    >
                      {pkg.contactOnly ? '📞 Enquire' : '📲 Book'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h3>
          <p className="text-blue-200 mb-6">We customize tours to any destination. Just tell us your dream trip!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open(waBooking({ message: 'I need a custom tour package. Please help me plan.' }), '_blank')}
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
            <a href="https://wa.me/918838691200" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
