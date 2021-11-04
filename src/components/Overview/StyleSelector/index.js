import React from 'react';

const Heading = ({ state }) => {
  return (
    <div>
      <h1>Style Selector</h1>
      {state.productStyleById.results !== undefined && (
        <div>
          <h1>
            <strong>STYLE > </strong>{' '}
            {state.productStyleById.results[state.currentStyle].name}
          </h1>
          {state.productStyleById.results[state.currentStyle].photos.map(
            (photo, idx) => {
              return <img src={photo.thumbnail_url} key={idx} />;
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Heading;
