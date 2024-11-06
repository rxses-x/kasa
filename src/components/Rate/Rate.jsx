import React from 'react';

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

export default Rate;