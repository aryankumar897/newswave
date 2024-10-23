"use client"

import './style.css';
const Navbar = () => {



    return (
        <nav
            className={`navbar ${isVisible ? 'visible' : ''}`}
        >


            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
      
        </nav>
    );
};

export default Navbar;