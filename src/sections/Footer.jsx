import React, {useContext, useRef} from "react";
import Lottie from "lottie-react";
import LinkedIn from "/src/json/linkedin.json";
import GitHub from "/src/json/github.json";
import Instagram from "/src/json/instagram.json";
import {CursorContext} from "../Components/CursorContext.jsx";

const Footer = () => {
    const linkedinRef = useRef(null);
    const githubRef = useRef(null);
    const instagramRef = useRef(null);

    const cursor = useContext(CursorContext);

    const handleMouseEnter = (ref) => {
        ref.current?.play();
        if (cursor.current) {
            cursor.current.classList.add("cursor-hover");
        }
    };

    const handleMouseLeave = (ref) => {
        ref.current?.stop();
        if (cursor.current) {
            cursor.current.classList.remove("cursor-hover");
        }
    };


    return (
        <section className={"c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"}>
            <div className={"text-white-500 flex gap-2"}>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className={"flex gap-3"}>
                {/* GitHub Lottie */}
                <a
                    href="https://github.com/MathiasGoris2440"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    onMouseEnter={() => handleMouseEnter(githubRef)}
                    onMouseLeave={() => handleMouseLeave(githubRef)}
                >
                    <Lottie animationData={GitHub} loop={true} autoplay={false} lottieRef={githubRef} className={"w-full h-full"} />
                </a>

                {/* LinkedIn Lottie */}
                <a
                    href="https://www.linkedin.com/in/mathias-goris-4574572a0/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    onMouseEnter={() => handleMouseEnter(linkedinRef)}
                    onMouseLeave={() => handleMouseLeave(linkedinRef)}
                >
                    <Lottie animationData={LinkedIn} loop={false} autoplay={false} lottieRef={linkedinRef} className={"w-full h-full p-3"} />
                </a>

                {/* Instagram Lottie */}
                <a
                    href="https://www.instagram.com/mathiasgoris/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    onMouseEnter={() => handleMouseEnter(instagramRef)}
                    onMouseLeave={() => handleMouseLeave(instagramRef)}
                >
                    <Lottie animationData={Instagram} loop={false} autoplay={false} lottieRef={instagramRef} className={"w-full h-full p-3"} />
                </a>
            </div>

            <p>© 2025 Mathias. All Rights Reserved.</p>
        </section>
    );
};

export default Footer;
