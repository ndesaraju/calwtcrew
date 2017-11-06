import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/womensroster.jpg';

import '../../css/roster.scss';

const RosterPage = () => {
  const varsityPlayers = [
    {
      name: 'Alexa Didio',
      year: 'Senior',
      hometown: 'Pacific Palisades, CA',
      major: 'Applied Mathematics',
    },
    {
      name: 'Brittney Nguyen',
      year: 'Senior',
      hometown: 'Pasadena, CA',
      major: 'Cognitive Science',
    },
    {
      name: 'Cameron Onodera',
      year: 'Freshman',
      hometown: 'Sacramento, CA',
      major: 'Undeclared',
    },
    {
      name: 'Cassie Redding',
      year: 'Senior',
      hometown: 'Pasadena, CA',
      major: 'Economics',
    },
    {
      name: 'Cassie Robinson',
      year: 'Freshman',
      hometown: 'Houston, TX',
      major: 'Marine Biology',
    },
    {
      name: 'Lydia Chen',
      year: 'Senior',
      hometown: 'Burke, VA',
      major: 'Dietetics',
    },
    {
      name: 'Margherita Tonini',
      year: 'Junior',
      hometown: 'Miami, FL',
      major: 'Chemical Engineering and French',
    },
    {
      name: 'Niharika Desaraju',
      year: 'Freshman',
      hometown: 'Cupertino, CA',
      major: 'Bioengineering',
    },
    {
      name: 'Philine Endres',
      year: 'Senior',
      hometown: 'Riverside, CA',
      major: 'Interdisciplinary Studies',
    },
    {
      name: 'Vicky Fong',
      year: 'Freshman',
      hometown: 'Hong Kong',
      major: 'Marine Science',
    },
    {
      name: 'Samantha Lai',
      year: 'Senior',
      hometown: 'Piedmont, CA',
      major: 'Molecular & Cellular Bio. and Comp. Sci.',
    },
  ];

  const novicePlayers = [
    {
      name: 'Ashley Nguyen',
      year: 'Sophomore',
      hometown: 'Fountain Valley, CA',
      major: 'Mathematics and Computer Science',
    },
    {
      name: 'Audrey Chang',
      year: 'Sophomore',
      hometown: 'Orinda, CA',
      major: 'Economics and Statistics',
    },
    {
      name: 'Caroline Romo',
      year: 'Freshman',
      hometown: 'Kailua, HI',
      major: 'Undeclared',
    },
    {
      name: 'Caroline Sobek',
      year: 'Sophomore',
      hometown: 'Portola Valley, CA',
      major: 'Chemical Biology and Statistics',
    },
    {
      name: 'Christy Kang',
      year: 'Sophomore',
      hometown: 'Arcadia, CA',
      major: 'Economics and Economics',
    },
    {
      name: 'Ekateria Fedorova',
      year: 'Freshman',
      hometown: 'Los Angeles, CA',
      major: 'Economics and Statistics',
    },
    {
      name: 'Hermine Simonsen',
      year: 'Grad. Student',
      hometown: 'Oslo, Norway',
      major: 'Civil Engineering',
    },
    {
      name: 'Lauren Meier',
      year: 'Freshman',
      hometown: 'Sunnyvale, CA',
      major: 'Electrical Engineering & Comp. Sci.',
    },
    {
      name: 'Lily Zheng',
      year: 'Sophomore',
      hometown: 'San Diego, CA',
      major: 'Mechanical Engineering',
    },
    {
      name: 'Linshanshan Wang',
      year: 'Sophomore',
      hometown: 'Jinan, China',
      major: 'Molecular & Cellular Biology',
    },
    {
      name: 'Alexa Didio',
      year: 'Senior',
      hometown: 'Pacific Palisades, CA',
      major: 'Applied Mathematics',
    },
    {
      name: 'Serena Kim',
      year: 'Sophomore',
      hometown: 'Fresno, CA',
      major: 'Molecular & Cell. Bio. and Psychology',
    },
    {
      name: 'Shreya Kareti',
      year: 'Sophomore',
      hometown: 'Yuba City, CA',
      major: 'Art History',
    },
    {
      name: 'Siena Ramirez',
      year: 'Sophomore',
      hometown: 'Riverside, CA',
      major: 'Public Health and Political Science',
    },
    {
      name: 'Sylvia Illouz',
      year: 'Freshman',
      hometown: 'Palo Alto, CA',
      major: 'Bio-Engineering',
    },
    {
      name: 'Younma Rabie',
      year: 'Sophomore',
      hometown: 'Cairo, Egypt',
      major: 'Computer Science and Economics',
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
