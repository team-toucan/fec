import React from "react";

const Features = ({ featObj }) => {
  return (
    <div>
      <h1> feat here</h1>
      {featObj.each((feat) => (
        <p> {feat} </p>
      ))}
    </div>
  );
};

export default Features;
