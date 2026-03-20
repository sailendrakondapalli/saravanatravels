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
  'Custom Package',
]

export default function QuickBookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', package: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    window.open(
      waBooking({ name: form.name, phone: form.phone, packageName: form.package, message: form.message }),
      '_blank'
    )
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', package: '', message: '' }) }, 4000)
  }

  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-14">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest">Quick Booking</p>
          <h2 className="text-3xl font-extrabold text-white mt-1">Plan Your Trip Now</h2>
          <p className="text-blue-200 mt-2 text-sm">Fill the form and we'll reach you instantly on WhatsApp</p>
        </div>

        {sent ? (
          <div className="bg-white/10 rounded-2xl p-10 text-center text-white">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="text-xl font-bold">Booking request sent on WhatsApp!</h3>
            <p className="text-blue-200 mt-1 text-sm">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-blue-200 text-xs font-medium mb-1 block">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full bg-white/20 text-white placeholder-blue-300 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label className="text-blue-200 text-xs font-medium mb-1 block">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-white/20 text-white placeholder-blue-300 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label className="text-blue-200 text-xs font-medium mb-1 block">Package</label>
              <select
                name="package"
                value={form.package}
                onChange={handleChange}
                className="w-full bg-white/20 text-white border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" className="text-gray-800">Select a package</option>
                {packages.map(p => <option key={p} value={p} className="text-gray-800">{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-blue-200 text-xs font-medium mb-1 block">Message</label>
              <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Travel dates, no. of people..."
                className="w-full bg-white/20 text-white placeholder-blue-300 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-white py-4 rounded-xl font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                💬 Send Booking Request on WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
