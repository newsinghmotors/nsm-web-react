import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'

import Footer from './Footer.tsx'
import Header from './Header.tsx'
import Helmets from './Helmets.tsx'
import Home from './Home.tsx'
import './index.css'
import Keys from './Keys'
import NotFound from './NotFound.tsx'
import Parts from './Parts.tsx'
import RepairAndServicing from './RepairAndServicing'
import SensorKeys from './SensorKeys.tsx'
import Washing from './Washing.tsx'

// Component to handle 404 redirect navigation
function RedirectHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    // Check for redirect from 404.html (via query param) or sessionStorage
    const params = new URLSearchParams(window.location.search)
    const redirect = params.get('redirect') || sessionStorage.getItem('redirect')
    
    if (redirect) {
      sessionStorage.removeItem('redirect')
      // Clean up the URL before navigating
      window.history.replaceState({}, document.title, window.location.pathname.split('?')[0])
      navigate('/' + redirect)
    }
  }, [navigate])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <RedirectHandler />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Keys" element={<Keys />} />
        <Route path="/RepairAndServicing" element={<RepairAndServicing />} />
        <Route path="/Parts" element={<Parts />} />
        <Route path="/Helmets" element={<Helmets />} />
        <Route path="/SensorKeys" element={<SensorKeys />} />
        <Route path="/Washing" element={<Washing />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
