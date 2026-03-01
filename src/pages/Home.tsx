import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
    return (
        <>
            <Hero />
            <Brands />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
        </>
    );
}
