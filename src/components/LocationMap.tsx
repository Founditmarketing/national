import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

export default function LocationMap() {
  const locations = [
    {
      id: 'alexandria',
      name: 'Alexandria Hub',
      address: '3608 Masonic Dr, Alexandria, LA 71301',
      phone: '(318) 442-9513',
      hours: 'Opens 7:30 AM Mon',
      query: '3608+Masonic+Dr,+Alexandria,+LA+71301'
    },
    {
      id: 'transmission',
      name: 'National Transmission',
      address: '1521 MacArthur Dr, Alexandria, LA 71301',
      phone: '(318) 445-2244',
      hours: 'Opens 8:00 AM Mon',
      query: '1521+MacArthur+Dr,+Alexandria,+LA+71301'
    },
    {
      id: 'pineville',
      name: 'Pineville Hub',
      address: '1400 Hwy 165 S, Pineville, LA 71360',
      phone: '(318) 640-1010', // Standard placeholder, will update if they have the real one
      hours: 'Opens 8:00 AM Mon',
      query: '1400+Hwy+165+S,+Pineville,+LA+71360'
    }
  ];

  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-start">
            
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest border border-brand-blue/20">
               Where to find us
             </div>
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
               Conveniently Located Across <br />
               <span className="text-brand-blue italic">Central Louisiana.</span>
             </h2>

             <div className="space-y-4">
                {locations.map((loc) => (
                 <div 
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`cursor-pointer group flex flex-col gap-3 p-5 rounded-2xl border transition-all ${activeLocation.id === loc.id ? 'bg-brand-blue/10 border-brand-blue/40 shadow-[0_0_20px_rgba(220,38,38,0.1)]' : 'bg-slate-800/80 border-white/10 hover:border-brand-blue/30 hover:bg-slate-800'}`}
                 >
                    <div className="flex items-center gap-3">
                        <MapPin className={`w-5 h-5 shrink-0 ${activeLocation.id === loc.id ? 'text-brand-blue' : 'text-slate-400 group-hover:text-brand-blue transition-colors'}`} />
                        <h4 className={`font-bold transition-colors ${activeLocation.id === loc.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{loc.name}</h4>
                    </div>

                    <AnimatePresence>
                        {activeLocation.id === loc.id && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-8 overflow-hidden"
                            >
                                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                                   {loc.address}
                                </p>
                                
                                <div className="flex flex-col gap-2 mb-4 text-xs font-medium text-slate-400">
                                    {loc.phone && (
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-3 h-3 text-emerald-500" /> {loc.phone}
                                        </div>
                                    )}
                                    {loc.hours && (
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3 h-3 text-amber-500" /> {loc.hours}
                                        </div>
                                    )}
                                </div>

                                <a 
                                   href={`https://www.google.com/maps/dir/?api=1&destination=${loc.query}`} 
                                   target="_blank" 
                                   rel="noreferrer"
                                   className="inline-flex items-center justify-center w-full bg-slate-950 p-2 rounded-lg gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-white border border-white/5 hover:border-brand-blue/50 transition-all"
                                >
                                    <Navigation className="w-3 h-3" /> Get Directions
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                 </div>
                ))}

                 <div className="pt-4 border-t border-white/5 mt-4">
                     <p className="text-sm font-medium text-slate-400 leading-relaxed">
                         Proudly serving <span className="text-white font-bold">Alexandria, Pineville, Marksville, Leesville,</span> and 6 other communities with dealership-level care.
                     </p>
                 </div>
             </div>
          </motion.div>

          {/* Map Embed Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass sticky top-32"
          >
             {/* Note: In a real app we'd use a legitimate Google Maps API key via @react-google-maps/api or iframe. 
                 Since we don't have one, we use a structured iframe embed pointing to the general area. */}
            <iframe 
                src={`https://maps.google.com/maps?q=${activeLocation.query}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.8] invert-[0.9] hue-rotate-180 contrast-125 opacity-80 transition-opacity duration-500" // Styling for dark mode effect
            ></iframe>
            
            {/* Protective Overlay to ensure UI theme matches slightly better */}
            <div className="absolute inset-0 pointer-events-none bg-brand-blue/5 mix-blend-overlay" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
