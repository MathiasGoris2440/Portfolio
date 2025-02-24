import React, {Suspense, useContext, useState} from 'react'
import {myProjects} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import DemoComputer from "../Components/DemoComputer.jsx";
import { motion } from "motion/react"
import {CursorContext} from "../Components/CursorContext.jsx";

const projectCount = myProjects.length;

const gridContainerVariants = {
    hidden: {transform: "translateX(-200px)", opacity: 0},
    animate: {
        transform: "translateX(0)", opacity: 1,
        transition: {staggerChildren: 0.5,}
    }
}

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    };

    const cursor = useContext(CursorContext);

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

    return (
        <section className="c-space my-20" id={"projects"}>
            <p className={"head-text"}>My Projects</p>

            <motion.div
                variants={gridContainerVariants}
                initial={"hidden"}
                whileInView={"animate"}
                margin={"-800px"}
                className={"grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full"}>

                <motion.div variants={ {
                    hidden: {transform: "translateX(-200px)", opacity: 0},
                    animate: {
                        transform: "translateX(0px)", opacity: 1,

                    }
                } }
                    className={"flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"}>
                    <div className={"absolute top-0 right-0"}>
                        <img src={currentProject.spotlight} alt={"spotlight"} className={"w-full h-96 object-cover rounded-xl"} />
                    </div>

                    <div className={" backdrop-filter backdrop-blur-3xl rounded-lg w-12 h-12 flex items-center justify-center"} style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt={"logo"} className={"w-full h-full shadow-sm"} style={currentProject.imgStyle} />
                    </div>

                    <div className={"flex flex-col gap-5 text-white-600 my-5"}>
                        <div>
                            <p className={"text-white text-2xl font-semibold"}>{currentProject.title}</p>
                            <p className={"text-gray_gradient text-xl font-medium mt-0.5"}>{currentProject.subtitle}</p>
                        </div>
                        <p>{currentProject.desc}</p>
                        <p >{currentProject.subdesc}</p>
                    </div>

                    <div className={"flex items-center justify-between flex-wrap gap-5"}>
                        <div className={"flex items-center gap-3"}>
                            {currentProject.tags.map(
                                (tag, index) => (
                                    <div key={index} className={"tech-logo"}>
                                        <img src={tag.path} alt={tag.name}/>
                                    </div>
                                )
                            )}
                        </div>

                        {currentProject.href && (
                            <a
                                className="flex items-center gap-2 cursor-pointer text-white-600"
                                href={currentProject.href}
                                target="_blank"
                                rel="noreferrer"
                                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            >
                                <p>View Project</p>
                                <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                            </a>
                        )}
                    </div>

                    <div className={"flex justify-between items-center m-7"}>
                        <button className={"arrow-btn"} onClick={() => handleNavigation('previous')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={"assets/left-arrow.png"} alt={"left-arrow"} className={"w-4 h-4"} />
                        </button>
                        <button className={"arrow-btn"} onClick={() => handleNavigation('next')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={"assets/right-arrow.png"} alt={"right-arrow"} className={"w-4 h-4"} />
                        </button>
                    </div>
                </motion.div>

                <motion.div  variants={ {
                    hidden: {transform: "translateX(200px)", opacity: 0},
                    animate: {
                        transform: "translateX(0)", opacity: 1,
                    }
                } } className={"rounded-lg h-96 md:h-full"}>
                    <Canvas className={'w-full h-full rounded-lg shadow-2xl shadow-black-200 border border-[#DDE6ED]'}>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />

                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                    </Canvas>
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Projects
