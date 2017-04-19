import React from 'react';
import { Link } from 'react-router';

import '../css/navbar.scss';
import logo from '../assets/images/logo.png';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <Link to="/" className="link">
        <img src={logo} alt="logo" className="logo__image" />
      </Link>
    </div>
    <div className="links">
      <Link to="/about/" className="link">
        About Us
      </Link>
      <div className="dropdown">
        <button className="dropbtn">Rosters</button>
        <div className="dropdown__content">
          <Link to="/mens-roster/" className="link">
            <div className="dropdown__link">Men&#39;s Roster</div>
          </Link>
          <br />
          <Link to="/womens-roster/" className="link">
            <div className="dropdown__link">Women&#39;s Roster</div>
          </Link>
        </div>
      </div>
      <Link to="/schedule/" className="link">
        Schedule
      </Link>
      <Link to="/alumni/" className="link">
        Alumni
      </Link>
      <Link to="/join/" className="link">
        Join Us
      </Link>
    </div>
  </div>
);

export default Navbar;
