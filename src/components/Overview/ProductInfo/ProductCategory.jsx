import React from 'react';

const ProductCategory = ({ state }) => {
  return (
    <div>
      <h1>{state.productById.category}</h1>
    </div>
  );
};

export default ProductCategory;
