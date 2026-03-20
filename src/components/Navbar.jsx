import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import TempleMarquee from './TempleMarquee'

const links = [
  { to: '/temple', label: '🛕 Temple Tours' },
  { to: '/', label: 'Home' },
  { to: '/kerala', label: 'Kerala' },
  { to: '/goa', label: 'Goa' },
  { to: '/international', label: 'International' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Temple marquee at very top */}
      <TempleMarquee />

      {/* Main navbar */}
      <nav className="bg-white/95 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <div>
              <p className="text-blue-700 font-bold text-lg leading-tight">Saravana Travels</p>
              <p className="text-xs text-gray-500 leading-tight">Explore the Divine Serenity</p>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  l.to === '/temple'
                    ? pathname === '/temple'
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                    : pathname === l.to
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918838691200"
              target="_blank"
              rel="noreferrer"
              className="ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              📱 WhatsApp
            </a>
            <a
              href="tel:+918838691200"
              className="ml-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              📞 Call Us
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-gray-700 text-xl">
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  l.to === '/temple'
                    ? 'bg-orange-100 text-orange-700'
                    : pathname === l.to
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918838691200"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium text-center"
            >
              📱 WhatsApp Us
            </a>
            <a
              href="tel:+918838691200"
              className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium text-center"
            >
              📞 Call Us
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}
