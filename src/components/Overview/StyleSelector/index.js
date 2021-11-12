import React from 'react';

const StyleSelector = ({ state, updateState }) => {
  // const results = state.productStyleById.results;

  const updateCurrentStyle = (e) => {
    e.preventDefault();
    updateState((prevValues) => {
      return {
        ...prevValues,
        currentStyle: parseInt(e.target.className),
        currentSize: 0,
        currentPhoto: 0,
        quantitySelected: 0,
        photosForStyle:
          prevValues.productStyleById.results[e.target.className].photos,
      };
    });
  };

  return (
    <>
      {state.productStyleById.results !== undefined && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>
            <strong>STYLE > </strong>{' '}
            {state.productStyleById.results[
              state.currentStyle
            ].name.toUpperCase()}
          </h3>

          {/* thumbnails of available styles to choose from */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '100%',
              height: '100%',
            }}
          >
            {state.productStyleById.results.map((style, idx) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexBasis: '20%',
                    height: '8vh',
                    width: '8vw',
                    marginRight: '2vh',
                    marginTop: '1vh',
                    marginBottom: '1vh',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundImage:
                        'url(' + style.photos[0].thumbnail_url + ')',
                      width: '90%',
                      height: '90%',
                      backgroundSize: 'cover',
                      cursor: 'pointer',
                      borderRadius: '50%',
                      border: '1px solid black',
                      marginRight: '20px',
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                    className={idx}
                    onClick={updateCurrentStyle}
                  >
                    {/* <img
                    src={style.photos[0].thumbnail_url}
                    key={idx}
                    style={{
                      // minWidth: '70px',
                      // // height: '25px',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      // borderRadius: '50%',
                      // border: '1px solid black',
                      // marginRight: '20px',
                      // marginTop: '10px',
                      // marginBottom: '10px',
                      width: '8vh',
                      height: '8vh',
                    }}
                    className={idx}
                    onClick={updateCurrentStyle}
                  /> */}
                    {idx === state.currentStyle && (
                      <div
                        style={{
                          backgroundImage:
                            'url(' +
                            'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-check-mark-circle-thin.png' +
                            ')',
                          backgroundSize: 'cover',
                          borderRadius: '50%',
                          height: '20px',
                          width: '20px',
                          top: '-7%',
                          left: '8%',
                          alignSelf: 'flex-end',
                          position: 'relative',
                        }}
                        className={idx}
                        onClick={updateCurrentStyle}
                      ></div>
                    )}
                  </div>
                </div>
              );
            })}
            <div
              style={{
                display: 'flex',
                minWidth: '2wh',
              }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default StyleSelector;
