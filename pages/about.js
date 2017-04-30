import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Officers from '../components/Officers';
import Coaches from '../components/Coaches';
import team from '../assets/images/team.jpg';

const AboutComponent = () => (
  <div>
    <div className="page__header">
      ABOUT
    </div>
    <div className="section__header">
      COACHES
    </div>
    <Coaches />
    <div className="section__header">
      OFFICERS
    </div>
    <Officers />
    <div className="section__header">
      THE CLUB
    </div>
    <div className="section__content">
      <p>
        California Lightweight Crew has been a sport club at UC Berkeley since the
        early 1970s. Today, the Cal Lightweights are the only team in the western
        United States dedicated to men‘s and women‘s lightweight rowing.
        The Cal Lightweights row out of Jack London Aquatic Center (JLAC) on the
        Oakland Estuary, which is a short 15 minute drive from campus. All four of
        the team‘s squads&mdash;Men‘s Varsity, Women‘s Varsity, Men‘s Novice, and
        Women‘s Novice&mdash;share a bay in the JLAC boathouse, creating a highly
        team-oriented atmosphere and fostering a unique social experience for
        ambitious Cal student-athletes.
      </p>
      <p>
        The Cal Lightweights row out of Jack London Aquatic Center (JLAC) on the
        Oakland Estuary, which is a short 15 minute drive from campus. All four of
        the team‘s squads&mdash;Men‘s Varsity, Women‘s Varsity, Men‘s Novice, and
        Women‘s Novice&mdash;share a bay in the JLAC boathouse, creating a highly
        team-oriented atmosphere and fostering a unique social experience for
        ambitious Cal student-athletes.
      </p>
      <p>
        To row for Cal Lightweight Crew, students do not need prior experience
        with rowing, nor do they need to immediately meet the weight standards
        (below 160 lbs for men; below 130 lbs for women). Novice rowers are taught
        how to row at the start of the season. Within two months of taking their
        first strokes, novices travel with the varsity rowers and compete during
        the fall ‘‘head racin‘‘ season (5-6 kilometer races) against novices from
        other colleges. Because the Cal Lightweights typically race openweight
        crews in the west, weight limits typically do not become a factor until
        late in the spring ‘‘sprint racing‘‘ season (2 kilometer races), when other
        teams field lightweight competition at the Western Intercollegiate Rowing
        Association (WIRA) Championships.
        Novice rowers graduate to the varsity level after their first spring
        season of competition. Varsity rowers are eligible to compete for seats in
        the top boats that the club sends to major championships&mdash;most notably,
        the San Diego Crew Classic, WIRAs, and ACRAs (our national championship
        race in Georgia).
      </p>
      <p>
        Novice rowers graduate to the varsity level after their first spring
        season of competition. Varsity rowers are eligible to compete for seats in
        the top boats that the club sends to major championships&mdash;most notably,
        the San Diego Crew Classic, WIRAs, and ACRAs (our national championship
        race in Georgia).
      </p>
      <p>
        Rowing practices are typically held from 5am to 7:30am on weekday
        mornings, with most land training days beginning at 6am.
        As a club team, Cal Lightweight Crew receives minimal funding from the
        University, effectively allowing rowers to define the purpose and goals of
        the team themselves. At the conclusion of each season, club members
        nominate and elect club officers to manage the team throughout the
        following season. This officer corps works very closely with Cal
        Recreational Sports to ensure that the team complies with sports club
        standards, collects membership dues on time, has sufficient fund-raising
        opportunities, and is being managed efficiently.
        For more information about California Lightweight Crew, please contact our
        recruiting officers, Hannah Rudoff and Lydia Chen. Their contact
        information can be found above.
      </p>
      <p>
        For more information about California Lightweight Crew, please contact our
        recruiting officers, Hannah Rudoff and Lydia Chen. Their contact
        information can be found on the home page.
      </p>
    </div>
    <img id="team" alt="" src={team} />
  </div>
);

export default AboutComponent;
