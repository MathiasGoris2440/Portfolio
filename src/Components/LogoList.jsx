import React from 'react'
import { SkillsLogo } from "../constants/index.js";

const LogoList = () => {
    return (
        <div className="w-full sm:h-[266px] h-fit grid grid-rows-3 grid-flow-col place-items-center">
            {SkillsLogo.map(({ id, name, img }) => (
                <div key={id} className="relative sm:w-16 w-10 sm:h-16 h-10 flex items-center justify-center group">
                    {/* Image with blur effect when hovering over the parent div */}
                    <img
                        src={img}
                        alt={name}
                        className="sm:w-16 w-8 sm:h-16 h-8 transition duration-500 group-hover:blur-sm"
                    />
                    {/* Name appearing on hover */}
                    <p className="absolute text-white text-l font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                        textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"
                    }}>
                        {name}
                    </p>
                </div>
            ))}
        </div>
    );
}
export default LogoList;
