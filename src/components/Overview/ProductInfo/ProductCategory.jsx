import React from 'react';

const ProductCategory = ({ state }) => {
  console.log('category', state.productById.category);
  return (
    <div>
      <h1>
        {state.productById.category !== undefined
          ? state.productById.category.toUpperCase()
          : null}
      </h1>
    </div>
  );
};

export default ProductCategory;
