import React from 'react';
import style from '../landingPageStyle/RoadmapSection.module.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LogoFlatNU from "../assets/LogoFlatNU.png"

const RoadmapSection = () => {
    return (
        <div className={style.container} id='roadMapSection'>
            <VerticalTimeline lineColor={'#d88852'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d88852', color: 'white', boxShadow: 'none', borderRadius: '15px' }}
                    iconStyle={{ background: '#d88852', boxShadow: 'none'}}>
                    <h3 className="vertical-timeline-element-title" style={{fontSize: '32px'}}>Level Up Your English to B2</h3>
                    <p>
                        Begin by watching videos, practicing grammar, and reading articles. This will help you get ready for the IELTS exam. Depending on where you start, this could take 1-2 months.<br /><br />
                        Tip: Start early to build your skills and confidence.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d88852', color: 'white', boxShadow: 'none', borderRadius: '15px' }}
                    iconStyle={{ background: '#d88852', boxShadow: 'none'}}>
                    <h3 className="vertical-timeline-element-title" style={{fontSize: '32px'}}>Achieve an IELTS 7+ Score</h3>
                    <p>
                        For most majors at NU, a score of 7.0+ on the IELTS is enough. Aim to complete this step within about 2 months.
                        <br /><br />Tip: Don’t rush — aim for consistent improvement in all areas: listening, reading, writing, and speaking.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d88852', color: 'white', boxShadow: 'none', borderRadius: '15px' }}
                    iconStyle={{ background: '#d88852', boxShadow: 'none'}}>
                    <h3 className="vertical-timeline-element-title" style={{fontSize: '32px'}}>Apply to NU</h3>
                    <p>
                        Create your online application account, select your desired major, and upload your IELTS results.
                        <br /><br />Tip: This is your official gateway to NU — make sure everything is in order.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d88852', color: 'white', boxShadow: 'none', borderRadius: '15px' }}
                    iconStyle={{ background: '#d88852', boxShadow: 'none'}}>
                    <h3 className="vertical-timeline-element-title" style={{fontSize: '32px'}}>Prepare for NUET</h3>
                    <p>
                        The NUET exam can be challenging due to the lack of available materials and mock tests. Many students struggle with this step, but WE’RE SOLVING THIS PROBLEM. Our platform provides the resources you need to excel!
                        <br /><br />Tip: Prepare smarter with mock tests and study guides tailored specifically to NUET.<br /><br /><br />
                    </p>
                    <button className={style.button}>
                        START NOW!
                    </button>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <img className={style.LogoFlatNU} src={LogoFlatNU} />
        </div>
    );
};

export default RoadmapSection;