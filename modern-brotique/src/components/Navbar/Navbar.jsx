import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/Tops" className="nav-link">Tops</a>
        </li>
        <li className="nav-item">
          <a href="/Bottoms" className="nav-link">Bottoms</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
