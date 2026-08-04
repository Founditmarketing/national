import React from 'react';
import ServicesComponent from '../components/Services';
import Contact from '../components/Contact';
import PageSEO from '../components/PageSEO';

export default function Services() {
    return (
        <div className="pt-20">
            <PageSEO
                title="Auto Repair Services | National Tire & Auto"
                description="Tires, alignments, brakes, A/C, glass calibration, engine repair & more. Central Louisiana's full-service automotive group under one roof."
                canonical="https://www.nattireauto.com/services"
            />
            <ServicesComponent />
            <Contact />
        </div>
    );
}
