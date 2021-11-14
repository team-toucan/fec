import React from 'react';
import DefaultView from '@components/Overview/ImageGallery/DefaultView.jsx';
import ExpandedView from '@components/Overview/ImageGallery/ExpandedView.jsx';
import { ImageGalleryDiv, DefaultViewDiv } from './styles';

const ImageGallery = ({ state, updateState }) => {
  return (
    <>
      <DefaultView
        state={state}
        updateState={updateState}
        style={{ display: 'flex', flex: '7' }}
      />
      {/* <ExpandedView state={state} updateState={updateState} /> */}
    </>
  );
};

export default ImageGallery;
