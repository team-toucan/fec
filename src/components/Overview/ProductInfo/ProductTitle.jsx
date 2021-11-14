import React from 'react';

const ProductTitle = ({ state }) => {
  return (
    <div>
      <h2 style={{ fontSize: '35px', lineHeight: '35px' }}>
        <strong>{state.productById.name}</strong>
      </h2>
    </div>
  );
};

export default ProductTitle;
