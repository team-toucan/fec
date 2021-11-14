import React from 'react';
import AddToCartSub from '@components/Overview/AddToCart/AddToCartSub.jsx';
import QuantitySelector from '@components/Overview/AddToCart/QuantitySelector.jsx';
import SizeSelector from '@components/Overview/AddToCart/SizeSelector.jsx';
import { StyledStarButton } from './styles';

const AddToCart = ({ state, updateState, addProductToCart }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flex: '6' }}>
          <SizeSelector state={state} updateState={updateState} />
        </div>
        <div style={{ display: 'flex', flex: '5' }}>
          <QuantitySelector state={state} updateState={updateState} />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flex: '10' }}>
          <AddToCartSub
            state={state}
            updateState={updateState}
            addProductToCart={addProductToCart}
          />
        </div>
        <div style={{ display: 'flex', flex: '3' }}>
          <StyledStarButton>
            <img
              src="https://img.icons8.com/ios/50/000000/star--v1.png"
              style={{
                border: 'none',
                width: '15px',
                height: '15px',
                alignSelf: 'center',
              }}
            />
          </StyledStarButton>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
