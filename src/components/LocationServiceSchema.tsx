import React from 'react';

interface LocationServiceSchemaProps {
    city: string;
}

/**
 * The business has a single physical facility (Pineville, LA). This schema must not
 * fabricate a distinct LocalBusiness/address per service area — Google treats fake or
 * duplicated location listings as spam. Instead it declares a Service the real business
 * provides, scoped to the specific city each location page targets.
 */
export default function LocationServiceSchema({ city }: LocationServiceSchemaProps) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Auto Repair & Tire Service",
        "name": `Auto Repair & Tire Service serving ${city}, LA`,
        "areaServed": {
            "@type": "City",
            "name": city,
        },
        "provider": {
            "@type": "AutoRepair",
            "name": "National Automotive Group",
            "telephone": "+1-318-442-2003",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "400 Hwy 165 South",
                "addressLocality": "Pineville",
                "addressRegion": "LA",
                "postalCode": "71360",
                "addressCountry": "US"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
