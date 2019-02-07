import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/mensroster.jpg';

import '../../css/roster.scss';

const RosterPage = () => {
  const varsityPlayers = [
    {
      name: 'Alex Nakagawa',
      year: 'Junior',
      hometown: 'South Pasadena, CA',
      major: 'Data Science',
    },
    {
      name: 'Andrew Chen',
      year: 'Junior',
      hometown: 'Chino Hills, CA',
      major: 'Business Administration',
    },
    {
      name: 'Eric Liu',
      year: 'Junior',
      hometown: 'Diamond Bar, CA',
      major: 'Molecular Environmental Biology',
    },
    {
      name: 'Ethan Willbrand',
      year: 'Sophomore',
      hometown: 'Cincinnati, OH',
      major: 'Cognitive Science',
    },
    {
      name: 'Haichao Yu',
      year: 'Junior',
      hometown: 'Danville, CA',
      major: 'Economics & Applied Mathematics',
    },
    {
      name: 'Jacob Fajnor',
      year: 'Sophomore',
      hometown: 'Aromas, CA',
      major: 'Economics & Statitcs',
    },
    {
      name: 'Joseph Capozza',
      year: 'Junior',
      hometown: 'Skaneateles, NY',
      major: 'Chemical Engineering',
    },
    {
      name: 'Kevin Miao',
      year: 'Sophomore',
      hometown: 'Eindhoven, The Netherlands',
      major: 'Molecular and Cell Biology & Data Science',
    },
    {
      name: 'Kevin Shi',
      year: 'Sophomore',
      hometown: 'San Jose, CA',
      major: 'Electrical Engineering & Computer Science',
    },
    {
      name: 'Sandeep Sainath',
      year: 'Sophomore',
      hometown: 'Chennai, India',
      major: 'Operations Reserach & Management Science',
    },
    {
      name: 'Scott Shao',
      year: 'Junior',
      hometown: 'Beijing, China',
      major: 'Chemistry',
    },
  ];

  const novicePlayers = [

  ];

  return (
    <div className="container">
      <div className="page__header">
        2018-2019 Varsity & Novice Men
      </div>
      <div className="image">
        <img alt="" src={photo} />
      </div>
      <div className="roster">
        <Roster
          rosterName={'Varsity Men'}
          names={varsityPlayers.map((person) => (
            person.name
          ))}
          sides={varsityPlayers.map((person) => (
            person.side
          ))}
          years={varsityPlayers.map((person) => (
            person.year
          ))}
          hometowns={varsityPlayers.map((person) => (
            person.hometown
          ))}
          majors={varsityPlayers.map((person) => (
            person.major
          ))}
        />
      </div>
      <div className="roster">
        <Roster
          rosterName={'Novice Men'}
          names={novicePlayers.map((person) => (
            person.name
          ))}
          sides={novicePlayers.map((person) => (
            person.side
          ))}
          years={novicePlayers.map((person) => (
            person.year
          ))}
          hometowns={novicePlayers.map((person) => (
            person.hometown
          ))}
          majors={novicePlayers.map((person) => (
            person.major
          ))}
        />
      </div>
    </div>
  );
};


export default RosterPage;
