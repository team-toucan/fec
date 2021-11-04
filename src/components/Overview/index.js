import React from 'react';
import ImageGallery from '@components/Overview/ImageGallery';
import ProductInfo from '@components/Overview/ProductInfo';
import StyleSelector from '@components/Overview/StyleSelector';
import AddToCart from '@components/Overview/AddToCart';

import { getAllProducts, getProductById, getProductStyleById } from '../../api';

const tempState = { productById: {}, productStyleById: {}, currentStyle: 0 };

getProductById(39333).then((res) => {
  console.log('success', res.data);
  tempState.productById = res.data;
});

getProductStyleById(39333).then((res) => {
  console.log('styles', res.data);
  tempState.productStyleById = res.data;
});

const Overview = () => {
  console.log('temp state', tempState);
  return (
    <div>
      <h1>Overview Component</h1>
      <ImageGallery state={tempState} />
      <ProductInfo state={tempState} />
      <StyleSelector state={tempState} />
      <AddToCart state={tempState} />
    </div>
  );
};

export default Overview;
