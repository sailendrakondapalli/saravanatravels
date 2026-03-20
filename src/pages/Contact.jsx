import { useState } from 'react'
import { waBooking } from '../utils/whatsapp'

const packages = [
  'Kerala - Group Package',
  'Kerala - Honeymoon Package',
  'Kerala - Family Package',
  'Kerala - Temple Package',
  'Goa - Friends Package',
  'Golden Triangle',
  'Chardham Yatra',
  'Kasi Yatra',
  'Andaman',
  'Nepal',
  'Kailash Mansarovar',
  'Signature Experience',
  'Custom Package',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', package: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    window.open(
      waBooking({ name: form.name, phone: form.phone, packageName: form.package, message: form.message }),
      '_blank'
    )
    setSubmitted(true)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,20,80,0.65), rgba(0,20,80,0.65)), url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="text-blue-200 mt-2">We're here to plan your perfect trip</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-green-600">Message Sent on WhatsApp!</h3>
              <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Package Interested In</label>
                <select
                  name="package"
                  value={form.package}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white"
                >
                  <option value="">Select a package</option>
                  {packages.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your travel plans, dates, number of people..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                💬 Send via WhatsApp
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <a href="tel:+919442855620" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <p className="font-semibold text-gray-800">+91 9442855620</p>
                </div>
              </a>
              <a href="tel:+918838691200" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs text-gray-400">Alternate Number</p>
                  <p className="font-semibold text-gray-800">+91 8838691200</p>
                </div>
              </a>
              <a href="mailto:saravanatravels99@gmail.com" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="font-semibold text-gray-800">saravanatravels99@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="font-semibold text-gray-800">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://wa.me/918838691200"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl text-center font-bold transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-3xl mb-2">💬</div>
              <p>WhatsApp</p>
              <p className="text-xs font-normal opacity-80 mt-1">Chat instantly</p>
            </a>
            <a
              href="tel:+918838691200"
              className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl text-center font-bold transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-3xl mb-2">📞</div>
              <p>Call Now</p>
              <p className="text-xs font-normal opacity-80 mt-1">+91 8838691200</p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Business Hours</h3>
            <div className="flex flex-col gap-1 text-sm text-blue-100">
              <div className="flex justify-between"><span>Monday - Saturday</span><span className="text-white font-semibold">9:00 AM - 8:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-white font-semibold">10:00 AM - 6:00 PM</span></div>
            </div>
            <p className="text-xs text-blue-200 mt-3">WhatsApp available 24/7 for urgent queries</p>
          </div>
        </div>
      </div>
    </div>
  )
}
