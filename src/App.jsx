import { useState, Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) return (
      <div style={{ background: '#0a0f1e', minHeight: '100vh', color: 'white', padding: 40, fontFamily: 'monospace' }}>
        <h2 style={{ color: '#f87171' }}>⚠️ App Error</h2>
        <pre style={{ color: '#fca5a5', whiteSpace: 'pre-wrap', fontSize: 13 }}>{this.state.error.message}</pre>
        <pre style={{ color: '#6b7280', whiteSpace: 'pre-wrap', fontSize: 11 }}>{this.state.error.stack}</pre>
      </div>
    )
    return this.props.children
  }
}
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
import TemplePackages from './pages/TemplePackages'
import PackageDetail from './pages/PackageDetail'
import FloatingMenu from './components/FloatingMenu'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <ErrorBoundary>
      {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temple" element={<TemplePackages />} />
          <Route path="/kerala" element={<KeralaPackages />} />
          <Route path="/goa" element={<GoaPackages />} />
          <Route path="/international" element={<InternationalPackages />} />
          <Route path="/experiences" element={<SignatureExperiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package/:id" element={<PackageDetail />} />
        </Routes>
        <QuickBookingForm />
        <FloatingMenu />
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  )
}
