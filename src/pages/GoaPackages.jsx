import { useState, useEffect } from 'react'
import { waBooking } from '../utils/whatsapp'

const goaPlaces = {
  north: ['Calangute Beach', 'Baga Beach', 'Fort Aguada', 'Anjuna Flea Market', 'Chapora Fort', 'Vagator Beach'],
  south: ['Palolem Beach', 'Colva Beach', 'Dudhsagar Falls', 'Cabo de Rama Fort', 'Butterfly Beach'],
}

const packages = [
  { days: 3, price: 7999, includes: ['Hotel Stay', 'North Goa Tour', 'Transfers'] },
  { days: 4, price: 9999, includes: ['Hotel Stay', 'North + South Goa', 'Transfers', 'Beach Activities'] },
  { days: 5, price: 12999, includes: ['Hotel Stay', 'Full Goa Tour', 'Transfers', 'Water Sports', 'Sunset Cruise'] },
]

export default function GoaPackages() {
  const [selected, setSelected] = useState(null)
  const [members, setMembers] = useState(2)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const pkg = packages.find(p => p.days === selected)
  const total = pkg ? pkg.price * members : null

  const handleBook = () => {
    window.open(
      waBooking({ packageName: `Goa Friends Package - ${selected} Days`, members, price: total?.toLocaleString() }),
      '_blank'
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,30,80,0.6), rgba(0,30,80,0.6)), url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">Goa Packages</h1>
          <p className="text-blue-200 mt-2">Sun, Sand & Serenity</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🎉</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Friends Package</h2>
              <p className="text-gray-500 text-sm">Best Goa experience with your squad</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map(p => (
              <div
                key={p.days}
                onClick={() => setSelected(p.days)}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all ${
                  selected === p.days
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-extrabold text-blue-700">{p.days}</span>
                  <span className="text-gray-400 text-sm">Days</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">₹{p.price.toLocaleString()}</p>
                <p className="text-xs text-gray-400 mb-4">per person</p>
                <ul className="flex flex-col gap-1">
                  {p.includes.map(item => (
                    <li key={item} className="text-xs text-gray-600 flex items-center gap-1">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
                {selected === p.days && <div className="mt-3 text-center text-blue-600 text-xs font-semibold">✓ Selected</div>}
              </div>
            ))}
          </div>

          {selected && (
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
              <h3 className="font-bold text-gray-800 mb-4">Calculate Total Price</h3>
              <div className="flex items-center gap-3 mb-4">
                <button onClick={() => setMembers(m => Math.max(1, m - 1))} className="w-9 h-9 rounded-full border-2 border-gray-200 font-bold hover:border-blue-400">−</button>
                <span className="text-2xl font-bold text-blue-700 w-8 text-center">{members}</span>
                <button onClick={() => setMembers(m => m + 1)} className="w-9 h-9 rounded-full border-2 border-gray-200 font-bold hover:border-blue-400">+</button>
                <span className="text-sm text-gray-500">friends</span>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Total for {members} person{members > 1 ? 's' : ''}</p>
                  <p className="text-3xl font-bold text-blue-700">₹{total.toLocaleString()}</p>
                </div>
                <button
                  onClick={handleBook}
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  📲 Book Now
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-gray-800 text-lg mb-4">🌅 North Goa Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {goaPlaces.north.map(p => (
                <span key={p} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">{p}</span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-gray-800 text-lg mb-4">🌊 South Goa Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {goaPlaces.south.map(p => (
                <span key={p} className="bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80',
            'https://images.unsplash.com/photo-1587922546307-776227941871?w=400&q=80',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
            'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&q=80',
          ].map((src, i) => (
            <img key={i} src={src} alt="Goa" className="rounded-2xl h-40 w-full object-cover hover:scale-105 transition-transform duration-300" />
          ))}
        </div>
      </div>
    </div>
  )
}
