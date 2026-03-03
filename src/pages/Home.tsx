import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import MultiServiceDiscount from '../components/MultiServiceDiscount';

export default function Home() {
    return (
        <>
            <Hero />
            <MultiServiceDiscount />
            <Brands />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
        </>
    );
}
