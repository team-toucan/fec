import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '@components/Overview/ImageGallery';
import ProductInfo from '@components/Overview/ProductInfo';
import ProductOverview from '@components/Overview/ProductInfo/ProductOverview.jsx';
import StyleSelector from '@components/Overview/StyleSelector';
import AddToCart from '@components/Overview/AddToCart';
import Share from '@components/Overview/ProductInfo/Share.jsx';
import { OverviewDiv } from './overviewStyles';
import {
  getAllProducts,
  getProductById,
  getProductStyleById,
  addProductToCart,
  getUserCart,
} from '../../api';

const Overview = () => {
  const { id } = useParams();
  const [state, updateState] = useState({
    productById: {},
    productStyleById: {},
    currentStyle: 0,
    currentSize: 0,
    currentPhoto: 0,
    photosForStyle: [],
    quantitySelected: 0,
    userCart: [],
  });

  /* Set current state for the overview component */
  useEffect(async () => {
    const { data } = await getProductById(id);
    updateState((prevValues) => {
      return { ...prevValues, productById: data };
    });
  }, [id]);

  useEffect(async () => {
    const { data } = await getProductStyleById(id);
    updateState((prevValues) => {
      return {
        ...prevValues,
        productStyleById: data,
        photosForStyle: data.results[state.currentStyle].photos,
      };
    });
  }, [id]);

  useEffect(async () => {
    const { data } = await getUserCart();
    updateState((prevValues) => {
      return {
        ...prevValues,
        userCart: data,
      };
    });
  }, []);

  return (
    <OverviewDiv>
      <div style={{ display: 'flex', flex: '10' }}>
        <div style={{ display: 'flex', flex: '10' }}>
          <ImageGallery state={state} updateState={updateState} />
        </div>
        <div style={{ display: 'flex', flex: '.5' }}></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '4',
            justifyContent: 'center',
          }}
        >
          <ProductInfo state={state} updateState={updateState} />
          <StyleSelector state={state} updateState={updateState} />
          <AddToCart state={state} updateState={updateState} />
          <Share state={state} />
        </div>
      </div>
      <div style={{ display: 'flex', flex: '2', minHeight: '5vh' }}></div>
      <div style={{ display: 'flex', flex: '3' }}>
        <ProductOverview state={state} />
      </div>
    </OverviewDiv>
  );
};

export default Overview;
