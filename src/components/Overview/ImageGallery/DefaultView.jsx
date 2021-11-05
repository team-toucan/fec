import React, { useState } from 'react';

const DefaultView = ({ state }) => {
  const [currentStyle, updateStyle] = useState(0);
  const [currentPhoto, updatePhoto] = useState(0);

  if (state.productStyleById.results !== undefined) {
    console.log('🛶', state.productStyleById.results[0].photos);
  }

  return (
    <div>
      {state.productStyleById.results !== undefined && (
        <div>
          <img
            src={
              state.productStyleById.results[currentStyle].photos[currentPhoto]
                .url
            }
            style={{ maxWidth: '25%' }}
          />
        </div>
      )}
      {state.productStyleById.results !== undefined &&
        state.productStyleById.results[0].photos.map((photo, idx) => {
          return (
            <img
              src={photo.thumbnail_url}
              key={idx}
              style={{ maxWidth: '40px' }}
            />
          );
        })}
    </div>
  );
};

export default DefaultView;
