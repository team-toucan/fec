import React from 'react';
import AddToCartSub from '@components/Overview/AddToCart/AddToCartSub.jsx';
import QuantitySelector from '@components/Overview/AddToCart/QuantitySelector.jsx';
import SizeSelector from '@components/Overview/AddToCart/SizeSelector.jsx';

const AddToCart = ({ state, updateState }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SizeSelector state={state} updateState={updateState} />
        <QuantitySelector state={state} updateState={updateState} />
      </div>
      <div style={{ display: 'flex' }}>
        <AddToCartSub state={state} updateState={updateState} />
      </div>
    </div>
  );
};

export default AddToCart;
