import React from 'react';
import style from '../landingPageStyle/pricing.module.css';
import PROPlan from "../assets/PROPlan.png";
import BASICPlan from "../assets/BASICPlan.png";
import MOCKPlan from "../assets/MOCKPlan.png";
import heroSectionPicture from "../assets/HeroPageNU.png";

function PricingSection() {
    return (
        <div className={style.container}
             style={{ '--bg-image-pro': `url(${PROPlan})`,
                      '--bg-image-basic': `url(${BASICPlan})`
                     ,'--bg-image-mock': `url(${MOCKPlan})` }}
             id='pricingSection'>

            <h1 className={style.h1}>FAIR <span className={style.pricing}>PRICING</span></h1>

            <div className={style.plansContainer}>
                    <div>
                        <h2 className={style.h2}>MOCK</h2>
                        <ul className={style.ul}>
                            <li className={style.li}>Access to ALL Mock tests</li>
                            <li className={style.li}>Access to ALL Mock tutorials</li>
                        </ul>
                        <p className={style.price}>14,990&#8376;</p>
                    </div>

                    <div className={style.plan}>
                        <h2 className={style.h2_1}>BASIC</h2>
                        <ul className={style.ul1}>
                            <li className={style.li1}>Everything in MOCK plan</li>
                            <li className={style.li1}>Access to Math video course</li>
                            <li className={style.li1}>Access to Critical Thinking video course</li>
                        </ul>
                        <p className={style.price}>19,990&#8376;</p>
                    </div>

                    <div className={style.plan}>
                        <h2 className={style.h2}>PRO</h2>
                        <ul className={style.ul}>
                            <li className={style.li}>Everything in MOCK plan</li>
                            <li className={style.li}>Everything in BASIC plan</li>
                            <li className={style.li}>Access to individual mentor who will help in your journey to NU</li>
                        </ul>
                        <p className={style.price}>29,990&#8376;</p>
                    </div>
            </div>
        </div>
    );
}

export default PricingSection;