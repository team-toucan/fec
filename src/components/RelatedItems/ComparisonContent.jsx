import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api";

const ComparisonContent = ({ relatedFeat, currentID }) => {
  // API call to fetch current item features - refactor later to draw on overview?
  // gets passed in related item features
  const [currentitem, updateCurrent] = useState({ info: {} });
  const [currentfeatures, updateCurrFeat] = useState({ info: {} });
  const compArray = [relatedFeat];

  console.log("IDIDIDID", currentID);

  useEffect(() => {
    console.log("in comp MODAL");
    const currentInfo = async () => {
      const response = await getProductById(currentID);
      const responseInfo = response.data;
      updateCurrent(responseInfo);
      updateCurrFeat(responseInfo.features);
      compArray.push(responseInfo.features);
    };
    currentInfo();
    compArray.push(currentfeatures);
  }, []);

  return (
    <div>
      {console.log("ARRAYYYY", compArray)},<h1> feat here</h1>
    </div>
  );
};

//table with all key[value] features in the middle, column left and right of that for each item
//if keyvalue feature exists for item, put check mark
//need array of all feature objects?

export default ComparisonContent;
