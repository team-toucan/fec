import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '@components/Overview/ImageGallery';
import ProductInfo from '@components/Overview/ProductInfo';
import StyleSelector from '@components/Overview/StyleSelector';
import AddToCart from '@components/Overview/AddToCart';
import { OverviewDiv } from './overviewStyles';
import { getAllProducts, getProductById, getProductStyleById } from '../../api';

const Overview = () => {
  const { id } = useParams();
  const [state, updateState] = useState({
    productById: {},
    productStyleById: {},
    currentStyle: 0,
    currentSize: '',
    currentPhoto: 0,
    photosForStyle: [],
  });

  /* Set current state for the overview component */
  useEffect(async () => {
    const { data } = await getProductById(id);
    updateState((prevValues) => {
      return { ...prevValues, productById: data };
    });
  }, []);

  useEffect(async () => {
    const { data } = await getProductStyleById(id);
    updateState((prevValues) => {
      return {
        ...prevValues,
        productStyleById: data,
        photosForStyle: data.results[state.currentStyle].photos,
      };
    });
  }, []);

  console.log('new state 🎃', state);

  return (
    <OverviewDiv>
      <ImageGallery state={state} updateState={updateState} />
      <ProductInfo state={state} updateState={updateState} />
      <StyleSelector state={state} updateState={updateState} />
      <AddToCart state={state} updateState={updateState} />
    </OverviewDiv>
  );
};

export default Overview;
