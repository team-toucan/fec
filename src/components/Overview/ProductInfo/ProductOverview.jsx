import React from 'react';

const ProductOverview = ({ state }) => {
  return (
    <>
      <div style={{ display: 'flex', flex: '2' }}></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '8',
          borderRight: '1px solid black',
        }}
      >
        <h1>
          <strong>{state.productById.slogan}</strong>
        </h1>
        <h1>{state.productById.description}</h1>
      </div>

      <div style={{ display: 'flex', flex: '.5' }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: '4' }}>
        {state.productById.features !== undefined &&
          state.productById.features.map((feature, idx) => {
            return (
              <>
                <h2 key={idx} style={{ lineHeight: '30px' }}>
                  ✔️ {feature.feature}: {feature.value}
                </h2>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ProductOverview;
