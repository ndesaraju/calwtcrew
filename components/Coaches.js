import React from 'react';
import Photo from '../components/Photo';
import marjorie from '../assets/images/marjorie.jpg';
import nick from '../assets/images/nick.jpg';
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
      name: 'Colby Gekko',
      position: 'Women\'s Novice Coach',
      email: 'cegekko@berkeley.edu',
      image: colby,
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
