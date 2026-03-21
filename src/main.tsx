import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'

import './index.css'
import Home from './Home.tsx'
import Keys from './Keys'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import RepairAndServicing from './RepairAndServicing'
import Parts from './Parts.tsx'
import Helmets from './Helmets.tsx'
import SensorKeys from './SensorKeys.tsx'
import Washing from './Washing.tsx'
import NotFound from './NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/nsm-web-react">
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