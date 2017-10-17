import React from 'react';
import home from '../assets/images/home-image.jpg';
import ocf from '../assets/images/ocf-hosted-penguin.svg';

const IndexComponent = () => (
  <div>
    <div>
      <img id="home" alt="" src={home} />
    </div>
    <div className="page__header">
      CAL LIGHTWEIGHT CREW
    </div>
    <div className="section__content">
      <p>
        Cal Lightweight Crew is the only team on the West Coast dedicated to men‘s
        and women‘s lightweight rowing. For more information, please contact our
        recruiting chairs, <a href="mailto:lydiachen@berkeley.edu" target="_top">Lydia Chen</a>,
        or <a href="mailto:greg.labella@berkeley.edu" target="_top">Gregory LaBella</a>.
        No experience is necessary&mdash;all are welcome.
      </p>
      <p>
        If you‘re a high school senior with prior rowing experience and have already
        applied to the College of Letters and Science, please fill out this form to be
        considered for a Special Talent Recommendation from our Head Coach: <a href="http://goo.gl/forms/qcQLb7zL04">
         http://goo.gl/forms/qcQLb7zL04</a>.
      </p>
      <p>
        *All other applicants, (i.e. those in other colleges, non-seniors) interested
        in rowing, please email the recruitment chairs.*
      </p>
    </div>
    <div className="section__header">
      LATEST NEWS - FALL 2017
    </div>
    <div className="section__content">
      <ul>
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
            <li>Womens Collegiate 8+ B [5th Place]</li>
          </ul>
        </li>
        <li>
          [September 13, 2017] - Interested in rowing?
          E-mail <a href="mailto:cegekko@berkeley.edu" target="_top"> Colby Gekko</a>!
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
