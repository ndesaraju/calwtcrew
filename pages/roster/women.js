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
      major: 'Chemical Engineering & French',
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
      major: 'Molecular and Cellular Biology & Computer Science',
    },
  ];


  const novicePlayers = [
    {
      name: 'Ashley Nguyen',
      year: 'Sophomore',
      hometown: 'Fountain Valley, CA',
      major: 'Mathematics & Computer Science',
    },
    {
      name: 'Audrey Chang',
      year: 'Sophomore',
      hometown: 'Orinda, CA',
      major: 'Economics & Statistics',
    },
    {
      name: 'Christy Kang',
      year: 'Sophomore',
      hometown: 'Arcadia, CA',
      major: 'Economics & Statistics',
    },
    {
      name: 'Cindy Barrios',
      year: 'Senior',
      hometown: 'Los Angeles, CA',
      major: 'Molecular Environmental Biology, Microbiology',
    },
    {
      name: 'Ekaterina Fedorova',
      year: 'Freshman',
      hometown: 'Cerritos, CA',
      major: 'Economics & Statistics',
    },
    {
      name: 'Haley Minish',
      year: 'Junior',
      hometown: 'Los Angeles, CA',
      major: 'English',
    },
    {
      name: 'Hermine Simonsen',
      year: 'Grad. Student',
      hometown: 'Oslo, Norway',
      major: 'Civil Engineering',
    },
    {
      name: 'Jana Quan',
      year: 'Freshman',
      hometown: 'San Francisco, CA',
      major: 'Materials Science & Engineering',
    },
    {
      name: 'Lauren Meier',
      year: 'Freshman',
      hometown: 'Sunnyvale, CA',
      major: 'Electrical Engineering & Computer Science',
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
      major: 'Molecular and Cellular Biology',
    },
    {
      name: 'Monica Naranjo',
      year: 'Sophomore',
      hometown: 'Santa Ana, CA',
      major: 'Architecture & Energy Engineering',
    },
    {
      name: 'Serena Kim',
      year: 'Sophomore',
      hometown: 'Fresno, CA',
      major: 'Molecular and Cellular Biology & Psychology',
    },
    {
      name: 'Shreya Kareti',
      year: 'Sophomore',
      hometown: 'Yuba City, CA',
      major: 'History of Art',
    },
    {
      name: 'Siena Ramirez',
      year: 'Sophomore',
      hometown: 'Riverside, CA',
      major: 'Public Health & Political Science',
    },
    {
      name: 'Sylvia Illouz',
      year: 'Freshman',
      hometown: 'Palo Alto, CA',
      major: 'Bioengineering',
    },
    {
      name: 'Youmna Rabie',
      year: 'Sophomore',
      hometown: 'Cairo, Egypt',
      major: 'Computer Science & Economics',
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
