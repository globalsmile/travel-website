// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
// import logo from '../assets/logo.png';
import avatar from '../assets/Oval.jpg';
import avatarStatus from "../assets/Oval (1).jpg"
import shapeCopy from "../assets/Shape Copy.jpg";
import shape from "../assets/Shape.png";
import arrowDown from "../assets/down-arrow (1).png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <h1 className='travelsy'> Travelsy </h1>
        </div>

        {/* Desktop Nav */}
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#locations" className="header__link">Camping Locations</a>
          <a href="#activities" className="header__link">Activities</a>
          <a href="#equipment" className="header__link">Equipment</a>
          <a href="#blogs" className="header__link">Blogs</a>
        </nav>

        <div className="header__actions">
          <button className="header__btn header__btn--primary" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={shape} alt="shape" style={{ marginRight: '8px' }} />
            Reservations
          </button>
          <button className="header__icon-btn" aria-label="Search">
            <img src={shapeCopy} alt="search" />
          </button>
          <div className="avatar-wrapper">
            {/* Avatar + status dot */}
            <div className="avatar-inner">
              <img src={avatar} alt="User Avatar" className="avatar-main" />
              <img src={avatarStatus} alt="Avatar Status" className="avatar-status" />
            </div>

            {/* Down-arrow icon */}
            <img src={arrowDown} alt="dropdown" className="avatar-arrow" />

            {/* The dropdown menu */}
            <div className="header__dropdown">
              <a href="#profile">Profile</a>
              <a href="#logout">Logout</a>
            </div>
</div>

        </div>

        {/* Burger Menu for Mobile */}
        <button
          className="header__burger"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
