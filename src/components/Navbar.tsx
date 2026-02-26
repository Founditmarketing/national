import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Car, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Commercial & Fleet', href: '#commercial' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden transition-all duration-500 ${scrolled ? 'glass shadow-2xl rounded-2xl' : 'bg-transparent'
          }`}>
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex items-center">
              <motion.a
                href="#home"
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/nattireautologo.png"
                  alt="National Tire & Auto"
                  className="h-12 w-auto object-contain"
                />
                <div className="hidden sm:flex flex-col justify-center">
                  <span className="font-display font-bold text-xl tracking-tight block leading-none text-white uppercase">NATIONAL</span>
                  <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold text-nowrap">Tire & Auto</span>
                </div>
              </motion.a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group"
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
              <div className="ml-4 pl-4 border-l border-white/10">
                <motion.a
                  href="#contact"
                  className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-red/20 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 glass-light rounded-xl transition-all"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 px-4"
          >
            <div className="glass overflow-hidden shadow-2xl border-t border-white/10">
              <div className="w-full px-4 pt-4 pb-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center px-4 py-4 rounded-xl text-base font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 text-brand-red" />
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="block w-full text-center mt-6 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-brand-red/20"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
