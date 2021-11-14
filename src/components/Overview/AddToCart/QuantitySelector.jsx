import React from 'react';
import { StyledSelect } from './styles';

const QuantitySelector = ({ state, updateState }) => {
  const selectQuantity = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return {
        ...prevValues,
        quantitySelected: parseInt(e.target.value),
      };
    });
  };

  return (
    <StyledSelect onChange={selectQuantity}>
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
            ]?.quantity
          ),
        ].map((num, idx) => {
          if (idx + 1 <= 15) {
            return (
              <option key={idx} value={idx + 1}>
                {idx + 1}
              </option>
            );
          }
        })}
    </StyledSelect>
  );
};

export default QuantitySelector;
