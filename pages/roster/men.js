import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/mensroster.jpg';

import '../../css/roster.scss';

const RosterPage = () => {
  const varsityPlayers = [
    {
      name: 'Alex Nakagawa',
      year: 'Sophomore',
      hometown: 'South Pasadena, CA',
      major: 'Computer Science and Cognitive Science',
    },
    {
      name: 'Andrew Chen',
      year: 'Sophomore',
      hometown: 'Chino Hills, CA',
      major: 'Business Administration',
    },
    {
      name: 'David Yang',
      year: 'Grad. Student',
      hometown: 'Toronto, ON',
      major: 'Chemical & Material Science Engineering',
    },
    {
      name: 'Edison Wong',
      year: 'Senior',
      hometown: 'Canton, China',
      major: 'Cognitive Science',
    },
    {
      name: 'Eric Liu',
      year: 'Sophomore',
      hometown: 'Diamond Bar, CA',
      major: 'Molecular & Environmental Biology',
    },
    {
      name: 'Gregory Labella',
      year: 'Sophomore',
      hometown: 'Laguna Niguel, CA',
      major: 'Pre-Business',
    },
    {
      name: 'Haichao Yu',
      year: 'Sophomore',
      hometown: 'Danville, CA',
      major: 'Economics and Applied Mathematics',
    },
    {
      name: 'Scott Shao',
      year: 'Sophomore',
      hometown: 'Beijing, China',
      major: 'Chemistry',
    },
    {
      name: 'Yubang Chen',
      year: 'Freshman',
      hometown: 'Cincinnati, OH',
      major: 'Computer Science and Spanish',
    },
  ];

  const novicePlayers = [
    {
      name: 'Chris Lamb',
      year: 'Sophomore',
      hometown: 'Sunland, CA',
      major: 'Nuclear Engineering',
    },
    {
      name: 'Chris Park',
      year: 'Freshman',
      hometown: 'Scottsdale, AZ',
      major: 'Bio-Engineering',
    },
    {
      name: 'Ethan Willbrand',
      year: 'Freshman',
      hometown: 'Cincinnati, OH',
      major: 'Cognitive Science',
    },
    {
      name: 'Jacob Fajnor',
      year: 'Freshman',
      hometown: 'Aromas, CA',
      major: 'Economics and Statitcs',
    },
    {
      name: 'Jameson Hohbein',
      year: 'Junior',
      hometown: 'Brea, CA',
      major: 'Political Science',
    },
    {
      name: 'Kevin Miao',
      year: 'Freshman',
      hometown: 'Eindhoven, The Netherlands',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Sandeep Sainath',
      year: 'Freshman',
      hometown: 'Chennai, India',
      major: 'Operations Reserach & Management Science',
    },
  ];

  return (
    <div className="container">
      <div className="page__header">
        2017-2018 Varsity & Novice Men
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
