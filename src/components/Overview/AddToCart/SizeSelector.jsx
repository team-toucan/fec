import React, { useState, useEffect } from 'react';
import { StyledSelectSize } from './addToCartStyles';

const SizeSelector = ({ state, updateState }) => {
  const sizeSelected = (e) => {
    e.preventDefault();
    console.log('selection', e.target.value);
    updateState((prevValues) => {
      return {
        ...prevValues,
        currentSize: e.target.value === 'SELECT SIZE' ? 0 : e.target.value,
      };
    });
  };

  return (
    <div style={{ display: 'flex', flex: '7' }}>
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
    </div>
  );
};

export default SizeSelector;
