import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {

    const SoftwareIcon = () => <div className={"h-full w-full flex items-center justify-center"}><img src={"/assets/education/software.png"} alt={"work icon"} className={"w-10 h-10 items-center"}></img></div>;
    const AIIcon = () => <div className={"h-full w-full flex items-center justify-center"}><img src={"/assets/education/artificial-intelligence.png"} alt={"work icon"} className={"w-10 h-10 items-center"}></img></div>;
    const SchoolIcon = () => <div className={"h-full w-full flex items-center justify-center"}><img src={"/assets/education/school.png"} alt={"work icon"} className={"w-10 h-10 items-center"}></img></div>;

    return (
        <section className="c-space my-20 relative" id="education">
            <p className="head-text">My Education</p>

            <VerticalTimeline className={"vertical-timeline"}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(14, 14, 16)', color: '#fff', boxShadow: 'none', border: '2px solid rgb(28, 28, 33)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(28, 28, 33)' }}
                    shadowSize={"small"}
                    intersectionObserverProps = {{
                        triggerOnce: false,
                    }}
                    date="2024 - Present"
                    iconStyle={{ background: 'rgb(14, 14, 16)', color: '#fff' }}
                    icon={<AIIcon />}
                >
                    <h3 className="vertical-timeline-title">Banaba Toegepaste Informatica – Artificial Intelligence</h3>
                    <h4 className="vertical-timeline-subtitle">Howest</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(14, 14, 16)', color: '#fff', boxShadow: 'none', border: '2px solid rgb(28, 28, 33)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(28, 28, 33)' }}
                    shadowSize={"small"}
                    intersectionObserverProps = {{
                        triggerOnce: false,
                    }}
                    date="2021 - 2024"
                    iconStyle={{ background: 'rgb(14, 14, 16)', color: '#fff' }}
                    icon={<SoftwareIcon />}
                >
                    <h3 className="vertical-timeline-title">Bachelor Toegepaste Informatica – Software Engineering</h3>
                    <h4 className="vertical-timeline-subtitle">Howest</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(14, 14, 16)', color: '#fff', boxShadow: 'none', border: '2px solid rgb(28, 28, 33)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(28, 28, 33)' }}
                    shadowSize={"small"}
                    intersectionObserverProps = {{
                        triggerOnce: false,
                    }}
                    date="2019 - 2021"
                    iconStyle={{ background: 'rgb(14, 14, 16)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-title">Accountancy and IT</h3>
                    <h4 className="vertical-timeline-subtitle">Sint Maria Geel</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
};

export default Education;
