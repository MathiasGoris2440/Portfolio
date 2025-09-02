import { useEffect, useRef } from 'react';
import {useMediaQuery} from "react-responsive";

const words = ["IT Student", "Developer", "Problem Solver", "Tech Enthusiast", "AI Explorer"];
const CHANGE_WORD_TIMER = 2000;

const HeroTag = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const WORD_HEIGHT = isMobile ? 21 : 36;
    const wordListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (wordListRef.current) {
                wordListRef.current.style.transition = "transform 0.5s ease-in-out";
                wordListRef.current.style.transform = `translateY(-${WORD_HEIGHT}px)`;

                setTimeout(() => {
                    wordListRef.current.appendChild(wordListRef.current.firstElementChild);
                    wordListRef.current.style.transition = "none";
                    wordListRef.current.style.transform = "translateY(0)";
                }, 500);
            }
        }, CHANGE_WORD_TIMER);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative pt-1 pb-1 pl-3 pr-3 sm:h-10 h-6  border-2 rounded-lg border-[#27374D] bg-[#27374D]/80  overflow-hidden flex items-center justify-center">
            <div
                className="flex flex-col items-center transform duration-500 ease-in-out"
                id="wordList"
                ref={wordListRef}
                aria-live="polite"
            >
                {words.map((word, index) => (
                    <div key={index} className="hero_tag text-white-800  ">{word}</div>
                ))}
            </div>
        </div>
    );
};

export default HeroTag;
