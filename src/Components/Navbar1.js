import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1-container">
        <Link to="/" className="navbar1-logo">
          <p className='heading'>Owais <span>Ahmed</span></p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
