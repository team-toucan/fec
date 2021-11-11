import React from 'react';

// main image selector
const MainImgButton = ({ state, updateState }) => {
  const previousPhoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateState((prevValues) => {
      return { ...prevValues, currentPhoto: prevValues.currentPhoto - 1 };
    });
  };

  const nextPhoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateState((prevValues) => {
      return { ...prevValues, currentPhoto: prevValues.currentPhoto + 1 };
    });
  };

  return (
    <>
      {/* Left Button - back */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'baseline',
          flex: '1',
        }}
      >
        {state.productStyleById.results !== undefined &&
          state.currentPhoto > 0 && (
            <button onClick={previousPhoto}>back</button>
          )}
      </div>

      {/* Right Button - next */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'end',
          flex: '1',
        }}
      >
        {state.productStyleById.results !== undefined &&
          state.currentPhoto < state.photosForStyle.length - 1 && (
            <button onClick={nextPhoto}>next</button>
          )}
      </div>
    </>
  );
};

export default MainImgButton;
