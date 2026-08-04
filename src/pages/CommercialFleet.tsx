import React from 'react';
import Commercial from '../components/Commercial';
import Contact from '../components/Contact';
import PageSEO from '../components/PageSEO';

export default function CommercialFleet() {
    return (
        <div className="pt-20">
            <PageSEO
                title="Commercial Fleet Service | National Tire & Auto"
                description="Keep your fleet moving. National Tire & Auto offers preventative maintenance, tires, brakes, and full-service repair for commercial fleets."
                canonical="https://www.nattireauto.com/fleet"
            />
            <Commercial />
            <Contact />
        </div>
    );
}
