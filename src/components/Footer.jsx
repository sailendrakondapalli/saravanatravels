import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">✈️</span>
            <div>
              <p className="text-white font-bold text-lg">Saravana Travels</p>
              <p className="text-xs text-gray-400">Explore the Divine Serenity</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Your trusted travel partner for spiritual journeys, honeymoon getaways, family vacations, and adventure tours across India and beyond.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { to: '/', label: 'Home' },
              { to: '/kerala', label: 'Kerala Packages' },
              { to: '/goa', label: 'Goa Packages' },
              { to: '/international', label: 'International' },
              { to: '/experiences', label: 'Experiences' },
              { to: '/contact', label: 'Contact Us' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="hover:text-blue-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+919442855620" className="hover:text-blue-400 flex items-center gap-2">
              📞 +91 9442855620
            </a>
            <a href="tel:+918838691200" className="hover:text-blue-400 flex items-center gap-2">
              📞 +91 8838691200
            </a>
            <a href="mailto:saravanatravels99@gmail.com" className="hover:text-blue-400 flex items-center gap-2">
              ✉️ saravanatravels99@gmail.com
            </a>
            <p className="flex items-center gap-2">📍 Coimbatore, Tamil Nadu</p>
            <a
              href="https://wa.me/919442855620"
              target="_blank"
              rel="noreferrer"
              className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Saravana Travels, Coimbatore. All rights reserved.
      </div>
    </footer>
  )
}
