import React from 'react';

// TODO: Create a function on one of the upper-level components
// that houses the current style/style to change the size
// based on the user selection below

const SizeSelector = ({ state }) => {
  return (
    <div>
      <select>
        <option>Select Size</option>
        {state.productStyleById.results !== undefined &&
          Object.keys(
            state.productStyleById.results[state.currentStyle].skus
          ).map((size, idx) => {
            return (
              <option key={idx}>
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
