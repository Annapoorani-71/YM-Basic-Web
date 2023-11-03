import React, { useState } from 'react';
import menuItems from './MenuItems';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from "./images/Logo.png"
import { FaTimes } from 'react-icons/fa'; // Import the "X" icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <h3>YELLOWMATICS WELCOMES YOU ALL</h3>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes onClick={closeMenu} /> // "X" icon to close menu
        ) : (
          <div className="menu-image" onClick={toggleMenu}>
            <img src={Logo} alt="Menu Icon" />
          </div>
        )}
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
