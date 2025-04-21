import React from 'react';
import FooterNU from '../assets/FooterNU.png'
import style from '../landingPageStyle/Footer.module.css';
import LinkedinLogo from '../assets/LinkedinLogo.png'
import InstLogo from '../assets/InstLogo.webp'
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={style.container}>
            <img height='150px' src={FooterNU} />
            <div className={style.bottomContainer}>
                <p className={style.p}>
                    <br /><br />For collaboration: nuet.vault@gmail.com<br /><br />
                    <a className={style.a}>Public Offer</a><br /><br />
                    <a className={style.a}>Privacy Policy</a><br /><br />
                </p>
                <p className={style.p}>&copy; {currentYear} NUET Vault<br /><br />
                    <a className={style.a}>Return & Refund Policy</a>t<br /><br />
                    <a className={style.a}>Requisites</a>
                </p>
            </div>
        </div>
    );
}

export default Footer;