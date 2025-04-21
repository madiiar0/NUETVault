import React from 'react';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import PlatformDemoSection from "./PlatformDemoSection.jsx";
import WhyUsSection from "./WhyUsSection.jsx";
import RoadmapSection from "./RoadmapSection.jsx";
import PricingSection from "./PricingSection.jsx";

function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <PlatformDemoSection />
            <WhyUsSection />
            <RoadmapSection />
            <PricingSection />
        </div>
    );
}

export default LandingPage;