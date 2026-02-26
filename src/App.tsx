import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Commercial from './components/Commercial';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white selection:bg-brand-red selection:text-white antialiased">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <Brands />
              <Services />
              <WhyChooseUs />
              <Commercial />
              <Testimonials />
              <FAQ />
              <Contact />
            </main>
            <Footer />
            <ContactWidget />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
