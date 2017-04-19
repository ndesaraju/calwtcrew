import React from 'react';
import Photo from '../components/Photo';
import marjorie from '../assets/images/marjorie.jpg';
import douglas from '../assets/images/douglas.jpg';

const Coaches = () => {
  const people = [
    {
      name: 'Marjorie Setchko',
      position: 'Women\'s Head Coach',
      email: '',
      image: marjorie,
    },
    {
      name: 'Douglas Perez',
      position: 'Men\'s Head Coach',
      email: '',
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
