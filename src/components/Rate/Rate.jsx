import React from 'react';
import PropTypes from 'prop-types';

const Rate = ({ rating }) => {
  return (
    <div className="rate">
      {[...Array(5)].map((_, index) => (
        <span
          key={index + 1}
          className={`star ${index < rating ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

Rate.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rate;