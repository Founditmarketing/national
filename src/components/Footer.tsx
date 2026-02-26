import React from 'react';
import { Car, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/nattireautologo.png"
                alt="National Tire & Auto"
                className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-slate-400 max-w-sm font-medium leading-relaxed text-lg mb-8">
              Central Louisiana's premier destination for tires, auto repair, glass, and fleet services. Precise engineering for every asset.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red/10 hover:border-brand-red/30 transition-all text-slate-400 hover:text-brand-red">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-widest text-xs">Strategic Links</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#home" className="hover:text-brand-red transition-colors">Home Terminal</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Service Sectors</a></li>
              <li><a href="#commercial" className="hover:text-brand-red transition-colors">Commercial Fleet</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact HQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-widest text-xs">Consolidated Brands</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li className="text-slate-500 hover:text-white transition-colors cursor-default">National Tire & Auto</li>
              <li className="text-slate-500 hover:text-white transition-colors cursor-default">Fast Glass</li>
              <li className="text-slate-500 hover:text-white transition-colors cursor-default">National Autoplex</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-600">
            &copy; {new Date().getFullYear()} National Tire & Auto. Institutional Resilience.
          </p>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="text-slate-600 hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="text-slate-600 hover:text-white transition-colors">Terms of Operations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
