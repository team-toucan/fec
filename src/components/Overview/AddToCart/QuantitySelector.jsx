import React from 'react';

const QuantitySelector = ({ state, updateState }) => {
  const selectQuantity = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return {
        ...prevValues,
        quantitySelected: e.target.value,
      };
    });
  };

  return (
    <div>
      <select onChange={selectQuantity}>
        {/* No Size Chosen */}
        {state.productStyleById.results !== undefined &&
          state.currentSize === 0 && <option>-</option>}

        {/* Size Chosen */}
        {state.productStyleById.results !== undefined &&
          state.currentSize !== 0 &&
          /*
            create an array based on current units left in stock
            then create options by mapping through array
          */
          [
            ...Array(
              state.productStyleById.results[state.currentStyle].skus[
                state.currentSize
              ].quantity
            ),
          ].map((num, idx) => {
            if (idx + 1 <= 15) {
              return <option key={idx}>{idx + 1}</option>;
            }
          })}
      </select>
    </div>
  );
};

export default QuantitySelector;
