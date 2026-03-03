import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function Oakdale() {
    return (
        <LocationLayout
            city="Oakdale"
            heroImage="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000"
            description="Dependable auto repair and maintenance for drivers in Oakdale. We offer fast turnarounds, preventative care, and specialized engine and transmission repairs."
            landmarks={[
                {
                    name: "Allen Parish Community City",
                    description: "Keeping our neighboring Allen Parish residents safe on the road with thorough, dealership-level diagnostic testing."
                },
                {
                    name: "Oakdale Municipal Engine Hubs",
                    description: "Trusted by locals and municipal workers alike for generational consistency in auto mechanics and transmission care."
                }
            ]}
        />
    );
}
