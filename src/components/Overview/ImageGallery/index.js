import React from 'react';
import DefaultView from '@components/Overview/ImageGallery/DefaultView.jsx';
import { ImageGalleryDiv } from './imageGalleryStyles';
import { DefaultViewDiv } from './imageGalleryStyles';

const ImageGallery = ({ state }) => {
  return <DefaultView state={state} />;
};

export default ImageGallery;
