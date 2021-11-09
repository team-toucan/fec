import React from 'react';
import AddToCartSub from '@components/Overview/AddToCart/AddToCartSub.jsx';
import QuantitySelector from '@components/Overview/AddToCart/QuantitySelector.jsx';
import SizeSelector from '@components/Overview/AddToCart/SizeSelector.jsx';

const AddToCart = ({ state }) => {
  return (
    <div>
      <h1>Add to Cart</h1>
      <SizeSelector state={state} />
      {/* <QuantitySelector state={state} /> */}
      <AddToCartSub state={state} />
    </div>
  );
};

export default AddToCart;
