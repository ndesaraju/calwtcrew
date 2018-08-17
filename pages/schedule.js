import React from 'react';
import schedule from '../assets/images/schedule.jpg';

const ScheduleComponent = () => (
  <div>
    <div className="page__header">
      2018-2019 Race Schedule and Results
    </div>
    <div className="section__content">
      Fall 2018 Schedule Coming Soon!
    </div>
    <img id="schedule__pic" alt="" src={schedule} />
  </div>
);

export default ScheduleComponent;
