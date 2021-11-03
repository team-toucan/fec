import React from 'react';

const DefaultView = ({ state }) => {
  if (state.productStyleById.results !== undefined) {
    console.log(
      '🛶',
      state.productStyleById.results[0].photos[0].thumbnail_url
    );
  }
  return (
    <div>
      <h1>test</h1>
      {state.productStyleById.results !== undefined && (
        <img src={state.productStyleById.results[0].photos[0].thumbnail_url} />
      )}
    </div>
  );
};

export default DefaultView;
