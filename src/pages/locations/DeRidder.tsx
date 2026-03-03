import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function DeRidder() {
    return (
        <LocationLayout
            city="DeRidder"
            heroImage="https://images.unsplash.com/photo-1490902931801-d6f80ca94f04?auto=format&fit=crop&q=80&w=2000"
            description="Your dependable auto repair shop near DeRidder. We handle everything from heavy-duty engine repairs and electrical diagnostics to keeping your A/C blowing cold."
            landmarks={[
                {
                    name: "Gothic Jail",
                    description: "We are deeply tied to the DeRidder community, preserving local history while servicing the modern vehicles that drive past it."
                },
                {
                    name: "Beauregard Parish Airport",
                    description: "Ensuring personal and commercial vehicles are ready for the longest hauls, providing priority alignment and tire balancing."
                }
            ]}
        />
    );
}
