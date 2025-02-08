import {useContext} from "react";
import {CursorContext} from "./CursorContext.jsx";

const Button = ({name, isBeam = false, containerClass}) => {

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
        <button className={`btn ${containerClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            {isBeam && (
                <span className={'relative flex h-3 w-3'}>
                    <span className={"btn-ping"}/>
                    <span className={"btn-ping_dot"} />
                </span>
            )}
            {name}
        </button>
    )
}
export default Button
