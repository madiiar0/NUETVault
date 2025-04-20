import React from 'react';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import PlatformDemoSection from "./PlatformDemoSection.jsx";
import WhyUsSection from "./WhyUsSection.jsx";

function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <PlatformDemoSection />
            <WhyUsSection />
        </div>
    );
}

export default LandingPage;