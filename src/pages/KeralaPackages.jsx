import { useState } from 'react'
import PricingCalculator from '../components/PricingCalculator'
import { waBooking } from '../utils/whatsapp'

const honeymoonPackages = [
  {
    route: 'Kochi → Munnar → Alappuzha → Kochi',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
    highlights: ['Tea Gardens', 'Houseboat Stay', 'Backwaters'],
  },
  {
    route: 'Kochi → Alappuzha → Varkala → Trivandrum',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    highlights: ['Beach Sunset', 'Cliff Views', 'Ayurvedic Spa'],
  },
  {
    route: 'Kochi → Varkala → Trivandrum → Kanyakumari',
    img: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80',
    highlights: ['Sunrise at Kanyakumari', 'Beach Walks', 'Temple Visit'],
  },
]

const familyPackages = [
  {
    route: 'Kochi → Athirappilly → Munnar → Thekkady → Alappuzha → Kochi',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    highlights: ['Waterfall', 'Wildlife Safari', 'Houseboat'],
  },
  {
    route: 'Kochi → Alappuzha → Varkala → Kollam → Trivandrum',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    highlights: ['Backwaters', 'Beach', 'Zoo Visit'],
  },
]

const templePackages = [
  {
    route: 'Kochi → Alappuzha → Kollam → Varkala → Trivandrum',
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
    days: '5 Days',
  },
  {
    route: 'Guruvayur → Thrissur → Kochi → Kollam → Varkala → Trivandrum',
    img: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&q=80',
    days: '6 Days',
  },
  {
    route: 'Kasaragod → Kannur → Guruvayur → Thrissur → Kochi → Alappuzha → Kollam → Varkala → Trivandrum',
    img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80',
    days: '9 Days',
  },
]

function FamilyPriceCalc() {
  const [members, setMembers] = useState(2)
  const base = 9999
  const discount = Math.min(members - 1, 4) * 500
  const price = Math.max(base - discount, 7999)
  const total = price * members

  const handleBook = () => {
    window.open(waBooking({ packageName: 'Kerala Family Package', members, price: total.toLocaleString() }), '_blank')
  }

  return (
    <div className="bg-blue-50 rounded-2xl p-5 mt-4">
      <p className="font-semibold text-gray-700 mb-3">Family Pricing Calculator</p>
      <div className="flex items-center gap-3 mb-3">
        <button onClick={() => setMembers(m => Math.max(1, m - 1))} className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 font-bold hover:border-blue-400">−</button>
        <span className="text-xl font-bold text-blue-700 w-6 text-center">{members}</span>
        <button onClick={() => setMembers(m => m + 1)} className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 font-bold hover:border-blue-400">+</button>
        <span className="text-sm text-gray-500">members</span>
      </div>
      <div className="flex items-center justify-between bg-white rounded-xl p-3">
        <div>
          <p className="text-xs text-gray-400">Per Person</p>
          <p className="text-2xl font-bold text-blue-700">₹{price.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Total</p>
          <p className="text-xl font-bold text-green-600">₹{total.toLocaleString()}</p>
        </div>
      </div>
      <button onClick={handleBook} className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm font-semibold transition-colors">
        📲 Book on WhatsApp
      </button>
    </div>
  )
}

function TemplePriceCalc() {
  const [members, setMembers] = useState(2)
  const price = members > 4 ? 17999 : 21999
  const total = price * members

  const handleBook = () => {
    window.open(waBooking({ packageName: 'Kerala Temple Package', members, price: total.toLocaleString() }), '_blank')
  }

  return (
    <div className="bg-orange-50 rounded-2xl p-5 mt-4">
      <p className="font-semibold text-gray-700 mb-3">Temple Package Pricing</p>
      <div className="flex items-center gap-3 mb-3">
        <button onClick={() => setMembers(m => Math.max(1, m - 1))} className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 font-bold hover:border-orange-400">−</button>
        <span className="text-xl font-bold text-orange-700 w-6 text-center">{members}</span>
        <button onClick={() => setMembers(m => m + 1)} className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 font-bold hover:border-orange-400">+</button>
        <span className="text-sm text-gray-500">members</span>
      </div>
      {members > 4 && <p className="text-xs text-green-600 mb-2">🎉 Group discount applied!</p>}
      <div className="flex items-center justify-between bg-white rounded-xl p-3">
        <div>
          <p className="text-xs text-gray-400">Per Person</p>
          <p className="text-2xl font-bold text-orange-700">₹{price.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Total</p>
          <p className="text-xl font-bold text-green-600">₹{total.toLocaleString()}</p>
        </div>
      </div>
      <button onClick={handleBook} className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm font-semibold transition-colors">
        📲 Book on WhatsApp
      </button>
    </div>
  )
}

export default function KeralaPackages() {
  const [activeTab, setActiveTab] = useState('group')
  const tabs = [
    { id: 'group', label: '👥 Group Packages' },
    { id: 'honeymoon', label: '💑 Honeymoon' },
    { id: 'family', label: '👨‍👩‍👧‍👦 Family' },
    { id: 'temple', label: '🛕 Temple' },
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,80,0.6), rgba(0,0,80,0.6)), url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">Kerala Packages</h1>
          <p className="text-blue-200 mt-2">God's Own Country awaits you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                activeTab === t.id ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Group Packages */}
        {activeTab === 'group' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Group Tour Packages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { days: 3, price: 3999 },
                  { days: 4, price: 4999 },
                  { days: 5, price: 6999 },
                  { days: 6, price: 8999 },
                  { days: 7, price: null },
                ].map(pkg => (
                  <div key={pkg.days} className={`rounded-2xl p-5 text-center shadow ${pkg.price ? 'bg-white hover:shadow-lg transition-shadow' : 'bg-gray-100'}`}>
                    <p className="text-3xl font-extrabold text-blue-700">{pkg.days}</p>
                    <p className="text-gray-500 text-sm">Days</p>
                    {pkg.price ? (
                      <>
                        <p className="text-lg font-bold text-gray-800 mt-2">₹{pkg.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-400">per person</p>
                        <button
                          onClick={() => window.open(waBooking({ packageName: `Kerala Group Package - ${pkg.days} Days`, price: pkg.price.toLocaleString() }), '_blank')}
                          className="mt-3 block w-full bg-green-500 text-white text-xs py-2 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                        >
                          📲 Book
                        </button>
                      </>
                    ) : (
                      <p className="text-sm font-semibold text-orange-500 mt-2">Coming Soon</p>
                    )}
                  </div>
                ))}
              </div>
              <PricingCalculator />
            </div>
          </div>
        )}

        {/* Honeymoon */}
        {activeTab === 'honeymoon' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Honeymoon Packages</h2>
            <div className="flex gap-4 mb-6">
              <div className="bg-pink-50 border border-pink-200 rounded-xl px-4 py-2 text-sm">
                <span className="font-semibold text-pink-700">Per Person:</span> ₹12,999
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2 text-sm">
                <span className="font-semibold text-red-700">Couple:</span> ₹25,999
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {honeymoonPackages.map((pkg, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <img src={pkg.img} alt={pkg.route} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <p className="font-bold text-gray-800 text-sm">{pkg.route}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {pkg.highlights.map(h => (
                        <span key={h} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-blue-700 font-bold">₹25,999 <span className="text-xs text-gray-400 font-normal">/ couple</span></p>
                      <button
                        onClick={() => window.open(waBooking({ packageName: `Kerala Honeymoon - ${pkg.route}`, price: '25,999', members: 2 }), '_blank')}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors"
                      >
                        📲 Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Family */}
        {activeTab === 'family' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Family Packages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="grid grid-cols-1 gap-6">
                {familyPackages.map((pkg, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all">
                    <img src={pkg.img} alt={pkg.route} className="w-full sm:w-40 h-40 object-cover" />
                    <div className="p-4 flex flex-col justify-between">
                      <p className="font-bold text-gray-800 text-sm">{pkg.route}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {pkg.highlights.map(h => (
                          <span key={h} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">{h}</span>
                        ))}
                      </div>
                      <button
                        onClick={() => window.open(waBooking({ packageName: `Kerala Family Package - ${pkg.route}` }), '_blank')}
                        className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors w-fit"
                      >
                        📲 Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <FamilyPriceCalc />
            </div>
          </div>
        )}

        {/* Temple */}
        {activeTab === 'temple' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Temple Tour Packages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                {templePackages.map((pkg, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all">
                    <img src={pkg.img} alt={pkg.route} className="w-full sm:w-40 h-40 object-cover" />
                    <div className="p-4 flex flex-col justify-between">
                      <div>
                        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-semibold">{pkg.days}</span>
                        <p className="font-bold text-gray-800 text-sm mt-2">{pkg.route}</p>
                      </div>
                      <button
                        onClick={() => window.open(waBooking({ packageName: `Kerala Temple Tour - ${pkg.days}`, message: pkg.route }), '_blank')}
                        className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors w-fit"
                      >
                        📲 Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <TemplePriceCalc />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
