import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function Many() {
    return (
        <LocationLayout
            city="Many"
            heroImage="https://images.unsplash.com/photo-1502470769865-ebbd80a22a76?auto=format&fit=crop&q=80&w=2000"
            description="Comprehensive auto repair for the Toledo Bend region. Whether you're hauling a boat or commuting to work, we offer reliable transmission and alignment services to keep you moving safely."
            landmarks={[
                {
                    name: "Toledo Bend Reservoir",
                    description: "Whether you're hauling a boat or driving up for the weekend, we guarantee your brakes and powertrain are perfectly optimized."
                },
                {
                    name: "Sabine Theater",
                    description: "Proudly supporting the local traditions of Many with rapid, reliable fleet maintenance and consumer auto repair."
                }
            ]}
        />
    );
}
