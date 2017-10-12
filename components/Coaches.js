import React from 'react';
import Photo from '../components/Photo';
import marjorie from '../assets/images/marjorie.jpg';
import douglas from '../assets/images/douglas.jpg';
import nick from '../assets/images/nick.jpg';
import nathan from '../assets/images/nathan.jpg';
import colby from '../assets/images/colby.jpg';

const Coaches = () => {
  const people = [
    {
      name: 'Nicholas Angelides',
      position: 'Men\'s Varsity Coach',
      email: 'angelides@berkeley.edu',
      image: nick,
    },
    {
      name: 'Marjorie Setchko',
      position: 'Women\'s Varsity Coach',
      email: 'marjoriesetchko@gmail.com',
      image: marjorie,
    },
    {
      name: 'Nathan Lambert',
      position: 'Men\'s Novice Coach',
      email: 'nol@berkeley.edu',
      image: nathan,
    },
    {
      name: 'Colby Gekko',
      position: 'Women\'s Novice Coach',
      email: 'cegekko@berkeley.edu',
      image: colby,
    },
    {
      name: 'Doug \'Doc\' Perez',
      position: 'Program Manager',
      email: 'dougperez63@gmail.com',
      image: douglas,
    },
  ];

  return (
    <div className="coaches">
      {people.map((person) => (
        <div className="coach__container">
          <Photo data={person} />
        </div>
      ))}
    </div>
  );
};

export default Coaches;
