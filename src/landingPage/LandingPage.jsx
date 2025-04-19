import React from 'react';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import PlatformDemoSection from "./PlatformDemoSection.jsx";

function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <PlatformDemoSection />
        </div>
    );
}

export default LandingPage;