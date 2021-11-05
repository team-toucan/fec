import React, { useState } from 'react';
import { DefaultViewDiv } from './imageGalleryStyles';

const DefaultView = ({ state }) => {
  const [currentStyle, updateStyle] = useState(0);
  const [currentPhoto, updatePhoto] = useState(0);

  if (state.productStyleById.results !== undefined) {
    console.log('🛶', state.productStyleById.results[0].photos);
  }

  return (
    <>
      {state.productStyleById.results !== undefined && (
        <DefaultViewDiv>
          <img
            src={
              state.productStyleById.results[currentStyle].photos[currentPhoto]
                .url
            }
            style={{ maxWidth: '300px' }}
          />
        </DefaultViewDiv>
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
    </>
  );
};

export default DefaultView;
