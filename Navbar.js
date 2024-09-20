import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
