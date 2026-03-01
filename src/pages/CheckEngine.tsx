import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Activity, Database, ChevronRight } from 'lucide-react';
import Contact from '../components/Contact';

export default function CheckEngine() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-32 bg-slate-900 border-b border-brand-red/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1628172352865-c725ea1223fe?auto=format&fit=crop&q=80&w=2000"
                        alt="Check Engine Diagnostics"
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
                            OBD-II Deep <br />
                            <span className="text-brand-red text-glow-red italic">Diagnostics.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            We don't just clear codes. We isolate the electrical, mechanical, or sensor-level fault causing the check engine light.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-red/30 transition-colors group">
                            <Database className="w-10 h-10 text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Can-Bus & ECU Interrogation</h3>
                            <p className="text-slate-400 mb-6">Utilizing dealership-level scan tools (Autel/Snap-On), we pull live data streams from your vehicle's Engine Control Unit to monitor fuel trims, O2 sensor voltage, and misfire counts in real-time.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-red/20 hover:border-brand-red/50 transition-colors group">
                            <AlertTriangle className="w-10 h-10 text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Emissions & Catalytic Failure</h3>
                            <p className="text-slate-400 mb-6">A blinking check engine light indicates a catastrophic misfire that is actively destroying your catalytic converter. Do not drive the vehicle. We trace ignition coils, injectors, and vacuum leaks to protect your exhaust system.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
