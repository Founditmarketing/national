import React from 'react';
import { motion } from 'motion/react';
import { Cog, Zap, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export default function TransmissionRebuild() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-red/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1635835266710-54cc4fb08d91?auto=format&fit=crop&q=80&w=2000"
                        alt="Transmission Remanufacturing"
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
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-red text-sm font-bold mb-8 mx-auto tracking-widest uppercase shadow-lg shadow-brand-red/10">
                            <Cog className="w-4 h-4" /> Powered By National Transmission
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Remanufactured. <br />
                            <span className="text-brand-red text-glow-red italic">Never Just Rebuilt.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium mb-10">
                            Many people are confused regarding the difference between remanufactured and rebuilt. We remanufacture to the highest of standards for a 1-3 day rapid turnaround.
                        </p>
                        <a
                            href="https://nattransmission.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-bold transition-colors"
                        >
                            Visit National Transmission <Zap className="w-4 h-4 text-orange-500" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Rebuilt vs Remanufactured Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-red/30 transition-colors group">
                            <WrenchIcon className="w-10 h-10 text-slate-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">The Flaw in "Rebuilding"</h3>
                            <p className="text-slate-400 mb-6">Rebuilding simply involves taking the failed component, cleaning it, and replacing only the part or parts that have actively failed. This leaves older components inside the transmission that are highly likely to fail next, creating a vicious cycle of repairs.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-red/20 shadow-xl shadow-brand-red/5 hover:border-brand-red/50 transition-colors group">
                            <Cog className="w-10 h-10 text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">The Science of Remanufacturing</h3>
                            <p className="text-slate-400 mb-6">Remanufacturing is much more involved. The entire transmission is stripped to its core. Every single tolerance is checked against OEM specifications. Friction discs, seals, and bands are wholesale replaced so that the component is as close to brand-new factory status as possible.</p>
                        </div>

                    </div>

                    {/* Brand Pillars */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, title: "1-3 Day Turn Around", desc: "We prioritize velocity because we know downtime costs you money." },
                            { icon: CheckCircle, title: "Over 20 Years Experience", desc: "Over two decades of specific, high-level transmission engineering." },
                            { icon: ShieldIcon, title: "Nationwide Warranty", desc: "Our remanufactured transmissions are backed across the country." },
                            { icon: Zap, title: "Certified & Licensed", desc: "ASE Certified mechanics specializing exclusively in drivetrains." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                                <feature.icon className="w-8 h-8 text-brand-red mb-4" />
                                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Contact />
        </div>
    );
}

function WrenchIcon(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
}

function ShieldIcon(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
}
