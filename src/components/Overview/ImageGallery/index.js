import React from 'react';
import DefaultView from '@components/Overview/ImageGallery/DefaultView.jsx';

const ImageGallery = ({ state }) => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <DefaultView state={state} />
    </div>
  );
};

export default ImageGallery;
