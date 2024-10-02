import React from 'react';
import './CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2><span>MM Health</span> Services</h2>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">About Us</a>
        </li>
      </ul>
      <div className='contact'>
      <h4>Contact</h4>
      </div>
    </nav>
  );
}

export default Navbar;
