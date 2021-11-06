import React from 'react';

const Name = ({ itemName }) => {
  console.log('in name', itemName)
  return (
    <div>
      <h1>{itemName}</h1>
    </div>
  );
};

export default Name;