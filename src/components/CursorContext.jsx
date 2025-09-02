import { createContext, useRef } from "react";
import PropTypes from "prop-types";

export const CursorContext = createContext(null);

export const CursorProvider = ({ children }) => {
    const cursorRef = useRef(null);

    return (
        <CursorContext.Provider value={cursorRef}>
            {children}
        </CursorContext.Provider>
    );
};

CursorProvider.propTypes = {
  children: PropTypes.node,   // <--- fixes ESLint warning
};
