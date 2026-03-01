import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Zap, CheckCircle2 } from 'lucide-react';
import Contact from '../components/Contact';

export default function AutoRepair() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1619642751056-31db591ced6b?auto=format&fit=crop&q=80&w=2000"
                        alt="Advanced Engine Diagnostics"
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
                            <Wrench className="w-4 h-4" /> Master Technicians
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-[1.05]">
                            Advanced <span className="text-brand-red text-glow-red italic">Auto Repair</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium">
                            From sophisticated computer diagnostics to complete engine overhauls. We employ strictly ASE-certified master mechanics capable of resolving the most complex modern automotive failures.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="glass p-8 rounded-[2rem] border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Zap className="w-8 h-8 text-brand-red" /> No Guesswork
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Modern vehicles are rolling computers. We utilize dealership-level scan tools (Snap-On, Autel) to interface directly with your ECU, TCP, and BCM modules. We diagnose the root cause, not just the symptom.
                            </p>
                            <img src="https://images.unsplash.com/photo-1486006396193-471a449103c0?auto=format&fit=crop&q=80&w=1000" alt="Tech" className="w-full h-48 object-cover rounded-xl border border-white/10 shadow-2xl" />
                        </div>

                        <div>
                            <h2 className="text-4xl font-display font-bold mb-8">Comprehensive <span className="text-brand-red">Diagnostics</span></h2>
                            <div className="space-y-6">
                                {[
                                    "Engine Performance & Drivability",
                                    "Transmission Services & Rebuilds",
                                    "Brake Systems & ABS Modules",
                                    "Heating & Air Conditioning (A/C)"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-brand-red/10 p-2 rounded-lg mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-brand-red" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item}</h3>
                                            <p className="text-slate-400">Institutional-grade fluids, OEM parts, and rigorous testing protocols.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
