import React from 'react';
import join1 from '../assets/images/join1.jpg';
import join2 from '../assets/images/join2.jpg';

const JoinComponent = () => (
  <div>
    <div className="page__header">
      JOINING CAL LIGHTWEIGHT ROWING
    </div>
    <div className="centered__content">
      <img src={join1} alt="join1" />
    </div>
    <div className="section__header">
      <br />
      FREQUENTLY ASKED QUESTIONS
    </div>
    <div className="section__content">
      <p>
        <b>
          Q: Will I be behind if I don&#39;t have prior experience?
        </b>
        <br />
        A: If you have never touched an oar before in your life, don&#39;t worry! Many of the most
        successful rowers in history walked on to their college teams with no experience. In fact,
        over 70% of Olympians began their rowing careers in college. Our expert coaching staff will
        teach you the precise technique required to row effectively and help you get into the best
        shape of your life! While it helps to have an athletic background (especially from similar
        endurance sports such as cross-country, swimming, or cycling) all you really need to
        succeed at Cal Lightweight is  a willingness to work hard for yourself and your teammates.
        <br /><br />
        <b>
          Q: What kind of resources does Cal have for experienced rowers?
        </b>
        <br />
        A: Athletes who come to Cal with rowing experience from high school or junior college can
        expect to immediately row with the varsity men or women. They will be able to immediately
        take advantage of our top-of-the-line new Resolutes, and will also be able to get their
        workouts done in our new erg room featuring brand-new Concept II Model E ergs. Cardio
        equipment and weights are conveniently located two floors above the erg room in the RSF
        student gym.
        <br /><br />
        <b>
          Q: Aren&#39;t practices really early in the morning? What if I can&#39;t wake up?
        </b>
        <br />
        A: Water practices are held 5am-7:30am and land practices are held 6am-7:30am, which
        allows students to be back on campus in time to make their 8am classes. Don&#39;t let the
        early wake-up scare you! You&#39;ll adjust quickly and the early practice time allows you
        time for schoolwork, classes, clubs, or socializing in the evenings. The rewards of
        rowing are well worth the time commitment!
        <br /><br />
        <b>
          Q: Isn&#39;t rowing one of the most expensive sports? What if I can&#39;t afford it?
        </b>
        <br />
        A: While rowing is generally an expensive sport, our $700 a semester dues are some of the
        lowest in the country. We have a policy of letting everyone row regardless of financial
        situation, so if you are in need of reduced dues you just have to let us know!
        <br />
      </p>
    </div>
    <div className="section__header">
      INCOMING FRESHMEN
    </div>
    <div className="section__content">
      <p>
        If you are a current high school senior with <u><b>prior rowing experience</b></u> and have
        <u><b> already applied to the College of Letters and Science</b></u>, please fill out this
        form to be considered for a <i>Special Talent Recommendation</i> from our head coach:
        <br /><br />
        <div className="centered__content">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfRWAz4R_aQHqic-Y8TU2ndP5JXvXKaYyZ_cZaCys31_esMFQ/viewform?embedded=true"
            width="760" height="700" frameBorder="0" marginHeight="0" marginWidth="0"
          >
            Loading...
          </iframe>
        </div>
        <br />
        Every year, the coaching staff writes letters of support for a few select
        candidates who meet or exceed our 2k requirement, who have good race results,
        and who have good grades and extracurriculars. This does not guarantee admission,
        but it can be of significant help to you especially at a school like Cal
        where admissions are highly competitive. If you would like to be considered for a
        Letter of Support, please contact Coach Angelides at
        <a href="mailto:angelides@berkeley.edu" target="_top">angelides@berkeley.edu</a> and
        be sure to include your 2k PR, height, weight, grades/GPA, and race results.
        Priority will be given to athletes whose first choice school is Cal.
      </p>
    </div>
    <div className="section__header">
      GENERAL APPLICANTS
    </div>
    <div className="section__content">
      <p>
        All other applicants, (i.e. those in other colleges, non-seniors) interested in rowing,
        please email the recruitment chairs. To row for Cal Lightweight Rowing, students do not need
        prior experience with rowing, nor do they need to immediately meet the weight standards
        (below 160 lbs for men; below 130 lbs for women).
      </p>
    </div>
    <br />
    <div className="centered__content">
      <img src={join2} alt="join2" />
    </div>

  </div>
);

export default JoinComponent;
