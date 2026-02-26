import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Michael T.',
      role: 'Fleet Logistics Director',
      content: 'National Tire & Auto has completely recalibrated our fleet maintenance standards. DOT inspections and tire rotations are now handled under one ceiling—slashing our operational downtime by 30%.',
      rating: 5,
    },
    {
      name: 'Sarah J.',
      role: 'Private Vehicle Owner',
      content: 'I utilized my tax return for a complete vehicle overhaul. Glass replacement, performance tires, and engine diagnostics—all executed in a single afternoon. Institutional quality with local care.',
      rating: 5,
    },
    {
      name: 'David R.',
      role: 'Corporate Fleet Manager',
      content: 'The mobile tire response is a mission-critical asset for our delivery trucks. One blowout during peak hours could derail our entire day. They were on-site and operational within 45 minutes.',
      rating: 5,
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-bold mb-8 uppercase tracking-widest border border-white/5"
          >
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            Verified Excellence
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Institutional Trust in <br />
            <span className="text-brand-red">Central Louisiana.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            From industrial fleet commanders to daily commuters—we are the standard of vehicle resilience for the region.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-red/20 transition-all duration-500 shadow-2xl"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-brand-red/10 transition-colors" />

              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                ))}
              </div>

              <p className="text-slate-300 mb-10 relative z-10 leading-relaxed font-medium italic text-lg">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center text-xl font-bold text-brand-red border border-brand-red/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg">{review.name}</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
