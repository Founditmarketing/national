import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import PricingGrid from '../components/PricingGrid';
import VideoSection from '../components/VideoSection';
import LocationMap from '../components/LocationMap';
import FAQ from '../components/FAQ';
import MultiServiceDiscount from '../components/MultiServiceDiscount';

export default function Home() {
    return (
        <>
            <Hero />
            <MultiServiceDiscount />
            <Brands />
            <PricingGrid />
            <WhyChooseUs />
            <VideoSection />
            <Testimonials />
            <LocationMap />
            <FAQ />
        </>
    );
}
