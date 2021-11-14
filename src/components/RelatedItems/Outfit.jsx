import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProductStyleById } from "../../api";
import Name from "./Name.jsx";
// import AddtoOutfit from "./AddtoOutfit.jsx";
import Card from "./Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faPlus,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

var store = require("store");

//go thru local storage and render items

const Outfit = () => {
  const [count, setCount] = useState(0);
  const [remcount, setRemCount] = useState(0);
  const { id } = useParams();
  const outfitRef = React.useRef();
  var items = store.get("outfitDetails") || [];

  const outfitScroll = (scrollOffset) => {
    outfitRef.current.scrollLeft += scrollOffset;
  };

  const addOutfitClick = () => {
    console.log("🦞");
    if (items != undefined && !items.includes(id)) {
      //if current list in store exists
      items.push(id);
      //update array with new id
      //update store with new array
      store.set("outfitDetails", items);
      setCount(count + 1);
    }
  };

  const removeClick = (item) => {
    //click on outfit item to remove -> check array to see if it contains the passed in id
    //if it contains the id, remove it
    //set store as new filtered array

    var filteredArr = items.filter((elem) => elem !== item);

    store.set("outfitDetails", filteredArr);
    console.log("🦕", filteredArr, store);
    setCount(remcount + 1);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            border: "1px solid grey",
            overflow: "hidden",
            height: "250px",
            width: "140px",
            margin: "4px",
          }}
        >
          <div class="single-item-container">
            <FontAwesomeIcon
              icon={faPlus}
              className="addtoOutfit"
              onClick={function (event) {
                addOutfitClick();
              }}
            />

            <h3 className="outfitheader">Add to Outfit</h3>
          </div>
        </div>
        <div className="chevleft" style={{ display: "flex" }}>
          <button className="prev" onClick={() => outfitScroll(-20)}>
            <FontAwesomeIcon icon={faChevronLeft} className="goLeft" />
          </button>
        </div>
        <div className="outfit-container" style={{ display: "flex" }}>
          {Array.isArray(items) && (
            <div
              className="items-container"
              ref={outfitRef}
              style={{ display: "flex" }}
            >
              {items.map((item, i) => (
                <div
                  className="single-item-container"
                  style={{
                    border: "1px solid grey",
                    display: "flex",
                    overflow: "hidden",
                    height: "250px",
                    width: "140px",
                    margin: "4px",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="remOutfit"
                    onClick={function (event) {
                      removeClick(item);
                    }}
                  />
                  <Card relatedId={item} />
                </div>
              ))}
            </div>
          )}
          <div className="chevleft" style={{ display: "flex" }}>
            <button className="next" onClick={() => outfitScroll(20)}>
              <FontAwesomeIcon icon={faChevronRight} className="goRight" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outfit;
