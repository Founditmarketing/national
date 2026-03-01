import React from 'react';
import { motion } from 'motion/react';
import { Clock, Wrench, ShieldCheck, ThumbsUp, Activity, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Structural Efficiency',
      description: 'Unified workflow eliminates redundant appointments by staging multiple services in a single visit.',
      icon: <Activity className="w-6 h-6" />,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Master Technicians',
      description: 'Specialists across three disciplines—mechanics, heavy-duty tires, and glass engineering.',
      icon: <Wrench className="w-6 h-6" />,
      color: 'text-brand-red',
      bg: 'bg-brand-red/10'
    },
    {
      title: 'Institutional Quality',
      description: 'Comprehensive warranties and state-of-the-art diagnostics ensure long-term vehicle resilience.',
      icon: <ShieldCheck className="w-6 h-6" />,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Alexandria Roots',
      description: 'Locally owned, family-driven, and deeply embedded in Central Louisiana automotive culture.',
      icon: <Users className="w-6 h-6" />,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight leading-tight">
              Why the Region Trusts <br />
              <span className="text-brand-red">National Tire & Auto.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed font-medium">
              We aren't just another repair shop. We are a high-performance ecosystem designed to scale with your automotive needs—from personal daily drivers to heavy commercial fleets.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-4 group"
                >
                  <div className={`w-12 h-12 ${feature.bg} rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <img
                  src="/nattireautopic2.jpeg"
                  alt="National Tire & Auto Shop"
                  className="w-full h-80 object-cover rounded-[2.5rem] border border-white/10 shadow-2xl"
                />
                <div className="glass p-6 rounded-[2rem] border border-white/10 relative overflow-hidden flex items-center gap-6 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 via-brand-red/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle className="text-white/10 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
                      <motion.circle
                        className="text-brand-red stroke-current drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        initial={{ strokeDasharray: 251.2, strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 251.2 - (251.2 * 0.98) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      ></motion.circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">98<span className="text-[10px] text-brand-red">%</span></span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-white font-bold text-lg leading-tight mb-1">Satisfaction</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Client Score</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="/nattireautopic4.jpeg"
                  alt="Precision Service"
                  className="w-full h-[400px] object-cover rounded-[2.5rem] border border-white/10 shadow-2xl"
                />
                <div className="bg-brand-red p-6 rounded-[2rem] shadow-2xl shadow-brand-red/20 relative overflow-hidden flex items-center gap-5 group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle className="text-black/10 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
                      <motion.circle
                        className="text-white stroke-current drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        initial={{ strokeDasharray: 251.2, strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 251.2 - (251.2 * 1) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
                      ></motion.circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">20+</span>
                    </div>
                  </div>
                  <div className="relative z-10 space-y-0.5 mt-0.5">
                    <p className="text-white font-bold text-lg leading-none">Years</p>
                    <p className="text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] leading-none">Expertise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute badge overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded-[2rem] glass-light hidden sm:block">
              <div className="bg-slate-900/90 py-4 px-8 rounded-[1.8rem] text-center border border-white/10 shadow-2xl">
                <div className="text-2xl font-display font-bold text-white whitespace-nowrap">Local & Legacy</div>
                <div className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">Family Owned</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
