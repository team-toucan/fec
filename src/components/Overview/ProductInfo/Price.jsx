import React from 'react';

const Price = ({ state }) => {
  let styles = state.productStyleById.results;
  return (
    <div>
      <h1>
        ${/* If on sale */}
        {state.productStyleById.results !== undefined &&
          styles[state.currentStyle].sale_price !== null &&
          Math.trunc(styles[state.currentStyle].sale_price)}
        {/* If not on sale */}
        {state.productStyleById.results !== undefined &&
          styles[state.currentStyle].sale_price === null &&
          Math.trunc(styles[state.currentStyle].original_price)}
      </h1>
    </div>
  );
};

export default Price;
