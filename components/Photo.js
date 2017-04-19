import React, { PropTypes } from 'react';

const Photo = (props) => (
  <div>
    <div className="photo">
      <img
        src={props.data.image}
        alt={props.data.name}
      />
    </div>
    <div className="photo__detail">
      <div className="photo__detail--name">
        {props.data.name}
      </div>
      <div className="photo__detail--position">
        {props.data.position}
      </div>
      <div className="photo__detail--email">
        {props.data.email}
      </div>
    </div>
  </div>
);

Photo.propTypes = {
  data: React.PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Photo;
