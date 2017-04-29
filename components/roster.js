import React from 'react';

import '../css/Roster.scss';

const Roster = ({ rosterName, names, sides, years, hometowns, majors }) => (
  <div className="roster-container">
    <header>
      <h1>{rosterName}</h1>
    </header>
    <div className="column-container">
      <div className="roster__column">
        <h3>Name</h3>
        {names.map((name) => (
          <div className="roster__item">
            {name}
          </div>
        ))}
      </div>
      <div className="roster__column">
        <h3>Side</h3>
        {sides.map((side) => (
          <div className="roster__item">
            {side}
          </div>
        ))}
      </div>
      <div className="roster__column">
        <h3>Year</h3>
        {years.map((year) => (
          <div className="roster__item">
            {year}
          </div>
        ))}
      </div>
      <div className="roster__column">
        <h3>Hometown</h3>
        {hometowns.map((hometown) => (
          <div className="roster__item">
            {hometown}
          </div>
        ))}
      </div>
      <div className="roster__column">
        <h3>Major</h3>
        {majors.map((major) => (
          <div className="roster__item">
            {major}
          </div>
        ))}
      </div>
    </div>
  </div>
);

Roster.propTypes = {
  rosterName: React.PropTypes.string.isRequired,
  names: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  sides: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  years: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  hometowns: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  majors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default Roster;
