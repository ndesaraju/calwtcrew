import React from 'react';
import donate from '../assets/images/donate-now.png';

const AlumniComponent = () => (
  <div>
    <div className="page__header">
      CAL LIGHTWEIGHT CREW ALUMNI
    </div>
    <div className="section__content">
      <p>
        Dear alumni:
      </p>
      <p>
        Thank you for your generous support of Cal Lightweight Crew! Your
        generous moral and financial  support is what allows us to continue to
        maintain the equipment, grow the program and achieve greatness in the
        sport of lightweight rowing.
      </p>
      <p>
        If you wish to make a donation, you may:
      </p>
      <p>
        1) Donate directly to the operating fund——this will help the team meet
        immediate financial needs. Click the button to donate now online——it‘s
        quick and easy!
      </p>
      <a href="https://give.berkeley.edu/egiving/index.cfm?Fund=FU0820000" rel="noopener noreferrer" target="_blank">
        <img id="donate--now" alt="" src={donate} />
      </a>
      <p>
        2) Donate to the Alumni association——this will help the team fund its
        long-term goals. Please
        contact <a href="mailto:nfradkin@cal.berkeley.edu" target="_top">Nick Fradkin</a>,
        CLCA treasurer, at if you would like to donate to the Alumni association.
      </p>
      <p>
        Any and all donations are greatly appreciated!
      </p>
      <p>
        Sincerely, <br />
        <i>Cal Lightweight Crew</i>
      </p>
    </div>
  </div>
);

export default AlumniComponent;
