import React, { useState } from 'react';
import Modal from '@components/Overview/ImageGallery/Modal';

const ExpandedView = ({ state, updateState }) => {
  const [isShowing, setIsShowing] = useState(false);
  const expandImage = (e) => {
    e.preventDefault();
    console.log('image target test', e.target);
  };

  return (
    <>
      <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
        <div style={{ display: 'flex' }}>
          {state.productStyleById.results !== undefined && (
            <img
              src={
                state.productStyleById.results[state.currentStyle].photos[
                  state.currentPhoto
                ].url
              }
              style={{
                cursor: 'pointer',
              }}
              onClick={expandImage}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ExpandedView;
