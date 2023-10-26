import React, { useState, useEffect } from 'react';
import Atharv from "../assets/Opening.png";

const Opening = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`opening-animation ${isVisible ? 'animate-fade-out' : ''}`}>
            {isVisible && (
                <img src={Atharv} alt="Opening Image" className="" />
            )}      </div>
    );
}

export default Opening