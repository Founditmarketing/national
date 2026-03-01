import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import TiresAlignment from './pages/TiresAlignment';
import AutoRepair from './pages/AutoRepair';
import GlassCalibration from './pages/GlassCalibration';
import About from './pages/About';
import Careers from './pages/Careers';
import FAQPage from './pages/FAQPage';
import CommercialFleet from './pages/CommercialFleet';
import Contact from './pages/Contact';

// Phase 3 Locations & Guides
import Alexandria from './pages/locations/Alexandria';
import Pineville from './pages/locations/Pineville';
import Marksville from './pages/locations/Marksville';
import Leesville from './pages/locations/Leesville';
import Bunkie from './pages/locations/Bunkie';
import Opelousas from './pages/locations/Opelousas';
import AdasGuide from './pages/guides/AdasGuide';
import FleetGuide from './pages/guides/FleetGuide';
import RoadForceGuide from './pages/guides/RoadForceGuide';

// Phase 4 Avalanche Imports
import BrakeRepair from './pages/BrakeRepair';
import AcRepair from './pages/AcRepair';
import CheckEngine from './pages/CheckEngine';
import Suspension from './pages/Suspension';
import Service30k from './pages/maintenance/Service30k';
import Service60k from './pages/maintenance/Service60k';
import Service90k from './pages/maintenance/Service90k';
import TransmissionRebuild from './pages/TransmissionRebuild';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-slate-900 font-sans text-white selection:bg-brand-red selection:text-white antialiased">
          <div className="bg-noise fixed inset-0 z-[99999] pointer-events-none mix-blend-overlay opacity-40"></div>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
            ) : (
              <>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/tires-alignment" element={<TiresAlignment />} />
                    <Route path="/services/advanced-auto-repair" element={<AutoRepair />} />
                    <Route path="/services/glass-calibration" element={<GlassCalibration />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/fleet" element={<CommercialFleet />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Phase 4 Content Avalanche Routes */}
                    <Route path="/services/brake-repair-rotors" element={<BrakeRepair />} />
                    <Route path="/services/ac-repair-recharge" element={<AcRepair />} />
                    <Route path="/services/check-engine-diagnostics" element={<CheckEngine />} />
                    <Route path="/services/suspension-shocks-struts" element={<Suspension />} />
                    <Route path="/services/transmission-rebuild" element={<TransmissionRebuild />} />

                    <Route path="/maintenance/30k-mile-service" element={<Service30k />} />
                    <Route path="/maintenance/60k-mile-service" element={<Service60k />} />
                    <Route path="/maintenance/90k-mile-service" element={<Service90k />} />

                    {/* Hyper-Local Routes */}
                    <Route path="/locations/alexandria" element={<Alexandria />} />
                    <Route path="/locations/pineville" element={<Pineville />} />
                    <Route path="/locations/marksville" element={<Marksville />} />
                    <Route path="/locations/leesville" element={<Leesville />} />
                    <Route path="/locations/bunkie" element={<Bunkie />} />
                    <Route path="/locations/opelousas" element={<Opelousas />} />

                    {/* Pillar Guide Routes */}
                    <Route path="/guides/the-ultimate-guide-to-adas-calibration" element={<AdasGuide />} />
                    <Route path="/guides/commercial-fleet-maintenance-checklist" element={<FleetGuide />} />
                    <Route path="/guides/understanding-road-force-balancing" element={<RoadForceGuide />} />
                  </Routes>
                </main>
                <Footer />
                <ContactWidget />
              </>
            )}
          </AnimatePresence>
        </div>
      </SmoothScroll>
    </Router>
  );
}
