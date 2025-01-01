import React, { useState } from "react";

export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">
            Philadelphia Medcare
        </div>
        
        <div>
            <ul className="nav-links">
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#our-services">Services</a></li>
                <li><a href="#our-locations">Locations</a></li>
                <li><a href="#choose-us">Choose Us</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <nav id="hamburger-nav">
        <div className="logo">Philadelphia Medcare</div>
        <div className="hamburger-menu">
            <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
         <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#about-us" onClick={toggleMenu}>About Us</a></li>
              <li><a href="#our-services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#our-locations" onClick={toggleMenu}>Locations</a></li>
              <li><a href="#choose-us" onClick={toggleMenu}>Choose Us</a></li>
              <li><a href="#schedule" onClick={toggleMenu}>Schedule</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
         </div>
        </div>
      </nav>
    </div>
  );
}
