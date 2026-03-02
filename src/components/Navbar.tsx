import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClose = React.useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100000] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative overflow-hidden transition-all duration-500 ${scrolled ? 'glass shadow-2xl rounded-2xl border border-white/5' : 'bg-transparent'
            }`}>
            <div className="flex justify-between items-center h-16 md:h-20 px-6">

              {/* Logo Section */}
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to="/" className="flex items-center gap-3 group">
                    <img
                      src="/nattireautologo.png"
                      alt="National Tire & Auto"
                      className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="hidden sm:flex flex-col justify-center">
                      <span className="font-display font-bold text-xl tracking-tight block leading-none text-white uppercase group-hover:text-brand-red transition-colors duration-300">NATIONAL</span>
                      <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold text-nowrap">Tire & Auto</span>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Central Menu Trigger & Book Button */}
              <div className="flex items-center gap-4 md:gap-8">

                <button
                  onClick={() => setIsOpen(true)}
                  className="group flex items-center gap-3 text-white hover:text-brand-red transition-colors"
                >
                  <span className="text-sm font-bold tracking-widest uppercase hidden md:block group-hover:tracking-[0.3em] transition-all duration-300">Menu</span>
                  <div className="p-2 md:p-3 rounded-full glass-light border border-white/10 group-hover:border-brand-red/30 transition-all">
                    <Menu className="w-6 h-6" />
                  </div>
                </button>

                <div className="hidden md:block pl-8 border-l border-white/10">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-red/20 flex items-center gap-2 group block"
                    >
                      Book Priority
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>

      <MegaMenu isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
