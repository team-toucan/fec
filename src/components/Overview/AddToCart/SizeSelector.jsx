import React, { useState, useEffect } from 'react';

// TODO: Create a function on one of the upper-level components
// that houses the current style/style to change the size
// based on the user selection below

const SizeSelector = ({ state, updateState }) => {
  const sizeSelected = (e) => {
    e.preventDefault();
    console.log('selection', e.target.value);
    updateState((prevValues) => {
      return {
        ...prevValues,
        currentSize: e.target.value === 'Select Size' ? 0 : e.target.value,
      };
    });
  };

  // useEffect(() => {
  //   updateState((prevValues) => {
  //     return { ...prevValues, productById: data };
  //   });
  // }, []);

  return (
    <div>
      <select value={state.currentSize} onChange={sizeSelected}>
        <option value={0}>Select Size</option>
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
      </select>
    </div>
  );
};

export default SizeSelector;
