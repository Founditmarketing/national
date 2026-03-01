import React from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Contact from '../components/Contact';

export default function TiresAlignment() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.1),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1578356956799-73fb4dc2b0e6?auto=format&fit=crop&q=80&w=2000"
                        alt="Premium Tire Alignment"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-red text-sm font-bold mb-8 tracking-widest uppercase">
                            <Settings className="w-4 h-4" /> State-of-the-Art Precision
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-[1.05]">
                            Mastery in <span className="text-brand-red text-glow-red italic">Tires & Alignment</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium">
                            Utilizing Hunter Engineering's elite balancing and alignment systems. We don't just change tires; we optimize your vehicle's entire footprint for extreme longevity and safety.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-display font-bold mb-8">The <span className="text-brand-red">National</span> Tire Standard</h2>
                            <div className="space-y-6">
                                {[
                                    "Road Force Elite® Wheel Balancing",
                                    "Hawkeye Elite® 4-Wheel Alignments",
                                    "Performance & Heavy-Duty Tire Mounting",
                                    "Rotations, TPMS Reset, and Flat Repairs"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-brand-red/10 p-2 rounded-lg mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-brand-red" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item}</h3>
                                            <p className="text-slate-400">Precision diagnostics ensure every mile is safely optimized.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass p-8 rounded-[2rem] border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-brand-red" /> Our Guarantee
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                As an authorized dealer for major brands like Michelin, Goodyear, and BFGoodrich, we stand behind the rubber we install. Every alignment comes with a comprehensive printout detailing camber, caster, and toe adjustments, proving our commitment to objective accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
