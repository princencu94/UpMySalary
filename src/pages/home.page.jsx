import React from 'react';
import HeroSection from '../components/hero-section/hero-component';
import ServicesList from '../components/services-list/services-list.component';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <ServicesList/>
        </div>
    )
}

export default HomePage;