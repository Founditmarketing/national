import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'Tires & Alignment', href: '/services/tires-alignment' },
        { name: 'Advanced Auto Repair', href: '/services/advanced-auto-repair' },
        { name: 'Glass & ADAS Calibration', href: '/services/glass-calibration' }
      ]
    },
    { name: 'Commercial & Fleet', href: '/fleet' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/faq' },
  ];

  const handleMobileDropdown = (name: string, e: React.MouseEvent) => {
    if (navLinks.find(l => l.name === name)?.subLinks) {
      e.preventDefault(); // Prevent navigating to the main link if it has sublinks on mobile to open accordion instead. But we want both. Let's keep it simple.
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100000] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden transition-all duration-500 ${scrolled ? 'glass shadow-2xl rounded-2xl' : 'bg-transparent'
          }`}>
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/" className="flex items-center gap-3 group">
                  <img
                    src="/nattireautologo.png"
                    alt="National Tire & Auto"
                    className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  />
                  <div className="hidden sm:flex flex-col justify-center">
                    <span className="font-display font-bold text-xl tracking-tight block leading-none text-white uppercase">NATIONAL</span>
                    <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold text-nowrap">Tire & Auto</span>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group flex items-center h-16">
                  <Link
                    to={link.href}
                    className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-all relative flex items-center gap-1 group-hover:-translate-y-px"
                  >
                    {link.name}
                    {link.subLinks && <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>

                  {/* Desktop Dropdown */}
                  {link.subLinks && (
                    <div className="absolute top-[60px] left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="glass rounded-2xl border border-white/10 p-2 shadow-2xl flex flex-col gap-1">
                        {link.subLinks.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="px-4 py-3 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="ml-2 pl-4 border-l border-white/10">
                <motion.div whileHover={{ scale: 1.05, x: 2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-red/20 flex items-center gap-2 group block"
                  >
                    Book
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
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
            className="lg:hidden mt-2 px-4"
          >
            <div className="glass overflow-hidden shadow-2xl border-t border-white/10 rounded-2xl">
              <div className="w-full px-4 pt-4 pb-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.href}
                        className="flex-1 py-4 px-4 text-base font-bold text-slate-300 hover:text-white transition-all"
                      >
                        {link.name}
                      </Link>
                      {link.subLinks && (
                        <button
                          onClick={(e) => handleMobileDropdown(link.name, e)}
                          className="p-4 text-slate-400 hover:text-white transition-colors"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Sublinks Accordion */}
                    {link.subLinks && (
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-white/5 rounded-xl mx-2 mb-2"
                          >
                            <div className="p-2 flex flex-col gap-1">
                              {link.subLinks.map(sub => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="py-3 px-6 text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="block w-full text-center mt-6 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-brand-red/20"
                  >
                    Book Appointment
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

