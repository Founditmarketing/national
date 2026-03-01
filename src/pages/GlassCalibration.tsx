import React from 'react';
import { motion } from 'motion/react';
import { Focus, Eye, CheckCircle2 } from 'lucide-react';
import Contact from '../components/Contact';

export default function GlassCalibration() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.1),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000"
                        alt="Auto Glass and ADAS"
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
                            <Focus className="w-4 h-4" /> Optical Clarity
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-[1.05]">
                            Glass & <br /> <span className="text-brand-red text-glow-red italic">ADAS Calibration</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium">
                            A modern windshield is effectively a transparent sensor array. We provide OEM-quality glass replacement paired with millimeter-precise ADAS camera recalibration to keep your safety systems online.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-display font-bold mb-8">Crystal <span className="text-brand-red">Clear</span></h2>
                            <div className="space-y-6">
                                {[
                                    "OEM-Equivalent Windshield Replacement",
                                    "Static & Dynamic ADAS Recalibration",
                                    "Mobile Glass Response Fleet",
                                    "Insurance Claims Processing Handled Internally"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-brand-red/10 p-2 rounded-lg mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-brand-red" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item}</h3>
                                            <p className="text-slate-400">Restoring structural integrity and optical perfection.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass p-8 rounded-[2rem] border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Eye className="w-8 h-8 text-brand-red" /> The ADAS Imperative
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Advanced Driver Assistance Systems (Lane Departure, Auto Braking) rely on cameras mounted to your glass. Replacing the glass without re-aiming the optic array is dangerous. Our facility is equipped with the physical targets and diagnostic software required to reset these systems to factory zero.
                            </p>
                            <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-4">
                                <p className="text-brand-red font-bold text-sm uppercase tracking-widest text-center">Do not compromise safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
