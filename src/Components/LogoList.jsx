import React from 'react'
import { SkillsLogo } from "../constants/index.js";

const LogoList = () => {
    return (
        <div className="w-full sm:h-[266px] h-fit grid grid-rows-3 grid-flow-col place-items-center">
            {SkillsLogo.map(({ id, name, img }) => (
                <div key={id} className="relative w-16 h-16 flex items-center justify-center group">
                    {/* Image with blur effect when hovering over the parent div */}
                    <img
                        src={img}
                        alt={name}
                        className="w-16 h-16 transition duration-500 group-hover:blur-sm"
                    />
                    {/* Name appearing on hover */}
                    <p className="absolute text-black text-l font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {name}
                    </p>
                </div>
            ))}
        </div>
    );
}
export default LogoList;
