import React, { useState, useEffect } from 'react';
import { DefaultViewDiv } from './styles';
import MainImgButton from '@components/Overview/ImageGallery/Buttons/MainImgButton.jsx';
import ThumbnailsButton from '@components/Overview/ImageGallery/Buttons/ThumbnailsButton.jsx';
import ExpandedView from '@components/Overview/ImageGallery/ExpandedView.jsx';

const DefaultView = ({ state, updateState }) => {
  const [isShowing, setIsShowing] = useState(false);
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
        /* renders only 7 thumbnails at a time */
        state.photosForStyle.length >= 7 ? 7 : state.photosForStyle.length,
    });
  }, [state.photosForStyle]);

  const updateCurrentPhoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateState((prevValues) => {
      return { ...prevValues, currentPhoto: parseInt(e.target.className) };
    });
  };

  return (
    <>
      {/* render main image for current style */}
      {state.productStyleById.results !== undefined && (
        <div
          style={{
            display: 'flex',
            backgroundImage:
              'url(' +
              state.productStyleById.results[state.currentStyle].photos[
                state.currentPhoto
              ].url +
              ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            flex: '7',
            minHeight: '80vh',
            minWidth: '60vh',
            cursor: 'zoom-in',
          }}
          onClick={(e) => {
            e.preventDefault();
            setIsShowing(true);
          }}
        >
          <ExpandedView
            state={state}
            updateState={updateState}
            isShowing={isShowing}
            setIsShowing={setIsShowing}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              alignItems: 'center',
            }}
          >
            {/* render all thumbnails for current style */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '4',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              {state.productStyleById.results !== undefined &&
                state.photosForStyle.map((photo, idx, collection) => {
                  /*
                    conditional statements for rendering image gallery thumbnails
                    only renders 7 thumbnails at a time
                    thumbnails have click handler which changes currentPhoto state
                    which then renders the outer div containing thick bottom border
                   */
                  return idx >= idxs.startIdx && idx < idxs.endIdx ? (
                    /* if thumbnail selected, renders div with thick bottom border */
                    idx === state.currentPhoto ? (
                      <div
                        style={{
                          display: 'flex',
                          borderBottom: '5px solid black',
                          paddingBottom: '2px',
                        }}
                      >
                        <img
                          src={photo.thumbnail_url}
                          key={idx}
                          style={{
                            width: '8vh',
                            height: '8vh',
                            cursor: 'pointer',
                            objectFit: 'cover',
                          }}
                          class={idx}
                          onClick={updateCurrentPhoto}
                        />
                      </div>
                    ) : (
                      /*
                        else renders thick transparent bottom border
                        transparent to keep spacing between thumbnails consistent
                      */
                      <div
                        style={{
                          display: 'flex',
                          borderBottom: '5px solid transparent',
                          paddingBottom: '2px',
                        }}
                      >
                        <img
                          src={photo.thumbnail_url}
                          key={idx}
                          style={{
                            width: '8vh',
                            height: '8vh',
                            cursor: 'pointer',
                            objectFit: 'cover',
                          }}
                          class={idx}
                          onClick={updateCurrentPhoto}
                        />
                      </div>
                    )
                  ) : null;
                })}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: '1',
              }}
            >
              <ThumbnailsButton
                state={state}
                updateState={updateState}
                idxs={idxs}
                updateIdxs={updateIdxs}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: '6' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: '9',
                alignItems: 'center',
              }}
            >
              <MainImgButton state={state} updateState={updateState} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DefaultView;
