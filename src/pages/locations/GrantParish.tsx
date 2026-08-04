import React from 'react';
import PageSEO from '../../components/PageSEO';
import LocationLayout from '../../layouts/LocationLayout';

export default function GrantParish() {
    return (
        <>
            <PageSEO
                title="Auto Repair in Grant Parish, LA | National Tire & Auto"
                description="Serving all of Grant Parish with mobile tire dispatch, advanced auto mechanics, and fleet maintenance for rural and commercial drivers."
                canonical="https://www.nattireauto.com/locations/grant-parish"
            />
            <LocationLayout
                city="Grant Parish"
                heroImage="https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&q=80&w=2000"
                description="Serving the entirety of Grant Parish with rapid mobile tire dispatch, advanced auto mechanics, and comprehensive commercial fleet services."
                landmarks={[
                    {
                        name: "Stuart Lake Recreation Area",
                        description: "Equipping your vehicle for off-road recreation or family weekends at the lake with premium all-terrain tires and suspension service."
                    },
                    {
                        name: "Grant Parish Courthouse",
                        description: "Proudly supporting the municipal center of Grant Parish with rapid, reliable fleet maintenance and consumer auto repair."
                    }
                ]}
            />
        </>
    );
}
