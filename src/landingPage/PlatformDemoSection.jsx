import React from 'react';
import style from "../landingPageStyle/PlatformDemoSection.module.css";

function PlatformDemoSection() {
    return (
        <section className={style.container} id="platformDemoSection">
            <h1 className={style.h1}>HOW <span className={style.highlight}>OUR PLATFORM</span> WORKS?</h1>
            <div className={style.videoContainer}>
                <iframe
                    src="https://www.youtube.com/embed/IVZc_1H6eQg?si=dbWRRR2ucB66vP8z"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
            <button className={style.button}>TRY A FREE MOCK TEST NOW!</button>

        </section>
    );
}

export default PlatformDemoSection;