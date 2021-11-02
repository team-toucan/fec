import React from 'react';
import DefaultView from '@components/Overview/ImageGallery/DefaultView.jsx';

const Heading = ({ state }) => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <DefaultView state={state} />
    </div>
  );
};

export default Heading;
