import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Navbar from '../components/Navbar';

import '../css/base.scss';

const IndexContainer = ({ children }) => (
  <div>
    <Navbar />
    <div>
      {children}
    </div>
  </div>
);

IndexContainer.propTypes = {
  children: PropTypes.element,
};

IndexContainer.defaultProps = {
  children: null,
};

export default IndexContainer;
