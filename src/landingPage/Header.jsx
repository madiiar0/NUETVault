import React from 'react';
import { useState } from 'react';
import style from "../landingPageStyle/Header.module.css";
import logo from "../assets/LogoNuetVault.png";

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header className={style.header}>
            <a href="#heroSection"><img className={style.logo} src={logo} alt="NUET Vault Logo" /></a>

            <nav className={`${style.nav} ${menuOpen ? style.active : ''}`}>
                <a href='#platformDemoSection'>Platform Demo</a>
                <a href='#why-us'>Why Us</a>
                <a href='#road-map'>Road Map</a>
                <a href='#pricing'>Pricing</a>
            </nav>

            <div className={style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
        </header>
    );
}

export default Header;