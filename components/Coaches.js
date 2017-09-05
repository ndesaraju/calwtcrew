import React from 'react';
import Photo from '../components/Photo';
import marjorie from '../assets/images/marjorie.jpg';
import douglas from '../assets/images/douglas.jpg';

const Coaches = () => {
  const people = [
    {
      name: 'Marjorie Setchko',
      position: 'Women\'s Head Coach',
      email: 'marjoriesetchko@gmail.com',
      image: marjorie,
    },
    {
      name: 'Nicholas Angelides',
      position: 'Men\'s Head Coach',
      email: 'angelides@berkeley.edu',
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
