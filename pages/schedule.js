import React from 'react';
import schedule from '../assets/images/schedule.jpg';

const ScheduleComponent = () => (
  <div>
    <div className="page__header">
      2015-2016 Race Schedule and Results
    </div>
    <div>
    FALL 2017 SCHEDULE COMING SOON!
    </div>
    <img id="schedule__pic" alt="" src={schedule} />
  </div>
);

export default ScheduleComponent;
