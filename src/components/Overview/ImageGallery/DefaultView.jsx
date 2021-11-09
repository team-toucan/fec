import React, { useState, useEffect } from 'react';
import { DefaultViewDiv } from './imageGalleryStyles';
import MainImgButton from '@components/Overview/ImageGallery/Buttons/MainImgButton.jsx';
import ThumbnailsButton from '@components/Overview/ImageGallery/Buttons/ThumbnailsButton.jsx';

const DefaultView = ({ state, updateState }) => {
  const [startIdx, updateThumbnailsStart] = useState(0);
  const [endIdx, updateThumbnailsEnd] = useState(0);
  const [idxs, updateIdxs] = useState({
    startIdx: 0,
    endIdx: 0,
  });

  useEffect(() => {
    updateIdxs({
      startIdx: 0,
      endIdx:
        state.photosForStyle.length >= 7 ? 7 : state.photosForStyle.length,
    });
  }, [state.photosForStyle]);

  const updateCurrentPhoto = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return { ...prevValues, currentPhoto: e.target.className };
    });
  };

  return (
    <>
      {/* render main image for current style */}
      {state.productStyleById.results !== undefined && (
        <div
          style={{
            display: 'flex',
            width: '500px',
            backgroundImage:
              'url(' +
              state.productStyleById.results[state.currentStyle].photos[
                state.currentPhoto
              ].url +
              ')',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* render all thumbnails for current style */}
            {state.productStyleById.results !== undefined &&
              state.photosForStyle
                .slice(idxs.startIdx, idxs.endIdx)
                .map((photo, idx) => {
                  return (
                    <img
                      src={photo.thumbnail_url}
                      key={idx}
                      style={{ maxWidth: '40px', maxHeight: '40px' }}
                      class={idx}
                      onClick={updateCurrentPhoto}
                    />
                  );
                })}
            <ThumbnailsButton
              state={state}
              updateState={updateState}
              idxs={idxs}
              updateIdxs={updateIdxs}
            />
          </div>

          <div style={{ style: 'flex' }}>
            <MainImgButton state={state} updateState={updateState} />
          </div>
        </div>
      )}
    </>
  );
};

export default DefaultView;
