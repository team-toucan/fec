import React from 'react';
import AddToCartSub from '@components/Overview/AddToCart/AddToCartSub.jsx';
import QuantitySelector from '@components/Overview/AddToCart/QuantitySelector.jsx';
import SizeSelector from '@components/Overview/AddToCart/SizeSelector.jsx';

const AddToCart = ({ state, updateState }) => {
  return (
    <div>
      <SizeSelector state={state} updateState={updateState} />
      <QuantitySelector state={state} updateState={updateState} />
      <AddToCartSub state={state} updateState={updateState} />
    </div>
  );
};

export default AddToCart;
