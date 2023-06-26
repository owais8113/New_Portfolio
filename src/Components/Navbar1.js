import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1-container">
        <Link to="/" className="navbar1-logo">
          <p className='heading'><span>HOME</span></p>
        </Link>
        <Link to="/project1" className="navbar1-logo">
          <p className='heading'>Smart <span> <br/>Agriculture</span></p>
        </Link>
        <Link to="/project2" className="navbar1-logo">
          <p className='heading'>Line <span> <br/>Follower</span></p>
        </Link>
        <Link to="/project3" className="navbar1-logo">
          <p className='heading'>Smart <span> <br/>Attendance</span></p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
