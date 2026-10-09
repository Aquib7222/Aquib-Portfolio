import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* =========================
            LOGO / BRAND
        ========================== */}
        <a href="#home" className="navbar-logo">

          <div className="navbar-brand-row">
            <span className="navbar-name">
              Aquib Shahzada
            </span>

            <span className="navbar-exp">
              1+ yrs Exp
            </span>
          </div>

          <p>
            React · React Native · Java
          </p>

        </a>

        {/* =========================
            NAVIGATION
        ========================== */}
        <div className="navbar-links">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#experience">
            Experience
          </a>

        </div>

        {/* =========================
            CONTACT BUTTON
        ========================== */}
        <a href="#contact" className="navbar-contact">

          <span>Let's Talk</span>

          <span className="navbar-arrow">
            <FiArrowUpRight size={16} />
          </span>

        </a>

      </nav>
    </header>
  );
}

export default Navbar;