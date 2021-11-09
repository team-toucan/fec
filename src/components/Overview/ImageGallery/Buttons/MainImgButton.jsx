import React from 'react';

// main image selector
const MainImgButton = ({ state, updateState }) => {
  const previousPhoto = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return { ...prevValues, currentPhoto: prevValues.currentPhoto - 1 };
    });
  };

  const nextPhoto = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return { ...prevValues, currentPhoto: prevValues.currentPhoto + 1 };
    });
  };

  return (
    <>
      {/* Left Button - back */}
      {state.productStyleById.results !== undefined &&
        state.currentPhoto > 0 && <button onClick={previousPhoto}>back</button>}

      {/* Right Button - next */}
      {state.productStyleById.results !== undefined &&
        state.currentPhoto < state.photosForStyle.length - 1 && (
          <button onClick={nextPhoto}>next</button>
        )}
    </>
  );
};

export default MainImgButton;
