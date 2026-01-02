"use client";
import React, { useEffect, useState } from "react";
import "@/app/components/Header/Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo / Avatar */}
        <div className="logo-wrap">
          <a href="#home" className="logo">
            <img src="/images/SJ-logo1.png" alt="Logo" />
          </a>
          <span className="logo-text">Shlesha Joshi</span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Menu */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {["home", "skills", "projects"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeLink === item ? "active" : ""}
                  onClick={() => {
                    setActiveLink(item);
                    setMenuOpen(false);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right section */}
          <div className="navbar-right">
            <div className="social-icon">
              <a href="#"><img src="/images/nav-icon1.svg" alt="LinkedIn" /></a>
              <a href="#"><img src="/images/nav-icon3.svg" alt="Instagram" /></a>
            </div>

            <button className="connect-btn">
              <span>Level Up</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
