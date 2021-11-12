import React, { useState, useEffect } from 'react';
import Modal from '@components/Overview/ImageGallery/Modal';
import styled from 'styled-components';

const ExpandedView = ({ state, updateState, isShowing, setIsShowing }) => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleMouseMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <>
      <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
        {state.productStyleById.results !== undefined && (
          <figure
            onMouseMove={handleMouseMove}
            style={{
              backgroundImage: `url(${
                state.productStyleById.results[state.currentStyle].photos[
                  state.currentPhoto
                ].url
              })`,
              backgroundPosition,
            }}
          >
            <img
              src={
                state.productStyleById.results[state.currentStyle].photos[
                  state.currentPhoto
                ].url
              }
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsShowing(false);
              }}
              alt="teatw"
            />
          </figure>
        )}
      </Modal>
    </>
  );
};

export default ExpandedView;
