import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    return (
        <header>
            <div className="container header-container">
                <div className="logo">
                    <h1><Link to="/">Excellence Academy</Link></h1>
                </div>
                <nav>
                    <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
                        <li><Link to="/" onClick={() => setNavActive(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setNavActive(false)}>About</Link></li>
                        <li><Link to="/courses" onClick={() => setNavActive(false)}>Courses</Link></li>
                        <li><Link to="/teachers" onClick={() => setNavActive(false)}>Teachers</Link></li>
                        <li><Link to="/gallery" onClick={() => setNavActive(false)}>Gallery</Link></li>
                        <li><Link to="/contact" onClick={() => setNavActive(false)}>Contact</Link></li>
                    </ul>
                    <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
