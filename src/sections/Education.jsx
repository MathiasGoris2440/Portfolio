import React, {useContext} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CursorContext} from "../Components/CursorContext.jsx";


const Education = () => {
    const cursor = useContext(CursorContext);
    const backgroundColor = '#3A6D8C';

    const handleMouseEnter = () => {
        if (cursor.current) {
            cursor.current.classList.add("cursor-hover");
        }
    };

    const handleMouseLeave = () => {
        if (cursor.current) {
            cursor.current.classList.remove("cursor-hover");
        }
    };

    const SoftwareIcon = () => (
        <div className="h-full w-full flex items-center justify-center">
            <img
                src="assets/education/software.png"
                alt="work icon"
                className="education-icon"
            />
        </div>
    );

    const AIIcon = () => (
        <div className="h-full w-full flex items-center justify-center">
            <img
                src="assets/education/artificial-intelligence.png"
                alt="work icon"
                className="education-icon"
            />
        </div>
    );

    const SchoolIcon = () => (
        <div className="h-full w-full flex items-center justify-center">
            <img
                src="assets/education/school.png"
                alt="work icon"
                className="education-icon"
            />
        </div>
    );

    return (
        <section className="c-space my-20 relative" id="education">
            <p className="head-text">My Education</p>

            {/* Pass the progress value via CSS variable */}
            <VerticalTimeline
                className="vertical-timeline"
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: backgroundColor,
                        color: '#fff',
                        boxShadow: 'none',
                        border: '2px solid #9DB2BF'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #9DB2BF' }}
                    shadowSize="small"
                    intersectionObserverProps={{ triggerOnce: false }}
                    date="2024 - Present"
                    iconStyle={{ background: backgroundColor, color: '#fff' }}
                    icon={<AIIcon />}
                >
                    <h3 className="vertical-timeline-title">
                        Banaba Toegepaste Informatica – Artificial Intelligence
                    </h3>
                    <h4 className="vertical-timeline-subtitle">Howest, Brugge</h4>
                    <p className={"grid-subtext "}>A one-year specialization focused on AI development, including machine learning, deep learning, and data-driven decision-making. Courses cover ethical AI, NLP, and computer vision.</p>
                    <div className="flex justify-end items-center">
                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={"https://www.howest.be/nl/opleidingen/bachelor/toegepaste-informatica/artificiele-intelligentie"}
                            target="_blank"
                            rel="noreferrer"
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <p>View Website</p>
                            <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: backgroundColor,
                        color: '#fff',
                        boxShadow: 'none',
                        border: '2px solid #9DB2BF'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #9DB2BF' }}
                    shadowSize="small"
                    intersectionObserverProps={{ triggerOnce: false }}
                    date="2021 - 2024"
                    iconStyle={{  background: backgroundColor, color: '#fff' }}
                    icon={<SoftwareIcon />}
                >
                    <h3 className="vertical-timeline-title">
                        Bachelor Toegepaste Informatica – Software Engineering
                    </h3>
                    <h4 className="vertical-timeline-subtitle">Howest, Brugge</h4>
                    <p className={"grid-subtext"}>A comprehensive three-year program focusing on software development, system architecture, and database management. Key areas include object-oriented programming, web development, and software testing. The program also emphasizes agile methodologies and project management, preparing me for a career in software engineering.</p>
                    <div className="flex justify-end items-center">
                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={"https://www.howest.be/nl/opleidingen/bachelor/toegepaste-informatica/software-engineer"}
                            target="_blank"
                            rel="noreferrer"
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <p>View Website</p>
                            <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: backgroundColor,
                        color: '#fff',
                        boxShadow: 'none',
                        border: '2px solid #9DB2BF'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #9DB2BF' }}
                    shadowSize="small"
                    intersectionObserverProps={{ triggerOnce: false }}
                    date="2019 - 2021"
                    iconStyle={{ background: backgroundColor, color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-title">Accountancy and IT</h3>
                    <h4 className="vertical-timeline-subtitle">Sint Maria Geel</h4>
                    <p className={"grid-subtext"}>During the last two years of high school, I pursued a program that combined accountancy with information technology, providing a solid foundation in both fields. This was my first experience to programming, where I developed a love for IT that led me to pursue a career in software engineering and artificial intelligence.</p>
                    <div className="flex justify-end items-center">
                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={"https://kogeka.be/studierichting/accountancy-en-it-boekhouden-informatica/"}
                            target="_blank"
                            rel="noreferrer"
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <p>View Website</p>
                            <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
};

export default Education;
