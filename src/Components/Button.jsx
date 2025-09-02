import {useContext} from "react";
import { CursorContext } from "./CursorContext";
import PropTypes from "prop-types";


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

Button.propTypes = {
  name: PropTypes.string.isRequired,     
  isBeam: PropTypes.bool,               
  containerClass: PropTypes.string       
};

export default Button;
