import React, {useContext, useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../Components/Button.jsx";
import { motion } from "motion/react"
import {CursorContext} from "../Components/CursorContext.jsx";
import LogoList from "../Components/LogoList.jsx";
import Lottie from "lottie-react";
import Developer from "/src/json/developer.json";


const gridContainerVariants = {
    hidden: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {staggerChildren: 0.2,}
    }
}

const gridSquareVariants = {
    hidden: {opacity: 0},
    animate: {opacity: 1}
}

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("mathias.goris@outlook.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);


    }

    const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x: `${x}px`, y: `${y}px` });
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
      <section className={"About c-space my-16"} id={"about"}>
          <h3 className={"head-text"}>About me</h3>
          <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="animate"
              margin="-300px"
              transition={{ delay: 1 }}
              className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-auto mt-12 auto-rows-min"
          >



          <motion.div
                  variants={gridSquareVariants}
                  className={"col-span-1 xl:row-span-3"}>
                  <div className={"grid-container"} onMouseMove={handleMouseMove} style={{ "--mouse-x": mousePosition.x, "--mouse-y": mousePosition.y }}>
                      <Lottie animationData={Developer} loop={true}  className={"w-fit h-fit"} />

                      <div>
                          <p className={"grid-headtext"}>Hi, I&#39;m Mathias</p>
                          <p className={"grid-subtext "}>I am a passionate IT student with strong programming skills. My goal is to create innovative technological solutions and make complex technical concepts understandable.</p>
                      </div>
                  </div>
              </motion.div>

              <motion.div
                  variants={gridSquareVariants}
                  className={"col-span-1 xl:row-span-3"}>
                  <div className={"grid-container"} onMouseMove={handleMouseMove} style={{ "--mouse-x": mousePosition.x, "--mouse-y": mousePosition.y }}>
                    <img src={"assets/resume.png"} alt={"grid-2"} className={"w-fit sm:h[276px] h-60 object-contain m-auto"}/>

                      <div>
                      <p className={"grid-headtext"}>Download My CV</p>
                      <p className={"grid-subtext"}>Get to know more about my experience and skills by downloading my CV.</p>
                      <Button name={"Download CV"} containerClass={"mt-5 w-full"}>

                      </Button>
                  </div>
                  </div>
              </motion.div>

              <motion.div
                  variants={gridSquareVariants}
                  className={"col-span-1 xl:row-span-4"}>
                  <div className={"grid-container"} onMouseMove={handleMouseMove} style={{ "--mouse-x": mousePosition.x, "--mouse-y": mousePosition.y }}>
                      <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"}>
                          <Globe
                              height={364}
                              width={364}
                              backgroundColor={"rgba(0, 0, 0, 0)"}
                              labelsData={[{
                                  lat: 51, lng: 5,
                                  text: "I'm here!",
                                  color: "white",
                                  size: 48,
                              }]}
                              showAtmosphere={false}
                              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                          />
                      </div>
                      <div>
                          <p className={"grid-headtext"}>
                              I work remotely across most timezones.
                          </p>
                          <p className={"grid-subtext"}>I&#39;m based in Geel, Belgium, with remote work available.</p>
                          <a href={"#contact"} className={"w-fit"}>
                            <Button name={"Contact Me"} isBeam containerClass={"w-full mt-10"} />
                          </a>
                      </div>
                  </div>
              </motion.div>

              <motion.div
                  variants={gridSquareVariants} className={"xl:col-span-2 xl:row-span-3"}>
                  <div className={"grid-container"} onMouseMove={handleMouseMove} style={{ "--mouse-x": mousePosition.x, "--mouse-y": mousePosition.y }}>
                      <LogoList />

                      <div>
                          <p className={"grid-headtext"}>Skills & Technologies</p>
                          <p className={"grid-subtext"}>
                              I have experience with various technologies, both from my studies and self-learning.
                          </p>
                          <p className={"grid-subtext"}>
                              Always eager to explore new tools and improve my skills.
                          </p>
                      </div>

                  </div>
              </motion.div>

              <motion.div
                  variants={gridSquareVariants}
                  className={"xl:col-span-1 xl:row-span-2"}>
                  <div className={"grid-container"} onMouseMove={handleMouseMove} style={{ "--mouse-x": mousePosition.x, "--mouse-y": mousePosition.y }}>
                      <img src={"assets/grid4.png"} alt={"grid-4"} className={"w-full md:h-[126px] sm:h-[266px] h-fit object-cover sm:object-top"}/>

                      <div className={"space-y-2"}>
                          <p className={"grid-subtext text-center"}>Contact me</p>
                          <div className={"copy-container"} onClick={handleCopy} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                              <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt={"copy"} className={"w-6 h-6"} />
                              <p className={"lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"}>mathias.goris@outlook.com</p>

                          </div>
                      </div>
                  </div>
              </motion.div>

          </motion.div>
      </section>
    )
}
export default About
