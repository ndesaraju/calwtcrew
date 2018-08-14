import React from 'react';
import home from '../assets/images/home_test2.png';
import ocf from '../assets/images/ocf-hosted-penguin.svg';

const IndexComponent = () => (
  <div>
    <div>
      <img id="home" alt="" src={home} />
    </div>
    <div className="page__header">
      CAL LIGHTWEIGHT ROWING
    </div>
    <div className="section__content">
      <p>
        California Lightweight Rowing is the only team on the West Coast dedicated to men‘s
        and women‘s lightweight rowing. For more information, please contact our
        recruiting chairs: <a href="mailto:vfong@berkeley.edu" target="_top">Vicky Fong</a>
        , <a href="mailto:margherita711@berkeley.edu" target="_top">Margherita Tonini</a>
        , <a href="mailto:sandeepsainath@berkeley.edu" target="_top">Sandeep Sainath</a>
        , or <a href="mailto:ewillbrand@berkeley.edu" target="_top">Ethan Willbrand</a>. No
        experience is necessary&mdash;all are welcome.
      </p>
      <p>
        If you‘re a high school senior with prior rowing experience and have already
        applied to the College of Letters and Science, please fill
        out <a href="https://goo.gl/forms/dAQVy2MfB4iEQPZH3">this form</a> to be
        considered for a Special Talent Recommendation from our Head Coach.
      </p>
      <p>
        *All other applicants, (i.e. those in other colleges, non-seniors) interested
        in rowing, please email the recruitment chairs.*
      </p>
    </div>
    <div className="section__header">
      LATEST NEWS - SPRING 2018
    </div>
    <div className="section__content">
      <ul>
        <li>
          [April 8, 2018] - A successful first home race at the Oakland Estuary versus Sonoma State!
          Full results are listed <a href="http://www.row2k.com/results/resultspage.cfm?UID=1021498F619705E0D7DDE4CBB13B31C3&cat=1">here</a>.
        </li>
        <li>
          [April 2, 2018] - A big THANK YOU to the UCLA Mens&#39; Crew for a fun day of racing
          on the beautiful Marina del Rey.
        </li>
        <li>
          [March 30, 2018] - Until next year! See the full results from San Diego Crew
          Classic <a href="https://www.regattacentral.com/regatta/results2/?job_id=5379&org_id=1385">here.</a>
        </li>
        <li>
          [March 23, 2018] - Wish us luck as we send all four squads down to Southern California for
          the San Diego Crew Classic and a dual versus our friends at UCLA!
        </li>
        <li>
          [January 16, 2018] - Spring racing season has officially BEGUN!
        </li>
      </ul>
    </div>
    <div className="section__header">
      FALL 2017
    </div>
    <div className="section__content">
      <ul>
        <li>
          [November 11, 2017] - Fantastic racing and beautiful weather down in
          Foster City for the <a href="https://www.regattacentral.com/regatta/?job_id=5341">Head of the Lagoon Regatta</a>.
          Congratulations to the varsity crews for a great final fall season race. Results:
          <ul>
            <li>Mens Collegiate Lightweight 4+ [1st Place]</li>
            <li>Mens Open 2x [2nd Place]</li>
            <li>Womens Collegiate 8+ [5th Place]</li>
          </ul>
        </li>
        <li>
          [October 28, 2017] - The Head of the American marked the first official
          race for our novice rowers! Thank you to the Sacramento Aquatic Center for hosting us.
        </li>
        <li>
          [October 16, 2017] - The next race will be held at the <a href="https://www.regattacentral.com/regatta/entries/?job_id=5375&org_id=1385">
          Head of the American</a> in Sacramento, CA on October 28, 2017. Go Bears!
        </li>
        <li>
          [October 1, 2017] Congratulations to the varsity men and women crews on
          a fantastic showing at the Wine Country Classic in Petaluma, CA! Results:
          <ul>
            <li>Womens Collegiate 8+ [1st Place]</li>
            <li>Mens Collegiate 8+ [2nd Place]</li>
            <li>Mens Collegiate Lightweight 4+ [2nd Place]</li>
            <li>Womens Collegiate Lightweight 4+ A [2nd Place]</li>
            <li>Womens Collegiate 4+ B [5th Place]</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="recruit__video">
      <iframe
        src="https://player.vimeo.com/video/130400464" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen
      />
    </div>
    <a href="https://www.ocf.berkeley.edu" rel="noopener noreferrer" target="_blank">
      <img id="ocf" alt="Hosted by the OCF" src={ocf} />
    </a>
  </div>
);

export default IndexComponent;
