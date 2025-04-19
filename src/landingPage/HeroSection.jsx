import React from 'react';
import TypingText from "./TypingText.jsx";
import heroSectionPicture from "../assets/HeroPageNU.png";
import style from "../landingPageStyle/HeroSection.module.css";

function HeroSection() {
    return (
        <section className={style.container}
                 id="heroSection"
                 style={{ '--bg-image': `url(${heroSectionPicture})` }}>
            <div className={style.LeftContainer}>
                <div>
                    <h1 className={style.phraseCTA}>GET READY TO <span className={style.highlight}>ACE NUET</span> WITH</h1>

                    <div className={style.animatedText}>
                        <TypingText words={['MOCK TESTS', 'VIDEOS LESSONS', 'SCORE ANALYTICS', 'STUDY PLANS']} />
                    </div>
                </div>

                <button className={style.button}>GET STARTED!</button>
            </div>

            <img className={style.heroSectionPic}
                 src={heroSectionPicture} alt="picture of NU" />
        </section>
    );
}

export default HeroSection;