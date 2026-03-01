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
import CommercialFleet from './pages/CommercialFleet';
import Contact from './pages/Contact';

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
                    <Route path="/fleet" element={<CommercialFleet />} />
                    <Route path="/contact" element={<Contact />} />
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
