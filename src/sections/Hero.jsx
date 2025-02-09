import React, { useEffect, useRef } from 'react';
import Spheres1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js';
import HeroTag from "../Components/HeroTag.jsx";
import ScrollDown from "/src/json/Scroll-Down.json";
import Lottie from "lottie-react";

const Hero = () => {
    const canvasRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        // Initialize the background after the canvas is mounted.
        bgRef.current = Spheres1Background(canvasRef.current, {
            count: 300,
            minSize: 0.3,
            maxSize: 1,
            gravity: 0.5,
        });

        bgRef.current.spheres.setColors([886416.8631760156, 3594361.7239208743, 8753260.968944907]);

        // Cleanup (if provided by the library)
        return () => {
            // For example: bgRef.current.dispose();
        };
    }, []);

    return (
        <section className="min-h-screen w-full flex flex-col" id="home">
            {/* Hero Text */}
            <div className="w-full h-96 mx-auto flex flex-col items-center justify-center sm:mt-36 mt-20 c-space gap-3 relative z-10  ">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans border-2 rounded-lg border-white bg-black-200 p-2">
                    Hi, I am Mathias Goris <span className="waving-hand">🤚</span>
                </p>
                <HeroTag/>
            </div>

            <div
                className="w-full h-96 absolute top-32 left-0 pointer-events-none"
                style={{zIndex: -1}}
            >
                <div className="custom-shape-divider-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div>

                <canvas id="webgl-canvas" ref={canvasRef} className="w-full h-full z-[999]"/>

                <div className="custom-shape-divider-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div>

            {/* Button Container */}
            <div className="absolute bottom-2 left-0 right-0 w-full z-10 c-space flex items-center justify-center">
                <a href="#about" className="w-fit">
                    <Lottie animationData={ScrollDown} loop={true} className={"w-24 h-24"} />
                </a>
            </div>


        </section>
    );
};

export default Hero;
