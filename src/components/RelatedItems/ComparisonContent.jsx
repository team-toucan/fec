import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api";

const ComparisonContent = ({ relatedItem, currentItem }) => {
  // API call to fetch current item features - refactor later to draw on overview?
  // gets passed in related item features

  return (
    console.log("IN COMP RETURN 🎁", currentItem, relatedItem),
    (
      <div>
        <div>
          <p>{relatedItem.category}</p>
          <p>{relatedItem.default_price}</p>
          <p>{currentItem.category}</p>
          <p>{currentItem.default_price}</p>
        </div>
      </div>
    )
  );
};

//table with all key[value] features in the middle, column left and right of that for each item
//if keyvalue feature exists for item, put check mark
//need array of all feature objects?

export default ComparisonContent;
