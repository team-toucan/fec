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
            <button onClick={previousPhoto}>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
                style={{ border: '1px solid white' }}
              />
            </button>
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
            <button onClick={nextPhoto}>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"
                style={{ border: '1px solid white' }}
              />
            </button>
          )}
      </div>
    </>
  );
};

export default MainImgButton;
