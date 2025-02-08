import React, { createContext, useRef } from "react";

export const CursorContext = createContext(null);

export const CursorProvider = ({ children }) => {
    const cursorRef = useRef(null);

    return (
        <CursorContext.Provider value={cursorRef}>
            {children}
        </CursorContext.Provider>
    );
};
