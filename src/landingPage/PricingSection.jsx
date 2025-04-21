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
                    <div className={style.mockplan}>
                        <div>
                            <h2 className={style.mockh1}>MOCK</h2>
                            <p className={style.mockul}>
                                &#8226; Access to ALL Mock tests<br />
                                &#8226; Access to ALL Mock tutorials<br />
                            </p>
                        </div>
                        <p className={style.mockprice}>14,990&#8376;</p>
                    </div>

                    <div className={style.basicplan}>
                        <div>
                            <h2 className={style.basich1}>BASIC</h2>
                            <p className={style.basicul}>
                                &#8226; Everything in MOCK plan<br />
                                &#8226; Access to Math video course<br />
                                &#8226; Access to Critical Thinking video course<br />
                            </p>
                        </div>
                        <p className={style.basicprice}>19,990&#8376;</p>
                    </div>

                    <div className={style.proplan}>
                        <div>
                            <h2 className={style.proh1}>PRO</h2>
                            <p className={style.proul}>
                                &#8226; Everything in MOCK plan<br />
                                &#8226; Everything in BASIC plan<br />
                                &#8226; Individual mentor who will help in your journey to NU<br />
                            </p>
                        </div>
                        <p className={style.proprice}>29,990&#8376;</p>
                    </div>
            </div>
        </div>
    );
}

export default PricingSection;