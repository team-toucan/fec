import React from 'react';

const ProductOverview = ({ state }) => {
  return (
    <div>
      <h1>Product overview</h1>
      <h1>{state.productById.slogan}</h1>
      <h1>{state.productById.description}</h1>
      <div>
        {state.productById.features !== undefined &&
          state.productById.features.map((feature, idx) => {
            return (
              <>
                <h2 key={idx}>{feature.feature}</h2>
                <h2>{feature.value}</h2>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ProductOverview;
