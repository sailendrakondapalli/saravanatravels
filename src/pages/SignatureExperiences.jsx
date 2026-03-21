import { useEffect } from 'react'
import { waBooking } from '../utils/whatsapp'

const experiences = [
  {
    title: 'Treehouse Stay',
    location: 'Munnar, Kerala',
    icon: '🌳',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    desc: 'Wake up amidst lush tea gardens in a cozy treehouse. Experience the misty mornings and breathtaking views of Munnar hills.',
    tags: ['Nature', 'Romantic', 'Unique Stay'],
    badge: 'Most Popular',
  },
  {
    title: 'Periyar Forest Experience',
    location: 'Thekkady, Kerala',
    icon: '🐘',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
    desc: 'Boat safari on Periyar Lake, jungle trekking, and wildlife spotting. Encounter elephants, bison, and exotic birds in their natural habitat.',
    tags: ['Wildlife', 'Adventure', 'Safari'],
    badge: 'Adventure Pick',
  },
  {
    title: 'Varkala Cliff Stay',
    location: 'Varkala, Kerala',
    icon: '🏖️',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    desc: 'Stay on the dramatic red laterite cliffs overlooking the Arabian Sea. Enjoy yoga sessions, Ayurvedic treatments, and stunning sunsets.',
    tags: ['Beach', 'Wellness', 'Scenic'],
    badge: 'Trending',
  },
  {
    title: 'Kannur Theyyam Festival',
    location: 'Kannur, Kerala',
    icon: '🎭',
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
    desc: 'Witness the ancient ritualistic art form of Theyyam — a divine dance performance that connects humans with the divine.',
    tags: ['Culture', 'Spiritual', 'Festival'],
    badge: 'Cultural Gem',
  },
  {
    title: 'Premium Scenic Locations',
    location: 'Kerala & Beyond',
    icon: '📸',
    img: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80',
    desc: 'Curated visits to the most photogenic spots — from misty hill stations to serene backwaters and pristine beaches.',
    tags: ['Photography', 'Scenic', 'Premium'],
    badge: 'Premium',
  },
]

const badgeColors = {
  'Most Popular': 'bg-blue-600',
  'Adventure Pick': 'bg-green-600',
  'Trending': 'bg-orange-500',
  'Cultural Gem': 'bg-purple-600',
  'Premium': 'bg-yellow-500',
}

export default function SignatureExperiences() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,20,60,0.65), rgba(0,20,60,0.65)), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">Signature Experiences</h1>
          <p className="text-blue-200 mt-2">Moments that stay with you forever</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Handpicked for You</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-1">Extraordinary Experiences</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">Go beyond the ordinary. These curated experiences are designed to create memories that last a lifetime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map(exp => (
            <div key={exp.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="relative">
                <img src={exp.img} alt={exp.title} className="w-full h-52 object-cover" />
                <span className={`absolute top-3 left-3 ${badgeColors[exp.badge]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {exp.badge}
                </span>
                <div className="absolute bottom-3 left-3 text-3xl">{exp.icon}</div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 text-sm font-medium mt-1">📍 {exp.location}</p>
                <p className="text-gray-500 text-sm mt-2 flex-1">{exp.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {exp.tags.map(tag => (
                    <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(waBooking({ packageName: `Signature Experience: ${exp.title}`, message: exp.location }), '_blank')}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm font-semibold text-center transition-colors"
                >
                  📲 Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Want a custom experience tailored just for you?</p>
          <a
            href="https://wa.me/918838691200"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
          >
            💬 Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
