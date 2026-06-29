import React from 'react';
import PageSEO from '../components/PageSEO';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import LocationMap from '../components/LocationMap';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, DollarSign } from 'lucide-react';

export default function Home() {
    return (
        <>
            <PageSEO
                title="Tires, Auto Repair & Glass in Central Louisiana | National Tire & Auto"
                description="Central Louisiana's premier 30,000 sq. ft. auto facility. Expert tires, alignments, auto repair, glass, and fleet services in Pineville & Alexandria, LA."
                canonical="https://nattireauto.com/"
            />
            <Hero />
            <Brands />
            <WhyChooseUs />
            <Testimonials />
            <LocationMap />
        </>
    );
}
