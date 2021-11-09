import React, { useState } from 'react';
import { DefaultViewDiv } from './imageGalleryStyles';
import MainImgButton from '@components/Overview/ImageGallery/Buttons/MainImgButton.jsx';

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
        <div
          style={{
            backgroundImage:
              'url(' +
              `state.productStyleById.results[state.currentStyle].photos[
                state.currentPhoto
              ].url` +
              ')',
          }}
        >
          <img
            src={
              state.productStyleById.results[state.currentStyle].photos[
                state.currentPhoto
              ].url
            }
            style={{ maxWidth: '300px' }}
          />
          <MainImgButton state={state} updateState={updateState} />
        </div>
        // <DefaultViewDiv>
        //   <img
        //     src={
        //       state.productStyleById.results[state.currentStyle].photos[
        //         state.currentPhoto
        //       ].url
        //     }
        //     style={{ maxWidth: '300px' }}
        //   />
        //   <button>test</button>
        // </DefaultViewDiv>
      )}
      {state.productStyleById.results !== undefined &&
        state.productStyleById.results[state.currentStyle].photos.map(
          (photo, idx) => {
            return (
              <img
                src={photo.thumbnail_url}
                key={idx}
                style={{ maxWidth: '40px', maxHeight: '40px' }}
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
