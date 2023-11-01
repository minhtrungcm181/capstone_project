import React, { useState } from "react";
import '../styles/CustomNav.scss'

const CustomNav = ({ li }) => {
    const [window, setWindow] = useState(false);

    let openClose = () => {
        if (window === false) {
            setWindow(true);
        } else {
            setWindow(false);
        }
    };
    return (
        <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
            <div className="burger" onClick={() => openClose()}>
                
            </div>
            <ul className="navbar__list">
                {li.map((item, i) => (
                    <div className="navbar__li-box" key={i}>
                        
                        <li
                            className="navbar__li"
                            style={{ display: window === false ? "inline-block" : "none" }}
                        >
                            {item[0]}
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    );
};

export default CustomNav;