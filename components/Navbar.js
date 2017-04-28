import React, { Component } from 'react';
import { Link } from 'react-router';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import logo from '../assets/images/logo.png';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      maxHeight: 50,
    };

    this._handleNavOpen = this._handleNavOpen.bind(this);
  }

  _handleNavOpen(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div>
        <Headroom
          wrapperStyle={{
            maxHeight: this.state.maxHeight,
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.99)',
          }}
        >
          <div
            className={classNames('navbar', {
              'navbar--open': this.state.open,
            })}
          >
            <div className="logo">
              <Link to="/" className="link">
                <img src={logo} alt="logo" className="logo__image" />
              </Link>
            </div>
            <div
              className={classNames('links', 'navbar__hamburger', {
                'navbar__hamburger--active': this.state.open,
              })}
              onClick={this._handleNavOpen}
            >
              <div className="hamburger__bar bar" />
              <div className="hamburger__bar bar" />
              <div className="hamburger__bar bar" />
            </div>
            <div className="links">
              <Link to="/about/" className="link">
                ABOUT US
              </Link>
              <div className="roster">
                ROSTER
                <Link to="/roster/men/" className="link__navbar--open">
                  MEN&#39;S
                </Link>
                <Link to="/roster/men/" className="link__navbar--open">
                  WOMEN&#39;S
                </Link>
              </div>
              <div className="dropdown">
                <button className="dropbtn">ROSTERS</button>
                <div className="dropdown__content">
                  <Link to="/roster/men/" className="link">
                    <div className="dropdown__link">MEN&#39;S ROSTER</div>
                  </Link>
                  <br />
                  <Link to="/roster/women/" className="link">
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
        </Headroom>
      </div>
    );
  }
}
