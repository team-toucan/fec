import React from 'react';

const ProductTitle = ({ state }) => {
  return (
    <div>
      <h1>{state.productById.name}</h1>
    </div>
  );
};

export default ProductTitle;
