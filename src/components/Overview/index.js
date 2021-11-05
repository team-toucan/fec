import React from 'react';
import ImageGallery from '@components/Overview/ImageGallery';
import ProductInfo from '@components/Overview/ProductInfo';
import StyleSelector from '@components/Overview/StyleSelector';
import AddToCart from '@components/Overview/AddToCart';

// import { useParams } from 'react-router-dom'; <--- import useParams hook from react router dom
// https://v5.reactrouter.com/web/api/Hooks/useparams

import { getAllProducts, getProductById, getProductStyleById } from '../../api';

const tempState = {
  productById: {},
  productStyleById: {},
  currentStyle: 0,
  currentSize: 1356838,
};
// Move this state ^^^ inside the Overview component and use hooks, useState https://www.robinwieruch.de/react-usestate-hook

getProductById(39333).then((res) => {
  console.log('success', res.data);
  tempState.productById = res.data;
});

// ^^^ make this api inside of `useEffect` https://www.robinwieruch.de/react-useeffect-hook. You can get the id of the current product by using the useParams hook.

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
