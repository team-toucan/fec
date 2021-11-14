import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProductStyleById } from "../../api";
import Name from "./Name.jsx";
import AddtoOutfit from "./AddtoOutfit.jsx";
import Card from "./Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

var store = require("store");
const items = store.get("outfitItems");

//go thru local storage and render items

const Outfit = (currentItemID) => {
  const outfitRef = React.useRef();
  const outfitScroll = (scrollOffset) => {
    outfitRef.current.scrollLeft += scrollOffset;
  };

  // console.log("IN OUTFIT", items);

  // const [showingitem, updateCurItem] = useState({ info: {} });
  // const [imgURL, updateImg] = useState({ img: {} });

  // useEffect(() => {
  //   const currentInfo = async () => {
  //     const currentResp = await getProductById(currentItemID);
  //     const curResponseInfo = currentResp.data;
  //     updateCurItem(curResponseInfo);
  //   };
  //   currentInfo();
  // }, []);

  //TODO: refactor item trains below into components
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            border: "1px solid blue",
            overflow: "hidden",
            height: "250px",
            width: "140px",
            margin: "4px",
          }}
        >
          <AddtoOutfit currentItemID={currentItemID} />
        </div>
        <div className="chevleft" style={{ display: "flex" }}>
          <button className="prev" onClick={() => outfitScroll(-20)}>
            <FontAwesomeIcon icon={faChevronLeft} className="goLeft" />
          </button>
        </div>
        <div className="outfit-container" style={{ display: "flex" }}>
          {items && (
            <div
              className="items-container"
              ref={outfitRef}
              style={{ display: "flex" }}
            >
              {items.map((item, i) => (
                <div
                  className="single-item-container"
                  style={{
                    border: "1px solid blue",
                    display: "flex",
                    overflow: "hidden",
                    height: "250px",
                    width: "140px",
                    margin: "4px",
                  }}
                >
                  <Card relatedId={item.id} />
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
