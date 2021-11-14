import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api";

const ComparisonContent = ({ relatedItem, currentItem }) => {
  // API call to fetch current item features - refactor later to draw on overview?
  // gets passed in related item features
  var curArr = [];
  var relArr = [];
  if (currentItem.features != undefined) {
    for (var i = 0; i < currentItem.features.length; i++) {
      curArr.push(currentItem.features[i].value);
    }
  }

  if (relatedItem.features != undefined) {
    for (var i = 0; i < relatedItem.features.length; i++) {
      relArr.push(relatedItem.features[i].value);
    }
  }

  return (
    <div>
      <div className="modal-body">
        <div className="modal-header">
          <h4 className="modal-title">COMPARING</h4>
        </div>
        <table>
          <thead className="tableHead">
            <tr>
              <td>{currentItem.name}</td>
              <td>{relatedItem.name}</td>
            </tr>
          </thead>
          <tbody>
            <td>
              {curArr.map((trait, index) => {
                return (
                  <tr key={index}>
                    <td></td>
                    <td>{trait}</td>
                    <td></td>
                  </tr>
                );
              })}
            </td>
            <td>
              <tbody>
                {relArr.map((trait, index) => {
                  return (
                    <tr key={index}>
                      <td></td>
                      <td>{trait}</td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

//table with all key[value] features in the middle, column left and right of that for each item
//if keyvalue feature exists for item, put check mark
//need array of all feature objects?

export default ComparisonContent;
