import React from 'react';
import Header from "./Header.jsx";
import logo from "../assets/LogoNuetVault.png";

function LandingPage() {
    return (
        <div>
            <Header />
            <img style={{position: 'absolute', right: 0}} src={logo}></img>
        </div>
    );
}

export default LandingPage;