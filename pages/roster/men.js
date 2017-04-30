import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/mensroster.jpg';

import '../../css/Roster.scss';

const RosterPage = () => {
  const varsityPlayers = [
    {
      name: 'Amos Frank',
      side: 'No Preference',
      year: 'Freshman',
      hometown: 'Vancouver, BC',
      major: 'Undeclared',
    },
    {
      name: 'Andy Chung',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Burbank, CA',
      major: 'Economics',
    },
    {
      name: 'Arthur Sebes',
      side: 'No Preference',
      year: 'Grad Student',
      hometown: 'Lyon, France',
      major: 'Transportation Engineering',
    },
    {
      name: 'Ben Bavonese',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Ann Arbor, MI',
      major: 'Economics',
    },
    {
      name: 'Brian Osgood',
      side: 'Port',
      year: 'Senior',
      hometown: 'Santa Barbara, CA',
      major: 'Political Science',
    },
    {
      name: 'Chris Chen',
      side: 'Port',
      year: 'Junior',
      hometown: 'Arcadia, CA',
      major: 'Chemical Biology',
    },
    {
      name: 'Daniel Chang',
      side: 'Starboard',
      year: 'Sophomore',
      hometown: 'Hightstown, NJ',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'David Yang',
      side: 'Port',
      year: 'Junir',
      hometown: 'Toronto, ON',
      major: 'Chemical & Material Science Engineering',
    },
    {
      name: 'Edison Wang',
      side: 'Coxswain',
      year: 'Sophomore',
      hometown: 'Canton, China',
      major: 'Cognitive Science',
    },
    {
      name: 'George Man',
      side: 'Starboard',
      year: 'Sophomore',
      hometown: 'San Francisco, CA',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Ishaan Golding',
      side: 'Coxswain',
      year: 'Grad Student',
      hometown: 'Austin, Texas',
      major: 'Political Science',
    },
    {
      name: 'Jake Tennant',
      side: 'No Preference',
      year: 'Freshman',
      hometown: 'Sacramento, CA',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Jason Ke',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'San Diego, CA',
      major: 'Undeclared',
    },
    {
      name: 'Jose Fernandez',
      side: 'Port',
      year: 'Sophomore',
      hometown: 'Fullerton, CA',
      major: 'Ethnic Studies',
    },
    {
      name: 'Michael Giron',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Hemet, CA',
      major: 'Development Studies',
    },
    {
      name: 'Palmer Hayward',
      side: 'No Preference',
      year: 'Senior',
      hometown: 'San Diego, CA',
      major: 'Mechanical Engineering',
    },
    {
      name: 'Thomas Dwelley',
      side: 'Starboard',
      year: 'Grad Student',
      hometown: 'Santa Barbara, CA',
      major: 'Mechanical Engineering',
    },
  ];

  const novicePlayers = [
    {
      name: 'Andrew Capistrano',
      side: 'No Preference',
      year: 'Sophomore',
      hometown: 'Hong Kong, China',
      major: 'Environmental Science',
    },
    {
      name: 'Andrew Chi',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Garden Grove, CA',
      major: 'Economics & Pre-Business',
    },
    {
      name: 'Antonio Sakkis',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Houston, TX',
      major: 'Undeclared',
    },
    {
      name: 'Chris Webster',
      side: 'Starboard',
      year: 'Sophomore',
      hometown: 'Stockton, CA',
      major: 'Economics',
    },
    {
      name: 'Chan Varma',
      side: 'Coxswain',
      year: 'Freshman',
      hometown: 'Bangalore, India',
      major: 'Computer Science',
    },
    {
      name: 'Eric Vengrin',
      side: 'No Preference',
      year: 'Freshman',
      hometown: 'San Diego, CA',
      major: 'Undeclared',
    },
    {
      name: 'Derek Feng',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Fremont, CA',
      major: 'Undeclared',
    },
    {
      name: 'Jake Yukich',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Los Angeles, CA',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Jameson Mah',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Oxnard, CA',
      major: 'Molecular & Cell Biology',
    },
    {
      name: 'Jeffrey Liu',
      side: 'Port',
      year: 'Junior',
      hometown: 'Palo Alto, CA',
      major: 'Electrical Engineering & Comp. Sci',
    },
    {
      name: 'Jonathan Lin',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'San Jose, CA',
      major: 'Chemical Biology & Music',
    },
    {
      name: 'Jonathan Lowery',
      side: 'Port',
      year: 'Junior',
      hometown: 'San Diego, CA',
      major: 'Economics',
    },
    {
      name: 'Joshua Sanders',
      side: 'Port',
      year: 'Junior',
      hometown: 'Clearwater, FL',
      major: 'Music',
    },
    {
      name: 'Kevin Mahoney',
      side: 'No Preference',
      year: 'Freshman',
      hometown: 'East Richmond Heights, CA',
      major: 'Civil & Environmental Engineering',
    },
    {
      name: 'Luca Amato',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Los Angeles, CA',
      major: 'Political Science',
    },
    {
      name: 'Magne Ledsaak',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Stavanger, Norway',
      major: 'Industrial Economics',
    },
    {
      name: 'Mateo Lopez',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Bakersfield, CA',
      major: 'Public Health',
    },
    {
      name: 'Michael Eliot',
      side: 'No Preference',
      year: 'Freshman',
      hometown: 'Huntington Beach, CA',
      major: 'Pre-Business and Computer Science',
    },
    {
      name: 'Omid Rhezaii',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'San Diego, CA',
      major: 'Undeclared',
    },
    {
      name: 'Peter Birghoffer',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Budapest, Hungary',
      major: 'Undeclared',
    },
    {
      name: 'Salim Dharamshi',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Nairobi, Kenya',
      major: 'Nairobi, Kenya',
    },
    {
      name: 'Samson Mataraso',
      side: 'Port',
      year: 'Freshman',
      hometown: 'Walnut Creek, CA',
      major: 'Bioengineering',
    },
    {
      name: 'Shaun Singh',
      side: 'Port',
      year: 'Senior',
      hometown: 'Berkeley, CA',
      major: 'Economics',
    },
    {
      name: 'Shahzad Shaukat',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Lahore, Pakistan',
      major: 'Undeclared',
    },
    {
      name: 'Taeho Jung',
      side: 'Starboard',
      year: 'Junior',
      hometown: 'Busan, South Korea',
      major: 'Japanese',
    },
    {
      name: 'Taylor Wong',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Cary, NC',
      major: 'Electrical Engineering & Comp. Sci.',
    },
    {
      name: 'Tristan Wasley',
      side: 'Starboard',
      year: 'Freshman',
      hometown: 'Laguna Hills, CA',
      major: 'Undeclared',
    },
    {
      name: 'Windsor Taro',
      side: 'No Preference',
      year: 'Senior',
      hometown: 'San Antonio, TX',
      major: 'Economics',
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
