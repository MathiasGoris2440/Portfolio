import React, {useState} from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";

import {motion, useMotionValueEvent, useScroll, AnimatePresence  } from "motion/react"

const App = () => {
    const { scrollYProgress } = useScroll()
    const [progress, setProgress] = useState(0)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(Math.round(latest * 100));
    })

    return (
        <div>
            <AnimatePresence>
                {progress > 4 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[calc(50%-80px)] right-[1px] transform p-2 rounded flex flex-row items-center gap-2 z-50"
                    >
                        <p className="text-[12px]">{progress}</p>
                        {/* Progress Bar Container */}
                        <div className="relative w-1 h-40 bg-black-200 overflow-hidden rounded-full bg-accent bg-opacity-20 blur-[1px]">
                            {/* Inner Fill, starting from the top */}
                            <div
                                className="bg-blue-400 absolute left-0 right-0 rounded"
                                style={{ height: `${progress}%` }}
                            ></div>
                        </div>
                    </motion.div>
                )}
        </AnimatePresence>

    <main className="max-w-7xl mx-auto">
               <Navbar />
                <Hero />
                <About />
                <Education />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}
export default App
