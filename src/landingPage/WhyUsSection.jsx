import React from 'react';
import style from '../landingPageStyle/WhyUsSection.module.css';
import LogoNU from '../assets/LogoNU.png';

function WhyUsSection() {
    return (
        <div className={style.container}
             style={{ '--bg-image': `url(${LogoNU})` }}
             id='whyUsSection'
            >
            <img className={style.LogoNU} src={LogoNU} alt='Logo of NU' />
            <div className={style.RightContainer}>
                <h1 className={style.h1}>WHY US TO PREPARE FOR <span className={style.highlight}>NUET</span>?</h1>
                <p className={style.p}>
                    Don’t just hope to pass the NUET — prepare to succeed with confidence!
                    Our realistic mock exams simulate real test conditions, so you’ll know exactly what to expect.
                    Plus, our comprehensive video courses cover every topic you need to master.
                </p>
                <button className={style.button}>GIVE IT A TRY!</button>
            </div>
        </div>
    );
}

export default WhyUsSection;