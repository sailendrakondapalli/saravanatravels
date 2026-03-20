import { useState } from 'react'
import { waBooking } from '../utils/whatsapp'

const GROUP_PRICES = {
  3: 3999,
  4: 4999,
  5: 6999,
  6: 8999,
  7: null,
}

export default function PricingCalculator() {
  const [days, setDays] = useState(null)
  const [members, setMembers] = useState(1)

  const pricePerPerson = days ? GROUP_PRICES[days] : null
  const total = pricePerPerson ? pricePerPerson * members : null

  const handleBook = () => {
    window.open(
      waBooking({
        packageName: `Kerala Group Package`,
        days,
        members,
        price: total?.toLocaleString(),
      }),
      '_blank'
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-blue-800 mb-1">Kerala Group Package Calculator</h3>
      <p className="text-sm text-gray-500 mb-5">Select days and members to see your price</p>

      <div className="mb-5">
        <p className="text-sm font-semibold text-gray-700 mb-2">Step 1: Select Duration</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUP_PRICES).map(([d, price]) => (
            <button
              key={d}
              onClick={() => price !== null && setDays(Number(d))}
              className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all ${
                days === Number(d)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : price === null
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400'
              }`}
            >
              {d} Days {price === null ? '(Soon)' : `• ₹${price.toLocaleString()}/person`}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-sm font-semibold text-gray-700 mb-2">Step 2: Number of Members</p>
        <div className="flex items-center gap-3">
          <button onClick={() => setMembers(m => Math.max(1, m - 1))} className="w-9 h-9 rounded-full bg-white border-2 border-gray-200 text-lg font-bold hover:border-blue-400 transition-colors">−</button>
          <span className="text-2xl font-bold text-blue-700 w-8 text-center">{members}</span>
          <button onClick={() => setMembers(m => m + 1)} className="w-9 h-9 rounded-full bg-white border-2 border-gray-200 text-lg font-bold hover:border-blue-400 transition-colors">+</button>
          <span className="text-sm text-gray-500">persons</span>
        </div>
      </div>

      {total ? (
        <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow">
          <div>
            <p className="text-xs text-gray-400">Total Price</p>
            <p className="text-3xl font-bold text-blue-700">₹{total.toLocaleString()}</p>
            <p className="text-xs text-gray-500">₹{pricePerPerson.toLocaleString()} × {members} person{members > 1 ? 's' : ''}</p>
          </div>
          <button
            onClick={handleBook}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            📲 Book on WhatsApp
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-4 text-center text-gray-400 text-sm">
          Select duration to see pricing
        </div>
      )}
    </div>
  )
}
