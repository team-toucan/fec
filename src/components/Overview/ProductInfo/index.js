import React from 'react';
import Price from '@components/Overview/ProductInfo/Price.jsx';
import ProductCategory from '@components/Overview/ProductInfo/ProductCategory.jsx';
import ProductOverview from '@components/Overview/ProductInfo/ProductOverview.jsx';
import ProductTitle from '@components/Overview/ProductInfo/ProductTitle.jsx';
import Share from '@components/Overview/ProductInfo/Share.jsx';
import StarRating from '@components/Overview/ProductInfo/StarRating.jsx';

const ProductInfo = ({ state }) => {
  return (
    <div>
      <h1>Product Info</h1>
      <StarRating state={state} />
      <ProductCategory state={state} />
      <ProductTitle state={state} />
      <Price state={state} />
      <ProductOverview state={state} />
      <Share state={state} />
    </div>
  );
};

export default ProductInfo;