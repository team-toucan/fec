import React, { useState } from 'react';

// main image selector
const ThumbnailsButton = ({
  state,
  updateState,
  idxs: { startIdx, endIdx },
  updateIdxs,
}) => {
  const previousThumbnail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateIdxs((prevValues) => {
      return {
        startIdx: prevValues.startIdx - 1,
        endIdx: prevValues.endIdx - 1,
      };
    });
  };

  const nextThumbnail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateIdxs((prevValues) => {
      return {
        startIdx: prevValues.startIdx + 1,
        endIdx: prevValues.endIdx + 1,
      };
    });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Left/Top Button - back */}
        {state.productStyleById.results !== undefined && startIdx > 0 && (
          <button onClick={previousThumbnail}>back</button>
        )}

        {/* Right/Bottom Button - next */}
        {state.productStyleById.results !== undefined &&
          state.photosForStyle.length > 7 &&
          endIdx < state.photosForStyle.length && (
            <button onClick={nextThumbnail}>next</button>
          )}
      </div>
    </>
  );
};

export default ThumbnailsButton;
