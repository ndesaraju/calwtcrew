import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import FontAwesome from 'react-fontawesome';
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
              <Link to={prefixLink('/')} className="link">
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
              <div className="navbar__media">
                <a href="https://www.facebook.com/californialightweightcrew/?ref=br_rs" target="_blank" rel="noopener noreferrer">
                  <FontAwesome
                    className="fb__icon"
                    name="facebook"
                  />
                </a>
                <a href="http://instagram.com/cal_lights" target="_blank" rel="noopener noreferrer">
                  <FontAwesome
                    className="ig__icon"
                    name="instagram"
                  />
                </a>
              </div>
              <Link to={prefixLink('/about/')} className="link">
                ABOUT US
              </Link>
              <div className="roster">
                ROSTER
                <Link to={prefixLink('/roster/men/')} className="link__navbar--open">
                  MEN&#39;S
                </Link>
                <Link to={prefixLink('/roster/women')} className="link__navbar--open">
                  WOMEN&#39;S
                </Link>
              </div>
              <div className="dropdown">
                <button className="dropbtn">ROSTERS</button>
                <div className="dropdown__content">
                  <Link to={prefixLink('/roster/men/')} className="link">
                    <div className="dropdown__link">MEN&#39;S ROSTER</div>
                  </Link>
                  <br />
                  <Link to={prefixLink('/roster/women/')} className="link">
                    <div className="dropdown__link">WOMEN&#39;S ROSTER</div>
                  </Link>
                </div>
              </div>
              <Link to={prefixLink('/schedule/')} className="link">
                SCHEDULE
              </Link>
              <Link to={prefixLink('/alumni/')} className="link">
                ALUMNI
              </Link>
              <Link to={prefixLink('/join/')} className="link">
                JOIN US
              </Link>
            </div>
          </div>
        </Headroom>
      </div>
    );
  }
}
