import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
            
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest border border-brand-blue/20">
               Visit Us
             </div>
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
               Conveniently Located in <br />
               <span className="text-slate-500">Central Louisiana.</span>
             </h2>
             <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl glass-light border border-white/5 bg-white/5">
                    <MapPin className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                    <div>
                        <h4 className="text-white font-bold mb-1">National Tire & Auto Hub</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                           1400 Hwy 165 S<br />
                           Pineville, LA 71360
                        </p>
                        <a 
                           href="https://maps.google.com/?q=1400+Hwy+165+S,+Pineville,+LA+71360" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-white transition-colors"
                        >
                            <Navigation className="w-3 h-3" /> Get Directions
                        </a>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Map Embed Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass"
          >
             {/* Note: In a real app we'd use a legitimate Google Maps API key via @react-google-maps/api or iframe. 
                 Since we don't have one, we use a structured iframe embed pointing to the general area. */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3399.7047124316946!2d-92.42111518420959!3d31.311756081467554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862f9ebfa6c2beaf%3A0xe4caeb0a57af3cc6!2sPineville%2C%20LA!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.8] invert-[0.9] hue-rotate-180 contrast-125 opacity-80" // Styling for dark mode effect
            ></iframe>
            
            {/* Protective Overlay to ensure UI theme matches slightly better */}
            <div className="absolute inset-0 pointer-events-none bg-brand-blue/5 mix-blend-overlay" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
