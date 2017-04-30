import React from 'react';
import Schedule from '../components/Schedule';
import schedule from '../assets/images/schedule.jpg';

const ScheduleComponent = () => (
  <div>
    <div className="page__header">
      2015-2016 Race Schedule and Results
    </div>
    <Schedule />
    <img id="schedule__pic" alt="" src={schedule} />
  </div>
);

export default ScheduleComponent;
