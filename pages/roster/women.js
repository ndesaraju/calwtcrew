import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/womensroster.jpg';

import '../../css/roster.scss';

const RosterPage = () => {
  const varsityPlayers = [
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
  ];


  const novicePlayers = [
    {
      name: 'Ashley Nguyen',
      year: 'Junior',
      hometown: 'Fountain Valley, CA',
      major: 'Mathematics & Computer Science',
    },
    {
      name: 'Audrey Chang',
      year: 'Junior',
      hometown: 'Orinda, CA',
      major: 'Economics & Statistics',
    },
    {
      name: 'Christy Kang',
      year: 'Junior',
      hometown: 'Arcadia, CA',
      major: 'Economics & Statistics',
    },
    {
      name: 'Ekaterina Fedorova',
      year: 'Sophomore',
      hometown: 'Cerritos, CA',
      major: 'Economics & Statistics',
    },
    {
      name: 'Haley Minish',
      year: 'Senior',
      hometown: 'Los Angeles, CA',
      major: 'English',
    },
    {
      name: 'Jana Quan',
      year: 'Sophomore',
      hometown: 'San Francisco, CA',
      major: 'Materials Science & Engineering',
    },
    {
      name: 'Lauren Meier',
      year: 'Sophomore',
      hometown: 'Sunnyvale, CA',
      major: 'Electrical Engineering & Computer Science',
    },
    {
      name: 'Lily Zheng',
      year: 'Junior',
      hometown: 'San Diego, CA',
      major: 'Mechanical Engineering',
    },
    {
      name: 'Linshanshan Wang',
      year: 'Junior',
      hometown: 'Jinan, China',
      major: 'Molecular and Cellular Biology',
    },
    {
      name: 'Monica Naranjo',
      year: 'Junior',
      hometown: 'Santa Ana, CA',
      major: 'Architecture & Energy Engineering',
    },
    {
      name: 'Serena Kim',
      year: 'Junior',
      hometown: 'Fresno, CA',
      major: 'Molecular and Cellular Biology & Psychology',
    },
    {
      name: 'Shreya Kareti',
      year: 'Junior',
      hometown: 'Yuba City, CA',
      major: 'History of Art',
    },
    {
      name: 'Siena Ramirez',
      year: 'Junior',
      hometown: 'Riverside, CA',
      major: 'Public Health & Political Science',
    },
    {
      name: 'Sylvia Illouz',
      year: 'Sophomore',
      hometown: 'Palo Alto, CA',
      major: 'Bioengineering',
    },
  ];

  return (
    <div className="container">
      <div className="page__header">
        2017-2018 Varsity & Novice Women
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
