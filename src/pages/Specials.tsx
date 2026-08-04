import React from 'react';
import MultiServiceDiscount from '../components/MultiServiceDiscount';
import Contact from '../components/Contact';
import PageSEO from '../components/PageSEO';

export default function Specials() {
    return (
        <div className="pt-24 min-h-screen bg-slate-900">
            <PageSEO
                title="Specials & Multi-Service Discounts | National Tire & Auto"
                description="Save more when you bundle services. View current deals on tires, alignments, brakes & full-service packages at National Tire & Auto."
                canonical="https://www.nattireauto.com/specials"
            />
            <MultiServiceDiscount />
            <Contact />
        </div>
    );
}
