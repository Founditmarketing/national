import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, ArrowRight, Star, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent)]" />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        <img
          src="/nattireautopic.png"
          alt="National Tire & Auto Workshop"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-red text-sm font-bold mb-8 shadow-2xl"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_rgba(220,38,38,1)]"></span>
              CENTRAL LOUISIANA'S PREMIER AUTO HUB
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Mastery in Motion, <br />
              <span className="text-brand-red text-glow-red">All Under One Roof.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium"
            >
              A synergy of three specialized giants. From precision engine work to crystal-clear windshields—National Tire & Auto defines the new standard in vehicle care.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.a
                href="#contact"
                className="group relative inline-flex justify-center items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-brand-red/30 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Book Expert Service</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex justify-center items-center gap-3 glass-light hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="glass p-8 rounded-[2.5rem] relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-brand-red mb-2 bg-brand-red/10 w-fit p-3 rounded-2xl">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-white leading-none">4.9/5</h4>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Customer Rated</p>
                </div>
                <div className="space-y-2">
                  <div className="text-emerald-500 mb-2 bg-emerald-500/10 w-fit p-3 rounded-2xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-white leading-none">Same-Day</h4>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Select Services</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-brand-red/10 transition-colors">
                    <MapPin className="w-5 h-5 text-slate-400 group-hover:text-brand-red transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Main Street Depot</p>
                    <p className="text-slate-500 text-xs mt-0.5">Alexandria, Central LA</p>
                  </div>
                </div>
              </div>

              {/* Tax Time Callout Inside Card */}
              <div className="mt-8 bg-brand-red/5 border border-brand-red/20 rounded-2xl p-4">
                <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-brand-red shrink-0" />
                  <p className="text-sm text-slate-300">
                    <span className="text-white font-bold">Tax Time Special:</span> The Complete Overhaul package is now available.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
