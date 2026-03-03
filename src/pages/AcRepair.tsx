import React from 'react';
import { motion } from 'motion/react';
import { Wind, Activity, CheckCircle, ChevronRight } from 'lucide-react';
import Contact from '../components/Contact';

export default function AcRepair() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1634860471955-ea2c1affceee?auto=format&fit=crop&q=80&w=2000"
                        alt="A/C Repair & Recharge"
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
                            A/C Evac & <br />
                            <span className="text-brand-blue text-glow-red italic">System Recharge.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            Louisiana summers demand uncompromising climate control. We locate micro-leaks and restore maximum cooling pressure.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Wind className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Freon Recovery & Recharge</h3>
                            <p className="text-slate-400 mb-6">Using advanced R-134a and R-1234yf recovery machines, we vacuum the system, remove moisture, and recharge factory levels of refrigerant with UV dye to track microscopic leaks.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Activity className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Compressor Diagnostics</h3>
                            <p className="text-slate-400 mb-6">If your A/C is blowing warm air, the compressor or clutch may be failing. We test system pressures and electrical inputs to isolate the precise failure point before replacing major components.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
