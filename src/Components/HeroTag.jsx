import React, { useEffect, useRef } from 'react';

const words = ["IT Student", "Developer", "Problem Solver", "Tech Enthusiast", "AI Explorer"];
const CHANGE_WORD_TIMER = 2000;
const WORD_HEIGHT = 36;

const HeroTag = () => {
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
        <div className="relative w-full max-w-56 h-[42px] sm:max-w-[350px] md:max-w-56 border-2 rounded-lg border-white bg-black-200 overflow-hidden">
            <div
                className="flex flex-col items-center transform duration-500 ease-in-out"
                id="wordList"
                ref={wordListRef}
                aria-live="polite"
            >
                {words.map((word, index) => (
                    <div key={index} className="hero_tag text-gray_gradient">{word}</div>
                ))}
            </div>
        </div>
    );
};

export default HeroTag;
