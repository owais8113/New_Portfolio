import React from 'react';
import { FaHome, FaGraduationCap, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="#about" className="navbar-link" title="Home">
            <FaHome className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#education" className="navbar-link" title="Education">
            <FaGraduationCap className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#skills" className="navbar-link" title="Skills">
            <FaCode className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className="navbar-link" title="Projects">
            <FaBriefcase className="navbar-icon" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link" title="Contact">
            <FaEnvelope className="navbar-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
