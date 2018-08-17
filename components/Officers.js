import React from 'react';
import Photo from '../components/Photo';
import alex from '../assets/images/officers/alex.jpg';
import andrew from '../assets/images/officers/andrew.jpg';
import brittney from '../assets/images/officers/brittney.jpg';
import cassie from '../assets/images/officers/cassierobinson.jpg';
import eric from '../assets/images/officers/eric.jpg';
import ethan from '../assets/images/officers/ethan.jpg';
import haichao from '../assets/images/officers/haichao.jpg';
import jana from '../assets/images/officers/jana.jpg';
import kevin from '../assets/images/officers/kevin.jpg';
import lauren from '../assets/images/officers/lauren.jpg';
import margherita from '../assets/images/officers/margherita.jpg';
import niharika from '../assets/images/officers/niharika.jpg';
import sandeep from '../assets/images/officers/sandeep.jpg';
import vicky from '../assets/images/officers/vicky.jpg';


const Officers = () => {
  const people = [
    {
      name: 'Brittney Nguyen',
      position: 'President',
      email: 'brit116299@berkeley.edu',
      image: brittney,
    },
    {
      name: 'Alex Nakagawa',
      position: 'Vice President',
      email: 'alex.nakagawa@berkeley.edu',
      image: alex,
    },
    {
      name: 'Andrew Chen',
      position: 'Treasurer',
      email: 'andrewc0129@gmail.com',
      image: andrew,
    },
    {
      name: 'Haichao Yu',
      position: 'Equipment Officer',
      email: 'hyu369@berkeley.edu',
      image: haichao,
    },
    {
      name: 'Kevin Miao',
      position: 'Travel Officer',
      email: 'kevinmiao@berkeley.edu',
      image: kevin,
    },
    {
      name: 'Lauren Meier',
      position: 'Travel and Media Officer',
      email: 'meier.lauren@berkeley.edu',
      image: lauren,
    },
    {
      name: 'Sandeep Sainath',
      position: 'Recruitment Co-Chair',
      email: 'sandeepsainath@berkeley.edu',
      image: sandeep,
    },
    {
      name: 'Ethan Willbrand',
      position: 'Recruitment Co-Chair',
      email: 'ewillbrand@berkeley.edu',
      image: ethan,
    },
    {
      name: 'Margherita Tonini',
      position: 'Recruitment Co-Chair',
      email: 'margherita711@berkeley.edu',
      image: margherita,
    },
    {
      name: 'Vicky Fong',
      position: 'Recruitment and Safety Officer',
      email: 'vfong@berkeley.edu',
      image: vicky,
    },
    {
      name: 'Cassie Robinson',
      position: 'Apparel Co-Chair',
      email: 'cassierobinson@berkeley.edu',
      image: cassie,
    },
    {
      name: 'Niharika Desaraju',
      position: 'Apparel Co-Chair',
      email: 'niharika.desaraju@berkeley.edu',
      image: niharika,
    },
    {
      name: 'Eric Liu',
      position: 'Fundraising Officer',
      email: 'ericliu1131@berkeley.edu',
      image: eric,
    },
    {
      name: 'Jana Quan',
      position: 'Social Chair',
      email: 'jaquan1@berkeley.edu',
      image: jana,
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
