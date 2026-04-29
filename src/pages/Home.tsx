import React from 'react';
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
            <Hero />
            <Brands />
            <WhyChooseUs />
            <Testimonials />
            <LocationMap />
        </>
    );
}
