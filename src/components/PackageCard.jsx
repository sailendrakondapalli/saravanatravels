import { waBooking } from '../utils/whatsapp'

export default function PackageCard({ image, title, subtitle, price, badge, duration, features = [] }) {
  const handleBook = () => {
    window.open(waBooking({ packageName: title, price: price }), '_blank')
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {badge && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        {duration && (
          <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            🕐 {duration}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
        {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        {features.length > 0 && (
          <ul className="mt-2 flex flex-col gap-1">
            {features.map((f, i) => (
              <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                <span className="text-green-500">✓</span> {f}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-blue-700 font-bold text-xl">{price}</p>
          </div>
          <button
            onClick={handleBook}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            📲 Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
