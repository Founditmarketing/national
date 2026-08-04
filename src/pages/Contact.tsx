import React from 'react';
import ContactComponent from '../components/Contact';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

export default function Contact() {
    return (
        <div className="pt-20">
            <PageSEO
                title="Contact Us & Schedule Service | National Tire & Auto"
                description="Reach National Tire & Auto to schedule a repair, ask a question, or find one of our Central Louisiana locations. We respond fast."
                canonical="https://www.nattireauto.com/contact"
            />
            <ContactComponent />
            <FAQ />
        </div>
    );
}
