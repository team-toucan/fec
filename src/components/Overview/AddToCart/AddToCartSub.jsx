import React from 'react';
import { StyledAddToCart } from './styles';

const AddToCartSub = ({ state, updateState, addProductToCart }) => {
  const addToCartButtonClick = (e) => {
    e.preventDefault();
    if (state.currentSize !== 0) {
      addProductToCart(state.currentSize);
      alert(
        'Quantity: ' +
          state.quantitySelected +
          ', ' +
          'Size: ' +
          state.productStyleById.results[state.currentStyle].skus[
            state.currentSize
          ].size +
          ', ' +
          'Style: ' +
          state.productStyleById.results[state.currentStyle].name +
          ', ' +
          state.productById.name +
          ' was added to the cart!'
      );
      updateState((prevValues) => {
        return {
          ...prevValues,
          currentSize: 0,
          quantitySelected: 0,
        };
      });
    }
  };

  return (
    <StyledAddToCart onClick={addToCartButtonClick}>
      <div style={{ display: 'flex', flex: '9' }}>ADD TO BAG</div>
      <div style={{ display: 'flex', flex: '1', justifyContent: 'flex-end' }}>
        +
      </div>
    </StyledAddToCart>
  );
};

export default AddToCartSub;
