import React, { useState, useEffect } from 'react';
import { StyledSelectSize } from './styles';

const SizeSelector = ({ state, updateState }) => {
  const sizeSelected = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return {
        ...prevValues,
        currentSize:
          e.target.value === 'SELECT SIZE' ? 0 : parseInt(e.target.value),
        quantitySelected: 1,
      };
    });
  };

  return (
    <StyledSelectSize value={state.currentSize} onChange={sizeSelected}>
      <option value={0}>SELECT SIZE</option>
      {state.productStyleById.results !== undefined &&
        Object.keys(
          state.productStyleById.results[state.currentStyle].skus
        ).map((size, idx) => {
          return (
            <option key={idx} value={size}>
              {
                state.productStyleById.results[state.currentStyle].skus[size]
                  .size
              }
            </option>
          );
        })}
    </StyledSelectSize>
  );
};

export default SizeSelector;
