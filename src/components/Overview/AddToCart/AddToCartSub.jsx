import React from 'react';
import { StyledAddToCart } from './addToCartStyles';

const AddToCartSub = ({ state }) => {
  return (
    <div style={{ display: 'flex', flex: '7' }}>
      <StyledAddToCart>
        ADD TO BAG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
      </StyledAddToCart>
    </div>
  );
};

export default AddToCartSub;
