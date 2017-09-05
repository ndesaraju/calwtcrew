import React from 'react';
import Photo from '../components/Photo';
import chris from '../assets/images/officers/chris.png';
import hannah from '../assets/images/officers/hannah.jpg';
import lydia from '../assets/images/officers/lydia.jpg';
import peter from '../assets/images/officers/peter.jpg';
import colby from '../assets/images/officers/colby.jpg';

const Officers = () => {
  const people = [
    {
      name: 'Lydia Chen',
      position: 'President / Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: lydia,
    },
    {
      name: 'Samantha Lai',
      position: 'Treasurer',
      email: 'samanthalai@berkeley.edu',
      image: colby,
    },
    {
      name: 'Eric Liu',
      position: 'Equipment Officer',
      email: 'ericliu1131@berkeley.edu',
      image: chris,
    },
    {
      name: 'Gregory LaBella',
      position: 'Recruiting Co-Chair',
      email: 'hannah.rudoff@berkeley.edu',
      image: hannah,
    },
    {
      name: 'Andrew Chen',
      position: 'Men\'s Travel Officer',
      email: 'andrewbchen@berkeley.edu',
      image: peter,
    },
    {
      name: 'Cassie Redding',
      position: 'Women\'s Travel Officer',
      email: 'acredding@berkeley.edu',
      image: colby,
    },
  ];

  return (
    <div className="officers">
      {people.map((person) => (
        <div className="officer__container">
          <Photo data={person} />
        </div>
      ))}
    </div>
  );
};

export default Officers;
