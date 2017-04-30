import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/womensroster.jpg';

import '../../css/Roster.scss';

const RosterPage = () => {
  const varsityPlayers = [
    {
      name: 'Cassie Redding',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Pasadena, CA',
      major: 'Undeclared',
    },
    {
      name: 'Colby Gekko',
      side: 'Port',
      year: 'Senior',
      hometown: 'San Clemente, CA',
      major: 'Chemistry & Molecular & Cell Bio.',
    },
    {
      name: 'Hannah Rudoff',
      side: 'Port',
      year: 'Senior',
      hometown: 'Portland, OR',
      major: 'Political Science & Economics',
    },
    {
      name: 'Lydia Chen',
      side: 'No Preference',
      year: 'Junior',
      hometown: 'Burke, VA',
      major: 'Dietetics',
    },
    {
      name: 'Monisha Lensink-Vasan',
      side: 'No Preference',
      year: 'Junior',
      hometown: 'Denver, CO',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Philine Endres',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Riverside, CA',
      major: 'Interdisciplinary Studies',
    },
    {
      name: 'Reni Forer',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Westport, CT',
      major: 'Cognitive Science',
    },
    {
      name: 'Samantha Lai',
      side: 'Port',
      year: 'Junior',
      hometown: 'Piedmont, CA',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Tori Cabot',
      side: 'Port',
      year: 'Senior',
      hometown: 'Holliston, MA',
      major: 'Media Studies',
    },
  ];

  const novicePlayers = [
    {
      name: 'Amanda Chung',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Santa Barbara, CA',
      major: 'Political Science',
    },
    {
      name: 'Annie Speckhahn',
      side: 'No Preference',
      year: 'Freshman',
      hometown: 'Reno, NV',
      major: 'Undeclared',
    },
    {
      name: 'Aparna Dhinakaran',
      side: 'Port',
      year: 'Senior',
      hometown: 'Fremont, CA',
      major: 'Electrical Engineering & Comp. Sci.',
    },
    {
      name: 'Brittany Nguyen',
      side: 'Coxswain',
      year: 'Freshman',
      hometown: 'San Jose, CA',
      major: 'Undeclared',
    },
    {
      name: 'Janice Luong',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Rowland Heights, CA',
      major: 'Integrative Biology',
    },
    {
      name: 'Jeannie O&#39;Driscoll',
      side: 'No Preference',
      year: 'Junior',
      hometown: 'Cord, Ireland',
      major: 'Engineering (Exchange)',
    },
    {
      name: 'Kim Sakai',
      side: 'Coxswain',
      year: 'Junior',
      hometown: 'Morgan Hill, CA',
      major: 'Undeclared',
    },
    {
      name: 'Kylie Sammons',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Corona, CA',
      major: 'Anthropology',
    },
    {
      name: 'Liz Go',
      side: 'Port',
      year: 'Freshman',
      hometown: 'La Quinta, CA',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Maddie Huber',
      side: 'Port',
      year: 'Freshman',
      hometown: '',
      major: 'Nutrition',
    },
    {
      name: 'Madie Dunlap',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Chico, CA',
      major: 'Mathematics',
    },
    {
      name: 'Minna Brown',
      side: 'No Preference',
      year: 'Freshman',
      hometown: 'Oakland, CA',
      major: 'Undeclared',
    },
    {
      name: 'Zoe Ziegler',
      side: 'Coxswain',
      year: 'Freshman',
      hometown: 'Arcata, CA',
      major: 'Undeclared',
    },
  ];

  return (
    <div className="container">
      <div className="page__header">
        2015-2016 Varsity & Novice Men
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
