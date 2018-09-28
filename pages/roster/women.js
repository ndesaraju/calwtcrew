import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/womensroster.jpg';

import '../../css/roster.scss';

const RosterPage = () => {
  const varsityPlayers = [
    {
      name: 'Anna Mikkelborg',
      year: 'Graduate',
      hometown: 'Fox Island, WA',
      major: 'Political Science',
    },
    {
      name: 'Ashley Nguyen',
      year: 'Junior',
      hometown: 'Fountain Valley, CA',
      major: 'Mathematics & Computer Science',
    },
    {
      name: 'Brittney Nguyen',
      year: 'Senior',
      hometown: 'Pasadena, CA',
      major: 'Cognitive Science',
    },
    {
      name: 'Cassie Robinson',
      year: 'Sophomore',
      hometown: 'Houston, TX',
      major: 'Marine Biology',
    },
    {
      name: 'Ekaterina Fedorova',
      year: 'Sophomore',
      hometown: 'Cerritos, CA',
      major: 'Economics & Statistics',
    },
    {
      name: 'Margherita Tonini',
      year: 'Junior',
      hometown: 'Miami, FL',
      major: 'Chemical Engineering & French',
    },
    {
      name: 'Niharika Desaraju',
      year: 'Sophomore',
      hometown: 'Cupertino, CA',
      major: 'Bioengineering',
    },
    {
      name: 'Vicky Fong',
      year: 'Sophomore',
      hometown: 'Hong Kong',
      major: 'Marine Science',
    },
    {
      name: 'Pallavi Mundra',
      year: 'Freshman',
      hometown: 'The Woodlands, TX',
      major: 'Pre-Business, Economics',
    },
    {
      name: 'Shreeya Garg',
      year: 'Sophomore',
      hometown: 'Sunnyvale, CA',
      major: 'Microbial Biology',
    },
    {
      name: 'Shreya Kareti',
      year: 'Junior',
      hometown: 'Yuba City, CA',
      major: 'History of Art',
    },
    {
      name: 'Sophea Bonne',
      year: 'Freshman',
      hometown: 'Sunnyvale, CA',
      major: 'Chemical Engineering',
    },
  ];


  const novicePlayers = [

  ];

  return (
    <div className="container">
      <div className="page__header">
        2018-2019 Varsity & Novice Women
      </div>
      <div className="image">
        <img alt="" src={photo} />
      </div>
      <div className="roster">
        <Roster
          rosterName={'Varsity Women'}
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
          rosterName={'Novice Women'}
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
