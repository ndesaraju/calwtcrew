import React from 'react';
import Photo from '../components/Photo';
import lydia from '../assets/images/officers/lydia.jpg';
import sam from '../assets/images/officers/sam.jpg';
import cassierobinson from '../assets/images/officers/cassierobinson.jpg';
import cassieredding from '../assets/images/officers/cassieredding.jpg';
import eric from '../assets/images/officers/eric.jpg';
import greg from '../assets/images/officers/greg.jpg';
import scott from '../assets/images/officers/scott.jpg';
import alex from '../assets/images/officers/alex.jpg';
import caroline from '../assets/images/officers/caroline.jpg';


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
      image: sam,
    },
    {
      name: 'Cassie Redding',
      position: 'Travel Officer',
      email: 'acredding@berkeley.edu',
      image: cassieredding,
    },
    {
      name: 'Eric Liu',
      position: 'Equipment Officer',
      email: 'ericliu1131@berkeley.edu',
      image: eric,
    },
    {
      name: 'Gregory LaBella',
      position: 'Recruitment and Safety Officer',
      email: 'greg.labella@berkeley.edu',
      image: greg,
    },
    {
      name: 'Cassie Robinson',
      position: 'Fundraising Officer',
      email: 'cassierobinson@berkeley.edu',
      image: cassierobinson,
    },
    {
      name: 'Caroline Romo',
      position: 'Fundraising Officer',
      email: 'carolineromo@berkeley.edu',
      image: caroline,
    },
    {
      name: 'Scott Shao',
      position: 'Team Photographer',
      email: 'shaos@berkeley.edu',
      image: scott,
    },
    {
      name: 'Alex Nakagawa',
      position: 'Webmaster',
      email: 'alex.nakagawa@berkeley.edu',
      image: alex,
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
