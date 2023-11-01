import React, { useState } from "react";
import '../styles/CustomNav.scss'

const CustomNav = ({ li }) => {
    const [window, setWindow] = useState(false);

    
    return (
        <nav className="navbar-menu">
            <div>
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
