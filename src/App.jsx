import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuickBookingForm from './components/QuickBookingForm'
import IntroAnimation from './components/IntroAnimation'
import Home from './pages/Home'
import KeralaPackages from './pages/KeralaPackages'
import GoaPackages from './pages/GoaPackages'
import InternationalPackages from './pages/InternationalPackages'
import SignatureExperiences from './pages/SignatureExperiences'
import Contact from './pages/Contact'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kerala" element={<KeralaPackages />} />
          <Route path="/goa" element={<GoaPackages />} />
          <Route path="/international" element={<InternationalPackages />} />
          <Route path="/experiences" element={<SignatureExperiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <QuickBookingForm />
        <Footer />
      </BrowserRouter>
    </>
  )
}
