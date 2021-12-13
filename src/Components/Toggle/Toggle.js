import React, { useState, useEffect } from 'react';
import './Toggle.css';


function DarkModeToggle() {
    const [darkModeOn, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-dark-mode", darkModeOn);
    });

    return (
        <button
            className="dark-mode__btn"
            aria-pressed={darkModeOn}
            onClick={() => setDarkMode(!darkModeOn)}
        >
            <span className="dark-mode__content-wrap">
                <span className="dark-mode__icon" aria-hidden="true" />
                dark mode{" "}
                <span className="dark-mode__status">{darkModeOn ? " on" : " off"}</span>
            </span>
        </button>
    );
};

export default  DarkModeToggle;