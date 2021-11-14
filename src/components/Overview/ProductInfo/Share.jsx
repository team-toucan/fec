import React from 'react';

const Share = ({ state }) => {
  return (
    <div style={{ display: 'flex', margin: '5%' }}>
      <img
        src="https://logo-logos.com/wp-content/uploads/2016/10/Instagram_icon.png"
        alt="Instagram icon, logo"
        style={{
          border: 'none',
          width: '10%',
          marginRight: '5%',
          cursor: 'pointer',
        }}
      />
      <img
        src="https://logo-logos.com/wp-content/uploads/2016/11/Twitter_logo_logotype.png"
        alt="Twitter logo, logotype"
        style={{
          border: 'none',
          width: '10%',
          marginRight: '5%',
          cursor: 'pointer',
        }}
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
        alt="Pinterest logo"
        style={{
          border: 'none',
          width: '10%',
          marginRight: '5%',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default Share;
