import React from 'react';
import Roster from '../../components/Roster';
import photo from '../../assets/images/womensroster.jpg';

import '../../css/rosters.scss';

const RosterPage = () => (
  <div className="container">
    <div className="page__header">
      2015-2016 Varsity & Novice Women
    </div>
    <div className="image">
      <img alt="" src={photo} />
    </div>
    <div className="roster">
      <Roster
        rosterName={'Varsity Women'}
        names={[
          'Cassie Redding',
          'Colby Gekko',
          'Hannah Rudoff',
          'Lydia Chen',
          'Monisha Lensink-Vasan',
          'Philine Endres',
          'Reni Forer',
          'Samantha Lai',
          'Tori Cabot',
        ]}
        sides={[
          'Starboard',
          'Port',
          'Port',
          'No preference',
          'No preference',
          'Starboard',
          'Starboard',
          'Port',
          'Port',
        ]}
        years={[
          'Junior',
          'Senior',
          'Senior',
          'Junior',
          'Junior',
          'Junior',
          'Junior',
          'Junior',
          'Senior',
        ]}
        hometowns={[
          'Pasadena, CA',
          'San Clemente, CA',
          'Portland, OR',
          'Burke, VA',
          'Denver, CO',
          'Riverside, CA',
          'Westport, CT',
          'Piedmont, CA',
          'Holliston, MA',
        ]}
        majors={[
          'Undeclared',
          'Chemistry & Molecular & Cell Bio.',
          'Political Science & Economics',
          'Dietetics',
          'Molecular & Cell Biology',
          'Interdisciplinary Studies',
          'Cognitive Science',
          'Molecular & Cell Biology',
          'Media Studies',
        ]}
      />
    </div>
    <div className="roster">
      <Roster
        rosterName={'Novice Women'}
        names={[
          'Amanda Chung',
          'Annie Speckhahn',
          'Aparna Dhinakaran',
          'Brittany Nguyen',
          'Janice Luong',
          'Jeannie O\'Driscoll',
          'Kim Sakai',
          'Kylie Sammons',
          'Liz Go',
          'Maddie Huber',
          'Madie Dunlap',
          'Minna Brown',
          'Zoe Ziegler',
        ]}
        sides={[
          'Port',
          'No Preference',
          'Port',
          'Coxswain',
          'Port',
          'No preference',
          'Coxswain',
          'Starboard',
          'Port',
          'Port',
          'Starboard',
          'No preference',
          'Coxswain',
        ]}
        years={[
          'Freshman',
          'Freshman',
          'Senior',
          'Freshman',
          'Freshman',
          'Junior',
          'Junior',
          'Junior',
          'Freshman',
          'Freshman',
          'Freshman',
          'Freshman',
          'Freshman',
        ]}
        hometowns={[
          'Santa Barbara, CA',
          'Reno, NV',
          'Fremont, CA',
          'San Jose, CA',
          'Rowland Heights, CA',
          'Cork, Ireland',
          'Morgan Hill, CA',
          'Corona, CA',
          'La Quinta, CA',
          'Napa, CA',
          'Chico, CA',
          'Oakland, CA',
          'Arcata, CA',
        ]}
        majors={[
          'Political Science',
          'Undeclared',
          'Electrical Engineering & Comp. Sci.',
          'Undeclared',
          'Integrative Biology',
          'Engineering (Exchange)',
          'Undeclared',
          'Anthropology',
          'Molecular & Cell Biology',
          'Nutrition',
          'Mathematics',
          'Undeclared',
          'Undeclared',
        ]}
      />
    </div>
  </div>
);

export default RosterPage;
