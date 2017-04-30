import React, { Component } from 'react';
import classNames from 'classnames';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: true,
      fa15: false,
      sp15: false,
    };

    this._handleSectionOpen = this._handleSectionOpen.bind(this);
  }

  _handleSectionOpen(type, e) {
    e.preventDefault();
    if (type === 'current') {
      this.setState({
        [type]: !this.state.current,
      });
    }
    if (type === 'fa15') {
      this.setState({
        [type]: !this.state.fa15,
      });
    }
    if (type === 'sp15') {
      this.setState({
        [type]: !this.state.sp15,
      });
    }
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable react/jsx-no-bind */
    return (
      <div>
        <div className="section__header" onClick={this._handleSectionOpen.bind(this, 'current')}>
          Spring 2016 Schedule & Results
        </div>
        <div
          className={classNames('current__container', {
            'current--open': this.state.current,
          }, {
            'current--close': !this.state.current,
          })}
        >
          <div className="event__header">
            February 21, 2016 * Women‘s Scrimmage- vs. Mills & St. Mary‘s * Orinda, CA
          </div>
          <div className="event__header">
            February 28, 2016 * vs. Sacramento State & Sonoma State * Gold River, CA
          </div>
          <div className="result__content">
            1st- Men‘s Varsity 8+<br />
            1st- Women‘s Varsity 8+<br />
            1st- Women‘s Novice 4+<br />
            1st- Men‘s Novice 8+<br />
            1st- Women‘s Novice 8+<br />
            1st- Women‘s Varsity 4+<br />
            2nd- Men‘s Varsity Lightweight 8+<br />
          </div>
          <div className="event__header">
            March 5, 2016 * vs. UC Santa Barbara * Santa Barbara, CA
          </div>
          <div className="result__content">
            1st- Men‘s Varsity Lightweight 8+<br />
            2nd- Men‘s Novice 8+<br />
            2nd- Men‘s JV 8+<br />
          </div>
          <div className="event__header">
            March 19, 2016 * vs. Sonoma State * Oakland, CA
          </div>
          <div className="result__content">
            1st- Men‘s Novice 8+<br />
            1st- Men‘s 2nd Novice 8+<br />
            2nd- Women‘s Novice 8+<br />
            1st- Men‘s Varsity 8+<br />
          </div>
          <div className="event__header">
            April 2-3, 2016 * San Diego Crew Classic * San Diego, CA
          </div>
          <div className="event__header">
            April 9, 2016 * vs. UC Davis * Oakland, CA
          </div>
          <div className="event__header">
            April 16-17 * vs. California Maritime * Vallejo, CA
          </div>
          <div className="event__header">
            April 30-May 1 * Western Sprints/WIRAs * Gold River, CA
          </div>
          <div className="event__header">
            May 25-28 * ACRA National Championships * Gainesville, GA
          </div>
        </div>
        <div className="section__header" onClick={this._handleSectionOpen.bind(this, 'fa15')}>
          Fall 2015 Schedule & Results
        </div>
        <div
          className={classNames('fa15__container', {
            'fa15--open': this.state.fa15,
          }, {
            'fa15--close': !this.state.fa15,
          })}
        >
          <div className="event__header">
            October 4, 2015 * Varsity Only- Wine Country Classic * Petaluma, CA
          </div>
          <div className="result__content">
            1st- Men‘s Varsity 8+<br />
            2nd- Men‘s Varsity Lightweight 8+<br />
            1st- Men‘s Open 4+<br />
            1st- Men‘s Varsity Lightweight 8+<br />
            1st- Women‘s Varsity 8+<br />
            1st and 2nd- Women‘s Varsity Lightweight 4+<br />
          </div>
          <div className="event__header">
            October 24, 2015 * Head of the American * Gold River, CA
          </div>
          <div className="event__header">
            November 7, 2015 * Head of the Lagoon * Foster City, CA
          </div>
        </div>
        <div className="section__header" onClick={this._handleSectionOpen.bind(this, 'sp15')}>
          Spring 2015 Schedule & Results
        </div>
        <div
          className={classNames('sp15__container', {
            'sp15--open': this.state.sp15,
          }, {
            'sp15--close': !this.state.sp15,
          })}
        >
          <div className="event__header">
            Feb 22, 2015 * Women‘s Scrimmage- vs. Mills & vs. Sonoma State U. * Orinda, CA
          </div>
          <div className="result__content">
            2nd- Women‘s Varsity 8+<br />
            2nd- Women‘s Varsity 4+<br />
            1st- Women‘s Novice 8+<br />
            1st- Women‘s Novice 4+<br />
          </div>
          <div className="event__header">
            March 1, 2015 * Davis Invite (Women only) * Sacramento, CA
          </div>
          <div className="result__content">
            4th- Women‘s Varsity 4+<br />
            4th- Women‘s Junior Varsity 4+<br />
            3rd- Women‘s Novice 8+<br />
          </div>
          <div className="event__header">
            March 1, 2015 * Men‘s Tri-Duel - vs. Sacramento State U. & vs. Sonoma
            State U. * Gold River, CA
          </div>
          <div className="result__content">
            1st- Men‘s Varsity Lightweight 8+<br />
            1st- Men‘s Varsity Lightweight 4+<br />
            2nd- Men‘s Varsity 8+<br />
            2nd- Men‘s Novice 8+<br />
          </div>
        </div>
      </div>
    );
  }
}
