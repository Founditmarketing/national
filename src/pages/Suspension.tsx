import React from 'react';
import { motion } from 'motion/react';
import { MoveUpRight, ShieldAlert, Settings } from 'lucide-react';
import Contact from '../components/Contact';

export default function Suspension() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542365851-4043232c7fbd?auto=format&fit=crop&q=80&w=2000"
                        alt="Suspension & Shocks"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Suspension & <br />
                            <span className="text-brand-blue text-glow-red italic">Strut Assemblies.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            Restore factory ride quality, eliminate body roll, and ensure your tires maintain perfectly even road contact.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <MoveUpRight className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Shocks & Struts</h3>
                            <p className="text-slate-400 mb-6">Worn struts increase braking distance dramatically and cause severe tire cupping. We install premium Monroe and Bilstein assemblies to stabilize your chassis against Louisiana pothole damage.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 hover:border-brand-blue/50 transition-colors group">
                            <Settings className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Linkages & Control Arms</h3>
                            <p className="text-slate-400 mb-6">Clunking sounds over bumps? A loose front end is a major safety hazard. We inspect and replace worn ball joints, tie rod ends, and sway bar bushings to tighten steering response.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
