import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Wrench, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

interface LocationLayoutProps {
    city: string;
    heroImage: string;
    description: string;
}

export default function LocationLayout({ city, heroImage, description }: LocationLayoutProps) {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hyper-Local Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-red/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src={heroImage}
                        alt={`${city} Auto Repair`}
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
                            <MapPin className="w-4 h-4" /> Serving {city}, LA
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Master Mechanics in <br />
                            <span className="text-brand-red text-glow-red italic">{city}.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Local Authority Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-red/30 transition-colors group">
                            <Wrench className="w-10 h-10 text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">{city}'s Transmission Experts</h3>
                            <p className="text-slate-400 mb-6">We provide dealership-level diagnostics and complete engine overhauls for residents of {city}. Never guess with your vehicle's health.</p>
                            <Link to="/services/advanced-auto-repair" className="text-brand-red font-bold text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                Deep Diagnostics <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-red/20 shadow-xl shadow-brand-red/5 hover:border-brand-red/50 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Hunter Elite Alignments</h3>
                            <p className="text-slate-400 mb-6">Potholes in {city}? We use specialized Road Force balancers to guarantee a perfectly smooth ride and protect your tire investment.</p>
                            <Link to="/services/tires-alignment" className="text-brand-red font-bold text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                Alignment Shop <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-red/30 transition-colors group lg:col-span-1 md:col-span-2">
                            <MapPin className="w-10 h-10 text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Fleet Services for {city}</h3>
                            <p className="text-slate-400 mb-6">If you operate a commercial fleet or heavy-duty trucks around {city}, our specialized bays are built for rapid turnaround and institutional invoicing.</p>
                            <Link to="/fleet" className="text-brand-red font-bold text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                Fleet Priority <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
