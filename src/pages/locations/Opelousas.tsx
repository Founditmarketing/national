import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function Opelousas() {
    return (
        <LocationLayout
            city="Opelousas"
            heroImage="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000"
            description="Your trusted local partner for fast, reliable auto repair. We provide the Opelousas community and local fleets with expert mechanical service to keep you safely on the road."
            landmarks={[
                {
                    name: "Evangeline Downs Racetrack",
                    description: "Whether you're visiting the track or commuting daily, we provide rapid, reliable auto diagnostics to keep your horsepower running strong."
                },
                {
                    name: "Le Vieux Village",
                    description: "Proudly supporting the deep historical roots of Opelousas with generational trust and master-certified mechanics."
                }
            ]}
        />
    );
}
