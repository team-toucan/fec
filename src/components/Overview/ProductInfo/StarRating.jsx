import React from 'react';

const StarRating = ({ state }) => {
  return (
    <div style={{ display: 'flex' }}>
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <img
            src="https://img.icons8.com/ios/50/000000/star--v1.png"
            style={{
              border: 'none',
              width: '15px',
              height: '15px',
              alignSelf: 'center',
              marginBottom: '1%',
              marginRight: '1%',
              cursor: 'pointer',
            }}
          />
        );
      })}
      <p style={{ fontSize: '10px', cursor: 'pointer' }}>
        <u>Read all reviews</u>
      </p>
    </div>
  );
};

export default StarRating;
