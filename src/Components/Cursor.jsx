import { useEffect, useContext } from "react";
import { CursorContext } from "./CursorContext";

const Cursor = () => {
    const cursor = useContext(CursorContext); // Get the shared ref

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!cursor.current) return;

        const { clientX: x, clientY: y } = e;
        const mouseX = x - cursor.current.clientWidth / 2;
        const mouseY = y - cursor.current.clientHeight / 2;

        cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
        return null
    }
    else {
        return <div className="cursor" ref={cursor}></div>;
    }
};


export default Cursor;
