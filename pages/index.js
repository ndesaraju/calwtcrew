import React from 'react';
import home from '../assets/images/home-image.jpg';

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
        or <a href="mailto:hannah.rudoff@berkeley.edu" target="_top">Hannah Rudoff</a>.
        No experience is necessary&mdash;all are welcome.
      </p>
      <p>
        If you‘re a high school senior with prior rowing experience and have already
        applied to the College of Letters and Science, please fill out this form to be
        considered for a Special Talent Recommendation from our Head Coach:
        http://goo.gl/forms/qcQLb7zL04.
      </p>
      <p>
        *All other applicants, (i.e. those in other colleges, non-seniors) interested
        in rowing, please email the recruitment chairs.*
      </p>
    </div>
    <div className="section__header">
      LATEST NEWS - FALL 2016
    </div>
    <div className="section__content">
      <ul>
        <li>
          Don‘t miss Cal Lights‘ last race of the season at Head of the Lagoon, this
          November 12th in Foster City.
        </li>
        <li>
          Cal Lightweight Crew had a great showing at Head of the American, highlighted
          by wins in the women‘s quad and a 2nd place finish in the men‘s light 8!
        </li>
        <li>
          Don‘t miss Cal Lights‘ last race of the season at Head of the Lagoon, this
          November 12th in Foster City.
        </li>
        <li>
          Catch the first racing action of the season on October 2, 2016&mdash;the Golden
          Bears‘ varsity men and women will be opening the season at the Wine Country
          Fall Classic in Petaluma, CA. GO BEARS!
        </li>
        <li>
          Congratulations to our women‘s pair, Tori Cabot and Philine Endres, for
          their silver medal at ACRA National Championships! GO BEARS and have a
          great summer!
        </li>
        <li>
          The Lightweight Bears had a strong finish at their regional championships
          (WIRAs) in Sacramento, taking home gold in the women‘s light four, silver
          in the women‘s pair, and bronze in the men‘s light four.
        </li>
      </ul>
    </div>
    <div className="recruit__video">
      <iframe
        src="https://player.vimeo.com/video/130400464" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen
      />
    </div>
  </div>
);

export default IndexComponent;
