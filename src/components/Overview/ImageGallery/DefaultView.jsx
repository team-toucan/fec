import React, { useState } from 'react';
import { DefaultViewDiv } from './imageGalleryStyles';

const DefaultView = ({ state, updateState }) => {
  const updateCurrentPhoto = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return { ...prevValues, currentPhoto: e.target.className };
    });
  };

  return (
    <>
      {state.productStyleById.results !== undefined && (
        <DefaultViewDiv>
          <img
            src={
              state.productStyleById.results[state.currentStyle].photos[
                state.currentPhoto
              ].url
            }
            style={{ maxWidth: '300px' }}
          />
        </DefaultViewDiv>
      )}
      {state.productStyleById.results !== undefined &&
        state.productStyleById.results[state.currentStyle].photos.map(
          (photo, idx) => {
            return (
              <img
                src={photo.thumbnail_url}
                key={idx}
                style={{ maxWidth: '40px' }}
                class={idx}
                onClick={updateCurrentPhoto}
              />
            );
          }
        )}
    </>
  );
};

export default DefaultView;
