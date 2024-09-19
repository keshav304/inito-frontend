import React, { useState } from 'react';
import './Header.css';
import logo from '../assests/Logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header__con">
        <div className={`ham-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line-con">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className="logo">
          <a href="/">
            <img alt="Inito Logo" src={logo} />
          </a>
        </div>
        <nav className={isMenuOpen ? 'open' : ''}>
          <a className="font-semi-bold text-dtheme" href="/about-us">About Us</a>
          <a className="font-semi-bold text-dtheme" href="https://blog.inito.com">Blog</a>
          <a className="font-semi-bold text-dtheme" href="/faqs">FAQ</a>
          <a className="font-semi-bold text-dtheme" href="/contact-us">Contact Us</a>
          <a className="font-semi-bold text-dtheme" href="/careers">Careers</a>
          <a className="button" id="order-now-menu" href="/buy-now">Try Inito</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;