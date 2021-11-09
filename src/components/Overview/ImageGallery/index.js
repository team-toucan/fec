import React from 'react';
import DefaultView from '@components/Overview/ImageGallery/DefaultView.jsx';
import { ImageGalleryDiv } from './imageGalleryStyles';
import { DefaultViewDiv } from './imageGalleryStyles';

const ImageGallery = ({ state, updateState }) => {
  return (
    <DefaultView
      state={state}
      updateState={updateState}
      style={{ display: 'flex' }}
    />
  );
};

export default ImageGallery;
