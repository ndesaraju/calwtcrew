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
        ABOUT US
      </Link>
      <div className="dropdown">
        <button className="dropbtn">ROSTERS</button>
        <div className="dropdown__content">
          <Link to="/mens-roster/" className="link">
            <div className="dropdown__link">MEN&#39;S ROSTER</div>
          </Link>
          <br />
          <Link to="/womens-roster/" className="link">
            <div className="dropdown__link">WOMEN&#39;S ROSTER</div>
          </Link>
        </div>
      </div>
      <Link to="/schedule/" className="link">
        SCHEDULE
      </Link>
      <Link to="/alumni/" className="link">
        ALUMNI
      </Link>
      <Link to="/join/" className="link">
        JOIN US
      </Link>
    </div>
  </div>
);

export default Navbar;
