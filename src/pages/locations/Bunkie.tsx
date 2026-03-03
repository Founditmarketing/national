import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function Bunkie() {
    return (
        <LocationLayout
            city="Bunkie"
            heroImage="https://images.unsplash.com/photo-1503375860710-e7f093aeeeed?auto=format&fit=crop&q=80&w=2000"
            description="Bringing our top-rated auto repair services to Bunkie. Trust your vehicle to experienced mechanics who prioritize honest repairs and clear, upfront pricing."
            landmarks={[
                {
                    name: "Haas Auditorium",
                    description: "Attending a community event? Rest assured knowing our master technicians are right around the corner for any automotive needs."
                },
                {
                    name: "Bunkie Depot",
                    description: "Just as the railway connected Bunkie to the state, our modern alignment and tire services keep our locals connected to the road."
                }
            ]}
        />
    );
}
