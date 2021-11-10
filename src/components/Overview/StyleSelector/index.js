import React from 'react';

const StyleSelector = ({ state, updateState }) => {
  // const results = state.productStyleById.results;

  const updateCurrentStyle = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return {
        ...prevValues,
        currentStyle: e.target.className,
        currentSize: 0,
        currentPhoto: 0,
        quantitySelected: 0,
        photosForStyle:
          prevValues.productStyleById.results[e.target.className].photos,
      };
    });
    console.log('awefawef', state.currentStyle);
  };

  return (
    <>
      {state.productStyleById.results !== undefined && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>
            <strong>STYLE > </strong>{' '}
            {state.productStyleById.results[state.currentStyle].name}
          </h1>

          {/* thumbnails of available styles to choose from */}
          <div style={{ display: 'flex' }}>
            {state.productStyleById.results.map((style, idx) => {
              return (
                <img
                  src={style.photos[0].thumbnail_url}
                  key={idx}
                  style={{ maxWidth: '40px' }}
                  class={idx}
                  onClick={updateCurrentStyle}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default StyleSelector;
