import React from 'react';
import Price from '@components/Overview/ProductInfo/Price.jsx';
import ProductCategory from '@components/Overview/ProductInfo/ProductCategory.jsx';
import ProductTitle from '@components/Overview/ProductInfo/ProductTitle.jsx';
import StarRating from '@components/Overview/ProductInfo/StarRating.jsx';

const ProductInfo = ({ state }) => {
  return (
    <div>
      <StarRating state={state} />
      <ProductCategory state={state} />
      <ProductTitle state={state} />
      <Price state={state} />
    </div>
  );
};

export default ProductInfo;
