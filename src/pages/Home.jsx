import { Link } from 'react-router-dom'
import { waBooking } from '../utils/whatsapp'

const categories = [
  { label: 'Kerala Packages', icon: '🌴', to: '/kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80' },
  { label: 'Honeymoon Packages', icon: '💑', to: '/kerala', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
  { label: 'Family Packages', icon: '👨‍👩‍👧‍👦', to: '/kerala', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80' },
  { label: 'Temple Packages', icon: '🛕', to: '/kerala', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80' },
  { label: 'Goa Packages', icon: '🏖️', to: '/goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80' },
  { label: 'International Packages', icon: '🌍', to: '/international', img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80' },
]

const testimonials = [
  { name: 'Priya Sharma', location: 'Chennai', text: 'Amazing Kerala trip! Everything was perfectly organized. The houseboat experience was unforgettable.', rating: 5 },
  { name: 'Rajesh Kumar', location: 'Bangalore', text: 'Saravana Travels made our honeymoon truly special. Highly recommend their packages!', rating: 5 },
  { name: 'Meena Devi', location: 'Coimbatore', text: 'The temple tour was spiritually enriching. Great service and very affordable pricing.', rating: 5 },
  { name: 'Arjun Nair', location: 'Hyderabad', text: 'Goa trip with friends was a blast! Well-planned itinerary and excellent support throughout.', rating: 5 },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,50,0.55), rgba(0,0,50,0.55)), url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-blue-300 font-medium mb-3 tracking-widest text-sm uppercase">Welcome to Saravana Travels</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Explore the <span className="text-blue-400">Divine Serenity</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Discover breathtaking destinations, spiritual journeys, and unforgettable experiences crafted just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kerala"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              View Packages
            </Link>
            <button
              onClick={() => window.open(waBooking({ message: 'I would like to book a tour package. Please help me.' }), '_blank')}
              className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              📲 Book Now
            </button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>✅ 500+ Happy Travelers</span>
            <span>✅ Best Price Guarantee</span>
            <span>✅ 24/7 Support</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-2xl">↓</div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-1">Choose Your Dream Destination</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map(cat => (
              <Link
                key={cat.label}
                to={cat.to}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img src={cat.img} alt={cat.label} className="w-full h-40 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-2xl">{cat.icon}</span>
                    <p className="text-white font-bold text-sm md:text-base mt-1">{cat.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">Travel with Confidence</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: 'Best Prices', desc: 'Unbeatable deals on all packages' },
              { icon: '🛡️', title: 'Safe Travel', desc: 'Fully insured & verified operators' },
              { icon: '📞', title: '24/7 Support', desc: 'Always here when you need us' },
              { icon: '⭐', title: '5-Star Rated', desc: '500+ happy travelers trust us' },
            ].map(item => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest">Testimonials</p>
            <h2 className="text-3xl font-bold text-white mt-1">What Our Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-white">
                <div className="flex mb-2">
                  {Array(t.rating).fill(0).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-sm text-blue-100 italic mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-blue-300">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Ready to Plan Your Trip?</h2>
          <p className="text-gray-500 mb-8">Get in touch with us and we'll craft the perfect itinerary for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919442855620"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
