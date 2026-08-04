import React from 'react';
import PricingGrid from '../components/PricingGrid';
import Contact from '../components/Contact';
import PageSEO from '../components/PageSEO';

export default function Pricing() {
    return (
        <div className="pt-24 min-h-screen bg-slate-900">
            <PageSEO
                title="Auto Repair Pricing | National Tire & Auto"
                description="Transparent, upfront pricing for tires, alignments, brakes, A/C, diagnostics & more. No surprises — see our rates before we turn a wrench."
                canonical="https://www.nattireauto.com/pricing"
            />
            <PricingGrid />
            <Contact />
        </div>
    );
}
