import React from 'react';
import DefaultView from '@components/Overview/ImageGallery/DefaultView.jsx';
import { ImageGalleryDiv } from './imageGalleryStyles';

const ImageGallery = ({ state }) => {
  return (
    <ImageGalleryDiv>
      {/* <h1>Image Gallery</h1> */}
      <DefaultView state={state} />
    </ImageGalleryDiv>
  );
};

export default ImageGallery;
