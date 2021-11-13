import React from 'react';

const ProductTitle = ({ state }) => {
  return (
    <div>
      <h2 style={{ fontSize: '50px', lineHeight: '50px' }}>
        <strong>{state.productById.name}</strong>
      </h2>
    </div>
  );
};

export default ProductTitle;
